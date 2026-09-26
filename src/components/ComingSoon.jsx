import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Simple placeholder for routes that do not have real content yet.
 * Renders the page name as a heading plus a "Coming soon" line.
 */
export default function ComingSoon({ title, message = 'Coming soon' }) {
  useDocumentTitle(`${title} — Coming Soon | SnapBiz`)

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-forest">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 right-[-12%] h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="absolute bottom-[-22%] left-[-12%] h-[32rem] w-[32rem] rounded-full bg-apricot/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span aria-hidden="true" className="h-px w-10 bg-lime" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-lime">
            SnapBiz
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          {message}
        </motion.p>
      </div>
    </main>
  )
}
