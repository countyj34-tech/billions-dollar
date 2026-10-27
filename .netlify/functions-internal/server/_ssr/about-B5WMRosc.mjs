import { c as useSiteOverrides } from "./site-store-CsFkAGgL.mjs";
import { l as images, r as companyHistory, x as welcomeMessage } from "./site-data-KEWOZufF.mjs";
import { E as resolveWhyChoose, T as resolveValuedClients, g as resolvePageSection, n as resolveAboutMd, r as resolveAwards, s as resolveCoreValues, v as resolveProcessSteps } from "./site-content-BQK353ek.mjs";
import { O as Check, P as Award } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B5WMRosc.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/about.tsx?tsr-split=component";
function About() {
	const [overrides] = useSiteOverrides();
	const hero = resolvePageSection(overrides, "about");
	const welcome = resolvePageSection(overrides, "about.welcome");
	const historySection = resolvePageSection(overrides, "about.history");
	const coreSection = resolvePageSection(overrides, "about.coreValues");
	const processSection = resolvePageSection(overrides, "about.process");
	const whySection = resolvePageSection(overrides, "about.whyChoose");
	const accreditation = resolvePageSection(overrides, "about.accreditation");
	const awardsSection = resolvePageSection(overrides, "about.awards");
	const clientsSection = resolvePageSection(overrides, "about.clients");
	const md = resolveAboutMd(overrides);
	const aboutText = overrides.aboutText;
	const historyText = overrides.history || companyHistory;
	const visionText = overrides.vision || "To be the travel service provider of choice, recognized for our personalized service, strong stakeholder partnerships, and commitment to customer success. We aspire to empower our people, exceed client expectations, and achieve sustainable growth while making travel simple, seamless, and rewarding.";
	const missionText = overrides.mission || "To be a dynamic force in the travel industry by delivering flexible, innovative, and customer-focused travel solutions. We are committed to creating value for our customers, business partners, employees, investors, and the communities we serve through excellence, integrity, and sustainable growth.";
	const core = resolveCoreValues(overrides);
	const process = resolveProcessSteps(overrides);
	const reasons = resolveWhyChoose(overrides);
	const awardList = resolveAwards(overrides);
	const clients = resolveValuedClients(overrides);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative h-[60vh] -mt-20 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: hero.heroImage || images.lusaka,
					alt: "Lusaka",
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
							children: hero.kicker
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-white text-5xl md:text-7xl",
							children: hero.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-white/80 mt-3 max-w-2xl",
							children: hero.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-20 max-w-5xl mx-auto px-5 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
					children: welcome.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-3xl md:text-4xl text-navy",
					children: welcome.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				aboutText ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 whitespace-pre-wrap text-lg leading-relaxed text-foreground/85",
					children: aboutText
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 22
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 space-y-4 text-foreground/80 leading-relaxed text-[17px]",
					children: welcomeMessage.body.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: p }, i, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 62
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 127
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 border-l-4 border-emerald-brand pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-display text-xl text-navy",
						children: md.name || welcomeMessage.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-sm text-muted-foreground tracking-wide uppercase",
						children: md.title || welcomeMessage.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-muted/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-5xl mx-auto px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
						children: historySection.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-3xl md:text-4xl text-navy",
						children: historySection.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 space-y-4 text-foreground/80 leading-relaxed text-[17px]",
						children: historyText.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: p }, i, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 54
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-20 max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 gap-7",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-10 rounded-2xl bg-navy text-white shadow-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-4",
					children: "Our Vision"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-lg leading-relaxed text-white/90",
					children: visionText
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-10 rounded-2xl bg-gradient-emerald text-white shadow-luxury",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-white/80 mb-4",
					children: "Our Mission"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-lg leading-relaxed",
					children: missionText
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
						children: coreSection.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl text-navy",
						children: coreSection.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12",
					children: core.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl border bg-card hover:shadow-luxury transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-gold font-display text-3xl",
								children: String(i + 1).padStart(2, "0")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-lg text-navy mt-2",
								children: v.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground mt-2 leading-relaxed",
								children: v.desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 17
							}, this)
						]
					}, v.title, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 33
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 75,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-muted/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
						children: processSection.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-4xl text-navy",
						children: processSection.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5",
					children: process.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6 rounded-xl bg-white border",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-display text-4xl text-emerald-brand",
								children: s.step
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-lg text-navy mt-2",
								children: s.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground mt-2 leading-relaxed",
								children: s.desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 17
							}, this)
						]
					}, s.step, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 92,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-20 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
					children: whySection.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-4xl text-navy",
					children: whySection.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12",
				children: reasons.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-6 rounded-xl border bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "text-emerald-brand" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-lg text-navy mt-3",
							children: w.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground mt-2 leading-relaxed",
							children: w.desc
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 15
						}, this)
					]
				}, w.title, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 109,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-navy text-white py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-7xl mx-auto px-5 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid lg:grid-cols-2 gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
							children: accreditation.kicker
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-4xl",
							children: accreditation.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 text-white/80 leading-relaxed text-lg",
							children: accreditation.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Award, { className: "text-gold" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 17
								}, this),
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold",
									children: accreditation.badgeLabel
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 49
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
							children: awardsSection.kicker
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 138,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-4xl",
							children: awardsSection.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-white/70",
							children: awardsSection.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 grid sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-2",
							children: awardList.map((a, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-4 rounded-lg bg-white/5 border border-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-gold text-xs tracking-widest",
										children: a.year
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "font-semibold mt-1",
										children: a.airline
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-sm text-white/70 mt-1",
										children: a.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 21
									}, this)
								]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 42
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 137,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 125,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 124,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-20 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-emerald-brand mb-3",
					children: clientsSection.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-4xl text-navy",
					children: clientsSection.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3",
				children: clients.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-5 rounded-xl border bg-card flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-brand" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-medium text-navy",
						children: c
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 15
					}, this)]
				}, c, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { About as component };
