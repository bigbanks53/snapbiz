import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ClipboardList, Compass, Route, Scale, UserRound } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1]

const STEPS = [
  {
    id: 'tell-us',
    step: '01',
    railLabel: 'Tell Us',
    title: 'Tell us about yourself',
    description:
      'Answer a few questions about your resources, skills, interests, location and goals.',
    icon: ClipboardList,
  },
  {
    id: 'build-profile',
    step: '02',
    railLabel: 'Profile',
    title: 'Build your profile',
    description:
      'SnapBiz organizes your answers into a business profile that represents your current situation.',
    icon: UserRound,
  },
  {
    id: 'explore',
    step: '03',
    railLabel: 'Explore',
    title: 'Explore opportunities',
    description:
      'Discover business models and opportunities that may align with your profile.',
    icon: Compass,
  },
  {
    id: 'understand-fit',
    step: '04',
    railLabel: 'Understand',
    title: 'Understand the fit',
    description:
      "See why each opportunity may fit, what you'll need, what could be difficult, and what you should investigate.",
    icon: Scale,
  },
  {
    id: 'choose',
    step: '05',
    railLabel: 'Choose',
    title: 'Choose what to explore',
    description:
      'Select an opportunity and move into a deeper business roadmap.',
    icon: Route,
  },
]

/** Line head sits a little below the middle of the viewport as the page scrolls. */
const DRAW_AT = 0.62

function stepState(index, activeIndex) {
  if (index < activeIndex) return 'done'
  if (index === activeIndex) return 'active'
  return 'todo'
}

function markerClass(state, reduceMotion) {
  if (reduceMotion) return 'border-lime/40 bg-forest-deep text-ivory'
  if (state === 'done') return 'border-lime bg-lime text-forest-deep'
  if (state === 'active') return 'border-apricot bg-forest-deep text-apricot'
  return 'border-ivory/25 bg-forest-deep text-ivory/45'
}

function Marker({ markerRef, state, step, reduceMotion }) {
  const active = state === 'active' && !reduceMotion
  return (
    <span
      ref={markerRef}
      className={`relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 font-mono text-[11px] font-bold transition-colors duration-300 ${markerClass(
        state,
        reduceMotion,
      )}`}
    >
      {active && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-apricot/70"
          animate={{ scale: [1, 1.65], opacity: [0.75, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
      {step}
    </span>
  )
}

export default function DiscoverJourney() {
  const reduceMotion = useReducedMotion()
  const trackRef = useRef(null)
  const markerRefs = useRef([])
  const trackLineRef = useRef(null)
  const drawnLineRef = useRef(null)
  const headRef = useRef(null)
  const railFillRef = useRef(null)
  const mobileFillRef = useRef(null)
  const activeRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const markers = markerRefs.current.filter(Boolean)
      if (!track || markers.length < 2) return

      const trackRect = track.getBoundingClientRect()
      const centers = markers.map((el) => {
        const rect = el.getBoundingClientRect()
        return rect.top - trackRect.top + rect.height / 2
      })
      const start = centers[0]
      const max = Math.max(1, centers[centers.length - 1] - start)
      const traveled = window.innerHeight * DRAW_AT - trackRect.top - start
      const drawn = reduceMotion ? max : Math.min(max, Math.max(0, traveled))
      const left =
        markers[0].getBoundingClientRect().left - trackRect.left + markers[0].offsetWidth / 2

      if (trackLineRef.current) {
        trackLineRef.current.style.opacity = '1'
        trackLineRef.current.style.left = `${left}px`
        trackLineRef.current.style.top = `${start}px`
        trackLineRef.current.style.height = `${max}px`
      }
      if (drawnLineRef.current) {
        drawnLineRef.current.style.height = `${drawn}px`
      }

      const ratio = `${(drawn / max) * 100}%`
      if (railFillRef.current) railFillRef.current.style.width = ratio
      if (mobileFillRef.current) mobileFillRef.current.style.width = ratio

      if (headRef.current) {
        const drawing = !reduceMotion && drawn > 16 && drawn < max - 12
        headRef.current.style.opacity = drawing ? '1' : '0'
        headRef.current.style.left = `${left}px`
        headRef.current.style.top = `${start + drawn}px`
      }

      let next = 0
      if (!reduceMotion) {
        centers.forEach((center, index) => {
          if (start + drawn >= center - 20) next = index
        })
      }
      if (next !== activeRef.current) {
        activeRef.current = next
        setActiveIndex(next)
      }
    }

    let cancelled = false
    const safeMeasure = () => {
      if (!cancelled) measure()
    }

    safeMeasure()
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(safeMeasure)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const observer = new ResizeObserver(onScroll)
    if (trackRef.current) observer.observe(trackRef.current)
    document.fonts?.ready?.then(safeMeasure)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer.disconnect()
    }
  }, [reduceMotion])

  const active = STEPS[activeIndex]

  return (
    <section
      id="how-discovery-works"
      aria-labelledby="discovery-flow-heading"
      className="relative scroll-mt-20 bg-forest-deep text-ivory"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-lime/[0.07] blur-[110px]" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-apricot/[0.08] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <div className="max-w-[46rem]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-lime sm:text-xs">
              How Discovery Works
            </span>
          </motion.div>

          <motion.h2
            id="discovery-flow-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            From your situation to{' '}
            <span className="text-lime">your shortlist</span>, in five steps.
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ivory/70 sm:text-lg"
          >
            Scroll the sequence. Each step builds on the one before it — from what you share to
            the opportunity you choose to explore.
          </motion.p>
        </div>
      </div>

      {/* Sticky progress rail */}
      <div className="sticky top-16 z-30 mt-10 border-y border-ivory/10 bg-forest-deep sm:mt-14">
        <div className="mx-auto max-w-7xl px-5 py-3.5 sm:px-8 sm:py-4">
          <div
            className="sr-only"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={STEPS.length}
            aria-valuenow={reduceMotion ? STEPS.length : activeIndex + 1}
            aria-valuetext={
              reduceMotion
                ? 'Five steps. Scroll position is not tracked.'
                : `${active.title}, step ${activeIndex + 1} of ${STEPS.length}`
            }
            aria-label="Position along the discovery flow"
          />
          <p className="sr-only" aria-live="polite">
            {reduceMotion
              ? 'Five steps in the discovery flow.'
              : `${active.title}, step ${activeIndex + 1} of ${STEPS.length}`}
          </p>

          {/* Compact readout on mobile */}
          <div className="md:hidden">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/40">
                  Discovery flow
                </p>
                <p className="truncate font-display text-lg font-extrabold tracking-tight text-lime">
                  {reduceMotion ? 'Five steps' : active.title}
                </p>
              </div>
              <p className="shrink-0 font-mono text-xs text-ivory/50">
                {active.step}/{String(STEPS.length).padStart(2, '0')}
              </p>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-ivory/10" aria-hidden="true">
              <div ref={mobileFillRef} className="h-full w-0 rounded-full bg-lime" />
            </div>
            <ol className="mt-3 flex justify-between">
              {STEPS.map((step, index) => {
                const state = stepState(index, activeIndex)
                return (
                  <li key={step.id}>
                    <a
                      href={`#step-${step.id}`}
                      aria-label={`Step ${step.step}: ${step.title}`}
                      aria-current={state === 'active' && !reduceMotion ? 'step' : undefined}
                      className={`grid h-8 w-8 place-items-center rounded-full border font-mono text-[10px] font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${markerClass(
                        state,
                        reduceMotion,
                      )}`}
                    >
                      {index + 1}
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* Dot rail with labels on larger screens */}
          <div className="relative hidden md:block">
            <div className="pointer-events-none absolute left-[calc(100%/10)] right-[calc(100%/10)] top-4 h-[2px] -translate-y-1/2 rounded-full bg-ivory/10">
              <div ref={railFillRef} className="h-full w-0 rounded-full bg-gradient-to-r from-lime to-apricot" />
            </div>
            <ol className="relative grid grid-cols-5">
              {STEPS.map((step, index) => {
                const state = stepState(index, activeIndex)
                const current = state === 'active' && !reduceMotion
                return (
                  <li key={step.id} className="flex justify-center">
                    <a
                      href={`#step-${step.id}`}
                      aria-current={current ? 'step' : undefined}
                      className="group flex flex-col items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                    >
                      <span
                        className={`relative z-10 grid h-8 w-8 place-items-center rounded-full border-2 font-mono text-[10px] font-bold transition-colors duration-300 ${markerClass(
                          state,
                          reduceMotion,
                        )}`}
                      >
                        {step.step}
                      </span>
                      <span
                        className={`text-[11px] font-semibold tracking-tight transition-colors duration-300 ${
                          current
                            ? 'text-lime'
                            : state === 'done' && !reduceMotion
                              ? 'text-ivory'
                              : 'text-ivory/45 group-hover:text-ivory/80'
                        }`}
                      >
                        {step.railLabel}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Steps track */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-10 lg:pb-32">
        <div className="relative z-0 overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest/75 shadow-[0_32px_80px_-24px_rgba(3,40,36,0.95)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ivory/10 px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-lime" />
              <span className="font-display text-xs font-bold uppercase tracking-wider sm:text-sm">
                The discovery flow
              </span>
              <span className="hidden rounded-full border border-ivory/15 px-2.5 py-0.5 text-[11px] font-semibold text-ivory/55 sm:inline-block">
                {reduceMotion ? 'Five steps' : 'Scroll draws the line'}
              </span>
            </div>
            <span className="font-mono text-xs text-ivory/60 sm:text-sm">
              {active.step}/{String(STEPS.length).padStart(2, '0')}
              {!reduceMotion && (
                <span className="ml-3 hidden font-display text-sm font-bold tracking-normal text-lime md:inline">
                  {active.railLabel}
                </span>
              )}
            </span>
          </div>

          <ol ref={trackRef} className="relative px-5 py-8 sm:px-8 sm:py-10">
            <div
              ref={trackLineRef}
              aria-hidden="true"
              className="pointer-events-none absolute z-0 w-[3px] -translate-x-1/2 rounded-full bg-ivory/15 opacity-0"
            >
              <div
                ref={drawnLineRef}
                className="w-full rounded-full bg-gradient-to-b from-lime via-lime to-apricot shadow-[0_0_16px_rgba(217,244,58,0.45)]"
                style={{ height: 0 }}
              />
            </div>
            <span
              ref={headRef}
              aria-hidden="true"
              className="pointer-events-none absolute z-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime opacity-0 shadow-[0_0_18px_rgba(217,244,58,0.95)]"
            />

            {STEPS.map((step, index) => {
              const state = stepState(index, activeIndex)
              const Icon = step.icon
              const isActive = state === 'active' && !reduceMotion
              return (
                <li
                  key={step.id}
                  id={`step-${step.id}`}
                  className="relative z-10 flex scroll-mt-52 gap-4 pb-14 last:pb-0 sm:gap-6 sm:pb-20 md:scroll-mt-40"
                >
                  <div className="w-11 shrink-0 pt-6 sm:pt-8 lg:pt-10">
                    <Marker
                      markerRef={(el) => {
                        markerRefs.current[index] = el
                      }}
                      state={state}
                      step={step.step}
                      reduceMotion={reduceMotion}
                    />
                  </div>

                  <motion.article
                    className={`relative min-w-0 flex-1 overflow-hidden rounded-[1.75rem] border p-6 transition-[border-color,background-color,box-shadow] duration-500 sm:p-8 lg:p-10 ${
                      isActive
                        ? 'border-lime/40 bg-forest-deep shadow-[0_24px_70px_-32px_rgba(217,244,58,0.45)]'
                        : 'border-ivory/12 bg-forest-deep/80'
                    }`}
                    initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-lime sm:inset-y-8"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-1 -top-4 font-display text-[5rem] font-extrabold leading-none text-ivory/[0.045] sm:text-[7rem]"
                    >
                      {step.step}
                    </span>
                    <div className="relative grid gap-5 lg:grid-cols-12 lg:gap-10">
                      <div className="lg:col-span-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="grid h-11 w-11 place-items-center rounded-xl border border-lime/20 bg-lime/10 text-lime">
                            <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-ivory/40">
                            Step {step.step} / {String(STEPS.length).padStart(2, '0')}
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-[1.85rem] font-extrabold leading-none tracking-[-0.03em] text-ivory sm:text-4xl">
                          {step.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-7 lg:pt-1">
                        <p className="max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <span className="sr-only">
                      {reduceMotion
                        ? ''
                        : isActive
                          ? 'Current step while scrolling. '
                          : state === 'done'
                            ? 'Line has reached this step. '
                            : 'Further along the flow. '}
                    </span>
                  </motion.article>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {!reduceMotion && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ivory/55">
                <li className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                  Line has passed
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-apricot" />
                  Reading now
                </li>
                <li className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-ivory/30" />
                  Still ahead
                </li>
              </ul>
            )}
            <p className="mt-3 max-w-xl text-xs font-medium leading-relaxed text-ivory/55 sm:text-sm">
              {reduceMotion
                ? 'Five steps make up the discovery flow, from your first answer to the roadmap you explore.'
                : 'That line follows your scroll. It marks where you are in the flow — not how far you have to go.'}
            </p>
          </div>
          <p className="shrink-0 text-xs font-medium text-ivory/40 sm:text-sm">
            Future feature preview — the full discovery flow isn&apos;t open yet.
          </p>
        </div>
      </div>
    </section>
  )
}
