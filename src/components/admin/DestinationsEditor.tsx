import { useState, type ReactNode } from "react";
import { countryInfo } from "@/lib/countries";
import { mergeCountryInfo, resolveDestinationRegions, resolvePageSection } from "@/lib/site-content";
import {
  patchOverrides,
  uploadMedia,
  useSiteOverrides,
  type DestinationContentOverride,
  type DestinationRegionOverride,
} from "@/lib/site-store";
import { confirmDelete } from "@/lib/delete-guard";

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

export function DestinationsEditor() {
  const [overrides] = useSiteOverrides();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, DestinationContentOverride>>({});
  const [dirty, setDirty] = useState<Record<string, boolean>>({});
  const [savingSlug, setSavingSlug] = useState<string | null>(null);
  const [saveNote, setSaveNote] = useState<Record<string, string | null>>({});
  const imageMap = overrides.destinationImages || {};
  const contentMap = overrides.destinationContent || {};
  const regions = resolveDestinationRegions(overrides);
  const destinationsPage = resolvePageSection(overrides, "destinations");

  function draftFor(slug: string): DestinationContentOverride {
    return drafts[slug] ?? contentMap[slug] ?? {};
  }

  function setDraft(slug: string, patch: DestinationContentOverride) {
    setDrafts((prev) => {
      const current = prev[slug] ?? contentMap[slug] ?? {};
      return {
        ...prev,
        [slug]: {
          ...current,
          ...patch,
          facts: patch.facts ? { ...current.facts, ...patch.facts } : current.facts,
          attractions: patch.attractions
            ? { ...current.attractions, ...patch.attractions }
            : current.attractions,
          extraAttractions: patch.extraAttractions ?? current.extraAttractions,
          removedAttractions: patch.removedAttractions ?? current.removedAttractions,
        },
      };
    });
    setDirty((d) => ({ ...d, [slug]: true }));
    setSaveNote((n) => ({ ...n, [slug]: null }));
  }

  async function saveRegions(next: DestinationRegionOverride[]) {
    await patchOverrides({ destinationRegions: next });
  }

  async function setImage(
    slug: string,
    kind: "hero" | "attraction",
    url: string | undefined,
    attractionName?: string,
  ) {
    const current = imageMap[slug] || {};
    const next: { hero?: string; attractions?: Record<string, string>; gallery?: string[] } = {
      ...current,
    };
    if (kind === "hero") {
      if (url) next.hero = url;
      else delete next.hero;
    } else if (attractionName) {
      const atts = { ...(current.attractions || {}) };
      if (url) atts[attractionName] = url;
      else delete atts[attractionName];
      next.attractions = atts;
    }
    if (
      !next.hero &&
      (!next.attractions || Object.keys(next.attractions).length === 0) &&
      (!next.gallery || next.gallery.length === 0)
    ) {
      const clone = { ...imageMap };
      delete clone[slug];
      await patchOverrides({ destinationImages: clone });
    } else {
      await patchOverrides({ destinationImages: { ...imageMap, [slug]: next } });
    }
  }

  async function addGalleryImage(slug: string, url: string) {
    const current = imageMap[slug] || {};
    const gallery = [...(current.gallery || []), url];
    await patchOverrides({
      destinationImages: { ...imageMap, [slug]: { ...current, gallery } },
    });
  }

  async function removeGalleryImage(slug: string, index: number) {
    const current = imageMap[slug] || {};
    const gallery = (current.gallery || []).filter((_, i) => i !== index);
    const next = { ...current, gallery: gallery.length ? gallery : undefined };
    const hasAtts = next.attractions && Object.keys(next.attractions).length > 0;
    if (!next.hero && !hasAtts && !next.gallery?.length) {
      const clone = { ...imageMap };
      delete clone[slug];
      await patchOverrides({ destinationImages: clone });
    } else {
      await patchOverrides({ destinationImages: { ...imageMap, [slug]: next } });
    }
  }

  async function saveContent(slug: string, patch?: DestinationContentOverride) {
    const current = draftFor(slug);
    const nextDraft: DestinationContentOverride = patch
      ? {
          ...current,
          ...patch,
          facts: patch.facts ? { ...current.facts, ...patch.facts } : current.facts,
          attractions: patch.attractions
            ? { ...current.attractions, ...patch.attractions }
            : current.attractions,
          extraAttractions: patch.extraAttractions ?? current.extraAttractions,
          removedAttractions: patch.removedAttractions ?? current.removedAttractions,
        }
      : current;

    if (patch) {
      setDrafts((prev) => ({ ...prev, [slug]: nextDraft }));
      setDirty((d) => ({ ...d, [slug]: true }));
    }

    setSavingSlug(slug);
    setSaveNote((n) => ({ ...n, [slug]: null }));
    try {
      await patchOverrides({ destinationContent: { ...contentMap, [slug]: nextDraft } });
      setDrafts((prev) => ({ ...prev, [slug]: nextDraft }));
      setDirty((d) => ({ ...d, [slug]: false }));
      setSaveNote((n) => ({ ...n, [slug]: "Saved" }));
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setDrafts((prev) => ({ ...prev, [slug]: nextDraft }));
      setDirty((d) => ({ ...d, [slug]: false }));
      setSaveNote((n) => ({ ...n, [slug]: "Saved on this device" }));
      // Don't alert for expected offline/RLS fallback — content is already in UI + localStorage.
      if (!/SERVICE_ROLE|service_role|row-level security|Session expired|fetch failed/i.test(msg)) {
        console.warn("Destination save:", msg);
      }
    } finally {
      setSavingSlug(null);
    }
  }

  async function resetContent(slug: string) {
    const clone = { ...contentMap };
    delete clone[slug];
    await patchOverrides({ destinationContent: Object.keys(clone).length ? clone : undefined });
    setDrafts((prev) => {
      const next = { ...prev };
      delete next[slug];
      return next;
    });
    setDirty((d) => ({ ...d, [slug]: false }));
  }

  const countries = Object.values(countryInfo);

  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h3 className="font-display text-xl text-navy">Destinations</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Edit page copy and images for each country. Use <strong>+ Add attraction</strong>, then click{" "}
          <strong>Save</strong>.
        </p>
      </div>

      <div className="border rounded-lg p-4 bg-card space-y-4">
        <h4 className="font-semibold text-navy">Destinations index page</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Hero kicker">
            <input
              className="input"
              defaultValue={destinationsPage.kicker}
              onBlur={(e) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    destinations: { ...destinationsPage, kicker: e.target.value },
                  },
                })
              }
            />
          </Field>
          <Field label="Hero title">
            <input
              className="input"
              defaultValue={destinationsPage.title}
              onBlur={(e) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    destinations: { ...destinationsPage, title: e.target.value },
                  },
                })
              }
            />
          </Field>
        </div>
        <Field label="Hero image">
          <div className="flex items-start gap-3">
            {destinationsPage.heroImage && (
              <img src={destinationsPage.heroImage} alt="" className="w-32 aspect-video object-cover rounded border" />
            )}
            <UploadInput
              accept="image/*"
              onUploaded={(url) =>
                patchOverrides({
                  pageSections: {
                    ...overrides.pageSections,
                    destinations: { ...destinationsPage, heroImage: url },
                  },
                })
              }
            />
          </div>
        </Field>
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-navy">Regions & places</span>
            <button
              type="button"
              className="text-xs px-2 py-1 rounded bg-gradient-gold text-navy font-semibold"
              onClick={() => saveRegions([...regions, { region: "New Region", places: ["Place one"] }])}
            >
              + Add region
            </button>
          </div>
          {regions.map((r, ri) => (
            <div key={ri} className="p-3 border rounded space-y-2">
              <div className="flex justify-between gap-2">
                <input
                  className="input"
                  value={r.region}
                  onChange={(e) =>
                    saveRegions(regions.map((x, i) => (i === ri ? { ...x, region: e.target.value } : x)))
                  }
                />
                <button
                  type="button"
                  className="text-xs text-destructive shrink-0"
                  onClick={async () => {
                    if (await confirmDelete(`Delete region "${r.region}"?`)) {
                      saveRegions(regions.filter((_, i) => i !== ri));
                    }
                  }}
                >
                  Delete
                </button>
              </div>
              <textarea
                className="input"
                rows={3}
                placeholder="Places (one per line)"
                value={r.places.join("\n")}
                onChange={(e) =>
                  saveRegions(
                    regions.map((x, i) =>
                      i === ri ? { ...x, places: e.target.value.split("\n").filter(Boolean) } : x,
                    ),
                  )
                }
              />
              <div className="flex items-start gap-3">
                {r.image && <img src={r.image} alt="" className="w-20 h-16 object-cover rounded border" />}
                <UploadInput
                  accept="image/*"
                  onUploaded={(url) =>
                    saveRegions(regions.map((x, i) => (i === ri ? { ...x, image: url } : x)))
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {countries.map((c) => {
        const ov = imageMap[c.slug] || {};
        const content = draftFor(c.slug);
        const display = mergeCountryInfo(c, content);
        const isOpen = openSlug === c.slug;
        const extras = content.extraAttractions || [];
        const removed = content.removedAttractions || [];
        return (
          <div key={c.slug} className="border rounded-lg bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : c.slug)}
              className="w-full flex items-center gap-4 p-4 text-left hover:bg-navy/5"
            >
              <img src={ov.hero || c.heroImage} alt="" className="w-20 h-14 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold text-navy">{display.name}</div>
                <div className="text-xs text-muted-foreground">
                  {display.region} · {c.attractions.length + extras.length} attractions
                  {dirty[c.slug] ? " · unsaved" : ""}
                </div>
              </div>
              <span className="text-navy/40 text-xl">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="p-4 border-t space-y-6 bg-background">
                <div className="flex flex-wrap items-center justify-between gap-3 sticky top-0 z-10 bg-background py-2 border-b">
                  <div className="text-sm text-muted-foreground">
                    {saveNote[c.slug] === "Saved"
                      ? "Saved to site"
                      : dirty[c.slug]
                        ? "Unsaved changes"
                        : "Edit then click Save"}
                  </div>
                  <button
                    type="button"
                    disabled={savingSlug === c.slug}
                    className="px-5 py-2 rounded-md bg-emerald-brand text-white font-semibold text-sm disabled:opacity-60"
                    onClick={() => void saveContent(c.slug).catch(() => undefined)}
                  >
                    {savingSlug === c.slug ? "Saving…" : "Save"}
                  </button>
                </div>
                {saveNote[c.slug] && saveNote[c.slug] !== "Saved" && (
                  <p className="text-sm text-destructive">{saveNote[c.slug]}</p>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-navy">Page copy</div>
                    {contentMap[c.slug] && (
                      <button
                        type="button"
                        onClick={() => void resetContent(c.slug)}
                        className="text-xs text-destructive"
                      >
                        Reset all text to default
                      </button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Title">
                      <input
                        className="input"
                        value={display.name}
                        onChange={(e) => setDraft(c.slug, { name: e.target.value })}
                      />
                    </Field>
                    <Field label="Region label">
                      <input
                        className="input"
                        value={display.region}
                        onChange={(e) => setDraft(c.slug, { region: e.target.value })}
                      />
                    </Field>
                  </div>
                  <Field label="Hero description">
                    <textarea
                      className="input"
                      rows={4}
                      value={display.overview}
                      onChange={(e) => setDraft(c.slug, { overview: e.target.value })}
                    />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {Object.keys(c.facts).map((factKey) => (
                      <Field key={factKey} label={factKey}>
                        <input
                          className="input"
                          value={display.facts[factKey] || ""}
                          onChange={(e) => setDraft(c.slug, { facts: { [factKey]: e.target.value } })}
                        />
                      </Field>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Section label">
                      <input
                        className="input"
                        value={display.whatToSeeLabel}
                        onChange={(e) => setDraft(c.slug, { whatToSeeLabel: e.target.value })}
                      />
                    </Field>
                    <Field label="Experiences heading">
                      <input
                        className="input"
                        value={display.experiencesHeading}
                        onChange={(e) => setDraft(c.slug, { experiencesHeading: e.target.value })}
                      />
                    </Field>
                  </div>
                  <Field label="Bottom CTA title">
                    <input
                      className="input"
                      value={display.ctaTitle}
                      onChange={(e) => setDraft(c.slug, { ctaTitle: e.target.value })}
                    />
                  </Field>
                  <Field label="Bottom CTA text">
                    <textarea
                      className="input"
                      rows={3}
                      value={display.ctaBody}
                      onChange={(e) => setDraft(c.slug, { ctaBody: e.target.value })}
                    />
                  </Field>
                </div>

                <div className="space-y-4 border-t pt-5">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <div className="text-sm font-semibold text-navy">Attractions</div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Add places like Kafue — name, description, and image.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="px-3 py-2 rounded-md border border-emerald-brand text-emerald-brand font-semibold text-sm"
                        onClick={() => {
                          const nextExtras = [
                            ...extras,
                            {
                              name: "",
                              description: "",
                              image: undefined as string | undefined,
                            },
                          ];
                          setDraft(c.slug, { extraAttractions: nextExtras });
                          void saveContent(c.slug, { extraAttractions: nextExtras }).catch(() => undefined);
                          requestAnimationFrame(() => {
                            document
                              .getElementById(`extra-attraction-${c.slug}-${nextExtras.length - 1}`)
                              ?.scrollIntoView({ behavior: "smooth", block: "center" });
                          });
                        }}
                      >
                        + Add attraction
                      </button>
                      <button
                        type="button"
                        disabled={savingSlug === c.slug}
                        className="px-4 py-2 rounded-md bg-navy text-white font-semibold text-sm disabled:opacity-60"
                        onClick={() => void saveContent(c.slug).catch(() => undefined)}
                      >
                        {savingSlug === c.slug ? "Saving…" : "Save"}
                      </button>
                    </div>
                  </div>
                  {c.attractions.map((a) => {
                    if (removed.includes(a.name)) return null;
                    return (
                      <div key={a.name} className="p-4 rounded-lg border bg-card space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Default highlight</div>
                          <button
                            type="button"
                            className="text-xs text-destructive"
                            onClick={async () => {
                              if (await confirmDelete(`Hide "${a.name}" from the public page?`)) {
                                setDraft(c.slug, { removedAttractions: [...removed, a.name] });
                              }
                            }}
                          >
                            Hide
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="shrink-0">
                            <img
                              src={content.attractions?.[a.name]?.image || ov.attractions?.[a.name] || a.image}
                              alt=""
                              className="w-full sm:w-40 aspect-[4/3] object-cover rounded-md border"
                            />
                            <div className="mt-2">
                              <UploadInput
                                accept="image/*"
                                onUploaded={(url) => {
                                  setDraft(c.slug, {
                                    attractions: { [a.name]: { image: url } },
                                  });
                                  void setImage(c.slug, "attraction", url, a.name);
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex-1 space-y-3">
                            <Field label="Attraction name">
                              <input
                                className="input"
                                value={content.attractions?.[a.name]?.name ?? a.name}
                                onChange={(e) =>
                                  setDraft(c.slug, {
                                    attractions: { [a.name]: { name: e.target.value } },
                                  })
                                }
                              />
                            </Field>
                            <Field label="Description">
                              <textarea
                                className="input"
                                rows={3}
                                value={content.attractions?.[a.name]?.description ?? a.description}
                                onChange={(e) =>
                                  setDraft(c.slug, {
                                    attractions: { [a.name]: { description: e.target.value } },
                                  })
                                }
                              />
                            </Field>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {extras.map((extra, ei) => (
                    <div
                      key={`extra-${ei}`}
                      id={`extra-attraction-${c.slug}-${ei}`}
                      className="p-4 rounded-lg border-2 border-emerald-brand/40 bg-card space-y-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-semibold text-emerald-brand uppercase tracking-wide">
                          New attraction {ei + 1}
                        </div>
                        <button
                          type="button"
                          className="text-xs text-destructive"
                          onClick={async () => {
                            if (await confirmDelete(`Delete attraction "${extra.name || "untitled"}"?`)) {
                              const next = extras.filter((_, i) => i !== ei);
                              setDraft(c.slug, { extraAttractions: next });
                              void saveContent(c.slug, { extraAttractions: next }).catch(() => undefined);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="shrink-0">
                          {extra.image ? (
                            <img
                              src={extra.image}
                              alt=""
                              className="w-full sm:w-40 aspect-[4/3] object-cover rounded-md border"
                            />
                          ) : (
                            <div className="w-full sm:w-40 aspect-[4/3] rounded-md border border-dashed flex items-center justify-center text-xs text-muted-foreground bg-muted/30">
                              No image yet
                            </div>
                          )}
                          <div className="mt-2 space-y-1">
                            <div className="text-xs font-semibold text-navy">Upload image</div>
                            <UploadInput
                              accept="image/*"
                              onUploaded={(url) => {
                                const next = [...extras];
                                next[ei] = { ...next[ei], image: url };
                                setDraft(c.slug, { extraAttractions: next });
                                void saveContent(c.slug, { extraAttractions: next }).catch(() => undefined);
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <Field label="Attraction name">
                            <input
                              className="input"
                              placeholder="e.g. Kafue National Park"
                              value={extra.name}
                              onChange={(e) => {
                                const next = [...extras];
                                next[ei] = { ...next[ei], name: e.target.value };
                                setDraft(c.slug, { extraAttractions: next });
                              }}
                            />
                          </Field>
                          <Field label="Description">
                            <textarea
                              className="input"
                              rows={4}
                              placeholder="Describe this place or experience…"
                              value={extra.description}
                              onChange={(e) => {
                                const next = [...extras];
                                next[ei] = { ...next[ei], description: e.target.value };
                                setDraft(c.slug, { extraAttractions: next });
                              }}
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  ))}
                  {removed.length > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Hidden: {removed.join(", ")}.{" "}
                      <button
                        type="button"
                        className="text-emerald-brand underline"
                        onClick={() => setDraft(c.slug, { removedAttractions: [] })}
                      >
                        Restore all
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3 border-t pt-4">
                  <button
                    type="button"
                    disabled={savingSlug === c.slug}
                    className="px-5 py-2 rounded-md bg-emerald-brand text-white font-semibold text-sm disabled:opacity-60"
                    onClick={() => void saveContent(c.slug).catch(() => undefined)}
                  >
                    {savingSlug === c.slug ? "Saving…" : "Save"}
                  </button>
                </div>

                <div className="space-y-4 border-t pt-5">
                  <div className="text-sm font-semibold text-navy">Images</div>
                  <div>
                    <div className="text-sm font-medium text-navy mb-2">Hero image</div>
                    <div className="flex items-start gap-4">
                      <img
                        src={ov.hero || c.heroImage}
                        className="w-40 aspect-[4/3] object-cover rounded-md border"
                        alt=""
                      />
                      <div className="flex-1 space-y-2">
                        <UploadInput accept="image/*" onUploaded={(url) => setImage(c.slug, "hero", url)} />
                        {ov.hero && (
                          <button
                            type="button"
                            onClick={() => setImage(c.slug, "hero", undefined)}
                            className="text-xs text-destructive"
                          >
                            Reset to default
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy mb-2">Attraction images</div>
                    <div className="space-y-4">
                      {c.attractions.map((a) => {
                        const current = ov.attractions?.[a.name];
                        return (
                          <div key={a.name} className="flex items-start gap-4 p-3 rounded border bg-card">
                            <img
                              src={current || a.image}
                              alt={a.name}
                              className="w-32 aspect-[4/3] object-cover rounded-md border"
                            />
                            <div className="flex-1">
                              <div className="font-semibold text-navy text-sm mb-2">{a.name}</div>
                              <UploadInput
                                accept="image/*"
                                onUploaded={(url) => setImage(c.slug, "attraction", url, a.name)}
                              />
                              {current && (
                                <button
                                  type="button"
                                  onClick={() => setImage(c.slug, "attraction", undefined, a.name)}
                                  className="text-xs text-destructive mt-1"
                                >
                                  Reset to default
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy mb-2">Extra gallery images</div>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {(ov.gallery || []).map((url, gi) => (
                        <div key={gi} className="relative aspect-video rounded border overflow-hidden">
                          <img src={url} alt="" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(c.slug, gi)}
                            className="absolute top-1 right-1 bg-destructive text-white text-xs px-1 rounded"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                    <UploadInput accept="image/*" onUploaded={(url) => addGalleryImage(c.slug, url)} />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
    </div>
  );
}
