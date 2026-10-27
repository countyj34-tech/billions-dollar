import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Plane, Hotel, Car, User, Shield, Briefcase, MapPin, Calendar,
  Users, Sparkles, Check, ChevronRight, Send, Phone, Mail,
} from "lucide-react";
import plane from "@/assets/plane.jpg";
import svcFlight from "@/assets/service-flight.jpg";
import svcHotel from "@/assets/service-hotel.jpg";
import svcCar from "@/assets/service-car.jpg";
import svcDriver from "@/assets/service-driver.jpg";
import svcTour from "@/assets/service-tour.jpg";
import svcVisa from "@/assets/service-visa.jpg";
import { useSiteOverrides } from "@/lib/site-store";
import { resolveBookServices, resolveContactInfo, resolvePageSection } from "@/lib/site-content";
import { submitBookingInquiry } from "@/lib/submit-inquiry";
import { scrollToTop } from "@/lib/scroll-to-top";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Trip — Best Eastern Travel, Tours & Car Hire" },
      { name: "description", content: "Book flights, hotels, car hire with driver, tour packages and visa assistance with Best Eastern Travel. Your journey, our priority." },
      { property: "og:title", content: "Book Your Trip · Best Eastern Travel" },
      { property: "og:description", content: "One form. Flights, hotels, car hire, drivers, tours and visas — arranged end-to-end." },
    ],
  }),
  component: BookPage,
});

type ServiceKey = "flight" | "hotel" | "car" | "driver" | "tour" | "visa";

const SERVICES: { key: ServiceKey; label: string; icon: typeof Plane; desc: string; image: string; tag: string }[] = [
  { key: "flight", label: "Flight",       icon: Plane,     desc: "Local & international",  image: svcFlight, tag: "Global routes" },
  { key: "hotel",  label: "Hotel",        icon: Hotel,     desc: "Global accommodation",   image: svcHotel,  tag: "3★ to 5★ luxury" },
  { key: "car",    label: "Car Hire",     icon: Car,       desc: "Sedans · SUVs · vans",   image: svcCar,    tag: "Self-drive ready" },
  { key: "driver", label: "Driver",       icon: User,      desc: "Professional chauffeur", image: svcDriver, tag: "Vetted & trained" },
  { key: "tour",   label: "Tour Package", icon: Briefcase, desc: "Curated itineraries",    image: svcTour,   tag: "Handcrafted" },
  { key: "visa",   label: "Visa Assist",  icon: Shield,    desc: "Application support",    image: svcVisa,   tag: "End-to-end" },
];

function BookPage() {
  const [overrides] = useSiteOverrides();
  const contact = resolveContactInfo(overrides);
  const page = resolvePageSection(overrides, "book");
  const step1 = resolvePageSection(overrides, "book.step1");
  const step3 = resolvePageSection(overrides, "book.step3");
  const bulletItems = (page.body || "").split("|").filter(Boolean);
  const bookServices = resolveBookServices(overrides);
  const iconByKey: Record<string, typeof Plane> = {
    flight: Plane,
    hotel: Hotel,
    car: Car,
    driver: User,
    tour: Briefcase,
    visa: Shield,
  };
  const SERVICES = bookServices.map((s) => ({
    ...s,
    key: s.key as ServiceKey,
    icon: iconByKey[s.key] || Plane,
  })) as { key: ServiceKey; label: string; icon: typeof Plane; desc: string; image?: string; tag: string }[];
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [services, setServices] = useState<Record<ServiceKey, boolean>>({
    flight: true, hotel: false, car: false, driver: false, tour: false, visa: false,
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggle = (k: ServiceKey) => setServices((s) => ({ ...s, [k]: !s[k] }));
  const activeCount = Object.values(services).filter(Boolean).length;
  const skipInitialScroll = useRef(true);

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }
    scrollToTop("booking-form");
  }, [step, sent]);

  const submitBooking = async (form: HTMLFormElement) => {
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      preferredContact: String(fd.get("preferredContact") ?? ""),
      services: SERVICES.filter((s) => services[s.key]).map((s) => s.label),
      from: String(fd.get("from") ?? ""),
      destination: String(fd.get("destination") ?? ""),
      departure: String(fd.get("departure") ?? ""),
      return: String(fd.get("return") ?? ""),
      adults: String(fd.get("adults") ?? ""),
      children: String(fd.get("children") ?? ""),
      cabin: String(fd.get("cabin") ?? ""),
      hotel: String(fd.get("hotel") ?? ""),
      vehicle: String(fd.get("vehicle") ?? ""),
      driver: String(fd.get("driver") ?? ""),
      tripStyle: String(fd.get("tripStyle") ?? ""),
      notes: String(fd.get("notes") ?? ""),
    };
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitBookingInquiry(payload);
      setSent(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmitError(message || "Could not send your request. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO with plane background */}
      <section className="relative min-h-[70vh] -mt-20 overflow-hidden flex items-end">
        <img src={page.heroImage || plane} alt="" className="absolute inset-0 w-full h-full object-cover scale-105"/>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/60 to-navy-deep/95"/>

        {/* Faint dotted flight path */}
        <svg className="absolute top-1/3 left-0 right-0 opacity-40 pointer-events-none" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0 60 Q 300 5, 600 40 T 1200 20" stroke="var(--emerald)" strokeWidth="1.5" strokeDasharray="3 6" fill="none"/>
        </svg>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-32 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-emerald-brand font-semibold mb-5">
              <Sparkles size={14}/> {page.kicker}
            </div>
            <h1 className="font-display text-white text-5xl md:text-7xl leading-[1.02]">
              {page.title}
            </h1>
            <p className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed">
              {page.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
              {bulletItems.map((item) => (
                <span key={item} className="flex items-center gap-2"><Check size={16} className="text-emerald-brand"/> {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM CARD — overlaps hero */}
      <section className="relative -mt-16 pb-24 z-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div id="booking-form" className="bg-card rounded-[2rem] shadow-luxury border border-emerald-brand/20 overflow-hidden">
            {/* Progress bar */}
            <div className="border-b bg-navy text-white px-6 md:px-10 py-5 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
                {[
                  { n: 1, label: "Services" },
                  { n: 2, label: "Trip Details" },
                  { n: 3, label: "Your Info" },
                ].map((s, i) => (
                  <div key={s.n} className="flex items-center gap-2 md:gap-3">
                    <div className={`h-8 w-8 rounded-full grid place-items-center font-bold text-xs transition ${step >= s.n ? "bg-emerald-brand text-navy" : "bg-white/10 text-white/50"}`}>
                      {step > s.n ? <Check size={14}/> : s.n}
                    </div>
                    <span className={step >= s.n ? "text-white" : "text-white/50"}>{s.label}</span>
                    {i < 2 && <ChevronRight size={14} className="text-white/30 hidden md:block"/>}
                  </div>
                ))}
              </div>
              <div className="text-xs text-emerald-brand font-semibold tracking-widest uppercase">
                {activeCount} service{activeCount !== 1 && "s"} selected
              </div>
            </div>

            {sent ? (
              <div className="p-12 text-center">
                <div className="inline-grid place-items-center h-20 w-20 rounded-full bg-emerald-brand text-white mb-6">
                  <Check size={38} strokeWidth={3}/>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-navy">{page.successTitle}</h2>
                <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                  {page.successBody}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link to="/" className="rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold">Back to Home</Link>
                  <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-emerald-brand text-emerald-brand px-6 py-3 text-sm font-semibold hover:bg-emerald-brand hover:text-white transition">Message on WhatsApp</a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  const form = e.currentTarget;
                  if (!form.checkValidity()) {
                    form.reportValidity();
                    e.preventDefault();
                    return;
                  }
                  e.preventDefault();
                  if (step < 3) {
                    setStep((step + 1) as 1 | 2 | 3);
                    return;
                  }
                  submitBooking(form);
                }}
                className="p-6 md:p-10"
              >
                {/* STEP 1 — Services */}
                {step === 1 && (
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-navy">{step1.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{step1.subtitle}</p>

                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {SERVICES.map(({ key, label, icon: Icon, desc, image, tag }) => {
                        const on = services[key];
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => toggle(key)}
                            className={`group relative text-left rounded-2xl overflow-hidden border-2 transition-all bg-background ${
                              on
                                ? "border-emerald-brand shadow-luxury -translate-y-0.5"
                                : "border-border hover:border-emerald-brand/50 hover:-translate-y-0.5 hover:shadow-luxury"
                            }`}
                          >
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <img
                                src={image}
                                alt={label}
                                loading="lazy"
                                width={800}
                                height={500}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className={`absolute inset-0 transition ${on ? "bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" : "bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent"}`}/>
                              <div className={`absolute top-3 left-3 h-10 w-10 rounded-xl grid place-items-center backdrop-blur-md transition ${on ? "bg-emerald-brand text-white" : "bg-white/90 text-emerald-brand"}`}>
                                <Icon size={20}/>
                              </div>
                              <div className={`absolute top-3 right-3 h-7 w-7 rounded-full border-2 grid place-items-center backdrop-blur-md transition ${on ? "bg-emerald-brand border-emerald-brand text-white" : "bg-white/70 border-white/90"}`}>
                                {on && <Check size={15} strokeWidth={3}/>}
                              </div>
                              <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase font-semibold text-white/90">
                                {tag}
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="flex items-baseline justify-between gap-2">
                                <div className="font-display text-navy text-xl leading-tight">{label}</div>
                                {on && <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-brand">Selected</span>}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <StepNav
                      canBack={false}
                      nextDisabled={activeCount === 0}
                      nextLabel="Continue"
                    />
                  </div>
                )}

                {/* STEP 2 — Trip details (adapts to selected services) */}
                {step === 2 && (() => {
                  const s = services;
                  const anyRoute = s.flight || s.tour;
                  const hotelOnly = s.hotel && !anyRoute && !s.car && !s.driver && !s.visa;
                  const carOnly = (s.car || s.driver) && !anyRoute && !s.hotel && !s.visa;
                  const visaOnly = s.visa && !anyRoute && !s.hotel && !s.car && !s.driver;

                  const showFrom = anyRoute; // From only matters for flights/tours
                  const destLabel = visaOnly
                    ? "Destination country"
                    : hotelOnly
                    ? "City / Hotel location"
                    : carOnly
                    ? "Pickup city"
                    : "Destination";
                  const depLabel = hotelOnly
                    ? "Check-in date"
                    : carOnly
                    ? "Pickup date"
                    : visaOnly
                    ? "Intended travel date"
                    : "Departure";
                  const showReturn = !visaOnly;
                  const retLabel = hotelOnly
                    ? "Check-out date"
                    : carOnly
                    ? "Drop-off date"
                    : "Return";
                  const showTravelers = !visaOnly;
                  const adultsLabel = hotelOnly ? "Guests" : "Adults";

                  return (
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-navy">
                      {visaOnly ? "Tell us about your visa" : hotelOnly ? "Tell us about your stay" : carOnly ? "Tell us about your hire" : "Tell us about the trip"}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Rough details are fine — we'll refine everything together.</p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      {showFrom && (
                        <Field label="From" icon={MapPin}>
                          <input name="from" required placeholder="Lusaka, Zambia" className="input-brand"/>
                        </Field>
                      )}
                      <Field label={destLabel} icon={MapPin}>
                        <input name="destination" required placeholder={hotelOnly ? "Livingstone, Zambia" : "Dubai, UAE"} className="input-brand"/>
                      </Field>
                      <Field label={depLabel} icon={Calendar}>
                        <input name="departure" required type="date" className="input-brand"/>
                      </Field>
                      {showReturn && (
                        <Field label={retLabel} icon={Calendar}>
                          <input name="return" required={hotelOnly || carOnly} type="date" className="input-brand"/>
                        </Field>
                      )}
                      {showTravelers && (
                        <>
                          <Field label={adultsLabel} icon={Users}>
                            <input name="adults" required type="number" min={1} defaultValue={1} className="input-brand"/>
                          </Field>
                          <Field label="Children" icon={Users}>
                            <input name="children" type="number" min={0} defaultValue={0} className="input-brand"/>
                          </Field>
                        </>
                      )}

                      {s.flight && (
                        <Field label="Cabin class" icon={Plane}>
                          <select name="cabin" className="input-brand">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                          </select>
                        </Field>
                      )}
                      {s.hotel && (
                        <Field label="Hotel preference" icon={Hotel}>
                          <select name="hotel" className="input-brand">
                            <option>3-Star</option>
                            <option>4-Star</option>
                            <option>5-Star Luxury</option>
                            <option>Boutique / Resort</option>
                          </select>
                        </Field>
                      )}
                      {s.car && (
                        <Field label="Vehicle type" icon={Car}>
                          <select name="vehicle" className="input-brand">
                            <option>Sedan</option>
                            <option>SUV / 4x4</option>
                            <option>Executive</option>
                            <option>Minivan (7+ seats)</option>
                          </select>
                        </Field>
                      )}
                      {s.driver && (
                        <Field label="Driver service" icon={User}>
                          <select name="driver" className="input-brand">
                            <option>Airport transfer only</option>
                            <option>Half-day chauffeur</option>
                            <option>Full-day chauffeur</option>
                            <option>Multi-day tour driver</option>
                          </select>
                        </Field>
                      )}
                      {s.tour && (
                        <Field label="Trip style" icon={Briefcase}>
                          <select name="tripStyle" className="input-brand">
                            <option value="">Tell us what you have in mind…</option>
                            <option>Safari</option>
                            <option>Beach holiday</option>
                            <option>City break</option>
                            <option>Honeymoon</option>
                            <option>Family trip</option>
                            <option>Tailor-made</option>
                          </select>
                        </Field>
                      )}

                      <div className="sm:col-span-2">
                        <Field label="Special requests" icon={Sparkles}>
                          <textarea name="notes" rows={4} placeholder={visaOnly ? "Passport nationality, visa type, urgency…" : "Anniversary trip, dietary needs, accessibility, preferred airlines…"} className="input-brand resize-none"/>
                        </Field>
                      </div>
                    </div>

                    <StepNav onBack={() => setStep(1)} nextLabel="Continue"/>
                  </div>
                  );
                })()}

                {/* STEP 3 — Contact */}
                {step === 3 && (
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-navy">{step3.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{step3.subtitle}</p>

                    <div className="mt-8 grid sm:grid-cols-2 gap-5">
                      <Field label="Full name" icon={User}><input name="name" required placeholder="Jane Doe" className="input-brand"/></Field>
                      <Field label="Email" icon={Mail}><input name="email" required type="email" placeholder="you@email.com" className="input-brand"/></Field>
                      <Field label="Phone / WhatsApp" icon={Phone}><input name="phone" required placeholder="+260 …" className="input-brand"/></Field>
                      <Field label="Preferred contact" icon={Sparkles}>
                        <select name="preferredContact" className="input-brand">
                          <option>Email</option>
                          <option>WhatsApp</option>
                          <option>Phone call</option>
                        </select>
                      </Field>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 rounded-2xl bg-navy/5 border border-navy/10 p-6">
                      <div className="text-xs uppercase tracking-[0.25em] text-navy/60 font-semibold mb-3">Booking summary</div>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.filter(s => services[s.key]).map((s) => (
                          <span key={s.key} className="inline-flex items-center gap-1.5 bg-emerald-brand/15 text-emerald-brand border border-emerald-brand/30 rounded-full px-3 py-1.5 text-xs font-semibold">
                            <s.icon size={13}/> {s.label}
                          </span>
                        ))}
                        {activeCount === 0 && <span className="text-sm text-muted-foreground">No services selected</span>}
                      </div>
                    </div>

                    {submitError && (
                      <div className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive px-4 py-3 text-sm">
                        {submitError}
                      </div>
                    )}

                    <StepNav onBack={() => setStep(2)} nextLabel={submitting ? "Sending…" : "Submit Booking Request"} nextDisabled={submitting} isSubmit/>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Reassurance strip */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Trusted since 2006", sub: "IATA · AFTA · ZTA registered" },
              { icon: Sparkles, title: "Best-price guarantee", sub: "Consortium partnerships" },
              { icon: Phone, title: "Real humans, 24hr reply", sub: "Zambia-based consultants" },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-4 bg-card border rounded-2xl p-5">
                <div className="h-11 w-11 rounded-full bg-emerald-brand/15 text-emerald-brand grid place-items-center shrink-0"><f.icon size={20}/></div>
                <div>
                  <div className="font-display text-navy">{f.title}</div>
                  <div className="text-xs text-muted-foreground">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: typeof Plane; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-navy/70 uppercase tracking-wider mb-1.5">
        <Icon size={12} className="text-emerald-brand"/> {label}
      </span>
      {children}
    </label>
  );
}

function StepNav({
  onBack, canBack = true, nextLabel, nextDisabled = false, isSubmit = false,
}: {
  onBack?: () => void; canBack?: boolean; nextLabel: string; nextDisabled?: boolean; isSubmit?: boolean;
}) {
  return (
    <div className="mt-10 pt-6 border-t flex items-center justify-between gap-3 flex-wrap">
      {canBack && onBack ? (
        <button type="button" onClick={onBack} className="text-sm font-semibold text-navy hover:text-emerald-brand transition">
          ← Back
        </button>
      ) : <span/>}
      <button
        type="submit"
        disabled={nextDisabled}
        className="group relative overflow-hidden rounded-full bg-navy text-white font-semibold px-8 py-3.5 shadow-luxury hover:shadow-gold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
        <span className="relative flex items-center gap-2 group-hover:text-navy transition-colors">
          {nextLabel}
          {isSubmit ? <Send size={15}/> : <ChevronRight size={16}/>}
        </span>
      </button>
    </div>
  );
}
