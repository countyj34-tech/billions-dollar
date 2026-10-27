import type { SupabaseClient } from "@supabase/supabase-js";
import { sendInquiryViaFormSubmit } from "./formsubmit";
import { sendMail, type MailPayload } from "./send-mail";

export interface DispatchEmailInput {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  customerName?: string;
  templateName: string;
  /** When false, failures are logged but not thrown. Default true. */
  required?: boolean;
}

export async function dispatchEmail(
  supabase: SupabaseClient,
  input: DispatchEmailInput,
): Promise<{ ok: boolean; messageId: string }> {
  const messageId = crypto.randomUUID();
  const recipient = input.to.toLowerCase();

  await supabase.from("email_send_log").insert({
    message_id: messageId,
    template_name: input.templateName,
    recipient_email: recipient,
    status: "pending",
  });

  try {
    const mailPayload: MailPayload = {
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
      customerName: input.customerName,
    };

    await sendMail(mailPayload);

    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: input.templateName,
      recipient_email: recipient,
      status: "sent",
    });

    return { ok: true, messageId };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);

    await supabase.from("email_send_log").insert({
      message_id: messageId,
      template_name: input.templateName,
      recipient_email: recipient,
      status: "failed",
      error_message: errorMsg.slice(0, 1000),
    });

    if (input.required !== false) throw error;
    return { ok: false, messageId };
  }
}

export { sendInquiryViaFormSubmit };
