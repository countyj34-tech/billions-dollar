import { I as notFound, h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as countryInfo } from "./countries-CZYt9kkI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._country-DOq7t5Y7.js
var $$splitComponentImporter = () => import("./destinations._country-ByavwpcK.mjs");
var $$splitErrorComponentImporter = () => import("./destinations._country-DGojqiyU.mjs");
var $$splitNotFoundComponentImporter = () => import("./destinations._country-C30uXIua.mjs");
var Route = createFileRoute("/destinations/$country")({
	head: ({ params }) => {
		const info = countryInfo[params.country];
		const title = info ? `${info.name} — Best Eastern Travel` : "Destination — Best Eastern Travel";
		const desc = info?.overview ?? "Tailored itineraries with Best Eastern Travel.";
		const imageLinks = info ? [info.heroImage, ...info.attractions.map((item) => item.image)].map((href) => ({
			rel: "preload",
			as: "image",
			href
		})) : [];
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc.slice(0, 160)
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc.slice(0, 160)
				},
				{
					property: "og:type",
					content: "article"
				},
				...info?.heroImage ? [{
					property: "og:image",
					content: info.heroImage
				}] : [],
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: imageLinks
		};
	},
	loader: ({ params }) => {
		const info = countryInfo[params.country];
		if (!info) throw notFound();
		return info;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
