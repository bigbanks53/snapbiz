import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  AVAILABILITY,
  AVAILABLE_NOW,
  COMING_SOON,
  EASE,
  STAGES,
  StatusChip,
} from './howItWorksStages'

function StageItem({ stage, tone }) {
  const Icon = stage.icon
  const dark = tone === 'dark'
  const showStatusLine = stage.statusLine !== AVAILABILITY[stage.availability].label

  return (
    <li className={`border-t pt-6 first:border-t-0 first:pt-0 ${dark ? 'border-ivory/10' : 'border-ink/10'}`}>
      <div className="flex items-start gap-4">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
            dark ? 'bg-ivory/5 text-lime' : 'bg-forest/5 text-forest'
          }`}
        >
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className={`font-mono text-[11px] font-semibold ${dark ? 'text-lime/70' : 'text-ink/35'}`}>
              {stage.step}
            </span>
            <h4
              className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
                dark ? 'text-ivory' : 'text-ink'
              }`}
            >
              {stage.label}
            </h4>
            <StatusChip availability={stage.availability} tone={dark ? 'dark' : 'light'} />
          </div>
          {showStatusLine && (
            <p className={`mt-2 text-sm font-semibold ${dark ? 'text-ivory/80' : 'text-ink/75'}`}>
              {stage.statusLine}
            </p>
          )}
          <p className={`mt-2 text-sm leading-relaxed sm:text-[15px] ${dark ? 'text-ivory/60' : 'text-ink/60'}`}>
            {stage.description}
          </p>
          {stage.note && (
            <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-ivory/60' : 'text-ink/60'}`}>
              {stage.note}
            </p>
          )}
          {stage.href && (
            <Link
              to={stage.href}
              className={`group mt-4 inline-flex items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                dark
                  ? 'text-lime focus-visible:outline-lime'
                  : 'text-forest focus-visible:outline-forest'
              }`}
            >
              {stage.cta}
              <ArrowRight
                size={15}
                strokeWidth={2.25}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}

export default function HowItWorksStatus() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section
      id="where-you-are"
      aria-labelledby="status-heading"
      className="relative scroll-mt-20 bg-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              Honest status
            </span>
          </motion.div>

          <motion.h2
            id="status-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Where you are today
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ink/65 sm:text-lg"
          >
            Not every stage is built. <span className="font-semibold text-ink">Available Now</span>{' '}
            is what you can use or preview today. <span className="font-semibold text-ink">Coming Soon</span>{' '}
            is planned, not live. The order of the path is not the order things shipped — Learn is
            still ahead, while Set Up is something SnapBiz can help with now.
          </motion.p>
        </div>

        <motion.ol
          {...reveal(0.2)}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Status of each stage"
        >
          {STAGES.map((stage) => (
            <li key={stage.id} className="rounded-2xl border border-ink/10 bg-ivory px-3.5 py-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-semibold text-ink/35">{stage.step}</span>
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${AVAILABILITY[stage.availability].dotOnLight} ${
                    stage.availability === 'soon' ? 'ring-1 ring-ink/25' : ''
                  }`}
                />
              </div>
              <p className="mt-3 font-display text-sm font-bold tracking-tight text-ink">{stage.label}</p>
              <p className="mt-1 text-[11px] font-semibold text-ink/60">
                {AVAILABILITY[stage.availability].label}
              </p>
            </li>
          ))}
        </motion.ol>

        <div className="mt-8 grid items-start gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-7">
          <motion.div
            {...reveal(0.1)}
            className="relative overflow-hidden rounded-[2rem] bg-forest p-7 text-ivory sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/15 blur-[70px]"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">
                  Available Now
                </h3>
                <span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-deep">
                  {String(AVAILABLE_NOW.length).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">
                Discover and Plan are previews you can open. Set Up is registration and compliance
                help — not a finished product screen.
              </p>
              <ul className="mt-8 space-y-6">
                {AVAILABLE_NOW.map((stage) => (
                  <StageItem key={stage.id} stage={stage} tone="dark" />
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.2)}
            className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-7 shadow-[0_32px_64px_-32px_rgba(24,51,47,0.18)] sm:p-9 lg:mt-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-apricot/20 blur-[60px]"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.7rem]">
                  Coming Soon
                </h3>
                <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/50">
                  {String(COMING_SOON.length).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/55">
                These stages are on the path. They are not open, and nothing here will pretend they
                are.
              </p>
              <ul className="mt-8 space-y-6">
                {COMING_SOON.map((stage) => (
                  <StageItem key={stage.id} stage={stage} tone="light" />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
