import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as images } from "./site-data-KEWOZufF.mjs";
import { F as ArrowRight, T as Clock, _ as Mail, g as MapPin, s as Sparkles, w as Compass } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as itinerariesIntro, r as itineraries, t as _12_lioness_default } from "./itineraries-iMuorDTU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/itineraries.index-PjBlnF5U.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/itineraries.index.tsx?tsr-split=component";
function ItinerariesIndex() {
	const available = itineraries.filter((it) => !it.comingSoon);
	const comingSoon = itineraries.filter((it) => it.comingSoon);
	const introParagraphs = itinerariesIntro.body.split("\n\n");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative h-[36vh] sm:h-[42vh] -mt-20 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: images.vicfalls2,
					alt: "",
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-white text-4xl sm:text-5xl md:text-7xl max-w-4xl leading-tight",
						children: itinerariesIntro.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-white/80 text-lg mt-4 max-w-2xl",
						children: "Handcrafted Zambia safaris — luxury lodges, remote bush camps and unforgettable wildlife."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-16 lg:py-20 bg-muted/20 border-b",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: _12_lioness_default,
								alt: "Lioness on the Zambian savanna",
								className: "w-full h-full object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-5 left-5 right-5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-white/90 text-sm",
									children: "Expertly planned journeys across Zambia's finest parks."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
							children: "About our itineraries"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl md:text-4xl text-navy mb-6",
							children: "Every trip is tailored to you"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-4 text-muted-foreground text-lg leading-relaxed",
							children: introParagraphs.map((para) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: para }, para.slice(0, 40), false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 46
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 grid sm:grid-cols-3 gap-4",
							children: [
								{
									icon: Compass,
									label: "Tailor-made planning"
								},
								{
									icon: Sparkles,
									label: "Hand-picked lodges"
								},
								{
									icon: Mail,
									label: "Custom quotes on request"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2 text-sm text-navy",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-brand/10 text-emerald-brand",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { size: 16 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 58,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 21
								}, this)]
							}, label, true, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-16 lg:py-20 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-2",
					children: "Browse itineraries"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-3xl md:text-4xl text-navy",
					children: "Available now"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground max-w-md",
					children: "Full day-by-day details, lodge information, inclusions and photography for each journey."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: available.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/itineraries/$slug",
					params: { slug: it.slug },
					className: "group rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-luxury transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative aspect-[3/2] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: it.cardImage,
								alt: it.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute top-4 left-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] tracking-widest uppercase bg-gold text-navy px-2.5 py-1 rounded-full font-semibold",
									children: [it.nights, " nights"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] tracking-widest uppercase bg-white/90 text-navy px-2.5 py-1 rounded-full font-semibold",
									children: it.destinations
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-5 left-5 right-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-white text-xl md:text-2xl leading-tight",
									children: it.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 19
								}, this), it.tagline && /* @__PURE__ */ (void 0)("p", {
									className: "text-white/80 text-sm mt-2 line-clamp-2",
									children: it.tagline
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 34
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-5 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground line-clamp-2 flex-1",
							children: it.overview
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1.5 text-emerald-brand font-semibold text-sm shrink-0",
							children: ["View ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
								size: 16,
								className: "group-hover:translate-x-0.5 transition-transform"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 24
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 15
					}, this)]
				}, it.slug, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 7
		}, this),
		comingSoon.length > 0 && /* @__PURE__ */ (void 0)("section", {
			className: "pb-20 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (void 0)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2",
					children: "Coming soon"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-2xl md:text-3xl text-navy",
					children: "More journeys being added"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: comingSoon.map((it) => /* @__PURE__ */ (void 0)("article", {
					className: "rounded-xl overflow-hidden border bg-card/60 opacity-90",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "relative aspect-[3/2] overflow-hidden",
						children: [
							/* @__PURE__ */ (void 0)("img", {
								src: it.cardImage,
								alt: it.title,
								className: "w-full h-full object-cover grayscale-[20%]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("div", { className: "absolute inset-0 bg-navy/30" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("span", {
								className: "absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white/90 text-navy px-2 py-0.5 rounded-full font-semibold",
								children: "Coming soon"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 19
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 17
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-3 text-xs text-muted-foreground mb-2",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (void 0)(Clock, { size: 12 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 23
									}, this),
									" ",
									it.nights,
									" nights"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center gap-1 min-w-0",
								children: [/* @__PURE__ */ (void 0)(MapPin, {
									size: 12,
									className: "shrink-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "truncate",
									children: it.destinations
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("h3", {
							className: "font-display text-lg text-navy leading-snug",
							children: it.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 17
					}, this)]
				}, it.slug, true, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 33
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy text-white py-16 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-3xl md:text-4xl mb-4",
						children: "Want a custom itinerary?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 144,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-white/75 text-lg leading-relaxed",
						children: "These are sample journeys only. Tell us your dates, budget and interests — our specialists will design a personalised Zambia safari just for you."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 145,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col sm:flex-row lg:justify-end gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "mailto:besteasterntravel@yahoo.com",
							className: "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 17
							}, this), " Email us"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "inline-flex items-center justify-center px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90",
							children: "Get a quote"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 142,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 141,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 140,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { ItinerariesIndex as component };
