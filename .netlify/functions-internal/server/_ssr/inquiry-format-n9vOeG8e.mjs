//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-format-n9vOeG8e.js
var NOT_PROVIDED = "Not provided";
function readableField(value) {
	if (value === void 0 || value === null || value === "") return NOT_PROVIDED;
	if (Array.isArray(value)) return value.length ? value.join(", ") : NOT_PROVIDED;
	return String(value).trim() || "Not provided";
}
function bookingSections(data, options) {
	const includeEmpty = options?.includeEmpty ?? true;
	const mapRows = (rows) => includeEmpty ? rows : rows.filter((r) => r.value !== NOT_PROVIDED);
	return [
		{
			title: "Contact information",
			rows: mapRows([
				{
					label: "Full name",
					value: readableField(data.name)
				},
				{
					label: "Email address",
					value: readableField(data.email)
				},
				{
					label: "Phone / WhatsApp",
					value: readableField(data.phone)
				},
				{
					label: "Preferred contact method",
					value: readableField(data.preferredContact)
				}
			])
		},
		{
			title: "Services requested",
			rows: mapRows([{
				label: "Services",
				value: readableField(data.services)
			}])
		},
		{
			title: "Travel details",
			rows: mapRows([
				{
					label: "Departing from",
					value: readableField(data.from)
				},
				{
					label: "Destination",
					value: readableField(data.destination)
				},
				{
					label: "Departure date",
					value: readableField(data.departure)
				},
				{
					label: "Return date",
					value: readableField(data.return)
				},
				{
					label: "Number of adults",
					value: readableField(data.adults)
				},
				{
					label: "Number of children",
					value: readableField(data.children)
				}
			])
		},
		{
			title: "Preferences",
			rows: mapRows([
				{
					label: "Cabin class",
					value: readableField(data.cabin)
				},
				{
					label: "Hotel preference",
					value: readableField(data.hotel)
				},
				{
					label: "Vehicle type",
					value: readableField(data.vehicle)
				},
				{
					label: "Driver option",
					value: readableField(data.driver)
				},
				{
					label: "Package tier",
					value: readableField(data.packageTier)
				}
			])
		},
		{
			title: "Additional information",
			rows: mapRows([{
				label: "Customer notes",
				value: readableField(data.notes)
			}])
		}
	].filter((s) => s.rows.length > 0);
}
/** Simple line-by-line text — only fields the customer filled in. */
function bookingCleanLines(data) {
	const lines = [];
	for (const section of bookingSections(data, { includeEmpty: false })) for (const row of section.rows) lines.push(`${row.label}: ${row.value}`);
	return lines.join("\n");
}
function bookingPlainText(data) {
	return [
		"BOOKING REQUEST",
		"===============",
		"",
		bookingCleanLines(data)
	].join("\n").trim();
}
function contactPlainText(data) {
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
		readableField(data.message)
	].join("\n");
}
/** Human-readable key/value pairs for email form posts (no snake_case, no JSON). */
function bookingEmailFields(data) {
	const fields = {};
	for (const section of bookingSections(data)) for (const row of section.rows) fields[row.label] = row.value;
	fields.Summary = bookingPlainText(data);
	return fields;
}
function contactEmailFields(data) {
	return {
		"Full name": readableField(data.name),
		"Email address": readableField(data.email),
		"Phone / WhatsApp": readableField(data.phone),
		Subject: readableField(data.subject),
		Message: readableField(data.message),
		Summary: contactPlainText(data)
	};
}
//#endregion
export { contactPlainText as a, contactEmailFields as i, bookingEmailFields as n, bookingPlainText as r, bookingCleanLines as t };
