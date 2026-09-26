import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const CARD_ONE_LIST = [
  'Understand your idea',
  'Identify what you need',
  'Structure your business',
  'Create a roadmap',
  'Identify relevant skills',
  'Understand setup requirements',
]

const CARD_TWO_LIST = [
  'Your skills',
  'Your interests',
  'Your available capital',
  'Your location',
  'Your resources',
  'Your preferred type of work',
]

export default function StartingPaths() {
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

  const listReveal = (index) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 + index * 0.06, ease: EASE },
        }

  return (
    <section id="starting-points" className="relative bg-ivory">
      {/* subtle texture / grain edge */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        {/* Header */}
        <div className="max-w-[52rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60">
              Two Starting Points
            </span>
          </motion.div>

          <motion.h2
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[0.95] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            <span className="block">Not everyone starts</span>
            <span className="block">
              a business from{' '}
              <span className="relative inline-block">
                <span className="relative z-10">the same place.</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.32em] bg-lime/60"
                />
              </span>
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-7 max-w-[36rem] text-[1.05rem] leading-[1.7] text-ink/65 sm:text-[1.15rem]"
          >
            Some people already have an idea. Others have the money, skills, or resources to start
            but don&apos;t know what business fits them.{' '}
            <span className="font-medium text-ink">SnapBiz is designed to help with both.</span>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 items-start gap-6 sm:mt-20 lg:grid-cols-12 lg:gap-7">
          {/* Card One - Dark */}
          <motion.div
            {...reveal(0.2)}
            className="group relative flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] bg-forest p-8 sm:p-10 lg:col-span-7 lg:min-h-[720px] lg:p-12"
          >
            {/* Lime ambient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-lime/15 blur-[70px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-[22rem] w-[22rem] rounded-full bg-forest-deep blur-[40px]"
            />

            {/* Grain / grid subtle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)`,
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative flex h-full flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-[12px] font-bold tracking-wide text-forest-deep">
                  01
                </span>
                <span className="h-px w-12 bg-ivory/20" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime/80">
                  For Idea Owners
                </span>
              </div>

              <h3 className="mt-8 font-display text-[1.9rem] font-bold leading-[1.05] tracking-[-0.02em] text-ivory sm:text-[2.25rem] lg:text-[2.5rem]">
                I Have a Business Idea
              </h3>

              <p className="mt-4 max-w-[28rem] text-[1.05rem] leading-[1.6] text-ivory/60">
                You know what you want to build, but you don&apos;t know where to start.
              </p>

              <div className="mt-8 h-px w-full bg-ivory/10" />

              <ul className="mt-8 space-y-4">
                {CARD_ONE_LIST.map((item, i) => (
                  <motion.li
                    key={item}
                    {...listReveal(i)}
                    className="flex items-center gap-4 text-[0.95rem] font-medium leading-none text-ivory/85"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-lime/20 bg-lime/10 text-lime">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_theme(colors.lime)]" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Link
                  to="/idea"
                  className="group/cta inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime px-2 py-2 pl-7 text-[0.95rem] font-semibold text-forest-deep transition-all duration-300 hover:bg-lime/90 hover:pr-2 sm:w-auto sm:justify-start"
                >
                  <span>Start With My Idea</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover/cta:translate-x-0.5">
                    <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                </Link>
                <p className="mt-4 text-xs font-medium tracking-wide text-ivory/40">
                  Takes ~3 minutes · No account required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Two - Light / Outlined */}
          <motion.div
            {...reveal(0.32)}
            className="group relative flex min-h-[640px] flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-8 shadow-[0_32px_64px_-32px_rgba(24,51,47,0.18)] sm:p-10 lg:col-span-5 lg:mt-16 lg:min-h-[680px] lg:p-10"
          >
            {/* Soft orange ambient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full bg-apricot/20 blur-[60px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-ink/10 to-transparent"
            />

            <div className="relative flex h-full flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-[12px] font-bold tracking-wide text-ivory">
                  02
                </span>
                <span className="h-px w-12 bg-ink/15" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                  For Explorers
                </span>
              </div>

              <h3 className="mt-8 font-display text-[1.9rem] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
                I Need a Business Idea
              </h3>

              <p className="mt-4 max-w-[22rem] text-[1.02rem] leading-[1.6] text-ink/60">
                You have resources, skills, or capital, but you&apos;re not sure what business fits you.
              </p>

              <div className="mt-8 h-px w-full bg-ink/10" />

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                  We&apos;ll match based on
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-4">
                  {CARD_TWO_LIST.map((item, i) => (
                    <motion.li
                      key={item}
                      {...listReveal(i + 2)}
                      className="flex items-center gap-3 text-[0.95rem] font-medium leading-none text-ink/80"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-apricot/30 bg-apricot/15 text-forest">
                        <span className="h-1.5 w-1.5 rounded-full bg-apricot shadow-[0_0_8px_theme(colors.apricot)]" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/discover"
                  className="group/cta inline-flex w-full items-center justify-between gap-3 rounded-full border border-ink/15 bg-forest-deep px-2 py-2 pl-7 text-[0.95rem] font-semibold text-ivory transition-all duration-300 hover:border-ink/25 hover:bg-forest sm:w-auto sm:justify-start"
                >
                  <span>Find What Fits Me</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-apricot text-forest-deep transition-transform duration-300 group-hover/cta:translate-x-0.5">
                    <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                </Link>
                <p className="mt-4 text-xs font-medium tracking-wide text-ink/40">
                  Personalized · Based on your profile
                </p>
              </div>
            </div>

            {/* subtle corner mark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 opacity-[0.06]"
            >
              <div className="h-full w-full rounded-tl-[2rem] border-l border-t border-ink" />
            </div>
          </motion.div>
        </div>

        {/* Bottom meta line */}
        <motion.div
          {...reveal(0.4)}
          className="mt-14 flex flex-col items-start gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-[28rem] text-sm leading-relaxed text-ink/50">
            Both paths lead to the same outcome: a clear, validated roadmap from where you are now
            to a real business.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/30">
            <span className="h-px w-8 bg-ink/20" />
            Choose your starting point
          </div>
        </motion.div>
      </div>
    </section>
  )
}
