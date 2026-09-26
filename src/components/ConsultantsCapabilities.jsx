import { motion, useReducedMotion } from 'framer-motion'
import { Info } from 'lucide-react'
import { EASE, FUTURE_CAPABILITIES } from './consultantsData'

function CapabilityCard({ capability, index, reduceMotion }) {
  const Icon = capability.icon

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.06, ease: EASE }}
      className="relative flex flex-col rounded-[1.25rem] border border-dashed border-ivory/15 bg-ivory/[0.03] p-5 transition-colors duration-300 hover:border-ivory/30 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-dashed border-ivory/20 bg-ivory/[0.04] text-lime/80">
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="rounded-full border border-ivory/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-ivory/50">
          {capability.status}
        </span>
      </div>
      <h3 className="mt-4 font-display text-base font-bold leading-snug tracking-tight text-ivory sm:text-lg">
        {capability.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ivory/55">{capability.description}</p>
    </motion.li>
  )
}

export default function ConsultantsCapabilities() {
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
      id="consultants-capabilities"
      aria-labelledby="consultants-capabilities-heading"
      className="relative overflow-hidden bg-forest text-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ivory/10" />

      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-15%] h-[28rem] w-[28rem] rounded-full bg-lime/[0.07] blur-[110px]" />
        <div className="absolute -right-40 bottom-[-25%] h-[26rem] w-[26rem] rounded-full bg-apricot/[0.08] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex flex-wrap items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-lime/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime/80 sm:text-xs">
              What this will include
            </span>
            <span className="rounded-full border border-ivory/20 bg-ivory/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ivory/60">
              Roadmap, not product
            </span>
          </motion.div>

          <motion.h2
            id="consultants-capabilities-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.05] tracking-[-0.03em] text-ivory sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Built for real guidance, <span className="text-lime">when you need it.</span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ivory/65 sm:text-lg"
          >
            When Consultants launches, these are the capabilities SnapBiz plans to build around it.
            None of them exist today — treat this list as a direction, not a feature set you can use.
          </motion.p>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_CAPABILITIES.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>

        <motion.div {...reveal(0.1)} className="mt-8 flex items-start justify-center gap-2.5 sm:mt-10">
          <Info size={15} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-apricot" />
          <p className="max-w-2xl text-xs font-medium leading-relaxed text-ivory/50 sm:text-sm">
            Every capability above is planned, not built. There is no booking calendar, video room,
            inbox, review system, or checkout on SnapBiz today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
