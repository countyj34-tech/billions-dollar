import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSiteOverrides } from "@/lib/site-store";
import { blogPosts } from "@/lib/site-data";


export const Route = createFileRoute("/blog/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Post — Best Eastern Travel` },
      { name: "description", content: `Read the full story on Best Eastern Travel's blog.` },
      { property: "og:title", content: `Best Eastern Travel Journal` },
    ],
    // params is unused in head text; kept for future dynamic titles
    ...({ _p: params } as any),
  }),
  component: PostDetail,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-3xl text-navy">Post not found</h1>
        <p className="text-muted-foreground mt-2">It may have been removed.</p>
        <Link to="/blog" className="inline-block mt-6 px-5 py-2.5 rounded-md bg-gradient-gold text-navy font-semibold">Back to blog</Link>
      </div>
    </div>
  ),
});

function PostDetail() {
  const { id } = Route.useParams();
  const [overrides] = useSiteOverrides();
  const posts = overrides.posts || [];
  const featured = overrides.featuredPosts && overrides.featuredPosts.length > 0 ? overrides.featuredPosts : blogPosts;
  const adminPost = posts.find((p) => p.id === id);
  const staticPost = !adminPost ? featured.find((p) => p.slug === id) : undefined;

  const post = adminPost ?? (staticPost ? {
    id: staticPost.slug,
    title: staticPost.title,
    body: staticPost.body,
    image: staticPost.image as string | undefined,
    date: staticPost.date,
    category: "Featured" as string | undefined,
    video: undefined as string | undefined,
    audio: undefined as string | undefined,
  } : null);

  if (!post) {
    if (posts.length === 0) {
      return <div className="min-h-[60vh] grid place-items-center"><p className="text-muted-foreground">Loading…</p></div>;
    }
    throw notFound();
  }

  const related = [
    ...posts.filter((p) => p.id !== post.id && (!post.category || p.category === post.category)),
    ...featured.filter((p) => p.slug !== post.id).map((p) => ({ id: p.slug, title: p.title, image: p.image as string | undefined, date: p.date })),
  ].slice(0, 3);



  return (
    <>
      <section className="relative -mt-20 pt-32 pb-10 bg-gradient-to-b from-navy to-navy/85 text-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <Link to="/blog" className="text-xs tracking-[0.3em] uppercase text-gold hover:brightness-125">← Back to journal</Link>
          <div className="mt-6 flex items-center gap-3 flex-wrap text-xs">
            {post.category && <span className="px-3 py-1 rounded-full bg-gold/20 text-gold uppercase tracking-widest">{post.category}</span>}
            <span className="text-white/60">{post.date}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-tight">{post.title}</h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-5 lg:px-10 py-14 space-y-8">
        {post.image && (
          <img src={post.image} alt={post.title} className="w-full rounded-2xl shadow-luxury max-h-[560px] object-cover"/>
        )}
        {post.video && (
          <video src={post.video} controls className="w-full rounded-2xl bg-black shadow-luxury"/>
        )}
        <div className="prose prose-lg max-w-none text-foreground/85 whitespace-pre-wrap leading-relaxed text-lg">
          {post.body}
        </div>
        {post.audio && (
          <div className="rounded-xl border bg-card p-5">
            <div className="text-xs uppercase tracking-wide text-emerald-brand mb-3">🎵 Listen along</div>
            <audio src={post.audio} controls className="w-full"/>
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="py-14 bg-navy/[0.03]">
          <div className="max-w-6xl mx-auto px-5 lg:px-10">
            <h2 className="font-display text-2xl text-navy mb-6">More like this</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to="/blog/$id" params={{ id: p.id }} className="group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition">
                  {p.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground">{p.date}</div>
                    <h3 className="font-display text-lg text-navy mt-2 leading-snug">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
