import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Check, Store } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const HEADLINE_LINES = ['You have the idea.', "We'll help you figure out", 'what comes next.']

const ROADMAP_STEPS = [
  { label: 'Validate your idea', state: 'done' },
  { label: 'Register business name', state: 'done' },
  { label: 'CAC paperwork', state: 'active' },
  { label: 'Launch plan', state: 'todo' },
]

function StepMarker({ state }) {
  if (state === 'done') {
    return (
      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-forest text-lime">
        <Check size={10} strokeWidth={3} />
      </span>
    )
  }
  if (state === 'active') {
    return (
      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 border-apricot">
        <span className="h-1.5 w-1.5 rounded-full bg-apricot" />
      </span>
    )
  }
  return <span className="h-4 w-4 shrink-0 rounded-full border border-ink/25" />
}

function RoadmapCard({ float }) {
  return (
    <motion.div
      animate={float}
      className="w-60 rounded-2xl bg-ivory p-4 shadow-card sm:w-64"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-display text-sm font-bold text-ink">Business Roadmap</p>
        <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold text-forest-deep">
          58%
        </span>
      </div>
      <p className="mt-0.5 text-[11px] font-medium text-ink/55">Idea → Launch · 4 steps</p>
      <ul className="mt-3 space-y-2">
        {ROADMAP_STEPS.map((step) => (
          <li
            key={step.label}
            className={`flex items-center gap-2 text-xs font-medium ${
              step.state === 'todo' ? 'text-ink/45' : 'text-ink/85'
            }`}
          >
            <StepMarker state={step.state} />
            {step.label}
          </li>
        ))}
      </ul>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink/10">
        <div className="h-full w-[58%] rounded-full bg-lime" />
      </div>
    </motion.div>
  )
}

function ProfileCard({ float }) {
  return (
    <motion.div
      animate={float}
      className="w-56 rounded-2xl bg-forest-deep/90 p-4 ring-1 ring-ivory/15 backdrop-blur-md sm:w-64"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-apricot/20 text-apricot">
          <Store size={18} strokeWidth={1.9} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-ivory">Adaeze Kitchen Ltd</p>
          <p className="text-[11px] font-medium text-ivory/55">Food production · Lagos</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 border-t border-ivory/10 pt-3">
        <BadgeCheck size={14} className="shrink-0 text-lime" />
        <span className="text-[11px] font-medium text-ivory/75">CAC registered · RC 1842907</span>
      </div>
      <div className="mt-2.5 flex gap-2">
        <span className="rounded-full bg-ivory/10 px-2.5 py-1 text-[10px] font-semibold text-ivory/70">
          4.8 rating
        </span>
        <span className="rounded-full bg-ivory/10 px-2.5 py-1 text-[10px] font-semibold text-ivory/70">
          120 orders/mo
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const float = (delay) =>
    reduceMotion
      ? undefined
      : {
          y: [0, -8, 0],
          transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay },
        }

  return (
    <section id="home" className="relative overflow-hidden bg-forest">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-apricot/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-44">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
              From Idea to Business
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl xl:text-[3.75rem]">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                <motion.span
                  className={`block ${i === HEADLINE_LINES.length - 1 ? 'text-lime' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
          >
            SnapBiz helps you discover the right business, understand how to start it, learn what
            you need, and take the right steps from idea to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-lime/90 sm:text-base"
            >
              I Have a Business Idea
              <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#discover"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5 sm:text-base"
            >
              Help Me Find a Business
            </motion.a>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
            className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-lg"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] border border-lime/25"
            />
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-ivory/15">
              <img
                src="/images/hero-founder.jpg"
                alt="Nigerian entrepreneur working on her laptop in a Lagos office"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent"
              />
            </div>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
            className="absolute -left-3 top-6 sm:-left-6 lg:-left-10"
          >
            <RoadmapCard float={float(0)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
            className="absolute -right-2 bottom-6 sm:-right-4 lg:-right-8"
          >
            <ProfileCard float={float(1.8)} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
