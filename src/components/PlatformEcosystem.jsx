import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const STAGES = ['Discover', 'Plan', 'Learn', 'Set Up', 'Consult', 'Grow']

export default function PlatformEcosystem() {
  const reduceMotion = useReducedMotion()
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 70%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-10% 0px -10% 0px' },
          transition: { duration: 0.8, delay, ease: EASE },
        }

  return (
    <section
      id="platform-ecosystem"
      aria-labelledby="platform-ecosystem-title"
      className="relative overflow-hidden bg-forest-deep text-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-[90px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="max-w-[52rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-lime/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime/80">
              Platform Ecosystem
            </span>
          </motion.div>
          <motion.h2
            id="platform-ecosystem-title"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[0.95] tracking-[-0.03em] text-ivory sm:text-[2.75rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            One path, from first idea to growth.
          </motion.h2>
        </div>

        <ol ref={trackRef} className="relative mt-16 sm:mt-24" aria-label="Discover, Plan, Learn, Set Up, Consult, Grow">
          {/* track */}
          <div aria-hidden="true" className="absolute bottom-[0.6em] left-[15px] top-[0.6em] w-[3px] rounded-full bg-ivory/10 sm:left-[19px]">
            <motion.div
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-lime via-lime to-apricot shadow-[0_0_16px_rgba(217,244,58,0.45)]"
              style={reduceMotion ? undefined : { scaleY: progress }}
            />
          </div>

          {STAGES.map((stage, i) => {
            const last = i === STAGES.length - 1
            return (
              <motion.li
                key={stage}
                className="relative flex items-center gap-6 pb-14 last:pb-0 sm:gap-10 sm:pb-20 lg:pb-24"
                initial={reduceMotion ? false : 'hidden'}
                whileInView="shown"
                viewport={{ once: true, margin: '0px 0px -25% 0px' }}
              >
                <motion.span
                  aria-hidden="true"
                  variants={{ hidden: { scale: 0.4, opacity: 0 }, shown: { scale: 1, opacity: 1 } }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 sm:h-10 sm:w-10 ${
                    last ? 'border-apricot bg-apricot' : 'border-lime bg-forest-deep'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${last ? 'bg-forest-deep' : 'bg-lime shadow-[0_0_10px_theme(colors.lime)]'}`} />
                </motion.span>

                <div className="flex min-w-0 items-baseline gap-4 sm:gap-8">
                  <motion.span
                    variants={{ hidden: { opacity: 0, x: -12 }, shown: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
                    className="font-mono text-xs font-bold text-ivory/40 sm:text-sm"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <motion.span
                    variants={{ hidden: { opacity: 0, y: 48, filter: 'blur(6px)' }, shown: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
                    transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                    className={`font-display text-[3rem] font-extrabold leading-[0.9] tracking-[-0.04em] sm:text-[5rem] lg:text-[7.5rem] xl:text-[8.5rem] ${
                      last ? 'text-lime' : 'text-ivory'
                    }`}
                  >
                    {stage}
                  </motion.span>
                  {!last && (
                    <motion.span
                      aria-hidden="true"
                      variants={{ hidden: { opacity: 0, x: -16 }, shown: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                      className="hidden font-display text-3xl font-bold text-lime/60 sm:inline lg:text-5xl"
                    >
                      →
                    </motion.span>
                  )}
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
