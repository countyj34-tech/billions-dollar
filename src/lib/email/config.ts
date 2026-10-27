import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/company";

export const EMAIL_FROM =
  process.env.EMAIL_FROM ?? `${COMPANY_NAME} <${COMPANY_EMAIL}>`;

/** Yahoo SMTP defaults — only a password is needed to enable direct SMTP. */
export function getSmtpConfig() {
  const pass = process.env.SMTP_PASS?.trim();
  if (!pass) return null;

  const host = process.env.SMTP_HOST ?? "smtp.mail.yahoo.com";
  const user = process.env.SMTP_USER ?? COMPANY_EMAIL;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  return { host, port, secure, user, pass };
}

export function getResendApiKey() {
  return process.env.RESEND_API_KEY?.trim() || null;
}

/** FormSubmit works out of the box with the company Yahoo address. */
export function isEmailConfigured() {
  return true;
}

export function hasDirectMailProvider() {
  return Boolean(getSmtpConfig() || getResendApiKey());
}
