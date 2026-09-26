import { motion, useReducedMotion } from 'framer-motion'
import {
  Check,
  CircleHelp,
  ClipboardList,
  Eye,
  MapPin,
  MessageSquareQuote,
  Route,
  Search,
  TriangleAlert,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const UNDERSTOOD = [
  { key: 'Problem', value: 'Affordable late night meals' },
  { key: 'Customer', value: 'OAU students' },
  { key: 'Proposed solution', value: 'Late night food ordering and delivery' },
]

const PROMISING = [
  'Clearly defined customer group',
  'Specific problem',
  'Existing purchasing behavior',
]

const NEEDS_EVIDENCE = [
  'How many students experience this problem',
  'Willingness to pay for delivery',
  'Whether night order volume is sufficient',
]

const ROADMAP_PHASES = [
  'Validate',
  'Define',
  'Prepare',
  'Learn',
  'Set Up',
  'Launch',
  'Improve and Grow',
]

function ExampleChip() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-apricot/40 bg-apricot/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-apricot">
      <Eye size={10} strokeWidth={2.5} aria-hidden="true" />
      Example
    </span>
  )
}

export default function IdeaExample() {
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
      id="idea-example"
      aria-label="Example walkthrough"
      className="relative scroll-mt-20 bg-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        {/* Header */}
        <div className="max-w-[52rem]">
          <motion.div
            {...reveal(0)}
            className="flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-10 bg-apricot" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              Example Walkthrough
            </span>
          </motion.div>

          <motion.h2
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            What an idea walkthrough{' '}
            <span className="relative inline-block">
              <span className="relative z-10">could look like.</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.32em] bg-lime/60"
              />
            </span>
          </motion.h2>

          {/* Required honesty label */}
          <motion.div {...reveal(0.14)}>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-apricot/50 bg-apricot/15 px-4 py-2 text-xs font-bold text-ink sm:text-sm">
              <Eye size={15} className="shrink-0 text-forest" aria-hidden="true" />
              Example Preview — not your actual result
            </p>
            <p className="mt-4 max-w-[40rem] text-base leading-[1.7] text-ink/60 sm:text-lg">
              Follow a fictional student food delivery idea in Ile-Ife through the same
              validation report and business roadmap you would receive.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 space-y-6 sm:mt-16">
          {/* ── The example idea ── */}
          <motion.div
            {...reveal(0.05)}
            className="relative overflow-hidden rounded-[2rem] bg-forest p-7 shadow-card sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[22rem] w-[22rem] rounded-full bg-lime/10 blur-[70px]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime">
                  <MessageSquareQuote size={17} strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="font-display text-sm font-bold uppercase tracking-wider text-ivory sm:text-base">
                  The idea
                </p>
                <ExampleChip />
              </div>

              <blockquote className="mt-5 max-w-3xl">
                <p className="font-display text-lg font-semibold leading-snug text-ivory sm:text-[1.35rem]">
                  &ldquo;I want to start a business that delivers affordable late night meals to
                  OAU students in Ile-Ife. Campus vendors close early, so students studying late
                  have almost nowhere to eat.&rdquo;
                </p>
              </blockquote>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: MapPin, label: 'Ile-Ife, Osun State' },
                  { icon: Check, label: 'Customer: OAU students' },
                  { icon: ClipboardList, label: 'Late night food ordering & delivery' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-forest-deep/70 px-3 py-1.5 text-[11px] font-semibold text-ivory/75 sm:text-xs"
                  >
                    <Icon size={12} className="text-lime" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Condensed example validation report ── */}
          <motion.div
            {...reveal(0.1)}
            className="relative overflow-hidden rounded-[2rem] bg-forest p-7 shadow-card sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -bottom-24 h-[22rem] w-[22rem] rounded-full bg-apricot/10 blur-[70px]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-lime/15 text-lime">
                    <Search size={17} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-ivory sm:text-base">
                    Validation Report
                  </p>
                  <ExampleChip />
                </div>
                <p className="text-[11px] font-medium text-ivory/45 sm:text-xs">
                  Condensed for preview — the full report goes deeper.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* What we understand */}
                <div className="rounded-2xl border border-ivory/10 bg-forest-deep/70 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                    What we understand
                  </p>
                  <dl className="mt-4 space-y-3.5">
                    {UNDERSTOOD.map((item) => (
                      <div key={item.key}>
                        <dt className="text-[11px] font-medium uppercase tracking-wide text-ivory/45">
                          {item.key}
                        </dt>
                        <dd className="mt-0.5 text-[13px] font-semibold leading-snug text-ivory">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* What looks promising */}
                <div className="rounded-2xl border border-ivory/10 bg-forest-deep/70 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lime">
                    What looks promising
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {PROMISING.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-lime text-forest-deep">
                          <Check size={11} strokeWidth={3.5} aria-hidden="true" />
                        </span>
                        <span className="text-[13px] font-medium leading-snug text-ivory/85">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What still needs evidence */}
                <div className="rounded-2xl border border-apricot/20 bg-forest-deep/70 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-apricot">
                    What still needs evidence
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {NEEDS_EVIDENCE.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border border-apricot/50 text-apricot">
                          <CircleHelp size={11} strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        <span className="text-[13px] font-medium leading-snug text-ivory/85">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 flex items-start gap-2 border-t border-ivory/10 pt-4 text-[11px] font-medium leading-relaxed text-ivory/45 sm:text-xs">
                <TriangleAlert size={13} className="mt-0.5 shrink-0 text-apricot" aria-hidden="true" />
                In the full product, every open question links to a simple way to test it — this
                preview only shows the summary.
              </p>
            </div>
          </motion.div>

          {/* ── Condensed example roadmap ── */}
          <motion.div
            {...reveal(0.15)}
            className="relative overflow-hidden rounded-[2rem] bg-forest p-7 shadow-card sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-24 h-[22rem] w-[22rem] rounded-full bg-lime/10 blur-[70px]"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-apricot/15 text-apricot">
                    <Route size={17} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-ivory sm:text-base">
                    Business Roadmap
                  </p>
                  <ExampleChip />
                </div>
                <p className="text-[11px] font-medium text-ivory/45 sm:text-xs">
                  Phase headers only — each phase expands into guided tasks in the full product.
                </p>
              </div>

              {/* Horizontal stepper (lg) / wrapped grid (small) */}
              <ol className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-3">
                {ROADMAP_PHASES.map((phase, i) => {
                  const state = i === 0 ? 'done' : i === 1 ? 'active' : 'todo'
                  const isLast = i === ROADMAP_PHASES.length - 1
                  return (
                    <li key={phase} className="relative min-w-0">
                      {/* Connector (lg only) */}
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className={`absolute left-[26px] top-[13px] hidden h-px w-[calc(100%-26px)] lg:block ${
                            i < 1 ? 'bg-lime/60' : 'bg-ivory/15'
                          }`}
                        />
                      )}
                      <div className="relative z-10">
                        {state === 'done' ? (
                          <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-lime text-forest-deep">
                            <Check size={13} strokeWidth={3} aria-hidden="true" />
                          </span>
                        ) : state === 'active' ? (
                          <span className="grid h-[26px] w-[26px] place-items-center rounded-full border-2 border-apricot bg-forest">
                            <span className="h-2 w-2 rounded-full bg-apricot shadow-[0_0_10px_theme(colors.apricot)]" />
                          </span>
                        ) : (
                          <span className="grid h-[26px] w-[26px] place-items-center rounded-full border border-ivory/25 bg-forest font-mono text-[10px] font-semibold text-ivory/50">
                            {i + 1}
                          </span>
                        )}
                      </div>
                      <p
                        className={`mt-3 pr-1 font-display text-[13px] font-bold leading-tight tracking-tight sm:text-sm ${
                          state === 'active'
                            ? 'text-apricot'
                            : state === 'done'
                              ? 'text-ivory'
                              : 'text-ivory/50'
                        }`}
                      >
                        {phase}
                      </p>
                      <span className="sr-only">
                        {state === 'done'
                          ? 'Completed: '
                          : state === 'active'
                            ? 'In progress: '
                            : 'Planned: '}
                        {phase}
                      </span>
                    </li>
                  )
                })}
              </ol>

              <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ivory/10 pt-5 text-[11px] font-medium text-ivory/45 sm:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-lime text-forest-deep">
                    <Check size={9} strokeWidth={4} aria-hidden="true" />
                  </span>
                  Done
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-apricot" />
                  In progress
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3.5 w-3.5 rounded-full border border-ivory/25" />
                  Planned
                </span>
                <span className="text-ivory/35">
                  Example progress shown for illustration only.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          {...reveal(0.2)}
          className="mt-10 text-center text-xs font-medium leading-relaxed text-ink/45 sm:text-sm"
        >
          This walkthrough is illustrative. Your actual validation report and roadmap will be
          built from the idea and details you provide.
        </motion.p>
      </div>
    </section>
  )
}
