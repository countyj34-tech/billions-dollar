import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client.server-CvRiozd1.js
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function env(name) {
	const fromProcess = typeof process !== "undefined" ? process.env?.[name] : void 0;
	const fromVite = typeof import.meta !== "undefined" ? {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "rvzmwmkdxhvlkmeqecto",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2em13bWtkeGh2bGttZXFlY3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0OTQyODksImV4cCI6MjA5OTA3MDI4OX0.6T4trJF2YMu80dg6xfMXAzm7H0IAsfce4kmxehOnWqk",
		"VITE_SUPABASE_URL": "https://rvzmwmkdxhvlkmeqecto.supabase.co",
		"VITE_USER_NODE_ENV": "development"
	}[name] : void 0;
	return (fromProcess || fromVite || "").trim();
}
function resolveSupabaseUrl() {
	return env("SUPABASE_URL") || env("VITE_SUPABASE_URL") || "https://rvzmwmkdxhvlkmeqecto.supabase.co";
}
function resolveSupabaseKey() {
	return env("SUPABASE_SERVICE_ROLE_KEY") || env("SUPABASE_SECRET_KEY") || env("SUPABASE_PUBLISHABLE_KEY") || env("VITE_SUPABASE_PUBLISHABLE_KEY") || env("VITE_SUPABASE_ANON_KEY") || env("SUPABASE_ANON_KEY") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2em13bWtkeGh2bGttZXFlY3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0OTQyODksImV4cCI6MjA5OTA3MDI4OX0.6T4trJF2YMu80dg6xfMXAzm7H0IAsfce4kmxehOnWqk";
}
function createSupabaseAdminClient() {
	const SUPABASE_URL = resolveSupabaseUrl();
	const SUPABASE_KEY = resolveSupabaseKey();
	if (!SUPABASE_URL || !SUPABASE_KEY) {
		const missing = [...!SUPABASE_URL ? ["SUPABASE_URL / VITE_SUPABASE_URL"] : [], ...!SUPABASE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_PUBLISHABLE_KEY"] : []];
		throw new Error(`Missing Supabase environment variable(s): ${missing.join(", ")}.`);
	}
	return createClient(SUPABASE_URL, SUPABASE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_KEY) },
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		}
	});
}
var _supabaseAdmin;
var supabaseAdmin = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
	return Reflect.get(_supabaseAdmin, prop, receiver);
} });
//#endregion
export { supabaseAdmin };
