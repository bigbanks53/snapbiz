import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

// Links without `to` point to pages not built yet and render as non-functional.
const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Discover', to: '/discover' },
      { label: 'Idea', to: '/idea' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Learn', to: '/learn' },
      { label: 'Services', to: '/services' },
      { label: 'Consultants', to: '/consultants' },
    ],
  },
  { title: 'Company', links: [{ label: 'About' }, { label: 'Contact' }, { label: 'Resources' }] },
  { title: 'Support', links: [{ label: 'FAQs' }, { label: 'Help Center' }] },
  { title: 'Legal', links: [{ label: 'Privacy Policy' }, { label: 'Terms of Service' }] },
]

const linkClass =
  'text-sm text-ivory/60 transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime'

export default function Footer() {
  return (
    <footer className="relative bg-[#032824] text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ivory/10" />
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="SnapBiz home">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime font-display text-lg font-extrabold text-forest-deep">
                S
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-ivory">
                Snap<span className="text-lime">Biz</span>
              </span>
            </Link>
            <p className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-ivory/85">From idea to business.</p>

            <ul className="mt-8 space-y-3 text-sm text-ivory/60">
              <li>
                <a href="mailto:snapbizconsults@gmail.com" className="inline-flex items-center gap-3 hover:text-ivory">
                  <Mail size={16} className="text-lime/80" aria-hidden="true" />
                  snapbizconsults@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2348110448078" className="inline-flex items-center gap-3 hover:text-ivory">
                  <Phone size={16} className="text-lime/80" aria-hidden="true" />
                  +234 811 044 8078
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin size={16} className="text-lime/80" aria-hidden="true" />
                Nigeria
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime/80">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className={linkClass}>
                          {link.label}
                        </Link>
                      ) : (
                        <span className="cursor-default text-sm text-ivory/60" aria-disabled="true">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SnapBiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
