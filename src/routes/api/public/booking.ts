import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(60),
  preferredContact: z.string().trim().max(60).optional(),
  services: z.array(z.string().max(40)).max(12).optional(),
  from: z.string().trim().max(200).optional(),
  destination: z.string().trim().max(200).optional(),
  departure: z.string().trim().max(60).optional(),
  return: z.string().trim().max(60).optional(),
  adults: z.union([z.string(), z.number()]).optional(),
  children: z.union([z.string(), z.number()]).optional(),
  cabin: z.string().trim().max(60).optional(),
  hotel: z.string().trim().max(60).optional(),
  vehicle: z.string().trim().max(60).optional(),
  driver: z.string().trim().max(60).optional(),
  packageTier: z.string().trim().max(120).optional(),
  notes: z.string().trim().max(4000).optional(),
})

export const Route = createFileRoute('/api/public/booking')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          supabase_url_present: Boolean(
            process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL,
          ),
          supabase_key_present: Boolean(
            process.env.SUPABASE_SERVICE_ROLE_KEY ||
              process.env.SUPABASE_PUBLISHABLE_KEY ||
              process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          ),
          storage: 'supabase',
          node_version: process.version,
          time: new Date().toISOString(),
        })
      },
      POST: async ({ request }) => {
        let parsed
        try {
          parsed = schema.parse(await request.json())
        } catch {
          return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }

        try {
          const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
          const travelDate =
            parsed.departure && /^\d{4}-\d{2}-\d{2}$/.test(parsed.departure)
              ? parsed.departure
              : null
          const adultsNum = Number(parsed.adults) || 0
          const childrenNum = Number(parsed.children) || 0

          const { error } = await supabaseAdmin.from('bookings').insert({
            name: parsed.name,
            email: parsed.email,
            phone: parsed.phone,
            destination: parsed.destination ?? null,
            travel_date: travelDate,
            travelers: adultsNum + childrenNum || null,
            notes: parsed.notes ?? null,
            payload: { type: 'booking', ...parsed } as any,
          })

          if (error) {
            console.error('booking API save failed', error)
            return Response.json({ error: error.message }, { status: 500 })
          }

          return Response.json({ success: true, saved: true, table: 'bookings' })
        } catch (error) {
          console.error('booking API failed', error)
          const message = error instanceof Error ? error.message : 'Server error'
          return Response.json({ error: message }, { status: 500 })
        }
      },
    },
  },
})
