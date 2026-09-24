import { ArrowRight, Check } from 'lucide-react'

const plans = [
  { title: 'Business Name', price: '₦35,000', description: 'A simple starting point for many new businesses.', items: ['Name availability guidance', 'Registration support', 'Digital document organisation'], featured: false },
  { title: 'Company Registration', price: '₦70,000', description: 'For businesses ready for a more formal structure.', items: ['Company registration support', 'Information and document checklist', 'Progress visibility'], featured: true },
  { title: 'NGO / Incorporated Trustees', price: '₦140,000', description: 'Support for eligible organisations and their setup process.', items: ['Application preparation support', 'Document organisation', 'Clear next-step guidance'], featured: false },
]

export default function Pricing() {
  return (
    <section className="section section--paper pricing-section">
      <div className="container">
        <div className="pricing-heading reveal reveal--up">
          <div><p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> Service pricing</p><h2>Choose the service that fits your business.</h2></div>
          <p className="pricing-disclaimer">SnapBiz service prices / starting prices.<br /><strong>Government fees and third-party charges may vary.</strong></p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? 'price-card--featured' : ''} reveal reveal--up`} key={plan.title}>
              {plan.featured && <span className="price-badge">Most requested</span>}
              <div className="price-card__top"><span className="price-number">0{plans.indexOf(plan) + 1}</span><span className="price-type">SnapBiz service price</span></div>
              <h3>{plan.title}</h3>
              <div className="price"><span className="price-prefix">From</span>{plan.price}</div>
              <p>{plan.description}</p>
              <div className="price-card__rule" />
              <ul>{plan.items.map((item) => <li key={item}><Check size={14} strokeWidth={2.2} />{item}</li>)}</ul>
              <a className={`button ${plan.featured ? 'button--lime' : 'button--outline-ink'}`} href="#get-started">Get Started <ArrowRight size={15} strokeWidth={1.5} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
