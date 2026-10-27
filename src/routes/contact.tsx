import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { images } from "@/lib/site-data";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveContactInfo, resolvePageSection } from "@/lib/site-content";
import { submitContactInquiry } from "@/lib/submit-inquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Best Eastern Travel, Tours & Car Hire" },
      { name: "description", content: "Get in touch with Best Eastern Travel in Lusaka, Zambia. Phone, WhatsApp, email and inquiry form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [overrides] = useSiteOverrides();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    setErr(null);
    try {
      await submitContactInquiry({
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        subject: String(fd.get("subject") || ""),
        message: String(fd.get("message") || ""),
      });
      setSent(true);
    } catch (ex: any) {
      setErr(ex.message || "Failed to send message");
    } finally {
      setBusy(false);
    }
  }
  const info = resolveContactInfo(overrides);
  const page = resolvePageSection(overrides, "contact");
  const form = resolvePageSection(overrides, "contact.form");
  const phone = info.phone;
  const email = info.email;
  const address = info.address;
  const wa = info.whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <section className="relative h-[45vh] -mt-20 overflow-hidden">
        <img src={page.heroImage || images.lusaka} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{page.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{page.title}</h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <h2 className="font-display text-3xl text-navy">{page.secondaryTitle}</h2>
          <p className="text-muted-foreground mt-3">{page.hours}</p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4"><div className="h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center"><Phone size={18}/></div>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div><a href={`tel:${phone}`} className="font-display text-lg text-navy">{phone}</a><div className="text-sm text-muted-foreground">{info.phone2}</div></div></li>
            <li className="flex gap-4"><div className="h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center"><Mail size={18}/></div>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div><a href={`mailto:${email}`} className="font-display text-lg text-navy break-all">{email}</a></div></li>
            <li className="flex gap-4"><div className="h-11 w-11 rounded-full bg-[#25D366]/15 text-[#128C7E] grid place-items-center font-bold">W</div>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div><a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="font-display text-lg text-navy">{info.whatsapp}</a></div></li>
            <li className="flex gap-4"><div className="h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center"><MapPin size={18}/></div>
              <div><div className="text-xs uppercase tracking-widest text-muted-foreground">Office</div><div className="text-foreground/85 max-w-xs">{address}</div></div></li>
          </ul>

          <div className="mt-10 rounded-2xl overflow-hidden border h-64">
            <iframe
              title="Office map"
              src={info.mapEmbedUrl}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative h-fit">
          <div className="absolute -inset-4 bg-gradient-to-br from-emerald-brand/20 via-transparent to-navy/10 blur-2xl rounded-3xl -z-10"/>
          <div className="bg-card border rounded-3xl p-8 lg:p-10 shadow-luxury relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-emerald opacity-10 rounded-full blur-3xl -translate-y-10 translate-x-10"/>
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-navy/10 rounded-full blur-3xl translate-y-10 -translate-x-10"/>

            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2">
                <span className="h-px w-8 bg-emerald-brand"/> {form.kicker}
              </div>
              <h3 className="font-display text-3xl text-navy">{form.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{form.subtitle}</p>

              {sent ? (
                <div className="mt-8 p-6 rounded-2xl bg-emerald-brand/10 border border-emerald-brand/30 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-brand text-white grid place-items-center shrink-0 font-bold">✓</div>
                  <div>
                    <div className="font-display text-lg text-navy">{form.successTitle}</div>
                    <div className="text-sm text-foreground/70">{form.successBody}</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Full name *</span>
                    <input name="name" required placeholder="Jane Doe" className="mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"/>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Email *</span>
                    <input name="email" required type="email" placeholder="you@email.com" className="mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"/>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Phone</span>
                    <input name="phone" placeholder="+260 …" className="mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"/>
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">Subject</span>
                    <input name="subject" placeholder="Flight / Tour / Visa" className="mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"/>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold text-navy/70 uppercase tracking-wider">How can we help? *</span>
                    <textarea name="message" rows={5} required placeholder="Tell us about your trip, dates, travelers…" className="mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition resize-none"/>
                  </label>
                  {err && <p className="sm:col-span-2 text-sm text-destructive">{err}</p>}
                  <button disabled={busy} className="sm:col-span-2 group relative overflow-hidden rounded-full bg-navy text-white font-semibold py-4 shadow-luxury hover:shadow-gold transition-all disabled:opacity-60">
                    <span className="absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
                    <span className="relative flex items-center justify-center gap-2 group-hover:text-navy transition-colors">
                      {busy ? "Sending…" : "Send Message"}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </span>
                  </button>
                  <p className="sm:col-span-2 text-[11px] text-center text-muted-foreground">{form.disclaimer}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
