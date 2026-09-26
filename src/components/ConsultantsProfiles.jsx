import { motion, useReducedMotion } from 'framer-motion'
import { Eye, Info } from 'lucide-react'
import { EASE, EXAMPLE_PROFILES } from './consultantsData'

function ExampleCard({ profile, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.08, ease: EASE }}
      className="relative flex min-h-[21rem] flex-col overflow-hidden rounded-[1.5rem] border border-dashed border-ink/25 bg-ivory p-6 transition-colors duration-300 hover:border-forest/40 sm:p-7"
      aria-label={`${profile.role} — ${profile.label}`}
    >
      {/* Blueprint dots — the card is a drawing of a profile, not a profile */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #18332F 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        {/* Empty placeholder avatar — deliberately not a photo of anyone */}
        <span
          aria-hidden="true"
          className="grid h-12 w-12 place-items-center rounded-full border border-dashed border-forest/30 bg-forest/[0.05]"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full border border-dashed border-forest/25" />
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-ink/30">
          EXAMPLE {profile.step}
        </span>
      </div>

      {/* Status chip — says plainly that this is not a real person */}
      <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-ink/25 bg-transparent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65">
        <Eye size={11} strokeWidth={2.4} aria-hidden="true" />
        {profile.label}
      </span>

      <h3 className="relative mt-4 font-display text-[1.3rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
        {profile.role}
      </h3>

      <div className="relative mt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">
          Focus areas
        </p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label={`${profile.role} focus areas`}>
          {profile.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-forest/20 bg-forest/[0.05] px-2.5 py-1 text-[11px] font-semibold text-ink/70"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto pt-6">
        <div className="border-t border-dashed border-ink/20 pt-5">
          <motion.button
            type="button"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-forest/35 bg-transparent px-5 py-2.5 text-sm font-bold text-forest transition-colors hover:border-forest/60 hover:bg-forest/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            aria-label={`View profile for the example ${profile.role} (preview only — consultant profiles are not available yet)`}
          >
            View Profile
          </motion.button>
          <p className="mt-2.5 text-center text-[11px] font-medium text-ink/45">
            Nothing to view yet — profiles aren&apos;t live.
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ConsultantsProfiles() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-8% 0px' },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section
      id="profile-preview"
      aria-labelledby="profile-preview-heading"
      className="relative scroll-mt-20 bg-ivory text-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              Profile preview
            </span>
          </motion.div>

          <motion.h2
            id="profile-preview-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Three example profiles.{' '}
            <span className="text-ink/45">None of them are real people.</span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ink/65 sm:text-lg"
          >
            These cards illustrate the kinds of professionals SnapBiz plans to connect you with.
            They are mock examples only — SnapBiz does not have consultant profiles on the platform
            today, and there is no directory to browse yet.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLE_PROFILES.map((profile, index) => (
            <ExampleCard key={profile.id} profile={profile} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>

        <motion.div {...reveal(0.1)} className="mt-8 flex items-start justify-center gap-2.5 sm:mt-10">
          <Info size={15} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-forest/60" />
          <p className="max-w-2xl text-xs font-medium leading-relaxed text-ink/55 sm:text-sm">
            Every card above is an illustration, not a listing. SnapBiz will replace these examples
            with real consultant profiles if and when the feature launches.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
