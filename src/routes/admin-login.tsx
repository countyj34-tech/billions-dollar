import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, Mail, ArrowLeft, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ADMIN_EMAIL, ADMIN_PASSWORD, signInCompanyAdmin } from "@/lib/admin-auth";
import bg from "@/assets/admin-bg.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/admin-login")({
  head: () => ({ meta: [{ title: "Admin Sign in — Best Eastern Travel" }, { name: "robots", content: "noindex" }] }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await signInCompanyAdmin(email, password);
      navigate({ to: "/admin" });
    } catch (ex: any) {
      setErr(ex?.message || "Could not sign in");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/80 to-navy-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_55%)]" />

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-emerald-brand/15 blur-3xl" />

      <Link
        to="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm tracking-wider transition-colors"
      >
        <ArrowLeft size={16} /> Back to site
      </Link>

      <div className="relative z-10 min-h-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-12 py-16 gap-16">
        <div className="hidden lg:block text-white">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="" className="h-14 w-14 rounded-full ring-2 ring-gold/40" />
            <div>
              <div className="text-[10px] tracking-[0.4em] text-gold uppercase">Best Eastern</div>
              <div className="font-display text-xl">Travel · Tours · Car Hire</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 backdrop-blur px-4 py-1.5 text-[10px] tracking-[0.35em] text-gold uppercase mb-6">
            <Shield size={12} /> Restricted Console
          </div>

          <h1 className="font-display text-5xl xl:text-6xl leading-[1.05] tracking-tight">
            Curate every<br/>
            <span className="italic text-gold">journey</span> from<br/>
            one place.
          </h1>

          <p className="mt-6 text-white/70 text-base max-w-md leading-relaxed">
            Manage bookings, publish stories, refresh imagery, and shape the way
            the world experiences East Africa. Powered by Supabase Auth.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "Content", v: "Live edits" },
              { k: "Bookings", v: "Real-time" },
              { k: "Media", v: "Secure CDN" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-[9px] tracking-[0.3em] text-gold/80 uppercase">{s.k}</div>
                <div className="font-display text-lg text-white mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:ml-auto">
          <div className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-emerald-brand/30 blur-sm opacity-70" aria-hidden />
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 shadow-luxury border border-white/40">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-[10px] tracking-[0.4em] uppercase text-emerald-brand">Admin</div>
                  <h2 className="font-display text-3xl text-navy mt-1">Welcome back</h2>
                </div>
                <div className="h-12 w-12 rounded-full bg-navy grid place-items-center shadow-gold">
                  <Lock size={18} className="text-gold" />
                </div>
              </div>

              <form onSubmit={submit} className="space-y-5">
                <label className="block">
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/70 mb-2">Email</span>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-navy/15 rounded-xl bg-white text-sm text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-navy/70 mb-2">Password</span>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40" />
                    <input
                      type="password"
                      required
                      autoFocus
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-navy/15 rounded-xl bg-white text-sm text-navy focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
                    />
                  </div>
                </label>

                {err && (
                  <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive whitespace-pre-wrap">
                    {err}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={busy}
                  className="w-full px-4 py-3.5 rounded-xl bg-gradient-gold text-navy font-semibold text-sm tracking-wide shadow-gold hover:brightness-105 active:brightness-95 disabled:opacity-60 transition"
                >
                  {busy ? "Signing in…" : "Enter the console →"}
                </button>
              </form>

              <p className="mt-6 text-[10px] tracking-[0.25em] uppercase text-center text-navy/40">
                Supabase Auth · Password {ADMIN_PASSWORD}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
