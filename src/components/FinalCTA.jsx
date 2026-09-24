import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="login">
      <div className="final-cta__image" aria-hidden="true"><img src="/images/professional.jpg" alt="" /></div>
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="container final-cta__inner">
        <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> Your next chapter</p>
        <h2>Your business starts with the <em>right foundation.</em></h2>
        <p>Tell us what you’re building and we’ll help you understand the next step.</p>
        <div className="final-cta__actions"><a className="button button--lime button--large" href="#get-started">Get Started <ArrowRight size={17} strokeWidth={1.5} /></a><a href="#services" className="text-link text-link--light">Explore Services <ArrowRight size={16} strokeWidth={1.5} /></a></div>
      </div>
    </section>
  )
}
