import { i as __toESM } from "../_runtime.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { D as ChevronLeft, E as ChevronRight, O as Check, t as X } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Route } from "./itineraries._slug-BhSkcjyO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/itineraries._slug-00W0fdZk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/itineraries.$slug.tsx?tsr-split=component";
function ItineraryDetail() {
	const it = Route.useLoaderData();
	const galleryImages = Array.from(new Map(it.sections.map((section) => [section.image, {
		src: section.image,
		alt: section.imageAlt
	}])).values());
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
	const [direction, setDirection] = (0, import_react.useState)("next");
	const [animKey, setAnimKey] = (0, import_react.useState)(0);
	const [entered, setEntered] = (0, import_react.useState)(false);
	const touchStartX = (0, import_react.useRef)(null);
	const isOpen = activeIndex !== null;
	const activeImage = isOpen ? galleryImages[activeIndex] : null;
	const goTo = (0, import_react.useEffectEvent)((nextIndex, dir) => {
		setDirection(dir);
		setAnimKey((k) => k + 1);
		setActiveIndex(nextIndex);
	});
	const showNext = (0, import_react.useEffectEvent)(() => {
		if (activeIndex === null) return;
		goTo((activeIndex + 1) % galleryImages.length, "next");
	});
	const showPrev = (0, import_react.useEffectEvent)(() => {
		if (activeIndex === null) return;
		goTo((activeIndex - 1 + galleryImages.length) % galleryImages.length, "prev");
	});
	const closeLightbox = (0, import_react.useEffectEvent)(() => {
		setEntered(false);
		window.setTimeout(() => setActiveIndex(null), 220);
	});
	const openLightbox = (index) => {
		setDirection("next");
		setAnimKey((k) => k + 1);
		setActiveIndex(index);
		setEntered(false);
		requestAnimationFrame(() => setEntered(true));
	};
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const id = requestAnimationFrame(() => setEntered(true));
		return () => cancelAnimationFrame(id);
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const onKey = (e) => {
			if (e.key === "Escape") closeLightbox();
			if (e.key === "ArrowRight") showNext();
			if (e.key === "ArrowLeft") showPrev();
		};
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		const timer = window.setInterval(() => showNext(), 4500);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKey);
			window.clearInterval(timer);
		};
	}, [isOpen]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative h-[40vh] sm:h-[46vh] -mt-20 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: it.heroImage,
					alt: it.title,
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-navy/90" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/itineraries",
							className: "text-white/70 hover:text-gold text-sm mb-4 inline-block",
							children: "← All itineraries"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
							children: [
								it.nights,
								" nights · ",
								it.destinations
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-white text-3xl sm:text-4xl md:text-5xl max-w-4xl",
							children: it.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 11
						}, this),
						it.tagline && /* @__PURE__ */ (void 0)("p", {
							className: "text-white/85 text-lg mt-4 max-w-2xl",
							children: it.tagline
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 26
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 69,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-16 max-w-7xl mx-auto px-5 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: "Overview"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-lg text-muted-foreground leading-relaxed",
					children: it.overview
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: it.featuredCamps.map((camp) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-5 rounded-xl border bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs tracking-widest uppercase text-emerald-brand mb-1",
								children: camp.nights
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-display text-xl text-navy",
								children: camp.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 17
							}, this),
							camp.note && /* @__PURE__ */ (void 0)("div", {
								className: "text-sm text-muted-foreground mt-1",
								children: camp.note
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 31
							}, this)
						]
					}, camp.name, true, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 43
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-16 lg:py-20 max-w-7xl mx-auto px-5 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "rounded-2xl border bg-card/80 p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
						children: "Itinerary Details"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-9",
						children: [it.sections.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
							section.kicker && /* @__PURE__ */ (void 0)("div", {
								className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2",
								children: section.kicker
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 38
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-3xl md:text-4xl text-navy mb-5",
								children: section.heading
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-4 text-muted-foreground leading-relaxed",
								children: section.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: p }, p.slice(0, 50), false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 50
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 19
							}, this),
							section.bullets && section.bullets.length > 0 && /* @__PURE__ */ (void 0)("ul", {
								className: "mt-6 space-y-2",
								children: section.bullets.map((b) => /* @__PURE__ */ (void 0)("li", {
									className: "flex gap-2 text-sm text-navy",
									children: [/* @__PURE__ */ (void 0)(Check, {
										size: 16,
										className: "text-emerald-brand mt-0.5 shrink-0"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 27
									}, this), b]
								}, b, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 49
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 69
							}, this)
						] }, section.heading, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 43
						}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid md:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-6 rounded-2xl border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-2xl text-navy mb-5",
									children: "Inclusions"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "space-y-3",
									children: it.inclusions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
										className: "flex gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
											size: 18,
											className: "text-emerald-brand shrink-0 mt-0.5"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 126,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 127,
											columnNumber: 25
										}, this)]
									}, item, true, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 48
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-6 rounded-2xl border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-2xl text-navy mb-5",
									children: "Exclusions"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 132,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "space-y-3",
									children: it.exclusions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
										className: "flex gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {
											size: 18,
											className: "text-muted-foreground shrink-0 mt-0.5"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 135,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 25
										}, this)]
									}, item, true, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 48
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 lg:grid-cols-3 gap-3",
					children: galleryImages.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => openLightbox(index),
						className: "block w-full text-left rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-luxury transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: image.src,
								alt: image.alt,
								className: "w-full h-full object-cover",
								loading: "lazy"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 19
						}, this)
					}, image.src, false, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 52
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 100,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy text-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-3xl mx-auto px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-3xl md:text-4xl mb-4",
						children: "Request pricing for this itinerary"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 158,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-white/75 mb-8",
						children: "Contact us for rates, availability and a tailor-made version of this journey."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "px-8 py-3 rounded-full bg-gold text-navy font-semibold hover:bg-gold/90",
							children: "Get a quote"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/book",
							className: "px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10",
							children: "Start planning"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 7
		}, this),
		activeImage && activeIndex !== null && /* @__PURE__ */ (void 0)("div", {
			className: `fixed inset-0 z-[100] bg-black transition-opacity duration-300 ${entered ? "opacity-100" : "opacity-0"}`,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Image gallery",
			onClick: closeLightbox,
			onTouchStart: (e) => {
				touchStartX.current = e.changedTouches[0]?.clientX ?? null;
			},
			onTouchEnd: (e) => {
				const start = touchStartX.current;
				const end = e.changedTouches[0]?.clientX;
				touchStartX.current = null;
				if (start == null || end == null) return;
				const delta = end - start;
				if (Math.abs(delta) < 50) return;
				if (delta < 0) showNext();
				else showPrev();
			},
			children: [
				/* @__PURE__ */ (void 0)("div", {
					className: "absolute inset-0 overflow-hidden",
					children: [/* @__PURE__ */ (void 0)("img", {
						src: activeImage.src,
						alt: activeImage.alt,
						className: `absolute inset-0 h-full w-full object-cover select-none ${direction === "next" ? "animate-gallery-next" : "animate-gallery-prev"}`,
						onClick: (e) => e.stopPropagation(),
						draggable: false
					}, animKey, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/45 pointer-events-none" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 186,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 184,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("button", {
					type: "button",
					className: "absolute top-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm px-4 py-2 text-white hover:bg-white/15 transition",
					onClick: (e) => {
						e.stopPropagation();
						closeLightbox();
					},
					children: [/* @__PURE__ */ (void 0)(X, { size: 16 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 13
					}, this), " Close"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 189,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "absolute top-5 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black/35 backdrop-blur-sm px-4 py-1.5 text-white/90 text-sm tracking-wide",
					children: [
						activeIndex + 1,
						" / ",
						galleryImages.length
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("p", {
					className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 max-w-2xl px-6 text-center text-white/90 text-sm sm:text-base",
					children: activeImage.alt
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("button", {
					type: "button",
					"aria-label": "Previous image",
					className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm text-white hover:bg-white/15 flex items-center justify-center transition",
					onClick: (e) => {
						e.stopPropagation();
						showPrev();
					},
					children: /* @__PURE__ */ (void 0)(ChevronLeft, { size: 28 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 208,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 204,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("button", {
					type: "button",
					"aria-label": "Next image",
					className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 bg-black/35 backdrop-blur-sm text-white hover:bg-white/15 flex items-center justify-center transition",
					onClick: (e) => {
						e.stopPropagation();
						showNext();
					},
					children: /* @__PURE__ */ (void 0)(ChevronRight, { size: 28 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 215,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 173,
			columnNumber: 47
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 68,
		columnNumber: 10
	}, this);
}
//#endregion
export { ItineraryDetail as component };
