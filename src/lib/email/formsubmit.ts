import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/company";

export function buildAutoReplyMessage(name?: string) {
  const greeting = name ? `Dear ${name},` : "Dear Valued Customer,";
  return `${greeting}

Thank you for contacting ${COMPANY_NAME}.

We've received your inquiry and one of our travel consultant will respond within the 24 hours.

If your request is urgent, please contact us directly by phone or Whatsapp.

Thank you for choosing ${COMPANY_NAME}. We look forward to assisting you with all your travel needs.

Warm regards,

${COMPANY_NAME}
For all your travel needs.`;
}

export interface FormSubmitPayload {
  customerName: string;
  customerEmail: string;
  subject: string;
  fields: Record<string, string>;
  autoreply?: boolean;
}

export class FormSubmitError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "FormSubmitError";
    this.status = status;
  }
}

function buildFormBody(payload: FormSubmitPayload) {
  const params = new URLSearchParams();
  params.set("name", payload.customerName);
  params.set("email", payload.customerEmail);
  params.set("_subject", payload.subject);
  params.set("_template", "table");
  params.set("_captcha", "false");
  params.set("_replyto", payload.customerEmail);

  for (const [key, value] of Object.entries(payload.fields)) {
    if (value) params.set(key, value);
  }

  if (payload.autoreply !== false) {
    params.set("_autoresponse", buildAutoReplyMessage(payload.customerName));
  }

  return params;
}

async function parseFormSubmitResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json().catch(() => ({}));
  }
  const text = await response.text().catch(() => "");
  return { success: response.ok, message: text };
}

/**
 * Sends inquiry to besteasterntravel@yahoo.com via FormSubmit ajax API.
 * First submission triggers a one-time activation email to that inbox.
 */
export async function sendInquiryViaFormSubmit(payload: FormSubmitPayload) {
  const body = buildFormBody(payload);

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body,
    },
  );

  const result = await parseFormSubmitResponse(response);

  if (!response.ok) {
    throw new FormSubmitError(
      `FormSubmit error (${response.status}): ${result?.message ?? response.statusText}`,
      response.status,
    );
  }

  if (result?.success === false) {
    throw new FormSubmitError(result?.message ?? "FormSubmit rejected the submission");
  }

  return result;
}
