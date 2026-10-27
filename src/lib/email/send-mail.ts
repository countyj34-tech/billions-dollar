import { COMPANY_EMAIL } from "@/lib/company";
import { EMAIL_FROM, getResendApiKey, getSmtpConfig } from "./config";
import { sendInquiryViaFormSubmit } from "./formsubmit";

export interface MailPayload {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  customerName?: string;
}

export class EmailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailConfigError";
  }
}

export class EmailSendError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "EmailSendError";
    this.status = status;
  }
}

async function sendViaResend(payload: MailPayload, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.replyTo,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new EmailSendError(
      `Resend API error (${response.status}): ${body || response.statusText}`,
      response.status,
    );
  }
}

let smtpTransport: { sendMail: (opts: unknown) => Promise<unknown> } | null = null;

async function getSmtpTransport() {
  const smtp = getSmtpConfig();
  if (!smtp) return null;
  if (!smtpTransport) {
    const nodemailer = await import("nodemailer");
    smtpTransport = nodemailer.default.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });
  }
  return smtpTransport;
}

async function sendViaSmtp(payload: MailPayload) {
  const transport = await getSmtpTransport();
  if (!transport) {
    throw new EmailConfigError("SMTP is not configured");
  }

  await transport.sendMail({
    from: EMAIL_FROM,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
    text: payload.text,
    replyTo: payload.replyTo,
  });
}

async function sendViaFormSubmit(payload: MailPayload) {
  const isOwnerInbox = payload.to.toLowerCase() === COMPANY_EMAIL.toLowerCase();
  if (!isOwnerInbox) {
    throw new EmailSendError("FormSubmit can only notify the company inbox");
  }

  await sendInquiryViaFormSubmit({
    customerName: payload.customerName ?? payload.replyTo ?? "Website visitor",
    customerEmail: payload.replyTo ?? COMPANY_EMAIL,
    subject: payload.subject,
    fields: { message: payload.text },
    autoreply: Boolean(payload.replyTo),
  });
}

export async function sendMail(payload: MailPayload) {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase();
  const resendKey = getResendApiKey();
  const smtp = getSmtpConfig();

  if (provider === "resend") {
    if (!resendKey) {
      throw new EmailConfigError("EMAIL_PROVIDER=resend but RESEND_API_KEY is missing");
    }
    await sendViaResend(payload, resendKey);
    return;
  }

  if (provider === "smtp") {
    if (!smtp) {
      throw new EmailConfigError("EMAIL_PROVIDER=smtp but SMTP_PASS is missing");
    }
    await sendViaSmtp(payload);
    return;
  }

  if (smtp) {
    await sendViaSmtp(payload);
    return;
  }

  if (resendKey) {
    await sendViaResend(payload, resendKey);
    return;
  }

  await sendViaFormSubmit(payload);
}

export function isRateLimited(error: unknown) {
  return error instanceof EmailSendError && error.status === 429;
}

export function isForbidden(error: unknown) {
  return error instanceof EmailSendError && error.status === 403;
}

export { sendInquiryViaFormSubmit };
