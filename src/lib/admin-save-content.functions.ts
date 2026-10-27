import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { COMPANY_EMAIL } from "@/lib/company";
import {
  PRODUCTION_SUPABASE_ANON_KEY,
  PRODUCTION_SUPABASE_URL,
} from "@/lib/supabase-defaults";

const CONTENT_KEY = "content";
const ADMIN_EMAIL = COMPANY_EMAIL.toLowerCase();

function env(name: string): string {
  return (typeof process !== "undefined" ? process.env?.[name] : undefined)?.trim() || "";
}

function isServiceRoleKey(key: string): boolean {
  if (!key) return false;
  if (key.startsWith("sb_secret_")) return true;
  if (key.includes("PASTE_") || key.includes("HERE") || key.includes("EXAMPLE")) return false;
  try {
    const payload = JSON.parse(
      Buffer.from(key.split(".")[1] || "", "base64url").toString("utf8"),
    ) as { role?: string };
    return payload.role === "service_role";
  } catch {
    return false;
  }
}

/**
 * Persist site CMS content with the service role (bypasses RLS).
 * Caller must be the company admin (verified via their access token).
 */
export const saveSiteContentAdmin = createServerFn({ method: "POST" })
  .validator((data: { content: Record<string, unknown>; accessToken: string }) => data)
  .handler(async ({ data }) => {
    const url =
      env("SUPABASE_URL") || env("VITE_SUPABASE_URL") || PRODUCTION_SUPABASE_URL;
    const anon =
      env("SUPABASE_PUBLISHABLE_KEY") ||
      env("VITE_SUPABASE_PUBLISHABLE_KEY") ||
      env("VITE_SUPABASE_ANON_KEY") ||
      PRODUCTION_SUPABASE_ANON_KEY;
    const serviceKey =
      env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SECRET_KEY") || "";

    if (!data.accessToken) {
      throw new Error("You must be signed in to save.");
    }

    const userClient = createClient(url, anon, {
      global: { headers: { Authorization: `Bearer ${data.accessToken}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: userRes, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userRes.user) {
      throw new Error("Session expired. Sign in again.");
    }
    if ((userRes.user.email || "").toLowerCase() !== ADMIN_EMAIL) {
      throw new Error(`Only ${ADMIN_EMAIL} can save site content.`);
    }

    if (!isServiceRoleKey(serviceKey)) {
      throw new Error(
        "Server is missing SUPABASE_SERVICE_ROLE_KEY for project rvzmwmkdxhvlkmeqecto. Paste the service_role secret into .env (no VITE_ prefix), restart npm run dev, then Save again.",
      );
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("site_settings").upsert({
      key: CONTENT_KEY,
      value: data.content as never,
    });
    if (error) throw error;
    return { ok: true as const };
  });
