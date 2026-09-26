import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Lightbulb, Sparkles, UserRound, ClipboardCheck } from 'lucide-react'

// Home-only previews: both paths share the same layout and visual weight.
const TEASERS = [
  {
    id: 'discover',
    label: 'Discover your options',
    headline: <>What if the right business is <span className="text-lime">closer to you</span> than you think?</>,
    description: 'Tell SnapBiz about yourself. We can help you explore business opportunities that align with your resources, skills, interests, and goals.',
    fromIcon: UserRound,
    fromTitle: 'Your profile',
    fromDetail: 'Skills · Resources · Goals',
    toIcon: Compass,
    toTitle: 'Business possibilities',
    toDetail: 'Options that fit you',
    cta: 'Explore Discover',
    to: '/discover',
  },
  {
    id: 'idea-preview',
    label: 'Validate your idea',
    headline: <>Already have <span className="text-lime">an idea</span> in mind?</>,
    description: 'SnapBiz helps you figure out what to validate and test before you build. Explore your assumptions, understand your customers, and find a practical next step.',
    fromIcon: Lightbulb,
    fromTitle: 'Your idea',
    fromDetail: 'Problem · Customer · Solution',
    toIcon: ClipboardCheck,
    toTitle: 'A validation focus',
    toDetail: 'What to test next',
    cta: 'Explore Idea Validation',
    to: '/idea',
  },
]

function ExperienceTeaser({ teaser }) {
  const FromIcon = teaser.fromIcon
  const ToIcon = teaser.toIcon

  return (
    <section
      id={teaser.id}
      aria-labelledby={`${teaser.id}-title`}
      className="flex min-w-0 flex-col rounded-[2rem] border border-ivory/15 bg-forest-deep/60 p-6 sm:p-8 lg:p-10"
    >
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
        <Sparkles size={15} aria-hidden="true" />
        {teaser.label}
      </p>
      <h2
        id={`${teaser.id}-title`}
        className="mt-5 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl"
      >
        {teaser.headline}
      </h2>
      <p className="mb-7 mt-5 text-base leading-relaxed text-ivory/70">
        {teaser.description}
      </p>

      <div className="mt-auto">
        <div className="rounded-2xl border border-ivory/10 bg-forest p-4 sm:p-5">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/50">Experience preview</p>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ivory/10 text-ivory/80">
              <FromIcon size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{teaser.fromTitle}</p>
              <p className="mt-1 text-xs text-ivory/60">{teaser.fromDetail}</p>
            </div>
          </div>
          <div aria-hidden="true" className="ml-5 my-2 h-4 border-l border-dashed border-lime/40" />
          <div className="flex items-center gap-3 rounded-xl border border-lime/20 bg-lime/5 p-3">
            <ToIcon size={20} className="shrink-0 text-lime" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-lime">{teaser.toTitle}</p>
              <p className="mt-1 text-xs text-ivory/60">{teaser.toDetail}</p>
            </div>
          </div>
        </div>
        <Link
          to={teaser.to}
          className="group mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-lime px-5 py-3 font-display text-sm font-bold text-forest-deep transition-colors hover:bg-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-base"
        >
          {teaser.cta}
          <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default function OpportunityDiscovery() {
  return (
    <div className="relative overflow-hidden bg-forest py-16 text-ivory sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 lg:grid-cols-2">
        {TEASERS.map((teaser) => <ExperienceTeaser key={teaser.id} teaser={teaser} />)}
      </div>
    </div>
  )
}
