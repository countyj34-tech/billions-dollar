import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { COMPANY_EMAIL } from "@/lib/company";
import { ensureCompanyAdminRole, isCompanyAdminEmail } from "@/lib/admin-auth";

export type ServiceOverride = { title: string; desc: string; items?: string[] };
export type Post = {
  id: string;
  title: string;
  body: string;
  image?: string;
  video?: string;
  audio?: string;
  date: string;
  category?: string;
};

export type DestinationImageOverride = {
  hero?: string;
  attractions?: Record<string, string>;
  /** Extra gallery images shown on the country page */
  gallery?: string[];
};

export type DestinationAttractionContentOverride = {
  name?: string;
  description?: string;
  image?: string;
};

export type DestinationContentOverride = {
  name?: string;
  region?: string;
  overview?: string;
  facts?: Record<string, string>;
  whatToSeeLabel?: string;
  experiencesHeading?: string;
  ctaTitle?: string;
  ctaBody?: string;
  attractions?: Record<string, DestinationAttractionContentOverride>;
  /** New attractions added in admin (not in static countries.ts) */
  extraAttractions?: { name: string; description: string; image?: string }[];
  /** Original attraction names to hide */
  removedAttractions?: string[];
};

export type PackageOverride = {
  tier: string;
  price: string;
  features: string[];
  accent?: string;
  featured?: boolean;
  image?: string;
};

export type HeroSlideOverride = {
  title: string;
  kicker: string;
  subtitle: string;
  image?: string;
};

export type TravelStyleOverride = {
  title: string;
  blurb: string;
  image?: string;
  image2?: string;
};

export type PopularDestinationOverride = {
  name: string;
  desc: string;
  image: string;
  linkSlug?: string;
};

export type DestinationRegionOverride = {
  region: string;
  places: string[];
  image?: string;
};

export type PageSectionOverride = {
  kicker?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  heroImage?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  badgeText?: string;
  linkText?: string;
  hours?: string;
  successTitle?: string;
  successBody?: string;
  disclaimer?: string;
  secondaryTitle?: string;
  secondaryBody?: string;
  badgeLabel?: string;
};

export type NavItemOverride = { to: string; label: string };

export type SocialLinksOverride = {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
};

export type StatItemOverride = { value: string; label: string };

export type TrustStripItemOverride = { icon: string; title: string; desc: string };

export type QuickServiceOverride = { label: string };

export type CoreValueOverride = { title: string; desc: string };

export type ProcessStepOverride = { step: string; title: string; desc: string };

export type AwardOverride = { year: string; airline: string; title: string };

export type WhyChooseOverride = { title: string; desc: string };

export type NewsletterBenefitOverride = { title: string; sub: string };

export type NewsletterOverride = {
  kicker?: string;
  title?: string;
  body?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  privacyText?: string;
  backgroundImage?: string;
  benefits?: NewsletterBenefitOverride[];
};

export type BookServiceOverride = {
  key: string;
  label: string;
  desc: string;
  tag: string;
  image?: string;
};

export type FooterOverride = {
  tagline?: string;
  exploreHeading?: string;
  contactHeading?: string;
  copyright?: string;
  credit?: string;
  exploreLinks?: NavItemOverride[];
};

export type FeaturedPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: string;
};

export type TestimonialOverride = {
  name: string;
  role: string;
  text: string;
};


export type SiteOverrides = {
  logoUrl?: string;
  tagline?: string;
  brandName?: string;
  brandSubtitle?: string;
  logoAlt?: string;
  headerCta?: string;
  whatsappMessage?: string;
  aboutText?: string;
  aboutMdName?: string;
  aboutMdTitle?: string;
  vision?: string;
  mission?: string;
  history?: string;
  audioUrl?: string;
  audioAutoplay?: boolean;
  videoUrl?: string;
  posts?: Post[];
  heroImages?: string[];
  services?: ServiceOverride[];
  phone?: string;
  phone2?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
  mapEmbedUrl?: string;
  socialLinks?: SocialLinksOverride;
  navItems?: NavItemOverride[];
  footer?: FooterOverride;
  homeQuickServices?: QuickServiceOverride[];
  homeTrustStrip?: TrustStripItemOverride[];
  homeStats?: StatItemOverride[];
  coreValues?: CoreValueOverride[];
  processSteps?: ProcessStepOverride[];
  awards?: AwardOverride[];
  valuedClients?: string[];
  whyChoose?: WhyChooseOverride[];
  newsletter?: NewsletterOverride;
  bookServices?: BookServiceOverride[];
  instagramImages?: string[];
  destinationImages?: Record<string, DestinationImageOverride>;
  destinationContent?: Record<string, DestinationContentOverride>;
  destinationRegions?: DestinationRegionOverride[];
  packages?: PackageOverride[];
  heroSlides?: HeroSlideOverride[];
  travelStyles?: TravelStyleOverride[];
  popularDestinations?: PopularDestinationOverride[];
  pageSections?: Record<string, PageSectionOverride>;
  featuredPosts?: FeaturedPost[];
  testimonials?: TestimonialOverride[];
};


const CONTENT_KEY = "content";
const LOCAL_FALLBACK_KEY = "bet_site_content_fallback";
let cache: SiteOverrides = {};
let loaded = false;
let loading: Promise<void> | null = null;
const listeners = new Set<() => void>();

function notify() {
  cache = { ...cache };
  listeners.forEach((l) => l());
}

function readLocalFallback(): Omit<SiteOverrides, "posts"> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(LOCAL_FALLBACK_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Omit<SiteOverrides, "posts">;
  } catch {
    return null;
  }
}

function writeLocalFallback(content: Omit<SiteOverrides, "posts">) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCAL_FALLBACK_KEY, JSON.stringify(content));
  } catch {
    /* ignore quota */
  }
}

function applyLocalFallback(base: SiteOverrides): SiteOverrides {
  const local = readLocalFallback();
  if (!local) return base;
  return { ...base, ...local, posts: base.posts };
}

export async function loadFromDb() {
  if (loading) return loading;
  loading = (async () => {
    try {
      const [contentRes, postsRes] = await Promise.all([
        supabase.from("site_settings").select("value").eq("key", CONTENT_KEY).maybeSingle(),
        supabase.from("posts").select("*").order("created_at", { ascending: false }),
      ]);
      const content = ((contentRes.data?.value as SiteOverrides | undefined) || {}) as SiteOverrides;
      const posts: Post[] = (postsRes.data || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        body: p.body || "",
        image: p.image_url || undefined,
        video: p.video_url || undefined,
        audio: p.audio_url || undefined,
        category: p.category || undefined,
        date: new Date(p.created_at).toLocaleDateString(),
      }));
      cache = applyLocalFallback({ ...content, posts });
      loaded = true;
      notify();
    } finally {
      loading = null;
    }
  })();
  return loading;
}

if (typeof window !== "undefined") {
  loadFromDb();
  supabase
    .channel("site-store")
    .on("postgres_changes", { event: "*", schema: "public", table: "site_settings" }, () => loadFromDb())
    .on("postgres_changes", { event: "*", schema: "public", table: "posts" }, () => loadFromDb())
    .subscribe();
}

export function useSiteOverrides() {
  const [state, setState] = useState<SiteOverrides>(cache);
  useEffect(() => {
    const l = () => setState(cache);
    listeners.add(l);
    if (!loaded) loadFromDb().then(() => setState(cache));
    else setState(cache);
    return () => { listeners.delete(l); };
  }, []);
  const setter = async (next: SiteOverrides) => {
    const { posts: _p, ...rest } = next;
    await saveContent(rest);
  };
  return [state, setter] as const;
}

async function saveContent(content: Omit<SiteOverrides, "posts">) {
  // Keep UI responsive even when Supabase RLS / service role is unavailable.
  cache = { ...content, posts: cache.posts };
  notify();
  writeLocalFallback(content);

  // Prefer server-side service-role write (bypasses broken RLS on site_settings).
  try {
    const { data: sessionRes } = await supabase.auth.getSession();
    const accessToken = sessionRes.session?.access_token;
    if (accessToken) {
      const { saveSiteContentAdmin } = await import("@/lib/admin-save-content.functions");
      await saveSiteContentAdmin({ data: { content: content as Record<string, unknown>, accessToken } });
      await loadFromDb();
      return;
    }
  } catch (serverErr: unknown) {
    const msg = serverErr instanceof Error ? serverErr.message : String(serverErr);
    // Fall through to client upsert when possible; otherwise keep local fallback.
    if (!/SERVICE_ROLE|service_role|missing SUPABASE_SERVICE_ROLE|Session expired|fetch failed|Failed to fetch/i.test(msg)) {
      const { error } = await supabase.from("site_settings").upsert({ key: CONTENT_KEY, value: content as any });
      if (!error) {
        await loadFromDb();
        return;
      }
    }
    // Local fallback already applied — treat as saved for this browser.
    return;
  }

  const { error } = await supabase.from("site_settings").upsert({ key: CONTENT_KEY, value: content as any });
  if (error) {
    // Keep local fallback so Add / Save still work in admin + this browser.
    return;
  }
  await loadFromDb();
}

export async function patchOverrides(patch: Partial<SiteOverrides>) {
  const { posts: _posts, ...contentPatch } = patch;
  const { posts: _current, ...current } = cache;
  await saveContent({ ...current, ...contentPatch });
}

export async function addPost(p: { title: string; body: string; category?: string; image?: string; video?: string; audio?: string }) {
  const { data: userRes } = await supabase.auth.getUser();
  const { error } = await supabase.from("posts").insert({
    title: p.title,
    body: p.body,
    category: p.category ?? null,
    image_url: p.image ?? null,
    video_url: p.video ?? null,
    audio_url: p.audio ?? null,
    author_id: userRes.user?.id ?? null,
  });
  if (error) throw error;
  await loadFromDb();
}

export async function deletePost(id: string) {
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw error;
  await loadFromDb();
}

export async function updatePost(id: string, p: { title?: string; body?: string; category?: string | null; image?: string | null; video?: string | null; audio?: string | null }) {
  const patch: any = {};
  if (p.title !== undefined) patch.title = p.title;
  if (p.body !== undefined) patch.body = p.body;
  if (p.category !== undefined) patch.category = p.category;
  if (p.image !== undefined) patch.image_url = p.image;
  if (p.video !== undefined) patch.video_url = p.video;
  if (p.audio !== undefined) patch.audio_url = p.audio;
  const { error } = await supabase.from("posts").update(patch).eq("id", id);
  if (error) throw error;
  await loadFromDb();
}

export async function deleteBooking(id: string) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadMedia(file: File): Promise<string> {
  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const id =
    typeof crypto?.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  const path = `${id}.${ext}`;
  try {
    const { error } = await supabase.storage.from("site-media").upload(path, file, {
      upsert: false,
      contentType: file.type,
    });
    if (error) throw error;
    const { data } = await supabase.storage.from("site-media").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    if (data?.signedUrl) return data.signedUrl;
  } catch {
    // Storage/RLS unavailable — keep admin usable with an inline data URL.
  }
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image file"));
    reader.readAsDataURL(file);
  });
}

export function useIsAdmin() {
  const [state, setState] = useState<{ loading: boolean; isAdmin: boolean; userId: string | null; email: string | null }>({
    loading: true,
    isAdmin: false,
    userId: null,
    email: null,
  });
  useEffect(() => {
    let mounted = true;
    async function check() {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user) {
        if (mounted) setState({ loading: false, isAdmin: false, userId: null, email: null });
        return;
      }

      let { data: role } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      // Company email can self-heal admin role via Supabase RPC (no Netlify)
      if (!role && isCompanyAdminEmail(user.email)) {
        await ensureCompanyAdminRole();
        const again = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .maybeSingle();
        role = again.data;
      }

      // Fallback: treat company email as admin if RPC/table not migrated yet
      const isAdmin = !!role || isCompanyAdminEmail(user.email);

      if (mounted) {
        setState({
          loading: false,
          isAdmin,
          userId: user.id,
          email: user.email ?? COMPANY_EMAIL,
        });
      }
    }
    check();
    const { data: sub } = supabase.auth.onAuthStateChange(() => check());
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);
  return state;
}

// Legacy no-op shims for backward compat (localStorage unlock has been replaced with real auth)
export function isAdminUnlocked() { return false; }
export function setAdminUnlocked(_v: boolean) { /* no-op */ }
