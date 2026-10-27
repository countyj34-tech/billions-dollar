import { useState, type ReactNode } from "react";
import {
  patchOverrides,
  uploadMedia,
  useSiteOverrides,
  type PackageOverride,
} from "@/lib/site-store";
import { resolvePackages } from "@/lib/site-content";
import { packages as defaultPackages } from "@/lib/site-data";
import { confirmDelete } from "@/lib/delete-guard";

const ACCENT_OPTIONS = [
  { label: "Navy", value: "from-[var(--navy)] to-[var(--navy-deep)]" },
  { label: "Emerald", value: "from-[var(--emerald-bright)] to-[var(--emerald)]" },
  { label: "Navy deep", value: "from-[var(--navy-deep)] to-[var(--navy)]" },
  { label: "Emerald + Navy", value: "from-[var(--emerald)] to-[var(--navy)]" },
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function UploadInput({
  accept,
  onUploaded,
}: {
  accept: string;
  onUploaded: (url: string) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  return (
    <div>
      <input
        type="file"
        accept={accept}
        disabled={busy}
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          setBusy(true);
          setErr(null);
          try {
            onUploaded(await uploadMedia(file));
          } catch (ex: unknown) {
            setErr(ex instanceof Error ? ex.message : "Upload failed");
          } finally {
            setBusy(false);
            e.target.value = "";
          }
        }}
      />
      {busy && <span className="text-xs text-muted-foreground ml-2">Uploading…</span>}
      {err && <p className="text-xs text-destructive mt-1">{err}</p>}
    </div>
  );
}

export function PackagesEditor() {
  const [overrides] = useSiteOverrides();
  const list = resolvePackages(overrides);

  function save(next: PackageOverride[]) {
    patchOverrides({ packages: next });
  }

  function update(i: number, patch: Partial<PackageOverride>) {
    save(list.map((p, idx) => (idx === i ? { ...p, ...patch } : p)));
  }

  async function remove(i: number) {
    if (await confirmDelete(`Delete package "${list[i]?.tier || ""}"?`)) {
      save(list.filter((_, idx) => idx !== i));
    }
  }

  function add() {
    save([
      ...list,
      {
        tier: "New Package",
        price: "Custom",
        features: ["Feature one"],
        accent: ACCENT_OPTIONS[0].value,
      },
    ]);
  }

  async function resetAll() {
    if (await confirmDelete("Reset all packages to defaults?")) {
      patchOverrides({ packages: undefined });
    }
  }

  const page = overrides.pageSections?.packages;

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4 border rounded-lg p-4 bg-card">
        <h3 className="font-display text-lg text-navy">Packages page header</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Kicker">
            <input
              className="input"
              defaultValue={page?.kicker ?? "Travel Packages"}
              onBlur={(e) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    packages: { ...page, kicker: e.target.value },
                  },
                })
              }
            />
          </Field>
          <Field label="Title">
            <input
              className="input"
              defaultValue={page?.title ?? "Four tiers. One promise."}
              onBlur={(e) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    packages: { ...page, title: e.target.value },
                  },
                })
              }
            />
          </Field>
        </div>
        <Field label="Hero image">
          <div className="flex items-start gap-4">
            {page?.heroImage && (
              <img src={page.heroImage} alt="" className="w-32 aspect-video object-cover rounded border" />
            )}
            <UploadInput
              accept="image/*"
              onUploaded={(url) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    packages: { ...page, heroImage: url },
                  },
                })
              }
            />
          </div>
        </Field>
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={add} className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold">
          + Add package
        </button>
        <button type="button" onClick={resetAll} className="px-4 py-2 text-sm rounded-md border">
          Reset to defaults
        </button>
      </div>

      <div className="space-y-5">
        {list.map((p, i) => (
          <div key={`${p.tier}-${i}`} className="border rounded-lg p-4 space-y-3 bg-card">
            <div className="flex justify-between items-start gap-3">
              <input
                className="input font-semibold"
                value={p.tier}
                onChange={(e) => update(i, { tier: e.target.value })}
              />
              <button type="button" onClick={() => remove(i)} className="text-destructive text-sm shrink-0">
                Delete
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Subtitle (e.g. Essentials)">
                <input
                  className="input"
                  value={p.price}
                  onChange={(e) => update(i, { price: e.target.value })}
                />
              </Field>
              <Field label="Accent bar">
                <select
                  className="input"
                  value={p.accent || ACCENT_OPTIONS[0].value}
                  onChange={(e) => update(i, { accent: e.target.value })}
                >
                  {ACCENT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!p.featured}
                onChange={(e) => update(i, { featured: e.target.checked })}
              />
              Signature / featured package
            </label>
            <Field label="Features (one per line)">
              <textarea
                className="input"
                rows={4}
                value={p.features.join("\n")}
                onChange={(e) =>
                  update(i, { features: e.target.value.split("\n").filter(Boolean) })
                }
              />
            </Field>
            <Field label="Card image (optional)">
              <div className="flex items-start gap-4">
                {p.image && (
                  <img src={p.image} alt="" className="w-24 h-24 object-cover rounded border" />
                )}
                <div className="space-y-2">
                  <UploadInput accept="image/*" onUploaded={(url) => update(i, { image: url })} />
                  {p.image && (
                    <button
                      type="button"
                      className="text-xs text-destructive"
                      onClick={() => update(i, { image: undefined })}
                    >
                      Remove image
                    </button>
                  )}
                </div>
              </div>
            </Field>
          </div>
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-sm text-muted-foreground">No packages. Add one or reset to defaults ({defaultPackages.length} tiers).</p>
      )}

      <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
    </div>
  );
}
