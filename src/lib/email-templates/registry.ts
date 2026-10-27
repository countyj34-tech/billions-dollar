import type { ComponentType } from 'react'
import { template as bookingRequest } from './booking-request'
import { template as contactMessage } from './contact-message'
import { template as contactConfirmation } from './contact-confirmation'
import { template as bookingConfirmation } from './booking-confirmation'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  /** Fixed recipient — overrides caller-provided recipientEmail when set. */
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'booking-request': bookingRequest,
  'contact-message': contactMessage,
  'contact-confirmation': contactConfirmation,
  'booking-confirmation': bookingConfirmation,
}

