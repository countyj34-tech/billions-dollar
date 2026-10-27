export type NetlifyFormName = "booking-inquiry" | "contact-inquiry";

/** POST to Netlify Forms (works on any Netlify deploy without API keys). */
export async function submitNetlifyForm(
  formName: NetlifyFormName,
  fields: Record<string, string>,
): Promise<boolean> {
  try {
    const params = new URLSearchParams();
    params.set("form-name", formName);
    for (const [key, value] of Object.entries(fields)) {
      if (value) params.set(key, value);
    }

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    return response.ok || response.status === 302;
  } catch (error) {
    console.error("Netlify form submit failed", error);
    return false;
  }
}
