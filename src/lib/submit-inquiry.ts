import { supabase } from "@/integrations/supabase/client";
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/company";
import {
  bookingCleanLines,
  bookingEmailFields,
  bookingPlainText,
  contactEmailFields,
  contactPlainText,
} from "@/lib/inquiry-format";
import { submitNetlifyForm } from "@/lib/netlify-forms";

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

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface BookingSubmission {
  name: string;
  email: string;
  phone: string;
  preferredContact?: string;
  services?: string[];
  from?: string;
  destination?: string;
  departure?: string;
  return?: string;
  adults?: string | number;
  children?: string | number;
  cabin?: string;
  hotel?: string;
  vehicle?: string;
  driver?: string;
  packageTier?: string;
  notes?: string;
}

export interface SubmitResult {
  saved: boolean;
  emailed: boolean;
  netlify: boolean;
}

function flatFields(data: Record<string, string>) {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    if (value) out[key] = value;
  }
  return out;
}

/**
 * Email company inbox + customer thank-you (FormSubmit auto-reply).
 * First use may require activating FormSubmit via an email to COMPANY_EMAIL.
 */
async function tryEmail(
  customerName: string,
  customerEmail: string,
  subject: string,
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const body = new URLSearchParams();
    body.set("name", customerName);
    body.set("email", customerEmail);
    body.set("_subject", subject);
    body.set("_template", "table");
    body.set("_captcha", "false");
    body.set("_replyto", customerEmail);
    body.set("_autoresponse", buildAutoReplyMessage(customerName));
    for (const [key, value] of Object.entries(fields)) {
      if (value) body.set(key, value);
    }

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

    const result = await response.json().catch(() => ({} as any));
    if (!response.ok) {
      console.error("FormSubmit HTTP error", response.status, result);
      return false;
    }
    // FormSubmit returns success:false until the inbox is activated
    if (result?.success === false) {
      console.error("FormSubmit rejected", result);
      return false;
    }
    return true;
  } catch (error) {
    console.error("FormSubmit email failed", error);
    return false;
  }
}

async function trySaveContact(data: ContactSubmission): Promise<boolean> {
  try {
    const { data: id, error: rpcError } = await supabase.rpc(
      "submit_public_contact" as any,
      {
        p_name: data.name,
        p_email: data.email,
        p_phone: data.phone || null,
        p_subject: data.subject || null,
        p_message: data.message,
      },
    );

    if (!rpcError && id) return true;
    if (rpcError) console.error("submit_public_contact RPC failed", rpcError);

    const { error: msgError } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      subject: data.subject || null,
      message: data.message,
    });
    if (!msgError) return true;

    const { error: bookingError } = await supabase.from("bookings").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      destination: data.subject || "Contact inquiry",
      notes: data.message,
      payload: {
        type: "contact",
        subject: data.subject || "",
        message: data.message,
        phone: data.phone || "",
      } as any,
    });
    if (bookingError) console.error("contact fallback booking insert failed", bookingError);
    return !bookingError;
  } catch (error) {
    console.error("Supabase contact save failed", error);
    return false;
  }
}

async function trySaveBooking(data: BookingSubmission): Promise<boolean> {
  try {
    const travelDate =
      data.departure && /^\d{4}-\d{2}-\d{2}$/.test(String(data.departure))
        ? String(data.departure)
        : null;
    const adultsNum = Number(data.adults) || 0;
    const childrenNum = Number(data.children) || 0;
    const summary = bookingCleanLines(data);
    const payload = {
      type: "booking",
      summary,
      name: data.name,
      email: data.email,
      phone: data.phone,
      preferredContact: data.preferredContact || "",
      services: data.services || [],
      from: data.from || "",
      destination: data.destination || "",
      departure: data.departure || "",
      return: data.return || "",
      adults: data.adults || "",
      children: data.children || "",
      cabin: data.cabin || "",
      hotel: data.hotel || "",
      vehicle: data.vehicle || "",
      driver: data.driver || "",
      packageTier: data.packageTier || "",
      notes: data.notes || "",
    };

    const { data: id, error: rpcError } = await supabase.rpc(
      "submit_public_booking" as any,
      {
        p_name: data.name,
        p_email: data.email,
        p_phone: data.phone,
        p_destination: data.destination ?? null,
        p_travel_date: travelDate,
        p_travelers: adultsNum + childrenNum || null,
        p_notes: summary,
        p_payload: payload,
      },
    );

    if (!rpcError && id) return true;
    if (rpcError) console.error("submit_public_booking RPC failed", rpcError);

    const { error: bookingError } = await supabase.from("bookings").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      destination: data.destination ?? null,
      travel_date: travelDate,
      travelers: adultsNum + childrenNum || null,
      notes: summary,
      payload: payload as any,
    });
    if (!bookingError) return true;
    console.error("booking insert failed", bookingError);

    const destinationLabel = data.destination ? ` -> ${data.destination}` : "";
    const { error: msgError } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: `New booking: ${data.name}${destinationLabel}`,
      message: summary,
    });
    if (msgError) console.error("booking contact_messages fallback failed", msgError);
    return !msgError;
  } catch (error) {
    console.error("Supabase booking save failed", error);
    return false;
  }
}

export async function submitContactInquiry(data: ContactSubmission): Promise<SubmitResult> {
  const subject = data.subject?.trim()
    ? `New contact message - ${data.subject}`
    : `New contact message - ${data.name}`;

  const netlifyFields = flatFields({
    ...contactEmailFields(data),
    summary: contactPlainText(data),
  });
  const emailFields = flatFields(contactEmailFields(data));

  // Supabase save is required — otherwise Admin stays empty forever
  const saved = await trySaveContact(data);
  const [emailed, netlify] = await Promise.all([
    tryEmail(data.name, data.email, subject, emailFields),
    submitNetlifyForm("contact-inquiry", netlifyFields),
  ]);

  if (!saved) {
    throw new Error(
      "Your message could not be saved to the database. In Admin, open the red Database setup banner, click Copy SQL, run it in Supabase SQL Editor (project rvzmwmkdxhvlkmeqecto), then try again.",
    );
  }

  return { saved, emailed, netlify };
}

export async function submitBookingInquiry(data: BookingSubmission): Promise<SubmitResult> {
  const isPackage =
    (data.services || []).some((s) => /package/i.test(s)) || Boolean(data.packageTier);
  const destinationLabel = data.destination ? ` -> ${data.destination}` : "";
  const packageLabel = data.packageTier ? ` (${data.packageTier})` : "";
  const subject = isPackage
    ? `New package request: ${data.name}${packageLabel}${destinationLabel}`
    : `New booking: ${data.name}${destinationLabel}`;

  const netlifyFields = flatFields({
    ...bookingEmailFields(data),
    summary: bookingPlainText(data),
  });
  const emailFields = flatFields(bookingEmailFields(data));

  const saved = await trySaveBooking(data);
  const [emailed, netlify] = await Promise.all([
    tryEmail(data.name, data.email, subject, emailFields),
    submitNetlifyForm("booking-inquiry", netlifyFields),
  ]);

  if (!saved) {
    throw new Error(
      "Your request could not be saved to the database. In Admin, open the red Database setup banner, click Copy SQL, run it in Supabase SQL Editor (project rvzmwmkdxhvlkmeqecto), then try again.",
    );
  }

  return { saved, emailed, netlify };
}
