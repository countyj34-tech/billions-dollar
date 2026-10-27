import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { blogPosts, images } from "@/lib/site-data";
import { useSiteOverrides } from "@/lib/site-store";
import { resolvePageSection } from "@/lib/site-content";
import { BLOG_CATEGORIES } from "@/routes/admin";


export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Travel Blog & Visa Updates — Best Eastern Travel" },
      { name: "description", content: "Travel tips, destination guides and the latest visa updates from Best Eastern Travel." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [overrides] = useSiteOverrides();
  const page = resolvePageSection(overrides, "blog");
  const allPosts = overrides.posts || [];
  const featured = overrides.featuredPosts && overrides.featuredPosts.length > 0 ? overrides.featuredPosts : blogPosts;
  const [activeCat, setActiveCat] = useState<string>("All");
  const adminPosts = activeCat === "All" ? allPosts : allPosts.filter((p) => p.category === activeCat);


  return (
    <>
      <section className="relative h-[45vh] -mt-20 overflow-hidden">
        <img src={page.heroImage || images.plane} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">{page.kicker}</div>
          <h1 className="font-display text-white text-5xl md:text-7xl">{page.title}</h1>
        </div>
      </section>

      {allPosts.length > 0 && (
        <section className="py-16 max-w-5xl mx-auto px-5 lg:px-10 space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-display text-3xl text-navy">{page.secondaryTitle}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...BLOG_CATEGORIES] as const).map((c) => {
              const count = c === "All" ? allPosts.length : allPosts.filter((p) => p.category === c).length;
              const active = activeCat === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition ${active ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-border hover:border-navy"}`}
                >
                  {c} <span className="opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
          <div className="space-y-10">
            {adminPosts.length === 0 && (
              <p className="text-muted-foreground text-sm">No posts in this category yet.</p>
            )}
            {adminPosts.map((p) => (
              <Link key={p.id} to="/blog/$id" params={{ id: p.id }} className="block group">
                <article className="rounded-2xl overflow-hidden border bg-card shadow-luxury transition group-hover:shadow-xl group-hover:-translate-y-0.5">
                  {p.image && <img src={p.image} alt={p.title} className="w-full max-h-[480px] object-cover"/>}
                  {p.video && !p.image && <video src={p.video} className="w-full bg-black pointer-events-none"/>}
                  <div className="p-7 space-y-3">
                    <div className="text-xs text-muted-foreground tracking-wide flex items-center gap-2">
                      <span>{p.date}</span>
                      {p.category && <span className="px-2 py-0.5 rounded-full bg-emerald-brand/10 text-emerald-brand uppercase tracking-widest text-[10px]">{p.category}</span>}
                    </div>
                    <h3 className="font-display text-2xl text-navy group-hover:text-emerald-brand transition">{p.title}</h3>
                    <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed line-clamp-3">{p.body}</p>
                    <span className="inline-block text-sm text-emerald-brand font-semibold pt-2">Read more →</span>
                  </div>
                </article>
              </Link>
            ))}

          </div>
        </section>
      )}


      <section className="py-16 max-w-7xl mx-auto px-5 lg:px-10">
        <h2 className="font-display text-3xl text-navy mb-8">Featured articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {allPosts.filter((p) => p.category === "Featured").map((p) => (
            <Link key={p.id} to="/blog/$id" params={{ id: p.id }} className="group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition block">
              <div className="aspect-[16/10] overflow-hidden bg-navy/5">
                {p.image && <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>}
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground tracking-wide flex items-center gap-2">
                  <span>{p.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-gold/15 text-navy uppercase tracking-widest text-[10px]">Featured</span>
                </div>
                <h3 className="font-display text-xl text-navy mt-2 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.body}</p>
              </div>
            </Link>
          ))}
          {featured.map((p) => (
            <Link key={p.slug} to="/blog/$id" params={{ id: p.slug }} className="group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition block">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground tracking-wide">{p.date}</div>
                <h3 className="font-display text-xl text-navy mt-2 leading-snug group-hover:text-emerald-brand transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <span className="inline-block text-sm text-emerald-brand font-semibold mt-3">Read more →</span>
              </div>
            </Link>
          ))}

        </div>
      </section>


    </>
  );
}
