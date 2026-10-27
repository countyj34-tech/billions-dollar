import * as React from 'react'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'
import { COMPANY_EMAIL } from '@/lib/company'

interface Props {
  name?: string
  email?: string
  phone?: string
  preferredContact?: string
  services?: string[]
  from?: string
  destination?: string
  departure?: string
  return?: string
  adults?: string | number
  children?: string | number
  cabin?: string
  hotel?: string
  vehicle?: string
  driver?: string
  packageTier?: string
  notes?: string
  submittedAt?: string
}

const BookingRequest = (p: Props) => (
  <Html lang="en">
    <Head />
    <Preview>New booking request from {p.name ?? 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Booking Request</Heading>
        <Text style={muted}>Submitted {p.submittedAt ?? 'just now'} via besteasterntravel website</Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Client</Heading>
          <Row label="Name" value={p.name} />
          <Row label="Email" value={p.email} />
          <Row label="Phone / WhatsApp" value={p.phone} />
          <Row label="Preferred contact" value={p.preferredContact} />
        </Section>

        <Section style={card}>
          <Heading as="h2" style={h2}>Services requested</Heading>
          <Text style={val}>{p.services?.length ? p.services.join(', ') : '—'}</Text>
        </Section>

        <Section style={card}>
          <Heading as="h2" style={h2}>Trip details</Heading>
          <Row label="From" value={p.from} />
          <Row label="Destination" value={p.destination} />
          <Row label="Departure" value={p.departure} />
          <Row label="Return" value={p.return} />
          <Row label="Adults" value={String(p.adults ?? '')} />
          <Row label="Children" value={String(p.children ?? '')} />
          {p.cabin && <Row label="Cabin class" value={p.cabin} />}
          {p.hotel && <Row label="Hotel preference" value={p.hotel} />}
          {p.vehicle && <Row label="Vehicle type" value={p.vehicle} />}
          {p.driver && <Row label="Driver service" value={p.driver} />}
          {p.packageTier && <Row label="Package tier" value={p.packageTier} />}
        </Section>

        {p.notes && (
          <Section style={card}>
            <Heading as="h2" style={h2}>Special requests</Heading>
            <Text style={val}>{p.notes}</Text>
          </Section>
        )}

        <Hr style={hr} />
        <Text style={footer}>Best Eastern Travel · Booking notification</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={row}>
    <span style={lbl}>{label}: </span>
    <span style={val}>{value || '—'}</span>
  </Text>
)

export const template = {
  component: BookingRequest,
  subject: (d: Record<string, any>) =>
    `New booking: ${d.name ?? 'website visitor'}${d.destination ? ` → ${d.destination}` : ''}`,
  displayName: 'Booking Request Notification',
  to: COMPANY_EMAIL,
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+260 977 000 000',
    preferredContact: 'WhatsApp',
    services: ['Flight', 'Hotel'],
    from: 'Lusaka, Zambia',
    destination: 'Dubai, UAE',
    departure: '2026-08-01',
    return: '2026-08-10',
    adults: 2,
    children: 0,
    cabin: 'Business',
    hotel: '5-Star Luxury',
    notes: 'Anniversary trip — please arrange airport transfer.',
    submittedAt: 'Wednesday, July 8, 2026',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', padding: '24px 0' }
const container = { maxWidth: '600px', margin: '0 auto', padding: '24px' }
const h1 = { color: '#0b1e3f', fontSize: '24px', margin: '0 0 4px' }
const h2 = { color: '#0b1e3f', fontSize: '15px', textTransform: 'uppercase' as const, letterSpacing: '0.08em', margin: '0 0 12px' }
const muted = { color: '#6b7280', fontSize: '13px', margin: '0 0 24px' }
const card = { background: '#f7f8fb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '18px 20px', margin: '0 0 14px' }
const row = { margin: '4px 0', fontSize: '14px', color: '#111827' }
const lbl = { color: '#6b7280', fontWeight: 600 }
const val = { color: '#111827' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0 12px' }
const footer = { color: '#9ca3af', fontSize: '12px', textAlign: 'center' as const }
