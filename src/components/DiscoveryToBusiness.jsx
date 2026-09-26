import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Map,
  Rocket,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const PATH_STEPS = [
  { label: 'Explore an opportunity', icon: Compass },
  { label: 'Understand the business', icon: BookOpen },
  { label: 'Validate the opportunity', icon: ClipboardCheck },
  { label: 'Build your roadmap', icon: Map },
  { label: 'Learn what you need', icon: GraduationCap },
  { label: 'Set up your business', icon: Briefcase },
  { label: 'Launch', icon: Rocket },
]

export default function DiscoveryToBusiness() {
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
      id="discovery-to-business"
      aria-labelledby="discovery-to-business-heading"
      className="relative scroll-mt-20 overflow-hidden bg-forest-deep text-ivory"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-lime/[0.07] blur-[110px]" />
        <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-apricot/[0.08] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        {/* Section header */}
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime sm:text-xs">
              From Discovery to Business
            </span>
          </motion.div>

          <motion.h2
            id="discovery-to-business-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Found something{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-lime">worth exploring?</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.1em] left-0 right-0 z-0 h-[0.32em] bg-lime/20"
              />
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ivory/70 sm:text-lg"
          >
            You shouldn&apos;t have to start from scratch. Discovery connects to the rest of
            SnapBiz, so the opportunity you choose can become a business you actually build.
          </motion.p>
        </div>

        {/* Flow panel */}
        <motion.div
          {...reveal(0.12)}
          className="mt-12 overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest/75 shadow-[0_32px_80px_-24px_rgba(3,40,36,0.95)] sm:mt-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-lime" />
              <span className="font-display text-xs font-bold uppercase tracking-wider sm:text-sm">
                Where discovery leads
              </span>
            </div>
            <span className="font-mono text-xs text-ivory/60 sm:text-sm">
              {String(PATH_STEPS.length).padStart(2, '0')} steps
            </span>
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10">
            {/* Horizontal flow — md and up */}
            <div className="relative hidden md:block">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[calc(100%/14)] right-[calc(100%/14)] top-7 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-lime via-lime/60 to-apricot/70"
              />
              <ol className="relative grid grid-cols-7">
                {PATH_STEPS.map((step, i) => {
                  const Icon = step.icon
                  const isLast = i === PATH_STEPS.length - 1
                  return (
                    <li key={step.label} className="flex flex-col items-center px-1 text-center">
                      <span
                        className={`grid h-14 w-14 place-items-center rounded-full border-2 shadow-[0_0_24px_-8px_rgba(217,244,58,0.5)] ${
                          isLast
                            ? 'border-lime bg-lime text-forest-deep'
                            : 'border-lime/30 bg-forest-deep text-lime'
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className="mt-3 font-mono text-[10px] font-semibold tracking-[0.18em] text-lime/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`mt-1 text-xs font-semibold leading-snug ${
                          isLast ? 'text-lime' : 'text-ivory/75'
                        }`}
                      >
                        {step.label}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Vertical flow — below md */}
            <ol className="relative md:hidden">
              {PATH_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === PATH_STEPS.length - 1
                return (
                  <li key={step.label} className="relative flex gap-4 pb-5 last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[23px] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-lime/50 to-ivory/10"
                      />
                    )}
                    <span
                      className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 ${
                        isLast
                          ? 'border-lime bg-lime text-forest-deep'
                          : 'border-lime/30 bg-forest-deep text-lime'
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <span className="block font-mono text-[10px] font-semibold tracking-[0.18em] text-lime/70">
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`mt-0.5 block font-display text-base font-bold tracking-tight ${
                          isLast ? 'text-lime' : 'text-ivory'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...reveal(0.18)}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-xs font-medium leading-relaxed text-ivory/50 sm:text-sm">
            Routes to Get Started — the full discovery experience and sign-up flow aren&apos;t
            open yet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
