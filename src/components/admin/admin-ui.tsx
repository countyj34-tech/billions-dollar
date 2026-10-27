import { useState, type ReactNode } from "react";
import { patchOverrides, uploadMedia, useSiteOverrides } from "@/lib/site-store";
import { resolvePageSection } from "@/lib/site-content";
import type { PageSectionOverride } from "@/lib/site-store";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}

export function UploadInput({
  accept = "image/*",
  onUploaded,
}: {
  accept?: string;
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

export function AdminInputStyles() {
  return (
    <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
  );
}

export function PageSectionFields({
  sectionKey,
  fields = ["kicker", "title", "subtitle", "body", "heroImage", "ctaText", "linkText", "hours", "successTitle", "successBody", "disclaimer", "badgeText", "secondaryTitle"],
}: {
  sectionKey: string;
  fields?: string[];
}) {
  const [overrides] = useSiteOverrides();
  const section = resolvePageSection(overrides, sectionKey);

  function save(patch: PageSectionOverride) {
    patchOverrides({
      pageSections: {
        ...overrides.pageSections,
        [sectionKey]: { ...section, ...patch },
      },
    });
  }

  const labels: Record<string, string> = {
    kicker: "Kicker",
    title: "Title",
    subtitle: "Subtitle",
    body: "Body text",
    heroImage: "Hero image",
    ctaText: "Button text",
    linkText: "Link text",
    hours: "Hours / helper text",
    successTitle: "Success title",
    successBody: "Success message",
    disclaimer: "Disclaimer",
    badgeText: "Badge text",
    secondaryTitle: "Secondary heading",
    secondaryBody: "Secondary body",
    badgeLabel: "Badge label",
  };

  return (
    <div className="space-y-3">
      {fields.map((f) => {
        if (f === "heroImage") {
          return (
            <Field key={f} label={labels[f]}>
              <div className="flex items-start gap-3">
                {section.heroImage && (
                  <img src={section.heroImage} alt="" className="w-28 aspect-video object-cover rounded border" />
                )}
                <UploadInput onUploaded={(url) => save({ heroImage: url })} />
              </div>
            </Field>
          );
        }
        const val = section[f as keyof PageSectionOverride] || "";
        const multiline = f === "body" || f === "successBody" || f === "disclaimer" || f === "secondaryBody";
        return (
          <Field key={f} label={labels[f] || f}>
            {multiline ? (
              <textarea
                className="input"
                rows={3}
                defaultValue={String(val)}
                onBlur={(e) => save({ [f]: e.target.value } as PageSectionOverride)}
              />
            ) : (
              <input
                className="input"
                defaultValue={String(val)}
                onBlur={(e) => save({ [f]: e.target.value } as PageSectionOverride)}
              />
            )}
          </Field>
        );
      })}
    </div>
  );
}

export function StringListEditor({
  label,
  items,
  onChange,
  placeholder = "New item",
}: {
  label: string;
  items: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-navy">{label}</h4>
        <button
          type="button"
          className="text-xs text-emerald-brand font-semibold"
          onClick={() => onChange([...items, placeholder])}
        >
          + Add
        </button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            className="input flex-1"
            value={item}
            onChange={(e) => onChange(items.map((x, idx) => (idx === i ? e.target.value : x)))}
          />
          <button
            type="button"
            className="text-xs text-destructive px-2"
            onClick={() => onChange(items.filter((_, idx) => idx !== i))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
