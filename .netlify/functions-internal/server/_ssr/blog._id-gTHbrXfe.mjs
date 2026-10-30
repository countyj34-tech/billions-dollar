import { I as notFound, _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { n as blogPosts } from "./site-data-KEWOZufF.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Route } from "./blog._id-DhXOtCFq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._id-gTHbrXfe.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/blog.$id.tsx?tsr-split=component";
function PostDetail() {
	const { id } = Route.useParams();
	const [overrides] = useSiteOverrides();
	const posts = overrides.posts || [];
	const featured = overrides.featuredPosts && overrides.featuredPosts.length > 0 ? overrides.featuredPosts : blogPosts;
	const adminPost = posts.find((p) => p.id === id);
	const staticPost = !adminPost ? featured.find((p) => p.slug === id) : void 0;
	const post = adminPost ?? (staticPost ? {
		id: staticPost.slug,
		title: staticPost.title,
		body: staticPost.body,
		image: staticPost.image,
		date: staticPost.date,
		category: "Featured",
		video: void 0,
		audio: void 0
	} : null);
	if (!post) {
		if (posts.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "min-h-[60vh] grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-muted-foreground",
				children: "Loading…"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 68
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 14
		}, this);
		throw notFound();
	}
	const related = [...posts.filter((p) => p.id !== post.id && (!post.category || p.category === post.category)), ...featured.filter((p) => p.slug !== post.id).map((p) => ({
		id: p.slug,
		title: p.title,
		image: p.image,
		date: p.date
	}))].slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative -mt-20 pt-32 pb-10 bg-gradient-to-b from-navy to-navy/85 text-white",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-4xl mx-auto px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/blog",
						className: "text-xs tracking-[0.3em] uppercase text-gold hover:brightness-125",
						children: "← Back to journal"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 flex items-center gap-3 flex-wrap text-xs",
						children: [post.category && /* @__PURE__ */ (void 0)("span", {
							className: "px-3 py-1 rounded-full bg-gold/20 text-gold uppercase tracking-widest",
							children: post.category
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 31
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-white/60",
							children: post.date
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-4xl md:text-6xl mt-4 leading-tight",
						children: post.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
			className: "max-w-4xl mx-auto px-5 lg:px-10 py-14 space-y-8",
			children: [
				post.image && /* @__PURE__ */ (void 0)("img", {
					src: post.image,
					alt: post.title,
					className: "w-full rounded-2xl shadow-luxury max-h-[560px] object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 24
				}, this),
				post.video && /* @__PURE__ */ (void 0)("video", {
					src: post.video,
					controls: true,
					className: "w-full rounded-2xl bg-black shadow-luxury"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 24
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "prose prose-lg max-w-none text-foreground/85 whitespace-pre-wrap leading-relaxed text-lg",
					children: post.body
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				post.audio && /* @__PURE__ */ (void 0)("div", {
					className: "rounded-xl border bg-card p-5",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "text-xs uppercase tracking-wide text-emerald-brand mb-3",
						children: "🎵 Listen along"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("audio", {
						src: post.audio,
						controls: true,
						className: "w-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 24
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this),
		related.length > 0 && /* @__PURE__ */ (void 0)("section", {
			className: "py-14 bg-navy/[0.03]",
			children: /* @__PURE__ */ (void 0)("div", {
				className: "max-w-6xl mx-auto px-5 lg:px-10",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-2xl text-navy mb-6",
					children: "More like this"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: related.map((p) => /* @__PURE__ */ (void 0)(Link, {
						to: "/blog/$id",
						params: { id: p.id },
						className: "group rounded-2xl overflow-hidden border bg-card hover:shadow-luxury transition",
						children: [p.image && /* @__PURE__ */ (void 0)("div", {
							className: "aspect-[16/10] overflow-hidden",
							children: /* @__PURE__ */ (void 0)("img", {
								src: p.image,
								alt: p.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 23
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 31
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "p-5",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "text-xs text-muted-foreground",
								children: p.date
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 21
							}, this), /* @__PURE__ */ (void 0)("h3", {
								className: "font-display text-lg text-navy mt-2 leading-snug",
								children: p.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 19
						}, this)]
					}, p.id, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 33
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 60,
			columnNumber: 30
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 10
	}, this);
}
//#endregion
export { PostDetail as component };
