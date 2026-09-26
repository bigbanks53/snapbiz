import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AVAILABILITY, EASE, STAGES } from './howItWorksStages'

const MotionLink = motion.create(Link)

export default function HowItWorksClosing() {
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section aria-labelledby="closing-heading" className="relative overflow-hidden bg-forest-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-30%] h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-lime/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-40%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-apricot/[0.08] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-36">
        <motion.div {...rise(0)} className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
            Start where you are
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
        </motion.div>

        <motion.ol
          {...rise(0.06)}
          aria-hidden="true"
          className="mt-8 flex items-center justify-center"
        >
          {STAGES.map((stage, index) => (
            <li key={stage.id} className="flex items-center">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  stage.availability === 'soon'
                    ? 'border border-ivory/30 bg-transparent'
                    : AVAILABILITY[stage.availability].dotOnDark
                }`}
              />
              {index < STAGES.length - 1 && (
                <span className="mx-1.5 h-px w-5 bg-ivory/15 sm:w-8" />
              )}
            </li>
          ))}
        </motion.ol>

        <motion.h2
          id="closing-heading"
          {...rise(0.12)}
          className="mt-8 font-display text-[1.9rem] font-[800] leading-[1.15] tracking-[-0.03em] text-ivory sm:text-[2.5rem] lg:text-[3rem]"
        >
          Ready to see where you fit in{' '}
          <span className="text-lime">this journey?</span>
        </motion.h2>

        <motion.div
          {...rise(0.2)}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <MotionLink
            to="/get-started"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-base"
          >
            I Have a Business Idea
            <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </MotionLink>
          <MotionLink
            to="/get-started"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-base"
          >
            Help Me Find a Business
          </MotionLink>
        </motion.div>

        <motion.p
          {...rise(0.28)}
          className="mx-auto mt-6 max-w-md text-xs font-medium leading-relaxed text-ivory/55"
        >
          Both buttons open a coming soon page. Sign-up isn&apos;t available yet.
        </motion.p>
      </div>
    </section>
  )
}
