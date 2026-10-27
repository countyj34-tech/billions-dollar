import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useSiteOverrides } from "./site-store-CsFkAGgL.mjs";
import { _ as services, l as images } from "./site-data-KEWOZufF.mjs";
import { g as resolvePageSection } from "./site-content-BQK353ek.mjs";
import { C as Earth } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DD8_oc_k.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/services.tsx?tsr-split=component";
function Services() {
	const [overrides] = useSiteOverrides();
	const page = resolvePageSection(overrides, "services");
	const services$1 = overrides.services && overrides.services.length > 0 ? overrides.services : services;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative h-[50vh] -mt-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: page.heroImage || images.plane,
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
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: page.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-white text-5xl md:text-7xl",
					children: page.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
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
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "py-20 max-w-7xl mx-auto px-5 lg:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: services$1.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "p-8 rounded-2xl border bg-card hover:shadow-luxury transition flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-12 w-12 rounded-xl bg-gradient-emerald grid place-items-center text-white mb-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 113
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-2xl text-navy",
						children: s.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-muted-foreground mt-3 leading-relaxed",
						children: s.desc
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 15
					}, this),
					"items" in s && Array.isArray(s.items) && /* @__PURE__ */ (void 0)("ul", {
						className: "mt-5 space-y-2 border-t pt-5",
						children: s.items.map((it) => /* @__PURE__ */ (void 0)("li", {
							className: "flex gap-2 text-sm text-foreground/80",
							children: [
								/* @__PURE__ */ (void 0)("span", {
									className: "text-emerald-brand mt-0.5",
									children: "✓"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 28,
									columnNumber: 23
								}, this),
								" ",
								it
							]
						}, it, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 57
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 67
					}, this)
				]
			}, s.title, true, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 30
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-16 text-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/contact",
				className: "inline-flex items-center rounded-full bg-gradient-gold text-navy font-semibold px-7 py-3.5 shadow-gold",
				children: page.ctaText
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { Services as component };
