import { h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._id-CWNx10lP.js
var $$splitNotFoundComponentImporter = () => import("./blog._id-4D0noWdU.mjs");
var $$splitComponentImporter = () => import("./blog._id-X2ZWTl-c.mjs");
var Route = createFileRoute("/blog/$id")({
	head: ({ params }) => ({
		meta: [
			{ title: `Post — Best Eastern Travel` },
			{
				name: "description",
				content: `Read the full story on Best Eastern Travel's blog.`
			},
			{
				property: "og:title",
				content: `Best Eastern Travel Journal`
			}
		],
		_p: params
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
