import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { COMPANY_EMAIL, COMPANY_NAME } from '@/lib/company'

interface Props {
  name?: string
}

const ContactConfirmation = ({ name }: Props) => (
  <Html lang="en">
    <Head />
    <Preview>Thank you for contacting {COMPANY_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Dear {name ? name : 'Valued Customer'},</Heading>

        <Text style={paragraph}>
          Thank you for contacting <strong>{COMPANY_NAME}</strong>.
        </Text>

        <Text style={paragraph}>
          We&apos;ve received your inquiry and one of our travel consultant will respond within the 24 hours.
        </Text>

        <Text style={paragraph}>
          If your request is urgent, please contact us directly by phone or Whatsapp.
        </Text>

        <Text style={paragraph}>
          Thank you for choosing <strong>{COMPANY_NAME}</strong>. We look forward to assisting you with all your travel needs.
        </Text>

        <Text style={closing}>
          Warm regards,
          <br />
          <strong>{COMPANY_NAME}</strong>
          <br />
          For all your travel needs.
        </Text>

        <Hr style={hr} />
        <Text style={footer}>{COMPANY_NAME} · {COMPANY_EMAIL}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmation,
  subject: `Thank you for contacting ${COMPANY_NAME}`,
  displayName: 'Contact confirmation (to client)',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { color: '#0b2447', fontSize: '20px', margin: '0 0 16px' }
const paragraph = { color: '#111827', fontSize: '14px', lineHeight: '22px', margin: '0 0 14px' }
const closing = { color: '#111827', fontSize: '14px', lineHeight: '22px', margin: '18px 0 0' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '11px', color: '#9ca3af' }
