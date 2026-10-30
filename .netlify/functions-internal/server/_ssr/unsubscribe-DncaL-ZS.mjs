import { i as __toESM } from "../_runtime.mjs";
import { b as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unsubscribe-DncaL-ZS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "D:/BIllions-app/src/routes/unsubscribe.tsx?tsr-split=component";
function UnsubscribePage() {
	const { token } = useSearch({ from: "/unsubscribe" });
	const [state, setState] = (0, import_react.useState)("loading");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!token) {
			setState("invalid");
			return;
		}
		fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`).then((r) => r.json()).then((d) => {
			if (d.valid) setState("valid");
			else if (d.reason === "already_unsubscribed") setState("already");
			else setState("invalid");
		}).catch(() => setState("error"));
	}, [token]);
	const confirm = async () => {
		if (!token) return;
		setBusy(true);
		try {
			const d = await (await fetch("/email/unsubscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ token })
			})).json();
			if (d.success) setState("success");
			else if (d.reason === "already_unsubscribed") setState("already");
			else setState("error");
		} catch {
			setState("error");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background flex items-center justify-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md w-full bg-card border rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl text-navy mb-3",
					children: "Email preferences"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				state === "loading" && /* @__PURE__ */ (void 0)("p", {
					className: "text-muted-foreground",
					children: "Checking your link…"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 33
				}, this),
				state === "valid" && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("p", {
					className: "text-muted-foreground mb-6",
					children: "Confirm you'd like to unsubscribe from Best Eastern Travel emails."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("button", {
					onClick: confirm,
					disabled: busy,
					className: "rounded-full bg-navy text-white px-6 py-3 font-semibold disabled:opacity-50",
					children: busy ? "Unsubscribing…" : "Confirm unsubscribe"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 31
				}, this),
				state === "already" && /* @__PURE__ */ (void 0)("p", {
					className: "text-muted-foreground",
					children: "This email is already unsubscribed."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 33
				}, this),
				state === "success" && /* @__PURE__ */ (void 0)("p", {
					className: "text-emerald-brand font-semibold",
					children: "You've been unsubscribed. Sorry to see you go."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 33
				}, this),
				state === "invalid" && /* @__PURE__ */ (void 0)("p", {
					className: "text-muted-foreground",
					children: "This unsubscribe link is invalid or has expired."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 33
				}, this),
				state === "error" && /* @__PURE__ */ (void 0)("p", {
					className: "text-destructive",
					children: "Something went wrong. Please try again later."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 31
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 10
	}, this);
}
//#endregion
export { UnsubscribePage as component };
