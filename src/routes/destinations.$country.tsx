import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DestinationPhoto } from "@/components/DestinationPhoto";
import { countryInfo, type CountryInfo } from "@/lib/countries";
import { mergeCountryInfo } from "@/lib/site-content";
import { forcedCountryPhotos } from "@/lib/place-photos";
import { useSiteOverrides } from "@/lib/site-store";

export const Route = createFileRoute("/destinations/$country")({
  head: ({ params }) => {
    const info = countryInfo[params.country];
    const title = info ? `${info.name} — Best Eastern Travel` : "Destination — Best Eastern Travel";
    const desc = info?.overview ?? "Tailored itineraries with Best Eastern Travel.";
    const imageLinks = info
      ? [info.heroImage, ...info.attractions.map((item) => item.image)].map((href) => ({
          rel: "preload" as const,
          as: "image" as const,
          href,
        }))
      : [];
    return {
      meta: [
        { title },
        { name: "description", content: desc.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: desc.slice(0, 160) },
        { property: "og:type", content: "article" },
        ...(info?.heroImage ? [{ property: "og:image", content: info.heroImage }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: imageLinks,
    };
  },
  loader: ({ params }): CountryInfo => {
    const info = countryInfo[params.country];
    if (!info) throw notFound();
    return info;
  },
  notFoundComponent: () => (
    <section className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center max-w-lg px-6">
        <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Not found</div>
        <h1 className="font-display text-4xl mb-4">Destination not available</h1>
        <p className="text-muted-foreground mb-6">We don't have a detailed page for this destination yet — but we'd love to build a private itinerary for you.</p>
        <Link to="/destinations" className="inline-block px-6 py-3 rounded-full bg-navy text-white hover:bg-navy/90">Back to destinations</Link>
      </div>
    </section>
  ),
  errorComponent: () => (
    <section className="min-h-[60vh] flex items-center justify-center">
      <p className="text-muted-foreground">Something went wrong loading this destination.</p>
    </section>
  ),
  component: CountryPage,
});

function CountryPage() {
  const base = Route.useLoaderData() as CountryInfo;
  const [overrides] = useSiteOverrides();
  const info = mergeCountryInfo(base, overrides.destinationContent?.[base.slug]);
  const forced = forcedCountryPhotos[base.slug];
  const imgs = overrides.destinationImages?.[base.slug];
  const slowRemote = (url?: string) =>
    !!url && /wikimedia\.org|upload\.wikimedia/.test(url);
  const heroImage =
    forced?.hero ||
    (!slowRemote(imgs?.hero) ? imgs?.hero : undefined) ||
    info.heroImage;
  const attractions = info.attractions.map((a) => ({
    ...a,
    image:
      forced?.attractions?.[a.name] ||
      (!slowRemote(imgs?.attractions?.[a.name]) ? imgs?.attractions?.[a.name] : undefined) ||
      a.image,
  }));
  const gallery = imgs?.gallery || [];
  return (
    <>
      <section className="relative -mt-20 overflow-hidden h-[42svh] min-h-[240px] max-h-[360px] sm:h-[50svh] sm:max-h-[460px] lg:h-[58svh] lg:min-h-[340px] lg:max-h-[580px]">
        <DestinationPhoto src={heroImage} alt={info.name} fallback={info.heroImage} priority className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-navy/90" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12">
          <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3">{info.region}</div>
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{info.name}</h1>
          <p className="text-white/85 max-w-2xl mt-3 sm:mt-4 text-base sm:text-lg">{info.overview}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(info.facts).map(([k, v]) => (
          <div key={k} className="p-5 rounded-xl border bg-card">
            <div className="text-[10px] tracking-[0.25em] uppercase text-emerald-brand mb-2">{k}</div>
            <div className="font-display text-lg leading-snug">{v}</div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-8">
        <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{info.whatToSeeLabel}</div>
        <h2 className="font-display text-4xl md:text-5xl">{info.experiencesHeading}</h2>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-24 space-y-10">
        {attractions.map((a, i) => (
          <article
            key={a.name}
            className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury bg-muted">
              <DestinationPhoto
                src={a.image}
                alt={a.name}
                fallback={info.heroImage}
                priority
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2">Highlight {String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{a.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{a.description}</p>
            </div>
          </article>
        ))}
      </section>

      {gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-24">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Gallery</div>
          <h2 className="font-display text-3xl md:text-4xl mb-8">More from {info.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((src, gi) => (
              <div key={gi} className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-xl shadow-luxury bg-muted">
                <DestinationPhoto src={src} alt={`${info.name} gallery`} className="hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Ready when you are</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">{info.ctaTitle}</h2>
          <p className="text-white/75 mb-8">{info.ctaBody}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book" className="px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90">Start planning</Link>
            <Link to="/destinations" className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white/10">All destinations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
