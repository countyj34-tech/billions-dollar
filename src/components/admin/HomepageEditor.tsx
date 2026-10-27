import {
  patchOverrides,
  useSiteOverrides,
  type HeroSlideOverride,
  type PopularDestinationOverride,
  type TravelStyleOverride,
} from "@/lib/site-store";
import {
  resolveHeroSlides,
  resolveHomeStats,
  resolvePopularDestinations,
  resolveQuickServices,
  resolveTravelStyles,
  resolveTrustStrip,
} from "@/lib/site-content";
import { confirmDelete } from "@/lib/delete-guard";
import { AdminInputStyles, Field, PageSectionFields, StringListEditor, UploadInput } from "@/components/admin/admin-ui";

export function HomepageEditor() {
  const [overrides] = useSiteOverrides();
  const slides = resolveHeroSlides(overrides);
  const styles = resolveTravelStyles(overrides);
  const popular = resolvePopularDestinations(overrides);
  const quickServices = resolveQuickServices(overrides);
  const trustStrip = resolveTrustStrip(overrides);
  const homeStats = resolveHomeStats(overrides);

  function saveSlides(next: HeroSlideOverride[]) {
    patchOverrides({ heroSlides: next });
  }
  function saveStyles(next: TravelStyleOverride[]) {
    patchOverrides({ travelStyles: next });
  }
  function savePopular(next: PopularDestinationOverride[]) {
    patchOverrides({ popularDestinations: next });
  }

  return (
    <div className="space-y-10 max-w-4xl">
      <section className="space-y-4">
        <h3 className="font-display text-lg text-navy">Hero CTAs</h3>
        <PageSectionFields sectionKey="home.hero" fields={["ctaText", "linkText"]} />
      </section>

      <section className="space-y-4 border-t pt-8">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg text-navy">Hero slider</h3>
          <button
            type="button"
            className="text-xs text-destructive"
            onClick={async () => {
              if (await confirmDelete("Reset hero slides to defaults?")) {
                patchOverrides({ heroSlides: undefined, heroImages: undefined });
              }
            }}
          >
            Reset slides
          </button>
        </div>
        {slides.map((s, i) => (
          <div key={i} className="border rounded-lg p-4 bg-card space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-navy">Slide {i + 1}</span>
              <button
                type="button"
                className="text-xs text-destructive"
                onClick={async () => {
                  if (await confirmDelete(`Delete slide ${i + 1}?`)) {
                    saveSlides(slides.filter((_, idx) => idx !== i));
                  }
                }}
              >
                Delete
              </button>
            </div>
            <input className="input" value={s.kicker} onChange={(e) => saveSlides(slides.map((x, idx) => (idx === i ? { ...x, kicker: e.target.value } : x)))} placeholder="Kicker" />
            <input className="input" value={s.title} onChange={(e) => saveSlides(slides.map((x, idx) => (idx === i ? { ...x, title: e.target.value } : x)))} placeholder="Title" />
            <textarea className="input" rows={2} value={s.subtitle} onChange={(e) => saveSlides(slides.map((x, idx) => (idx === i ? { ...x, subtitle: e.target.value } : x)))} placeholder="Subtitle" />
            <div className="flex items-start gap-3">
              {s.image && <img src={s.image} alt="" className="w-28 aspect-video object-cover rounded border" />}
              <UploadInput onUploaded={(url) => saveSlides(slides.map((x, idx) => (idx === i ? { ...x, image: url } : x)))} />
            </div>
          </div>
        ))}
        <button type="button" className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold" onClick={() => saveSlides([...slides, { kicker: "New slide", title: "Headline", subtitle: "Supporting text", image: slides[0]?.image }])}>
          + Add slide
        </button>
      </section>

      <section className="space-y-4 border-t pt-8">
        <StringListEditor
          label="Quick services bar (5 labels)"
          items={quickServices.map((s) => s.label)}
          onChange={(labels) => patchOverrides({ homeQuickServices: labels.map((label) => ({ label })) })}
        />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="home.travelStyles" fields={["kicker", "title", "linkText"]} />
        <h3 className="font-display text-lg text-navy">Travel style cards</h3>
        {styles.map((s, i) => (
          <div key={i} className="border rounded-lg p-4 bg-card space-y-3">
            <input className="input font-semibold" value={s.title} onChange={(e) => saveStyles(styles.map((x, idx) => (idx === i ? { ...x, title: e.target.value } : x)))} />
            <textarea className="input" rows={2} value={s.blurb} onChange={(e) => saveStyles(styles.map((x, idx) => (idx === i ? { ...x, blurb: e.target.value } : x)))} />
            <Field label="Primary image">
              <div className="flex items-start gap-3">
                {s.image && <img src={s.image} alt="" className="w-24 h-24 object-cover rounded border" />}
                <UploadInput onUploaded={(url) => saveStyles(styles.map((x, idx) => (idx === i ? { ...x, image: url } : x)))} />
              </div>
            </Field>
            <Field label="Secondary image (Instagram grid)">
              <div className="flex items-start gap-3">
                {s.image2 && <img src={s.image2} alt="" className="w-24 h-24 object-cover rounded border" />}
                <UploadInput onUploaded={(url) => saveStyles(styles.map((x, idx) => (idx === i ? { ...x, image2: url } : x)))} />
              </div>
            </Field>
          </div>
        ))}
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="home.aboutTeaser" fields={["kicker", "title", "body", "ctaText"]} />
        <Field label="About teaser stats">
          {homeStats.map((stat, i) => (
            <div key={i} className="grid grid-cols-2 gap-2 mb-2">
              <input className="input" value={stat.value} onChange={(e) => {
                const next = [...homeStats];
                next[i] = { ...stat, value: e.target.value };
                patchOverrides({ homeStats: next });
              }} placeholder="Value" />
              <input className="input" value={stat.label} onChange={(e) => {
                const next = [...homeStats];
                next[i] = { ...stat, label: e.target.value };
                patchOverrides({ homeStats: next });
              }} placeholder="Label" />
            </div>
          ))}
        </Field>
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="home.services" fields={["kicker", "title"]} />
        <PageSectionFields sectionKey="home.popularDestinations" fields={["kicker", "title", "badgeText", "linkText"]} />
        <PageSectionFields sectionKey="home.packages" fields={["kicker", "title", "badgeText", "ctaText"]} />
        <PageSectionFields sectionKey="home.testimonials" fields={["kicker", "title", "linkText"]} />
        <PageSectionFields sectionKey="home.instagram" fields={["kicker", "title", "body", "ctaText"]} />
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">Trust strip</h3>
        {trustStrip.map((item, i) => (
          <div key={i} className="p-3 border rounded bg-card grid sm:grid-cols-3 gap-2">
            <input className="input" value={item.icon} onChange={(e) => {
              const next = [...trustStrip];
              next[i] = { ...item, icon: e.target.value };
              patchOverrides({ homeTrustStrip: next });
            }} placeholder="Icon/emoji" />
            <input className="input" value={item.title} onChange={(e) => {
              const next = [...trustStrip];
              next[i] = { ...item, title: e.target.value };
              patchOverrides({ homeTrustStrip: next });
            }} placeholder="Title" />
            <input className="input" value={item.desc} onChange={(e) => {
              const next = [...trustStrip];
              next[i] = { ...item, desc: e.target.value };
              patchOverrides({ homeTrustStrip: next });
            }} placeholder="Description" />
          </div>
        ))}
      </section>

      <section className="space-y-4 border-t pt-8">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-navy">Popular destinations</h3>
          <button type="button" className="px-3 py-1.5 text-sm rounded-md bg-gradient-gold text-navy font-semibold" onClick={() => savePopular([...popular, { name: "New destination", desc: "", image: popular[0]?.image || "" }])}>
            + Add
          </button>
        </div>
        {popular.map((d, i) => (
          <div key={i} className="border rounded-lg p-4 bg-card space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-semibold">Card {i + 1}</span>
              <button type="button" className="text-xs text-destructive" onClick={async () => { if (await confirmDelete(`Delete "${d.name}"?`)) savePopular(popular.filter((_, idx) => idx !== i)); }}>Delete</button>
            </div>
            <input className="input" value={d.name} onChange={(e) => savePopular(popular.map((x, idx) => (idx === i ? { ...x, name: e.target.value } : x)))} />
            <textarea className="input" rows={2} value={d.desc} onChange={(e) => savePopular(popular.map((x, idx) => (idx === i ? { ...x, desc: e.target.value } : x)))} />
            <input className="input text-sm" placeholder="Link slug (optional)" value={d.linkSlug || ""} onChange={(e) => savePopular(popular.map((x, idx) => (idx === i ? { ...x, linkSlug: e.target.value } : x)))} />
            <div className="flex items-start gap-3">
              {d.image && <img src={d.image} alt="" className="w-24 h-20 object-cover rounded border" />}
              <UploadInput onUploaded={(url) => savePopular(popular.map((x, idx) => (idx === i ? { ...x, image: url } : x)))} />
            </div>
          </div>
        ))}
      </section>

      <AdminInputStyles />
    </div>
  );
}
