import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { getItinerary } from "@/lib/itineraries";

export const Route = createFileRoute("/itineraries/$slug")({
  head: ({ params }) => {
    const it = getItinerary(params.slug);
    const title = it ? `${it.nights} Nights — ${it.title}` : "Itinerary";
    return {
      meta: [
        { title: `${title} — Best Eastern Travel` },
        { name: "description", content: it?.overview ?? "Zambia safari itinerary" },
        ...(it?.heroImage ? [{ property: "og:image", content: it.heroImage }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const it = getItinerary(params.slug);
    if (!it || it.comingSoon) throw notFound();
    return it;
  },
  notFoundComponent: () => (
    <section className="min-h-[60vh] flex items-center justify-center py-24 px-5">
      <div className="text-center max-w-lg">
        <h1 className="font-display text-4xl text-navy mb-4">Itinerary not found</h1>
        <p className="text-muted-foreground mb-6">This itinerary is not available yet or the link may be incorrect.</p>
        <Link to="/itineraries" className="inline-block px-6 py-3 rounded-full bg-navy text-white">
          All itineraries
        </Link>
      </div>
    </section>
  ),
  component: ItineraryDetail,
});

type GalleryImage = { src: string; alt: string };

function ItineraryDetail() {
  const it = Route.useLoaderData();
  const galleryImages: GalleryImage[] = Array.from(
    new Map(it.sections.map((section) => [section.image, { src: section.image, alt: section.imageAlt }])).values(),
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);
  const [entered, setEntered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? galleryImages[activeIndex] : null;

  const goTo = useEffectEvent((nextIndex: number, dir: "next" | "prev") => {
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setActiveIndex(nextIndex);
  });

  const showNext = useEffectEvent(() => {
    if (activeIndex === null) return;
    goTo((activeIndex + 1) % galleryImages.length, "next");
  });

  const showPrev = useEffectEvent(() => {
    if (activeIndex === null) return;
    goTo((activeIndex - 1 + galleryImages.length) % galleryImages.length, "prev");
  });

  const closeLightbox = useEffectEvent(() => {
    setEntered(false);
    window.setTimeout(() => setActiveIndex(null), 220);
  });

  const openLightbox = (index: number) => {
    setDirection("next");
    setAnimKey((k) => k + 1);
    setActiveIndex(index);
    setEntered(false);
    requestAnimationFrame(() => setEntered(true));
  };

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const timer = window.setInterval(() => showNext(), 4500);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearInterval(timer);
    };
  }, [isOpen]);

  return (
    <>
      <section className="relative h-[40vh] sm:h-[46vh] -mt-20 overflow-hidden">
        <img src={it.heroImage} alt={it.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-navy/90" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <Link to="/itineraries" className="text-white/70 hover:text-gold text-sm mb-4 inline-block">
            ← All itineraries
          </Link>
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
            {it.nights} nights · {it.destinations}
          </div>
          <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl max-w-4xl">{it.title}</h1>
          {it.tagline && <p className="text-white/85 text-lg mt-4 max-w-2xl">{it.tagline}</p>}
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Overview</div>
            <p className="text-lg text-muted-foreground leading-relaxed">{it.overview}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {it.featuredCamps.map((camp) => (
              <div key={camp.name} className="p-5 rounded-xl border bg-card">
                <div className="text-xs tracking-widest uppercase text-emerald-brand mb-1">{camp.nights}</div>
                <div className="font-display text-xl text-navy">{camp.name}</div>
                {camp.note && <div className="text-sm text-muted-foreground mt-1">{camp.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          <article className="rounded-2xl border bg-card/80 p-6 md:p-8">
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Itinerary Details</div>
            <div className="space-y-9">
              {it.sections.map((section) => (
                <section key={section.heading}>
                  {section.kicker && (
                    <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2">
                      {section.kicker}
                    </div>
                  )}
                  <h2 className="font-display text-3xl md:text-4xl text-navy mb-5">{section.heading}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 50)}>{p}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-navy">
                          <Check size={16} className="text-emerald-brand mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="font-display text-2xl text-navy mb-5">Inclusions</h3>
                  <ul className="space-y-3">
                    {it.inclusions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <Check size={18} className="text-emerald-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border bg-card">
                  <h3 className="font-display text-2xl text-navy mb-5">Exclusions</h3>
                  <ul className="space-y-3">
                    {it.exclusions.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <X size={18} className="text-muted-foreground shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <aside>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="block w-full text-left rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-luxury transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <figure className="relative aspect-[4/3] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="lazy" />
                  </figure>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-navy text-white py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Request pricing for this itinerary</h2>
          <p className="text-white/75 mb-8">
            Contact us for rates, availability and a tailor-made version of this journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90"
            >
              Get a quote
            </Link>
            <Link
              to="/book"
              className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10"
            >
              Start planning
            </Link>
          </div>
        </div>
      </section>

      {activeImage && activeIndex !== null && (
        <div
          className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 ${
            entered ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={closeLightbox}
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            const end = e.changedTouches[0]?.clientX;
            touchStartX.current = null;
            if (start == null || end == null) return;
            const delta = end - start;
            if (Math.abs(delta) < 50) return;
            if (delta < 0) showNext();
            else showPrev();
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              key={animKey}
              src={activeImage.src}
              alt={activeImage.alt}
              className={`absolute inset-0 h-full w-full object-cover select-none ${
                direction === "next" ? "animate-gallery-next" : "animate-gallery-prev"
              }`}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/45 pointer-events-none" />
          </div>

          <button
            type="button"
            className="absolute top-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm px-4 py-2 text-white hover:bg-white/15 transition"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={16} /> Close
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black/35 backdrop-blur-sm px-4 py-1.5 text-white/90 text-sm tracking-wide">
            {activeIndex + 1} / {galleryImages.length}
          </div>

          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 max-w-2xl px-6 text-center text-white/90 text-sm sm:text-base">
            {activeImage.alt}
          </p>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm text-white hover:bg-white/15 flex items-center justify-center transition"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm text-white hover:bg-white/15 flex items-center justify-center transition"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
