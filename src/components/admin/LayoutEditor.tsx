import { patchOverrides, useSiteOverrides } from "@/lib/site-store";
import {
  resolveBrand,
  resolveFooter,
  resolveNavItems,
  resolveSocialLinks,
} from "@/lib/site-content";
import { AdminInputStyles, Field, StringListEditor } from "@/components/admin/admin-ui";
import type { NavItemOverride } from "@/lib/site-store";

export function LayoutEditor() {
  const [overrides] = useSiteOverrides();
  const brand = resolveBrand(overrides);
  const footer = resolveFooter(overrides);
  const nav = resolveNavItems(overrides);
  const social = resolveSocialLinks(overrides);

  function saveNav(next: NavItemOverride[]) {
    patchOverrides({ navItems: next });
  }

  function saveFooterLinks(next: NavItemOverride[]) {
    patchOverrides({ footer: { ...overrides.footer, exploreLinks: next } });
  }

  return (
    <div className="space-y-10 max-w-4xl">
      <section className="space-y-4">
        <h3 className="font-display text-lg text-navy">Brand & header</h3>
        <Field label="Brand name">
          <input
            className="input"
            defaultValue={brand.name}
            onBlur={(e) => patchOverrides({ brandName: e.target.value })}
          />
        </Field>
        <Field label="Brand subtitle (under logo)">
          <input
            className="input"
            defaultValue={brand.subtitle}
            onBlur={(e) => patchOverrides({ brandSubtitle: e.target.value })}
          />
        </Field>
        <Field label="Logo alt text">
          <input
            className="input"
            defaultValue={brand.logoAlt}
            onBlur={(e) => patchOverrides({ logoAlt: e.target.value })}
          />
        </Field>
        <Field label="Header CTA button">
          <input
            className="input"
            defaultValue={brand.headerCta}
            onBlur={(e) => patchOverrides({ headerCta: e.target.value })}
          />
        </Field>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">Navigation links</h3>
        {nav.map((item, i) => (
          <div key={i} className="grid sm:grid-cols-2 gap-2 p-3 border rounded bg-card">
            <input
              className="input"
              value={item.label}
              onChange={(e) =>
                saveNav(nav.map((x, idx) => (idx === i ? { ...x, label: e.target.value } : x)))
              }
              placeholder="Label"
            />
            <div className="flex gap-2">
              <input
                className="input flex-1"
                value={item.to}
                onChange={(e) =>
                  saveNav(nav.map((x, idx) => (idx === i ? { ...x, to: e.target.value } : x)))
                }
                placeholder="/path"
              />
              <button
                type="button"
                className="text-xs text-destructive px-2"
                onClick={() => saveNav(nav.filter((_, idx) => idx !== i))}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="text-sm text-emerald-brand font-semibold"
          onClick={() => saveNav([...nav, { to: "/", label: "New link" }])}
        >
          + Add nav link
        </button>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">Footer</h3>
        <Field label="Footer tagline">
          <textarea
            className="input"
            rows={3}
            defaultValue={footer.tagline}
            onBlur={(e) => patchOverrides({ footer: { ...overrides.footer, tagline: e.target.value } })}
          />
        </Field>
        <Field label="Copyright line">
          <input
            className="input"
            defaultValue={footer.copyright}
            onBlur={(e) => patchOverrides({ footer: { ...overrides.footer, copyright: e.target.value } })}
          />
        </Field>
        <Field label="Developer credit">
          <input
            className="input"
            defaultValue={footer.credit}
            onBlur={(e) => patchOverrides({ footer: { ...overrides.footer, credit: e.target.value } })}
          />
        </Field>
        <StringListEditor
          label="Footer explore links (label only — paths edited below)"
          items={footer.exploreLinks?.map((l) => l.label) || []}
          onChange={(labels) => {
            const links = footer.exploreLinks || [];
            saveFooterLinks(
              labels.map((label, i) => ({ label, to: links[i]?.to || "/" })),
            );
          }}
        />
        {(footer.exploreLinks || []).map((link, i) => (
          <Field key={i} label={`Link path: ${link.label}`}>
            <input
              className="input"
              defaultValue={link.to}
              onBlur={(e) => {
                const next = [...(footer.exploreLinks || [])];
                next[i] = { ...next[i], to: e.target.value };
                saveFooterLinks(next);
              }}
            />
          </Field>
        ))}
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">Social links</h3>
        <Field label="Facebook">
          <input
            className="input"
            defaultValue={social.facebook}
            onBlur={(e) =>
              patchOverrides({ socialLinks: { ...overrides.socialLinks, facebook: e.target.value } })
            }
          />
        </Field>
        <Field label="Instagram">
          <input
            className="input"
            defaultValue={social.instagram}
            onBlur={(e) =>
              patchOverrides({ socialLinks: { ...overrides.socialLinks, instagram: e.target.value } })
            }
          />
        </Field>
        <Field label="TikTok">
          <input
            className="input"
            defaultValue={social.tiktok}
            onBlur={(e) =>
              patchOverrides({ socialLinks: { ...overrides.socialLinks, tiktok: e.target.value } })
            }
          />
        </Field>
        <Field label="WhatsApp pre-filled message">
          <input
            className="input"
            defaultValue={overrides.whatsappMessage || ""}
            placeholder="Hi Best Eastern Travel, I'd like to plan a trip."
            onBlur={(e) => patchOverrides({ whatsappMessage: e.target.value })}
          />
        </Field>
      </section>

      <AdminInputStyles />
    </div>
  );
}
