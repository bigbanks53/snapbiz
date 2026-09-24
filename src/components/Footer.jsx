import { ArrowUpRight } from 'lucide-react'

const columns = [
  { title: 'Company', links: ['About', 'Contact', 'Resources'] },
  { title: 'Services', links: ['CAC Registration', 'TIN', 'SMEDAN', 'Trademark', 'NGO Registration', 'SCUML'] },
  { title: 'Support', links: ['FAQs', 'Help Center', 'Contact Support'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          <a href="#home" className="brand brand--footer"><span className="brand-mark" aria-hidden="true"><span>S</span><span>B</span></span><span className="brand-word">SnapBiz</span></a>
          <p>Legal Identity.<br /><em>Simple Process.</em></p>
          <a className="footer-mail" href="mailto:snapbizconsults@gmail.com">snapbizconsults@gmail.com <ArrowUpRight size={14} strokeWidth={1.5} /></a>
        </div>
        <div className="footer-links-grid">
          {columns.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href={link === 'Contact' || link === 'Contact Support' ? 'mailto:snapbizconsults@gmail.com' : `#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>{link}</a>)}</div>)}
        </div>
      </div>
      <div className="container footer-contact"><div><span className="contact-label">Call us</span><a href="tel:+2348110448078">+234 811 044 8078</a></div><div><span className="contact-label">Based in</span><span>Nigeria</span></div><span className="footer-note">For entrepreneurs building the next thing.</span></div>
      <div className="container footer-bottom"><span>© 2026 SnapBiz. All rights reserved.</span><span>Legal Identity. Simple Process.</span></div>
    </footer>
  )
}
