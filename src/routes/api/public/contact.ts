import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(60).optional().or(z.literal('')),
  subject: z.string().trim().max(200).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(4000),
})

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed
        try {
          parsed = schema.parse(await request.json())
        } catch {
          return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }

        try {
          const { supabaseAdmin } = await import('@/integrations/supabase/client.server')

          const { error: msgError } = await supabaseAdmin.from('contact_messages').insert({
            name: parsed.name,
            email: parsed.email,
            phone: parsed.phone || null,
            subject: parsed.subject || null,
            message: parsed.message,
          })

          if (!msgError) {
            return Response.json({ success: true, saved: true, table: 'contact_messages' })
          }

          // Fallback when contact_messages INSERT policy is missing
          const { error: bookingError } = await supabaseAdmin.from('bookings').insert({
            name: parsed.name,
            email: parsed.email,
            phone: parsed.phone || null,
            destination: parsed.subject || 'Contact inquiry',
            notes: parsed.message,
            payload: {
              type: 'contact',
              subject: parsed.subject || '',
              message: parsed.message,
              phone: parsed.phone || '',
            } as any,
          })

          if (bookingError) {
            console.error('contact save failed', msgError, bookingError)
            return Response.json(
              { error: bookingError.message || msgError.message },
              { status: 500 },
            )
          }

          return Response.json({ success: true, saved: true, table: 'bookings' })
        } catch (error) {
          console.error('contact API failed', error)
          const message = error instanceof Error ? error.message : 'Server error'
          return Response.json({ error: message }, { status: 500 })
        }
      },
    },
  },
})
