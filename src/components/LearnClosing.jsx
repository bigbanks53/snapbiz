import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BellRing } from 'lucide-react'
import { EASE } from './learnCourses'

const MotionLink = motion.create(Link)

export default function LearnClosing() {
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
    <section
      id="learn-closing"
      aria-labelledby="learn-closing-heading"
      className="relative overflow-hidden bg-forest-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />

      {/* Ambient background */}
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
            Coming Soon
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
        </motion.div>

        <motion.h2
          id="learn-closing-heading"
          {...rise(0.08)}
          className="mt-7 font-display text-[1.9rem] font-[800] leading-[1.15] tracking-[-0.03em] text-ivory sm:text-[2.5rem] lg:text-[3rem]"
        >
          Want to know when courses <span className="text-lime">launch?</span>
        </motion.h2>

        <motion.p
          {...rise(0.16)}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg"
        >
          The learning library is planned, not built. There is no sign-up list yet, so the honest
          answer for now is that SnapBiz will update this page when a course is ready.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-10 flex flex-col items-center gap-4">
          <motion.button
            type="button"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-lime px-8 py-4 text-sm font-bold text-forest-deep shadow-[0_12px_36px_-8px_rgba(217,244,58,0.35)] transition-colors hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:text-base"
            aria-label="Notify me when the learning library launches (preview only — notifications are not open yet)"
          >
            <BellRing size={17} strokeWidth={2.25} aria-hidden="true" />
            Notify Me When This Launches
          </motion.button>

          <p className="text-[11px] font-medium text-ivory/40 sm:text-xs">
            Preview build — notifications aren&apos;t open yet, so this button isn&apos;t connected
            to anything.
          </p>
        </motion.div>

        <motion.div {...rise(0.32)} className="mt-12 border-t border-ivory/10 pt-8">
          <MotionLink
            to="/how-it-works#where-you-are"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            See where Learn sits on the path
            <ArrowRight
              size={16}
              strokeWidth={2.25}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </MotionLink>
          <p className="mt-4 text-[11px] font-medium text-ivory/40 sm:text-xs">
            Learn is stage 03 of six — marked <span className="text-ivory/60">Coming soon</span>{' '}
            there too.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
