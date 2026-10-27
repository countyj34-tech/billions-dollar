import { t as COMPANY_EMAIL } from "./company-_OYE8Ubt.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-save-content.functions-Yj5bQIU5.js
var CONTENT_KEY = "content";
var ADMIN_EMAIL = COMPANY_EMAIL.toLowerCase();
function env(name) {
	return (typeof process !== "undefined" ? process.env?.[name] : void 0)?.trim() || "";
}
function isServiceRoleKey(key) {
	if (!key) return false;
	if (key.startsWith("sb_secret_")) return true;
	if (key.includes("PASTE_") || key.includes("HERE") || key.includes("EXAMPLE")) return false;
	try {
		return JSON.parse(Buffer.from(key.split(".")[1] || "", "base64url").toString("utf8")).role === "service_role";
	} catch {
		return false;
	}
}
/**
* Persist site CMS content with the service role (bypasses RLS).
* Caller must be the company admin (verified via their access token).
*/
var saveSiteContentAdmin_createServerFn_handler = createServerRpc({
	id: "3408f76c0c7a8c52288a470623fdcc4292baf8f5de9ee92e17cdcb088d50b1c5",
	name: "saveSiteContentAdmin",
	filename: "src/lib/admin-save-content.functions.ts"
}, (opts) => saveSiteContentAdmin.__executeServer(opts));
var saveSiteContentAdmin = createServerFn({ method: "POST" }).validator((data) => data).handler(saveSiteContentAdmin_createServerFn_handler, async ({ data }) => {
	const url = env("SUPABASE_URL") || env("VITE_SUPABASE_URL") || "https://rvzmwmkdxhvlkmeqecto.supabase.co";
	const anon = env("SUPABASE_PUBLISHABLE_KEY") || env("VITE_SUPABASE_PUBLISHABLE_KEY") || env("VITE_SUPABASE_ANON_KEY") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2em13bWtkeGh2bGttZXFlY3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0OTQyODksImV4cCI6MjA5OTA3MDI4OX0.6T4trJF2YMu80dg6xfMXAzm7H0IAsfce4kmxehOnWqk";
	const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SECRET_KEY") || "";
	if (!data.accessToken) throw new Error("You must be signed in to save.");
	const { data: userRes, error: userErr } = await createClient(url, anon, {
		global: { headers: { Authorization: `Bearer ${data.accessToken}` } },
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	}).auth.getUser();
	if (userErr || !userRes.user) throw new Error("Session expired. Sign in again.");
	if ((userRes.user.email || "").toLowerCase() !== ADMIN_EMAIL) throw new Error(`Only ${ADMIN_EMAIL} can save site content.`);
	if (!isServiceRoleKey(serviceKey)) throw new Error("Server is missing SUPABASE_SERVICE_ROLE_KEY for project rvzmwmkdxhvlkmeqecto. Paste the service_role secret into .env (no VITE_ prefix), restart npm run dev, then Save again.");
	const { supabaseAdmin } = await import("./client.server-CvRiozd1.mjs");
	const { error } = await supabaseAdmin.from("site_settings").upsert({
		key: CONTENT_KEY,
		value: data.content
	});
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { saveSiteContentAdmin_createServerFn_handler };
