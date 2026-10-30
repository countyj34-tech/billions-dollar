import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Cvh8bbT6.mjs";
import { i as isCompanyAdminEmail, r as ensureCompanyAdminRole } from "./admin-auth-Djo-HNiz.mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-store-CpNrkdrk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var CONTENT_KEY = "content";
var LOCAL_FALLBACK_KEY = "bet_site_content_fallback";
var cache = {};
var loaded = false;
var loading = null;
var listeners = /* @__PURE__ */ new Set();
function notify() {
	cache = { ...cache };
	listeners.forEach((l) => l());
}
function readLocalFallback() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(LOCAL_FALLBACK_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function writeLocalFallback(content) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(LOCAL_FALLBACK_KEY, JSON.stringify(content));
	} catch {}
}
function applyLocalFallback(base) {
	const local = readLocalFallback();
	if (!local) return base;
	return {
		...base,
		...local,
		posts: base.posts
	};
}
async function loadFromDb() {
	if (loading) return loading;
	loading = (async () => {
		try {
			const [contentRes, postsRes] = await Promise.all([supabase.from("site_settings").select("value").eq("key", CONTENT_KEY).maybeSingle(), supabase.from("posts").select("*").order("created_at", { ascending: false })]);
			const content = contentRes.data?.value || {};
			const posts = (postsRes.data || []).map((p) => ({
				id: p.id,
				title: p.title,
				body: p.body || "",
				image: p.image_url || void 0,
				video: p.video_url || void 0,
				audio: p.audio_url || void 0,
				category: p.category || void 0,
				date: new Date(p.created_at).toLocaleDateString()
			}));
			cache = applyLocalFallback({
				...content,
				posts
			});
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
	supabase.channel("site-store").on("postgres_changes", {
		event: "*",
		schema: "public",
		table: "site_settings"
	}, () => loadFromDb()).on("postgres_changes", {
		event: "*",
		schema: "public",
		table: "posts"
	}, () => loadFromDb()).subscribe();
}
function useSiteOverrides() {
	const [state, setState] = (0, import_react.useState)(cache);
	(0, import_react.useEffect)(() => {
		const l = () => setState(cache);
		listeners.add(l);
		if (!loaded) loadFromDb().then(() => setState(cache));
		else setState(cache);
		return () => {
			listeners.delete(l);
		};
	}, []);
	const setter = async (next) => {
		const { posts: _p, ...rest } = next;
		await saveContent(rest);
	};
	return [state, setter];
}
async function saveContent(content) {
	cache = {
		...content,
		posts: cache.posts
	};
	notify();
	writeLocalFallback(content);
	try {
		const { data: sessionRes } = await supabase.auth.getSession();
		const accessToken = sessionRes.session?.access_token;
		if (accessToken) {
			const { saveSiteContentAdmin } = await import("./admin-save-content.functions-Cyk-dRhD.mjs");
			await saveSiteContentAdmin({ data: {
				content,
				accessToken
			} });
			await loadFromDb();
			return;
		}
	} catch (serverErr) {
		const msg = serverErr instanceof Error ? serverErr.message : String(serverErr);
		if (!/SERVICE_ROLE|service_role|missing SUPABASE_SERVICE_ROLE|Session expired|fetch failed|Failed to fetch/i.test(msg)) {
			const { error } = await supabase.from("site_settings").upsert({
				key: CONTENT_KEY,
				value: content
			});
			if (!error) {
				await loadFromDb();
				return;
			}
		}
		return;
	}
	const { error } = await supabase.from("site_settings").upsert({
		key: CONTENT_KEY,
		value: content
	});
	if (error) return;
	await loadFromDb();
}
async function patchOverrides(patch) {
	const { posts: _posts, ...contentPatch } = patch;
	const { posts: _current, ...current } = cache;
	await saveContent({
		...current,
		...contentPatch
	});
}
async function addPost(p) {
	const { data: userRes } = await supabase.auth.getUser();
	const { error } = await supabase.from("posts").insert({
		title: p.title,
		body: p.body,
		category: p.category ?? null,
		image_url: p.image ?? null,
		video_url: p.video ?? null,
		audio_url: p.audio ?? null,
		author_id: userRes.user?.id ?? null
	});
	if (error) throw error;
	await loadFromDb();
}
async function deletePost(id) {
	const { error } = await supabase.from("posts").delete().eq("id", id);
	if (error) throw error;
	await loadFromDb();
}
async function updatePost(id, p) {
	const patch = {};
	if (p.title !== void 0) patch.title = p.title;
	if (p.body !== void 0) patch.body = p.body;
	if (p.category !== void 0) patch.category = p.category;
	if (p.image !== void 0) patch.image_url = p.image;
	if (p.video !== void 0) patch.video_url = p.video;
	if (p.audio !== void 0) patch.audio_url = p.audio;
	const { error } = await supabase.from("posts").update(patch).eq("id", id);
	if (error) throw error;
	await loadFromDb();
}
async function deleteBooking(id) {
	const { error } = await supabase.from("bookings").delete().eq("id", id);
	if (error) throw error;
}
async function uploadMedia(file) {
	const ext = (file.name.split(".").pop() || "bin").toLowerCase();
	const path = `${typeof crypto?.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`}.${ext}`;
	try {
		const { error } = await supabase.storage.from("site-media").upload(path, file, {
			upsert: false,
			contentType: file.type
		});
		if (error) throw error;
		const { data } = await supabase.storage.from("site-media").createSignedUrl(path, 3600 * 24 * 365 * 10);
		if (data?.signedUrl) return data.signedUrl;
	} catch {}
	return await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result || ""));
		reader.onerror = () => reject(/* @__PURE__ */ new Error("Could not read image file"));
		reader.readAsDataURL(file);
	});
}
function useIsAdmin() {
	const [state, setState] = (0, import_react.useState)({
		loading: true,
		isAdmin: false,
		userId: null,
		email: null
	});
	(0, import_react.useEffect)(() => {
		let mounted = true;
		async function check() {
			const { data } = await supabase.auth.getUser();
			const user = data.user;
			if (!user) {
				if (mounted) setState({
					loading: false,
					isAdmin: false,
					userId: null,
					email: null
				});
				return;
			}
			let { data: role } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
			if (!role && isCompanyAdminEmail(user.email)) {
				await ensureCompanyAdminRole();
				role = (await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle()).data;
			}
			const isAdmin = !!role || isCompanyAdminEmail(user.email);
			if (mounted) setState({
				loading: false,
				isAdmin,
				userId: user.id,
				email: user.email ?? "besteasterntravel@yahoo.com"
			});
		}
		check();
		const { data: sub } = supabase.auth.onAuthStateChange(() => check());
		return () => {
			mounted = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	return state;
}
//#endregion
export { updatePost as a, useSiteOverrides as c, patchOverrides as i, deleteBooking as n, uploadMedia as o, deletePost as r, useIsAdmin as s, addPost as t };
