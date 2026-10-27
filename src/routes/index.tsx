import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Plane, Building2, Briefcase, Car, Luggage, Globe2, Star } from "lucide-react";
import { useSiteOverrides } from "@/lib/site-store";
import {
  resolveContactInfo,
  resolveHeroSlides,
  resolveHomeStats,
  resolveInstagramImages,
  resolvePageSection,
  resolveTravelStyles,
  resolveTrustStrip,
  resolveQuickServices,
  resolveServices,
  resolveTestimonials,
  resolvePopularDestinations,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Eastern Travel — Luxury Travel from Lusaka to the World" },
      { name: "description", content: "Premium corporate, luxury and leisure travel. Flights, hotels, safaris, visas and VIP transfers from Lusaka, Zambia." },
    ],
  }),
  component: Home,
});

function Home() {
  const [overrides] = useSiteOverrides();
  const slides = resolveHeroSlides(overrides);
  const travelStyles = resolveTravelStyles(overrides);
  const services = resolveServices(overrides);
  const testimonials = resolveTestimonials(overrides);
  const popularDestinations = resolvePopularDestinations(overrides);
  const quickServices = resolveQuickServices(overrides);
  const trustStrip = resolveTrustStrip(overrides);
  const stats = resolveHomeStats(overrides);
  const social = resolveContactInfo(overrides);
  const igImages = resolveInstagramImages(overrides);
  const heroSection = resolvePageSection(overrides, "home.hero");
  const travelSection = resolvePageSection(overrides, "home.travelStyles");
  const aboutSection = resolvePageSection(overrides, "home.aboutTeaser");
  const servicesSection = resolvePageSection(overrides, "home.services");
  const destinationsSection = resolvePageSection(overrides, "home.popularDestinations");
  const testimonialsSection = resolvePageSection(overrides, "home.testimonials");
  const instagramSection = resolvePageSection(overrides, "home.instagram");

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[i];

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-[100svh] -mt-20 overflow-hidden bg-navy-deep">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.image} alt={s.title} className={`absolute inset-0 w-full h-full object-cover ${idx === i ? "animate-kenburns" : ""}`} />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-center pt-20">
          <div key={i} className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs tracking-[0.25em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span> {slide.kicker}
            </div>
            <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl text-balance leading-[1.02]">
              {slide.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">{slide.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/destinations" className="inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-7 py-3.5 shadow-gold hover:brightness-110 transition">
                Explore Destinations
              </Link>
              <Link to="/itineraries" className="inline-flex items-center rounded-full border border-white/40 text-white px-7 py-3.5 hover:bg-white/10 transition">
                View Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES BAR */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-5 divide-x divide-border">
          {[
            { icon: Plane, label: quickServices[0]?.label || "Flight Bookings" },
            { icon: Building2, label: quickServices[1]?.label || "Hotel Reservations" },
            { icon: Briefcase, label: quickServices[2]?.label || "Corporate Travel" },
            { icon: Car, label: quickServices[3]?.label || "Airport Transfers" },
            { icon: Luggage, label: quickServices[4]?.label || "Travel Packages" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="py-7 px-4 flex flex-col items-center text-center gap-2">
              <div className="h-12 w-12 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center">
                <Icon size={22}/>
              </div>
              <div className="text-sm font-semibold text-navy">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL STYLES */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHead kicker={travelSection.kicker || ""} title={travelSection.title || ""} />
        <div className="grid lg:grid-cols-3 gap-7 mt-14">
          {travelStyles.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-2xl bg-card shadow-luxury">
              <div className="relative h-52 sm:h-64 lg:h-72 overflow-hidden">
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.6s]"/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent"/>
                <h3 className="absolute bottom-5 left-6 text-white font-display text-3xl">{s.title}</h3>
              </div>
              <div className="p-7">
                <p className="text-muted-foreground text-[15px] leading-relaxed">{s.blurb}</p>
                <Link to="/services" className="mt-5 inline-flex text-sm font-semibold text-emerald-brand hover:text-navy">{travelSection.linkText}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{aboutSection.kicker}</div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">{aboutSection.title}</h2>
            <p className="mt-6 text-white/75 leading-relaxed text-lg">{aboutSection.body}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-gold text-4xl">{value}</div>
                  <div className="text-xs tracking-widest uppercase text-white/60 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-6 py-3">{aboutSection.ctaText}</Link>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury">
            <img src={travelStyles[2].image} alt="" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHead kicker={servicesSection.kicker || ""} title={servicesSection.title || ""} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((s) => (
            <div key={s.title} className="p-7 rounded-xl border bg-card hover:shadow-luxury hover:-translate-y-1 transition-all">
              <div className="h-11 w-11 rounded-lg bg-gradient-emerald grid place-items-center text-white mb-4"><Globe2 size={20}/></div>
              <h3 className="font-display text-xl text-navy">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHead kicker={destinationsSection.kicker || ""} title={destinationsSection.title || ""} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {popularDestinations.map((d) => (
            <article key={d.name} className="group relative overflow-hidden rounded-2xl shadow-luxury h-52 sm:h-64 lg:h-72">
              <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1.6s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs tracking-[0.25em] uppercase text-gold mb-1">{destinationsSection.badgeText}</div>
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="text-sm text-white/80 mt-1">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/destinations" className="text-emerald-brand font-semibold hover:underline">{destinationsSection.linkText}</Link>
        </div>
      </section>

      {/* IATA / TRUST STRIP */}
      <section className="bg-navy-deep text-white py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustStrip.map(({ icon, title, desc }) => (
            <div key={title}>
              <div className="text-4xl">{icon}</div>
              <div className="font-display text-xl text-gold mt-3">{title}</div>
              <div className="text-sm text-white/70 mt-2">{desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-5 lg:px-10">
        <SectionHead kicker={testimonialsSection.kicker || ""} title={testimonialsSection.title || ""} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {testimonials.slice(0, 6).map((t) => (
            <figure key={t.name} className="p-7 rounded-xl border bg-card">
              <div className="flex gap-1 text-gold mb-3">{Array.from({length:5}).map((_,k)=>(<Star key={k} size={14} fill="currentColor"/>))}</div>
              <blockquote className="text-foreground/85 leading-relaxed italic">"{t.text}"</blockquote>
              <figcaption className="mt-5"><div className="font-semibold text-navy">{t.name}</div><div className="text-xs text-muted-foreground">{t.role}</div></figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/testimonials" className="text-emerald-brand font-semibold hover:underline">{testimonialsSection.linkText}</Link>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-navy-deep text-white py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{instagramSection.kicker}</div>
            <h2 className="font-display text-4xl md:text-5xl">{instagramSection.title}</h2>
            <p className="mt-5 text-white/70 text-lg">{instagramSection.body}</p>
            <a href={social.instagram} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-6 py-3">{instagramSection.ctaText}</a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {igImages.map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3">{kicker}</div>
      <h2 className="font-display text-4xl md:text-5xl text-navy text-balance">{title}</h2>
    </div>
  );
}
