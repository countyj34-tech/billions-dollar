import { i as __toESM } from "../_runtime.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { C as resolveTravelStyles, S as resolveTestimonials, _ as resolvePopularDestinations, b as resolveServices, d as resolveHomeStats, f as resolveInstagramImages, g as resolvePageSection, o as resolveContactInfo, u as resolveHeroSlides, w as resolveTrustStrip, y as resolveQuickServices } from "./site-content-BQK353ek.mjs";
import { C as Earth, M as Briefcase, d as Plane, j as Building2, k as Car, o as Star, v as Luggage } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dtlf7QvL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/index.tsx?tsr-split=component";
function Home() {
	const [overrides] = useSiteOverrides();
	const slides = resolveHeroSlides(overrides);
	const travelStyles = resolveTravelStyles(overrides);
	const services = resolveServices(overrides);
	const testimonials = resolveTestimonials(overrides);
	const popularDestinations = resolvePopularDestinations(overrides);
	const quickServices = resolveQuickServices(overrides);
	const trustStrip = resolveTrustStrip(overrides);
	const stats = resolveHomeStats(overrides);
	const social = resolveContactInfo(overrides);
	const igImages = resolveInstagramImages(overrides);
	resolvePageSection(overrides, "home.hero");
	const travelSection = resolvePageSection(overrides, "home.travelStyles");
	const aboutSection = resolvePageSection(overrides, "home.aboutTeaser");
	const servicesSection = resolvePageSection(overrides, "home.services");
	const destinationsSection = resolvePageSection(overrides, "home.popularDestinations");
	const testimonialsSection = resolvePageSection(overrides, "home.testimonials");
	const instagramSection = resolvePageSection(overrides, "home.instagram");
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
		return () => clearInterval(t);
	}, [slides.length]);
	const slide = slides[i];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative h-[100svh] -mt-20 overflow-hidden bg-navy-deep",
			children: [slides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: `absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: s.image,
					alt: s.title,
					className: `absolute inset-0 w-full h-full object-cover ${idx === i ? "animate-kenburns" : ""}`
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 13
				}, this)]
			}, idx, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 33
			}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-center pt-20",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-3xl animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs tracking-[0.25em] uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 42,
									columnNumber: 15
								}, this),
								" ",
								slide.kicker
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-white text-5xl md:text-7xl lg:text-8xl text-balance leading-[1.02]",
							children: slide.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl",
							children: slide.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/destinations",
								className: "inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-7 py-3.5 shadow-gold hover:brightness-110 transition",
								children: "Explore Destinations"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/itineraries",
								className: "inline-flex items-center rounded-full border border-white/40 text-white px-7 py-3.5 hover:bg-white/10 transition",
								children: "View Itineraries"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this)
					]
				}, i, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-white border-b",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-5 divide-x divide-border",
				children: [
					{
						icon: Plane,
						label: quickServices[0]?.label || "Flight Bookings"
					},
					{
						icon: Building2,
						label: quickServices[1]?.label || "Hotel Reservations"
					},
					{
						icon: Briefcase,
						label: quickServices[2]?.label || "Corporate Travel"
					},
					{
						icon: Car,
						label: quickServices[3]?.label || "Airport Transfers"
					},
					{
						icon: Luggage,
						label: quickServices[4]?.label || "Travel Packages"
					}
				].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "py-7 px-4 flex flex-col items-center text-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-12 w-12 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { size: 22 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-sm font-semibold text-navy",
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 15
					}, this)]
				}, label, true, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-24 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHead, {
				kicker: travelSection.kicker || "",
				title: travelSection.title || ""
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid lg:grid-cols-3 gap-7 mt-14",
				children: travelStyles.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "group relative overflow-hidden rounded-2xl bg-card shadow-luxury",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative h-52 sm:h-64 lg:h-72 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: s.image,
								alt: s.title,
								className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.6s]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "absolute bottom-5 left-6 text-white font-display text-3xl",
								children: s.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-7",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-muted-foreground text-[15px] leading-relaxed",
							children: s.blurb
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/services",
							className: "mt-5 inline-flex text-sm font-semibold text-emerald-brand hover:text-navy",
							children: travelSection.linkText
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 15
					}, this)]
				}, s.title, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 34
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy text-white py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-gold mb-4",
						children: aboutSection.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl md:text-5xl text-balance",
						children: aboutSection.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 text-white/75 leading-relaxed text-lg",
						children: aboutSection.body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid grid-cols-3 gap-6",
						children: stats.map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-display text-gold text-4xl",
							children: value
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-widest uppercase text-white/60 mt-1",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 19
						}, this)] }, label, true, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 19
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/about",
						className: "mt-8 inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-6 py-3",
						children: aboutSection.ctaText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: travelStyles[2].image,
						alt: "",
						className: "w-full h-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-24 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHead, {
				kicker: servicesSection.kicker || "",
				title: servicesSection.title || ""
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-7 rounded-xl border bg-card hover:shadow-luxury hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-11 w-11 rounded-lg bg-gradient-emerald grid place-items-center text-white mb-4",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { size: 20 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 113
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-xl text-navy",
							children: s.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground mt-2 leading-relaxed",
							children: s.desc
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 15
						}, this)
					]
				}, s.title, true, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 136,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-24 max-w-7xl mx-auto px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHead, {
					kicker: destinationsSection.kicker || "",
					title: destinationsSection.title || ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14",
					children: popularDestinations.map((d) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: "group relative overflow-hidden rounded-2xl shadow-luxury h-52 sm:h-64 lg:h-72",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: d.image,
								alt: d.name,
								className: "absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1.6s]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-5 left-5 right-5 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-xs tracking-[0.25em] uppercase text-gold mb-1",
										children: destinationsSection.badgeText
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "font-display text-2xl",
										children: d.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm text-white/80 mt-1",
										children: d.desc
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 155,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 15
							}, this)
						]
					}, d.name, true, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 41
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center mt-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/destinations",
						className: "text-emerald-brand font-semibold hover:underline",
						children: destinationsSection.linkText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy-deep text-white py-14",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center",
				children: trustStrip.map(({ icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-4xl",
						children: icon
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-display text-xl text-gold mt-3",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-sm text-white/70 mt-2",
						children: desc
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 15
					}, this)
				] }, title, true, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 165,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-24 max-w-7xl mx-auto px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHead, {
					kicker: testimonialsSection.kicker || "",
					title: testimonialsSection.title || ""
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14",
					children: testimonials.slice(0, 6).map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
						className: "p-7 rounded-xl border bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex gap-1 text-gold mb-3",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {
									size: 14,
									fill: "currentColor"
								}, k, false, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 30
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
								className: "text-foreground/85 leading-relaxed italic",
								children: [
									"\"",
									t.text,
									"\""
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-semibold text-navy",
									children: t.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 44
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs text-muted-foreground",
									children: t.role
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 99
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 15
							}, this)
						]
					}, t.name, true, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 46
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center mt-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/testimonials",
						className: "text-emerald-brand font-semibold hover:underline",
						children: testimonialsSection.linkText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 192,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 181,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy-deep text-white py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-gold mb-4",
						children: instagramSection.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl md:text-5xl",
						children: instagramSection.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 202,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-5 text-white/70 text-lg",
						children: instagramSection.body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: social.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-7 inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-6 py-3",
						children: instagramSection.ctaText
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-3 gap-3",
					children: igImages.map((src, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "aspect-square overflow-hidden rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src,
							alt: "",
							className: "w-full h-full object-cover hover:scale-110 transition-transform duration-700"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 17
						}, this)
					}, idx, false, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 41
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 199,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 198,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
function SectionHead({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "text-center max-w-2xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
			children: kicker
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 223,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "font-display text-4xl md:text-5xl text-navy text-balance",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 224,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 222,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
