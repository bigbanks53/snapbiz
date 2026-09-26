import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Heart, Target, Wallet, Wrench } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const FACTORS = [
  {
    id: 'resources',
    title: 'Your Resources',
    icon: Wallet,
    tone: 'lime',
    items: [
      'Available capital',
      'Equipment',
      'Existing audience',
      'Location',
      'Access to suppliers',
    ],
  },
  {
    id: 'skills',
    title: 'Your Skills',
    icon: Wrench,
    tone: 'apricot',
    items: [
      'Technical skills',
      'Creative skills',
      'Sales',
      'Communication',
      'Management',
      'Professional experience',
    ],
  },
  {
    id: 'interests',
    title: 'Your Interests',
    icon: Heart,
    tone: 'lime',
    items: [
      "Industries you care about",
      "Problems you're interested in solving",
      'Things you enjoy doing',
    ],
  },
  {
    id: 'constraints',
    title: 'Your Constraints',
    icon: Clock,
    tone: 'apricot',
    items: [
      'Available time',
      'Full-time or part-time',
      'Risk tolerance',
      "Whether you're starting alone or with a team",
    ],
  },
  {
    id: 'goals',
    title: 'Your Goals',
    icon: Target,
    tone: 'lime',
    items: [
      'Side income',
      'Full-time business',
      'Scalable company',
      'Local business',
      'Online business',
    ],
  },
]

const BADGE_TONES = {
  lime: 'border-lime/25 bg-lime/10 text-lime',
  apricot: 'border-apricot/30 bg-apricot/10 text-apricot',
}

function FactorCard({ factor, index, reduceMotion }) {
  const Icon = factor.icon

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.09, ease: EASE }}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-forest p-6 text-ivory shadow-card ring-1 ring-forest-deep/20 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
        index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
      } ${index === 2 ? 'sm:col-span-2' : ''}`}
    >
      {/* Ambient glow, revealed on hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          factor.tone === 'lime' ? 'bg-lime/15' : 'bg-apricot/15'
        }`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl border ${BADGE_TONES[factor.tone]}`}
        >
          <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-ivory/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-extrabold tracking-[-0.02em] sm:text-2xl">
        {factor.title}
      </h3>

      <ul className="relative mt-4 space-y-2.5">
        {factor.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-ivory/75"
          >
            <span
              aria-hidden="true"
              className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${
                factor.tone === 'lime' ? 'bg-lime/80' : 'bg-apricot/80'
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function DiscoveryFactors() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section
      id="what-snapbiz-looks-at"
      aria-labelledby="factors-heading"
      className="relative scroll-mt-20 bg-ivory text-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              What does SnapBiz look at?
            </span>
          </motion.div>

          <motion.h2
            id="factors-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Your situation{' '}
            <span className="relative inline-block">
              <span className="relative z-10">matters.</span>
              <span
                aria-hidden="true"
                className="absolute bottom-[0.08em] left-0 right-0 z-0 h-[0.32em] bg-lime/60"
              />
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ink/65 sm:text-lg"
          >
            SnapBiz considers factors such as:
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {FACTORS.map((factor, index) => (
            <FactorCard
              key={factor.id}
              factor={factor}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
