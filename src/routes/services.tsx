import { createFileRoute, Link } from "@tanstack/react-router";
import { services as defaultServices, images } from "@/lib/site-data";
import { useSiteOverrides } from "@/lib/site-store";
import { resolvePageSection } from "@/lib/site-content";
import { Globe2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Best Eastern Travel" },
      { name: "description", content: "Corporate travel management, luxury holidays, flights & hotels, visa assistance, safaris and VIP airport transfers." },
    ],
  }),
  component: Services,
});

function Services() {
  const [overrides] = useSiteOverrides();
  const page = resolvePageSection(overrides, "services");
  const services = overrides.services && overrides.services.length > 0 ? overrides.services : defaultServices;
  return (
    <>
      <section className="relative h-[50vh] -mt-20 overflow-hidden">
        <img src={page.heroImage || images.plane} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{page.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{page.title}</h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl border bg-card hover:shadow-luxury transition flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-gradient-emerald grid place-items-center text-white mb-5"><Globe2/></div>
              <h3 className="font-display text-2xl text-navy">{s.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
              {("items" in s) && Array.isArray((s as any).items) && (
                <ul className="mt-5 space-y-2 border-t pt-5">
                  {(s as any).items.map((it: string) => (
                    <li key={it} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-emerald-brand mt-0.5">✓</span> {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-7 py-3.5 shadow-gold">{page.ctaText}</Link>
        </div>
      </section>
    </>
  );
}
