import { patchOverrides, useSiteOverrides } from "@/lib/site-store";
import { resolveBookServices } from "@/lib/site-content";
import { AdminInputStyles, Field, PageSectionFields, UploadInput } from "@/components/admin/admin-ui";
import type { BookServiceOverride } from "@/lib/site-store";

const PAGE_SECTIONS = [
  { key: "services", label: "Services page", fields: ["kicker", "title", "heroImage", "ctaText"] as const },
  { key: "contact", label: "Contact page hero", fields: ["kicker", "title", "heroImage", "secondaryTitle", "hours"] as const },
  { key: "contact.form", label: "Contact form", fields: ["kicker", "title", "subtitle", "successTitle", "successBody", "disclaimer"] as const },
  { key: "testimonials", label: "Testimonials page", fields: ["kicker", "title", "heroImage"] as const },
  { key: "blog", label: "Blog page", fields: ["kicker", "title", "heroImage", "secondaryTitle"] as const },
  { key: "book", label: "Book page hero", fields: ["kicker", "title", "subtitle", "heroImage", "body", "successTitle", "successBody"] as const },
  { key: "book.step1", label: "Book — step 1", fields: ["title", "subtitle"] as const },
  { key: "book.step2", label: "Book — step 2", fields: ["title", "subtitle"] as const },
  { key: "book.step3", label: "Book — step 3", fields: ["title", "subtitle"] as const },
];

export function PagesEditor() {
  const [overrides] = useSiteOverrides();
  const bookServices = resolveBookServices(overrides);

  return (
    <div className="space-y-10 max-w-4xl">
      <p className="text-sm text-muted-foreground">
        Edit hero banners and key copy for individual pages. Package and destination page heroes are under their own tabs.
      </p>

      {PAGE_SECTIONS.map(({ key, label, fields }) => (
        <section key={key} className="space-y-4 border rounded-lg p-4 bg-card">
          <h3 className="font-display text-lg text-navy">{label}</h3>
          <PageSectionFields sectionKey={key} fields={[...fields]} />
        </section>
      ))}

      <section className="space-y-4 border rounded-lg p-4 bg-card">
        <h3 className="font-display text-lg text-navy">Contact extras</h3>
        <Field label="Secondary phone">
          <input
            className="input"
            defaultValue={overrides.phone2 || ""}
            onBlur={(e) => patchOverrides({ phone2: e.target.value })}
          />
        </Field>
        <Field label="Google Maps embed URL">
          <input
            className="input"
            defaultValue={overrides.mapEmbedUrl || ""}
            placeholder="https://www.google.com/maps?q=…&output=embed"
            onBlur={(e) => patchOverrides({ mapEmbedUrl: e.target.value })}
          />
        </Field>
      </section>

      <section className="space-y-4 border rounded-lg p-4 bg-card">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-navy">Book page — service cards</h3>
          <button
            type="button"
            className="text-xs text-emerald-brand font-semibold"
            onClick={() =>
              patchOverrides({
                bookServices: [
                  ...bookServices,
                  { key: `svc-${Date.now()}`, label: "New service", desc: "", tag: "", image: bookServices[0]?.image },
                ],
              })
            }
          >
            + Add service
          </button>
        </div>
        {bookServices.map((s, i) => (
          <div key={s.key} className="p-3 border rounded space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-semibold">{s.label}</span>
              <button
                type="button"
                className="text-xs text-destructive"
                onClick={() => patchOverrides({ bookServices: bookServices.filter((_, idx) => idx !== i) })}
              >
                Delete
              </button>
            </div>
            <input
              className="input"
              value={s.label}
              onChange={(e) => {
                const next = [...bookServices];
                next[i] = { ...s, label: e.target.value };
                patchOverrides({ bookServices: next });
              }}
            />
            <input
              className="input"
              value={s.desc}
              onChange={(e) => {
                const next = [...bookServices];
                next[i] = { ...s, desc: e.target.value };
                patchOverrides({ bookServices: next });
              }}
              placeholder="Description"
            />
            <input
              className="input"
              value={s.tag}
              onChange={(e) => {
                const next = [...bookServices];
                next[i] = { ...s, tag: e.target.value };
                patchOverrides({ bookServices: next });
              }}
              placeholder="Tag"
            />
            <div className="flex items-start gap-3">
              {s.image && <img src={s.image} alt="" className="w-24 aspect-video object-cover rounded border" />}
              <UploadInput
                onUploaded={(url) => {
                  const next = [...bookServices];
                  next[i] = { ...s, image: url };
                  patchOverrides({ bookServices: next });
                }}
              />
            </div>
          </div>
        ))}
      </section>

      <AdminInputStyles />
    </div>
  );
}
