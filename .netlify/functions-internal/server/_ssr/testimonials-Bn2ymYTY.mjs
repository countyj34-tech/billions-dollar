import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { l as images, v as testimonials } from "./site-data-KEWOZufF.mjs";
import { g as resolvePageSection } from "./site-content-BQK353ek.mjs";
import { o as Star } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-Bn2ymYTY.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/testimonials.tsx?tsr-split=component";
function TestimonialsPage() {
	const [overrides] = useSiteOverrides();
	const page = resolvePageSection(overrides, "testimonials");
	const list = overrides.testimonials && overrides.testimonials.length > 0 ? overrides.testimonials : testimonials;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative h-[45vh] -mt-20 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: page.heroImage || images.bali,
				alt: "",
				className: "absolute inset-0 w-full h-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
					children: page.kicker
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-white text-5xl md:text-7xl",
					children: page.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "py-20 max-w-7xl mx-auto px-5 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5",
		children: list.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
			className: "p-7 rounded-2xl border bg-card hover:shadow-luxury transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-1 text-gold mb-3",
					children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {
						size: 14,
						fill: "currentColor"
					}, k, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 28
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 13
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
					lineNumber: 24,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-semibold text-navy",
						children: t.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 42
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-muted-foreground",
						children: t.role
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 97
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 13
				}, this)
			]
		}, `${t.name}-${i}`, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 29
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { TestimonialsPage as component };
