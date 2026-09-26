import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

// `to` values are router locations: page routes (e.g. /idea) or home-page
// sections (/#discover). Section links work from any page — ScrollManager
// scrolls to the #hash once the home page has rendered.
const NAV_LINKS = [
  { label: 'Discover', to: '/#discover' },
  { label: 'Idea', to: '/idea', page: true },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Learn', to: '/#learn' },
  { label: 'Services', to: '/#services' },
  { label: 'Consultants', to: '/#consultants' },
]

const EASE = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        solid
          ? 'border-b border-ivory/10 bg-forest-deep/95 shadow-lg shadow-forest-deep/40 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className={`relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 sm:px-8 ${
          solid ? 'h-16' : 'h-20'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
          aria-label="SnapBiz home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime font-display text-lg font-extrabold text-forest-deep">
            S
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ivory">
            Snap<span className="text-lime">Biz</span>
          </span>
        </Link>

        {/* Center links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `group relative text-sm font-medium transition-colors hover:text-ivory ${
                    link.page && isActive ? 'text-ivory' : 'text-ivory/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1.5 left-0 h-px bg-lime transition-all duration-300 group-hover:w-full ${
                        link.page && isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/#login"
            className="text-sm font-medium text-ivory/70 transition-colors hover:text-ivory"
          >
            Log in
          </Link>
          <Link
            to="/#get-started"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-forest-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-lime/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="grid h-10 w-10 place-items-center rounded-lg text-ivory transition-colors hover:bg-ivory/10 lg:hidden"
        >
          {open ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-ivory/10 bg-forest-deep lg:hidden"
          >
            <ul className="space-y-1 px-5 py-6 sm:px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.05, ease: EASE }}
                >
                  <NavLink
                    to={link.to}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 font-display text-lg font-semibold transition-colors hover:bg-ivory/5 hover:text-ivory ${
                        link.page && isActive ? 'bg-ivory/5 text-lime' : 'text-ivory/85'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-3 border-t border-ivory/10 px-5 py-5 sm:px-8">
              <Link
                to="/#login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-ivory/25 px-5 py-3 text-center text-sm font-semibold text-ivory transition-colors hover:bg-ivory/5"
              >
                Log in
              </Link>
              <Link
                to="/#get-started"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-lime px-5 py-3 text-center text-sm font-semibold text-forest-deep"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
