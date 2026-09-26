import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Info, PenLine } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const HEADLINE_LINES = [
  'Tell us your idea.',
  "We'll help you figure out",
  'what to test|before you build.',
]

export default function IdeaHero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section id="idea-hero" className="relative overflow-hidden bg-forest">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-14%] h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute bottom-[-24%] left-[-14%] h-[30rem] w-[30rem] rounded-full bg-apricot/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:pb-32">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
          {/* Copy — ~60% */}
          <div className="min-w-0 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            {/* Eyebrow */}
            <motion.div
              {...rise(0.15)}
              className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
                I Have an Idea
              </span>
              <span className="rounded-full border border-lime/25 bg-lime/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime sm:text-[11px]">
                Feature Preview · Coming Soon
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
            </motion.div>

            {/* Headline */}
            <h1 className="mt-8 font-display text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
              {HEADLINE_LINES.map((line, i) => {
                const isLast = i === HEADLINE_LINES.length - 1
                const [highlight, rest] = isLast ? line.split('|') : [line, null]
                return (
                  <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                    <motion.span
                      className="block"
                      initial={reduceMotion ? false : { y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.35 + i * 0.12, ease: EASE }}
                    >
                      {isLast ? (
                        <>
                          <span className="text-lime">{highlight}</span>
                          {rest ? ` ${rest}` : ''}
                        </>
                      ) : (
                        line
                      )}
                    </motion.span>
                  </span>
                )
              })}
            </h1>

            {/* Supporting text */}
            <motion.p
              {...rise(0.75)}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg lg:mx-0"
            >
              SnapBiz doesn&apos;t tell you whether your idea will succeed. It helps you reduce
              uncertainty by identifying what to validate, learn, and prepare before you commit.
            </motion.p>
          </div>

          {/* Photograph — ~40%, blended into the forest background */}
          {/* Photo: Tima Miroshnichenko via Pexels (#5439161) — free Pexels license */}
          <div className="relative mx-auto w-full max-w-md min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full bg-lime/[0.07] blur-3xl"
            />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 32, scale: 1.04 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[2.5rem] border border-lime/15"
              />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_0_90px_35px_rgba(6,59,53,0.5)] ring-1 ring-ivory/10">
                <picture>
                  <source srcSet="/images/idea-founder.webp" type="image/webp" />
                  <img
                    src="/images/idea-founder.jpg"
                    alt="Young African entrepreneur deep in thought, writing out her plans in a notebook at her desk"
                    width="1000"
                    height="1500"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </picture>
                {/* Soft-edge treatment: melts every side of the photo into the section background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest/20 to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-forest/55 via-transparent to-forest/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-forest/45 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>

          {/* Idea input preview — overlaps toward the photograph */}
          <motion.div
            {...rise(0.9)}
            className="relative z-10 mx-auto -mt-24 w-full max-w-2xl rounded-[1.75rem] border border-ivory/15 bg-forest-deep/80 p-5 text-left shadow-card backdrop-blur-md sm:p-7 lg:col-start-1 lg:row-start-2 lg:-mr-24 lg:mt-0 xl:-mr-32"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="idea-input-preview"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/60"
              >
                <PenLine size={14} strokeWidth={2.2} className="text-lime" aria-hidden="true" />
                Your idea
              </label>
              <span className="rounded-full bg-ivory/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ivory/50">
                Preview — not saved
              </span>
            </div>

            <textarea
              id="idea-input-preview"
              rows={4}
              placeholder="I want to start a business that..."
              className="mt-4 w-full resize-none rounded-2xl border border-ivory/15 bg-forest/70 px-4 py-3.5 text-[0.95rem] leading-relaxed text-ivory placeholder:text-ivory/35 transition-colors duration-200 focus:border-lime/50 focus:outline-none focus:ring-2 focus:ring-lime/20"
            />

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2 text-[11px] font-medium leading-relaxed text-ivory/45 sm:max-w-[16rem] sm:text-xs">
                <Info size={14} className="mt-0.5 shrink-0 text-lime/70" aria-hidden="true" />
                Preview only — nothing is submitted, saved, or analyzed yet.
              </p>

              <motion.a
                whileHover={reduceMotion ? {} : { y: -2 }}
                whileTap={reduceMotion ? {} : { scale: 0.98 }}
                href="#idea-example"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-semibold text-forest-deep transition-colors hover:bg-lime/90 sm:text-base"
                aria-label="Continue to the example walkthrough below"
              >
                Continue
                <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
