import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { AVAILABILITY, EASE, STAGES, StatusChip } from './howItWorksStages'

const FACTS = [
  { value: '06', label: 'Stages on the path' },
  { value: '03', label: 'Open or preview' },
  { value: '03', label: 'Still being built' },
]

function PathMap() {
  const reduceMotion = useReducedMotion()
  const listRef = useRef(null)
  const lineRef = useRef(null)
  const markerRefs = useRef([])

  useLayoutEffect(() => {
    const position = () => {
      const list = listRef.current
      const line = lineRef.current
      const markers = markerRefs.current.filter(Boolean)
      if (!list || !line || markers.length < 2) return
      const listRect = list.getBoundingClientRect()
      const first = markers[0].getBoundingClientRect()
      const last = markers[markers.length - 1].getBoundingClientRect()
      line.style.left = `${first.left - listRect.left + first.width / 2}px`
      line.style.top = `${first.top - listRect.top + first.height / 2}px`
      line.style.height = `${last.top + last.height / 2 - (first.top + first.height / 2)}px`
      line.style.opacity = '1'
    }
    let cancelled = false
    const safePosition = () => {
      if (!cancelled) position()
    }
    safePosition()
    const observer = new ResizeObserver(safePosition)
    if (listRef.current) observer.observe(listRef.current)
    document.fonts?.ready?.then(safePosition)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-[2rem] border border-lime/20 sm:block"
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest-deep/80 p-5 shadow-card backdrop-blur-md sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/10 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ivory">
              The path
            </p>
            <p className="mt-1 text-xs font-medium text-ivory/45">Six stages · status, not a score</p>
          </div>
          <span className="rounded-full bg-ivory/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ivory/55">
            Map
          </span>
        </div>

        <div ref={listRef} className="relative mt-6">
          <div
            ref={lineRef}
            aria-hidden="true"
            className="pointer-events-none absolute w-px -translate-x-1/2 opacity-0"
          >
            <span className="absolute inset-0 bg-ivory/10" />
            <motion.span
              className="absolute inset-0 origin-top bg-gradient-to-b from-lime to-apricot"
              initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.45, delay: 0.35, ease: EASE }}
            />
          </div>
          <ol>
            {STAGES.map((stage, index) => {
              const meta = AVAILABILITY[stage.availability]
              return (
                <motion.li
                  key={stage.id}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.28 + index * 0.07, ease: EASE }}
                >
                  <a
                    href={`#stage-${stage.id}`}
                    className="group relative flex items-center gap-3 rounded-xl py-2.5 pr-1 transition-colors hover:bg-ivory/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    <span
                      ref={(el) => {
                        markerRefs.current[index] = el
                      }}
                      className={`relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border bg-forest-deep ${
                        stage.availability === 'available'
                          ? 'border-lime text-forest-deep'
                          : stage.availability === 'preview'
                            ? 'border-apricot text-apricot'
                            : 'border-ivory/25 text-ivory/45'
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${meta.dotOnDark}`} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline gap-2">
                        <span className="font-mono text-[10px] font-semibold text-ivory/35">
                          {stage.step}
                        </span>
                        <span className="truncate font-display text-sm font-bold text-ivory transition-colors group-hover:text-lime">
                          {stage.label}
                        </span>
                      </span>
                    </span>
                    <StatusChip availability={stage.availability} className="shrink-0" />
                  </a>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <p className="relative mt-4 border-t border-ivory/10 pt-4 text-xs font-medium leading-relaxed text-ivory/45">
          Dot color is what is built. The line on the next section follows your scroll — it is not
          a completion score.
        </p>
      </div>
    </div>
  )
}

export default function HowItWorksHero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-forest">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-apricot/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <motion.div {...rise(0.12)} className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
            How It Works
          </span>
        </motion.div>

        <h1 className="mt-6 max-w-5xl font-display text-[2.15rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem]">
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.16em]">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            >
              From idea to business,
            </motion.span>
          </span>
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.16em]">
            <motion.span
              className="block text-lime"
              initial={reduceMotion ? false : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            >
              one clear path.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.p
              {...rise(0.5)}
              className="max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
            >
              SnapBiz guides you through every stage of building a business, whether you&apos;re
              starting with an idea or starting from scratch.
            </motion.p>

            <motion.p
              {...rise(0.62)}
              className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/50 sm:text-base"
            >
              Three stages you can use or preview today. Three are still being built. The path
              below is the whole product — including the parts that are not live yet.
            </motion.p>

            <motion.ul {...rise(0.74)} className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
              {FACTS.map((fact) => (
                <li key={fact.label} className="border-t border-ivory/15 pt-3">
                  <p className="font-display text-2xl font-extrabold tracking-tight text-ivory sm:text-3xl">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-ivory/45 sm:text-xs">
                    {fact.label}
                  </p>
                </li>
              ))}
            </motion.ul>

            <motion.div {...rise(0.86)} className="mt-8">
              <a
                href="#the-journey"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-lime transition-colors hover:text-lime/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              >
                Scroll the six stages
                <ArrowDown
                  size={16}
                  strokeWidth={2.25}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          <motion.div {...rise(0.55)} className="lg:col-span-7">
            <PathMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
