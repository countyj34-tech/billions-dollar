import { patchOverrides, useSiteOverrides } from "@/lib/site-store";
import { resolveNewsletter } from "@/lib/site-content";
import { AdminInputStyles, Field, UploadInput } from "@/components/admin/admin-ui";

export function NewsletterEditor() {
  const [overrides] = useSiteOverrides();
  const nl = resolveNewsletter(overrides);
  const benefits = nl.benefits || [];

  function save(patch: Partial<typeof nl>) {
    patchOverrides({ newsletter: { ...overrides.newsletter, ...nl, ...patch } });
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <p className="text-sm text-muted-foreground">
        The newsletter block appears at the bottom of every public page.
      </p>
      <Field label="Kicker">
        <input className="input" defaultValue={nl.kicker} onBlur={(e) => save({ kicker: e.target.value })} />
      </Field>
      <Field label="Title">
        <input className="input" defaultValue={nl.title} onBlur={(e) => save({ title: e.target.value })} />
      </Field>
      <Field label="Body">
        <textarea className="input" rows={3} defaultValue={nl.body} onBlur={(e) => save({ body: e.target.value })} />
      </Field>
      <Field label="Email placeholder">
        <input className="input" defaultValue={nl.placeholder} onBlur={(e) => save({ placeholder: e.target.value })} />
      </Field>
      <Field label="Button text">
        <input className="input" defaultValue={nl.buttonText} onBlur={(e) => save({ buttonText: e.target.value })} />
      </Field>
      <Field label="Success message">
        <input className="input" defaultValue={nl.successMessage} onBlur={(e) => save({ successMessage: e.target.value })} />
      </Field>
      <Field label="Privacy text">
        <input className="input" defaultValue={nl.privacyText} onBlur={(e) => save({ privacyText: e.target.value })} />
      </Field>
      <Field label="Background image">
        <div className="flex items-start gap-3">
          {nl.backgroundImage && (
            <img src={nl.backgroundImage} alt="" className="w-32 aspect-video object-cover rounded border" />
          )}
          <UploadInput onUploaded={(url) => save({ backgroundImage: url })} />
        </div>
      </Field>

      <div className="space-y-3 border-t pt-6">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-navy">Benefits (3 items)</h4>
          <button
            type="button"
            className="text-xs text-emerald-brand font-semibold"
            onClick={() => save({ benefits: [...benefits, { title: "New benefit", sub: "" }] })}
          >
            + Add
          </button>
        </div>
        {benefits.map((b, i) => (
          <div key={i} className="grid sm:grid-cols-2 gap-2 p-3 border rounded bg-card">
            <input
              className="input"
              value={b.title}
              onChange={(e) => {
                const next = [...benefits];
                next[i] = { ...b, title: e.target.value };
                save({ benefits: next });
              }}
            />
            <div className="flex gap-2">
              <input
                className="input flex-1"
                value={b.sub}
                onChange={(e) => {
                  const next = [...benefits];
                  next[i] = { ...b, sub: e.target.value };
                  save({ benefits: next });
                }}
              />
              <button
                type="button"
                className="text-xs text-destructive px-2"
                onClick={() => save({ benefits: benefits.filter((_, idx) => idx !== i) })}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdminInputStyles />
    </div>
  );
}
