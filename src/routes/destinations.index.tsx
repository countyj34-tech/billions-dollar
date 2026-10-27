import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveDestinationRegions, resolvePageSection } from "@/lib/site-content";
import { countryInfo, countrySlug } from "@/lib/countries";
import { prefetchImages } from "@/lib/prefetch-images";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations — Best Eastern Travel" },
      { name: "description", content: "Africa, Asia, Europe, Middle East, South America and luxury MSC cruises — 120+ destinations crafted for the discerning traveler." },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  const [overrides] = useSiteOverrides();
  const regions = resolveDestinationRegions(overrides);
  const page = resolvePageSection(overrides, "destinations");

  useEffect(() => {
    const urls = [
      page.heroImage,
      ...regions.map((region) => region.image),
      ...Object.values(countryInfo).flatMap((country) => [
        country.heroImage,
        ...country.attractions.map((item) => item.image),
      ]),
    ];
    prefetchImages(urls);
  }, [page.heroImage, regions]);

  return (
    <>
      <section className="relative -mt-20 overflow-hidden h-[38svh] min-h-[220px] max-h-[340px] sm:h-[46svh] sm:max-h-[420px] lg:h-[52svh] lg:max-h-[520px]">
        <img src={page.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{page.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{page.title}</h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10 space-y-16">
        {regions.map(({ region, places: list, image }) => (
          <div key={region} className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury bg-muted">
              <img src={image} alt={region} className="w-full h-full object-cover object-center"/>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"/>
              <div className="absolute bottom-6 left-6">
                <div className="text-xs tracking-[0.3em] uppercase text-gold mb-1">Region</div>
                <h2 className="font-display text-white text-4xl">{region}</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {list.map((place) => {
                const slug = countrySlug(place);
                const hasPage = !!countryInfo[slug];
                const inner = (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg">{place}</span>
                      <span className="text-emerald-brand group-hover:text-gold">→</span>
                    </div>
                    <div className="text-xs text-muted-foreground group-hover:text-white/60 mt-1">
                      {hasPage ? "Explore country guide" : "Tailored itineraries available"}
                    </div>
                  </>
                );
                const cls = "group block p-5 rounded-xl border bg-card hover:bg-navy hover:text-white transition-colors cursor-pointer";
                return hasPage ? (
                  <Link key={place} to="/destinations/$country" params={{ country: slug }} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <div key={place} className={cls}>{inner}</div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
