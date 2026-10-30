import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BJCp0d99.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-save-content.functions-Cyk-dRhD.js
/**
* Persist site CMS content with the service role (bypasses RLS).
* Caller must be the company admin (verified via their access token).
*/
var saveSiteContentAdmin = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("3408f76c0c7a8c52288a470623fdcc4292baf8f5de9ee92e17cdcb088d50b1c5"));
//#endregion
export { saveSiteContentAdmin };
