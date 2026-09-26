import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Shared shell for the auth pages (sign up / log in) so both match the rest
 * of the site: Deep Forest Green background, Warm Ivory type, Electric Lime
 * accents, Manrope display headings.
 */
export default function AuthLayout({ documentTitle, eyebrow, heading, lede, children }) {
  useDocumentTitle(documentTitle)

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-forest">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-apricot/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-lime" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
                {eyebrow}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-[3.5rem]">
              {heading}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              {lede}
            </p>
          </motion.div>

          {/* Form card column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="rounded-[2rem] border border-ivory/10 bg-forest-deep/80 p-7 shadow-card backdrop-blur-sm sm:p-9"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
