import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  FileCheck2,
  Globe2,
  Landmark,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

const services = [
  { number: '01', title: 'CAC Registration', text: 'Business Name and Company registration, made easier to understand.', icon: Building2, className: 'service-card--feature' },
  { number: '02', title: 'TIN', text: 'Tax identification support for the next stage of your business.', icon: FileCheck2, className: 'service-card--tall' },
  { number: '03', title: 'SMEDAN', text: 'Business registration and support for growing enterprises.', icon: Landmark, className: '' },
  { number: '04', title: 'Trademark', text: 'Protect the brand identity you are building.', icon: ShieldCheck, className: '' },
  { number: '05', title: 'NGO Registration', text: 'Support for eligible organizations and incorporated trustees.', icon: UsersRound, className: 'service-card--wide' },
  { number: '06', title: 'SCUML', text: 'Support for businesses where applicable.', icon: BadgeCheck, className: '' },
  { number: '07', title: 'Export Services', text: 'Guidance for export-related requirements.', icon: Globe2, className: '' },
  { number: '08', title: 'Business Documentation', text: 'Additional documents and practical business support.', icon: BookOpen, className: '' },
]

export default function Services() {
  return (
    <section className="section section--ink services-section" id="services">
      <div className="container">
        <div className="section-intro section-intro--split reveal reveal--up">
          <div>
            <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> Services</p>
            <h2>Everything you need to establish your business.</h2>
          </div>
          <p className="section-lede section-lede--light">From registration to documentation and brand protection, access the services relevant to your business.</p>
        </div>

        <div className="services-grid">
          {services.map(({ number, title, text, icon: Icon, className }) => (
            <article className={`service-card ${className} reveal reveal--up`} key={title}>
              <div className="service-card__meta"><span>{number}</span><Icon size={20} strokeWidth={1.35} /></div>
              <div className="service-card__body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a href="#get-started" className="round-arrow" aria-label={`Learn more about ${title}`}><ArrowUpRight size={17} strokeWidth={1.5} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
