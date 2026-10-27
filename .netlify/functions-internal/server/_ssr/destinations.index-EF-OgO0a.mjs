import { i as __toESM } from "../_runtime.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CsFkAGgL.mjs";
import { c as resolveDestinationRegions, g as resolvePageSection } from "./site-content-BQK353ek.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as countrySlug, t as countryInfo } from "./countries-CZYt9kkI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations.index-EF-OgO0a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function prefetchImages(urls) {
	if (typeof window === "undefined") return;
	const unique = [...new Set(urls.filter(Boolean))];
	for (const url of unique) {
		const image = new Image();
		image.decoding = "async";
		image.src = url;
	}
}
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/destinations.index.tsx?tsr-split=component";
function Destinations() {
	const [overrides] = useSiteOverrides();
	const regions = resolveDestinationRegions(overrides);
	const page = resolvePageSection(overrides, "destinations");
	(0, import_react.useEffect)(() => {
		prefetchImages([
			page.heroImage,
			...regions.map((region) => region.image),
			...Object.values(countryInfo).flatMap((country) => [country.heroImage, ...country.attractions.map((item) => item.image)])
		]);
	}, [page.heroImage, regions]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative -mt-20 overflow-hidden h-[38svh] min-h-[220px] max-h-[340px] sm:h-[46svh] sm:max-h-[420px] lg:h-[52svh] lg:max-h-[520px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: page.heroImage,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover object-center"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: page.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-white text-5xl md:text-7xl",
					children: page.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "py-20 max-w-7xl mx-auto px-5 lg:px-10 space-y-16",
		children: regions.map(({ region, places: list, image }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid lg:grid-cols-[1fr_2fr] gap-10 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury bg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: image,
						alt: region,
						className: "w-full h-full object-cover object-center"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute bottom-6 left-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-gold mb-1",
							children: "Region"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-white text-4xl",
							children: region
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid sm:grid-cols-2 gap-3",
				children: list.map((place) => {
					const slug = countrySlug(place);
					const hasPage = !!countryInfo[slug];
					const inner = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-lg",
							children: place
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 23
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-emerald-brand group-hover:text-gold",
							children: "→"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 21
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-muted-foreground group-hover:text-white/60 mt-1",
						children: hasPage ? "Explore country guide" : "Tailored itineraries available"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 21
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 27
					}, this);
					const cls = "group block p-5 rounded-xl border bg-card hover:bg-navy hover:text-white transition-colors cursor-pointer";
					return hasPage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/destinations/$country",
						params: { country: slug },
						className: cls,
						children: inner
					}, place, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 30
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: cls,
						children: inner
					}, place, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 29
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 13
			}, this)]
		}, region, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 13
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { Destinations as component };
