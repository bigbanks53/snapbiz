import { ArrowUpRight } from 'lucide-react'

export default function IntroSection() {
  return (
    <section className="section section--paper intro-section" id="about">
      <div className="container intro-grid">
        <div className="intro-heading reveal reveal--up">
          <p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> The SnapBiz approach</p>
          <h2>Starting a business should be simple.</h2>
        </div>
        <div className="intro-detail reveal reveal--up">
          <p className="display-sentence">Understanding what comes next shouldn’t require hours of research.</p>
          <p className="body-copy">SnapBiz brings the essential business setup services and guidance into one simple experience — so you can spend less time decoding processes and more time building what matters.</p>
          <a className="text-link text-link--ink" href="#how-it-works">See how it works <ArrowUpRight size={17} strokeWidth={1.5} /></a>
        </div>
      </div>
    </section>
  )
}
