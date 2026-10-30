import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { s as forcedCountryPhotos } from "./site-data-KEWOZufF.mjs";
import { t as mergeCountryInfo } from "./site-content-BQK353ek.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Route } from "./destinations._country-DOq7t5Y7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._country-ByavwpcK.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "D:/BIllions-app/src/components/DestinationPhoto.tsx";
function DestinationPhoto({ src, alt, className = "", fallback, priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src,
		alt,
		loading: priority ? "eager" : "eager",
		fetchPriority: priority ? "high" : "high",
		decoding: priority ? "sync" : "async",
		className: `h-full w-full object-cover object-center ${className}`,
		onError: (event) => {
			const image = event.currentTarget;
			if (fallback && image.dataset.fallback !== "1") {
				image.dataset.fallback = "1";
				image.src = fallback;
			}
		}
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "D:/BIllions-app/src/routes/destinations.$country.tsx?tsr-split=component";
function CountryPage() {
	const base = Route.useLoaderData();
	const [overrides] = useSiteOverrides();
	const info = mergeCountryInfo(base, overrides.destinationContent?.[base.slug]);
	const forced = forcedCountryPhotos[base.slug];
	const imgs = overrides.destinationImages?.[base.slug];
	const slowRemote = (url) => !!url && /wikimedia\.org|upload\.wikimedia/.test(url);
	const heroImage = forced?.hero || (!slowRemote(imgs?.hero) ? imgs?.hero : void 0) || info.heroImage;
	const attractions = info.attractions.map((a) => ({
		...a,
		image: forced?.attractions?.[a.name] || (!slowRemote(imgs?.attractions?.[a.name]) ? imgs?.attractions?.[a.name] : void 0) || a.image
	}));
	const gallery = imgs?.gallery || [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative -mt-20 overflow-hidden h-[42svh] min-h-[240px] max-h-[360px] sm:h-[50svh] sm:max-h-[460px] lg:h-[58svh] lg:min-h-[340px] lg:max-h-[580px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DestinationPhoto, {
					src: heroImage,
					alt: info.name,
					fallback: info.heroImage,
					priority: true,
					className: "absolute inset-0"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-navy/90" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3",
							children: info.region
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
							children: info.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-white/85 max-w-2xl mt-3 sm:mt-4 text-base sm:text-lg",
							children: info.overview
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6",
			children: Object.entries(info.facts).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-5 rounded-xl border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-[10px] tracking-[0.25em] uppercase text-emerald-brand mb-2",
					children: k
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "font-display text-lg leading-snug",
					children: v
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 13
				}, this)]
			}, k, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 53
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 pb-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
				children: info.whatToSeeLabel
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-4xl md:text-5xl",
				children: info.experiencesHeading
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 pb-24 space-y-10",
			children: attractions.map((a, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: `grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DestinationPhoto, {
						src: a.image,
						alt: a.name,
						fallback: info.heroImage,
						priority: true,
						className: "hover:scale-105 transition-transform duration-700"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2",
						children: ["Highlight ", String(i + 1).padStart(2, "0")]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-3xl md:text-4xl mb-4",
						children: a.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-muted-foreground text-lg leading-relaxed",
						children: a.description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 13
				}, this)]
			}, a.name, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 36
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 7
		}, this),
		gallery.length > 0 && /* @__PURE__ */ (void 0)("section", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 pb-24",
			children: [
				/* @__PURE__ */ (void 0)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: "Gallery"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-3xl md:text-4xl mb-8",
					children: ["More from ", info.name]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: gallery.map((src, gi) => /* @__PURE__ */ (void 0)("div", {
						className: "aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-xl shadow-luxury bg-muted",
						children: /* @__PURE__ */ (void 0)(DestinationPhoto, {
							src,
							alt: `${info.name} gallery`,
							className: "hover:scale-105 transition-transform duration-700"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 17
						}, this)
					}, gi, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 39
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 30
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy text-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-4xl mx-auto px-5 lg:px-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
						children: "Ready when you are"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl md:text-5xl mb-4",
						children: info.ctaTitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-white/75 mb-8",
						children: info.ctaBody
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-4 justify-center flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/book",
							className: "px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90",
							children: "Start planning"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/destinations",
							className: "px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white/10",
							children: "All destinations"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 10
	}, this);
}
//#endregion
export { CountryPage as component };
