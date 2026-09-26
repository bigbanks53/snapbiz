import { motion, useReducedMotion } from 'framer-motion'
import {
  BadgeCheck,
  GraduationCap,
  Info,
  PackageX,
  Route,
  SearchCheck,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const REASONING_ITEMS = [
  { label: 'Why it fits you', icon: Sparkles, tone: 'lime' },
  { label: 'What you already have', icon: BadgeCheck, tone: 'lime' },
  { label: "What you're missing", icon: PackageX, tone: 'apricot' },
  { label: "What you'll need to learn", icon: GraduationCap, tone: 'lime' },
  { label: 'What you should validate', icon: SearchCheck, tone: 'apricot' },
  { label: 'Potential challenges', icon: TriangleAlert, tone: 'apricot' },
]

const TILE_TONES = {
  lime: 'border-lime/25 bg-lime/10 text-lime',
  apricot: 'border-apricot/30 bg-apricot/10 text-apricot',
}

export default function DiscoverReasoning() {
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
      id="the-reasoning"
      aria-labelledby="reasoning-heading"
      className="relative scroll-mt-20 overflow-hidden bg-forest text-ivory"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-lime/[0.07] blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-apricot/[0.08] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-5">
            <motion.div {...reveal(0)} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime sm:text-xs">
                Why SnapBiz Doesn&apos;t Just Give You a List
              </span>
            </motion.div>

            <motion.h2
              id="reasoning-heading"
              {...reveal(0.08)}
              className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.1rem]"
            >
              Understand the{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-lime">reasoning</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[0.1em] left-0 right-0 z-0 h-[0.32em] bg-lime/20"
                />
              </span>{' '}
              behind every opportunity.
            </motion.h2>

            <motion.p
              {...reveal(0.16)}
              className="mt-6 max-w-[34rem] text-base leading-[1.7] text-ivory/70 sm:text-lg"
            >
              A business can look good on paper and still be wrong for you. For every
              recommendation, SnapBiz is designed to eventually show:
            </motion.p>

            <motion.p
              {...reveal(0.22)}
              className="mt-8 flex items-start gap-2.5 text-xs font-medium leading-relaxed text-ivory/50 sm:text-sm"
            >
              <Info size={15} className="mt-0.5 shrink-0 text-lime/80" aria-hidden="true" />
              This is what the feature is being built to do — it isn&apos;t part of the product
              yet.
            </motion.p>
          </div>

          {/* Reasoning tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {REASONING_ITEMS.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-8% 0px' }}
                    transition={{
                      duration: 0.6,
                      delay: reduceMotion ? 0 : 0.1 + index * 0.07,
                      ease: EASE,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-ivory/12 bg-forest-deep/70 p-5 transition-colors duration-300 hover:border-ivory/25"
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${TILE_TONES[item.tone]}`}
                    >
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <p className="font-display text-base font-bold tracking-tight text-ivory sm:text-lg">
                      {item.label}
                    </p>
                  </motion.div>
                )
              })}

              {/* The payoff tile — spans full width */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : 0.1 + REASONING_ITEMS.length * 0.07,
                  ease: EASE,
                }}
                className="flex items-center gap-4 rounded-2xl border border-lime/30 bg-lime/10 p-5 shadow-[0_0_40px_-12px_rgba(217,244,58,0.35)] sm:col-span-2"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-lime/40 bg-lime/15 text-lime">
                  <Route size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <p className="font-display text-base font-bold tracking-tight text-lime sm:text-lg">
                  How you could start
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
