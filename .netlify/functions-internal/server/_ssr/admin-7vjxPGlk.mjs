import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-7vjxPGlk.js
var $$splitComponentImporter = () => import("./admin-DxRAYOPQ.mjs");
var Route = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — Best Eastern Travel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var BLOG_CATEGORIES = [
	"Featured",
	"Travel Tips",
	"Visa Updates",
	"Destinations",
	"Company News",
	"News",
	"Promotions",
	"Newsletter"
];
//#endregion
export { Route as n, BLOG_CATEGORIES as t };
