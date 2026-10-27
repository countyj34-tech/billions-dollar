import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { COMPANY_EMAIL } from '@/lib/company'

interface Props {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  submittedAt?: string
}

const ContactMessage = (p: Props) => (
  <Html lang="en">
    <Head />
    <Preview>New message from {p.name ?? 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Message</Heading>
        <Text style={muted}>Submitted {p.submittedAt ?? 'just now'} via besteasterntravel website</Text>

        <Section style={card}>
          <Row label="Name" value={p.name} />
          <Row label="Email" value={p.email} />
          <Row label="Phone" value={p.phone} />
          <Row label="Subject" value={p.subject} />
        </Section>

        <Section style={card}>
          <Heading as="h2" style={h2}>Message</Heading>
          <Text style={body}>{p.message}</Text>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>You're receiving this because a visitor used the contact form on besteasterntravel.</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string | number }) => {
  if (value === undefined || value === null || value === '') return null
  return (
    <Text style={row}><strong style={{ color: '#0b2447' }}>{label}: </strong>{String(value)}</Text>
  )
}

export const template = {
  component: ContactMessage,
  subject: (d: Record<string, any>) => `New contact message${d?.name ? ` — ${d.name}` : ''}`,
  displayName: 'Contact message',
  previewData: { name: 'Jane', email: 'jane@example.com', message: 'Hello!' },
  to: COMPANY_EMAIL,
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { color: '#0b2447', fontSize: '22px', margin: '0 0 4px' }
const h2 = { color: '#0b2447', fontSize: '15px', margin: '0 0 8px', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }
const muted = { color: '#6b7280', fontSize: '12px', margin: '0 0 20px' }
const card = { background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px 18px', margin: '0 0 14px' }
const row = { margin: '2px 0', fontSize: '14px', color: '#111827' }
const body = { fontSize: '14px', color: '#111827', whiteSpace: 'pre-wrap' as const, margin: 0 }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '11px', color: '#9ca3af' }
