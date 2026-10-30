import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { l as images } from "./site-data-KEWOZufF.mjs";
import { g as resolvePageSection, o as resolveContactInfo } from "./site-content-BQK353ek.mjs";
import { _ as Mail, f as Phone, g as MapPin } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as submitContactInquiry } from "./submit-inquiry--jDzelYM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-GVujHBFO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/contact.tsx?tsr-split=component";
function Contact() {
	const [overrides] = useSiteOverrides();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		setErr(null);
		try {
			await submitContactInquiry({
				name: String(fd.get("name") || ""),
				email: String(fd.get("email") || ""),
				phone: String(fd.get("phone") || ""),
				subject: String(fd.get("subject") || ""),
				message: String(fd.get("message") || "")
			});
			setSent(true);
		} catch (ex) {
			setErr(ex.message || "Failed to send message");
		} finally {
			setBusy(false);
		}
	}
	const info = resolveContactInfo(overrides);
	const page = resolvePageSection(overrides, "contact");
	const form = resolvePageSection(overrides, "contact.form");
	const phone = info.phone;
	const email = info.email;
	const address = info.address;
	const wa = info.whatsapp.replace(/[^\d]/g, "");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative h-[45vh] -mt-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: page.heroImage || images.lusaka,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: page.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-white text-5xl md:text-7xl",
					children: page.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "py-20 max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-3xl text-navy",
				children: page.secondaryTitle
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-muted-foreground mt-3",
				children: page.hours
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 143
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Phone"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 20
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `tel:${phone}`,
								className: "font-display text-lg text-navy",
								children: phone
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 104
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-sm text-muted-foreground",
								children: info.phone2
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 183
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 143
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Email"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 20
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `mailto:${email}`,
							className: "font-display text-lg text-navy break-all",
							children: email
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 104
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-11 w-11 rounded-full bg-[#25D366]/15 text-[#128C7E] grid place-items-center font-bold",
							children: "W"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "WhatsApp"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 20
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `https://wa.me/${wa}`,
							target: "_blank",
							rel: "noreferrer",
							className: "font-display text-lg text-navy",
							children: info.whatsapp
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 107
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-11 w-11 rounded-full bg-emerald-brand/10 text-emerald-brand grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 143
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Office"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 20
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-foreground/85 max-w-xs",
							children: address
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 105
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-10 rounded-2xl overflow-hidden border h-64",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
					title: "Office map",
					src: info.mapEmbedUrl,
					className: "w-full h-full",
					loading: "lazy"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative h-fit",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-4 bg-gradient-to-br from-emerald-brand/20 via-transparent to-navy/10 blur-2xl rounded-3xl -z-10" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-card border rounded-3xl p-8 lg:p-10 shadow-luxury relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 h-32 w-32 bg-gradient-emerald opacity-10 rounded-full blur-3xl -translate-y-10 translate-x-10" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 left-0 h-40 w-40 bg-navy/10 rounded-full blur-3xl translate-y-10 -translate-x-10" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-emerald-brand mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-8 bg-emerald-brand" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 78,
										columnNumber: 17
									}, this),
									" ",
									form.kicker
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-3xl text-navy",
								children: form.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: form.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this),
							sent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-8 p-6 rounded-2xl bg-emerald-brand/10 border border-emerald-brand/30 flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-10 w-10 rounded-full bg-emerald-brand text-white grid place-items-center shrink-0 font-bold",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-display text-lg text-navy",
									children: form.successTitle
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-sm text-foreground/70",
									children: form.successBody
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 23
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit,
								className: "mt-8 grid sm:grid-cols-2 gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-navy/70 uppercase tracking-wider",
											children: "Full name *"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 91,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											name: "name",
											required: true,
											placeholder: "Jane Doe",
											className: "mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 92,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 90,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-navy/70 uppercase tracking-wider",
											children: "Email *"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 95,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											name: "email",
											required: true,
											type: "email",
											placeholder: "you@email.com",
											className: "mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 96,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-navy/70 uppercase tracking-wider",
											children: "Phone"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											name: "phone",
											placeholder: "+260 …",
											className: "mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-navy/70 uppercase tracking-wider",
											children: "Subject"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 103,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											name: "subject",
											placeholder: "Flight / Tour / Visa",
											className: "mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold text-navy/70 uppercase tracking-wider",
											children: "How can we help? *"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 107,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
											name: "message",
											rows: 5,
											required: true,
											placeholder: "Tell us about your trip, dates, travelers…",
											className: "mt-1.5 w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background focus:border-emerald-brand focus:outline-none transition resize-none"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 108,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 106,
										columnNumber: 19
									}, this),
									err && /* @__PURE__ */ (void 0)("p", {
										className: "sm:col-span-2 text-sm text-destructive",
										children: err
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 27
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										disabled: busy,
										className: "sm:col-span-2 group relative overflow-hidden rounded-full bg-navy text-white font-semibold py-4 shadow-luxury hover:shadow-gold transition-all disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 112,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "relative flex items-center justify-center gap-2 group-hover:text-navy transition-colors",
											children: [busy ? "Sending…" : "Send Message", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
												width: "18",
												height: "18",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2.5",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5 12h14M13 6l6 6-6 6" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 115,
													columnNumber: 123
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 115,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 113,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "sm:col-span-2 text-[11px] text-center text-muted-foreground",
										children: form.disclaimer
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 118,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 26
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 70,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 10
	}, this);
}
//#endregion
export { Contact as component };
