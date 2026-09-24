import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="SnapBiz home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span>S</span><span>B</span></span>
          <span className="brand-word">SnapBiz</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? 'desktop-nav--open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="#login">Login</a>
          <a className="button button--small button--lime" href="#get-started">Get Started <span aria-hidden="true">↗</span></a>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} strokeWidth={1.7} /> : <Menu size={22} strokeWidth={1.7} />}
        </button>
      </div>
    </header>
  )
}
