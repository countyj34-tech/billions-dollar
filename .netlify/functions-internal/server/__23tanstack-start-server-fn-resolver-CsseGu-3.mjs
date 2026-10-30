//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CsseGu-3.js
var manifest = {
	"3408f76c0c7a8c52288a470623fdcc4292baf8f5de9ee92e17cdcb088d50b1c5": {
		functionName: "saveSiteContentAdmin_createServerFn_handler",
		importer: () => import("./_ssr/admin-save-content.functions-T9TcNnpF.mjs")
	},
	"374c092bf2767e587aa35cf144fd5fd7023fe8a30cd77bc5d5549ef7dcd53ac7": {
		functionName: "bootstrapAdmin_createServerFn_handler",
		importer: () => import("./_ssr/admin-bootstrap.functions-wW1zzKVA.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
