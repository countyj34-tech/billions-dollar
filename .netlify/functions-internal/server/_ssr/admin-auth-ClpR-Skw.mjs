import { t as COMPANY_EMAIL } from "./company-_OYE8Ubt.mjs";
import { t as supabase } from "./client-BRDzsObU.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B-sLGOPY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-auth-ClpR-Skw.js
/**
* Idempotent: ensures the company admin account exists with the fixed password
* and has the admin role. Requires SUPABASE_SERVICE_ROLE_KEY on the server.
*/
var bootstrapAdmin = createServerFn({ method: "POST" }).handler(createSsrRpc("374c092bf2767e587aa35cf144fd5fd7023fe8a30cd77bc5d5549ef7dcd53ac7"));
var ADMIN_EMAIL = COMPANY_EMAIL.toLowerCase();
/** Default console password used when creating the admin account in Supabase Auth. */
var ADMIN_PASSWORD = "@2006@";
function isCompanyAdminEmail(email) {
	return (email || "").trim().toLowerCase() === ADMIN_EMAIL;
}
/** After a successful Supabase Auth session, grant admin if this is the company email. */
async function ensureCompanyAdminRole() {
	const { data, error } = await supabase.rpc("ensure_company_admin");
	if (error) {
		console.error("ensure_company_admin failed", error);
		return false;
	}
	return Boolean(data);
}
/**
* Sign in to the admin console using Supabase Auth.
* On first login, provisions the company account server-side (service role) so the
* fixed password is not blocked by Supabase “leaked password” checks on signUp.
*/
async function signInCompanyAdmin(email, password) {
	const emailNorm = email.trim().toLowerCase();
	if (!isCompanyAdminEmail(emailNorm)) throw new Error(`Only ${ADMIN_EMAIL} can access the admin console.`);
	if (!password) throw new Error("Enter your password.");
	const attemptSignIn = () => supabase.auth.signInWithPassword({
		email: emailNorm,
		password
	});
	let result = await attemptSignIn();
	if (!result.error) {
		await ensureCompanyAdminRole();
		return result.data;
	}
	const msg = result.error.message || "";
	try {
		await bootstrapAdmin();
		result = await attemptSignIn();
		if (!result.error) {
			await ensureCompanyAdminRole();
			return result.data;
		}
	} catch (bootstrapErr) {
		const bootstrapMsg = bootstrapErr instanceof Error ? bootstrapErr.message : String(bootstrapErr);
		if (/weak|easy to guess|leaked|pwned/i.test(bootstrapMsg)) throw new Error(`Supabase is blocking “${ADMIN_PASSWORD}” when resetting the admin password. Turn OFF leaked-password protection: Supabase → Authentication → Providers → Email → “Prevent use of leaked passwords” → disable → Save. Then try again.`);
		if (/SERVICE_ROLE|service_role|secret key/i.test(bootstrapMsg)) throw new Error(`Could not create the admin account automatically. Add SUPABASE_SERVICE_ROLE_KEY to your environment (Netlify → Site settings → Environment variables, or local .env.local), then try again. Or in Supabase → Authentication → Users, add ${ADMIN_EMAIL} with password ${ADMIN_PASSWORD} (you may need to disable leaked-password protection first).`);
		throw bootstrapErr instanceof Error ? bootstrapErr : new Error(bootstrapMsg);
	}
	const retryMsg = result.error?.message || "";
	if (/invalid login credentials|user not found/i.test(retryMsg)) throw new Error(password === "@2006@" ? `Sign-in failed after admin setup. In Supabase → Authentication → Providers → Email, turn OFF “Prevent use of leaked passwords”, then try again.` : `Wrong password for ${ADMIN_EMAIL}. The console password is ${ADMIN_PASSWORD}.`);
	if (/user not allowed/i.test(retryMsg)) throw new Error("Supabase Auth blocked this login. In Supabase → Authentication → Providers → Email, enable Email and allow sign-ins. Then try again.");
	throw new Error(retryMsg || msg);
}
//#endregion
export { signInCompanyAdmin as a, isCompanyAdminEmail as i, ADMIN_PASSWORD as n, ensureCompanyAdminRole as r, ADMIN_EMAIL as t };
