import { motion, useReducedMotion } from 'framer-motion'
import { Info } from 'lucide-react'
import { COURSES, EASE } from './learnCourses'

/**
 * Panel preview of the future learning library. It lists the planned courses
 * with "Planned" tags and empty slots — nothing here is live, and
 * the panel says so in as many places as it can.
 */
function LibraryPanel({ reduceMotion }) {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] border border-lime/20 sm:block"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
        className="relative overflow-hidden rounded-[2rem] border border-ivory/15 bg-forest-deep/80 p-5 shadow-card backdrop-blur-md sm:p-7"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-apricot/10 blur-3xl"
        />

        <div className="relative flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ivory">
              Future learning library
            </p>
            <p className="mt-1 text-xs font-medium text-ivory/45">Planned courses · status, not a syllabus</p>
          </div>
          <span className="rounded-full bg-ivory/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ivory/55">
            Preview
          </span>
        </div>

        <ul className="relative mt-6 space-y-3">
          {COURSES.map((course, index) => (
            <motion.li
              key={course.id}
              initial={reduceMotion ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.09, ease: EASE }}
              className="flex items-center gap-3 rounded-xl border border-dashed border-ivory/15 bg-ivory/[0.03] px-3.5 py-3"
            >
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-dashed border-ivory/30"
              >
                <span className="h-2 w-2 rounded-full bg-ivory/25" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] font-semibold text-ivory/35">{course.step}</span>
                  <span className="font-display text-sm font-bold leading-snug text-ivory/90">
                    {course.title}
                  </span>
                </span>
              </span>
              <span className="shrink-0 rounded-full border border-ivory/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-ivory/50">
                Planned
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="relative mt-6 border-t border-ivory/10 pt-5">
          <div className="flex items-center justify-between gap-4 text-xs font-medium">
            <span className="text-ivory/45">Courses live today</span>
            <span className="font-mono font-semibold text-ivory/70">00 / {String(COURSES.length).padStart(2, '0')}</span>
          </div>
          {/* One empty slot per planned course — nothing filled in yet */}
          <div aria-hidden="true" className="mt-3 flex gap-1.5">
            {COURSES.map((course) => (
              <span
                key={course.id}
                className="h-2 flex-1 rounded-full border border-dashed border-ivory/25"
              />
            ))}
          </div>
          <p className="mt-3 text-[11px] font-medium leading-relaxed text-ivory/40">
            Nothing is built yet — the slots are empty because there are no lessons to show.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function LearnHero() {
  const reduceMotion = useReducedMotion()

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section id="learn-hero" className="relative overflow-hidden bg-forest text-ivory">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-[110px]" />
        <div className="absolute -bottom-48 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-apricot/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #F5F3EA 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-44">
        {/* Copy */}
        <div className="min-w-0 lg:col-span-7">
          <motion.div {...rise(0.12)} className="flex flex-wrap items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-lime" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-lime sm:text-xs">
              Learn
            </span>
            <span className="rounded-full border border-lime/25 bg-lime/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime sm:text-[11px]">
              Future Feature · Coming Soon
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.3)}
            className="mt-7 text-balance font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-ivory sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Sometimes the next step is <span className="text-lime">learning.</span>
          </motion.h1>

          <motion.p
            {...rise(0.48)}
            className="mt-6 max-w-xl text-base leading-[1.7] text-ivory/70 sm:text-lg"
          >
            A good business idea is only the beginning. The right knowledge can make the difference
            between having an idea and being able to execute it.
          </motion.p>

          <motion.div {...rise(0.6)} className="mt-8 flex items-start gap-2.5">
            <Info size={15} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-apricot" />
            <p className="max-w-lg text-xs font-medium leading-relaxed text-ivory/55 sm:text-sm">
              This page is a preview of a future feature. No courses exist yet, so there is nothing
              to enroll in, watch, or buy here.
            </p>
          </motion.div>
        </div>

        {/* Panel */}
        <div className="lg:col-span-5">
          <LibraryPanel reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  )
}
