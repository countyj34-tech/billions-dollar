import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'

interface SuppressionPayload {
  email: string
  reason: 'bounce' | 'complaint' | 'unsubscribe'
  message_id?: string
  metadata?: Record<string, unknown>
}

function mapReasonToStatus(
  reason: string,
): 'bounced' | 'complained' | 'suppressed' {
  switch (reason) {
    case 'bounce':
      return 'bounced'
    case 'complaint':
      return 'complained'
    default:
      return 'suppressed'
  }
}

function mapReasonToMessage(reason: string): string {
  switch (reason) {
    case 'bounce':
      return 'Permanent bounce — email address is invalid or rejected'
    case 'complaint':
      return 'Spam complaint — recipient marked email as spam'
    case 'unsubscribe':
      return 'Recipient unsubscribed'
    default:
      return 'Email suppressed'
  }
}

export const Route = createFileRoute("/lovable/email/suppression")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = process.env.SUPABASE_URL ?? import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        const authHeader = request.headers.get('Authorization')
        if (!authHeader?.startsWith('Bearer ') || authHeader.slice('Bearer '.length).trim() !== supabaseServiceKey) {
          return Response.json({ error: 'Unauthorized' }, { status: 401 })
        }

        let payload: SuppressionPayload
        try {
          const body = await request.json()
          payload = body.data ?? body
          if (!payload.email || !payload.reason) {
            return Response.json({ error: 'Missing required fields: email, reason' }, { status: 400 })
          }
        } catch {
          return Response.json({ error: 'Invalid payload' }, { status: 400 })
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        const normalizedEmail = payload.email.toLowerCase()

        const { error: suppressError } = await supabase
          .from('suppressed_emails')
          .upsert(
            {
              email: normalizedEmail,
              reason: payload.reason,
              metadata: payload.metadata ?? null,
            },
            { onConflict: 'email' },
          )

        if (suppressError) {
          console.error('Failed to upsert suppressed email', { error: suppressError })
          return Response.json({ error: 'Failed to write suppression' }, { status: 500 })
        }

        await supabase.from('email_send_log').insert({
          message_id: payload.message_id ?? null,
          template_name: 'system',
          recipient_email: normalizedEmail,
          status: mapReasonToStatus(payload.reason),
          error_message: mapReasonToMessage(payload.reason),
          metadata: payload.metadata ?? null,
        })

        return Response.json({ success: true })
      },
    },
  },
})
