import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

export default function DiscoverClosing() {
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
      id="discover-closing"
      aria-label="Start discovering"
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
        {/* Primary close */}
        <motion.div {...rise(0)} className="flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
            Discover a Business
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
        </motion.div>

        <motion.h2
          {...rise(0.08)}
          className="mt-7 font-display text-[1.9rem] font-[800] leading-[1.15] tracking-[-0.03em] text-ivory sm:text-[2.5rem] lg:text-[3rem]"
        >
          Ready to find out{' '}
          <span className="text-lime">what could work for you?</span>
        </motion.h2>

        <motion.div {...rise(0.16)} className="mt-10 flex flex-col items-center gap-4">
          <motion.button
            type="button"
            aria-describedby="discover-closing-note"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-lime px-8 py-4 text-sm font-bold text-forest-deep shadow-[0_12px_36px_-8px_rgba(217,244,58,0.35)] transition-colors hover:bg-lime/90 sm:text-base"
          >
            Start Discovering
            <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
          </motion.button>

          <p
            id="discover-closing-note"
            className="text-[11px] font-medium text-ivory/40 sm:text-xs"
          >
            Preview build — discovery isn&apos;t open yet, so this button isn&apos;t connected to
            anything.
          </p>
        </motion.div>

        {/* Secondary path — for people who already have an idea */}
        <motion.div
          {...rise(0.22)}
          className="relative mt-16 rounded-[2rem] bg-ivory p-8 text-ink shadow-card sm:mt-20 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-[0.045]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #18332F 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />

          <div className="relative">
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
                <Lightbulb size={13} strokeWidth={2.2} aria-hidden="true" />
                Different Path
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            </div>

            <h3 className="mt-5 font-display text-[1.5rem] font-[800] leading-[1.15] tracking-[-0.03em] sm:text-[1.9rem]">
              Already know what you want to build?
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.7] text-ink/65 sm:text-base">
              You don&apos;t need to discover a business. Tell us your idea and we&apos;ll help
              you figure out what to test before you build.
            </p>

            <div className="mt-7">
              <motion.span
                className="inline-block"
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  to="/idea"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-forest-deep sm:text-base"
                >
                  I Have an Idea
                  <ArrowRight
                    size={17}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
