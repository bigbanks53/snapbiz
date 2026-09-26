import { motion, useReducedMotion } from 'framer-motion'
import {
  Clock,
  MapPin,
  Palette,
  ScanSearch,
  Wallet,
  Wrench,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

// Example inputs that float around the central profile visual.
const FLOAT_TAGS = [
  { id: 'skills', label: 'Skills', icon: Wrench, tone: 'lime', className: '-left-2 top-8 sm:-left-8', floatDelay: 0, entranceDelay: 0.95 },
  { id: 'capital', label: '₦50k Capital', icon: Wallet, tone: 'lime', className: '-right-2 top-4 sm:-right-8', floatDelay: 1.4, entranceDelay: 1.1 },
  { id: 'ibadan', label: 'Ibadan', icon: MapPin, tone: 'lime', className: '-right-2 top-[46%] sm:-right-8', floatDelay: 2.2, entranceDelay: 1.25 },
  { id: 'creative', label: 'Creative', icon: Palette, tone: 'apricot', className: '-left-2 bottom-24 sm:-left-8', floatDelay: 0.8, entranceDelay: 1.4 },
  // Centered via a full-width flex row (not -translate-x-1/2) so framer-motion's
  // animated transform never fights the CSS centering.
  { id: 'parttime', label: 'Part-time', icon: Clock, tone: 'apricot', className: 'inset-x-0 bottom-0 flex justify-center sm:-bottom-3', floatDelay: 1.9, entranceDelay: 1.55 },
]

const TAG_TONES = {
  lime: 'border-lime/30 bg-forest-deep/90 shadow-[0_14px_34px_-14px_rgba(3,40,36,0.9)]',
  apricot: 'border-apricot/35 bg-forest-deep/90 shadow-[0_14px_34px_-14px_rgba(3,40,36,0.9)]',
}

const TAG_ICON_TONES = {
  lime: 'bg-lime/15 text-lime',
  apricot: 'bg-apricot/15 text-apricot',
}

function FloatTag({ tag, reduceMotion }) {
  const Icon = tag.icon
  return (
    // Outer span handles the one-off entrance; inner span loops the gentle float.
    <motion.div
      className={`absolute z-20 ${tag.className}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.55, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: tag.entranceDelay, ease: EASE }}
    >
      <motion.span
        className="block"
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: tag.floatDelay,
        }}
      >
        <span
          className={`inline-flex items-center gap-2.5 rounded-full border py-2 pl-2 pr-4 backdrop-blur-md sm:py-2.5 sm:pl-2.5 sm:pr-5 ${TAG_TONES[tag.tone]}`}
        >
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full sm:h-8 sm:w-8 ${TAG_ICON_TONES[tag.tone]}`}
          >
            <Icon size={15} strokeWidth={2.1} aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap font-display text-xs font-bold text-ivory sm:text-sm">
            {tag.label}
          </span>
        </span>
      </motion.span>
    </motion.div>
  )
}

function ProfileVisual({ reduceMotion }) {
  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-12 rounded-full bg-lime/[0.07] blur-3xl"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 1.04 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
        className="relative"
      >
        {/* Central panel — the profile the floating inputs feed into */}
        <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[2.5rem] border border-ivory/15 bg-forest-deep/80 shadow-[0_32px_80px_-24px_rgba(3,40,36,0.95)] backdrop-blur-md">
          {/* Radar rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/20"
          />
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[42%] rounded-full border border-lime/40"
              initial={{ x: '-50%', y: '-50%' }}
              animate={{
                x: '-50%',
                y: '-50%',
                scale: [1, 1.5],
                opacity: [0.55, 0],
              }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
          {/* Dot mesh */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
              backgroundSize: '26px 26px',
            }}
          />

          {/* Emblem */}
          <div className="relative flex flex-col items-center px-8 text-center">
            <motion.span
              className="grid h-24 w-24 place-items-center rounded-[1.75rem] border border-lime/35 bg-lime/15 text-lime shadow-[0_0_60px_rgba(217,244,58,0.22)] sm:h-28 sm:w-28"
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ScanSearch size={44} strokeWidth={1.7} aria-hidden="true" />
            </motion.span>
            <p className="mt-6 font-display text-xl font-extrabold tracking-tight text-ivory sm:text-2xl">
              Your profile
            </p>
            <p className="mt-1.5 text-xs font-medium leading-relaxed text-ivory/50 sm:text-sm">
              Assembled from what you share — not a form you sweat over.
            </p>
          </div>
        </div>

        {/* Floating example inputs */}
        {FLOAT_TAGS.map((tag) => (
          <FloatTag key={tag.id} tag={tag} reduceMotion={reduceMotion} />
        ))}
      </motion.div>

      <p className="mt-8 text-center text-xs font-medium text-ivory/40 sm:text-sm">
        Example inputs — what you share shapes what you discover.
      </p>
    </div>
  )
}

export default function DiscoverHero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  const HEADLINE_LINES = [
    "Don't just look for a business.",
    'Find one that',
    'fits your reality.',
  ]

  return (
    <section id="discover-hero" className="relative overflow-hidden bg-forest">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-3xl" />
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
        <div className="grid gap-x-10 gap-y-16 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-x-12 xl:gap-x-16">
          {/* Copy */}
          <div className="min-w-0 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              {...rise(0.15)}
              className="flex items-center justify-center gap-3 lg:justify-start"
            >
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
                Discover a Business
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mt-8 font-display text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-ivory sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
              {HEADLINE_LINES.map((line, i) => {
                const isLast = i === HEADLINE_LINES.length - 1
                return (
                  <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                    <motion.span
                      className={`block ${isLast ? 'text-lime' : ''}`}
                      initial={reduceMotion ? false : { y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.35 + i * 0.12, ease: EASE }}
                    >
                      {line}
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
              Tell SnapBiz about your skills, interests, resources, location, goals, and what
              you&apos;re willing to commit. We&apos;ll help you explore business opportunities
              that align with your situation.
            </motion.p>

          </div>

          {/* Visual with floating example inputs */}
          <div className="min-w-0">
            <ProfileVisual reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  )
}
