import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

export default function FinalCTA() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-10% 0px -10% 0px' },
          transition: { duration: 0.8, delay, ease: EASE },
        }
  const drift = (x, y, duration) =>
    reduceMotion
      ? {}
      : {
          animate: { x: [0, x, 0], y: [0, y, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' },
        }

  return (
    <section id="get-started-cta" aria-labelledby="final-cta-title" className="relative overflow-hidden bg-forest text-ivory">
      {/* Subtle animated background */}
      <motion.div
        aria-hidden="true"
        {...drift(40, 30, 18)}
        className="pointer-events-none absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-lime/15 blur-[90px]"
      />
      <motion.div
        aria-hidden="true"
        {...drift(-36, -24, 22)}
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-apricot/15 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/[0.06] sm:h-[52rem] sm:w-[52rem]"
          style={{ scale: 0.55 + i * 0.25 }}
          {...(reduceMotion
            ? {}
            : {
                animate: { opacity: [0.4, 1, 0.4] },
                transition: { duration: 8, delay: i * 1.6, repeat: Infinity, ease: 'easeInOut' },
              })}
        />
      ))}

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-44">
        <motion.div {...reveal(0)} className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-lime/40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime/80">Start here</span>
          <span aria-hidden="true" className="h-px w-10 bg-lime/40" />
        </motion.div>

        <motion.h2
          id="final-cta-title"
          {...reveal(0.08)}
          className="mx-auto mt-7 max-w-[60rem] font-display text-[2.25rem] font-[800] leading-[0.98] tracking-[-0.035em] text-ivory sm:text-[3.25rem] lg:text-[4.5rem] xl:text-[5rem]"
        >
          You don&apos;t need to have everything{' '}
          <span className="relative inline-block">
            <span className="relative z-10">figured out</span>
            <span aria-hidden="true" className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.3em] bg-lime/35" />
          </span>{' '}
          before you start.
        </motion.h2>

        <motion.p
          {...reveal(0.16)}
          className="mx-auto mt-8 max-w-[34rem] text-[1.05rem] leading-[1.7] text-ivory/65 sm:text-[1.2rem]"
        >
          Start with where you are. <span className="font-medium text-ivory">SnapBiz helps you understand what comes next.</span>
        </motion.p>

        <motion.div {...reveal(0.24)} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/get-started"
            className="group/cta inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime px-2 py-2 pl-7 text-[0.95rem] font-semibold text-forest-deep transition-all duration-300 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:w-auto"
          >
            <span>Get Started</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover/cta:translate-x-0.5">
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </span>
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex w-full items-center justify-center rounded-full border border-ivory/25 px-7 py-4 text-[0.95rem] font-semibold text-ivory transition-colors duration-300 hover:border-ivory/50 hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:w-auto"
          >
            Explore SnapBiz
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
