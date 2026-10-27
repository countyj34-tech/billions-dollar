import { patchOverrides, useSiteOverrides } from "@/lib/site-store";
import {
  resolveAboutMd,
  resolveAwards,
  resolveCoreValues,
  resolveProcessSteps,
  resolveValuedClients,
  resolveWhyChoose,
} from "@/lib/site-content";
import { companyHistory, mission, vision } from "@/lib/site-data";
import { AdminInputStyles, Field, PageSectionFields, StringListEditor } from "@/components/admin/admin-ui";
import type { AwardOverride, CoreValueOverride, ProcessStepOverride, WhyChooseOverride } from "@/lib/site-store";

export function AboutPageEditor() {
  const [overrides] = useSiteOverrides();
  const md = resolveAboutMd(overrides);
  const coreValues = resolveCoreValues(overrides);
  const processSteps = resolveProcessSteps(overrides);
  const awards = resolveAwards(overrides);
  const clients = resolveValuedClients(overrides);
  const whyChoose = resolveWhyChoose(overrides);

  return (
    <div className="space-y-10 max-w-4xl">
      <section className="space-y-4">
        <h3 className="font-display text-lg text-navy">Hero banner</h3>
        <PageSectionFields sectionKey="about" fields={["kicker", "title", "subtitle", "heroImage"]} />
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">MD welcome message</h3>
        <PageSectionFields sectionKey="about.welcome" fields={["kicker", "title"]} />
        <Field label="Welcome message body">
          <textarea
            className="input"
            rows={8}
            defaultValue={overrides.aboutText || ""}
            placeholder="Leave blank to use the default company welcome message."
            onBlur={(e) => patchOverrides({ aboutText: e.target.value })}
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="MD name">
            <input
              className="input"
              defaultValue={md.name}
              onBlur={(e) => patchOverrides({ aboutMdName: e.target.value })}
            />
          </Field>
          <Field label="MD title">
            <input
              className="input"
              defaultValue={md.title}
              onBlur={(e) => patchOverrides({ aboutMdTitle: e.target.value })}
            />
          </Field>
        </div>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">History</h3>
        <PageSectionFields sectionKey="about.history" fields={["kicker", "title"]} />
        <Field label="History body">
          <textarea
            className="input"
            rows={8}
            defaultValue={overrides.history || companyHistory}
            onBlur={(e) => patchOverrides({ history: e.target.value })}
          />
        </Field>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h3 className="font-display text-lg text-navy">Vision & mission</h3>
        <Field label="Vision">
          <textarea className="input" rows={4} defaultValue={overrides.vision || vision} onBlur={(e) => patchOverrides({ vision: e.target.value })} />
        </Field>
        <Field label="Mission">
          <textarea className="input" rows={4} defaultValue={overrides.mission || mission} onBlur={(e) => patchOverrides({ mission: e.target.value })} />
        </Field>
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.coreValues" fields={["kicker", "title"]} />
        <ListEditor
          label="Core values"
          items={coreValues}
          onChange={(next) => patchOverrides({ coreValues: next as CoreValueOverride[] })}
          renderItem={(item, i, update) => (
            <div className="space-y-2">
              <input className="input" value={item.title} onChange={(e) => update(i, { ...item, title: e.target.value })} placeholder="Title" />
              <textarea className="input" rows={2} value={item.desc} onChange={(e) => update(i, { ...item, desc: e.target.value })} placeholder="Description" />
            </div>
          )}
          newItem={() => ({ title: "New value", desc: "" })}
        />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.process" fields={["kicker", "title"]} />
        <ListEditor
          label="Process steps"
          items={processSteps}
          onChange={(next) => patchOverrides({ processSteps: next as ProcessStepOverride[] })}
          renderItem={(item, i, update) => (
            <div className="grid sm:grid-cols-3 gap-2">
              <input className="input" value={item.step} onChange={(e) => update(i, { ...item, step: e.target.value })} placeholder="01" />
              <input className="input sm:col-span-2" value={item.title} onChange={(e) => update(i, { ...item, title: e.target.value })} placeholder="Title" />
              <textarea className="input sm:col-span-3" rows={2} value={item.desc} onChange={(e) => update(i, { ...item, desc: e.target.value })} placeholder="Description" />
            </div>
          )}
          newItem={() => ({ step: "01", title: "New step", desc: "" })}
        />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.whyChoose" fields={["kicker", "title"]} />
        <ListEditor
          label="Why choose us"
          items={whyChoose}
          onChange={(next) => patchOverrides({ whyChoose: next as WhyChooseOverride[] })}
          renderItem={(item, i, update) => (
            <div className="space-y-2">
              <input className="input" value={item.title} onChange={(e) => update(i, { ...item, title: e.target.value })} />
              <textarea className="input" rows={2} value={item.desc} onChange={(e) => update(i, { ...item, desc: e.target.value })} />
            </div>
          )}
          newItem={() => ({ title: "New reason", desc: "" })}
        />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.accreditation" fields={["kicker", "title", "body", "badgeLabel"]} />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.awards" fields={["kicker", "title", "subtitle"]} />
        <ListEditor
          label="Awards"
          items={awards}
          onChange={(next) => patchOverrides({ awards: next as AwardOverride[] })}
          renderItem={(item, i, update) => (
            <div className="grid sm:grid-cols-3 gap-2">
              <input className="input" value={item.year} onChange={(e) => update(i, { ...item, year: e.target.value })} placeholder="Year" />
              <input className="input" value={item.airline} onChange={(e) => update(i, { ...item, airline: e.target.value })} placeholder="Airline" />
              <input className="input" value={item.title} onChange={(e) => update(i, { ...item, title: e.target.value })} placeholder="Award title" />
            </div>
          )}
          newItem={() => ({ year: "2026", airline: "Airline", title: "Award title" })}
        />
      </section>

      <section className="space-y-4 border-t pt-8">
        <PageSectionFields sectionKey="about.clients" fields={["kicker", "title"]} />
        <StringListEditor
          label="Valued client types"
          items={clients}
          onChange={(next) => patchOverrides({ valuedClients: next })}
          placeholder="New client type"
        />
      </section>

      <AdminInputStyles />
    </div>
  );
}

function ListEditor<T>({
  label,
  items,
  onChange,
  renderItem,
  newItem,
}: {
  label: string;
  items: T[];
  onChange: (next: T[]) => void;
  renderItem: (item: T, index: number, update: (index: number, item: T) => void) => React.ReactNode;
  newItem: () => T;
}) {
  function update(i: number, item: T) {
    onChange(items.map((x, idx) => (idx === i ? item : x)));
  }
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-navy">{label}</h4>
        <button type="button" className="text-xs text-emerald-brand font-semibold" onClick={() => onChange([...items, newItem()])}>
          + Add
        </button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="p-3 border rounded bg-card space-y-2">
          <div className="flex justify-end">
            <button type="button" className="text-xs text-destructive" onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
              Delete
            </button>
          </div>
          {renderItem(item, i, update)}
        </div>
      ))}
    </div>
  );
}
