import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Info, Lock } from 'lucide-react'
import { COURSES, EASE } from './learnCourses'

function CourseCard({ course, index, reduceMotion }) {
  const Icon = course.icon

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.08, ease: EASE }}
      className="relative flex min-h-[20rem] flex-col overflow-hidden rounded-[1.5rem] border border-dashed border-ink/25 bg-ivory p-6 transition-colors duration-300 hover:border-forest/40 sm:p-7"
    >
      {/* Blueprint dots — the card is a drawing of a course, not a course */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #18332F 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-dashed border-forest/30 bg-forest/[0.05] text-forest/70">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-ink/30">
          {course.step}
        </span>
      </div>

      {/* Status chip — the same "coming soon" treatment used across the site */}
      <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-ink/25 bg-transparent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65">
        <Clock size={11} strokeWidth={2.4} aria-hidden="true" />
        {course.status}
      </span>

      <h3 className="relative mt-4 font-display text-[1.3rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
        {course.title}
      </h3>
      <p className="relative mt-3 text-sm leading-[1.65] text-ink/60">{course.description}</p>

      <div className="relative mt-auto border-t border-dashed border-ink/20 pt-5">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/55">
          <Lock size={12} strokeWidth={2.2} aria-hidden="true" />
          Not enrollable yet
        </p>
        <p className="mt-1.5 text-[11px] font-medium text-ink/45">Future learning library</p>
      </div>
    </motion.article>
  )
}

export default function LearnCourseGrid() {
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
      id="course-preview"
      aria-labelledby="course-preview-heading"
      className="relative scroll-mt-20 bg-ivory text-ink"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/10" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="max-w-[46rem]">
          <motion.div {...reveal(0)} className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-forest/30" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-forest/60 sm:text-xs">
              Course preview
            </span>
          </motion.div>

          <motion.h2
            id="course-preview-heading"
            {...reveal(0.08)}
            className="mt-6 font-display text-[2rem] font-[800] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.75rem] lg:text-[3.4rem]"
          >
            Four courses are on the roadmap.{' '}
            <span className="text-ink/45">None of them are open.</span>
          </motion.h2>

          <motion.p
            {...reveal(0.16)}
            className="mt-6 max-w-[40rem] text-base leading-[1.7] text-ink/65 sm:text-lg"
          >
            These are the subjects SnapBiz plans to build first. The cards describe what may come —
            there are no lessons, no pricing, no release dates, and no way to enroll in any of them
            today.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>

        <motion.div {...reveal(0.1)} className="mt-8 flex items-start justify-center gap-2.5 sm:mt-10">
          <Info size={15} strokeWidth={2} aria-hidden="true" className="mt-0.5 shrink-0 text-forest/60" />
          <p className="max-w-2xl text-xs font-medium leading-relaxed text-ink/55 sm:text-sm">
            Every card above is a plan, not a product. SnapBiz will update this page when a course is
            actually built and open to learners.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
