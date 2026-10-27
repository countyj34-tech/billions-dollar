import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  useSiteOverrides,
  patchOverrides,
  useIsAdmin,
  addPost,
  deletePost,
  updatePost,
  deleteBooking,
  uploadMedia,
  type ServiceOverride,
  type Post,
  type FeaturedPost,
  type TestimonialOverride,
} from "@/lib/site-store";
import { services as defaultServices, blogPosts as defaultFeatured, testimonials as defaultTestimonials } from "@/lib/site-data";


import { supabase } from "@/integrations/supabase/client";
import { confirmDelete, DeleteGuardHost } from "@/lib/delete-guard";
import { bookingCleanLines, type BookingLike } from "@/lib/inquiry-format";
import { ensureCompanyAdminRole } from "@/lib/admin-auth";
import { DatabaseSetupBanner } from "@/components/admin/DatabaseSetupBanner";
import { DestinationsEditor } from "@/components/admin/DestinationsEditor";
import { HomepageEditor } from "@/components/admin/HomepageEditor";
import { PackagesEditor } from "@/components/admin/PackagesEditor";
import { LayoutEditor } from "@/components/admin/LayoutEditor";
import { AboutPageEditor } from "@/components/admin/AboutPageEditor";
import { PagesEditor } from "@/components/admin/PagesEditor";
import { NewsletterEditor } from "@/components/admin/NewsletterEditor";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Best Eastern Travel" }, { name: "robots", content: "noindex" }] }),
  component: Admin,
});

type Tab = "general" | "media" | "layout" | "homepage" | "packages" | "about" | "services" | "destinations" | "pages" | "newsletter" | "posts" | "featured" | "testimonials" | "newsletters" | "bookings" | "messages";

function Admin() {
  const navigate = useNavigate();
  const { loading, isAdmin, email } = useIsAdmin();
  const [overrides] = useSiteOverrides();
  const [tab, setTab] = useState<Tab>("general");

  if (loading) {
    return <div className="min-h-[60vh] grid place-items-center"><p className="text-muted-foreground">Loading…</p></div>;
  }

  if (!email) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-5">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl text-navy">Admin sign-in required</h1>
          <p className="text-muted-foreground mt-3">Please sign in to manage your website.</p>
          <Link to="/admin-login" className="inline-block mt-6 px-5 py-3 rounded-md bg-gradient-gold text-navy font-semibold">Sign in</Link>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-5">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl text-navy">Not authorized</h1>
          <p className="text-muted-foreground mt-3">You're signed in as <b>{email}</b> but don't have the admin role yet.
            Ask a site administrator to grant it to your account.</p>
          <button onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/admin-login" }); }}
            className="mt-6 px-5 py-2 rounded-md border">Sign out</button>
        </div>
      </div>
    );
  }

  const tabs: Tab[] = ["general", "media", "layout", "homepage", "packages", "about", "services", "destinations", "pages", "newsletter", "posts", "featured", "testimonials", "newsletters", "bookings", "messages"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy/[0.03] via-background to-background">
      <DeleteGuardHost/>
      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-10">
        <div className="rounded-2xl border border-gold/20 bg-gradient-to-r from-navy to-navy/90 text-white p-6 lg:p-8 shadow-xl mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-[11px] tracking-[0.35em] uppercase text-gold">Admin Console</div>
              <h1 className="font-display text-3xl lg:text-4xl mt-1">Manage your website</h1>
              <p className="text-xs text-white/60 mt-2">Signed in as <span className="text-gold">{email}</span></p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={async () => {
                  if (await confirmDelete("Reset ALL site content overrides back to defaults?")) {
                    await patchOverrides({
                      logoUrl: undefined,
                      tagline: undefined,
                      aboutText: undefined,
                      vision: undefined,
                      mission: undefined,
                      history: undefined,
                      audioUrl: undefined,
                      audioAutoplay: undefined,
                      videoUrl: undefined,
                      heroImages: undefined,
                      heroSlides: undefined,
                      travelStyles: undefined,
                      popularDestinations: undefined,
                      packages: undefined,
                      destinationRegions: undefined,
                      destinationContent: undefined,
                      destinationImages: undefined,
                      brandName: undefined,
                      brandSubtitle: undefined,
                      logoAlt: undefined,
                      headerCta: undefined,
                      whatsappMessage: undefined,
                      aboutMdName: undefined,
                      aboutMdTitle: undefined,
                      phone2: undefined,
                      mapEmbedUrl: undefined,
                      socialLinks: undefined,
                      navItems: undefined,
                      footer: undefined,
                      homeQuickServices: undefined,
                      homeTrustStrip: undefined,
                      homeStats: undefined,
                      coreValues: undefined,
                      processSteps: undefined,
                      awards: undefined,
                      valuedClients: undefined,
                      whyChoose: undefined,
                      newsletter: undefined,
                      bookServices: undefined,
                      pageSections: undefined,
                      tagline: undefined,
                      services: undefined,
                      testimonials: undefined,
                      phone: undefined,
                      email: undefined,
                      whatsapp: undefined,
                      address: undefined,
                    });
                  }
                }}
                className="px-4 py-2 text-sm rounded-md border border-white/25 text-white hover:bg-white/10">Reset all</button>
              <button
                onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/" }); }}
                className="px-4 py-2 text-sm rounded-md bg-gold text-navy font-semibold hover:brightness-105">Sign out</button>
            </div>
          </div>
        </div>

        <DatabaseSetupBanner />

        <div className="flex gap-1 border-b border-navy/10 mb-8 overflow-x-auto">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2.5 text-sm border-b-2 -mb-px capitalize whitespace-nowrap transition ${tab === t ? "border-gold text-navy font-semibold" : "border-transparent text-muted-foreground hover:text-navy"}`}>{t}</button>
          ))}
        </div>


      {tab === "general" && (
        <div className="space-y-5 max-w-2xl">
          <Field label="Phone"><input className="input" defaultValue={overrides.phone || ""} onBlur={(e) => patchOverrides({ phone: e.target.value })}/></Field>
          <Field label="WhatsApp (digits only, with country code)"><input className="input" defaultValue={overrides.whatsapp || ""} onBlur={(e) => patchOverrides({ whatsapp: e.target.value })}/></Field>
          <Field label="Email"><input className="input" defaultValue={overrides.email || ""} onBlur={(e) => patchOverrides({ email: e.target.value })}/></Field>
          <Field label="Office address"><textarea className="input" rows={3} defaultValue={overrides.address || ""} onBlur={(e) => patchOverrides({ address: e.target.value })}/></Field>
          <Field label="Secondary phone"><input className="input" defaultValue={overrides.phone2 || ""} onBlur={(e) => patchOverrides({ phone2: e.target.value })}/></Field>
          <Field label="Google Maps embed URL"><input className="input" defaultValue={overrides.mapEmbedUrl || ""} onBlur={(e) => patchOverrides({ mapEmbedUrl: e.target.value })}/></Field>
        </div>
      )}

      {tab === "layout" && <LayoutEditor/>}

      {tab === "about" && <AboutPageEditor/>}

      {tab === "services" && <ServicesEditor/>}
      {tab === "packages" && <PackagesEditor/>}
      {tab === "destinations" && <DestinationsEditor/>}

      {tab === "media" && (
        <div className="space-y-8 max-w-2xl">
          <div>
            <h3 className="font-display text-xl text-navy mb-2">Logo</h3>
            {overrides.logoUrl && <img src={overrides.logoUrl} alt="logo" className="h-20 mb-3 border bg-white p-1"/>}
            <UploadInput accept="image/*" onUploaded={(url) => patchOverrides({ logoUrl: url })}/>
            {overrides.logoUrl && <button onClick={() => patchOverrides({ logoUrl: undefined })} className="ml-3 text-sm text-destructive">Remove</button>}
          </div>

          <div>
            <h3 className="font-display text-xl text-navy mb-2">Background music (plays sitewide)</h3>
            {overrides.audioUrl && <audio src={overrides.audioUrl} controls className="mb-3"/>}
            <UploadInput accept="audio/*" onUploaded={(url) => patchOverrides({ audioUrl: url })}/>
            <label className="flex items-center gap-2 mt-3 text-sm">
              <input type="checkbox" checked={!!overrides.audioAutoplay} onChange={(e) => patchOverrides({ audioAutoplay: e.target.checked })}/>
              Try to autoplay on page load
            </label>
            {overrides.audioUrl && <button onClick={() => patchOverrides({ audioUrl: undefined })} className="text-sm text-destructive">Remove audio</button>}
          </div>

          <div>
            <h3 className="font-display text-xl text-navy mb-2">Feature video (URL or upload)</h3>
            <input className="input mb-2" placeholder="https://…mp4 or YouTube URL" defaultValue={overrides.videoUrl || ""} onBlur={(e) => patchOverrides({ videoUrl: e.target.value })}/>
            <UploadInput accept="video/*" onUploaded={(url) => patchOverrides({ videoUrl: url })}/>
            {overrides.videoUrl && <video src={overrides.videoUrl} controls className="mt-3 w-full rounded-md"/>}
          </div>
        </div>
      )}

      {tab === "pages" && <PagesEditor/>}
      {tab === "newsletter" && <NewsletterEditor/>}

      {tab === "homepage" && <HomepageEditor />}

      {tab === "posts" && <PostsEditor/>}
      {tab === "featured" && <FeaturedEditor/>}
      {tab === "testimonials" && <TestimonialsEditor/>}

      {tab === "newsletters" && <PostsEditor defaultCategory="Newsletter" heading="Newsletters, news & promotions" description="Publish newsletter issues, promotions, and news announcements. They appear on the public /blog page."/>}

      {tab === "bookings" && <BookingsList/>}
      {tab === "messages" && <MessagesList/>}


      <style>{`.input{width:100%;padding:.7rem .9rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function UploadInput({ accept, multiple, onUploaded }: { accept: string; multiple?: boolean; onUploaded: (url: string) => void }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  return (
    <div>
      <input type="file" accept={accept} multiple={multiple} disabled={busy}
        onChange={async (e) => {
          const files = Array.from(e.target.files || []);
          if (!files.length) return;
          setBusy(true); setErr(null);
          try {
            for (const f of files) {
              const url = await uploadMedia(f);
              onUploaded(url);
            }
          } catch (ex: any) {
            setErr(ex.message || "Upload failed");
          } finally {
            setBusy(false);
            e.target.value = "";
          }
        }}/>
      {busy && <span className="text-xs text-muted-foreground ml-2">Uploading…</span>}
      {err && <p className="text-xs text-destructive mt-1">{err}</p>}
    </div>
  );
}

function ServicesEditor() {
  const [overrides] = useSiteOverrides();
  const list: ServiceOverride[] = overrides.services || defaultServices.map((s) => ({ title: s.title, desc: s.desc, items: s.items }));

  function update(i: number, patch: Partial<ServiceOverride>) {
    const next = list.map((s, idx) => idx === i ? { ...s, ...patch } : s);
    patchOverrides({ services: next });
  }
  async function remove(i: number) {
    if (await confirmDelete(`Delete service "${list[i]?.title || ""}"?`)) {
      patchOverrides({ services: list.filter((_, idx) => idx !== i) });
    }
  }
  function add() {
    patchOverrides({ services: [...list, { title: "New service", desc: "", items: [] }] });
  }
  async function resetAll() {
    if (await confirmDelete("Reset services to original company profile?")) patchOverrides({ services: undefined });
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex gap-2">
        <button onClick={add} className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold">+ Add service</button>
        <button onClick={resetAll} className="px-4 py-2 text-sm rounded-md border">Reset to defaults</button>
      </div>
      {list.map((s, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-3 bg-card">
          <div className="flex justify-between items-start">
            <input className="input font-semibold" value={s.title} onChange={(e) => update(i, { title: e.target.value })}/>
            <button onClick={() => remove(i)} className="text-destructive text-sm ml-3">Delete</button>
          </div>
          <textarea className="input" rows={2} value={s.desc} onChange={(e) => update(i, { desc: e.target.value })}/>
          <textarea className="input" rows={4} placeholder="Bullet points (one per line)" value={(s.items || []).join("\n")} onChange={(e) => update(i, { items: e.target.value.split("\n").filter(Boolean) })}/>
        </div>
      ))}
      <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
    </div>
  );
}

export const BLOG_CATEGORIES = ["Featured", "Travel Tips", "Visa Updates", "Destinations", "Company News", "News", "Promotions", "Newsletter"] as const;

function PostsEditor({ defaultCategory, heading, description }: { defaultCategory?: string; heading?: string; description?: string } = {}) {
  const [overrides] = useSiteOverrides();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<string>(defaultCategory || BLOG_CATEGORIES[0]);

  const [image, setImage] = useState<string | undefined>();
  const [video, setVideo] = useState<string | undefined>();
  const [audio, setAudio] = useState<string | undefined>();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const allPosts = overrides.posts || [];
  const posts = defaultCategory
    ? allPosts.filter((p) => p.category === defaultCategory || p.category === "News" || p.category === "Promotions" || p.category === "Newsletter")
    : allPosts;

  async function publish() {
    if (!title.trim()) return;
    setBusy(true); setErr(null);
    try {
      await addPost({ title, body, category, image, video, audio });
      setTitle(""); setBody(""); setImage(undefined); setVideo(undefined); setAudio(undefined);
      setCategory(defaultCategory || BLOG_CATEGORIES[0]);
    } catch (e: any) {
      setErr(e.message || "Failed to publish");
    } finally { setBusy(false); }
  }

  return (
    <div className="space-y-6">
      {heading && (
        <div>
          <h2 className="font-display text-2xl text-navy">{heading}</h2>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-3">
        <h3 className="font-display text-xl text-navy">{defaultCategory ? "New newsletter / announcement" : "New post"}</h3>
        <input className="input" placeholder={defaultCategory ? "Subject / headline" : "Post title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
        <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
          {(defaultCategory ? (["Newsletter", "News", "Promotions"] as const) : BLOG_CATEGORIES).map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <textarea className="input" rows={8} placeholder={defaultCategory ? "Write your newsletter, news article, or promotion here…" : "Body"} value={body} onChange={(e) => setBody(e.target.value)}/>

        <label className="block text-sm font-semibold text-navy mt-2">Cover image</label>
        <UploadInput accept="image/*" onUploaded={(url) => setImage(url)}/>
        {image && <img src={image} className="h-32 rounded-md object-cover"/>}

        <label className="block text-sm font-semibold text-navy mt-2">Video (optional)</label>
        <UploadInput accept="video/*" onUploaded={(url) => setVideo(url)}/>
        {video && <video src={video} controls className="w-full rounded-md"/>}

        <label className="block text-sm font-semibold text-navy mt-2">Background song (optional)</label>
        <UploadInput accept="audio/*" onUploaded={(url) => setAudio(url)}/>
        {audio && <audio src={audio} controls className="w-full"/>}

        {err && <p className="text-sm text-destructive">{err}</p>}
        <button onClick={publish} disabled={busy} className="px-5 py-2.5 rounded-md bg-gradient-gold text-navy font-semibold mt-3 disabled:opacity-60">
          {busy ? "Publishing…" : (defaultCategory ? "Publish newsletter" : "Publish post")}
        </button>
        <style>{`.input{width:100%;padding:.7rem .9rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-xl text-navy">Published ({posts.length})</h3>
        {posts.length === 0 && <p className="text-sm text-muted-foreground">Nothing published yet.</p>}
        {posts.map((p) => <PostRow key={p.id} post={p}/>)}
      </div>
      </div>
    </div>
  );
}


/** Normalize bookings.payload whether jsonb object or JSON string. */
function bookingPayload(b: any): Record<string, any> {
  let p = b?.payload;
  if (typeof p === "string") {
    try {
      p = JSON.parse(p);
    } catch {
      return {};
    }
  }
  return p && typeof p === "object" ? p : {};
}

function isContactBooking(b: any): boolean {
  const p = bookingPayload(b);
  if (p.type === "contact") return true;
  const dest = String(b?.destination || "");
  return /contact\s*inquiry/i.test(dest);
}

function bookingLikeFromRow(b: any): BookingLike {
  const p = bookingPayload(b);
  // If notes is already clean line-by-line text, keep customer notes separate
  const notesFromPayload = typeof p.notes === "string" && !p.notes.includes("\n") ? p.notes : "";
  return {
    name: b.name || p.name,
    email: b.email || p.email,
    phone: b.phone || p.phone,
    preferredContact: p.preferredContact,
    services: p.services,
    from: p.from,
    destination: b.destination || p.destination,
    departure: b.travel_date || p.departure,
    return: p.return,
    adults: p.adults,
    children: p.children,
    cabin: p.cabin,
    hotel: p.hotel,
    vehicle: p.vehicle,
    driver: p.driver,
    packageTier: p.packageTier,
    notes: notesFromPayload || (typeof p.notes === "string" ? p.notes : ""),
  };
}

function bookingServicesLabel(b: any): string | null {
  const services = bookingPayload(b).services;
  if (!Array.isArray(services) || !services.length) return null;
  return services.join(", ");
}

function BookingDocument({ booking }: { booking: any }) {
  const data = bookingLikeFromRow(booking);
  const p = bookingPayload(booking);
  const storedNotes = String(booking.notes || p.summary || "").trim();
  const looksLikeJson = storedNotes.startsWith("{") || storedNotes.startsWith("[");

  // Always render clean lines — never raw JSON
  const lines = !looksLikeJson && storedNotes && !storedNotes.includes('"type":')
    ? storedNotes
    : bookingCleanLines(data);

  return (
    <div className="mt-4 rounded-md border bg-background p-5 text-sm">
      <div className="font-display text-lg text-navy border-b border-border pb-2 mb-4">
        Booking request
      </div>
      <div className="space-y-1.5 text-sm leading-7 text-foreground">
        {lines.split("\n").filter(Boolean).map((line, i) => {
          const idx = line.indexOf(": ");
          if (idx === -1) {
            return <div key={i} className="font-semibold text-navy">{line}</div>;
          }
          const label = line.slice(0, idx);
          const value = line.slice(idx + 2);
          return (
            <div key={i}>
              <span className="font-semibold text-navy">{label}:</span>{" "}
              <span>{value}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 pt-3 border-t text-xs text-muted-foreground">
        Received {new Date(booking.created_at).toLocaleString()}
      </p>
    </div>
  );
}

function BookingsList() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      await ensureCompanyAdminRole();
      const { data, error } = await supabase.from("bookings").select("*").order("created_at", { ascending: false });
      if (error) setErr(error.message);
      else setRows((data || []).filter((b: any) => !isContactBooking(b)));
      setLoading(false);
    })();
  }, []);

  if (loading) return <p className="text-muted-foreground">Loading bookings…</p>;
  if (err) {
    return (
      <div className="space-y-2">
        <p className="text-destructive">{err}</p>
        <p className="text-sm text-muted-foreground">
          Run <code className="text-xs">FIX_ADMIN_AND_FORMS.sql</code> in Supabase SQL Editor, then refresh.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="font-display text-xl text-navy">Bookings ({rows.length})</h3>
      {rows.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No bookings yet. After someone submits Book or Packages, they appear here. If forms succeed but this stays empty, run FIX_ADMIN_AND_FORMS.sql in Supabase.
        </p>
      )}
      {rows.map((b) => {
        const services = bookingServicesLabel(b);
        return (
        <details key={b.id} className="p-4 border rounded-md bg-card">
          <summary className="cursor-pointer">
            <span className="font-semibold text-navy">{b.name}</span>
            <span className="text-xs text-muted-foreground ml-3">{new Date(b.created_at).toLocaleString()}</span>
            {b.destination && <span className="text-xs ml-3">→ {b.destination}</span>}
            {!b.destination && services && (
              <span className="text-xs ml-3 text-muted-foreground">· {services}</span>
            )}
          </summary>
          <BookingDocument booking={b} />
          <div className="mt-3 flex justify-end">
            <button onClick={async () => { if (await confirmDelete(`Delete booking from ${b.name}? This cannot be undone.`)) { await deleteBooking(b.id); setRows((r) => r.filter((x) => x.id !== b.id)); } }}
              className="text-destructive text-sm">Delete booking</button>
          </div>
        </details>
      );})}
    </div>
  );
}

function PostRow({ post }: { post: Post }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [category, setCategory] = useState(post.category || BLOG_CATEGORIES[0]);
  const [image, setImage] = useState<string | undefined>(post.image);
  const [video, setVideo] = useState<string | undefined>(post.video);
  const [audio, setAudio] = useState<string | undefined>(post.audio);
  const [busy, setBusy] = useState(false);

  if (!editing) {
    return (
      <div className="p-4 border rounded-md flex gap-3">
        {post.image && <img src={post.image} className="h-16 w-16 object-cover rounded"/>}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-navy truncate">{post.title}</div>
          <div className="text-xs text-muted-foreground">{post.date}{post.category ? ` · ${post.category}` : ""}</div>
          <div className="text-[10px] text-muted-foreground mt-1">
            {post.video && "🎬 video "}{post.audio && "🎵 song "}{post.image && "🖼 image"}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <button onClick={() => setEditing(true)} className="text-navy text-sm underline">Edit</button>
          <button onClick={async () => { if (await confirmDelete(`Delete post "${post.title}"?`)) deletePost(post.id); }} className="text-destructive text-sm">Delete</button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-md bg-card space-y-3">
      <input className="input" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
        {BLOG_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <textarea className="input" rows={5} value={body} onChange={(e) => setBody(e.target.value)}/>

      <div>
        <div className="text-xs font-semibold text-navy mb-1">Cover image</div>
        {image && <img src={image} className="h-24 rounded mb-2 object-cover"/>}
        <UploadInput accept="image/*" onUploaded={setImage}/>
        {image && <button onClick={() => setImage(undefined)} className="text-xs text-destructive ml-2">Remove image</button>}
      </div>
      <div>
        <div className="text-xs font-semibold text-navy mb-1">Video</div>
        {video && <video src={video} controls className="w-full rounded mb-2"/>}
        <UploadInput accept="video/*" onUploaded={setVideo}/>
        {video && <button onClick={() => setVideo(undefined)} className="text-xs text-destructive ml-2">Remove video</button>}
      </div>
      <div>
        <div className="text-xs font-semibold text-navy mb-1">Audio</div>
        {audio && <audio src={audio} controls className="w-full mb-2"/>}
        <UploadInput accept="audio/*" onUploaded={setAudio}/>
        {audio && <button onClick={() => setAudio(undefined)} className="text-xs text-destructive ml-2">Remove audio</button>}
      </div>

      <div className="flex gap-2 justify-end">
        <button disabled={busy} onClick={() => setEditing(false)} className="px-4 py-2 text-sm border rounded-md">Cancel</button>
        <button disabled={busy} onClick={async () => {
          setBusy(true);
          try {
            await updatePost(post.id, { title, body, category, image: image ?? null, video: video ?? null, audio: audio ?? null });
            setEditing(false);
          } finally { setBusy(false); }
        }} className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold disabled:opacity-60">
          {busy ? "Saving…" : "Save changes"}
        </button>
      </div>
    </div>
  );
}

function MessagesList() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      await ensureCompanyAdminRole();
      const [{ data: messages, error: msgErr }, { data: bookings, error: bookErr }] = await Promise.all([
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
        supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      ]);
      if (msgErr && bookErr) {
        setErr(msgErr.message || bookErr.message);
        setLoading(false);
        return;
      }
      if (msgErr) console.error("contact_messages select", msgErr);
      if (bookErr) console.error("bookings select for messages", bookErr);

      const fromTable = (messages || []).map((m: any) => ({
        id: m.id,
        name: m.name,
        email: m.email,
        phone: m.phone,
        subject: m.subject,
        message: m.message,
        created_at: m.created_at,
        source: "contact_messages" as const,
      }));

      const fromBookings = (bookings || [])
        .filter((b: any) => isContactBooking(b))
        .map((b: any) => {
          const p = bookingPayload(b);
          return {
            id: b.id,
            name: b.name,
            email: b.email,
            phone: b.phone,
            subject: p.subject || b.destination || "Contact inquiry",
            message: p.message || b.notes || "",
            created_at: b.created_at,
            source: "bookings" as const,
          };
        });

      const merged = [...fromTable, ...fromBookings].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      setRows(merged);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p className="text-muted-foreground">Loading messages…</p>;
  if (err) {
    return (
      <div className="space-y-2">
        <p className="text-destructive">{err}</p>
        <p className="text-sm text-muted-foreground">
          Run <code className="text-xs">FIX_ADMIN_AND_FORMS.sql</code> in Supabase SQL Editor, then refresh.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="font-display text-xl text-navy">Contact messages ({rows.length})</h3>
      {rows.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No messages yet. Contact form submissions appear here. Bookings/packages appear under Bookings.
        </p>
      )}
      {rows.map((m) => (
        <details key={`${m.source}-${m.id}`} className="p-4 border rounded-md bg-card">
          <summary className="cursor-pointer flex flex-wrap items-center gap-3">
            <span className="font-semibold text-navy">{m.name}</span>
            <span className="text-xs text-muted-foreground">{new Date(m.created_at).toLocaleString()}</span>
            {m.subject && <span className="text-xs px-2 py-0.5 rounded-full bg-gold/15 text-navy">{m.subject}</span>}
          </summary>
          <div className="mt-3 text-sm grid sm:grid-cols-2 gap-2">
            <div><b>Email:</b> <a className="text-emerald-brand underline" href={`mailto:${m.email}`}>{m.email}</a></div>
            <div><b>Phone:</b> {m.phone || "—"}</div>
            <div className="sm:col-span-2 whitespace-pre-wrap"><b>Message:</b><br/>{m.message}</div>
            <div className="sm:col-span-2 flex justify-end">
              <button onClick={async () => {
                if (await confirmDelete(`Delete message from ${m.name}? This cannot be undone.`)) {
                  const table = m.source === "bookings" ? "bookings" : "contact_messages";
                  const { error } = await supabase.from(table).delete().eq("id", m.id);
                  if (!error) setRows((r) => r.filter((x) => !(x.id === m.id && x.source === m.source)));
                }
              }} className="text-destructive text-sm">Delete message</button>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

function FeaturedEditor() {
  const [overrides] = useSiteOverrides();
  const list: FeaturedPost[] = overrides.featuredPosts && overrides.featuredPosts.length > 0
    ? overrides.featuredPosts
    : defaultFeatured.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date, image: p.image, body: p.body }));

  function save(next: FeaturedPost[]) {
    patchOverrides({ featuredPosts: next });
  }
  function update(i: number, patch: Partial<FeaturedPost>) {
    save(list.map((p, idx) => idx === i ? { ...p, ...patch } : p));
  }
  async function remove(i: number) {
    if (await confirmDelete(`Delete featured article "${list[i]?.title || ""}"?`)) {
      save(list.filter((_, idx) => idx !== i));
    }
  }
  function add() {
    const slug = `new-${Date.now()}`;
    save([...list, { slug, title: "New featured article", excerpt: "", date: new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }), image: "", body: "" }]);
  }
  async function resetAll() {
    if (await confirmDelete("Reset featured articles to the original defaults?")) {
      patchOverrides({ featuredPosts: undefined });
    }
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h2 className="font-display text-2xl text-navy">Featured articles</h2>
        <p className="text-sm text-muted-foreground mt-1">Edit the highlighted articles that appear in the "Featured articles" section on the blog. Each supports full body content displayed on click.</p>
      </div>
      <div className="flex gap-2">
        <button onClick={add} className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold">+ Add featured</button>
        <button onClick={resetAll} className="px-4 py-2 text-sm rounded-md border">Reset to defaults</button>
      </div>
      {list.map((p, i) => (
        <div key={p.slug + i} className="border rounded-lg p-4 space-y-3 bg-card">
          <div className="flex justify-between items-start gap-3">
            <input className="input font-semibold" value={p.title} onChange={(e) => update(i, { title: e.target.value })} placeholder="Title"/>
            <button onClick={() => remove(i)} className="text-destructive text-sm shrink-0">Delete</button>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <input className="input" value={p.date} onChange={(e) => update(i, { date: e.target.value })} placeholder="Date, e.g. June 18, 2026"/>
            <input className="input" value={p.slug} onChange={(e) => update(i, { slug: e.target.value.replace(/\s+/g, "-").toLowerCase() })} placeholder="URL slug"/>
          </div>
          <textarea className="input" rows={2} value={p.excerpt} onChange={(e) => update(i, { excerpt: e.target.value })} placeholder="Short summary (card preview)"/>
          <label className="block text-sm font-semibold text-navy mt-2">Cover image</label>
          <div className="flex items-start gap-3">
            {p.image && <img src={p.image} className="h-24 w-32 object-cover rounded-md border"/>}
            <UploadInput accept="image/*" onUploaded={(url) => update(i, { image: url })}/>
          </div>
          <label className="block text-sm font-semibold text-navy mt-2">Full article body</label>
          <textarea className="input" rows={8} value={p.body} onChange={(e) => update(i, { body: e.target.value })} placeholder="Full article text shown when the card is opened."/>
        </div>
      ))}
      <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
    </div>
  );
}

function TestimonialsEditor() {
  const [overrides] = useSiteOverrides();
  const list: TestimonialOverride[] = overrides.testimonials && overrides.testimonials.length > 0
    ? overrides.testimonials
    : defaultTestimonials.map((t) => ({ name: t.name, role: t.role, text: t.text }));

  function save(next: TestimonialOverride[]) {
    patchOverrides({ testimonials: next });
  }
  function update(i: number, patch: Partial<TestimonialOverride>) {
    save(list.map((t, idx) => idx === i ? { ...t, ...patch } : t));
  }
  async function remove(i: number) {
    if (await confirmDelete(`Remove testimonial from "${list[i]?.name || ""}"?`)) {
      save(list.filter((_, idx) => idx !== i));
    }
  }
  function add() {
    save([{ name: "New client", role: "", text: "" }, ...list]);
  }
  async function resetAll() {
    if (await confirmDelete("Reset testimonials back to the original defaults?")) {
      patchOverrides({ testimonials: undefined });
    }
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div>
        <h2 className="font-display text-2xl text-navy">Testimonials</h2>
        <p className="text-sm text-muted-foreground mt-1">Add, edit, or remove the client testimonials shown on the /testimonials page.</p>
      </div>
      <div className="flex gap-2">
        <button onClick={add} className="px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold">+ Add testimonial</button>
        <button onClick={resetAll} className="px-4 py-2 text-sm rounded-md border">Reset to defaults</button>
      </div>
      {list.map((t, i) => (
        <div key={i} className="border rounded-lg p-4 space-y-3 bg-card">
          <div className="flex justify-between items-start gap-3">
            <input className="input font-semibold" value={t.name} onChange={(e) => update(i, { name: e.target.value })} placeholder="Client name"/>
            <button onClick={() => remove(i)} className="text-destructive text-sm shrink-0">Delete</button>
          </div>
          <input className="input" value={t.role} onChange={(e) => update(i, { role: e.target.value })} placeholder="Role / trip type, e.g. Honeymoon, Bali"/>
          <textarea className="input" rows={3} value={t.text} onChange={(e) => update(i, { text: e.target.value })} placeholder="Testimonial quote"/>
        </div>
      ))}
      <style>{`.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}`}</style>
    </div>
  );
}
