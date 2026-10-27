export const NOT_PROVIDED = "Not provided";

export interface InquiryRow {
  label: string;
  value: string;
}

export interface InquirySection {
  title: string;
  rows: InquiryRow[];
}

export interface BookingLike {
  name?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
  services?: string[] | string;
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

export function readableField(value: unknown): string {
  if (value === undefined || value === null || value === "") return NOT_PROVIDED;
  if (Array.isArray(value)) return value.length ? value.join(", ") : NOT_PROVIDED;
  const text = String(value).trim();
  return text || NOT_PROVIDED;
}

export function bookingSections(data: BookingLike, options?: { includeEmpty?: boolean }): InquirySection[] {
  const includeEmpty = options?.includeEmpty ?? true;
  const mapRows = (rows: InquiryRow[]) =>
    includeEmpty ? rows : rows.filter((r) => r.value !== NOT_PROVIDED);

  return [
    {
      title: "Contact information",
      rows: mapRows([
        { label: "Full name", value: readableField(data.name) },
        { label: "Email address", value: readableField(data.email) },
        { label: "Phone / WhatsApp", value: readableField(data.phone) },
        { label: "Preferred contact method", value: readableField(data.preferredContact) },
      ]),
    },
    {
      title: "Services requested",
      rows: mapRows([{ label: "Services", value: readableField(data.services) }]),
    },
    {
      title: "Travel details",
      rows: mapRows([
        { label: "Departing from", value: readableField(data.from) },
        { label: "Destination", value: readableField(data.destination) },
        { label: "Departure date", value: readableField(data.departure) },
        { label: "Return date", value: readableField(data.return) },
        { label: "Number of adults", value: readableField(data.adults) },
        { label: "Number of children", value: readableField(data.children) },
      ]),
    },
    {
      title: "Preferences",
      rows: mapRows([
        { label: "Cabin class", value: readableField(data.cabin) },
        { label: "Hotel preference", value: readableField(data.hotel) },
        { label: "Vehicle type", value: readableField(data.vehicle) },
        { label: "Driver option", value: readableField(data.driver) },
        { label: "Package tier", value: readableField(data.packageTier) },
      ]),
    },
    {
      title: "Additional information",
      rows: mapRows([{ label: "Customer notes", value: readableField(data.notes) }]),
    },
  ].filter((s) => s.rows.length > 0);
}

/** Simple line-by-line text — only fields the customer filled in. */
export function bookingCleanLines(data: BookingLike): string {
  const lines: string[] = [];
  for (const section of bookingSections(data, { includeEmpty: false })) {
    for (const row of section.rows) {
      lines.push(`${row.label}: ${row.value}`);
    }
  }
  return lines.join("\n");
}

export function bookingPlainText(data: BookingLike): string {
  const filled = bookingCleanLines(data);
  return ["BOOKING REQUEST", "===============", "", filled].join("\n").trim();
}

export function contactPlainText(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): string {
  return [
    "CONTACT MESSAGE",
    "===============",
    "",
    "CONTACT INFORMATION",
    `Full name: ${readableField(data.name)}`,
    `Email address: ${readableField(data.email)}`,
    `Phone / WhatsApp: ${readableField(data.phone)}`,
    `Subject: ${readableField(data.subject)}`,
    "",
    "MESSAGE",
    readableField(data.message),
  ].join("\n");
}

/** Human-readable key/value pairs for email form posts (no snake_case, no JSON). */
export function bookingEmailFields(data: BookingLike): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const section of bookingSections(data)) {
    for (const row of section.rows) {
      fields[row.label] = row.value;
    }
  }
  fields.Summary = bookingPlainText(data);
  return fields;
}

export function contactEmailFields(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): Record<string, string> {
  return {
    "Full name": readableField(data.name),
    "Email address": readableField(data.email),
    "Phone / WhatsApp": readableField(data.phone),
    Subject: readableField(data.subject),
    Message: readableField(data.message),
    Summary: contactPlainText(data),
  };
}
