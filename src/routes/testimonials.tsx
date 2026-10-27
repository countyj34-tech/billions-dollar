import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials as defaultTestimonials, images } from "@/lib/site-data";
import { useSiteOverrides } from "@/lib/site-store";
import { resolvePageSection } from "@/lib/site-content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Best Eastern Travel" },
      { name: "description", content: "Real stories from corporate clients, families and luxury travelers who've trusted Best Eastern Travel." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [overrides] = useSiteOverrides();
  const page = resolvePageSection(overrides, "testimonials");
  const list = overrides.testimonials && overrides.testimonials.length > 0 ? overrides.testimonials : defaultTestimonials;

  return (
    <>
      <section className="relative h-[45vh] -mt-20 overflow-hidden">
        <img src={page.heroImage || images.bali} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{page.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{page.title}</h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((t, i) => (
          <figure key={`${t.name}-${i}`} className="p-7 rounded-2xl border bg-card hover:shadow-luxury transition">
            <div className="flex gap-1 text-gold mb-3">{Array.from({length:5}).map((_,k)=>(<Star key={k} size={14} fill="currentColor"/>))}</div>
            <blockquote className="text-foreground/85 leading-relaxed italic">"{t.text}"</blockquote>
            <figcaption className="mt-5"><div className="font-semibold text-navy">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
