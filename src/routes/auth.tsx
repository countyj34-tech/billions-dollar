import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — Best Eastern Travel" }, { name: "robots", content: "noindex" }] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr(null); setMsg(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        setMsg("Account created. If email confirmation is required, check your inbox — otherwise you're signed in.");
        const { data } = await supabase.auth.getSession();
        if (data.session) navigate({ to: "/admin" });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin" });
      }
    } catch (e: any) {
      setErr(e.message || "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    setMsg("Signed out.");
  }

  return (
    <div className="min-h-[70vh] grid place-items-center px-5 py-20">
      <div className="w-full max-w-md bg-card border rounded-2xl p-8 shadow-luxury">
        <div className="text-xs tracking-[0.3em] uppercase text-emerald-brand">Admin</div>
        <h1 className="font-display text-3xl text-navy mt-1 mb-6">{mode === "signin" ? "Sign in" : "Create account"}</h1>
        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="block text-sm font-semibold text-navy mb-1.5">Email</span>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 border rounded-md bg-background"/>
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-navy mb-1.5">Password</span>
            <input required type="password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border rounded-md bg-background"/>
          </label>
          {err && <p className="text-sm text-destructive">{err}</p>}
          {msg && <p className="text-sm text-emerald-brand">{msg}</p>}
          <button type="submit" disabled={busy}
            className="w-full px-5 py-3 rounded-md bg-gradient-gold text-navy font-semibold disabled:opacity-60">
            {busy ? "Please wait…" : (mode === "signin" ? "Sign in" : "Create account")}
          </button>
        </form>
        <div className="flex items-center justify-between mt-5 text-sm">
          <button onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setErr(null); setMsg(null); }}
            className="text-navy underline underline-offset-4">
            {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
          </button>
          <button onClick={signOut} className="text-muted-foreground">Sign out</button>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          After your first sign-up, an admin must grant you the admin role in the database before you can edit content.
          <br/>
          <Link to="/" className="underline">Back to site</Link>
        </p>
      </div>
    </div>
  );
}
