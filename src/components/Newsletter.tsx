import { useState } from "react";
import { Mail, Tag, Map, Bell, Lock, Send } from "lucide-react";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveNewsletter } from "@/lib/site-content";

const benefitIcons = [Tag, Map, Bell];

export function Newsletter() {
  const [overrides] = useSiteOverrides();
  const nl = resolveNewsletter(overrides);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const benefits = nl.benefits || [];

  return (
    <section className="relative py-20 px-5 lg:px-10">
      <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-luxury border border-emerald-brand/20">
        <img src={nl.backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/92 to-white/40 dark:from-navy-deep/95 dark:via-navy-deep/85 dark:to-navy-deep/30" />

        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 p-8 md:p-14 lg:p-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-emerald-brand font-semibold mb-4">
              <span className="h-px w-8 bg-emerald-brand"/> {nl.kicker}
            </div>

            <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {nl.title}
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-3 my-6">
              <span className="h-px w-16 bg-emerald-brand/60"/>
              <Send size={16} className="text-emerald-brand rotate-45"/>
              <span className="h-px w-16 bg-emerald-brand/60"/>
            </div>

            <p className="text-navy/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {nl.body}
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
              className="mt-8 bg-white rounded-2xl p-2 shadow-luxury flex flex-col sm:flex-row gap-2 border border-emerald-brand/20 max-w-2xl mx-auto lg:mx-0 w-full"
            >
              <div className="flex-1 min-w-0 flex items-center gap-3 px-4 py-2">
                <Mail size={18} className="text-emerald-brand shrink-0"/>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={nl.placeholder}
                  className="flex-1 min-w-0 bg-transparent outline-none text-navy placeholder:text-navy/40 py-2"
                />
              </div>
              <button
                type="submit"
                className="group relative overflow-hidden bg-navy hover:bg-navy-deep text-white font-semibold tracking-[0.2em] uppercase text-sm px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
                <span className="relative group-hover:text-navy transition-colors">
                  {sent ? "Subscribed" : nl.buttonText}
                </span>
                <Send size={15} className="relative group-hover:text-navy transition-colors"/>
              </button>
            </form>

            {sent && (
              <p className="mt-3 text-sm text-emerald-brand font-medium">{nl.successMessage}</p>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              {benefits.map(({ title, sub }, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <div key={title} className="flex items-center gap-3 text-left">
                    <div className="h-10 w-10 rounded-full bg-emerald-brand/15 border border-emerald-brand/30 grid place-items-center shrink-0">
                      <Icon size={17} className="text-emerald-brand"/>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-navy leading-tight">{title}</div>
                      <div className="text-xs text-navy/60 leading-tight">{sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-navy/60">
              <Lock size={12} className="text-emerald-brand"/>
              {nl.privacyText}
            </div>
          </div>
          <div className="hidden lg:block"/>
        </div>
      </div>
    </section>
  );
}
