import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { z } from 'zod'

export const Route = createFileRoute('/unsubscribe')({
  validateSearch: z.object({ token: z.string().optional() }),
  head: () => ({
    meta: [
      { title: 'Unsubscribe — Best Eastern Travel' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: UnsubscribePage,
})

function UnsubscribePage() {
  const { token } = useSearch({ from: '/unsubscribe' })
  const [state, setState] = useState<'loading' | 'valid' | 'invalid' | 'already' | 'success' | 'error'>('loading')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!token) { setState('invalid'); return }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setState('valid')
        else if (d.reason === 'already_unsubscribed') setState('already')
        else setState('invalid')
      })
      .catch(() => setState('error'))
  }, [token])

  const confirm = async () => {
    if (!token) return
    setBusy(true)
    try {
      const r = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const d = await r.json()
      if (d.success) setState('success')
      else if (d.reason === 'already_unsubscribed') setState('already')
      else setState('error')
    } catch { setState('error') } finally { setBusy(false) }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="max-w-md w-full bg-card border rounded-2xl p-8 text-center">
        <h1 className="font-display text-2xl text-navy mb-3">Email preferences</h1>
        {state === 'loading' && <p className="text-muted-foreground">Checking your link…</p>}
        {state === 'valid' && (
          <>
            <p className="text-muted-foreground mb-6">Confirm you'd like to unsubscribe from Best Eastern Travel emails.</p>
            <button onClick={confirm} disabled={busy} className="rounded-full bg-navy text-white px-6 py-3 font-semibold disabled:opacity-50">
              {busy ? 'Unsubscribing…' : 'Confirm unsubscribe'}
            </button>
          </>
        )}
        {state === 'already' && <p className="text-muted-foreground">This email is already unsubscribed.</p>}
        {state === 'success' && <p className="text-emerald-brand font-semibold">You've been unsubscribed. Sorry to see you go.</p>}
        {state === 'invalid' && <p className="text-muted-foreground">This unsubscribe link is invalid or has expired.</p>}
        {state === 'error' && <p className="text-destructive">Something went wrong. Please try again later.</p>}
      </div>
    </div>
  )
}
