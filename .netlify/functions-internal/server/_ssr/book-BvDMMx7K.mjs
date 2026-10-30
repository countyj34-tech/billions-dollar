import { i as __toESM } from "../_runtime.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import "./site-data-KEWOZufF.mjs";
import { g as resolvePageSection, i as resolveBookServices, o as resolveContactInfo } from "./site-content-BQK353ek.mjs";
import { A as Calendar, E as ChevronRight, M as Briefcase, O as Check, _ as Mail, c as Shield, d as Plane, f as Phone, g as MapPin, i as User, k as Car, l as Send, r as Users, s as Sparkles, x as Hotel } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as submitBookingInquiry } from "./submit-inquiry--jDzelYM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-BvDMMx7K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
/** Scroll the window to the top (or near a target element). */
function scrollToTop(targetId, headerOffset = 88) {
	const el = targetId ? document.getElementById(targetId) : null;
	const top = el ? el.getBoundingClientRect().top + window.scrollY - headerOffset : 0;
	window.scrollTo({
		top: Math.max(0, top),
		behavior: "smooth"
	});
}
var _jsxFileName = "D:/BIllions-app/src/routes/book.tsx?tsr-split=component";
function BookPage() {
	const [overrides] = useSiteOverrides();
	const contact = resolveContactInfo(overrides);
	const page = resolvePageSection(overrides, "book");
	const step1 = resolvePageSection(overrides, "book.step1");
	const step3 = resolvePageSection(overrides, "book.step3");
	const bulletItems = (page.body || "").split("|").filter(Boolean);
	const bookServices = resolveBookServices(overrides);
	const iconByKey = {
		flight: Plane,
		hotel: Hotel,
		car: Car,
		driver: User,
		tour: Briefcase,
		visa: Shield
	};
	const SERVICES = bookServices.map((s) => ({
		...s,
		key: s.key,
		icon: iconByKey[s.key] || Plane
	}));
	const [step, setStep] = (0, import_react.useState)(1);
	const [services, setServices] = (0, import_react.useState)({
		flight: true,
		hotel: false,
		car: false,
		driver: false,
		tour: false,
		visa: false
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(null);
	const toggle = (k) => setServices((s) => ({
		...s,
		[k]: !s[k]
	}));
	const activeCount = Object.values(services).filter(Boolean).length;
	const skipInitialScroll = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (skipInitialScroll.current) {
			skipInitialScroll.current = false;
			return;
		}
		scrollToTop("booking-form");
	}, [step, sent]);
	const submitBooking = async (form) => {
		const fd = new FormData(form);
		const payload = {
			name: String(fd.get("name") ?? ""),
			email: String(fd.get("email") ?? ""),
			phone: String(fd.get("phone") ?? ""),
			preferredContact: String(fd.get("preferredContact") ?? ""),
			services: SERVICES.filter((s) => services[s.key]).map((s) => s.label),
			from: String(fd.get("from") ?? ""),
			destination: String(fd.get("destination") ?? ""),
			departure: String(fd.get("departure") ?? ""),
			return: String(fd.get("return") ?? ""),
			adults: String(fd.get("adults") ?? ""),
			children: String(fd.get("children") ?? ""),
			cabin: String(fd.get("cabin") ?? ""),
			hotel: String(fd.get("hotel") ?? ""),
			vehicle: String(fd.get("vehicle") ?? ""),
			driver: String(fd.get("driver") ?? ""),
			tripStyle: String(fd.get("tripStyle") ?? ""),
			notes: String(fd.get("notes") ?? "")
		};
		setSubmitting(true);
		setSubmitError(null);
		try {
			await submitBookingInquiry(payload);
			setSent(true);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			setSubmitError(message || "Could not send your request. Please try again or WhatsApp us.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative min-h-[70vh] -mt-20 overflow-hidden flex items-end",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: page.heroImage || "/assets/plane-BZbVIuNK.jpg",
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover scale-105"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/60 to-navy-deep/95" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				className: "absolute top-1/3 left-0 right-0 opacity-40 pointer-events-none",
				height: "80",
				viewBox: "0 0 1200 80",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M0 60 Q 300 5, 600 40 T 1200 20",
					stroke: "var(--emerald)",
					strokeWidth: "1.5",
					strokeDasharray: "3 6",
					fill: "none"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-32 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-emerald-brand font-semibold mb-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 15
								}, this),
								" ",
								page.kicker
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-white text-5xl md:text-7xl leading-[1.02]",
							children: page.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 text-white/80 text-lg max-w-2xl leading-relaxed",
							children: page.subtitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap gap-6 text-sm text-white/70",
							children: bulletItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
										size: 16,
										className: "text-emerald-brand"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 176,
										columnNumber: 93
									}, this),
									" ",
									item
								]
							}, item, true, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 40
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 175,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 163,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative -mt-16 pb-24 z-20",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-6xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				id: "booking-form",
				className: "bg-card rounded-[2rem] shadow-luxury border border-emerald-brand/20 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border-b bg-navy text-white px-6 md:px-10 py-5 flex items-center justify-between flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 md:gap-6 text-xs md:text-sm",
						children: [
							{
								n: 1,
								label: "Services"
							},
							{
								n: 2,
								label: "Trip Details"
							},
							{
								n: 3,
								label: "Your Info"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 md:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `h-8 w-8 rounded-full grid place-items-center font-bold text-xs transition ${step >= s.n ? "bg-emerald-brand text-navy" : "bg-white/10 text-white/50"}`,
									children: step > s.n ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { size: 14 }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 37
									}, this) : s.n
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: step >= s.n ? "text-white" : "text-white/50",
									children: s.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 202,
									columnNumber: 21
								}, this),
								i < 2 && /* @__PURE__ */ (void 0)(ChevronRight, {
									size: 14,
									className: "text-white/30 hidden md:block"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 31
								}, this)
							]
						}, s.n, true, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 32
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 188,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-emerald-brand font-semibold tracking-widest uppercase",
						children: [
							activeCount,
							" service",
							activeCount !== 1 && "s",
							" selected"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 206,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 13
				}, this), sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-grid place-items-center h-20 w-20 rounded-full bg-emerald-brand text-white mb-6",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
								size: 38,
								strokeWidth: 3
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display text-3xl md:text-4xl text-navy",
							children: page.successTitle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-muted-foreground max-w-md mx-auto",
							children: page.successBody
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 216,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold",
								children: "Back to Home"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 220,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full border-2 border-emerald-brand text-emerald-brand px-6 py-3 text-sm font-semibold hover:bg-emerald-brand hover:text-white transition",
								children: "Message on WhatsApp"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 221,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 219,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 21
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: (e) => {
						const form = e.currentTarget;
						if (!form.checkValidity()) {
							form.reportValidity();
							e.preventDefault();
							return;
						}
						e.preventDefault();
						if (step < 3) {
							setStep(step + 1);
							return;
						}
						submitBooking(form);
					},
					className: "p-6 md:p-10",
					children: [
						step === 1 && /* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("h2", {
								className: "font-display text-2xl md:text-3xl text-navy",
								children: step1.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: step1.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 240,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
								children: SERVICES.map(({ key, label, icon: Icon, desc, image, tag }) => {
									const on = services[key];
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => toggle(key),
										className: `group relative text-left rounded-2xl overflow-hidden border-2 transition-all bg-background ${on ? "border-emerald-brand shadow-luxury -translate-y-0.5" : "border-border hover:border-emerald-brand/50 hover:-translate-y-0.5 hover:shadow-luxury"}`,
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "relative aspect-[16/10] overflow-hidden",
											children: [
												/* @__PURE__ */ (void 0)("img", {
													src: image,
													alt: label,
													loading: "lazy",
													width: 800,
													height: 500,
													className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 254,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("div", { className: `absolute inset-0 transition ${on ? "bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" : "bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent"}` }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 255,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: `absolute top-3 left-3 h-10 w-10 rounded-xl grid place-items-center backdrop-blur-md transition ${on ? "bg-emerald-brand text-white" : "bg-white/90 text-emerald-brand"}`,
													children: /* @__PURE__ */ (void 0)(Icon, { size: 20 }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 257,
														columnNumber: 33
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 256,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: `absolute top-3 right-3 h-7 w-7 rounded-full border-2 grid place-items-center backdrop-blur-md transition ${on ? "bg-emerald-brand border-emerald-brand text-white" : "bg-white/70 border-white/90"}`,
													children: on && /* @__PURE__ */ (void 0)(Check, {
														size: 15,
														strokeWidth: 3
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 260,
														columnNumber: 40
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 259,
													columnNumber: 31
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase font-semibold text-white/90",
													children: tag
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 262,
													columnNumber: 31
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 253,
											columnNumber: 29
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "p-4",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-baseline justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "font-display text-navy text-xl leading-tight",
													children: label
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 268,
													columnNumber: 33
												}, this), on && /* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] font-bold tracking-widest uppercase text-emerald-brand",
													children: "Selected"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 269,
													columnNumber: 40
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 267,
												columnNumber: 31
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "text-xs text-muted-foreground mt-1",
												children: desc
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 271,
												columnNumber: 31
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 266,
											columnNumber: 29
										}, this)]
									}, key, true, {
										fileName: _jsxFileName,
										lineNumber: 252,
										columnNumber: 26
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 242,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)(StepNav, {
								canBack: false,
								nextDisabled: activeCount === 0,
								nextLabel: "Continue"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 21
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 32
						}, this),
						step === 2 && (() => {
							const s = services;
							const anyRoute = s.flight || s.tour;
							const hotelOnly = s.hotel && !anyRoute && !s.car && !s.driver && !s.visa;
							const carOnly = (s.car || s.driver) && !anyRoute && !s.hotel && !s.visa;
							const visaOnly = s.visa && !anyRoute && !s.hotel && !s.car && !s.driver;
							const showFrom = anyRoute;
							const destLabel = visaOnly ? "Destination country" : hotelOnly ? "City / Hotel location" : carOnly ? "Pickup city" : "Destination";
							const depLabel = hotelOnly ? "Check-in date" : carOnly ? "Pickup date" : visaOnly ? "Intended travel date" : "Departure";
							const showReturn = !visaOnly;
							const retLabel = hotelOnly ? "Check-out date" : carOnly ? "Drop-off date" : "Return";
							const showTravelers = !visaOnly;
							const adultsLabel = hotelOnly ? "Guests" : "Adults";
							return /* @__PURE__ */ (void 0)("div", { children: [
								/* @__PURE__ */ (void 0)("h2", {
									className: "font-display text-2xl md:text-3xl text-navy",
									children: visaOnly ? "Tell us about your visa" : hotelOnly ? "Tell us about your stay" : carOnly ? "Tell us about your hire" : "Tell us about the trip"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 295,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-sm text-muted-foreground mt-1",
									children: "Rough details are fine — we'll refine everything together."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 298,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "mt-8 grid sm:grid-cols-2 gap-5",
									children: [
										showFrom && /* @__PURE__ */ (void 0)(Field, {
											label: "From",
											icon: MapPin,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "from",
												required: true,
												placeholder: "Lusaka, Zambia",
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 302,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 301,
											columnNumber: 36
										}, this),
										/* @__PURE__ */ (void 0)(Field, {
											label: destLabel,
											icon: MapPin,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "destination",
												required: true,
												placeholder: hotelOnly ? "Livingstone, Zambia" : "Dubai, UAE",
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 305,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 304,
											columnNumber: 23
										}, this),
										/* @__PURE__ */ (void 0)(Field, {
											label: depLabel,
											icon: Calendar,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "departure",
												required: true,
												type: "date",
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 308,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 307,
											columnNumber: 23
										}, this),
										showReturn && /* @__PURE__ */ (void 0)(Field, {
											label: retLabel,
											icon: Calendar,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "return",
												required: hotelOnly || carOnly,
												type: "date",
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 311,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 310,
											columnNumber: 38
										}, this),
										showTravelers && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Field, {
											label: adultsLabel,
											icon: Users,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "adults",
												required: true,
												type: "number",
												min: 1,
												defaultValue: 1,
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 315,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 314,
											columnNumber: 27
										}, this), /* @__PURE__ */ (void 0)(Field, {
											label: "Children",
											icon: Users,
											children: /* @__PURE__ */ (void 0)("input", {
												name: "children",
												type: "number",
												min: 0,
												defaultValue: 0,
												className: "input-brand"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 318,
												columnNumber: 29
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 317,
											columnNumber: 27
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 313,
											columnNumber: 41
										}, this),
										s.flight && /* @__PURE__ */ (void 0)(Field, {
											label: "Cabin class",
											icon: Plane,
											children: /* @__PURE__ */ (void 0)("select", {
												name: "cabin",
												className: "input-brand",
												children: [
													/* @__PURE__ */ (void 0)("option", { children: "Economy" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 324,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Premium Economy" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 325,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Business" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 326,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "First Class" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 327,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 323,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 322,
											columnNumber: 36
										}, this),
										s.hotel && /* @__PURE__ */ (void 0)(Field, {
											label: "Hotel preference",
											icon: Hotel,
											children: /* @__PURE__ */ (void 0)("select", {
												name: "hotel",
												className: "input-brand",
												children: [
													/* @__PURE__ */ (void 0)("option", { children: "3-Star" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 332,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "4-Star" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 333,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "5-Star Luxury" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 334,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Boutique / Resort" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 335,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 331,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 330,
											columnNumber: 35
										}, this),
										s.car && /* @__PURE__ */ (void 0)(Field, {
											label: "Vehicle type",
											icon: Car,
											children: /* @__PURE__ */ (void 0)("select", {
												name: "vehicle",
												className: "input-brand",
												children: [
													/* @__PURE__ */ (void 0)("option", { children: "Sedan" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 340,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "SUV / 4x4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 341,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Executive" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 342,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Minivan (7+ seats)" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 343,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 339,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 338,
											columnNumber: 33
										}, this),
										s.driver && /* @__PURE__ */ (void 0)(Field, {
											label: "Driver service",
											icon: User,
											children: /* @__PURE__ */ (void 0)("select", {
												name: "driver",
												className: "input-brand",
												children: [
													/* @__PURE__ */ (void 0)("option", { children: "Airport transfer only" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 348,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Half-day chauffeur" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 349,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Full-day chauffeur" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 350,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Multi-day tour driver" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 351,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 347,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 346,
											columnNumber: 36
										}, this),
										s.tour && /* @__PURE__ */ (void 0)(Field, {
											label: "Trip style",
											icon: Briefcase,
											children: /* @__PURE__ */ (void 0)("select", {
												name: "tripStyle",
												className: "input-brand",
												children: [
													/* @__PURE__ */ (void 0)("option", {
														value: "",
														children: "Tell us what you have in mind…"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 356,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Safari" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 357,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Beach holiday" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 358,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "City break" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 359,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Honeymoon" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 360,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Family trip" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 361,
														columnNumber: 29
													}, this),
													/* @__PURE__ */ (void 0)("option", { children: "Tailor-made" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 362,
														columnNumber: 29
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 355,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 354,
											columnNumber: 34
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "sm:col-span-2",
											children: /* @__PURE__ */ (void 0)(Field, {
												label: "Special requests",
												icon: Sparkles,
												children: /* @__PURE__ */ (void 0)("textarea", {
													name: "notes",
													rows: 4,
													placeholder: visaOnly ? "Passport nationality, visa type, urgency…" : "Anniversary trip, dietary needs, accessibility, preferred airlines…",
													className: "input-brand resize-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 368,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 367,
												columnNumber: 25
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 366,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 300,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (void 0)(StepNav, {
									onBack: () => setStep(1),
									nextLabel: "Continue"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 373,
									columnNumber: 21
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 294,
								columnNumber: 22
							}, this);
						})(),
						step === 3 && /* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("h2", {
								className: "font-display text-2xl md:text-3xl text-navy",
								children: step3.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 379,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: step3.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 380,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-8 grid sm:grid-cols-2 gap-5",
								children: [
									/* @__PURE__ */ (void 0)(Field, {
										label: "Full name",
										icon: User,
										children: /* @__PURE__ */ (void 0)("input", {
											name: "name",
											required: true,
											placeholder: "Jane Doe",
											className: "input-brand"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 383,
											columnNumber: 60
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)(Field, {
										label: "Email",
										icon: Mail,
										children: /* @__PURE__ */ (void 0)("input", {
											name: "email",
											required: true,
											type: "email",
											placeholder: "you@email.com",
											className: "input-brand"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 384,
											columnNumber: 56
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 384,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)(Field, {
										label: "Phone / WhatsApp",
										icon: Phone,
										children: /* @__PURE__ */ (void 0)("input", {
											name: "phone",
											required: true,
											placeholder: "+260 …",
											className: "input-brand"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 385,
											columnNumber: 68
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 385,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)(Field, {
										label: "Preferred contact",
										icon: Sparkles,
										children: /* @__PURE__ */ (void 0)("select", {
											name: "preferredContact",
											className: "input-brand",
											children: [
												/* @__PURE__ */ (void 0)("option", { children: "Email" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 388,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("option", { children: "WhatsApp" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 389,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (void 0)("option", { children: "Phone call" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 390,
													columnNumber: 27
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 387,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 386,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 382,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-8 rounded-2xl bg-navy/5 border border-navy/10 p-6",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "text-xs uppercase tracking-[0.25em] text-navy/60 font-semibold mb-3",
									children: "Booking summary"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 397,
									columnNumber: 23
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap gap-2",
									children: [SERVICES.filter((s) => services[s.key]).map((s) => /* @__PURE__ */ (void 0)("span", {
										className: "inline-flex items-center gap-1.5 bg-emerald-brand/15 text-emerald-brand border border-emerald-brand/30 rounded-full px-3 py-1.5 text-xs font-semibold",
										children: [
											/* @__PURE__ */ (void 0)(s.icon, { size: 13 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 400,
												columnNumber: 29
											}, this),
											" ",
											s.label
										]
									}, s.key, true, {
										fileName: _jsxFileName,
										lineNumber: 399,
										columnNumber: 73
									}, this)), activeCount === 0 && /* @__PURE__ */ (void 0)("span", {
										className: "text-sm text-muted-foreground",
										children: "No services selected"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 402,
										columnNumber: 47
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 398,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 396,
								columnNumber: 21
							}, this),
							submitError && /* @__PURE__ */ (void 0)("div", {
								className: "mt-6 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive px-4 py-3 text-sm",
								children: submitError
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 406,
								columnNumber: 37
							}, this),
							/* @__PURE__ */ (void 0)(StepNav, {
								onBack: () => setStep(2),
								nextLabel: submitting ? "Sending…" : "Submit Booking Request",
								nextDisabled: submitting,
								isSubmit: true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 410,
								columnNumber: 21
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 378,
							columnNumber: 32
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 223,
					columnNumber: 24
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-10 grid sm:grid-cols-3 gap-4",
				children: [
					{
						icon: Shield,
						title: "Trusted since 2006",
						sub: "IATA · AFTA · ZTA registered"
					},
					{
						icon: Sparkles,
						title: "Best-price guarantee",
						sub: "Consortium partnerships"
					},
					{
						icon: Phone,
						title: "Real humans, 24hr reply",
						sub: "Zambia-based consultants"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4 bg-card border rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-11 w-11 rounded-full bg-emerald-brand/15 text-emerald-brand grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(f.icon, { size: 20 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 430,
							columnNumber: 129
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 430,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-display text-navy",
						children: f.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 432,
						columnNumber: 19
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-muted-foreground",
						children: f.sub
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 433,
						columnNumber: 19
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 431,
						columnNumber: 17
					}, this)]
				}, f.title, true, {
					fileName: _jsxFileName,
					lineNumber: 429,
					columnNumber: 23
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 416,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 183,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 152,
		columnNumber: 10
	}, this);
}
function Field({ label, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "flex items-center gap-1.5 text-xs font-semibold text-navy/70 uppercase tracking-wider mb-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					size: 12,
					className: "text-emerald-brand"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 452,
					columnNumber: 9
				}, this),
				" ",
				label
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 451,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 450,
		columnNumber: 10
	}, this);
}
function StepNav({ onBack, canBack = true, nextLabel, nextDisabled = false, isSubmit = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-10 pt-6 border-t flex items-center justify-between gap-3 flex-wrap",
		children: [canBack && onBack ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			onClick: onBack,
			className: "text-sm font-semibold text-navy hover:text-emerald-brand transition",
			children: "← Back"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 471,
			columnNumber: 28
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 473,
			columnNumber: 21
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "submit",
			disabled: nextDisabled,
			className: "group relative overflow-hidden rounded-full bg-navy text-white font-semibold px-8 py-3.5 shadow-luxury hover:shadow-gold transition-all disabled:opacity-40 disabled:cursor-not-allowed",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 475,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "relative flex items-center gap-2 group-hover:text-navy transition-colors",
				children: [nextLabel, isSubmit ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { size: 15 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 478,
					columnNumber: 23
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 478,
					columnNumber: 44
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 476,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 474,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 470,
		columnNumber: 10
	}, this);
}
//#endregion
export { BookPage as component };
