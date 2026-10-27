import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BRDzsObU.mjs";
import { _ as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as signInCompanyAdmin, n as ADMIN_PASSWORD, t as ADMIN_EMAIL } from "./admin-auth-ClpR-Skw.mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { I as ArrowLeft, _ as Mail, c as Shield, y as Lock } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-wga2gCGT.js
var logo_default = "/assets/logo-DTFllJTg.png";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/admin-login-vCSZCoMG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var admin_bg_default = "/assets/admin-bg-CjylDJpo.jpg";
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/admin-login.tsx?tsr-split=component";
function AdminLoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)(ADMIN_EMAIL);
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) navigate({ to: "/admin" });
		});
	}, [navigate]);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setErr(null);
		try {
			await signInCompanyAdmin(email, password);
			navigate({ to: "/admin" });
		} catch (ex) {
			setErr(ex?.message || "Could not sign in");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 bg-cover bg-center scale-110",
				style: { backgroundImage: `url(${admin_bg_default})` }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/80 to-navy-deep/95" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_55%)]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-emerald-brand/15 blur-3xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm tracking-wider transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this), " Back to site"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 min-h-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-12 py-16 gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden lg:block text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: logo_default,
								alt: "",
								className: "h-14 w-14 rounded-full ring-2 ring-gold/40"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[10px] tracking-[0.4em] text-gold uppercase",
								children: "Best Eastern"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-display text-xl",
								children: "Travel · Tours · Car Hire"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur px-4 py-1.5 text-[10px] tracking-[0.35em] text-gold uppercase mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shield, { size: 12 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this), " Restricted Console"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-5xl xl:text-6xl leading-[1.05] tracking-tight",
							children: [
								"Curate every",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 25
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "italic text-gold",
									children: "journey"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 13
								}, this),
								" from",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 67
								}, this),
								"one place."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 text-white/70 text-base max-w-md leading-relaxed",
							children: "Manage bookings, publish stories, refresh imagery, and shape the way the world experiences East Africa. Powered by Supabase Auth."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10 grid grid-cols-3 gap-6 max-w-md",
							children: [
								{
									k: "Content",
									v: "Live edits"
								},
								{
									k: "Bookings",
									v: "Real-time"
								},
								{
									k: "Media",
									v: "Secure CDN"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[9px] tracking-[0.3em] text-gold/80 uppercase",
								children: s.k
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-display text-lg text-white mt-1",
								children: s.v
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 17
							}, this)] }, s.k, true, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 23
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "w-full max-w-md mx-auto lg:ml-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-emerald-brand/30 blur-sm opacity-70",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 shadow-luxury border border-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between mb-8",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-[10px] tracking-[0.4em] uppercase text-emerald-brand",
										children: "Admin"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
										className: "font-display text-3xl text-navy mt-1",
										children: "Welcome back"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "h-12 w-12 rounded-full bg-navy grid place-items-center shadow-gold",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, {
											size: 18,
											className: "text-gold"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
									onSubmit: submit,
									className: "space-y-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/70 mb-2",
												children: "Email"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 110,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, {
													size: 16,
													className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 112,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
													type: "email",
													required: true,
													value: email,
													onChange: (e) => setEmail(e.target.value),
													className: "w-full pl-10 pr-4 py-3 border border-navy/15 rounded-xl bg-white text-sm text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 113,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 111,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 109,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "block text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/70 mb-2",
												children: "Password"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 118,
												columnNumber: 19
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, {
													size: 16,
													className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 120,
													columnNumber: 21
												}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
													type: "password",
													required: true,
													autoFocus: true,
													value: password,
													onChange: (e) => setPassword(e.target.value),
													placeholder: "••••••••",
													className: "w-full pl-10 pr-4 py-3 border border-navy/15 rounded-xl bg-white text-sm text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 121,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 119,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 117,
											columnNumber: 17
										}, this),
										err && /* @__PURE__ */ (void 0)("div", {
											className: "rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive whitespace-pre-wrap",
											children: err
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 125,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "submit",
											disabled: busy,
											className: "w-full px-4 py-3.5 rounded-xl bg-gradient-gold text-navy font-semibold text-sm tracking-wide shadow-gold hover:brightness-105 active:brightness-95 disabled:opacity-60 transition",
											children: busy ? "Signing in…" : "Enter the console →"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 129,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 text-[10px] tracking-[0.25em] uppercase text-center text-navy/40",
									children: ["Supabase Auth · Password ", ADMIN_PASSWORD]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminLoginPage as component };
