import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Check, Flag, ScrollText } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const STAGES = [
  { label: 'Describe', hint: 'Say what you want to build, in your own words.' },
  { label: 'Clarify', hint: 'Sharpen the idea into a clear problem and solution.' },
  { label: 'Define The Customer', hint: 'Pin down exactly who this is for.' },
  { label: 'Validate The Demand', hint: 'Check that people really want — and pay for — it.' },
  { label: 'Research Competition', hint: "See who already serves this customer, and how." },
  { label: 'Define Business Model', hint: 'Work out how the idea earns and sustains itself.' },
  { label: 'Check Resources', hint: 'Match the idea against the money, skills, and time you have.' },
  { label: 'Assess Risks', hint: 'Surface what could go wrong before it does.' },
  { label: 'Validation Report', hint: 'A clear summary of what is proven — and what is not.', output: 'Report' },
  { label: 'Business Roadmap', hint: 'A personalized, step-by-step path from idea to launch.', output: 'Roadmap' },
]

function StageMarker({ state, reduceMotion }) {
  if (state === 'done') {
    return (
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-forest-deep sm:h-7 sm:w-7">
        <Check size={13} strokeWidth={3} />
      </span>
    )
  }
  if (state === 'active') {
    return (
      <span className="relative grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-apricot sm:h-7 sm:w-7">
        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-apricot/60"
            animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <span className="h-2 w-2 rounded-full bg-apricot shadow-[0_0_10px_theme(colors.apricot)]" />
      </span>
    )
  }
  return <span className="h-6 w-6 shrink-0 rounded-full border border-ivory/25 sm:h-7 sm:w-7" />
}

export default function IdeaJourney() {
  const reduceMotion = useReducedMotion()
  const panelRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start 0.85', 'end 0.55'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setProgress(Math.min(1, Math.max(0, v)))
  })

  const activeIndex = reduceMotion
    ? 0
    : Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length))

  return (
    <section
      id="idea-journey"
      aria-label="The Idea Journey"
      className="relative bg-forest-deep py-20 text-ivory sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />

      {/* Ambient background — clipped in its own layer so the sticky progress card keeps working */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-lime/[0.07] blur-[110px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-apricot/[0.08] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-[52rem]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime sm:text-xs">
              The Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            From a rough idea to a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-lime">clear roadmap</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.1em] left-0 right-0 z-0 h-[0.32em] bg-lime/20"
              />
            </span>
            , one honest question at a time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-[42rem] text-base leading-[1.7] text-ivory/70 sm:text-lg"
          >
            Every idea walks the same ten stages. Scroll through the sequence — each stage builds
            evidence for the next, so decisions rest on what you&apos;ve learned, not on hope.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky progress readout */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="rounded-[1.75rem] border border-ivory/15 bg-forest/70 p-6 backdrop-blur-md sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/50">
                  Journey progress
                </p>
                <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ivory sm:text-5xl">
                  Stage {String(activeIndex + 1).padStart(2, '0')}
                  <span className="text-lg font-bold text-ivory/40 sm:text-xl">
                    {' '}
                    / {STAGES.length}
                  </span>
                </p>
                <p
                  className={`mt-2 font-display text-base font-bold transition-colors duration-300 sm:text-lg ${
                    activeIndex >= STAGES.length - 2 ? 'text-apricot' : 'text-lime'
                  }`}
                  aria-live="polite"
                >
                  {STAGES[activeIndex].label}
                </p>
                <div
                  className="mt-5 h-1.5 overflow-hidden rounded-full bg-ivory/10"
                  role="progressbar"
                  aria-label="Journey scroll progress"
                  aria-valuemin={0}
                  aria-valuemax={STAGES.length}
                  aria-valuenow={activeIndex + 1}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lime to-apricot transition-[width] duration-300 ease-out"
                    style={{ width: `${Math.max(4, (activeIndex + 1) * (100 / STAGES.length))}%` }}
                  />
                </div>
                <p className="mt-5 flex items-start gap-2 text-xs font-medium leading-relaxed text-ivory/50">
                  Keep scrolling — stages highlight in the order SnapBiz would work through them.
                </p>
              </motion.div>

              <p className="mt-4 px-1 text-xs font-medium leading-relaxed text-ivory/40">
                Illustrative flow. The final journey may evolve as the feature is built.
              </p>
            </div>
          </div>

          {/* Stage panel */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest/80 shadow-[0_32px_80px_-20px_rgba(3,40,36,0.95)] backdrop-blur-xl lg:col-span-8"
          >
            {/* Panel bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 px-5 py-4 sm:px-8 sm:py-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    aria-hidden="true"
                    className={`absolute inline-flex h-full w-full rounded-full bg-lime ${
                      !reduceMotion && progress > 0 && progress < 1 ? 'animate-ping opacity-75' : 'opacity-40'
                    }`}
                  />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider sm:text-sm">
                  Idea Journey Simulation
                </span>
                <span className="hidden rounded-full border border-lime/20 bg-lime/10 px-2.5 py-0.5 text-[11px] font-semibold text-lime sm:inline-block">
                  Future Preview
                </span>
              </div>
              <span className="font-mono text-xs text-ivory/60 sm:text-sm">
                {String(activeIndex + 1).padStart(2, '0')}/{STAGES.length}
              </span>
            </div>

            {/* Stages */}
            <ol className="px-5 py-6 sm:px-8 sm:py-8">
              {STAGES.map((stage, i) => {
                const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'todo'
                const isLast = i === STAGES.length - 1
                return (
                  <li key={stage.label} className="relative flex gap-4 pb-6 last:pb-0 sm:gap-5">
                    {/* Connector line */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[11px] top-8 h-[calc(100%-2rem)] w-px sm:left-[13px]"
                      >
                        <span
                          className={`block h-full w-px transition-colors duration-500 ${
                            i < activeIndex ? 'bg-lime/60' : 'bg-ivory/10'
                          }`}
                        />
                      </span>
                    )}

                    <div className="relative z-10 pt-0.5">
                      <StageMarker state={state} reduceMotion={reduceMotion} />
                    </div>

                    <div
                      className={`min-w-0 flex-1 rounded-xl px-3 py-2 transition-colors duration-300 sm:px-4 sm:py-2.5 ${
                        state === 'active' ? 'bg-ivory/[0.06]' : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          className={`font-mono text-[11px] transition-colors duration-300 ${
                            state === 'todo' ? 'text-ivory/35' : 'text-lime/80'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-display text-base font-bold tracking-tight transition-colors duration-300 sm:text-lg ${
                            state === 'active'
                              ? 'text-lime'
                              : state === 'done'
                                ? 'text-ivory'
                                : 'text-ivory/50'
                          }`}
                        >
                          {stage.label}
                        </span>
                        {stage.output && (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                              state === 'todo'
                                ? 'border-ivory/15 text-ivory/40'
                                : 'border-apricot/40 bg-apricot/15 text-apricot'
                            }`}
                          >
                            {stage.output === 'Report' ? (
                              <ScrollText size={10} aria-hidden="true" />
                            ) : (
                              <Flag size={10} aria-hidden="true" />
                            )}
                            Deliverable
                          </span>
                        )}
                      </div>
                      <p
                        className={`mt-1 text-xs font-medium leading-relaxed transition-colors duration-300 sm:text-[13px] ${
                          state === 'todo' ? 'text-ivory/35' : 'text-ivory/60'
                        }`}
                      >
                        {stage.hint}
                      </p>
                    </div>

                    <span className="sr-only">
                      {state === 'done'
                        ? 'Completed: '
                        : state === 'active'
                          ? 'Current stage: '
                          : 'Upcoming: '}
                      {stage.label}
                    </span>
                  </li>
                )
              })}
            </ol>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-xs font-medium text-ivory/50 sm:text-sm"
        >
          Future feature preview — this flow illustrates the planned idea validation journey.
        </motion.p>
      </div>
    </section>
  )
}
