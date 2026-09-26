import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Eye, Info, Search } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const FIT_REASONS = [
  'You have experience creating content',
  'You prefer service-based businesses',
  'Your available capital is relatively low',
  'You can start from home',
  'Your available time supports a part-time launch',
]

const NEEDS = [
  {
    label: 'Skills',
    tone: 'lime',
    value: 'Content creation, communication, marketing',
  },
  {
    label: 'Resources',
    tone: 'lime',
    value: 'Laptop/phone, internet, portfolio',
  },
  {
    label: 'Starting requirements',
    tone: 'apricot',
    value: 'Client acquisition, service definition, pricing',
  },
]

const INVESTIGATE = [
  'How much local businesses currently pay',
  'Which customer segment to target',
  'Existing competitors',
  'Your potential customer acquisition cost',
]

const STARTING_PATH = [
  'Define Offer',
  'Find First Customers',
  'Test Pricing',
  'Build Portfolio',
  'Formalize',
  'Launch',
]

function BlockHeading({ children }) {
  return (
    <h3 className="font-display text-base font-extrabold tracking-tight text-ivory sm:text-lg">
      {children}
    </h3>
  )
}

export default function DiscoverSampleResult() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section
      id="sample-result"
      aria-labelledby="sample-result-heading"
      className="relative scroll-mt-20 bg-ivory text-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        {/* Section header */}
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              A Sample Discovery Result
            </span>
          </motion.div>

          <motion.h2
            id="sample-result-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Here&apos;s what a discovery result{' '}
            <span className="relative inline-block">
              <span className="relative z-10">actually looks like.</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.32em] bg-lime/60"
              />
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ink/65 sm:text-lg"
          >
            This is an illustrative example of the kind of result discovery is designed to
            produce — the details below are sample content, not a live recommendation.
          </motion.p>
        </div>

        {/* The sample result card */}
        <motion.article
          {...reveal(0.12)}
          aria-label="Sample discovery result: Digital Marketing Service"
          className="relative mt-12 overflow-hidden rounded-[2rem] bg-forest p-6 text-ivory shadow-card ring-1 ring-forest-deep/20 sm:mt-14 sm:rounded-[2.5rem] sm:p-8 lg:p-12"
        >
          {/* Ambient corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/10 blur-[80px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-apricot/10 blur-[80px]"
          />

          {/* Card header */}
          <div className="relative flex flex-col gap-5 border-b border-ivory/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-apricot/50 bg-apricot/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-apricot sm:text-[11px]">
                <Eye size={12} strokeWidth={2.4} aria-hidden="true" />
                Illustrative example — not a live result
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl lg:text-4xl">
                Digital Marketing Service
              </h3>
              <p className="mt-1.5 text-xs font-medium text-ivory/50 sm:text-sm">
                Example profile used: content creation experience · low capital · home-based ·
                part-time launch
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden shrink-0 font-mono text-[11px] font-semibold tracking-[0.18em] text-ivory/30 sm:block"
            >
              SAMPLE
            </span>
          </div>

          {/* Card body: 2 × 2 blocks */}
          <div className="relative mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Why this may fit */}
            <div>
              <BlockHeading>Why this may fit your profile</BlockHeading>
              <ul className="mt-4 space-y-3">
                {FIT_REASONS.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ivory/80 sm:text-[15px]">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you'll need */}
            <div>
              <BlockHeading>What you&apos;ll need</BlockHeading>
              <div className="mt-4 space-y-3">
                {NEEDS.map((need) => (
                  <div
                    key={need.label}
                    className="rounded-xl border border-ivory/10 bg-forest-deep/70 p-4"
                  >
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                        need.tone === 'lime' ? 'text-lime' : 'text-apricot'
                      }`}
                    >
                      {need.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ivory/80 sm:text-[15px]">
                      {need.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Things to investigate */}
            <div>
              <BlockHeading>Things to investigate</BlockHeading>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {INVESTIGATE.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-ivory/10 bg-forest-deep/70 p-4"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-apricot/15 text-apricot">
                      <Search size={12} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ivory/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Possible starting path */}
            <div>
              <BlockHeading>Possible starting path</BlockHeading>
              <ol className="relative mt-4 space-y-0">
                {STARTING_PATH.map((step, i) => {
                  const isLast = i === STARTING_PATH.length - 1
                  return (
                    <li key={step} className="relative flex gap-3.5 pb-4 last:pb-0">
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[13px] top-8 h-[calc(100%-1.75rem)] w-px bg-gradient-to-b from-lime/50 to-ivory/10"
                        />
                      )}
                      <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-lime/30 bg-forest-deep font-mono text-[10px] font-bold text-lime">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-sm font-semibold text-ivory/85 sm:text-[15px]">
                        {step}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>

          {/* Card footer */}
          <div className="relative mt-10 flex flex-col gap-4 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              aria-describedby="sample-result-preview-note"
              className="group inline-flex w-fit items-center justify-center gap-2.5 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-[0_12px_36px_-8px_rgba(217,244,58,0.35)] transition-colors hover:bg-lime/90 sm:text-base"
            >
              Explore this opportunity
              <ArrowRight
                size={18}
                strokeWidth={2.25}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
            <p
              id="sample-result-preview-note"
              className="flex items-start gap-2 text-xs font-medium leading-relaxed text-ivory/50 sm:max-w-[22rem] sm:text-right sm:text-[13px]"
            >
              <Info size={14} className="mt-0.5 shrink-0 text-lime/70" aria-hidden="true" />
              Preview only — discovery isn&apos;t open yet, so this button isn&apos;t connected to
              anything.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
