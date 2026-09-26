import { Compass, FileCheck, GraduationCap, MessagesSquare, Route, TrendingUp } from 'lucide-react'

export const EASE = [0.22, 1, 0.36, 1]

export const AVAILABILITY = {
  preview: {
    label: 'Preview',
    darkChip: 'border-apricot/40 bg-apricot/15 text-apricot',
    lightChip: 'border-apricot/40 bg-apricot/20 text-ink',
    dotOnDark: 'bg-apricot',
    dotOnLight: 'bg-apricot',
  },
  available: {
    label: 'Available',
    darkChip: 'border-lime/30 bg-lime/15 text-lime',
    lightChip: 'border-transparent bg-lime text-forest-deep',
    dotOnDark: 'bg-lime',
    dotOnLight: 'bg-lime',
  },
  soon: {
    label: 'Coming soon',
    darkChip: 'border-ivory/20 bg-ivory/5 text-ivory/75',
    lightChip: 'border-ink/15 bg-transparent text-ink/70',
    dotOnDark: 'bg-ivory/35',
    dotOnLight: 'bg-ink/20',
  },
}

/**
 * The six-stage path. `group` is product status, not scroll order —
 * Learn sits between two usable stages and is still coming soon.
 */
export const STAGES = [
  {
    id: 'discover',
    step: '01',
    label: 'Discover',
    description: 'Find a business that fits you, or bring your own idea.',
    availability: 'preview',
    group: 'now',
    statusLine: 'Preview',
    today: 'You can walk through opportunity discovery now. It is a preview — nothing is saved.',
    href: '/discover',
    cta: 'Open the preview',
    icon: Compass,
  },
  {
    id: 'plan',
    step: '02',
    label: 'Plan',
    description: 'Turn an idea into a validated, practical roadmap.',
    availability: 'preview',
    group: 'now',
    statusLine: 'Idea validation · Preview',
    today: 'Idea validation is a preview. It does not analyze or save your idea yet.',
    href: '/idea',
    cta: 'See the preview',
    icon: Route,
  },
  {
    id: 'learn',
    step: '03',
    label: 'Learn',
    description: 'Develop the skills and knowledge needed to execute.',
    availability: 'soon',
    group: 'soon',
    statusLine: 'Coming soon',
    today: 'Skill paths for this stage are not available yet.',
    href: null,
    cta: null,
    icon: GraduationCap,
  },
  {
    id: 'set-up',
    step: '04',
    label: 'Set Up',
    description: 'Handle registration, documentation, and compliance requirements.',
    availability: 'available',
    group: 'now',
    statusLine: 'Business registration and compliance services',
    today:
      'Business registration and compliance services are available now. There is no self-serve setup screen on the site yet.',
    note: 'This is a service SnapBiz offers, not a self-serve flow on the site. The Services page is still a coming soon placeholder.',
    href: null,
    cta: null,
    icon: FileCheck,
  },
  {
    id: 'consult',
    step: '05',
    label: 'Consult',
    description:
      'Connect with professional business consultants, including lawyers, for guidance when you need human expertise.',
    availability: 'soon',
    group: 'soon',
    statusLine: 'Coming soon',
    today: 'Consultant access, including lawyers, is not open yet.',
    href: null,
    cta: null,
    icon: MessagesSquare,
  },
  {
    id: 'grow',
    step: '06',
    label: 'Grow',
    description: 'Access tools and resources to keep building beyond launch.',
    availability: 'soon',
    group: 'soon',
    statusLine: 'Coming soon',
    today: 'Tools and resources for after launch are not available yet.',
    href: null,
    cta: null,
    icon: TrendingUp,
  },
]

export const AVAILABLE_NOW = STAGES.filter((stage) => stage.group === 'now')
export const COMING_SOON = STAGES.filter((stage) => stage.group === 'soon')

export function StatusChip({ availability, tone = 'dark', className = '' }) {
  const meta = AVAILABILITY[availability]
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
        tone === 'dark' ? meta.darkChip : meta.lightChip
      } ${className}`}
    >
      {meta.label}
    </span>
  )
}
