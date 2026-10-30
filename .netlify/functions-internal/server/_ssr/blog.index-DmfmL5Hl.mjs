import { i as __toESM } from "../_runtime.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { l as images, n as blogPosts } from "./site-data-KEWOZufF.mjs";
import { g as resolvePageSection } from "./site-content-BQK353ek.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as BLOG_CATEGORIES } from "./admin-7vjxPGlk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-DmfmL5Hl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/blog.index.tsx?tsr-split=component";
function Blog() {
	const [overrides] = useSiteOverrides();
	const page = resolvePageSection(overrides, "blog");
	const allPosts = overrides.posts || [];
	const featured = overrides.featuredPosts && overrides.featuredPosts.length > 0 ? overrides.featuredPosts : blogPosts;
	const [activeCat, setActiveCat] = (0, import_react.useState)("All");
	const adminPosts = activeCat === "All" ? allPosts : allPosts.filter((p) => p.category === activeCat);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative h-[45vh] -mt-20 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: page.heroImage || images.plane,
					alt: "",
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-hero" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 h-full max-w-7xl mx-auto px-5 lg:px-10 flex flex-col justify-end pb-14",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs tracking-[0.3em] uppercase text-gold mb-3",
						children: page.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-white text-5xl md:text-7xl",
						children: page.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		allPosts.length > 0 && /* @__PURE__ */ (void 0)("section", {
			className: "py-16 max-w-5xl mx-auto px-5 lg:px-10 space-y-8",
			children: [
				/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between gap-4 flex-wrap",
					children: /* @__PURE__ */ (void 0)("h2", {
						className: "font-display text-3xl text-navy",
						children: page.secondaryTitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "flex flex-wrap gap-2",
					children: ["All", ...BLOG_CATEGORIES].map((c) => {
						const count = c === "All" ? allPosts.length : allPosts.filter((p) => p.category === c).length;
						return /* @__PURE__ */ (void 0)("button", {
							onClick: () => setActiveCat(c),
							className: `px-4 py-1.5 rounded-full text-sm border transition ${activeCat === c ? "bg-navy text-white border-navy" : "bg-transparent text-navy border-border hover:border-navy"}`,
							children: [
								c,
								" ",
								/* @__PURE__ */ (void 0)("span", {
									className: "opacity-60",
									children: [
										"(",
										count,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 23
								}, this)
							]
						}, c, true, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 18
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("div", {
					className: "space-y-10",
					children: [adminPosts.length === 0 && /* @__PURE__ */ (void 0)("p", {
						className: "text-muted-foreground text-sm",
						children: "No posts in this category yet."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 41
					}, this), adminPosts.map((p) => /* @__PURE__ */ (void 0)(Link, {
						to: "/blog/$id",
						params: { id: p.id },
						className: "block group",
						children: /* @__PURE__ */ (void 0)("article", {
							className: "rounded-2xl overflow-hidden border bg-card shadow-luxury transition group-hover:shadow-xl group-hover:-translate-y-0.5",
							children: [
								p.image && /* @__PURE__ */ (void 0)("img", {
									src: p.image,
									alt: p.title,
									className: "w-full max-h-[480px] object-cover"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 31
								}, this),
								p.video && !p.image && /* @__PURE__ */ (void 0)("video", {
									src: p.video,
									className: "w-full bg-black pointer-events-none"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 43
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "p-7 space-y-3",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "text-xs text-muted-foreground tracking-wide flex items-center gap-2",
											children: [/* @__PURE__ */ (void 0)("span", { children: p.date }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 47,
												columnNumber: 23
											}, this), p.category && /* @__PURE__ */ (void 0)("span", {
												className: "px-2 py-0.5 rounded-full bg-emerald-brand/10 text-emerald-brand uppercase tracking-widest text-[10px]",
												children: p.category
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 48,
												columnNumber: 38
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 46,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("h3", {
											className: "font-display text-2xl text-navy group-hover:text-emerald-brand transition",
											children: p.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 50,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-foreground/80 whitespace-pre-wrap leading-relaxed line-clamp-3",
											children: p.body
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "inline-block text-sm text-emerald-brand font-semibold pt-2",
											children: "Read more →"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 52,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 45,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 17
						}, this)
					}, p.id, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 34
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 31
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "py-16 max-w-7xl mx-auto px-5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-3xl text-navy mb-8",
				children: "Featured articles"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-7",
				children: [allPosts.filter((p) => p.category === "Featured").map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/blog/$id",
					params: { id: p.id },
					className: "group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition block",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "aspect-[16/10] overflow-hidden bg-navy/5",
						children: p.image && /* @__PURE__ */ (void 0)("img", {
							src: p.image,
							alt: p.title,
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 29
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-muted-foreground tracking-wide flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: p.date }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "px-2 py-0.5 rounded-full bg-gold/15 text-navy uppercase tracking-widest text-[10px]",
									children: "Featured"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-xl text-navy mt-2 leading-snug",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground mt-2 line-clamp-3",
								children: p.body
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 15
					}, this)]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 69
				}, this)), featured.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/blog/$id",
					params: { id: p.slug },
					className: "group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition block",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "aspect-[16/10] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: p.image,
							alt: p.title,
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-muted-foreground tracking-wide",
								children: p.date
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-xl text-navy mt-2 leading-snug group-hover:text-emerald-brand transition",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: p.excerpt
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-block text-sm text-emerald-brand font-semibold mt-3",
								children: "Read more →"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 15
					}, this)]
				}, p.slug, true, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 30
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { Blog as component };
