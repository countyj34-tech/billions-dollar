import { useEffect, useState } from "react";

const ADMIN_DELETE_PASSWORD = "@2006@";

type Req = { message: string; resolve: (ok: boolean) => void };
let listeners: Array<(r: Req | null) => void> = [];
let current: Req | null = null;

function setCurrent(r: Req | null) {
  current = r;
  listeners.forEach((l) => l(r));
}

export function confirmDelete(message = "This action cannot be undone."): Promise<boolean> {
  return new Promise((resolve) => setCurrent({ message, resolve }));
}

export function DeleteGuardHost() {
  const [req, setReq] = useState<Req | null>(current);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const l = (r: Req | null) => { setReq(r); setPw(""); setErr(null); };
    listeners.push(l);
    return () => { listeners = listeners.filter((x) => x !== l); };
  }, []);

  if (!req) return null;

  function close(ok: boolean) {
    req!.resolve(ok);
    setCurrent(null);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_DELETE_PASSWORD) close(true);
    else setErr("Incorrect password.");
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-navy/70 backdrop-blur-sm px-4 animate-in fade-in duration-150">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gold/30 overflow-hidden">
        <div className="bg-gradient-to-r from-navy to-navy/90 px-6 py-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-destructive/20 grid place-items-center text-destructive text-lg">⚠</div>
          <div>
            <div className="text-white font-display text-lg leading-tight">Confirm deletion</div>
            <div className="text-white/60 text-xs">Password required</div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-sm text-navy/80">{req.message}</p>
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide uppercase">Admin password</label>
            <input
              autoFocus
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(null); }}
              className="w-full px-3.5 py-2.5 rounded-md border border-navy/15 focus:border-gold focus:ring-2 focus:ring-gold/30 outline-none"
              placeholder="Enter password to delete"
            />
            {err && <p className="text-xs text-destructive mt-1.5">{err}</p>}
          </div>
        </div>
        <div className="px-6 pb-6 flex gap-2 justify-end">
          <button type="button" onClick={() => close(false)} className="px-4 py-2 text-sm rounded-md border border-navy/20 text-navy hover:bg-navy/5">Cancel</button>
          <button type="submit" className="px-5 py-2 text-sm rounded-md bg-destructive text-white font-semibold hover:brightness-110 shadow">Delete</button>
        </div>
      </form>
    </div>
  );
}
