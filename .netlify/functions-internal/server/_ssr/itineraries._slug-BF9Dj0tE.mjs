import { I as notFound, h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getItinerary } from "./itineraries-iMuorDTU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/itineraries._slug-BF9Dj0tE.js
var $$splitComponentImporter = () => import("./itineraries._slug-CuVDsRME.mjs");
var $$splitNotFoundComponentImporter = () => import("./itineraries._slug-CQZNC8lT.mjs");
var Route = createFileRoute("/itineraries/$slug")({
	head: ({ params }) => {
		const it = getItinerary(params.slug);
		return { meta: [
			{ title: `${it ? `${it.nights} Nights — ${it.title}` : "Itinerary"} — Best Eastern Travel` },
			{
				name: "description",
				content: it?.overview ?? "Zambia safari itinerary"
			},
			...it?.heroImage ? [{
				property: "og:image",
				content: it.heroImage
			}] : []
		] };
	},
	loader: ({ params }) => {
		const it = getItinerary(params.slug);
		if (!it || it.comingSoon) throw notFound();
		return it;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
