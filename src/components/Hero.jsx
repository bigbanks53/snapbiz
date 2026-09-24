import { ArrowRight, Check, Circle } from 'lucide-react'

function StatusCard({ label, status, done, className }) {
  return (
    <div className={`status-card ${className || ''}`}>
      <div className="status-card__topline">
        <span>{label}</span>
        <span className={`status-dot ${done ? 'status-dot--done' : ''}`} aria-hidden="true">
          {done ? <Check size={10} strokeWidth={3} /> : <Circle size={9} strokeWidth={1.8} />}
        </span>
      </div>
      <small>{status}</small>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal reveal--up">
          <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> Business setup, simplified</p>
          <h1>Build your business with the <em>right foundation.</em></h1>
          <p className="hero-summary">From registration to compliance, SnapBiz helps Nigerian entrepreneurs understand what they need and get it done without the confusion.</p>
          <div className="hero-actions">
            <a className="button button--lime" href="#get-started">Get Started <span aria-hidden="true">↗</span></a>
            <a className="text-link text-link--light" href="#services">Explore Services <ArrowRight size={16} strokeWidth={1.5} /></a>
          </div>
          <p className="hero-trust"><span className="trust-mark" aria-hidden="true">✦</span> Built for entrepreneurs, startups and businesses across Nigeria.</p>
        </div>

        <div className="hero-visual reveal reveal--right">
          <div className="hero-image-frame">
            <img src="/images/hero-founder.jpg" alt="Nigerian entrepreneur working in a modern office" />
            <div className="hero-image-wash" aria-hidden="true" />
            <span className="image-caption">Lagos · Founder workspace</span>
          </div>
          <StatusCard label="Business Name" status="Completed" done className="status-card--name" />
          <StatusCard label="TIN" status="Completed" done className="status-card--tin" />
          <StatusCard label="Trademark" status="In progress" className="status-card--trademark" />
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
        </div>
      </div>
      <div className="hero-bottom-rule container" aria-hidden="true"><span /> <span /></div>
    </section>
  )
}
