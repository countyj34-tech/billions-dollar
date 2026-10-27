import { useSiteOverrides } from "@/lib/site-store";
import { resolveContactInfo } from "@/lib/site-content";

export function WhatsAppButton() {
  const [overrides] = useSiteOverrides();
  const contact = resolveContactInfo(overrides);
  const number = contact.whatsapp.replace(/[^\d]/g, "");
  return (
    <a
      href={`https://wa.me/${number}?text=${encodeURIComponent(contact.whatsappMessage)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-transform"
      aria-label="WhatsApp us"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A10 10 0 0 0 2.4 17.32L1 23l5.85-1.53a10 10 0 0 0 4.79 1.22h.01a10 10 0 0 0 7.4-17.78ZM12 20.94a8.94 8.94 0 0 1-4.55-1.24l-.33-.2-3.47.91.93-3.38-.21-.35a8.94 8.94 0 1 1 7.63 4.26Zm5.16-6.7c-.28-.14-1.67-.83-1.93-.92-.26-.1-.45-.14-.64.14s-.74.92-.91 1.1c-.17.2-.34.22-.62.08-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.13-.57.13-.13.28-.34.42-.51.14-.17.19-.29.28-.48.1-.2.05-.36-.02-.5-.07-.14-.64-1.53-.87-2.1-.23-.55-.46-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.83 4.28.68.3 1.2.47 1.61.6.68.21 1.3.18 1.78.11.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z"/></svg>
    </a>
  );
}
