import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BRDzsObU.mjs";
import { _ as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ensureCompanyAdminRole } from "./admin-auth-ClpR-Skw.mjs";
import { r as require_react } from "../_libs/react+react-email__body.mjs";
import { a as updatePost, c as useSiteOverrides, i as patchOverrides, n as deleteBooking, o as uploadMedia, r as deletePost, s as useIsAdmin, t as addPost } from "./site-store-CsFkAGgL.mjs";
import { _ as services, n as blogPosts, r as companyHistory, u as packages, v as testimonials } from "./site-data-KEWOZufF.mjs";
import { C as resolveTravelStyles, E as resolveWhyChoose, T as resolveValuedClients, _ as resolvePopularDestinations, a as resolveBrand, c as resolveDestinationRegions, d as resolveHomeStats, g as resolvePageSection, h as resolvePackages, i as resolveBookServices, l as resolveFooter, m as resolveNewsletter, n as resolveAboutMd, p as resolveNavItems, r as resolveAwards, s as resolveCoreValues, t as mergeCountryInfo, u as resolveHeroSlides, v as resolveProcessSteps, w as resolveTrustStrip, x as resolveSocialLinks, y as resolveQuickServices } from "./site-content-BQK353ek.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as BLOG_CATEGORIES } from "./admin-DK-b7pg5.mjs";
import { t as countryInfo } from "./countries-CZYt9kkI.mjs";
import { t as bookingCleanLines } from "./inquiry-format-n9vOeG8e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D0RQckii.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$10 = "D:/eastern-luxe-journeys-main/src/lib/delete-guard.tsx";
var ADMIN_DELETE_PASSWORD = "@2006@";
var listeners = [];
var current = null;
function setCurrent(r) {
	current = r;
	listeners.forEach((l) => l(r));
}
function confirmDelete(message = "This action cannot be undone.") {
	return new Promise((resolve) => setCurrent({
		message,
		resolve
	}));
}
function DeleteGuardHost() {
	const [req, setReq] = (0, import_react.useState)(current);
	const [pw, setPw] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const l = (r) => {
			setReq(r);
			setPw("");
			setErr(null);
		};
		listeners.push(l);
		return () => {
			listeners = listeners.filter((x) => x !== l);
		};
	}, []);
	if (!req) return null;
	function close(ok) {
		req.resolve(ok);
		setCurrent(null);
	}
	function submit(e) {
		e.preventDefault();
		if (pw === ADMIN_DELETE_PASSWORD) close(true);
		else setErr("Incorrect password.");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-[100] grid place-items-center bg-navy/70 backdrop-blur-sm px-4 animate-in fade-in duration-150",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: submit,
			className: "w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gold/30 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-gradient-to-r from-navy to-navy/90 px-6 py-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-9 w-9 rounded-full bg-destructive/20 grid place-items-center text-destructive text-lg",
						children: "⚠"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 46,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-white font-display text-lg leading-tight",
						children: "Confirm deletion"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 48,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-white/60 text-xs",
						children: "Password required"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 49,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-navy/80",
						children: req.message
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 53,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-xs font-semibold text-navy mb-1.5 tracking-wide uppercase",
							children: "Admin password"
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 55,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							autoFocus: true,
							type: "password",
							value: pw,
							onChange: (e) => {
								setPw(e.target.value);
								setErr(null);
							},
							className: "w-full px-3.5 py-2.5 rounded-md border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none",
							placeholder: "Enter password to delete"
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 56,
							columnNumber: 13
						}, this),
						err && /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-destructive mt-1.5",
							children: err
						}, void 0, false, {
							fileName: _jsxFileName$10,
							lineNumber: 64,
							columnNumber: 21
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$10,
						lineNumber: 54,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "px-6 pb-6 flex gap-2 justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => close(false),
						className: "px-4 py-2 text-sm rounded-md border border-navy/20 text-navy hover:bg-navy/5",
						children: "Cancel"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 68,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "submit",
						className: "px-5 py-2 text-sm rounded-md bg-destructive text-white font-semibold hover:brightness-110 shadow",
						children: "Delete"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 69,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 67,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 44,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$10,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
/**
* One-time SQL the site owner must run in Supabase SQL Editor
* for project rvzmwmkdxhvlkmeqecto. Without this, forms cannot save
* and Admin Bookings/Messages stay empty.
*/
var SUPABASE_SETUP_SQL = `-- ============================================================
-- BEST EASTERN — RUN ONCE in Supabase → SQL Editor
-- Project must be: rvzmwmkdxhvlkmeqecto
-- ============================================================

-- Allow public form submissions
GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT SELECT, DELETE ON public.contact_messages TO authenticated;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a booking"
    ON public.bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a contact message"
    ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Company admin helper
CREATE OR REPLACE FUNCTION public.is_company_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE(
    lower((SELECT email FROM auth.users WHERE id = auth.uid()))
      = 'besteasterntravel@yahoo.com'
    OR public.has_role(auth.uid(), 'admin'),
    false
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_company_admin() TO authenticated, anon;

CREATE OR REPLACE FUNCTION public.ensure_company_admin()
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  caller_id uuid := auth.uid();
  caller_email text;
BEGIN
  IF caller_id IS NULL THEN RETURN false; END IF;
  SELECT lower(email) INTO caller_email FROM auth.users WHERE id = caller_id;
  IF caller_email IS DISTINCT FROM 'besteasterntravel@yahoo.com' THEN RETURN false; END IF;
  INSERT INTO public.user_roles (user_id, role)
  VALUES (caller_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  RETURN true;
END;
$$;

GRANT EXECUTE ON FUNCTION public.ensure_company_admin() TO authenticated;

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'besteasterntravel@yahoo.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- Admin can read / manage
DROP POLICY IF EXISTS "Admins can view bookings" ON public.bookings;
CREATE POLICY "Admins can view bookings"
  ON public.bookings FOR SELECT TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can update bookings" ON public.bookings;
CREATE POLICY "Admins can update bookings"
  ON public.bookings FOR UPDATE TO authenticated
  USING (public.is_company_admin()) WITH CHECK (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can delete bookings" ON public.bookings;
CREATE POLICY "Admins can delete bookings"
  ON public.bookings FOR DELETE TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can read messages" ON public.contact_messages;
CREATE POLICY "Admins can read messages"
  ON public.contact_messages FOR SELECT TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can delete messages" ON public.contact_messages;
CREATE POLICY "Admins can delete messages"
  ON public.contact_messages FOR DELETE TO authenticated
  USING (public.is_company_admin());

-- Reliable public submit (bypasses RLS)
CREATE OR REPLACE FUNCTION public.submit_public_booking(
  p_name text, p_email text, p_phone text DEFAULT NULL,
  p_destination text DEFAULT NULL, p_travel_date date DEFAULT NULL,
  p_travelers int DEFAULT NULL, p_notes text DEFAULT NULL,
  p_payload jsonb DEFAULT '{}'::jsonb
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE new_id uuid;
BEGIN
  INSERT INTO public.bookings (name, email, phone, destination, travel_date, travelers, notes, payload, status)
  VALUES (p_name, p_email, p_phone, p_destination, p_travel_date, p_travelers, p_notes, p_payload, 'new')
  RETURNING id INTO new_id;
  RETURN new_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_public_contact(
  p_name text, p_email text, p_phone text DEFAULT NULL,
  p_subject text DEFAULT NULL, p_message text DEFAULT ''
) RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE new_id uuid;
BEGIN
  INSERT INTO public.contact_messages (name, email, phone, subject, message)
  VALUES (p_name, p_email, p_phone, p_subject, p_message)
  RETURNING id INTO new_id;
  RETURN new_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_public_booking(text, text, text, text, date, int, text, jsonb) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_public_contact(text, text, text, text, text) TO anon, authenticated;
`;
async function probePublicBookingInsert(supabase) {
	try {
		const { data, error } = await supabase.rpc("submit_public_booking", {
			p_name: "Setup Probe",
			p_email: "setup-probe@example.com",
			p_phone: "+2600",
			p_destination: "Setup",
			p_travel_date: null,
			p_travelers: 1,
			p_notes: "Database setup probe — safe to delete",
			p_payload: {
				type: "booking",
				summary: "Setup probe"
			}
		});
		if (!error && data) return {
			ok: true,
			detail: "RPC submit works"
		};
		const { error: insertError } = await supabase.from("bookings").insert({
			name: "Setup Probe",
			email: "setup-probe@example.com",
			phone: "+2600",
			destination: "Setup",
			notes: "Database setup probe — safe to delete",
			payload: {
				type: "booking",
				summary: "Setup probe"
			}
		});
		if (!insertError) return {
			ok: true,
			detail: "Direct insert works"
		};
		return {
			ok: false,
			detail: insertError?.message || error?.message || "Insert blocked by database policies"
		};
	} catch (e) {
		return {
			ok: false,
			detail: e?.message || "Probe failed"
		};
	}
}
var _jsxFileName$9 = "D:/eastern-luxe-journeys-main/src/components/admin/DatabaseSetupBanner.tsx";
/** Shows until the live Supabase project allows public form inserts. */
function DatabaseSetupBanner() {
	const [status, setStatus] = (0, import_react.useState)("checking");
	const [detail, setDetail] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(true);
	async function check() {
		setStatus("checking");
		const result = await probePublicBookingInsert(supabase);
		setDetail(result.detail);
		setStatus(result.ok ? "ok" : "blocked");
		if (!result.ok) setOpen(true);
	}
	(0, import_react.useEffect)(() => {
		check();
	}, []);
	if (status === "ok" || status === "checking" && !open) return null;
	if (status === "checking") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-6 rounded-xl border border-navy/10 bg-card p-4 text-sm text-muted-foreground",
		children: "Checking whether forms can save to Supabase…"
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 27,
		columnNumber: 7
	}, this);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-6 rounded-xl border-2 border-destructive/40 bg-destructive/5 p-5 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-xl text-navy",
					children: "Database setup required"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 39,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: [
						"Forms are submitting on the website, but Supabase is blocking saves. That is why",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: " Bookings" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						" and ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: " Messages" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 42,
							columnNumber: 34
						}, this),
						" stay empty. Error: ",
						detail
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 40,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 38,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "text-xs text-muted-foreground",
					children: "Hide"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 45,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
				className: "text-sm space-y-1 list-decimal pl-5 text-navy/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: ["Open Supabase → project ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
						className: "text-xs bg-background px-1 rounded",
						children: "rvzmwmkdxhvlkmeqecto"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 51,
						columnNumber: 37
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 51,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						"Go to ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "SQL Editor" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 52,
							columnNumber: 19
						}, this),
						" → New query"
					] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 52,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						"Click ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Copy SQL" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 53,
							columnNumber: 19
						}, this),
						" below, paste, then click ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Run" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 53,
							columnNumber: 60
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						"Come back here and click ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Test again" }, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 54,
							columnNumber: 38
						}, this),
						", then submit a form"
					] }, void 0, true, {
						fileName: _jsxFileName$9,
						lineNumber: 54,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: async () => {
						await navigator.clipboard.writeText(SUPABASE_SETUP_SQL);
						setCopied(true);
						setTimeout(() => setCopied(false), 2e3);
					},
					className: "px-4 py-2 rounded-md bg-gradient-gold text-navy font-semibold text-sm",
					children: copied ? "Copied!" : "Copy SQL"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 58,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: check,
					className: "px-4 py-2 rounded-md border text-sm font-semibold text-navy",
					children: "Test again"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 69,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
				className: "max-h-48 overflow-auto text-[10px] leading-relaxed bg-background border rounded-md p-3 whitespace-pre-wrap",
				children: SUPABASE_SETUP_SQL
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 78,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 36,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "D:/eastern-luxe-journeys-main/src/components/admin/DestinationsEditor.tsx";
function Field$3({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm font-semibold text-navy mb-1.5",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 16,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
function UploadInput$3({ accept, onUploaded }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			type: "file",
			accept,
			disabled: busy,
			onChange: async (e) => {
				const file = e.target.files?.[0];
				if (!file) return;
				setBusy(true);
				setErr(null);
				try {
					onUploaded(await uploadMedia(file));
				} catch (ex) {
					setErr(ex instanceof Error ? ex.message : "Upload failed");
				} finally {
					setBusy(false);
					e.target.value = "";
				}
			}
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 33,
			columnNumber: 7
		}, this),
		busy && /* @__PURE__ */ (void 0)("span", {
			className: "text-xs text-muted-foreground ml-2",
			children: "Uploading…"
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 52,
			columnNumber: 16
		}, this),
		err && /* @__PURE__ */ (void 0)("p", {
			className: "text-xs text-destructive mt-1",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 53,
			columnNumber: 15
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
function DestinationsEditor() {
	const [overrides] = useSiteOverrides();
	const [openSlug, setOpenSlug] = (0, import_react.useState)(null);
	const [drafts, setDrafts] = (0, import_react.useState)({});
	const [dirty, setDirty] = (0, import_react.useState)({});
	const [savingSlug, setSavingSlug] = (0, import_react.useState)(null);
	const [saveNote, setSaveNote] = (0, import_react.useState)({});
	const imageMap = overrides.destinationImages || {};
	const contentMap = overrides.destinationContent || {};
	const regions = resolveDestinationRegions(overrides);
	const destinationsPage = resolvePageSection(overrides, "destinations");
	function draftFor(slug) {
		return drafts[slug] ?? contentMap[slug] ?? {};
	}
	function setDraft(slug, patch) {
		setDrafts((prev) => {
			const current = prev[slug] ?? contentMap[slug] ?? {};
			return {
				...prev,
				[slug]: {
					...current,
					...patch,
					facts: patch.facts ? {
						...current.facts,
						...patch.facts
					} : current.facts,
					attractions: patch.attractions ? {
						...current.attractions,
						...patch.attractions
					} : current.attractions,
					extraAttractions: patch.extraAttractions ?? current.extraAttractions,
					removedAttractions: patch.removedAttractions ?? current.removedAttractions
				}
			};
		});
		setDirty((d) => ({
			...d,
			[slug]: true
		}));
		setSaveNote((n) => ({
			...n,
			[slug]: null
		}));
	}
	async function saveRegions(next) {
		await patchOverrides({ destinationRegions: next });
	}
	async function setImage(slug, kind, url, attractionName) {
		const current = imageMap[slug] || {};
		const next = { ...current };
		if (kind === "hero") if (url) next.hero = url;
		else delete next.hero;
		else if (attractionName) {
			const atts = { ...current.attractions || {} };
			if (url) atts[attractionName] = url;
			else delete atts[attractionName];
			next.attractions = atts;
		}
		if (!next.hero && (!next.attractions || Object.keys(next.attractions).length === 0) && (!next.gallery || next.gallery.length === 0)) {
			const clone = { ...imageMap };
			delete clone[slug];
			await patchOverrides({ destinationImages: clone });
		} else await patchOverrides({ destinationImages: {
			...imageMap,
			[slug]: next
		} });
	}
	async function addGalleryImage(slug, url) {
		const current = imageMap[slug] || {};
		const gallery = [...current.gallery || [], url];
		await patchOverrides({ destinationImages: {
			...imageMap,
			[slug]: {
				...current,
				gallery
			}
		} });
	}
	async function removeGalleryImage(slug, index) {
		const current = imageMap[slug] || {};
		const gallery = (current.gallery || []).filter((_, i) => i !== index);
		const next = {
			...current,
			gallery: gallery.length ? gallery : void 0
		};
		const hasAtts = next.attractions && Object.keys(next.attractions).length > 0;
		if (!next.hero && !hasAtts && !next.gallery?.length) {
			const clone = { ...imageMap };
			delete clone[slug];
			await patchOverrides({ destinationImages: clone });
		} else await patchOverrides({ destinationImages: {
			...imageMap,
			[slug]: next
		} });
	}
	async function saveContent(slug, patch) {
		const current = draftFor(slug);
		const nextDraft = patch ? {
			...current,
			...patch,
			facts: patch.facts ? {
				...current.facts,
				...patch.facts
			} : current.facts,
			attractions: patch.attractions ? {
				...current.attractions,
				...patch.attractions
			} : current.attractions,
			extraAttractions: patch.extraAttractions ?? current.extraAttractions,
			removedAttractions: patch.removedAttractions ?? current.removedAttractions
		} : current;
		if (patch) {
			setDrafts((prev) => ({
				...prev,
				[slug]: nextDraft
			}));
			setDirty((d) => ({
				...d,
				[slug]: true
			}));
		}
		setSavingSlug(slug);
		setSaveNote((n) => ({
			...n,
			[slug]: null
		}));
		try {
			await patchOverrides({ destinationContent: {
				...contentMap,
				[slug]: nextDraft
			} });
			setDrafts((prev) => ({
				...prev,
				[slug]: nextDraft
			}));
			setDirty((d) => ({
				...d,
				[slug]: false
			}));
			setSaveNote((n) => ({
				...n,
				[slug]: "Saved"
			}));
		} catch (err) {
			const msg = err instanceof Error ? err.message : String(err);
			setDrafts((prev) => ({
				...prev,
				[slug]: nextDraft
			}));
			setDirty((d) => ({
				...d,
				[slug]: false
			}));
			setSaveNote((n) => ({
				...n,
				[slug]: "Saved on this device"
			}));
			if (!/SERVICE_ROLE|service_role|row-level security|Session expired|fetch failed/i.test(msg)) console.warn("Destination save:", msg);
		} finally {
			setSavingSlug(null);
		}
	}
	async function resetContent(slug) {
		const clone = { ...contentMap };
		delete clone[slug];
		await patchOverrides({ destinationContent: Object.keys(clone).length ? clone : void 0 });
		setDrafts((prev) => {
			const next = { ...prev };
			delete next[slug];
			return next;
		});
		setDirty((d) => ({
			...d,
			[slug]: false
		}));
	}
	const countries = Object.values(countryInfo);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-4 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-xl text-navy",
				children: "Destinations"
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 211,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: [
					"Edit page copy and images for each country. Use ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "+ Add attraction" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 213,
						columnNumber: 59
					}, this),
					", then click",
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Save" }, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 214,
						columnNumber: 11
					}, this),
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 212,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 210,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border rounded-lg p-4 bg-card space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
						className: "font-semibold text-navy",
						children: "Destinations index page"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 219,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$3, {
							label: "Hero kicker",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: destinationsPage.kicker,
								onBlur: (e) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									destinations: {
										...destinationsPage,
										kicker: e.target.value
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 222,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 221,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$3, {
							label: "Hero title",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: destinationsPage.title,
								onBlur: (e) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									destinations: {
										...destinationsPage,
										title: e.target.value
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 236,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 235,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 220,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$3, {
						label: "Hero image",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-3",
							children: [destinationsPage.heroImage && /* @__PURE__ */ (void 0)("img", {
								src: destinationsPage.heroImage,
								alt: "",
								className: "w-32 aspect-video object-cover rounded border"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 253,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$3, {
								accept: "image/*",
								onUploaded: (url) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									destinations: {
										...destinationsPage,
										heroImage: url
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 255,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 251,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 250,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 border-t pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-sm font-semibold text-navy",
								children: "Regions & places"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 270,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "text-xs px-2 py-1 rounded bg-gradient-gold text-navy font-semibold",
								onClick: () => saveRegions([...regions, {
									region: "New Region",
									places: ["Place one"]
								}]),
								children: "+ Add region"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 271,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 269,
							columnNumber: 11
						}, this), regions.map((r, ri) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-3 border rounded space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										className: "input",
										value: r.region,
										onChange: (e) => saveRegions(regions.map((x, i) => i === ri ? {
											...x,
											region: e.target.value
										} : x))
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 282,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										className: "text-xs text-destructive shrink-0",
										onClick: async () => {
											if (await confirmDelete(`Delete region "${r.region}"?`)) saveRegions(regions.filter((_, i) => i !== ri));
										},
										children: "Delete"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 289,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 281,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
									className: "input",
									rows: 3,
									placeholder: "Places (one per line)",
									value: r.places.join("\n"),
									onChange: (e) => saveRegions(regions.map((x, i) => i === ri ? {
										...x,
										places: e.target.value.split("\n").filter(Boolean)
									} : x))
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 301,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-3",
									children: [r.image && /* @__PURE__ */ (void 0)("img", {
										src: r.image,
										alt: "",
										className: "w-20 h-16 object-cover rounded border"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 315,
										columnNumber: 29
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$3, {
										accept: "image/*",
										onUploaded: (url) => saveRegions(regions.map((x, i) => i === ri ? {
											...x,
											image: url
										} : x))
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 316,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 314,
									columnNumber: 15
								}, this)
							]
						}, ri, true, {
							fileName: _jsxFileName$8,
							lineNumber: 280,
							columnNumber: 13
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 268,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 218,
				columnNumber: 7
			}, this),
			countries.map((c) => {
				const ov = imageMap[c.slug] || {};
				const content = draftFor(c.slug);
				const display = mergeCountryInfo(c, content);
				const isOpen = openSlug === c.slug;
				const extras = content.extraAttractions || [];
				const removed = content.removedAttractions || [];
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border rounded-lg bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setOpenSlug(isOpen ? null : c.slug),
						className: "w-full flex items-center gap-4 p-4 text-left hover:bg-navy/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: ov.hero || c.heroImage,
								alt: "",
								className: "w-20 h-14 object-cover rounded"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 342,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-semibold text-navy",
									children: display.name
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 344,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										display.region,
										" · ",
										c.attractions.length + extras.length,
										" attractions",
										dirty[c.slug] ? " · unsaved" : ""
									]
								}, void 0, true, {
									fileName: _jsxFileName$8,
									lineNumber: 345,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 343,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-navy/40 text-xl",
								children: isOpen ? "−" : "+"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 350,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 337,
						columnNumber: 13
					}, this), isOpen && /* @__PURE__ */ (void 0)("div", {
						className: "p-4 border-t space-y-6 bg-background",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 sticky top-0 z-10 bg-background py-2 border-b",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "text-sm text-muted-foreground",
									children: saveNote[c.slug] === "Saved" ? "Saved to site" : dirty[c.slug] ? "Unsaved changes" : "Edit then click Save"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 355,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									disabled: savingSlug === c.slug,
									className: "px-5 py-2 rounded-md bg-emerald-brand text-white font-semibold text-sm disabled:opacity-60",
									onClick: () => void saveContent(c.slug).catch(() => void 0),
									children: savingSlug === c.slug ? "Saving…" : "Save"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 362,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 354,
								columnNumber: 17
							}, this),
							saveNote[c.slug] && saveNote[c.slug] !== "Saved" && /* @__PURE__ */ (void 0)("p", {
								className: "text-sm text-destructive",
								children: saveNote[c.slug]
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 372,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "text-sm font-semibold text-navy",
											children: "Page copy"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 377,
											columnNumber: 21
										}, this), contentMap[c.slug] && /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => void resetContent(c.slug),
											className: "text-xs text-destructive",
											children: "Reset all text to default"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 379,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 376,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid sm:grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (void 0)(Field$3, {
											label: "Title",
											children: /* @__PURE__ */ (void 0)("input", {
												className: "input",
												value: display.name,
												onChange: (e) => setDraft(c.slug, { name: e.target.value })
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 390,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 389,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Field$3, {
											label: "Region label",
											children: /* @__PURE__ */ (void 0)("input", {
												className: "input",
												value: display.region,
												onChange: (e) => setDraft(c.slug, { region: e.target.value })
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 397,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 396,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 388,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Field$3, {
										label: "Hero description",
										children: /* @__PURE__ */ (void 0)("textarea", {
											className: "input",
											rows: 4,
											value: display.overview,
											onChange: (e) => setDraft(c.slug, { overview: e.target.value })
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 405,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 404,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid sm:grid-cols-2 gap-3",
										children: Object.keys(c.facts).map((factKey) => /* @__PURE__ */ (void 0)(Field$3, {
											label: factKey,
											children: /* @__PURE__ */ (void 0)("input", {
												className: "input",
												value: display.facts[factKey] || "",
												onChange: (e) => setDraft(c.slug, { facts: { [factKey]: e.target.value } })
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 415,
												columnNumber: 25
											}, this)
										}, factKey, false, {
											fileName: _jsxFileName$8,
											lineNumber: 414,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 412,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid sm:grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (void 0)(Field$3, {
											label: "Section label",
											children: /* @__PURE__ */ (void 0)("input", {
												className: "input",
												value: display.whatToSeeLabel,
												onChange: (e) => setDraft(c.slug, { whatToSeeLabel: e.target.value })
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 425,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 424,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)(Field$3, {
											label: "Experiences heading",
											children: /* @__PURE__ */ (void 0)("input", {
												className: "input",
												value: display.experiencesHeading,
												onChange: (e) => setDraft(c.slug, { experiencesHeading: e.target.value })
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 432,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 431,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 423,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Field$3, {
										label: "Bottom CTA title",
										children: /* @__PURE__ */ (void 0)("input", {
											className: "input",
											value: display.ctaTitle,
											onChange: (e) => setDraft(c.slug, { ctaTitle: e.target.value })
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 440,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 439,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)(Field$3, {
										label: "Bottom CTA text",
										children: /* @__PURE__ */ (void 0)("textarea", {
											className: "input",
											rows: 3,
											value: display.ctaBody,
											onChange: (e) => setDraft(c.slug, { ctaBody: e.target.value })
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 447,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 446,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 375,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-4 border-t pt-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between gap-3 flex-wrap",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
											className: "text-sm font-semibold text-navy",
											children: "Attractions"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 459,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Add places like Kafue — name, description, and image."
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 460,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 458,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												className: "px-3 py-2 rounded-md border border-emerald-brand text-emerald-brand font-semibold text-sm",
												onClick: () => {
													const nextExtras = [...extras, {
														name: "",
														description: "",
														image: void 0
													}];
													setDraft(c.slug, { extraAttractions: nextExtras });
													saveContent(c.slug, { extraAttractions: nextExtras }).catch(() => void 0);
													requestAnimationFrame(() => {
														document.getElementById(`extra-attraction-${c.slug}-${nextExtras.length - 1}`)?.scrollIntoView({
															behavior: "smooth",
															block: "center"
														});
													});
												},
												children: "+ Add attraction"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 465,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												disabled: savingSlug === c.slug,
												className: "px-4 py-2 rounded-md bg-navy text-white font-semibold text-sm disabled:opacity-60",
												onClick: () => void saveContent(c.slug).catch(() => void 0),
												children: savingSlug === c.slug ? "Saving…" : "Save"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 488,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 464,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 457,
										columnNumber: 19
									}, this),
									c.attractions.map((a) => {
										if (removed.includes(a.name)) return null;
										return /* @__PURE__ */ (void 0)("div", {
											className: "p-4 rounded-lg border bg-card space-y-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
													children: "Default highlight"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 503,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													className: "text-xs text-destructive",
													onClick: async () => {
														if (await confirmDelete(`Hide "${a.name}" from the public page?`)) setDraft(c.slug, { removedAttractions: [...removed, a.name] });
													},
													children: "Hide"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 504,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 502,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex flex-col sm:flex-row gap-4",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "shrink-0",
													children: [/* @__PURE__ */ (void 0)("img", {
														src: content.attractions?.[a.name]?.image || ov.attractions?.[a.name] || a.image,
														alt: "",
														className: "w-full sm:w-40 aspect-[4/3] object-cover rounded-md border"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 518,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "mt-2",
														children: /* @__PURE__ */ (void 0)(UploadInput$3, {
															accept: "image/*",
															onUploaded: (url) => {
																setDraft(c.slug, { attractions: { [a.name]: { image: url } } });
																setImage(c.slug, "attraction", url, a.name);
															}
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 524,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 523,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 517,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex-1 space-y-3",
													children: [/* @__PURE__ */ (void 0)(Field$3, {
														label: "Attraction name",
														children: /* @__PURE__ */ (void 0)("input", {
															className: "input",
															value: content.attractions?.[a.name]?.name ?? a.name,
															onChange: (e) => setDraft(c.slug, { attractions: { [a.name]: { name: e.target.value } } })
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 537,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 536,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)(Field$3, {
														label: "Description",
														children: /* @__PURE__ */ (void 0)("textarea", {
															className: "input",
															rows: 3,
															value: content.attractions?.[a.name]?.description ?? a.description,
															onChange: (e) => setDraft(c.slug, { attractions: { [a.name]: { description: e.target.value } } })
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 548,
															columnNumber: 31
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 547,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 535,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 516,
												columnNumber: 25
											}, this)]
										}, a.name, true, {
											fileName: _jsxFileName$8,
											lineNumber: 501,
											columnNumber: 23
										}, this);
									}),
									extras.map((extra, ei) => /* @__PURE__ */ (void 0)("div", {
										id: `extra-attraction-${c.slug}-${ei}`,
										className: "p-4 rounded-lg border-2 border-emerald-brand/40 bg-card space-y-3",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "text-xs font-semibold text-emerald-brand uppercase tracking-wide",
												children: ["New attraction ", ei + 1]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 571,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												className: "text-xs text-destructive",
												onClick: async () => {
													if (await confirmDelete(`Delete attraction "${extra.name || "untitled"}"?`)) {
														const next = extras.filter((_, i) => i !== ei);
														setDraft(c.slug, { extraAttractions: next });
														saveContent(c.slug, { extraAttractions: next }).catch(() => void 0);
													}
												},
												children: "Delete"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 574,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 570,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex flex-col sm:flex-row gap-4",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "shrink-0",
												children: [extra.image ? /* @__PURE__ */ (void 0)("img", {
													src: extra.image,
													alt: "",
													className: "w-full sm:w-40 aspect-[4/3] object-cover rounded-md border"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 591,
													columnNumber: 29
												}, this) : /* @__PURE__ */ (void 0)("div", {
													className: "w-full sm:w-40 aspect-[4/3] rounded-md border border-dashed flex items-center justify-center text-xs text-muted-foreground bg-muted/30",
													children: "No image yet"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 597,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "mt-2 space-y-1",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "text-xs font-semibold text-navy",
														children: "Upload image"
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 602,
														columnNumber: 29
													}, this), /* @__PURE__ */ (void 0)(UploadInput$3, {
														accept: "image/*",
														onUploaded: (url) => {
															const next = [...extras];
															next[ei] = {
																...next[ei],
																image: url
															};
															setDraft(c.slug, { extraAttractions: next });
															saveContent(c.slug, { extraAttractions: next }).catch(() => void 0);
														}
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 603,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 601,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 589,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex-1 space-y-3",
												children: [/* @__PURE__ */ (void 0)(Field$3, {
													label: "Attraction name",
													children: /* @__PURE__ */ (void 0)("input", {
														className: "input",
														placeholder: "e.g. Kafue National Park",
														value: extra.name,
														onChange: (e) => {
															const next = [...extras];
															next[ei] = {
																...next[ei],
																name: e.target.value
															};
															setDraft(c.slug, { extraAttractions: next });
														}
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 616,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 615,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)(Field$3, {
													label: "Description",
													children: /* @__PURE__ */ (void 0)("textarea", {
														className: "input",
														rows: 4,
														placeholder: "Describe this place or experience…",
														value: extra.description,
														onChange: (e) => {
															const next = [...extras];
															next[ei] = {
																...next[ei],
																description: e.target.value
															};
															setDraft(c.slug, { extraAttractions: next });
														}
													}, void 0, false, {
														fileName: _jsxFileName$8,
														lineNumber: 628,
														columnNumber: 29
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 627,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName$8,
												lineNumber: 614,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 588,
											columnNumber: 23
										}, this)]
									}, `extra-${ei}`, true, {
										fileName: _jsxFileName$8,
										lineNumber: 565,
										columnNumber: 21
									}, this)),
									removed.length > 0 && /* @__PURE__ */ (void 0)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											"Hidden: ",
											removed.join(", "),
											".",
											" ",
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												className: "text-emerald-brand underline",
												onClick: () => setDraft(c.slug, { removedAttractions: [] }),
												children: "Restore all"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 647,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 645,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 456,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex justify-end gap-3 border-t pt-4",
								children: /* @__PURE__ */ (void 0)("button", {
									type: "button",
									disabled: savingSlug === c.slug,
									className: "px-5 py-2 rounded-md bg-emerald-brand text-white font-semibold text-sm disabled:opacity-60",
									onClick: () => void saveContent(c.slug).catch(() => void 0),
									children: savingSlug === c.slug ? "Saving…" : "Save"
								}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 659,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 658,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "space-y-4 border-t pt-5",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "text-sm font-semibold text-navy",
										children: "Images"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 670,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
										className: "text-sm font-medium text-navy mb-2",
										children: "Hero image"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 672,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (void 0)("img", {
											src: ov.hero || c.heroImage,
											className: "w-40 aspect-[4/3] object-cover rounded-md border",
											alt: ""
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 674,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex-1 space-y-2",
											children: [/* @__PURE__ */ (void 0)(UploadInput$3, {
												accept: "image/*",
												onUploaded: (url) => setImage(c.slug, "hero", url)
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 680,
												columnNumber: 25
											}, this), ov.hero && /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setImage(c.slug, "hero", void 0),
												className: "text-xs text-destructive",
												children: "Reset to default"
											}, void 0, false, {
												fileName: _jsxFileName$8,
												lineNumber: 682,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName$8,
											lineNumber: 679,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 673,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 671,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
										className: "text-sm font-medium text-navy mb-2",
										children: "Attraction images"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 694,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-4",
										children: c.attractions.map((a) => {
											const current = ov.attractions?.[a.name];
											return /* @__PURE__ */ (void 0)("div", {
												className: "flex items-start gap-4 p-3 rounded border bg-card",
												children: [/* @__PURE__ */ (void 0)("img", {
													src: current || a.image,
													alt: a.name,
													className: "w-32 aspect-[4/3] object-cover rounded-md border"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 700,
													columnNumber: 29
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex-1",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "font-semibold text-navy text-sm mb-2",
															children: a.name
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 706,
															columnNumber: 31
														}, this),
														/* @__PURE__ */ (void 0)(UploadInput$3, {
															accept: "image/*",
															onUploaded: (url) => setImage(c.slug, "attraction", url, a.name)
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 707,
															columnNumber: 31
														}, this),
														current && /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setImage(c.slug, "attraction", void 0, a.name),
															className: "text-xs text-destructive mt-1",
															children: "Reset to default"
														}, void 0, false, {
															fileName: _jsxFileName$8,
															lineNumber: 712,
															columnNumber: 33
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName$8,
													lineNumber: 705,
													columnNumber: 29
												}, this)]
											}, a.name, true, {
												fileName: _jsxFileName$8,
												lineNumber: 699,
												columnNumber: 27
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 695,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 693,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "text-sm font-medium text-navy mb-2",
											children: "Extra gallery images"
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 727,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "grid grid-cols-3 gap-2 mb-2",
											children: (ov.gallery || []).map((url, gi) => /* @__PURE__ */ (void 0)("div", {
												className: "relative aspect-video rounded border overflow-hidden",
												children: [/* @__PURE__ */ (void 0)("img", {
													src: url,
													alt: "",
													className: "w-full h-full object-cover"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 731,
													columnNumber: 27
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => removeGalleryImage(c.slug, gi),
													className: "absolute top-1 right-1 bg-destructive text-white text-xs px-1 rounded",
													children: "✕"
												}, void 0, false, {
													fileName: _jsxFileName$8,
													lineNumber: 732,
													columnNumber: 27
												}, this)]
											}, gi, true, {
												fileName: _jsxFileName$8,
												lineNumber: 730,
												columnNumber: 25
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 728,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)(UploadInput$3, {
											accept: "image/*",
											onUploaded: (url) => addGalleryImage(c.slug, url)
										}, void 0, false, {
											fileName: _jsxFileName$8,
											lineNumber: 742,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName$8,
										lineNumber: 726,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 669,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 353,
						columnNumber: 15
					}, this)]
				}, c.slug, true, {
					fileName: _jsxFileName$8,
					lineNumber: 336,
					columnNumber: 11
				}, this);
			}),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 750,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 209,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "D:/eastern-luxe-journeys-main/src/components/admin/admin-ui.tsx";
function Field$2({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm font-semibold text-navy mb-1.5",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 9,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function UploadInput$2({ accept = "image/*", onUploaded }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			type: "file",
			accept,
			disabled: busy,
			onChange: async (e) => {
				const file = e.target.files?.[0];
				if (!file) return;
				setBusy(true);
				setErr(null);
				try {
					onUploaded(await uploadMedia(file));
				} catch (ex) {
					setErr(ex instanceof Error ? ex.message : "Upload failed");
				} finally {
					setBusy(false);
					e.target.value = "";
				}
			}
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 26,
			columnNumber: 7
		}, this),
		busy && /* @__PURE__ */ (void 0)("span", {
			className: "text-xs text-muted-foreground ml-2",
			children: "Uploading…"
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 45,
			columnNumber: 16
		}, this),
		err && /* @__PURE__ */ (void 0)("p", {
			className: "text-xs text-destructive mt-1",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 46,
			columnNumber: 15
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
function AdminInputStyles() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 53,
		columnNumber: 5
	}, this);
}
function PageSectionFields({ sectionKey, fields = [
	"kicker",
	"title",
	"subtitle",
	"body",
	"heroImage",
	"ctaText",
	"linkText",
	"hours",
	"successTitle",
	"successBody",
	"disclaimer",
	"badgeText",
	"secondaryTitle"
] }) {
	const [overrides] = useSiteOverrides();
	const section = resolvePageSection(overrides, sectionKey);
	function save(patch) {
		patchOverrides({ pageSections: {
			...overrides.pageSections,
			[sectionKey]: {
				...section,
				...patch
			}
		} });
	}
	const labels = {
		kicker: "Kicker",
		title: "Title",
		subtitle: "Subtitle",
		body: "Body text",
		heroImage: "Hero image",
		ctaText: "Button text",
		linkText: "Link text",
		hours: "Hours / helper text",
		successTitle: "Success title",
		successBody: "Success message",
		disclaimer: "Disclaimer",
		badgeText: "Badge text",
		secondaryTitle: "Secondary heading",
		secondaryBody: "Secondary body",
		badgeLabel: "Badge label"
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: fields.map((f) => {
			if (f === "heroImage") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: labels[f],
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start gap-3",
					children: [section.heroImage && /* @__PURE__ */ (void 0)("img", {
						src: section.heroImage,
						alt: "",
						className: "w-28 aspect-video object-cover rounded border"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 102,
						columnNumber: 19
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => save({ heroImage: url }) }, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 104,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 100,
					columnNumber: 15
				}, this)
			}, f, false, {
				fileName: _jsxFileName$7,
				lineNumber: 99,
				columnNumber: 13
			}, this);
			const val = section[f] || "";
			const multiline = f === "body" || f === "successBody" || f === "disclaimer" || f === "secondaryBody";
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: labels[f] || f,
				children: multiline ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					className: "input",
					rows: 3,
					defaultValue: String(val),
					onBlur: (e) => save({ [f]: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 114,
					columnNumber: 15
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: String(val),
					onBlur: (e) => save({ [f]: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 121,
					columnNumber: 15
				}, this)
			}, f, false, {
				fileName: _jsxFileName$7,
				lineNumber: 112,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 95,
		columnNumber: 5
	}, this);
}
function StringListEditor({ label, items, onChange, placeholder = "New item" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
				className: "font-semibold text-navy",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 148,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "text-xs text-emerald-brand font-semibold",
				onClick: () => onChange([...items, placeholder]),
				children: "+ Add"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 149,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 147,
			columnNumber: 7
		}, this), items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				className: "input flex-1",
				value: item,
				onChange: (e) => onChange(items.map((x, idx) => idx === i ? e.target.value : x))
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 159,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "text-xs text-destructive px-2",
				onClick: () => onChange(items.filter((_, idx) => idx !== i)),
				children: "Delete"
			}, void 0, false, {
				fileName: _jsxFileName$7,
				lineNumber: 164,
				columnNumber: 11
			}, this)]
		}, i, true, {
			fileName: _jsxFileName$7,
			lineNumber: 158,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 146,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "D:/eastern-luxe-journeys-main/src/components/admin/HomepageEditor.tsx";
function HomepageEditor() {
	const [overrides] = useSiteOverrides();
	const slides = resolveHeroSlides(overrides);
	const styles = resolveTravelStyles(overrides);
	const popular = resolvePopularDestinations(overrides);
	const quickServices = resolveQuickServices(overrides);
	const trustStrip = resolveTrustStrip(overrides);
	const homeStats = resolveHomeStats(overrides);
	function saveSlides(next) {
		patchOverrides({ heroSlides: next });
	}
	function saveStyles(next) {
		patchOverrides({ travelStyles: next });
	}
	function savePopular(next) {
		patchOverrides({ popularDestinations: next });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-10 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg text-navy",
					children: "Hero CTAs"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 41,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "home.hero",
					fields: ["ctaText", "linkText"]
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 42,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-lg text-navy",
							children: "Hero slider"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 47,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "text-xs text-destructive",
							onClick: async () => {
								if (await confirmDelete("Reset hero slides to defaults?")) patchOverrides({
									heroSlides: void 0,
									heroImages: void 0
								});
							},
							children: "Reset slides"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 48,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border rounded-lg p-4 bg-card space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold text-navy",
									children: ["Slide ", i + 1]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 63,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									className: "text-xs text-destructive",
									onClick: async () => {
										if (await confirmDelete(`Delete slide ${i + 1}?`)) saveSlides(slides.filter((_, idx) => idx !== i));
									},
									children: "Delete"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 64,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 62,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: s.kicker,
								onChange: (e) => saveSlides(slides.map((x, idx) => idx === i ? {
									...x,
									kicker: e.target.value
								} : x)),
								placeholder: "Kicker"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 76,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: s.title,
								onChange: (e) => saveSlides(slides.map((x, idx) => idx === i ? {
									...x,
									title: e.target.value
								} : x)),
								placeholder: "Title"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 77,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								className: "input",
								rows: 2,
								value: s.subtitle,
								onChange: (e) => saveSlides(slides.map((x, idx) => idx === i ? {
									...x,
									subtitle: e.target.value
								} : x)),
								placeholder: "Subtitle"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 78,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3",
								children: [s.image && /* @__PURE__ */ (void 0)("img", {
									src: s.image,
									alt: "",
									className: "w-28 aspect-video object-cover rounded border"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 80,
									columnNumber: 27
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => saveSlides(slides.map((x, idx) => idx === i ? {
									...x,
									image: url
								} : x)) }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 81,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 79,
								columnNumber: 13
							}, this)
						]
					}, i, true, {
						fileName: _jsxFileName$6,
						lineNumber: 61,
						columnNumber: 11
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
						onClick: () => saveSlides([...slides, {
							kicker: "New slide",
							title: "Headline",
							subtitle: "Supporting text",
							image: slides[0]?.image
						}]),
						children: "+ Add slide"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 85,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringListEditor, {
					label: "Quick services bar (5 labels)",
					items: quickServices.map((s) => s.label),
					onChange: (labels) => patchOverrides({ homeQuickServices: labels.map((label) => ({ label })) })
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 91,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.travelStyles",
						fields: [
							"kicker",
							"title",
							"linkText"
						]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Travel style cards"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 100,
						columnNumber: 9
					}, this),
					styles.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border rounded-lg p-4 bg-card space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input font-semibold",
								value: s.title,
								onChange: (e) => saveStyles(styles.map((x, idx) => idx === i ? {
									...x,
									title: e.target.value
								} : x))
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 103,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								className: "input",
								rows: 2,
								value: s.blurb,
								onChange: (e) => saveStyles(styles.map((x, idx) => idx === i ? {
									...x,
									blurb: e.target.value
								} : x))
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 104,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
								label: "Primary image",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-3",
									children: [s.image && /* @__PURE__ */ (void 0)("img", {
										src: s.image,
										alt: "",
										className: "w-24 h-24 object-cover rounded border"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 107,
										columnNumber: 29
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => saveStyles(styles.map((x, idx) => idx === i ? {
										...x,
										image: url
									} : x)) }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 108,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 106,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 105,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
								label: "Secondary image (Instagram grid)",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-3",
									children: [s.image2 && /* @__PURE__ */ (void 0)("img", {
										src: s.image2,
										alt: "",
										className: "w-24 h-24 object-cover rounded border"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 113,
										columnNumber: 30
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => saveStyles(styles.map((x, idx) => idx === i ? {
										...x,
										image2: url
									} : x)) }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 114,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 112,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 111,
								columnNumber: 13
							}, this)
						]
					}, i, true, {
						fileName: _jsxFileName$6,
						lineNumber: 102,
						columnNumber: 11
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 98,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "home.aboutTeaser",
					fields: [
						"kicker",
						"title",
						"body",
						"ctaText"
					]
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 122,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
					label: "About teaser stats",
					children: homeStats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: stat.value,
							onChange: (e) => {
								const next = [...homeStats];
								next[i] = {
									...stat,
									value: e.target.value
								};
								patchOverrides({ homeStats: next });
							},
							placeholder: "Value"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 126,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: stat.label,
							onChange: (e) => {
								const next = [...homeStats];
								next[i] = {
									...stat,
									label: e.target.value
								};
								patchOverrides({ homeStats: next });
							},
							placeholder: "Label"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 131,
							columnNumber: 15
						}, this)]
					}, i, true, {
						fileName: _jsxFileName$6,
						lineNumber: 125,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 123,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 121,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.services",
						fields: ["kicker", "title"]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 142,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.popularDestinations",
						fields: [
							"kicker",
							"title",
							"badgeText",
							"linkText"
						]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 143,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.packages",
						fields: [
							"kicker",
							"title",
							"badgeText",
							"ctaText"
						]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 144,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.testimonials",
						fields: [
							"kicker",
							"title",
							"linkText"
						]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 145,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "home.instagram",
						fields: [
							"kicker",
							"title",
							"body",
							"ctaText"
						]
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 146,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 141,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg text-navy",
					children: "Trust strip"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 150,
					columnNumber: 9
				}, this), trustStrip.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-3 border rounded bg-card grid sm:grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.icon,
							onChange: (e) => {
								const next = [...trustStrip];
								next[i] = {
									...item,
									icon: e.target.value
								};
								patchOverrides({ homeTrustStrip: next });
							},
							placeholder: "Icon/emoji"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 153,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.title,
							onChange: (e) => {
								const next = [...trustStrip];
								next[i] = {
									...item,
									title: e.target.value
								};
								patchOverrides({ homeTrustStrip: next });
							},
							placeholder: "Title"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 158,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.desc,
							onChange: (e) => {
								const next = [...trustStrip];
								next[i] = {
									...item,
									desc: e.target.value
								};
								patchOverrides({ homeTrustStrip: next });
							},
							placeholder: "Description"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 163,
							columnNumber: 13
						}, this)
					]
				}, i, true, {
					fileName: _jsxFileName$6,
					lineNumber: 152,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Popular destinations"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 174,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "px-3 py-1.5 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
						onClick: () => savePopular([...popular, {
							name: "New destination",
							desc: "",
							image: popular[0]?.image || ""
						}]),
						children: "+ Add"
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 175,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 173,
					columnNumber: 9
				}, this), popular.map((d, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border rounded-lg p-4 bg-card space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-sm font-semibold",
								children: ["Card ", i + 1]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 182,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "text-xs text-destructive",
								onClick: async () => {
									if (await confirmDelete(`Delete "${d.name}"?`)) savePopular(popular.filter((_, idx) => idx !== i));
								},
								children: "Delete"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 183,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 181,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: d.name,
							onChange: (e) => savePopular(popular.map((x, idx) => idx === i ? {
								...x,
								name: e.target.value
							} : x))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 185,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 2,
							value: d.desc,
							onChange: (e) => savePopular(popular.map((x, idx) => idx === i ? {
								...x,
								desc: e.target.value
							} : x))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 186,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input text-sm",
							placeholder: "Link slug (optional)",
							value: d.linkSlug || "",
							onChange: (e) => savePopular(popular.map((x, idx) => idx === i ? {
								...x,
								linkSlug: e.target.value
							} : x))
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 187,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-3",
							children: [d.image && /* @__PURE__ */ (void 0)("img", {
								src: d.image,
								alt: "",
								className: "w-24 h-20 object-cover rounded border"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 189,
								columnNumber: 27
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => savePopular(popular.map((x, idx) => idx === i ? {
								...x,
								image: url
							} : x)) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 190,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 188,
							columnNumber: 13
						}, this)
					]
				}, i, true, {
					fileName: _jsxFileName$6,
					lineNumber: 180,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 172,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminInputStyles, {}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 196,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 39,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "D:/eastern-luxe-journeys-main/src/components/admin/PackagesEditor.tsx";
var ACCENT_OPTIONS = [
	{
		label: "Navy",
		value: "from-[var(--navy)] to-[var(--navy-deep)]"
	},
	{
		label: "Emerald",
		value: "from-[var(--emerald-bright)] to-[var(--emerald)]"
	},
	{
		label: "Navy deep",
		value: "from-[var(--navy-deep)] to-[var(--navy)]"
	},
	{
		label: "Emerald + Navy",
		value: "from-[var(--emerald)] to-[var(--navy)]"
	}
];
function Field$1({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm font-semibold text-navy mb-1.5",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 22,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function UploadInput$1({ accept, onUploaded }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			type: "file",
			accept,
			disabled: busy,
			onChange: async (e) => {
				const file = e.target.files?.[0];
				if (!file) return;
				setBusy(true);
				setErr(null);
				try {
					onUploaded(await uploadMedia(file));
				} catch (ex) {
					setErr(ex instanceof Error ? ex.message : "Upload failed");
				} finally {
					setBusy(false);
					e.target.value = "";
				}
			}
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 39,
			columnNumber: 7
		}, this),
		busy && /* @__PURE__ */ (void 0)("span", {
			className: "text-xs text-muted-foreground ml-2",
			children: "Uploading…"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 58,
			columnNumber: 16
		}, this),
		err && /* @__PURE__ */ (void 0)("p", {
			className: "text-xs text-destructive mt-1",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 59,
			columnNumber: 15
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
function PackagesEditor() {
	const [overrides] = useSiteOverrides();
	const list = resolvePackages(overrides);
	function save(next) {
		patchOverrides({ packages: next });
	}
	function update(i, patch) {
		save(list.map((p, idx) => idx === i ? {
			...p,
			...patch
		} : p));
	}
	async function remove(i) {
		if (await confirmDelete(`Delete package "${list[i]?.tier || ""}"?`)) save(list.filter((_, idx) => idx !== i));
	}
	function add() {
		save([...list, {
			tier: "New Package",
			price: "Custom",
			features: ["Feature one"],
			accent: ACCENT_OPTIONS[0].value
		}]);
	}
	async function resetAll() {
		if (await confirmDelete("Reset all packages to defaults?")) patchOverrides({ packages: void 0 });
	}
	const page = overrides.pageSections?.packages;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4 border rounded-lg p-4 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Packages page header"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 105,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
							label: "Kicker",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: page?.kicker ?? "Travel Packages",
								onBlur: (e) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									packages: {
										...page,
										kicker: e.target.value
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 108,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 107,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
							label: "Title",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: page?.title ?? "Four tiers. One promise.",
								onBlur: (e) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									packages: {
										...page,
										title: e.target.value
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 122,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 121,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 106,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
						label: "Hero image",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-4",
							children: [page?.heroImage && /* @__PURE__ */ (void 0)("img", {
								src: page.heroImage,
								alt: "",
								className: "w-32 aspect-video object-cover rounded border"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 139,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$1, {
								accept: "image/*",
								onUploaded: (url) => patchOverrides({ pageSections: {
									...overrides.pageSections,
									packages: {
										...page,
										heroImage: url
									}
								} })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 141,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 137,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 136,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 104,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: add,
					className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
					children: "+ Add package"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 157,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: resetAll,
					className: "px-4 py-2 text-sm rounded-md border",
					children: "Reset to defaults"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 160,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 156,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-5",
				children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border rounded-lg p-4 space-y-3 bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input font-semibold",
								value: p.tier,
								onChange: (e) => update(i, { tier: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 169,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => remove(i),
								className: "text-destructive text-sm shrink-0",
								children: "Delete"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 174,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 168,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid sm:grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
								label: "Subtitle (e.g. Essentials)",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									className: "input",
									value: p.price,
									onChange: (e) => update(i, { price: e.target.value })
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 180,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 179,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
								label: "Accent bar",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									className: "input",
									value: p.accent || ACCENT_OPTIONS[0].value,
									onChange: (e) => update(i, { accent: e.target.value }),
									children: ACCENT_OPTIONS.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value: o.value,
										children: o.label
									}, o.value, false, {
										fileName: _jsxFileName$5,
										lineNumber: 193,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 187,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 186,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 178,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "checkbox",
								checked: !!p.featured,
								onChange: (e) => update(i, { featured: e.target.checked })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 201,
								columnNumber: 15
							}, this), "Signature / featured package"]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 200,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
							label: "Features (one per line)",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								className: "input",
								rows: 4,
								value: p.features.join("\n"),
								onChange: (e) => update(i, { features: e.target.value.split("\n").filter(Boolean) })
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 209,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 208,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$1, {
							label: "Card image (optional)",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-4",
								children: [p.image && /* @__PURE__ */ (void 0)("img", {
									src: p.image,
									alt: "",
									className: "w-24 h-24 object-cover rounded border"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 221,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$1, {
										accept: "image/*",
										onUploaded: (url) => update(i, { image: url })
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 224,
										columnNumber: 19
									}, this), p.image && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										className: "text-xs text-destructive",
										onClick: () => update(i, { image: void 0 }),
										children: "Remove image"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 226,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 223,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 219,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 218,
							columnNumber: 13
						}, this)
					]
				}, `${p.tier}-${i}`, true, {
					fileName: _jsxFileName$5,
					lineNumber: 167,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 165,
				columnNumber: 7
			}, this),
			list.length === 0 && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"No packages. Add one or reset to defaults (",
					packages.length,
					" tiers)."
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 242,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 245,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 103,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "D:/eastern-luxe-journeys-main/src/components/admin/LayoutEditor.tsx";
function LayoutEditor() {
	const [overrides] = useSiteOverrides();
	const brand = resolveBrand(overrides);
	const footer = resolveFooter(overrides);
	const nav = resolveNavItems(overrides);
	const social = resolveSocialLinks(overrides);
	function saveNav(next) {
		patchOverrides({ navItems: next });
	}
	function saveFooterLinks(next) {
		patchOverrides({ footer: {
			...overrides.footer,
			exploreLinks: next
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-10 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Brand & header"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 29,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Brand name",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: brand.name,
							onBlur: (e) => patchOverrides({ brandName: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 31,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 30,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Brand subtitle (under logo)",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: brand.subtitle,
							onBlur: (e) => patchOverrides({ brandSubtitle: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 38,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Logo alt text",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: brand.logoAlt,
							onBlur: (e) => patchOverrides({ logoAlt: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 45,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 44,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Header CTA button",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: brand.headerCta,
							onBlur: (e) => patchOverrides({ headerCta: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 52,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 51,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Navigation links"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 61,
						columnNumber: 9
					}, this),
					nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-2 gap-2 p-3 border rounded bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.label,
							onChange: (e) => saveNav(nav.map((x, idx) => idx === i ? {
								...x,
								label: e.target.value
							} : x)),
							placeholder: "Label"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 64,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input flex-1",
								value: item.to,
								onChange: (e) => saveNav(nav.map((x, idx) => idx === i ? {
									...x,
									to: e.target.value
								} : x)),
								placeholder: "/path"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 73,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "text-xs text-destructive px-2",
								onClick: () => saveNav(nav.filter((_, idx) => idx !== i)),
								children: "✕"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 81,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 72,
							columnNumber: 13
						}, this)]
					}, i, true, {
						fileName: _jsxFileName$4,
						lineNumber: 63,
						columnNumber: 11
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "text-sm text-emerald-brand font-semibold",
						onClick: () => saveNav([...nav, {
							to: "/",
							label: "New link"
						}]),
						children: "+ Add nav link"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 91,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Footer"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 101,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Footer tagline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 3,
							defaultValue: footer.tagline,
							onBlur: (e) => patchOverrides({ footer: {
								...overrides.footer,
								tagline: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 103,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 102,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Copyright line",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: footer.copyright,
							onBlur: (e) => patchOverrides({ footer: {
								...overrides.footer,
								copyright: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 111,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 110,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Developer credit",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: footer.credit,
							onBlur: (e) => patchOverrides({ footer: {
								...overrides.footer,
								credit: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 118,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 117,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringListEditor, {
						label: "Footer explore links (label only — paths edited below)",
						items: footer.exploreLinks?.map((l) => l.label) || [],
						onChange: (labels) => {
							const links = footer.exploreLinks || [];
							saveFooterLinks(labels.map((label, i) => ({
								label,
								to: links[i]?.to || "/"
							})));
						}
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 124,
						columnNumber: 9
					}, this),
					(footer.exploreLinks || []).map((link, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: `Link path: ${link.label}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: link.to,
							onBlur: (e) => {
								const next = [...footer.exploreLinks || []];
								next[i] = {
									...next[i],
									to: e.target.value
								};
								saveFooterLinks(next);
							}
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 136,
							columnNumber: 13
						}, this)
					}, i, false, {
						fileName: _jsxFileName$4,
						lineNumber: 135,
						columnNumber: 11
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 100,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Social links"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 150,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Facebook",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: social.facebook,
							onBlur: (e) => patchOverrides({ socialLinks: {
								...overrides.socialLinks,
								facebook: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 152,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 151,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Instagram",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: social.instagram,
							onBlur: (e) => patchOverrides({ socialLinks: {
								...overrides.socialLinks,
								instagram: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 161,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 160,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "TikTok",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: social.tiktok,
							onBlur: (e) => patchOverrides({ socialLinks: {
								...overrides.socialLinks,
								tiktok: e.target.value
							} })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 170,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 169,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "WhatsApp pre-filled message",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: overrides.whatsappMessage || "",
							placeholder: "Hi Best Eastern Travel, I'd like to plan a trip.",
							onBlur: (e) => patchOverrides({ whatsappMessage: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 179,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 178,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminInputStyles, {}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 188,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "D:/eastern-luxe-journeys-main/src/components/admin/AboutPageEditor.tsx";
function AboutPageEditor() {
	const [overrides] = useSiteOverrides();
	const md = resolveAboutMd(overrides);
	const coreValues = resolveCoreValues(overrides);
	const processSteps = resolveProcessSteps(overrides);
	const awards = resolveAwards(overrides);
	const clients = resolveValuedClients(overrides);
	const whyChoose = resolveWhyChoose(overrides);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-10 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg text-navy",
					children: "Hero banner"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 26,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about",
					fields: [
						"kicker",
						"title",
						"subtitle",
						"heroImage"
					]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 27,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "MD welcome message"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 31,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "about.welcome",
						fields: ["kicker", "title"]
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Welcome message body",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 8,
							defaultValue: overrides.aboutText || "",
							placeholder: "Leave blank to use the default company welcome message.",
							onBlur: (e) => patchOverrides({ aboutText: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 34,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 33,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
							label: "MD name",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: md.name,
								onBlur: (e) => patchOverrides({ aboutMdName: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 44,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 43,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
							label: "MD title",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								defaultValue: md.title,
								onBlur: (e) => patchOverrides({ aboutMdTitle: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 51,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 50,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 42,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "History"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 61,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
						sectionKey: "about.history",
						fields: ["kicker", "title"]
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 62,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "History body",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 8,
							defaultValue: overrides.history || companyHistory,
							onBlur: (e) => patchOverrides({ history: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 64,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 63,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Vision & mission"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 74,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Vision",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 4,
							defaultValue: overrides.vision || "To be the travel service provider of choice, recognized for our personalized service, strong stakeholder partnerships, and commitment to customer success. We aspire to empower our people, exceed client expectations, and achieve sustainable growth while making travel simple, seamless, and rewarding.",
							onBlur: (e) => patchOverrides({ vision: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 76,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Mission",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 4,
							defaultValue: overrides.mission || "To be a dynamic force in the travel industry by delivering flexible, innovative, and customer-focused travel solutions. We are committed to creating value for our customers, business partners, employees, investors, and the communities we serve through excellence, integrity, and sustainable growth.",
							onBlur: (e) => patchOverrides({ mission: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 79,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 78,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.coreValues",
					fields: ["kicker", "title"]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 84,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListEditor, {
					label: "Core values",
					items: coreValues,
					onChange: (next) => patchOverrides({ coreValues: next }),
					renderItem: (item, i, update) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.title,
							onChange: (e) => update(i, {
								...item,
								title: e.target.value
							}),
							placeholder: "Title"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 91,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 2,
							value: item.desc,
							onChange: (e) => update(i, {
								...item,
								desc: e.target.value
							}),
							placeholder: "Description"
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 92,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 90,
						columnNumber: 13
					}, this),
					newItem: () => ({
						title: "New value",
						desc: ""
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 85,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 83,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.process",
					fields: ["kicker", "title"]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 100,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListEditor, {
					label: "Process steps",
					items: processSteps,
					onChange: (next) => patchOverrides({ processSteps: next }),
					renderItem: (item, i, update) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: item.step,
								onChange: (e) => update(i, {
									...item,
									step: e.target.value
								}),
								placeholder: "01"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 107,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input sm:col-span-2",
								value: item.title,
								onChange: (e) => update(i, {
									...item,
									title: e.target.value
								}),
								placeholder: "Title"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 108,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								className: "input sm:col-span-3",
								rows: 2,
								value: item.desc,
								onChange: (e) => update(i, {
									...item,
									desc: e.target.value
								}),
								placeholder: "Description"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 109,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 106,
						columnNumber: 13
					}, this),
					newItem: () => ({
						step: "01",
						title: "New step",
						desc: ""
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 101,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.whyChoose",
					fields: ["kicker", "title"]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 117,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListEditor, {
					label: "Why choose us",
					items: whyChoose,
					onChange: (next) => patchOverrides({ whyChoose: next }),
					renderItem: (item, i, update) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: item.title,
							onChange: (e) => update(i, {
								...item,
								title: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 124,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							className: "input",
							rows: 2,
							value: item.desc,
							onChange: (e) => update(i, {
								...item,
								desc: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName$3,
							lineNumber: 125,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 123,
						columnNumber: 13
					}, this),
					newItem: () => ({
						title: "New reason",
						desc: ""
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 118,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 116,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.accreditation",
					fields: [
						"kicker",
						"title",
						"body",
						"badgeLabel"
					]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 133,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 132,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.awards",
					fields: [
						"kicker",
						"title",
						"subtitle"
					]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 137,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListEditor, {
					label: "Awards",
					items: awards,
					onChange: (next) => patchOverrides({ awards: next }),
					renderItem: (item, i, update) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid sm:grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: item.year,
								onChange: (e) => update(i, {
									...item,
									year: e.target.value
								}),
								placeholder: "Year"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 144,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: item.airline,
								onChange: (e) => update(i, {
									...item,
									airline: e.target.value
								}),
								placeholder: "Airline"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 145,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: "input",
								value: item.title,
								onChange: (e) => update(i, {
									...item,
									title: e.target.value
								}),
								placeholder: "Award title"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 146,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$3,
						lineNumber: 143,
						columnNumber: 13
					}, this),
					newItem: () => ({
						year: "2026",
						airline: "Airline",
						title: "Award title"
					})
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 138,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 136,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border-t pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: "about.clients",
					fields: ["kicker", "title"]
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 154,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StringListEditor, {
					label: "Valued client types",
					items: clients,
					onChange: (next) => patchOverrides({ valuedClients: next }),
					placeholder: "New client type"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 155,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 153,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminInputStyles, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 163,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
function ListEditor({ label, items, onChange, renderItem, newItem }) {
	function update(i, item) {
		onChange(items.map((x, idx) => idx === i ? item : x));
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
				className: "font-semibold text-navy",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 187,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "text-xs text-emerald-brand font-semibold",
				onClick: () => onChange([...items, newItem()]),
				children: "+ Add"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 188,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 186,
			columnNumber: 7
		}, this), items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "p-3 border rounded bg-card space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					className: "text-xs text-destructive",
					onClick: () => onChange(items.filter((_, idx) => idx !== i)),
					children: "Delete"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 195,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 194,
				columnNumber: 11
			}, this), renderItem(item, i, update)]
		}, i, true, {
			fileName: _jsxFileName$3,
			lineNumber: 193,
			columnNumber: 9
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 185,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "D:/eastern-luxe-journeys-main/src/components/admin/PagesEditor.tsx";
var PAGE_SECTIONS = [
	{
		key: "services",
		label: "Services page",
		fields: [
			"kicker",
			"title",
			"heroImage",
			"ctaText"
		]
	},
	{
		key: "contact",
		label: "Contact page hero",
		fields: [
			"kicker",
			"title",
			"heroImage",
			"secondaryTitle",
			"hours"
		]
	},
	{
		key: "contact.form",
		label: "Contact form",
		fields: [
			"kicker",
			"title",
			"subtitle",
			"successTitle",
			"successBody",
			"disclaimer"
		]
	},
	{
		key: "testimonials",
		label: "Testimonials page",
		fields: [
			"kicker",
			"title",
			"heroImage"
		]
	},
	{
		key: "blog",
		label: "Blog page",
		fields: [
			"kicker",
			"title",
			"heroImage",
			"secondaryTitle"
		]
	},
	{
		key: "book",
		label: "Book page hero",
		fields: [
			"kicker",
			"title",
			"subtitle",
			"heroImage",
			"body",
			"successTitle",
			"successBody"
		]
	},
	{
		key: "book.step1",
		label: "Book — step 1",
		fields: ["title", "subtitle"]
	},
	{
		key: "book.step2",
		label: "Book — step 2",
		fields: ["title", "subtitle"]
	},
	{
		key: "book.step3",
		label: "Book — step 3",
		fields: ["title", "subtitle"]
	}
];
function PagesEditor() {
	const [overrides] = useSiteOverrides();
	const bookServices = resolveBookServices(overrides);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-10 max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Edit hero banners and key copy for individual pages. Package and destination page heroes are under their own tabs."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 24,
				columnNumber: 7
			}, this),
			PAGE_SECTIONS.map(({ key, label, fields }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border rounded-lg p-4 bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-display text-lg text-navy",
					children: label
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 30,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageSectionFields, {
					sectionKey: key,
					fields: [...fields]
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 31,
					columnNumber: 11
				}, this)]
			}, key, true, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
				columnNumber: 9
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border rounded-lg p-4 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Contact extras"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 36,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Secondary phone",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: overrides.phone2 || "",
							onBlur: (e) => patchOverrides({ phone2: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 38,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
						label: "Google Maps embed URL",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							defaultValue: overrides.mapEmbedUrl || "",
							placeholder: "https://www.google.com/maps?q=…&output=embed",
							onBlur: (e) => patchOverrides({ mapEmbedUrl: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 45,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 44,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-4 border rounded-lg p-4 bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-lg text-navy",
						children: "Book page — service cards"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "text-xs text-emerald-brand font-semibold",
						onClick: () => patchOverrides({ bookServices: [...bookServices, {
							key: `svc-${Date.now()}`,
							label: "New service",
							desc: "",
							tag: "",
							image: bookServices[0]?.image
						}] }),
						children: "+ Add service"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 57,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 55,
					columnNumber: 9
				}, this), bookServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "p-3 border rounded space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-sm font-semibold",
								children: s.label
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 75,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "text-xs text-destructive",
								onClick: () => patchOverrides({ bookServices: bookServices.filter((_, idx) => idx !== i) }),
								children: "Delete"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 76,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 74,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: s.label,
							onChange: (e) => {
								const next = [...bookServices];
								next[i] = {
									...s,
									label: e.target.value
								};
								patchOverrides({ bookServices: next });
							}
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 84,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: s.desc,
							onChange: (e) => {
								const next = [...bookServices];
								next[i] = {
									...s,
									desc: e.target.value
								};
								patchOverrides({ bookServices: next });
							},
							placeholder: "Description"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 93,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: s.tag,
							onChange: (e) => {
								const next = [...bookServices];
								next[i] = {
									...s,
									tag: e.target.value
								};
								patchOverrides({ bookServices: next });
							},
							placeholder: "Tag"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 103,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-3",
							children: [s.image && /* @__PURE__ */ (void 0)("img", {
								src: s.image,
								alt: "",
								className: "w-24 aspect-video object-cover rounded border"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 114,
								columnNumber: 27
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => {
								const next = [...bookServices];
								next[i] = {
									...s,
									image: url
								};
								patchOverrides({ bookServices: next });
							} }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 115,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 113,
							columnNumber: 13
						}, this)
					]
				}, s.key, true, {
					fileName: _jsxFileName$2,
					lineNumber: 73,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminInputStyles, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 127,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "D:/eastern-luxe-journeys-main/src/components/admin/NewsletterEditor.tsx";
function NewsletterEditor() {
	const [overrides] = useSiteOverrides();
	const nl = resolveNewsletter(overrides);
	const benefits = nl.benefits || [];
	function save(patch) {
		patchOverrides({ newsletter: {
			...overrides.newsletter,
			...nl,
			...patch
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "The newsletter block appears at the bottom of every public page."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Kicker",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.kicker,
					onBlur: (e) => save({ kicker: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Title",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.title,
					onBlur: (e) => save({ title: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 23,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Body",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					className: "input",
					rows: 3,
					defaultValue: nl.body,
					onBlur: (e) => save({ body: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Email placeholder",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.placeholder,
					onBlur: (e) => save({ placeholder: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Button text",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.buttonText,
					onBlur: (e) => save({ buttonText: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 32,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Success message",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.successMessage,
					onBlur: (e) => save({ successMessage: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 35,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Privacy text",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					className: "input",
					defaultValue: nl.privacyText,
					onBlur: (e) => save({ privacyText: e.target.value })
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field$2, {
				label: "Background image",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-start gap-3",
					children: [nl.backgroundImage && /* @__PURE__ */ (void 0)("img", {
						src: nl.backgroundImage,
						alt: "",
						className: "w-32 aspect-video object-cover rounded border"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput$2, { onUploaded: (url) => save({ backgroundImage: url }) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 41,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3 border-t pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
						className: "font-semibold text-navy",
						children: "Benefits (3 items)"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 51,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "text-xs text-emerald-brand font-semibold",
						onClick: () => save({ benefits: [...benefits, {
							title: "New benefit",
							sub: ""
						}] }),
						children: "+ Add"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 52,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 50,
					columnNumber: 9
				}, this), benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid sm:grid-cols-2 gap-2 p-3 border rounded bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						className: "input",
						value: b.title,
						onChange: (e) => {
							const next = [...benefits];
							next[i] = {
								...b,
								title: e.target.value
							};
							save({ benefits: next });
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 62,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input flex-1",
							value: b.sub,
							onChange: (e) => {
								const next = [...benefits];
								next[i] = {
									...b,
									sub: e.target.value
								};
								save({ benefits: next });
							}
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 72,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "text-xs text-destructive px-2",
							onClick: () => save({ benefits: benefits.filter((_, idx) => idx !== i) }),
							children: "✕"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 81,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 71,
						columnNumber: 13
					}, this)]
				}, i, true, {
					fileName: _jsxFileName$1,
					lineNumber: 61,
					columnNumber: 11
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminInputStyles, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 93,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "D:/eastern-luxe-journeys-main/src/routes/admin.tsx?tsr-split=component";
function Admin() {
	const navigate = useNavigate();
	const { loading, isAdmin, email } = useIsAdmin();
	const [overrides] = useSiteOverrides();
	const [tab, setTab] = (0, import_react.useState)("general");
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[60vh] grid place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-muted-foreground",
			children: "Loading…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 66
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 12
	}, this);
	if (!email) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[60vh] grid place-items-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-3xl text-navy",
					children: "Admin sign-in required"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground mt-3",
					children: "Please sign in to manage your website."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/admin-login",
					className: "inline-block mt-6 px-5 py-3 rounded-md bg-gradient-gold text-navy font-semibold",
					children: "Sign in"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 12
	}, this);
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-[60vh] grid place-items-center px-5",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-3xl text-navy",
					children: "Not authorized"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground mt-3",
					children: [
						"You're signed in as ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: email }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 73
						}, this),
						" but don't have the admin role yet. Ask a site administrator to grant it to your account."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: async () => {
						await supabase.auth.signOut();
						navigate({ to: "/admin-login" });
					},
					className: "mt-6 px-5 py-2 rounded-md border",
					children: "Sign out"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-gradient-to-b from-navy/[0.03] via-background to-background",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteGuardHost, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-6xl mx-auto px-5 lg:px-10 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl border border-gold/20 bg-gradient-to-r from-navy to-navy/90 text-white p-6 lg:p-8 shadow-xl mb-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[11px] tracking-[0.35em] uppercase text-gold",
								children: "Admin Console"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "font-display text-3xl lg:text-4xl mt-1",
								children: "Manage your website"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-white/60 mt-2",
								children: ["Signed in as ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-gold",
									children: email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 70
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: async () => {
									if (await confirmDelete("Reset ALL site content overrides back to defaults?")) await patchOverrides({
										logoUrl: void 0,
										tagline: void 0,
										aboutText: void 0,
										vision: void 0,
										mission: void 0,
										history: void 0,
										audioUrl: void 0,
										audioAutoplay: void 0,
										videoUrl: void 0,
										heroImages: void 0,
										heroSlides: void 0,
										travelStyles: void 0,
										popularDestinations: void 0,
										packages: void 0,
										destinationRegions: void 0,
										destinationContent: void 0,
										destinationImages: void 0,
										brandName: void 0,
										brandSubtitle: void 0,
										logoAlt: void 0,
										headerCta: void 0,
										whatsappMessage: void 0,
										aboutMdName: void 0,
										aboutMdTitle: void 0,
										phone2: void 0,
										mapEmbedUrl: void 0,
										socialLinks: void 0,
										navItems: void 0,
										footer: void 0,
										homeQuickServices: void 0,
										homeTrustStrip: void 0,
										homeStats: void 0,
										coreValues: void 0,
										processSteps: void 0,
										awards: void 0,
										valuedClients: void 0,
										whyChoose: void 0,
										newsletter: void 0,
										bookServices: void 0,
										pageSections: void 0,
										tagline: void 0,
										services: void 0,
										testimonials: void 0,
										phone: void 0,
										email: void 0,
										whatsapp: void 0,
										address: void 0
									});
								},
								className: "px-4 py-2 text-sm rounded-md border border-white/25 text-white hover:bg-white/10",
								children: "Reset all"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: async () => {
									await supabase.auth.signOut();
									navigate({ to: "/" });
								},
								className: "px-4 py-2 text-sm rounded-md bg-gold text-navy font-semibold hover:brightness-105",
								children: "Sign out"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DatabaseSetupBanner, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 129,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-1 border-b border-navy/10 mb-8 overflow-x-auto",
					children: [
						"general",
						"media",
						"layout",
						"homepage",
						"packages",
						"about",
						"services",
						"destinations",
						"pages",
						"newsletter",
						"posts",
						"featured",
						"testimonials",
						"newsletters",
						"bookings",
						"messages"
					].map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setTab(t),
						className: `px-4 py-2.5 text-sm border-b-2 -mb-px capitalize whitespace-nowrap transition ${tab === t ? "border-gold text-navy font-semibold" : "border-transparent text-muted-foreground hover:text-navy"}`,
						children: t
					}, t, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 26
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 9
				}, this),
				tab === "general" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-5 max-w-2xl",
					children: [
						/* @__PURE__ */ (void 0)(Field, {
							label: "Phone",
							children: /* @__PURE__ */ (void 0)("input", {
								className: "input",
								defaultValue: overrides.phone || "",
								onBlur: (e) => patchOverrides({ phone: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 32
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)(Field, {
							label: "WhatsApp (digits only, with country code)",
							children: /* @__PURE__ */ (void 0)("input", {
								className: "input",
								defaultValue: overrides.whatsapp || "",
								onBlur: (e) => patchOverrides({ whatsapp: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 68
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (void 0)("input", {
								className: "input",
								defaultValue: overrides.email || "",
								onBlur: (e) => patchOverrides({ email: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 32
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)(Field, {
							label: "Office address",
							children: /* @__PURE__ */ (void 0)("textarea", {
								className: "input",
								rows: 3,
								defaultValue: overrides.address || "",
								onBlur: (e) => patchOverrides({ address: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 41
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)(Field, {
							label: "Secondary phone",
							children: /* @__PURE__ */ (void 0)("input", {
								className: "input",
								defaultValue: overrides.phone2 || "",
								onBlur: (e) => patchOverrides({ phone2: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 42
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)(Field, {
							label: "Google Maps embed URL",
							children: /* @__PURE__ */ (void 0)("input", {
								className: "input",
								defaultValue: overrides.mapEmbedUrl || "",
								onBlur: (e) => patchOverrides({ mapEmbedUrl: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 48
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 29
				}, this),
				tab === "layout" && /* @__PURE__ */ (void 0)(LayoutEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 28
				}, this),
				tab === "about" && /* @__PURE__ */ (void 0)(AboutPageEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 27
				}, this),
				tab === "services" && /* @__PURE__ */ (void 0)(ServicesEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 30
				}, this),
				tab === "packages" && /* @__PURE__ */ (void 0)(PackagesEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 30
				}, this),
				tab === "destinations" && /* @__PURE__ */ (void 0)(DestinationsEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 34
				}, this),
				tab === "media" && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-8 max-w-2xl",
					children: [
						/* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("h3", {
								className: "font-display text-xl text-navy mb-2",
								children: "Logo"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 13
							}, this),
							overrides.logoUrl && /* @__PURE__ */ (void 0)("img", {
								src: overrides.logoUrl,
								alt: "logo",
								className: "h-20 mb-3 border bg-white p-1"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 168,
								columnNumber: 35
							}, this),
							/* @__PURE__ */ (void 0)(UploadInput, {
								accept: "image/*",
								onUploaded: (url) => patchOverrides({ logoUrl: url })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 169,
								columnNumber: 13
							}, this),
							overrides.logoUrl && /* @__PURE__ */ (void 0)("button", {
								onClick: () => patchOverrides({ logoUrl: void 0 }),
								className: "ml-3 text-sm text-destructive",
								children: "Remove"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 35
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("h3", {
								className: "font-display text-xl text-navy mb-2",
								children: "Background music (plays sitewide)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 178,
								columnNumber: 13
							}, this),
							overrides.audioUrl && /* @__PURE__ */ (void 0)("audio", {
								src: overrides.audioUrl,
								controls: true,
								className: "mb-3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 179,
								columnNumber: 36
							}, this),
							/* @__PURE__ */ (void 0)(UploadInput, {
								accept: "audio/*",
								onUploaded: (url) => patchOverrides({ audioUrl: url })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("label", {
								className: "flex items-center gap-2 mt-3 text-sm",
								children: [/* @__PURE__ */ (void 0)("input", {
									type: "checkbox",
									checked: !!overrides.audioAutoplay,
									onChange: (e) => patchOverrides({ audioAutoplay: e.target.checked })
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 15
								}, this), "Try to autoplay on page load"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 13
							}, this),
							overrides.audioUrl && /* @__PURE__ */ (void 0)("button", {
								onClick: () => patchOverrides({ audioUrl: void 0 }),
								className: "text-sm text-destructive",
								children: "Remove audio"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 36
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("h3", {
								className: "font-display text-xl text-navy mb-2",
								children: "Feature video (URL or upload)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								className: "input mb-2",
								placeholder: "https://…mp4 or YouTube URL",
								defaultValue: overrides.videoUrl || "",
								onBlur: (e) => patchOverrides({ videoUrl: e.target.value })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 196,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(UploadInput, {
								accept: "video/*",
								onUploaded: (url) => patchOverrides({ videoUrl: url })
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 13
							}, this),
							overrides.videoUrl && /* @__PURE__ */ (void 0)("video", {
								src: overrides.videoUrl,
								controls: true,
								className: "mt-3 w-full rounded-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 36
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 27
				}, this),
				tab === "pages" && /* @__PURE__ */ (void 0)(PagesEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 27
				}, this),
				tab === "newsletter" && /* @__PURE__ */ (void 0)(NewsletterEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 207,
					columnNumber: 32
				}, this),
				tab === "homepage" && /* @__PURE__ */ (void 0)(HomepageEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 30
				}, this),
				tab === "posts" && /* @__PURE__ */ (void 0)(PostsEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 211,
					columnNumber: 27
				}, this),
				tab === "featured" && /* @__PURE__ */ (void 0)(FeaturedEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 30
				}, this),
				tab === "testimonials" && /* @__PURE__ */ (void 0)(TestimonialsEditor, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 34
				}, this),
				tab === "newsletters" && /* @__PURE__ */ (void 0)(PostsEditor, {
					defaultCategory: "Newsletter",
					heading: "Newsletters, news & promotions",
					description: "Publish newsletter issues, promotions, and news announcements. They appear on the public /blog page."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 215,
					columnNumber: 33
				}, this),
				tab === "bookings" && /* @__PURE__ */ (void 0)(BookingsList, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 217,
					columnNumber: 30
				}, this),
				tab === "messages" && /* @__PURE__ */ (void 0)(MessagesList, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 218,
					columnNumber: 30
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.7rem .9rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 221,
					columnNumber: 7
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 10
	}, this);
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block text-sm font-semibold text-navy mb-1.5",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 233,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 232,
		columnNumber: 10
	}, this);
}
function UploadInput({ accept, multiple, onUploaded }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			type: "file",
			accept,
			multiple,
			disabled: busy,
			onChange: async (e) => {
				const files = Array.from(e.target.files || []);
				if (!files.length) return;
				setBusy(true);
				setErr(null);
				try {
					for (const f of files) onUploaded(await uploadMedia(f));
				} catch (ex) {
					setErr(ex.message || "Upload failed");
				} finally {
					setBusy(false);
					e.target.value = "";
				}
			}
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 249,
			columnNumber: 7
		}, this),
		busy && /* @__PURE__ */ (void 0)("span", {
			className: "text-xs text-muted-foreground ml-2",
			children: "Uploading…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 266,
			columnNumber: 16
		}, this),
		err && /* @__PURE__ */ (void 0)("p", {
			className: "text-xs text-destructive mt-1",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 267,
			columnNumber: 15
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 248,
		columnNumber: 10
	}, this);
}
function ServicesEditor() {
	const [overrides] = useSiteOverrides();
	const list = overrides.services || services.map((s) => ({
		title: s.title,
		desc: s.desc,
		items: s.items
	}));
	function update(i, patch) {
		patchOverrides({ services: list.map((s, idx) => idx === i ? {
			...s,
			...patch
		} : s) });
	}
	async function remove(i) {
		if (await confirmDelete(`Delete service "${list[i]?.title || ""}"?`)) patchOverrides({ services: list.filter((_, idx) => idx !== i) });
	}
	function add() {
		patchOverrides({ services: [...list, {
			title: "New service",
			desc: "",
			items: []
		}] });
	}
	async function resetAll() {
		if (await confirmDelete("Reset services to original company profile?")) patchOverrides({ services: void 0 });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: add,
					className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
					children: "+ Add service"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 309,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: resetAll,
					className: "px-4 py-2 text-sm rounded-md border",
					children: "Reset to defaults"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 310,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 308,
				columnNumber: 7
			}, this),
			list.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border rounded-lg p-4 space-y-3 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between items-start",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input font-semibold",
							value: s.title,
							onChange: (e) => update(i, { title: e.target.value })
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 314,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => remove(i),
							className: "text-destructive text-sm ml-3",
							children: "Delete"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 317,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 2,
						value: s.desc,
						onChange: (e) => update(i, { desc: e.target.value })
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 319,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 4,
						placeholder: "Bullet points (one per line)",
						value: (s.items || []).join("\n"),
						onChange: (e) => update(i, { items: e.target.value.split("\n").filter(Boolean) })
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 322,
						columnNumber: 11
					}, this)
				]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 312,
				columnNumber: 27
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 326,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 307,
		columnNumber: 10
	}, this);
}
function PostsEditor({ defaultCategory, heading, description } = {}) {
	const [overrides] = useSiteOverrides();
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(defaultCategory || BLOG_CATEGORIES[0]);
	const [image, setImage] = (0, import_react.useState)();
	const [video, setVideo] = (0, import_react.useState)();
	const [audio, setAudio] = (0, import_react.useState)();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const allPosts = overrides.posts || [];
	const posts = defaultCategory ? allPosts.filter((p) => p.category === defaultCategory || p.category === "News" || p.category === "Promotions" || p.category === "Newsletter") : allPosts;
	async function publish() {
		if (!title.trim()) return;
		setBusy(true);
		setErr(null);
		try {
			await addPost({
				title,
				body,
				category,
				image,
				video,
				audio
			});
			setTitle("");
			setBody("");
			setImage(void 0);
			setVideo(void 0);
			setAudio(void 0);
			setCategory(defaultCategory || BLOG_CATEGORIES[0]);
		} catch (e) {
			setErr(e.message || "Failed to publish");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [heading && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
			className: "font-display text-2xl text-navy",
			children: heading
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 377,
			columnNumber: 11
		}, this), description && /* @__PURE__ */ (void 0)("p", {
			className: "text-sm text-muted-foreground mt-1",
			children: description
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 378,
			columnNumber: 27
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 376,
			columnNumber: 19
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid lg:grid-cols-2 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-xl text-navy",
						children: defaultCategory ? "New newsletter / announcement" : "New post"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 382,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						className: "input",
						placeholder: defaultCategory ? "Subject / headline" : "Post title",
						value: title,
						onChange: (e) => setTitle(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 383,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						className: "input",
						value: category,
						onChange: (e) => setCategory(e.target.value),
						children: (defaultCategory ? [
							"Newsletter",
							"News",
							"Promotions"
						] : BLOG_CATEGORIES).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: c,
							children: c
						}, c, false, {
							fileName: _jsxFileName,
							lineNumber: 385,
							columnNumber: 105
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 384,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 8,
						placeholder: defaultCategory ? "Write your newsletter, news article, or promotion here…" : "Body",
						value: body,
						onChange: (e) => setBody(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 387,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-sm font-semibold text-navy mt-2",
						children: "Cover image"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 389,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
						accept: "image/*",
						onUploaded: (url) => setImage(url)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 390,
						columnNumber: 9
					}, this),
					image && /* @__PURE__ */ (void 0)("img", {
						src: image,
						className: "h-32 rounded-md object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 391,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-sm font-semibold text-navy mt-2",
						children: "Video (optional)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 393,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
						accept: "video/*",
						onUploaded: (url) => setVideo(url)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 394,
						columnNumber: 9
					}, this),
					video && /* @__PURE__ */ (void 0)("video", {
						src: video,
						controls: true,
						className: "w-full rounded-md"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 395,
						columnNumber: 19
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-sm font-semibold text-navy mt-2",
						children: "Background song (optional)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 397,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
						accept: "audio/*",
						onUploaded: (url) => setAudio(url)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 398,
						columnNumber: 9
					}, this),
					audio && /* @__PURE__ */ (void 0)("audio", {
						src: audio,
						controls: true,
						className: "w-full"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 399,
						columnNumber: 19
					}, this),
					err && /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-destructive",
						children: err
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 401,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: publish,
						disabled: busy,
						className: "px-5 py-2.5 rounded-md bg-gradient-gold text-navy font-semibold mt-3 disabled:opacity-60",
						children: busy ? "Publishing…" : defaultCategory ? "Publish newsletter" : "Publish post"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 402,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.7rem .9rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 405,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 381,
				columnNumber: 7
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-xl text-navy",
						children: [
							"Published (",
							posts.length,
							")"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 409,
						columnNumber: 9
					}, this),
					posts.length === 0 && /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground",
						children: "Nothing published yet."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 410,
						columnNumber: 32
					}, this),
					posts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostRow, { post: p }, p.id, false, {
						fileName: _jsxFileName,
						lineNumber: 411,
						columnNumber: 25
					}, this))
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 408,
				columnNumber: 7
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 380,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 375,
		columnNumber: 10
	}, this);
}
/** Normalize bookings.payload whether jsonb object or JSON string. */
function bookingPayload(b) {
	let p = b?.payload;
	if (typeof p === "string") try {
		p = JSON.parse(p);
	} catch {
		return {};
	}
	return p && typeof p === "object" ? p : {};
}
function isContactBooking(b) {
	if (bookingPayload(b).type === "contact") return true;
	const dest = String(b?.destination || "");
	return /contact\s*inquiry/i.test(dest);
}
function bookingLikeFromRow(b) {
	const p = bookingPayload(b);
	const notesFromPayload = typeof p.notes === "string" && !p.notes.includes("\n") ? p.notes : "";
	return {
		name: b.name || p.name,
		email: b.email || p.email,
		phone: b.phone || p.phone,
		preferredContact: p.preferredContact,
		services: p.services,
		from: p.from,
		destination: b.destination || p.destination,
		departure: b.travel_date || p.departure,
		return: p.return,
		adults: p.adults,
		children: p.children,
		cabin: p.cabin,
		hotel: p.hotel,
		vehicle: p.vehicle,
		driver: p.driver,
		packageTier: p.packageTier,
		notes: notesFromPayload || (typeof p.notes === "string" ? p.notes : "")
	};
}
function bookingServicesLabel(b) {
	const services = bookingPayload(b).services;
	if (!Array.isArray(services) || !services.length) return null;
	return services.join(", ");
}
function BookingDocument({ booking }) {
	const data = bookingLikeFromRow(booking);
	const p = bookingPayload(booking);
	const storedNotes = String(booking.notes || p.summary || "").trim();
	const lines = !(storedNotes.startsWith("{") || storedNotes.startsWith("[")) && storedNotes && !storedNotes.includes("\"type\":") ? storedNotes : bookingCleanLines(data);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-4 rounded-md border bg-background p-5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "font-display text-lg text-navy border-b border-border pb-2 mb-4",
				children: "Booking request"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 477,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-1.5 text-sm leading-7 text-foreground",
				children: lines.split("\n").filter(Boolean).map((line, i) => {
					const idx = line.indexOf(": ");
					if (idx === -1) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-semibold text-navy",
						children: line
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 484,
						columnNumber: 18
					}, this);
					const label = line.slice(0, idx);
					const value = line.slice(idx + 2);
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-navy",
							children: [label, ":"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 489,
							columnNumber: 15
						}, this),
						" ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: value }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 490,
							columnNumber: 15
						}, this)
					] }, i, true, {
						fileName: _jsxFileName,
						lineNumber: 488,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 480,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 pt-3 border-t text-xs text-muted-foreground",
				children: ["Received ", new Date(booking.created_at).toLocaleString()]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 494,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 476,
		columnNumber: 10
	}, this);
}
function BookingsList() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		(async () => {
			await ensureCompanyAdminRole();
			const { data, error } = await supabase.from("bookings").select("*").order("created_at", { ascending: false });
			if (error) setErr(error.message);
			else setRows((data || []).filter((b) => !isContactBooking(b)));
			setLoading(false);
		})();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-muted-foreground",
		children: "Loading bookings…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 516,
		columnNumber: 23
	}, this);
	if (err) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-destructive",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 519,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Run ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
					className: "text-xs",
					children: "FIX_ADMIN_AND_FORMS.sql"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 521,
					columnNumber: 15
				}, this),
				" in Supabase SQL Editor, then refresh."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 520,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 518,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-xl text-navy",
				children: [
					"Bookings (",
					rows.length,
					")"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 526,
				columnNumber: 7
			}, this),
			rows.length === 0 && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-muted-foreground",
				children: "No bookings yet. After someone submits Book or Packages, they appear here. If forms succeed but this stays empty, run FIX_ADMIN_AND_FORMS.sql in Supabase."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 527,
				columnNumber: 29
			}, this),
			rows.map((b) => {
				const services = bookingServicesLabel(b);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", {
					className: "p-4 border rounded-md bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", {
							className: "cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-semibold text-navy",
									children: b.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 534,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-muted-foreground ml-3",
									children: new Date(b.created_at).toLocaleString()
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 535,
									columnNumber: 13
								}, this),
								b.destination && /* @__PURE__ */ (void 0)("span", {
									className: "text-xs ml-3",
									children: ["→ ", b.destination]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 536,
									columnNumber: 31
								}, this),
								!b.destination && services && /* @__PURE__ */ (void 0)("span", {
									className: "text-xs ml-3 text-muted-foreground",
									children: ["· ", services]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 537,
									columnNumber: 44
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 533,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookingDocument, { booking: b }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 539,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: async () => {
									if (await confirmDelete(`Delete booking from ${b.name}? This cannot be undone.`)) {
										await deleteBooking(b.id);
										setRows((r) => r.filter((x) => x.id !== b.id));
									}
								},
								className: "text-destructive text-sm",
								children: "Delete booking"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 541,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 540,
							columnNumber: 11
						}, this)
					]
				}, b.id, true, {
					fileName: _jsxFileName,
					lineNumber: 532,
					columnNumber: 14
				}, this);
			})
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 525,
		columnNumber: 10
	}, this);
}
function PostRow({ post }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)(post.title);
	const [body, setBody] = (0, import_react.useState)(post.body);
	const [category, setCategory] = (0, import_react.useState)(post.category || BLOG_CATEGORIES[0]);
	const [image, setImage] = (0, import_react.useState)(post.image);
	const [video, setVideo] = (0, import_react.useState)(post.video);
	const [audio, setAudio] = (0, import_react.useState)(post.audio);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (!editing) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "p-4 border rounded-md flex gap-3",
		children: [
			post.image && /* @__PURE__ */ (void 0)("img", {
				src: post.image,
				className: "h-16 w-16 object-cover rounded"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 567,
				columnNumber: 24
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-semibold text-navy truncate",
						children: post.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 569,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xs text-muted-foreground",
						children: [post.date, post.category ? ` · ${post.category}` : ""]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 570,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-[10px] text-muted-foreground mt-1",
						children: [
							post.video && "🎬 video ",
							post.audio && "🎵 song ",
							post.image && "🖼 image"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 571,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 568,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => setEditing(true),
					className: "text-navy text-sm underline",
					children: "Edit"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 576,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: async () => {
						if (await confirmDelete(`Delete post "${post.title}"?`)) deletePost(post.id);
					},
					className: "text-destructive text-sm",
					children: "Delete"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 577,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 575,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 566,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "p-4 border rounded-md bg-card space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				className: "input",
				value: title,
				onChange: (e) => setTitle(e.target.value)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 584,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
				className: "input",
				value: category,
				onChange: (e) => setCategory(e.target.value),
				children: BLOG_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: c,
					children: c
				}, c, false, {
					fileName: _jsxFileName,
					lineNumber: 586,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 585,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
				className: "input",
				rows: 5,
				value: body,
				onChange: (e) => setBody(e.target.value)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 588,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs font-semibold text-navy mb-1",
					children: "Cover image"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 591,
					columnNumber: 9
				}, this),
				image && /* @__PURE__ */ (void 0)("img", {
					src: image,
					className: "h-24 rounded mb-2 object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 592,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
					accept: "image/*",
					onUploaded: setImage
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 593,
					columnNumber: 9
				}, this),
				image && /* @__PURE__ */ (void 0)("button", {
					onClick: () => setImage(void 0),
					className: "text-xs text-destructive ml-2",
					children: "Remove image"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 594,
					columnNumber: 19
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 590,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs font-semibold text-navy mb-1",
					children: "Video"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 597,
					columnNumber: 9
				}, this),
				video && /* @__PURE__ */ (void 0)("video", {
					src: video,
					controls: true,
					className: "w-full rounded mb-2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 598,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
					accept: "video/*",
					onUploaded: setVideo
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 599,
					columnNumber: 9
				}, this),
				video && /* @__PURE__ */ (void 0)("button", {
					onClick: () => setVideo(void 0),
					className: "text-xs text-destructive ml-2",
					children: "Remove video"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 600,
					columnNumber: 19
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 596,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs font-semibold text-navy mb-1",
					children: "Audio"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 603,
					columnNumber: 9
				}, this),
				audio && /* @__PURE__ */ (void 0)("audio", {
					src: audio,
					controls: true,
					className: "w-full mb-2"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 604,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
					accept: "audio/*",
					onUploaded: setAudio
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 605,
					columnNumber: 9
				}, this),
				audio && /* @__PURE__ */ (void 0)("button", {
					onClick: () => setAudio(void 0),
					className: "text-xs text-destructive ml-2",
					children: "Remove audio"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 606,
					columnNumber: 19
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 602,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2 justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					disabled: busy,
					onClick: () => setEditing(false),
					className: "px-4 py-2 text-sm border rounded-md",
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 610,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					disabled: busy,
					onClick: async () => {
						setBusy(true);
						try {
							await updatePost(post.id, {
								title,
								body,
								category,
								image: image ?? null,
								video: video ?? null,
								audio: audio ?? null
							});
							setEditing(false);
						} finally {
							setBusy(false);
						}
					},
					className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold disabled:opacity-60",
					children: busy ? "Saving…" : "Save changes"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 611,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 609,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 583,
		columnNumber: 10
	}, this);
}
function MessagesList() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		(async () => {
			await ensureCompanyAdminRole();
			const [{ data: messages, error: msgErr }, { data: bookings, error: bookErr }] = await Promise.all([supabase.from("contact_messages").select("*").order("created_at", { ascending: false }), supabase.from("bookings").select("*").order("created_at", { ascending: false })]);
			if (msgErr && bookErr) {
				setErr(msgErr.message || bookErr.message);
				setLoading(false);
				return;
			}
			if (msgErr) console.error("contact_messages select", msgErr);
			if (bookErr) console.error("bookings select for messages", bookErr);
			const fromTable = (messages || []).map((m) => ({
				id: m.id,
				name: m.name,
				email: m.email,
				phone: m.phone,
				subject: m.subject,
				message: m.message,
				created_at: m.created_at,
				source: "contact_messages"
			}));
			const fromBookings = (bookings || []).filter((b) => isContactBooking(b)).map((b) => {
				const p = bookingPayload(b);
				return {
					id: b.id,
					name: b.name,
					email: b.email,
					phone: b.phone,
					subject: p.subject || b.destination || "Contact inquiry",
					message: p.message || b.notes || "",
					created_at: b.created_at,
					source: "bookings"
				};
			});
			const merged = [...fromTable, ...fromBookings].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
			setRows(merged);
			setLoading(false);
		})();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-muted-foreground",
		children: "Loading messages…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 685,
		columnNumber: 23
	}, this);
	if (err) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-destructive",
			children: err
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 688,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Run ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
					className: "text-xs",
					children: "FIX_ADMIN_AND_FORMS.sql"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 690,
					columnNumber: 15
				}, this),
				" in Supabase SQL Editor, then refresh."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 689,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 687,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "font-display text-xl text-navy",
				children: [
					"Contact messages (",
					rows.length,
					")"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 695,
				columnNumber: 7
			}, this),
			rows.length === 0 && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-muted-foreground",
				children: "No messages yet. Contact form submissions appear here. Bookings/packages appear under Bookings."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 696,
				columnNumber: 29
			}, this),
			rows.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", {
				className: "p-4 border rounded-md bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", {
					className: "cursor-pointer flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-semibold text-navy",
							children: m.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 701,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs text-muted-foreground",
							children: new Date(m.created_at).toLocaleString()
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 702,
							columnNumber: 13
						}, this),
						m.subject && /* @__PURE__ */ (void 0)("span", {
							className: "text-xs px-2 py-0.5 rounded-full bg-gold/15 text-navy",
							children: m.subject
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 703,
							columnNumber: 27
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 700,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 text-sm grid sm:grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Email:" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 18
							}, this),
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								className: "text-emerald-brand underline",
								href: `mailto:${m.email}`,
								children: m.email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 706,
								columnNumber: 32
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 706,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Phone:" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 707,
								columnNumber: 18
							}, this),
							" ",
							m.phone || "—"
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 707,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "sm:col-span-2 whitespace-pre-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "Message:" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 708,
									columnNumber: 64
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 708,
									columnNumber: 79
								}, this),
								m.message
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 708,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "sm:col-span-2 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: async () => {
									if (await confirmDelete(`Delete message from ${m.name}? This cannot be undone.`)) {
										const table = m.source === "bookings" ? "bookings" : "contact_messages";
										const { error } = await supabase.from(table).delete().eq("id", m.id);
										if (!error) setRows((r) => r.filter((x) => !(x.id === m.id && x.source === m.source)));
									}
								},
								className: "text-destructive text-sm",
								children: "Delete message"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 710,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 709,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 705,
					columnNumber: 11
				}, this)]
			}, `${m.source}-${m.id}`, true, {
				fileName: _jsxFileName,
				lineNumber: 699,
				columnNumber: 22
			}, this))
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 694,
		columnNumber: 10
	}, this);
}
function FeaturedEditor() {
	const [overrides] = useSiteOverrides();
	const list = overrides.featuredPosts && overrides.featuredPosts.length > 0 ? overrides.featuredPosts : blogPosts.map((p) => ({
		slug: p.slug,
		title: p.title,
		excerpt: p.excerpt,
		date: p.date,
		image: p.image,
		body: p.body
	}));
	function save(next) {
		patchOverrides({ featuredPosts: next });
	}
	function update(i, patch) {
		save(list.map((p, idx) => idx === i ? {
			...p,
			...patch
		} : p));
	}
	async function remove(i) {
		if (await confirmDelete(`Delete featured article "${list[i]?.title || ""}"?`)) save(list.filter((_, idx) => idx !== i));
	}
	function add() {
		const slug = `new-${Date.now()}`;
		save([...list, {
			slug,
			title: "New featured article",
			excerpt: "",
			date: (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, {
				year: "numeric",
				month: "long",
				day: "numeric"
			}),
			image: "",
			body: ""
		}]);
	}
	async function resetAll() {
		if (await confirmDelete("Reset featured articles to the original defaults?")) patchOverrides({ featuredPosts: void 0 });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-2xl text-navy",
				children: "Featured articles"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 774,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: "Edit the highlighted articles that appear in the \"Featured articles\" section on the blog. Each supports full body content displayed on click."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 775,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 773,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: add,
					className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
					children: "+ Add featured"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 778,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: resetAll,
					className: "px-4 py-2 text-sm rounded-md border",
					children: "Reset to defaults"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 779,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 777,
				columnNumber: 7
			}, this),
			list.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border rounded-lg p-4 space-y-3 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input font-semibold",
							value: p.title,
							onChange: (e) => update(i, { title: e.target.value }),
							placeholder: "Title"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 783,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => remove(i),
							className: "text-destructive text-sm shrink-0",
							children: "Delete"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 786,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 782,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid md:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: p.date,
							onChange: (e) => update(i, { date: e.target.value }),
							placeholder: "Date, e.g. June 18, 2026"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 789,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input",
							value: p.slug,
							onChange: (e) => update(i, { slug: e.target.value.replace(/\s+/g, "-").toLowerCase() }),
							placeholder: "URL slug"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 792,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 788,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 2,
						value: p.excerpt,
						onChange: (e) => update(i, { excerpt: e.target.value }),
						placeholder: "Short summary (card preview)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 796,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-sm font-semibold text-navy mt-2",
						children: "Cover image"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 799,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start gap-3",
						children: [p.image && /* @__PURE__ */ (void 0)("img", {
							src: p.image,
							className: "h-24 w-32 object-cover rounded-md border"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 801,
							columnNumber: 25
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UploadInput, {
							accept: "image/*",
							onUploaded: (url) => update(i, { image: url })
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 802,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 800,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-sm font-semibold text-navy mt-2",
						children: "Full article body"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 806,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 8,
						value: p.body,
						onChange: (e) => update(i, { body: e.target.value }),
						placeholder: "Full article text shown when the card is opened."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 807,
						columnNumber: 11
					}, this)
				]
			}, p.slug + i, true, {
				fileName: _jsxFileName,
				lineNumber: 781,
				columnNumber: 27
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 811,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 772,
		columnNumber: 10
	}, this);
}
function TestimonialsEditor() {
	const [overrides] = useSiteOverrides();
	const list = overrides.testimonials && overrides.testimonials.length > 0 ? overrides.testimonials : testimonials.map((t) => ({
		name: t.name,
		role: t.role,
		text: t.text
	}));
	function save(next) {
		patchOverrides({ testimonials: next });
	}
	function update(i, patch) {
		save(list.map((t, idx) => idx === i ? {
			...t,
			...patch
		} : t));
	}
	async function remove(i) {
		if (await confirmDelete(`Remove testimonial from "${list[i]?.name || ""}"?`)) save(list.filter((_, idx) => idx !== i));
	}
	function add() {
		save([{
			name: "New client",
			role: "",
			text: ""
		}, ...list]);
	}
	async function resetAll() {
		if (await confirmDelete("Reset testimonials back to the original defaults?")) patchOverrides({ testimonials: void 0 });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-2xl text-navy",
				children: "Testimonials"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 853,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: "Add, edit, or remove the client testimonials shown on the /testimonials page."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 854,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 852,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: add,
					className: "px-4 py-2 text-sm rounded-md bg-gradient-gold text-navy font-semibold",
					children: "+ Add testimonial"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 857,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: resetAll,
					className: "px-4 py-2 text-sm rounded-md border",
					children: "Reset to defaults"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 858,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 856,
				columnNumber: 7
			}, this),
			list.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border rounded-lg p-4 space-y-3 bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex justify-between items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							className: "input font-semibold",
							value: t.name,
							onChange: (e) => update(i, { name: e.target.value }),
							placeholder: "Client name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 862,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => remove(i),
							className: "text-destructive text-sm shrink-0",
							children: "Delete"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 865,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 861,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						className: "input",
						value: t.role,
						onChange: (e) => update(i, { role: e.target.value }),
						placeholder: "Role / trip type, e.g. Honeymoon, Bali"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 867,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
						className: "input",
						rows: 3,
						value: t.text,
						onChange: (e) => update(i, { text: e.target.value }),
						placeholder: "Testimonial quote"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 870,
						columnNumber: 11
					}, this)
				]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 860,
				columnNumber: 27
			}, this)),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `.input{width:100%;padding:.6rem .8rem;border:1px solid var(--border);border-radius:.5rem;background:var(--background);font:inherit}` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 874,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 851,
		columnNumber: 10
	}, this);
}
//#endregion
export { Admin as component };
