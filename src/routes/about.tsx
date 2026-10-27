import { createFileRoute } from "@tanstack/react-router";
import { images, welcomeMessage, companyHistory, vision, mission, coreValues, processSteps, awards, valuedClients, whyChoose } from "@/lib/site-data";
import { useSiteOverrides } from "@/lib/site-store";
import {
  resolveAboutMd,
  resolveAwards,
  resolveCoreValues,
  resolvePageSection,
  resolveProcessSteps,
  resolveValuedClients,
  resolveWhyChoose,
} from "@/lib/site-content";
import { Award, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Best Eastern Travel, Tours & Car Hire" },
      { name: "description", content: "Established 2006 in Lusaka. IATA-accredited, award-winning travel management for government, corporate and individual travelers." },
    ],
  }),
  component: About,
});

function About() {
  const [overrides] = useSiteOverrides();
  const hero = resolvePageSection(overrides, "about");
  const welcome = resolvePageSection(overrides, "about.welcome");
  const historySection = resolvePageSection(overrides, "about.history");
  const coreSection = resolvePageSection(overrides, "about.coreValues");
  const processSection = resolvePageSection(overrides, "about.process");
  const whySection = resolvePageSection(overrides, "about.whyChoose");
  const accreditation = resolvePageSection(overrides, "about.accreditation");
  const awardsSection = resolvePageSection(overrides, "about.awards");
  const clientsSection = resolvePageSection(overrides, "about.clients");
  const md = resolveAboutMd(overrides);
  const aboutText = overrides.aboutText;
  const historyText = overrides.history || companyHistory;
  const visionText = overrides.vision || vision;
  const missionText = overrides.mission || mission;
  const core = resolveCoreValues(overrides);
  const process = resolveProcessSteps(overrides);
  const reasons = resolveWhyChoose(overrides);
  const awardList = resolveAwards(overrides);
  const clients = resolveValuedClients(overrides);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] -mt-20 overflow-hidden">
        <img src={hero.heroImage || images.lusaka} alt="Lusaka" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{hero.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{hero.title}</h1>
          <p className="text-white/80 mt-3 max-w-2xl">{hero.subtitle}</p>
        </div>
      </section>

      {/* MD WELCOME */}
      <section className="py-20 max-w-5xl mx-auto px-5 lg:px-10">
        <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{welcome.kicker}</div>
        <h2 className="font-display text-3xl md:text-4xl text-navy">{welcome.title}</h2>
        {aboutText ? (
          <div className="mt-6 whitespace-pre-wrap text-lg leading-relaxed text-foreground/85">{aboutText}</div>
        ) : (
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-[17px]">
            {welcomeMessage.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}
        <div className="mt-8 border-l-4 border-emerald-brand pl-5">
          <div className="font-display text-xl text-navy">{md.name || welcomeMessage.name}</div>
          <div className="text-sm text-muted-foreground tracking-wide uppercase">{md.title || welcomeMessage.title}</div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{historySection.kicker}</div>
          <h2 className="font-display text-3xl md:text-4xl text-navy">{historySection.title}</h2>
          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-[17px]">
            {historyText.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-7">
        <div className="p-10 rounded-2xl bg-navy text-white shadow-luxury">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Vision</div>
          <p className="text-lg leading-relaxed text-white/90">{visionText}</p>
        </div>
        <div className="p-10 rounded-2xl bg-gradient-emerald text-white shadow-luxury">
          <div className="text-xs tracking-[0.3em] uppercase text-white/80 mb-4">Our Mission</div>
          <p className="text-lg leading-relaxed">{missionText}</p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{coreSection.kicker}</div>
            <h2 className="font-display text-4xl text-navy">{coreSection.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {core.map((v, i) => (
              <div key={v.title} className="p-6 rounded-xl border bg-card hover:shadow-luxury transition">
                <div className="text-gold font-display text-3xl">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-lg text-navy mt-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{processSection.kicker}</div>
            <h2 className="font-display text-4xl text-navy">{processSection.title}</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((s) => (
              <div key={s.step} className="p-6 rounded-xl bg-white border">
                <div className="font-display text-4xl text-emerald-brand">{s.step}</div>
                <h3 className="font-display text-lg text-navy mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{whySection.kicker}</div>
          <h2 className="font-display text-4xl text-navy">{whySection.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {reasons.map((w) => (
            <div key={w.title} className="p-6 rounded-xl border bg-card">
              <Check className="text-emerald-brand" />
              <h3 className="font-display text-lg text-navy mt-3">{w.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATION & AWARDS */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{accreditation.kicker}</div>
              <h2 className="font-display text-4xl">{accreditation.title}</h2>
              <p className="mt-5 text-white/80 leading-relaxed text-lg">
                {accreditation.body}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20">
                <Award className="text-gold" /> <span className="font-semibold">{accreditation.badgeLabel}</span>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{awardsSection.kicker}</div>
              <h2 className="font-display text-4xl">{awardsSection.title}</h2>
              <p className="mt-3 text-white/70">{awardsSection.subtitle}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-2">
                {awardList.map((a, i) => (
                  <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gold text-xs tracking-widest">{a.year}</div>
                    <div className="font-semibold mt-1">{a.airline}</div>
                    <div className="text-sm text-white/70 mt-1">{a.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUED CLIENTS */}
      <section className="py-20 max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{clientsSection.kicker}</div>
          <h2 className="font-display text-4xl text-navy">{clientsSection.title}</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {clients.map((c) => (
            <div key={c} className="p-5 rounded-xl border bg-card flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-brand" />
              <span className="font-medium text-navy">{c}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
