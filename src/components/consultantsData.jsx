import {
  CalendarCheck,
  CreditCard,
  MessagesSquare,
  Star,
  Users,
  Video,
} from 'lucide-react'

export const EASE = [0.22, 1, 0.36, 1]

/**
 * Illustrative consultant profiles.
 *
 * These are examples of the KINDS of consultants SnapBiz plans to host —
 * not real people, and not profiles that exist on the platform today. The
 * data deliberately carries no names, photos, bios, rates, availability, or
 * links: only a role, its focus areas, and the example label every card
 * shows. Keeping the "not a real person" copy next to the content makes it
 * hard to render a card that looks bookable.
 */
export const EXAMPLE_PROFILES = [
  {
    id: 'example-strategy',
    step: '01',
    role: 'Business Strategy Consultant',
    focusAreas: ['Business Strategy', 'SME Growth', 'Market Research'],
    label: 'Example profile · Not a real person',
  },
  {
    id: 'example-lawyer',
    step: '02',
    role: 'Business Lawyer',
    focusAreas: ['Contracts', 'Compliance', 'Intellectual Property'],
    label: 'Example profile · Not a real person',
  },
  {
    id: 'example-finance',
    step: '03',
    role: 'Financial Consultant',
    focusAreas: ['Pricing', 'Financial Planning', 'Fundraising'],
    label: 'Example profile · Not a real person',
  },
]

/**
 * Capabilities planned for the Consultants feature.
 *
 * None of these exist yet, so every entry is rendered with a "Planned" tag —
 * this list describes a roadmap, not a shipped product.
 */
export const FUTURE_CAPABILITIES = [
  {
    id: 'profiles',
    title: 'Consultant profiles and areas of expertise',
    description: 'Browse who does what before you reach out.',
    status: 'Planned',
    icon: Users,
  },
  {
    id: 'booking',
    title: 'Booking',
    description: 'Pick a time that works for both sides.',
    status: 'Planned',
    icon: CalendarCheck,
  },
  {
    id: 'video',
    title: 'Video consultation',
    description: 'Talk face to face without leaving SnapBiz.',
    status: 'Planned',
    icon: Video,
  },
  {
    id: 'messaging',
    title: 'Messaging',
    description: 'Ask questions and share context in writing.',
    status: 'Planned',
    icon: MessagesSquare,
  },
  {
    id: 'reviews',
    title: 'Reviews',
    description: 'Read feedback from people who booked before you.',
    status: 'Planned',
    icon: Star,
  },
  {
    id: 'payments',
    title: 'Payments',
    description: 'Pay for consultations securely, in one place.',
    status: 'Planned',
    icon: CreditCard,
  },
]
