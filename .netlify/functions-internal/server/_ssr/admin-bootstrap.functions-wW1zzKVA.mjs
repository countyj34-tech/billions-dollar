import { t as COMPANY_EMAIL } from "./company-_OYE8Ubt.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-bootstrap.functions-wW1zzKVA.js
var ADMIN_EMAIL = COMPANY_EMAIL.toLowerCase();
/** Fixed console password — bootstrap resets the account to this when needed. */
var ADMIN_PASSWORD = "@2006@";
function isServiceRoleKey(key) {
	if (!key) return false;
	if (key.startsWith("sb_secret_")) return true;
	try {
		return JSON.parse(Buffer.from(key.split(".")[1] || "", "base64url").toString("utf8")).role === "service_role";
	} catch {
		return false;
	}
}
/**
* Idempotent: ensures the company admin account exists with the fixed password
* and has the admin role. Requires SUPABASE_SERVICE_ROLE_KEY on the server.
*/
var bootstrapAdmin_createServerFn_handler = createServerRpc({
	id: "374c092bf2767e587aa35cf144fd5fd7023fe8a30cd77bc5d5549ef7dcd53ac7",
	name: "bootstrapAdmin",
	filename: "src/lib/admin-bootstrap.functions.ts"
}, (opts) => bootstrapAdmin.__executeServer(opts));
var bootstrapAdmin = createServerFn({ method: "POST" }).handler(bootstrapAdmin_createServerFn_handler, async () => {
	const { supabaseAdmin } = await import("./client.server-BgBqizgp.mjs");
	const key = typeof process !== "undefined" && (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || "") || "";
	if (!isServiceRoleKey(key)) {
		const hint = key.includes("EXAMPLE") || key.includes("your-project") ? "Your SUPABASE_SERVICE_ROLE_KEY looks like a placeholder. Copy the real service_role key from Supabase → Project Settings → API into `.env` (and remove placeholder overrides from `.env.local`)." : "Use the service_role key from Supabase → Project Settings → API (not the anon/publishable key).";
		throw new Error(`Admin setup needs a valid SUPABASE_SERVICE_ROLE_KEY on the server. ${hint}`);
	}
	const list = await supabaseAdmin.auth.admin.listUsers({
		page: 1,
		perPage: 200
	});
	if (list.error) throw list.error;
	let user = list.data.users.find((u) => (u.email || "").toLowerCase() === ADMIN_EMAIL);
	if (!user) {
		const created = await supabaseAdmin.auth.admin.createUser({
			email: ADMIN_EMAIL,
			password: ADMIN_PASSWORD,
			email_confirm: true,
			password_check: false
		});
		if (created.error) throw created.error;
		user = created.data.user;
	} else {
		const updated = await supabaseAdmin.auth.admin.updateUserById(user.id, {
			password: ADMIN_PASSWORD,
			email_confirm: true,
			ban_duration: "none",
			password_check: false
		});
		if (updated.error) throw updated.error;
		user = updated.data.user;
	}
	const { error: roleErr } = await supabaseAdmin.from("user_roles").upsert({
		user_id: user.id,
		role: "admin"
	}, { onConflict: "user_id,role" });
	if (roleErr) throw roleErr;
	return { ok: true };
});
//#endregion
export { bootstrapAdmin_createServerFn_handler };
