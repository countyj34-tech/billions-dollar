import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { probePublicBookingInsert, SUPABASE_SETUP_SQL } from "@/lib/supabase-setup-sql";

/** Shows until the live Supabase project allows public form inserts. */
export function DatabaseSetupBanner() {
  const [status, setStatus] = useState<"checking" | "ok" | "blocked">("checking");
  const [detail, setDetail] = useState("");
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(true);

  async function check() {
    setStatus("checking");
    const result = await probePublicBookingInsert(supabase as any);
    setDetail(result.detail);
    setStatus(result.ok ? "ok" : "blocked");
    if (!result.ok) setOpen(true);
  }

  useEffect(() => {
    check();
  }, []);

  if (status === "ok" || (status === "checking" && !open)) return null;
  if (status === "checking") {
    return (
      <div className="mb-6 rounded-xl border border-navy/10 bg-card p-4 text-sm text-muted-foreground">
        Checking whether forms can save to Supabase…
      </div>
    );
  }

  if (!open) return null;

  return (
    <div className="mb-6 rounded-xl border-2 border-destructive/40 bg-destructive/5 p-5 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-navy">Database setup required</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Forms are submitting on the website, but Supabase is blocking saves. That is why
            <b> Bookings</b> and <b> Messages</b> stay empty. Error: {detail}
          </p>
        </div>
        <button type="button" onClick={() => setOpen(false)} className="text-xs text-muted-foreground">
          Hide
        </button>
      </div>

      <ol className="text-sm space-y-1 list-decimal pl-5 text-navy/90">
        <li>Open Supabase → project <code className="text-xs bg-background px-1 rounded">rvzmwmkdxhvlkmeqecto</code></li>
        <li>Go to <b>SQL Editor</b> → New query</li>
        <li>Click <b>Copy SQL</b> below, paste, then click <b>Run</b></li>
        <li>Come back here and click <b>Test again</b>, then submit a form</li>
      </ol>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(SUPABASE_SETUP_SQL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="px-4 py-2 rounded-md bg-gradient-gold text-navy font-semibold text-sm"
        >
          {copied ? "Copied!" : "Copy SQL"}
        </button>
        <button
          type="button"
          onClick={check}
          className="px-4 py-2 rounded-md border text-sm font-semibold text-navy"
        >
          Test again
        </button>
      </div>

      <pre className="max-h-48 overflow-auto text-[10px] leading-relaxed bg-background border rounded-md p-3 whitespace-pre-wrap">
        {SUPABASE_SETUP_SQL}
      </pre>
    </div>
  );
}
