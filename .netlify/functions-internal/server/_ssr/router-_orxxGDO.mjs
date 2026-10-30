import { i as __toESM } from "../_runtime.mjs";
import { n as COMPANY_NAME, t as COMPANY_EMAIL } from "./company-_OYE8Ubt.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as supabase } from "./client-Cvh8bbT6.mjs";
import { _ as Link, c as Scripts, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as HeadContent, m as lazyRouteComponent, p as Outlet, u as useRouterState, x as useRouter, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react, t as Body } from "../_libs/react+react-email__body.mjs";
import { c as useSiteOverrides } from "./site-store-CpNrkdrk.mjs";
import { a as resolveBrand, l as resolveFooter, m as resolveNewsletter, o as resolveContactInfo, p as resolveNavItems, x as resolveSocialLinks } from "./site-content-BQK353ek.mjs";
import { N as Bell, S as Facebook, _ as Mail, a as Tag, b as Instagram, f as Phone, g as MapPin, h as Map$1, l as Send, m as Menu, n as Volume2, p as Pause, t as X, u as Play, y as Lock } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as Route$21 } from "./admin-7vjxPGlk.mjs";
import { t as Route$22 } from "./blog._id-DhXOtCFq.mjs";
import { t as Route$23 } from "./destinations._country-DOq7t5Y7.mjs";
import { t as Route$24 } from "./itineraries._slug-BhSkcjyO.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as stringType, i as objectType, n as literalType, o as unionType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
import { t as render } from "../_libs/@react-email/render+[...].mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Hr } from "../_libs/react-email__hr.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { t as Section } from "../_libs/react-email__section.mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-_orxxGDO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-BPvu4XGd.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var _jsxFileName$9 = "D:/BIllions-app/src/components/layout/SiteHeader.tsx";
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [overrides] = useSiteOverrides();
	const navigate = useNavigate();
	const brand = resolveBrand(overrides);
	const nav = resolveNavItems(overrides);
	function onLogoClick(e) {
		const now = Date.now();
		let count = 0;
		let t = 0;
		try {
			const raw = sessionStorage.getItem("bet_logo_taps");
			if (raw) {
				const p = JSON.parse(raw);
				count = p.count || 0;
				t = p.t || 0;
			}
		} catch {}
		if (now - t > 1500) count = 0;
		count += 1;
		sessionStorage.setItem("bet_logo_taps", JSON.stringify({
			count,
			t: now
		}));
		if (count >= 5) {
			e.preventDefault();
			sessionStorage.removeItem("bet_logo_taps");
			supabase.auth.getUser().then(({ data }) => {
				if (data.user) navigate({ to: "/admin" });
				else navigate({ to: "/admin-login" });
			});
		}
	}
	const logoSrc = overrides.logoUrl || "/assets/logo-DTFllJTg.png";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy/70 border-b border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-3 sm:px-5 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-2 sm:gap-3 group shrink-0 max-w-[min(100%,420px)]",
					onClick: onLogoClick,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: logoSrc,
						alt: brand.logoAlt,
						className: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-auto md:max-w-[160px] object-contain shrink-0 drop-shadow-lg group-hover:scale-105 transition"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 52,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-display text-white text-sm sm:text-base md:text-lg whitespace-nowrap",
							children: brand.name
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 58,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] text-gold uppercase whitespace-nowrap",
							children: brand.subtitle
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 61,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 57,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden lg:flex items-center gap-1 ml-auto shrink-0",
					children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: n.to,
						className: "px-4 py-2 text-sm text-white/80 hover:text-gold transition-colors rounded-md",
						activeProps: { className: "px-4 py-2 text-sm text-gold rounded-md" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to + n.label, false, {
						fileName: _jsxFileName$9,
						lineNumber: 69,
						columnNumber: 13
					}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/book",
						className: "ml-3 inline-flex items-center rounded-full bg-gradient-emerald text-navy font-semibold text-sm px-5 py-2.5 shadow-gold hover:brightness-110 transition",
						children: brand.headerCta
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 79,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 67,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/book",
						className: "inline-flex items-center rounded-full bg-gradient-emerald text-navy font-semibold text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 shadow-gold",
						children: brand.headerCta
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 88,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setOpen((o) => !o),
						className: "text-white p-2",
						"aria-label": "Menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 100,
							columnNumber: 21
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 100,
							columnNumber: 29
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 94,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 87,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$9,
			lineNumber: 46,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("div", {
			className: "lg:hidden border-t border-white/10 bg-navy-deep",
			children: /* @__PURE__ */ (void 0)("div", {
				className: "px-5 py-4 flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-3 pb-3 mb-2 border-b border-white/10",
						children: [/* @__PURE__ */ (void 0)("img", {
							src: logoSrc,
							alt: "",
							className: "h-10 w-10 object-contain"
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 109,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "font-display text-white text-base",
								children: brand.name
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 111,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "text-[9px] tracking-[0.2em] text-gold uppercase",
								children: brand.subtitle
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 112,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 110,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 108,
						columnNumber: 13
					}, this),
					nav.map((n) => /* @__PURE__ */ (void 0)(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "py-2.5 text-white/85 hover:text-gold text-sm",
						children: n.label
					}, n.to + n.label, false, {
						fileName: _jsxFileName$9,
						lineNumber: 116,
						columnNumber: 15
					}, this)),
					/* @__PURE__ */ (void 0)(Link, {
						to: "/book",
						onClick: () => setOpen(false),
						className: "mt-3 inline-flex justify-center items-center rounded-full bg-gradient-emerald text-navy font-semibold text-sm px-5 py-3",
						children: brand.headerCta
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 125,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 107,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$9,
			lineNumber: 106,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "D:/BIllions-app/src/components/layout/SiteFooter.tsx";
function SiteFooter() {
	const [overrides] = useSiteOverrides();
	const logoSrc = overrides.logoUrl || "/assets/logo-DTFllJTg.png";
	const brand = resolveBrand(overrides);
	const footer = resolveFooter(overrides);
	const social = resolveSocialLinks(overrides);
	const contact = resolveContactInfo(overrides);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "bg-navy-deep text-white/80 mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-7xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-3 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: logoSrc,
							alt: brand.logoAlt,
							className: "h-12 w-12 rounded-full ring-2 ring-gold/60"
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 20,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-display text-white text-lg",
							children: brand.name
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 22,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-[10px] tracking-[0.25em] text-gold uppercase",
							children: brand.subtitle
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 23,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 21,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm leading-relaxed text-white/60",
						children: footer.tagline
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 26,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-3 mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: social.facebook,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition",
								"aria-label": "Facebook",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Facebook, { size: 16 }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 28,
									columnNumber: 212
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 28,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: social.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition",
								"aria-label": "Instagram",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Instagram, { size: 16 }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 29,
									columnNumber: 214
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: social.tiktok,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-navy transition",
								"aria-label": "TikTok",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19.6 7.2a6.6 6.6 0 0 1-3.9-1.3v8.5a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.9a2.7 2.7 0 1 0 1.9 2.6V2h2.8a4 4 0 0 0 3.9 3.5v1.7Z" }, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 31,
										columnNumber: 83
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 31,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 30,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
					className: "text-white font-display text-lg mb-4",
					children: footer.exploreHeading
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 37,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "space-y-2 text-sm",
					children: (footer.exploreLinks || []).map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: link.to,
						className: "hover:text-gold",
						children: link.label
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 40,
						columnNumber: 46
					}, this) }, link.to + link.label, false, {
						fileName: _jsxFileName$8,
						lineNumber: 40,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 38,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
					className: "text-white font-display text-lg mb-4",
					children: footer.contactHeading
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 46,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, {
									size: 16,
									className: "text-gold mt-0.5"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 48,
									columnNumber: 40
								}, this),
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `tel:${contact.phone}`,
									className: "hover:text-gold",
									children: contact.phone
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 48,
									columnNumber: 88
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 48,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
									size: 16,
									className: "text-gold mt-0.5"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 49,
									columnNumber: 40
								}, this),
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${contact.email}`,
									className: "hover:text-gold break-all",
									children: contact.email
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 49,
									columnNumber: 87
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 49,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, {
									size: 16,
									className: "text-gold mt-0.5"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 50,
									columnNumber: 40
								}, this),
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: contact.address }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 50,
									columnNumber: 89
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 50,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 47,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 45,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 17,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-t border-white/10 py-5 text-center text-xs text-white/40",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: footer.copyright }, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 55,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-2 text-[10px] tracking-widest text-white/30 uppercase",
				children: footer.credit
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 56,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 54,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "D:/BIllions-app/src/components/WhatsAppButton.tsx";
function WhatsAppButton() {
	const [overrides] = useSiteOverrides();
	const contact = resolveContactInfo(overrides);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(contact.whatsappMessage)}`,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-luxury hover:scale-110 transition-transform",
		"aria-label": "WhatsApp us",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			width: "28",
			height: "28",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M19.05 4.91A10 10 0 0 0 2.4 17.32L1 23l5.85-1.53a10 10 0 0 0 4.79 1.22h.01a10 10 0 0 0 7.4-17.78ZM12 20.94a8.94 8.94 0 0 1-4.55-1.24l-.33-.2-3.47.91.93-3.38-.21-.35a8.94 8.94 0 1 1 7.63 4.26Zm5.16-6.7c-.28-.14-1.67-.83-1.93-.92-.26-.1-.45-.14-.64.14s-.74.92-.91 1.1c-.17.2-.34.22-.62.08-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.13-.57.13-.13.28-.34.42-.51.14-.17.19-.29.28-.48.1-.2.05-.36-.02-.5-.07-.14-.64-1.53-.87-2.1-.23-.55-.46-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.83 4.28.68.3 1.2.47 1.61.6.68.21 1.3.18 1.78.11.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z" }, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 16,
				columnNumber: 75
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "D:/BIllions-app/src/components/AmbientAudio.tsx";
function AmbientAudio() {
	const [overrides] = useSiteOverrides();
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!overrides.audioUrl) return;
		const a = audioRef.current;
		if (!a) return;
		a.volume = .4;
		if (overrides.audioAutoplay) a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	}, [overrides.audioUrl, overrides.audioAutoplay]);
	if (!overrides.audioUrl) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("audio", {
		ref: audioRef,
		src: overrides.audioUrl,
		loop: true
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 24,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		onClick: () => {
			const a = audioRef.current;
			if (!a) return;
			if (a.paused) {
				a.play();
				setPlaying(true);
			} else {
				a.pause();
				setPlaying(false);
			}
		},
		className: "fixed bottom-6 left-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-navy text-gold border border-gold/40 shadow-luxury hover:scale-110 transition",
		"aria-label": "Toggle music",
		children: [playing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pause, { size: 16 }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 34,
			columnNumber: 20
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { size: 16 }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 34,
			columnNumber: 41
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, {
			size: 10,
			className: "absolute bottom-1 right-1"
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 35,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 25,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "D:/BIllions-app/src/components/Newsletter.tsx";
var benefitIcons = [
	Tag,
	Map$1,
	Bell
];
function Newsletter() {
	const [overrides] = useSiteOverrides();
	const nl = resolveNewsletter(overrides);
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const benefits = nl.benefits || [];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative py-20 px-5 lg:px-10",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-luxury border border-emerald-brand/20",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: nl.backgroundImage,
					alt: "",
					className: "absolute inset-0 w-full h-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-white/97 via-white/92 to-white/40 dark:from-navy-deep/95 dark:via-navy-deep/85 dark:to-navy-deep/30" }, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 19,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative grid lg:grid-cols-[1.4fr_1fr] gap-8 p-8 md:p-14 lg:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center lg:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-emerald-brand font-semibold mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-8 bg-emerald-brand" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 24,
										columnNumber: 15
									}, this),
									" ",
									nl.kicker
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 23,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
								children: nl.title
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 27,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-center lg:justify-start gap-3 my-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-16 bg-emerald-brand/60" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 32,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, {
										size: 16,
										className: "text-emerald-brand rotate-45"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 33,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-16 bg-emerald-brand/60" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 34,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 31,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-navy/70 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed",
								children: nl.body
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 37,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									if (email) setSent(true);
								},
								className: "mt-8 bg-white rounded-2xl p-2 shadow-luxury flex flex-col sm:flex-row gap-2 border border-emerald-brand/20 max-w-2xl mx-auto lg:mx-0 w-full",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex-1 min-w-0 flex items-center gap-3 px-4 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
										size: 18,
										className: "text-emerald-brand shrink-0"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 46,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: nl.placeholder,
										className: "flex-1 min-w-0 bg-transparent outline-none text-navy placeholder:text-navy/40 py-2"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 47,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 45,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									className: "group relative overflow-hidden bg-navy hover:bg-navy-deep text-white font-semibold tracking-[0.2em] uppercase text-sm px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0 bg-gradient-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300" }, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 60,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "relative group-hover:text-navy transition-colors",
											children: sent ? "Subscribed" : nl.buttonText
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 61,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, {
											size: 15,
											className: "relative group-hover:text-navy transition-colors"
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 64,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 56,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							sent && /* @__PURE__ */ (void 0)("p", {
								className: "mt-3 text-sm text-emerald-brand font-medium",
								children: nl.successMessage
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 69,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0",
								children: benefits.map(({ title, sub }, i) => {
									const Icon = benefitIcons[i % benefitIcons.length];
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-3 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "h-10 w-10 rounded-full bg-emerald-brand/15 border border-emerald-brand/30 grid place-items-center shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
												size: 17,
												className: "text-emerald-brand"
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 78,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$5,
											lineNumber: 77,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-sm font-semibold text-navy leading-tight",
												children: title
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 81,
												columnNumber: 23
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "text-xs text-navy/60 leading-tight",
												children: sub
											}, void 0, false, {
												fileName: _jsxFileName$5,
												lineNumber: 82,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$5,
											lineNumber: 80,
											columnNumber: 21
										}, this)]
									}, title, true, {
										fileName: _jsxFileName$5,
										lineNumber: 76,
										columnNumber: 19
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-navy/60",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, {
									size: 12,
									className: "text-emerald-brand"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 90,
									columnNumber: 15
								}, this), nl.privacyText]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 89,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 22,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block" }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 94,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "D:/BIllions-app/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 30,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 24,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 56,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 60,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 69,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 59,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 52,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 51,
		columnNumber: 5
	}, this);
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Best Eastern Travel, Tours & Car Hire — Luxury Travel Consultancy" },
			{
				name: "description",
				content: "Luxury travel consultancy in Lusaka, Zambia. Corporate travel, premium leisure, safaris, flights, hotels and visa assistance — your journey, our priority."
			},
			{
				name: "author",
				content: "Best Eastern Travel"
			},
			{
				property: "og:title",
				content: "Best Eastern Travel, Tours & Car Hire"
			},
			{
				property: "og:description",
				content: "Travel smart. Travel in comfort. Travel with confidence."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon-180x180.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 115,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 114,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 119,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 117,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 113,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	const { location } = useRouterState();
	const chromeless = location.pathname.startsWith("/admin-login");
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	if (chromeless) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 137,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 136,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 144,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-16 sm:pt-20 min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 146,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 145,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Newsletter, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 148,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppButton, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 150,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AmbientAudio, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 151,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 143,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$12 = () => import("./unsubscribe-DncaL-ZS.mjs");
var Route$19 = createFileRoute("/unsubscribe")({
	validateSearch: objectType({ token: stringType().optional() }),
	head: () => ({ meta: [{ title: "Unsubscribe — Best Eastern Travel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./testimonials-Bn2ymYTY.mjs");
var Route$18 = createFileRoute("/testimonials")({
	head: () => ({ meta: [{ title: "Testimonials — Best Eastern Travel" }, {
		name: "description",
		content: "Real stories from corporate clients, families and luxury travelers who've trusted Best Eastern Travel."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./services-BSzHRogA.mjs");
var Route$17 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services — Best Eastern Travel" }, {
		name: "description",
		content: "Corporate travel management, luxury holidays, flights & hotels, visa assistance, safaris and VIP airport transfers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./packages-Co-53Ek8.mjs");
var Route$16 = createFileRoute("/packages")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./contact-GVujHBFO.mjs");
var Route$15 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Best Eastern Travel, Tours & Car Hire" }, {
		name: "description",
		content: "Get in touch with Best Eastern Travel in Lusaka, Zambia. Phone, WhatsApp, email and inquiry form."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./book-BvDMMx7K.mjs");
var Route$14 = createFileRoute("/book")({
	head: () => ({ meta: [
		{ title: "Book Your Trip — Best Eastern Travel, Tours & Car Hire" },
		{
			name: "description",
			content: "Book flights, hotels, car hire with driver, tour packages and visa assistance with Best Eastern Travel. Your journey, our priority."
		},
		{
			property: "og:title",
			content: "Book Your Trip · Best Eastern Travel"
		},
		{
			property: "og:description",
			content: "One form. Flights, hotels, car hire, drivers, tours and visas — arranged end-to-end."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./auth-AQJZ88Zx.mjs");
var Route$13 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Sign in — Best Eastern Travel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin-login-DT2xfvKr.mjs");
var Route$12 = createFileRoute("/admin-login")({
	head: () => ({ meta: [{ title: "Admin Sign in — Best Eastern Travel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-BAKsF0Of.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Best Eastern Travel, Tours & Car Hire" }, {
		name: "description",
		content: "Established 2006 in Lusaka. IATA-accredited, award-winning travel management for government, corporate and individual travelers."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./routes-Dtlf7QvL.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Best Eastern Travel — Luxury Travel from Lusaka to the World" }, {
		name: "description",
		content: "Premium corporate, luxury and leisure travel. Flights, hotels, safaris, visas and VIP transfers from Lusaka, Zambia."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./itineraries.index-DPXIwTSj.mjs");
var Route$9 = createFileRoute("/itineraries/")({
	head: () => ({ meta: [{ title: "Sample Itineraries — Best Eastern Travel" }, {
		name: "description",
		content: "Tailor-made Zambia safari itineraries — from classic luxury wildlife experiences to exclusive bush camps and river safaris."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./destinations.index-CbKZ9KXH.mjs");
var Route$8 = createFileRoute("/destinations/")({
	head: () => ({ meta: [{ title: "Destinations — Best Eastern Travel" }, {
		name: "description",
		content: "Africa, Asia, Europe, Middle East, South America and luxury MSC cruises — 120+ destinations crafted for the discerning traveler."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-DmfmL5Hl.mjs");
var Route$7 = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: "Travel Blog & Visa Updates — Best Eastern Travel" }, {
		name: "description",
		content: "Travel tips, destination guides and the latest visa updates from Best Eastern Travel."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route$6 = createFileRoute("/email/unsubscribe")({ server: { handlers: {
	GET: async ({ request }) => {
		process.env.SUPABASE_SERVICE_ROLE_KEY;
		return Response.json({ error: "Server configuration error" }, { status: 500 });
	},
	POST: async ({ request }) => {
		process.env.SUPABASE_SERVICE_ROLE_KEY;
		return Response.json({ error: "Server configuration error" }, { status: 500 });
	}
} } });
function mapReasonToStatus(reason) {
	switch (reason) {
		case "bounce": return "bounced";
		case "complaint": return "complained";
		default: return "suppressed";
	}
}
function mapReasonToMessage(reason) {
	switch (reason) {
		case "bounce": return "Permanent bounce — email address is invalid or rejected";
		case "complaint": return "Spam complaint — recipient marked email as spam";
		case "unsubscribe": return "Recipient unsubscribed";
		default: return "Email suppressed";
	}
}
var Route$5 = createFileRoute("/lovable/email/suppression")({ server: { handlers: { POST: async ({ request }) => {
	const supabaseUrl = process.env.SUPABASE_URL ?? "";
	const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
	if (!supabaseUrl || !supabaseServiceKey) return Response.json({ error: "Server configuration error" }, { status: 500 });
	const authHeader = request.headers.get("Authorization");
	if (!authHeader?.startsWith("Bearer ") || authHeader.slice(7).trim() !== supabaseServiceKey) return Response.json({ error: "Unauthorized" }, { status: 401 });
	let payload;
	try {
		const body = await request.json();
		payload = body.data ?? body;
		if (!payload.email || !payload.reason) return Response.json({ error: "Missing required fields: email, reason" }, { status: 400 });
	} catch {
		return Response.json({ error: "Invalid payload" }, { status: 400 });
	}
	const supabase = createClient(supabaseUrl, supabaseServiceKey);
	const normalizedEmail = payload.email.toLowerCase();
	const { error: suppressError } = await supabase.from("suppressed_emails").upsert({
		email: normalizedEmail,
		reason: payload.reason,
		metadata: payload.metadata ?? null
	}, { onConflict: "email" });
	if (suppressError) {
		console.error("Failed to upsert suppressed email", { error: suppressError });
		return Response.json({ error: "Failed to write suppression" }, { status: 500 });
	}
	await supabase.from("email_send_log").insert({
		message_id: payload.message_id ?? null,
		template_name: "system",
		recipient_email: normalizedEmail,
		status: mapReasonToStatus(payload.reason),
		error_message: mapReasonToMessage(payload.reason),
		metadata: payload.metadata ?? null
	});
	return Response.json({ success: true });
} } } });
var schema$1 = objectType({
	name: stringType().trim().min(1).max(200),
	email: stringType().trim().email().max(200),
	phone: stringType().trim().max(60).optional().or(literalType("")),
	subject: stringType().trim().max(200).optional().or(literalType("")),
	message: stringType().trim().min(1).max(4e3)
});
var Route$4 = createFileRoute("/api/public/contact")({ server: { handlers: { POST: async ({ request }) => {
	let parsed;
	try {
		parsed = schema$1.parse(await request.json());
	} catch {
		return Response.json({ error: "Invalid form data" }, { status: 400 });
	}
	try {
		const { supabaseAdmin } = await import("./client.server-BgBqizgp.mjs");
		const { error: msgError } = await supabaseAdmin.from("contact_messages").insert({
			name: parsed.name,
			email: parsed.email,
			phone: parsed.phone || null,
			subject: parsed.subject || null,
			message: parsed.message
		});
		if (!msgError) return Response.json({
			success: true,
			saved: true,
			table: "contact_messages"
		});
		const { error: bookingError } = await supabaseAdmin.from("bookings").insert({
			name: parsed.name,
			email: parsed.email,
			phone: parsed.phone || null,
			destination: parsed.subject || "Contact inquiry",
			notes: parsed.message,
			payload: {
				type: "contact",
				subject: parsed.subject || "",
				message: parsed.message,
				phone: parsed.phone || ""
			}
		});
		if (bookingError) {
			console.error("contact save failed", msgError, bookingError);
			return Response.json({ error: bookingError.message || msgError.message }, { status: 500 });
		}
		return Response.json({
			success: true,
			saved: true,
			table: "bookings"
		});
	} catch (error) {
		console.error("contact API failed", error);
		const message = error instanceof Error ? error.message : "Server error";
		return Response.json({ error: message }, { status: 500 });
	}
} } } });
var schema = objectType({
	name: stringType().trim().min(1).max(200),
	email: stringType().trim().email().max(200),
	phone: stringType().trim().min(1).max(60),
	preferredContact: stringType().trim().max(60).optional(),
	services: arrayType(stringType().max(40)).max(12).optional(),
	from: stringType().trim().max(200).optional(),
	destination: stringType().trim().max(200).optional(),
	departure: stringType().trim().max(60).optional(),
	return: stringType().trim().max(60).optional(),
	adults: unionType([stringType(), numberType()]).optional(),
	children: unionType([stringType(), numberType()]).optional(),
	cabin: stringType().trim().max(60).optional(),
	hotel: stringType().trim().max(60).optional(),
	vehicle: stringType().trim().max(60).optional(),
	driver: stringType().trim().max(60).optional(),
	packageTier: stringType().trim().max(120).optional(),
	notes: stringType().trim().max(4e3).optional()
});
var Route$3 = createFileRoute("/api/public/booking")({ server: { handlers: {
	GET: async () => {
		return Response.json({
			supabase_url_present: Boolean(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL),
			supabase_key_present: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY),
			storage: "supabase",
			node_version: process.version,
			time: (/* @__PURE__ */ new Date()).toISOString()
		});
	},
	POST: async ({ request }) => {
		let parsed;
		try {
			parsed = schema.parse(await request.json());
		} catch {
			return Response.json({ error: "Invalid form data" }, { status: 400 });
		}
		try {
			const { supabaseAdmin } = await import("./client.server-BgBqizgp.mjs");
			const travelDate = parsed.departure && /^\d{4}-\d{2}-\d{2}$/.test(parsed.departure) ? parsed.departure : null;
			const adultsNum = Number(parsed.adults) || 0;
			const childrenNum = Number(parsed.children) || 0;
			const { error } = await supabaseAdmin.from("bookings").insert({
				name: parsed.name,
				email: parsed.email,
				phone: parsed.phone,
				destination: parsed.destination ?? null,
				travel_date: travelDate,
				travelers: adultsNum + childrenNum || null,
				notes: parsed.notes ?? null,
				payload: {
					type: "booking",
					...parsed
				}
			});
			if (error) {
				console.error("booking API save failed", error);
				return Response.json({ error: error.message }, { status: 500 });
			}
			return Response.json({
				success: true,
				saved: true,
				table: "bookings"
			});
		} catch (error) {
			console.error("booking API failed", error);
			const message = error instanceof Error ? error.message : "Server error";
			return Response.json({ error: message }, { status: 500 });
		}
	}
} } });
var _jsxFileName$3 = "D:/BIllions-app/src/lib/email-templates/booking-request.tsx";
var BookingRequest = (p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, {
	lang: "en",
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head, {}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 31,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preview, { children: ["New booking request from ", p.name ?? "website visitor"] }, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 32,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, {
			style: main$3,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
				style: container$3,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
						style: h1$3,
						children: "New Booking Request"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 35,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: muted$1,
						children: [
							"Submitted ",
							p.submittedAt ?? "just now",
							" via besteasterntravel website"
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 36,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card$2,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
								as: "h2",
								style: h2$2,
								children: "Client"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 39,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Name",
								value: p.name
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 40,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Email",
								value: p.email
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 41,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Phone / WhatsApp",
								value: p.phone
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 42,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Preferred contact",
								value: p.preferredContact
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 43,
								columnNumber: 11
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 38,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card$2,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
							as: "h2",
							style: h2$2,
							children: "Services requested"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 47,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
							style: val,
							children: p.services?.length ? p.services.join(", ") : "—"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 48,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 46,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card$2,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
								as: "h2",
								style: h2$2,
								children: "Trip details"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 52,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "From",
								value: p.from
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 53,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Destination",
								value: p.destination
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 54,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Departure",
								value: p.departure
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 55,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Return",
								value: p.return
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 56,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Adults",
								value: String(p.adults ?? "")
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 57,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$2, {
								label: "Children",
								value: String(p.children ?? "")
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 58,
								columnNumber: 11
							}, void 0),
							p.cabin && /* @__PURE__ */ (void 0)(Row$2, {
								label: "Cabin class",
								value: p.cabin
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 59,
								columnNumber: 23
							}, void 0),
							p.hotel && /* @__PURE__ */ (void 0)(Row$2, {
								label: "Hotel preference",
								value: p.hotel
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 60,
								columnNumber: 23
							}, void 0),
							p.vehicle && /* @__PURE__ */ (void 0)(Row$2, {
								label: "Vehicle type",
								value: p.vehicle
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 61,
								columnNumber: 25
							}, void 0),
							p.driver && /* @__PURE__ */ (void 0)(Row$2, {
								label: "Driver service",
								value: p.driver
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 62,
								columnNumber: 24
							}, void 0),
							p.packageTier && /* @__PURE__ */ (void 0)(Row$2, {
								label: "Package tier",
								value: p.packageTier
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 63,
								columnNumber: 29
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 51,
						columnNumber: 9
					}, void 0),
					p.notes && /* @__PURE__ */ (void 0)(Section, {
						style: card$2,
						children: [/* @__PURE__ */ (void 0)(Heading, {
							as: "h2",
							style: h2$2,
							children: "Special requests"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 68,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (void 0)(Text, {
							style: val,
							children: p.notes
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 69,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 67,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hr, { style: hr$3 }, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 73,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: footer$3,
						children: "Best Eastern Travel · Booking notification"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 74,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 34,
				columnNumber: 7
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 33,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$3,
	lineNumber: 30,
	columnNumber: 3
}, void 0);
var Row$2 = ({ label, value }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
	style: row$2,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		style: lbl,
		children: [label, ": "]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 82,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		style: val,
		children: value || "—"
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 83,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$3,
	lineNumber: 81,
	columnNumber: 3
}, void 0);
var template$3 = {
	component: BookingRequest,
	subject: (d) => `New booking: ${d.name ?? "website visitor"}${d.destination ? ` → ${d.destination}` : ""}`,
	displayName: "Booking Request Notification",
	to: COMPANY_EMAIL,
	previewData: {
		name: "Jane Doe",
		email: "jane@example.com",
		phone: "+260 977 000 000",
		preferredContact: "WhatsApp",
		services: ["Flight", "Hotel"],
		from: "Lusaka, Zambia",
		destination: "Dubai, UAE",
		departure: "2026-08-01",
		return: "2026-08-10",
		adults: 2,
		children: 0,
		cabin: "Business",
		hotel: "5-Star Luxury",
		notes: "Anniversary trip — please arrange airport transfer.",
		submittedAt: "Wednesday, July 8, 2026"
	}
};
var main$3 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif",
	padding: "24px 0"
};
var container$3 = {
	maxWidth: "600px",
	margin: "0 auto",
	padding: "24px"
};
var h1$3 = {
	color: "#0b1e3f",
	fontSize: "24px",
	margin: "0 0 4px"
};
var h2$2 = {
	color: "#0b1e3f",
	fontSize: "15px",
	textTransform: "uppercase",
	letterSpacing: "0.08em",
	margin: "0 0 12px"
};
var muted$1 = {
	color: "#6b7280",
	fontSize: "13px",
	margin: "0 0 24px"
};
var card$2 = {
	background: "#f7f8fb",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "18px 20px",
	margin: "0 0 14px"
};
var row$2 = {
	margin: "4px 0",
	fontSize: "14px",
	color: "#111827"
};
var lbl = {
	color: "#6b7280",
	fontWeight: 600
};
var val = { color: "#111827" };
var hr$3 = {
	borderColor: "#e5e7eb",
	margin: "24px 0 12px"
};
var footer$3 = {
	color: "#9ca3af",
	fontSize: "12px",
	textAlign: "center"
};
var _jsxFileName$2 = "D:/BIllions-app/src/lib/email-templates/contact-message.tsx";
var ContactMessage = (p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, {
	lang: "en",
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 17,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preview, { children: ["New message from ", p.name ?? "website visitor"] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 18,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, {
			style: main$2,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
				style: container$2,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
						style: h1$2,
						children: "New Contact Message"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 21,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: muted,
						children: [
							"Submitted ",
							p.submittedAt ?? "just now",
							" via besteasterntravel website"
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 22,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card$1,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$1, {
								label: "Name",
								value: p.name
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 25,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$1, {
								label: "Email",
								value: p.email
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 26,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$1, {
								label: "Phone",
								value: p.phone
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 27,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row$1, {
								label: "Subject",
								value: p.subject
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 28,
								columnNumber: 11
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 24,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card$1,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
							as: "h2",
							style: h2$1,
							children: "Message"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 32,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
							style: body,
							children: p.message
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 33,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 31,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hr, { style: hr$2 }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 36,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: footer$2,
						children: "You're receiving this because a visitor used the contact form on besteasterntravel."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 37,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 20,
				columnNumber: 7
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 19,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$2,
	lineNumber: 16,
	columnNumber: 3
}, void 0);
var Row$1 = ({ label, value }) => {
	if (value === void 0 || value === null || value === "") return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
		style: row$1,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: { color: "#0b2447" },
			children: [label, ": "]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 46,
			columnNumber: 23
		}, void 0), String(value)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 46,
		columnNumber: 5
	}, void 0);
};
var template$2 = {
	component: ContactMessage,
	subject: (d) => `New contact message${d?.name ? ` — ${d.name}` : ""}`,
	displayName: "Contact message",
	previewData: {
		name: "Jane",
		email: "jane@example.com",
		message: "Hello!"
	},
	to: COMPANY_EMAIL
};
var main$2 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$2 = {
	padding: "24px 28px",
	maxWidth: "560px"
};
var h1$2 = {
	color: "#0b2447",
	fontSize: "22px",
	margin: "0 0 4px"
};
var h2$1 = {
	color: "#0b2447",
	fontSize: "15px",
	margin: "0 0 8px",
	textTransform: "uppercase",
	letterSpacing: "0.08em"
};
var muted = {
	color: "#6b7280",
	fontSize: "12px",
	margin: "0 0 20px"
};
var card$1 = {
	background: "#f8fafc",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "16px 18px",
	margin: "0 0 14px"
};
var row$1 = {
	margin: "2px 0",
	fontSize: "14px",
	color: "#111827"
};
var body = {
	fontSize: "14px",
	color: "#111827",
	whiteSpace: "pre-wrap",
	margin: 0
};
var hr$2 = {
	borderColor: "#e5e7eb",
	margin: "20px 0"
};
var footer$2 = {
	fontSize: "11px",
	color: "#9ca3af"
};
var _jsxFileName$1 = "D:/BIllions-app/src/lib/email-templates/contact-confirmation.tsx";
var ContactConfirmation = ({ name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, {
	lang: "en",
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 12,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preview, { children: ["Thank you for contacting ", COMPANY_NAME] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 13,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, {
			style: main$1,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
				style: container$1,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
						style: h1$1,
						children: [
							"Dear ",
							name ? name : "Valued Customer",
							","
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 16,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph$1,
						children: [
							"Thank you for contacting ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 19,
								columnNumber: 36
							}, void 0),
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 18,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph$1,
						children: "We've received your inquiry and one of our travel consultant will respond within the 24 hours."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 22,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph$1,
						children: "If your request is urgent, please contact us directly by phone or Whatsapp."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph$1,
						children: [
							"Thank you for choosing ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 31,
								columnNumber: 34
							}, void 0),
							". We look forward to assisting you with all your travel needs."
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 30,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: closing$1,
						children: [
							"Warm regards,",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 36,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 37,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 38,
								columnNumber: 11
							}, void 0),
							"For all your travel needs."
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 34,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hr, { style: hr$1 }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 42,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: footer$1,
						children: [
							COMPANY_NAME,
							" · ",
							COMPANY_EMAIL
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 15,
				columnNumber: 7
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 14,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 11,
	columnNumber: 3
}, void 0);
var template$1 = {
	component: ContactConfirmation,
	subject: `Thank you for contacting ${COMPANY_NAME}`,
	displayName: "Contact confirmation (to client)",
	previewData: { name: "Jane" }
};
var main$1 = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container$1 = {
	padding: "24px 28px",
	maxWidth: "560px"
};
var h1$1 = {
	color: "#0b2447",
	fontSize: "20px",
	margin: "0 0 16px"
};
var paragraph$1 = {
	color: "#111827",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "0 0 14px"
};
var closing$1 = {
	color: "#111827",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "18px 0 0"
};
var hr$1 = {
	borderColor: "#e5e7eb",
	margin: "20px 0"
};
var footer$1 = {
	fontSize: "11px",
	color: "#9ca3af"
};
var _jsxFileName = "D:/BIllions-app/src/lib/email-templates/booking-confirmation.tsx";
var Row = ({ label, value }) => {
	if (value === void 0 || value === null || value === "") return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
		style: row,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
			style: { color: "#0b2447" },
			children: [label, ": "]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 23
		}, void 0), String(value)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, void 0);
};
var BookingConfirmation = (p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Html, {
	lang: "en",
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preview, { children: ["Thank you for contacting ", COMPANY_NAME] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 5
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, {
			style: main,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
				style: container,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
						style: h1,
						children: [
							"Dear ",
							p.name ? p.name : "Valued Customer",
							","
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph,
						children: [
							"Thank you for contacting ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 36
							}, void 0),
							"."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph,
						children: "We've received your inquiry and one of our travel consultant will respond within the 24 hours."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph,
						children: "If your request is urgent, please contact us directly by phone or Whatsapp."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						style: card,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
								as: "h2",
								style: h2,
								children: "Your request"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Services",
								value: p.services?.join(", ")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "From",
								value: p.from
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Destination",
								value: p.destination
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Departure",
								value: p.departure
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Return",
								value: p.return
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Adults",
								value: p.adults
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Children",
								value: p.children
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 11
							}, void 0),
							p.notes ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
								label: "Notes",
								value: p.notes
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 22
							}, void 0) : null
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: paragraph,
						children: [
							"Thank you for choosing ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 34
							}, void 0),
							". We look forward to assisting you with all your travel needs."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: closing,
						children: [
							"Warm regards,",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: COMPANY_NAME }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 11
							}, void 0),
							"For all your travel needs."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hr, { style: hr }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
						style: footer,
						children: [
							COMPANY_NAME,
							" · ",
							COMPANY_EMAIL
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 5
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 26,
	columnNumber: 3
}, void 0);
var template = {
	component: BookingConfirmation,
	subject: `Thank you for contacting ${COMPANY_NAME}`,
	displayName: "Booking confirmation (to client)",
	previewData: {
		name: "Jane",
		destination: "Zanzibar",
		departure: "2026-08-01"
	}
};
var main = {
	backgroundColor: "#ffffff",
	fontFamily: "Arial, sans-serif"
};
var container = {
	padding: "24px 28px",
	maxWidth: "560px"
};
var h1 = {
	color: "#0b2447",
	fontSize: "20px",
	margin: "0 0 16px"
};
var h2 = {
	color: "#0b2447",
	fontSize: "13px",
	margin: "0 0 8px",
	textTransform: "uppercase",
	letterSpacing: "0.08em"
};
var paragraph = {
	color: "#111827",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "0 0 14px"
};
var card = {
	background: "#f8fafc",
	border: "1px solid #e5e7eb",
	borderRadius: "10px",
	padding: "16px 18px",
	margin: "0 0 14px"
};
var row = {
	margin: "2px 0",
	fontSize: "14px",
	color: "#111827"
};
var closing = {
	color: "#111827",
	fontSize: "14px",
	lineHeight: "22px",
	margin: "18px 0 0"
};
var hr = {
	borderColor: "#e5e7eb",
	margin: "20px 0"
};
var footer = {
	fontSize: "11px",
	color: "#9ca3af"
};
var TEMPLATES = {
	"booking-request": template$3,
	"contact-message": template$2,
	"contact-confirmation": template$1,
	"booking-confirmation": template
};
var EMAIL_FROM = process.env.EMAIL_FROM ?? `Best Eastern Travel & Tours <besteasterntravel@yahoo.com>`;
/** Yahoo SMTP defaults — only a password is needed to enable direct SMTP. */
function getSmtpConfig() {
	const pass = process.env.SMTP_PASS?.trim();
	if (!pass) return null;
	const host = process.env.SMTP_HOST ?? "smtp.mail.yahoo.com";
	const user = process.env.SMTP_USER ?? "besteasterntravel@yahoo.com";
	const port = Number(process.env.SMTP_PORT ?? 465);
	return {
		host,
		port,
		secure: process.env.SMTP_SECURE !== void 0 ? process.env.SMTP_SECURE === "true" : port === 465,
		user,
		pass
	};
}
function getResendApiKey() {
	return process.env.RESEND_API_KEY?.trim() || null;
}
/** FormSubmit works out of the box with the company Yahoo address. */
function isEmailConfigured() {
	return true;
}
function buildAutoReplyMessage(name) {
	return `${name ? `Dear ${name},` : "Dear Valued Customer,"}

Thank you for contacting ${COMPANY_NAME}.

We've received your inquiry and one of our travel consultant will respond within the 24 hours.

If your request is urgent, please contact us directly by phone or Whatsapp.

Thank you for choosing ${COMPANY_NAME}. We look forward to assisting you with all your travel needs.

Warm regards,

${COMPANY_NAME}
For all your travel needs.`;
}
var FormSubmitError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.name = "FormSubmitError";
		this.status = status;
	}
};
function buildFormBody(payload) {
	const params = new URLSearchParams();
	params.set("name", payload.customerName);
	params.set("email", payload.customerEmail);
	params.set("_subject", payload.subject);
	params.set("_template", "table");
	params.set("_captcha", "false");
	params.set("_replyto", payload.customerEmail);
	for (const [key, value] of Object.entries(payload.fields)) if (value) params.set(key, value);
	if (payload.autoreply !== false) params.set("_autoresponse", buildAutoReplyMessage(payload.customerName));
	return params;
}
async function parseFormSubmitResponse(response) {
	if ((response.headers.get("content-type") ?? "").includes("application/json")) return response.json().catch(() => ({}));
	const text = await response.text().catch(() => "");
	return {
		success: response.ok,
		message: text
	};
}
/**
* Sends inquiry to besteasterntravel@yahoo.com via FormSubmit ajax API.
* First submission triggers a one-time activation email to that inbox.
*/
async function sendInquiryViaFormSubmit(payload) {
	const body = buildFormBody(payload);
	const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(COMPANY_EMAIL)}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json"
		},
		body
	});
	const result = await parseFormSubmitResponse(response);
	if (!response.ok) throw new FormSubmitError(`FormSubmit error (${response.status}): ${result?.message ?? response.statusText}`, response.status);
	if (result?.success === false) throw new FormSubmitError(result?.message ?? "FormSubmit rejected the submission");
	return result;
}
var EmailConfigError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "EmailConfigError";
	}
};
var EmailSendError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.name = "EmailSendError";
		this.status = status;
	}
};
async function sendViaResend(payload, apiKey) {
	const response = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: EMAIL_FROM,
			to: [payload.to],
			subject: payload.subject,
			html: payload.html,
			text: payload.text,
			reply_to: payload.replyTo
		})
	});
	if (!response.ok) {
		const body = await response.text().catch(() => "");
		throw new EmailSendError(`Resend API error (${response.status}): ${body || response.statusText}`, response.status);
	}
}
var smtpTransport = null;
async function getSmtpTransport() {
	const smtp = getSmtpConfig();
	if (!smtp) return null;
	if (!smtpTransport) smtpTransport = (await import("nodemailer")).default.createTransport({
		host: smtp.host,
		port: smtp.port,
		secure: smtp.secure,
		auth: {
			user: smtp.user,
			pass: smtp.pass
		}
	});
	return smtpTransport;
}
async function sendViaSmtp(payload) {
	const transport = await getSmtpTransport();
	if (!transport) throw new EmailConfigError("SMTP is not configured");
	await transport.sendMail({
		from: EMAIL_FROM,
		to: payload.to,
		subject: payload.subject,
		html: payload.html,
		text: payload.text,
		replyTo: payload.replyTo
	});
}
async function sendViaFormSubmit(payload) {
	if (!(payload.to.toLowerCase() === "besteasterntravel@yahoo.com".toLowerCase())) throw new EmailSendError("FormSubmit can only notify the company inbox");
	await sendInquiryViaFormSubmit({
		customerName: payload.customerName ?? payload.replyTo ?? "Website visitor",
		customerEmail: payload.replyTo ?? "besteasterntravel@yahoo.com",
		subject: payload.subject,
		fields: { message: payload.text },
		autoreply: Boolean(payload.replyTo)
	});
}
async function sendMail(payload) {
	const provider = process.env.EMAIL_PROVIDER?.toLowerCase();
	const resendKey = getResendApiKey();
	const smtp = getSmtpConfig();
	if (provider === "resend") {
		if (!resendKey) throw new EmailConfigError("EMAIL_PROVIDER=resend but RESEND_API_KEY is missing");
		await sendViaResend(payload, resendKey);
		return;
	}
	if (provider === "smtp") {
		if (!smtp) throw new EmailConfigError("EMAIL_PROVIDER=smtp but SMTP_PASS is missing");
		await sendViaSmtp(payload);
		return;
	}
	if (smtp) {
		await sendViaSmtp(payload);
		return;
	}
	if (resendKey) {
		await sendViaResend(payload, resendKey);
		return;
	}
	await sendViaFormSubmit(payload);
}
function isRateLimited(error) {
	return error instanceof EmailSendError && error.status === 429;
}
function isForbidden(error) {
	return error instanceof EmailSendError && error.status === 403;
}
var Route$2 = createFileRoute("/lovable/email/transactional/send")({ server: { handlers: { POST: async ({ request }) => {
	process.env.SUPABASE_SERVICE_ROLE_KEY;
	console.error("Missing required environment variables");
	return Response.json({ error: "Server configuration error" }, { status: 500 });
} } } });
var Route$1 = createFileRoute("/lovable/email/transactional/preview")({ server: { handlers: { POST: async ({ request }) => {
	const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
	if (!serviceKey) return Response.json({ error: "Server configuration error" }, { status: 500 });
	if (request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") !== serviceKey) return Response.json({ error: "Unauthorized" }, { status: 401 });
	const templateNames = Object.keys(TEMPLATES);
	const results = [];
	for (const name of templateNames) {
		const entry = TEMPLATES[name];
		const displayName = entry.displayName || name;
		if (!entry.previewData) {
			results.push({
				templateName: name,
				displayName,
				subject: "",
				html: "",
				status: "preview_data_required"
			});
			continue;
		}
		try {
			const html = await render(import_react.createElement(entry.component, entry.previewData));
			const resolvedSubject = typeof entry.subject === "function" ? entry.subject(entry.previewData) : entry.subject;
			results.push({
				templateName: name,
				displayName,
				subject: resolvedSubject,
				html,
				status: "ready"
			});
		} catch (err) {
			console.error("Failed to render template for preview", {
				template: name,
				error: err
			});
			results.push({
				templateName: name,
				displayName,
				subject: "",
				html: "",
				status: "render_failed",
				errorMessage: err instanceof Error ? err.message : String(err)
			});
		}
	}
	return Response.json({ templates: results });
} } } });
var MAX_RETRIES = 5;
var DEFAULT_BATCH_SIZE = 10;
var DEFAULT_SEND_DELAY_MS = 200;
var DEFAULT_AUTH_TTL_MINUTES = 15;
var DEFAULT_TRANSACTIONAL_TTL_MINUTES = 60;
function getRetryAfterSeconds(error) {
	if (error && typeof error === "object" && "retryAfterSeconds" in error) return error.retryAfterSeconds ?? 60;
	return 60;
}
async function moveToDlq(supabase, queue, msg, reason) {
	const payload = msg.message;
	await supabase.from("email_send_log").insert({
		message_id: payload.message_id,
		template_name: payload.label || queue,
		recipient_email: payload.to,
		status: "dlq",
		error_message: reason
	});
	const { error } = await supabase.rpc("move_to_dlq", {
		source_queue: queue,
		dlq_name: `${queue}_dlq`,
		message_id: msg.msg_id,
		payload
	});
	if (error) console.error("Failed to move message to DLQ", {
		queue,
		msg_id: msg.msg_id,
		reason,
		error
	});
}
var Route = createFileRoute("/lovable/email/queue/process")({ server: { handlers: { POST: async ({ request }) => {
	const supabaseUrl = process.env.SUPABASE_URL ?? "";
	const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
	if (!isEmailConfigured() || !supabaseUrl || !supabaseServiceKey) return Response.json({ error: "Server configuration error" }, { status: 500 });
	const authHeader = request.headers.get("Authorization");
	if (!authHeader?.startsWith("Bearer ")) return Response.json({ error: "Unauthorized" }, { status: 401 });
	if (authHeader.slice(7).trim() !== supabaseServiceKey) return Response.json({ error: "Forbidden" }, { status: 403 });
	const supabase = createClient(supabaseUrl, supabaseServiceKey);
	const { data: state } = await supabase.from("email_send_state").select("retry_after_until, batch_size, send_delay_ms, auth_email_ttl_minutes, transactional_email_ttl_minutes").single();
	if (state?.retry_after_until && new Date(state.retry_after_until) > /* @__PURE__ */ new Date()) return Response.json({
		skipped: true,
		reason: "rate_limited"
	});
	const batchSize = state?.batch_size ?? DEFAULT_BATCH_SIZE;
	const sendDelayMs = state?.send_delay_ms ?? DEFAULT_SEND_DELAY_MS;
	const ttlMinutes = {
		auth_emails: state?.auth_email_ttl_minutes ?? DEFAULT_AUTH_TTL_MINUTES,
		transactional_emails: state?.transactional_email_ttl_minutes ?? DEFAULT_TRANSACTIONAL_TTL_MINUTES
	};
	let totalProcessed = 0;
	for (const queue of ["auth_emails", "transactional_emails"]) {
		const { data: messages, error: readError } = await supabase.rpc("read_email_batch", {
			queue_name: queue,
			batch_size: batchSize,
			vt: 30
		});
		if (readError) {
			console.error("Failed to read email batch", {
				queue,
				error: readError
			});
			continue;
		}
		if (!messages?.length) continue;
		const messageIds = Array.from(new Set(messages.map((msg) => msg?.message?.message_id && typeof msg.message.message_id === "string" ? msg.message.message_id : null).filter((id) => Boolean(id))));
		const failedAttemptsByMessageId = /* @__PURE__ */ new Map();
		if (messageIds.length > 0) {
			const { data: failedRows, error: failedRowsError } = await supabase.from("email_send_log").select("message_id").in("message_id", messageIds).eq("status", "failed");
			if (failedRowsError) console.error("Failed to load failed-attempt counters", {
				queue,
				error: failedRowsError
			});
			else for (const row of failedRows ?? []) {
				const messageId = row?.message_id;
				if (typeof messageId !== "string" || !messageId) continue;
				failedAttemptsByMessageId.set(messageId, (failedAttemptsByMessageId.get(messageId) ?? 0) + 1);
			}
		}
		for (let i = 0; i < messages.length; i++) {
			const msg = messages[i];
			const payload = msg.message;
			const failedAttempts = payload?.message_id && typeof payload.message_id === "string" ? failedAttemptsByMessageId.get(payload.message_id) ?? 0 : msg.read_ct ?? 0;
			const queuedAt = payload.queued_at ?? msg.enqueued_at;
			if (queuedAt) {
				if (Date.now() - new Date(queuedAt).getTime() > ttlMinutes[queue] * 60 * 1e3) {
					console.warn("Email expired (TTL exceeded)", {
						queue,
						msg_id: msg.msg_id,
						queued_at: queuedAt,
						ttl_minutes: ttlMinutes[queue]
					});
					await moveToDlq(supabase, queue, msg, `TTL exceeded (${ttlMinutes[queue]} minutes)`);
					continue;
				}
			}
			if (failedAttempts >= MAX_RETRIES) {
				await moveToDlq(supabase, queue, msg, `Max retries (${MAX_RETRIES}) exceeded (attempted ${failedAttempts} times)`);
				continue;
			}
			if (payload.message_id) {
				const { data: alreadySent } = await supabase.from("email_send_log").select("id").eq("message_id", payload.message_id).eq("status", "sent").maybeSingle();
				if (alreadySent) {
					console.warn("Skipping duplicate send (already sent)", {
						queue,
						msg_id: msg.msg_id,
						message_id: payload.message_id
					});
					const { error: dupDelError } = await supabase.rpc("delete_email", {
						queue_name: queue,
						message_id: msg.msg_id
					});
					if (dupDelError) console.error("Failed to delete duplicate message from queue", {
						queue,
						msg_id: msg.msg_id,
						error: dupDelError
					});
					continue;
				}
			}
			try {
				await sendMail({
					to: String(payload.to),
					subject: String(payload.subject),
					html: String(payload.html),
					text: String(payload.text),
					replyTo: typeof payload.reply_to === "string" ? payload.reply_to : void 0
				});
				await supabase.from("email_send_log").insert({
					message_id: payload.message_id,
					template_name: payload.label || queue,
					recipient_email: payload.to,
					status: "sent"
				});
				const { error: delError } = await supabase.rpc("delete_email", {
					queue_name: queue,
					message_id: msg.msg_id
				});
				if (delError) console.error("Failed to delete sent message from queue", {
					queue,
					msg_id: msg.msg_id,
					error: delError
				});
				totalProcessed++;
			} catch (error) {
				const errorMsg = error instanceof Error ? error.message : String(error);
				console.error("Email send failed", {
					queue,
					msg_id: msg.msg_id,
					read_ct: msg.read_ct,
					failed_attempts: failedAttempts,
					error: errorMsg
				});
				if (isRateLimited(error)) {
					await supabase.from("email_send_log").insert({
						message_id: payload.message_id,
						template_name: payload.label || queue,
						recipient_email: payload.to,
						status: "failed",
						error_message: errorMsg.slice(0, 1e3)
					});
					const retryAfterSecs = getRetryAfterSeconds(error);
					await supabase.from("email_send_state").update({
						retry_after_until: new Date(Date.now() + retryAfterSecs * 1e3).toISOString(),
						updated_at: (/* @__PURE__ */ new Date()).toISOString()
					}).eq("id", 1);
					return Response.json({
						processed: totalProcessed,
						stopped: "rate_limited"
					});
				}
				if (isForbidden(error)) {
					await moveToDlq(supabase, queue, msg, errorMsg.slice(0, 1e3));
					return Response.json({
						processed: totalProcessed,
						stopped: "forbidden"
					});
				}
				await supabase.from("email_send_log").insert({
					message_id: payload.message_id,
					template_name: payload.label || queue,
					recipient_email: payload.to,
					status: "failed",
					error_message: errorMsg.slice(0, 1e3)
				});
				if (payload?.message_id && typeof payload.message_id === "string") failedAttemptsByMessageId.set(payload.message_id, failedAttempts + 1);
			}
			if (i < messages.length - 1) await new Promise((r) => setTimeout(r, sendDelayMs));
		}
	}
	return Response.json({ processed: totalProcessed });
} } } });
var UnsubscribeRoute = Route$19.update({
	id: "/unsubscribe",
	path: "/unsubscribe",
	getParentRoute: () => Route$20
});
var TestimonialsRoute = Route$18.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$20
});
var ServicesRoute = Route$17.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$20
});
var PackagesRoute = Route$16.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$15.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var BookRoute = Route$14.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$20
});
var AuthRoute = Route$13.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$20
});
var AdminLoginRoute = Route$12.update({
	id: "/admin-login",
	path: "/admin-login",
	getParentRoute: () => Route$20
});
var AdminRoute = Route$21.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var ItinerariesIndexRoute = Route$9.update({
	id: "/itineraries/",
	path: "/itineraries/",
	getParentRoute: () => Route$20
});
var DestinationsIndexRoute = Route$8.update({
	id: "/destinations/",
	path: "/destinations/",
	getParentRoute: () => Route$20
});
var BlogIndexRoute = Route$7.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$20
});
var ItinerariesSlugRoute = Route$24.update({
	id: "/itineraries/$slug",
	path: "/itineraries/$slug",
	getParentRoute: () => Route$20
});
var EmailUnsubscribeRoute = Route$6.update({
	id: "/email/unsubscribe",
	path: "/email/unsubscribe",
	getParentRoute: () => Route$20
});
var DestinationsCountryRoute = Route$23.update({
	id: "/destinations/$country",
	path: "/destinations/$country",
	getParentRoute: () => Route$20
});
var BlogIdRoute = Route$22.update({
	id: "/blog/$id",
	path: "/blog/$id",
	getParentRoute: () => Route$20
});
var LovableEmailSuppressionRoute = Route$5.update({
	id: "/lovable/email/suppression",
	path: "/lovable/email/suppression",
	getParentRoute: () => Route$20
});
var ApiPublicContactRoute = Route$4.update({
	id: "/api/public/contact",
	path: "/api/public/contact",
	getParentRoute: () => Route$20
});
var ApiPublicBookingRoute = Route$3.update({
	id: "/api/public/booking",
	path: "/api/public/booking",
	getParentRoute: () => Route$20
});
var LovableEmailTransactionalSendRoute = Route$2.update({
	id: "/lovable/email/transactional/send",
	path: "/lovable/email/transactional/send",
	getParentRoute: () => Route$20
});
var LovableEmailTransactionalPreviewRoute = Route$1.update({
	id: "/lovable/email/transactional/preview",
	path: "/lovable/email/transactional/preview",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	AdminLoginRoute,
	AuthRoute,
	BookRoute,
	ContactRoute,
	PackagesRoute,
	ServicesRoute,
	TestimonialsRoute,
	UnsubscribeRoute,
	BlogIdRoute,
	DestinationsCountryRoute,
	EmailUnsubscribeRoute,
	ItinerariesSlugRoute,
	BlogIndexRoute,
	DestinationsIndexRoute,
	ItinerariesIndexRoute,
	ApiPublicBookingRoute,
	ApiPublicContactRoute,
	LovableEmailSuppressionRoute,
	LovableEmailQueueProcessRoute: Route.update({
		id: "/lovable/email/queue/process",
		path: "/lovable/email/queue/process",
		getParentRoute: () => Route$20
	}),
	LovableEmailTransactionalPreviewRoute,
	LovableEmailTransactionalSendRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
