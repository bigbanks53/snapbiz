import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const QUESTIONS = [
  { q: 'What should I start?', a: 'Discover business opportunities that fit your circumstances.' },
  { q: 'How do I start?', a: 'Get a structured path from idea to execution.' },
  { q: 'What do I need to learn?', a: 'Identify knowledge and skills relevant to your chosen direction.' },
  { q: 'Where do I go from here?', a: 'Move into setup, professional guidance, and eventually growth.' },
]

export default function WhySnapBiz() {
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

  return (
    <section id="why-snapbiz" aria-labelledby="why-snapbiz-title" className="relative bg-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="max-w-[52rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60">
              Why SnapBiz
            </span>
          </motion.div>
          <motion.h2
            id="why-snapbiz-title"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[0.95] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            <span className="block">Built around the questions</span>
            <span className="block">
              entrepreneurs{' '}
              <span className="relative inline-block">
                <span className="relative z-10">actually ask.</span>
                <span aria-hidden="true" className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.32em] bg-lime/60" />
              </span>
            </span>
          </motion.h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:gap-7">
          {QUESTIONS.map((item, i) => (
            <motion.li
              key={item.q}
              {...reveal(0.12 + i * 0.08)}
              className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-8 shadow-[0_32px_64px_-32px_rgba(24,51,47,0.18)] transition-colors duration-300 hover:border-forest/25 sm:p-10`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-20 -top-20 h-[18rem] w-[18rem] rounded-full blur-[60px] ${
                  i % 2 === 0 ? 'bg-lime/20' : 'bg-apricot/20'
                }`}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 right-4 font-display text-[7rem] font-extrabold leading-none text-ink/[0.05] sm:text-[9rem]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-[12px] font-bold tracking-wide text-ivory">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-12 bg-ink/15" />
                </div>
                <h3 className="mt-8 font-display text-[1.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
                  {item.q}
                </h3>
                <div className="mt-6 h-px w-full bg-ink/10" />
                <p className="mt-6 max-w-[26rem] text-[1.02rem] leading-[1.6] text-ink/65">{item.a}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
