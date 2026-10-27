import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Compass, Mail, MapPin, Sparkles } from "lucide-react";
import { itineraries, itinerariesIntro } from "@/lib/itineraries";
import { images } from "@/lib/site-data";
import introImage from "@/assets/itineraries/classic-luxury/12-lioness.png";

export const Route = createFileRoute("/itineraries/")({
  head: () => ({
    meta: [
      { title: "Sample Itineraries — Best Eastern Travel" },
      {
        name: "description",
        content:
          "Tailor-made Zambia safari itineraries — from classic luxury wildlife experiences to exclusive bush camps and river safaris.",
      },
    ],
  }),
  component: ItinerariesIndex,
});

function ItinerariesIndex() {
  const available = itineraries.filter((it) => !it.comingSoon);
  const comingSoon = itineraries.filter((it) => it.comingSoon);
  const introParagraphs = itinerariesIntro.body.split("\n\n");

  return (
    <>
      <section className="relative h-[36vh] sm:h-[42vh] -mt-20 overflow-hidden">
        <img src={images.vicfalls2} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-7xl max-w-4xl leading-tight">
            {itinerariesIntro.title}
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Handcrafted Zambia safaris — luxury lodges, remote bush camps and unforgettable wildlife.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/20 border-b">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury">
              <img src={introImage} alt="Lioness on the Zambian savanna" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white/90 text-sm">Expertly planned journeys across Zambia&apos;s finest parks.</p>
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">About our itineraries</div>
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-6">
                Every trip is tailored to you
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                {introParagraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Compass, label: "Tailor-made planning" },
                  { icon: Sparkles, label: "Hand-picked lodges" },
                  { icon: Mail, label: "Custom quotes on request" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-navy">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-brand/10 text-emerald-brand">
                      <Icon size={16} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Browse itineraries</div>
            <h2 className="font-display text-3xl md:text-4xl text-navy">Available now</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Full day-by-day details, lodge information, inclusions and photography for each journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {available.map((it) => (
            <Link
              key={it.slug}
              to="/itineraries/$slug"
              params={{ slug: it.slug }}
              className="group rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-luxury transition-all"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={it.cardImage}
                  alt={it.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] tracking-widest uppercase bg-gold text-navy px-2.5 py-1 rounded-full font-semibold">
                    {it.nights} nights
                  </span>
                  <span className="text-[10px] tracking-widest uppercase bg-white/90 text-navy px-2.5 py-1 rounded-full font-semibold">
                    {it.destinations}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-white text-xl md:text-2xl leading-tight">{it.title}</h3>
                  {it.tagline && <p className="text-white/80 text-sm mt-2 line-clamp-2">{it.tagline}</p>}
                </div>
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{it.overview}</p>
                <span className="inline-flex items-center gap-1.5 text-emerald-brand font-semibold text-sm shrink-0">
                  View <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {comingSoon.length > 0 && (
        <section className="pb-20 max-w-7xl mx-auto px-5 lg:px-10">
          <div className="mb-8">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Coming soon</div>
            <h2 className="font-display text-2xl md:text-3xl text-navy">More journeys being added</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comingSoon.map((it) => (
              <article
                key={it.slug}
                className="rounded-xl overflow-hidden border bg-card/60 opacity-90"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={it.cardImage} alt={it.title} className="w-full h-full object-cover grayscale-[20%]" />
                  <div className="absolute inset-0 bg-navy/30" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 text-navy px-2 py-0.5 rounded-full font-semibold">
                    Coming soon
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {it.nights} nights
                    </span>
                    <span className="inline-flex items-center gap-1 min-w-0">
                      <MapPin size={12} className="shrink-0" />
                      <span className="truncate">{it.destinations}</span>
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-navy leading-snug">{it.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-4">Want a custom itinerary?</h2>
              <p className="text-white/75 text-lg leading-relaxed">
                These are sample journeys only. Tell us your dates, budget and interests — our specialists will
                design a personalised Zambia safari just for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <a
                href="mailto:besteasterntravel@yahoo.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10"
              >
                <Mail size={18} /> Email us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
