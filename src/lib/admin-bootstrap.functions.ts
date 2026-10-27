import { createServerFn } from "@tanstack/react-start";

import { COMPANY_EMAIL } from "@/lib/company";

const ADMIN_EMAIL = COMPANY_EMAIL.toLowerCase();
/** Fixed console password — bootstrap resets the account to this when needed. */
export const ADMIN_PASSWORD = "@2006@";

function isServiceRoleKey(key: string): boolean {
  if (!key) return false;
  if (key.startsWith("sb_secret_")) return true;
  try {
    const payload = JSON.parse(
      Buffer.from(key.split(".")[1] || "", "base64url").toString("utf8"),
    ) as { role?: string };
    return payload.role === "service_role";
  } catch {
    return false;
  }
}

/**
 * Idempotent: ensures the company admin account exists with the fixed password
 * and has the admin role. Requires SUPABASE_SERVICE_ROLE_KEY on the server.
 */
export const bootstrapAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const key =
    (typeof process !== "undefined" &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_SECRET_KEY ||
        "")) ||
    "";

  if (!isServiceRoleKey(key)) {
    const hint =
      key.includes("EXAMPLE") || key.includes("your-project")
        ? "Your SUPABASE_SERVICE_ROLE_KEY looks like a placeholder. Copy the real service_role key from Supabase → Project Settings → API into `.env` (and remove placeholder overrides from `.env.local`)."
        : "Use the service_role key from Supabase → Project Settings → API (not the anon/publishable key).";
    throw new Error(`Admin setup needs a valid SUPABASE_SERVICE_ROLE_KEY on the server. ${hint}`);
  }

  const list = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (list.error) throw list.error;

  let user = list.data.users.find((u) => (u.email || "").toLowerCase() === ADMIN_EMAIL);

  if (!user) {
    const created = await supabaseAdmin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true,
      // Admin create skips leaked-password checks by default; be explicit for older Auth versions.
      password_check: false,
    } as Parameters<typeof supabaseAdmin.auth.admin.createUser>[0]);
    if (created.error) throw created.error;
    user = created.data.user!;
  } else {
    // Ensure account is usable; skip leaked-password check when syncing the known console password.
    const updated = await supabaseAdmin.auth.admin.updateUserById(user.id, {
      password: ADMIN_PASSWORD,
      email_confirm: true,
      ban_duration: "none",
      password_check: false,
    } as Parameters<typeof supabaseAdmin.auth.admin.updateUserById>[1]);
    if (updated.error) throw updated.error;
    user = updated.data.user!;
  }

  const { error: roleErr } = await supabaseAdmin
    .from("user_roles")
    .upsert({ user_id: user.id, role: "admin" }, { onConflict: "user_id,role" });
  if (roleErr) throw roleErr;

  return { ok: true as const };
});
