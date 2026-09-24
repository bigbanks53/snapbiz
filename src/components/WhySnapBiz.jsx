import { ArrowUpRight, BookOpenCheck, Eye, Laptop, Route } from 'lucide-react'

const reasons = [
  { label: 'Simple', text: 'Clear explanations without unnecessary complexity.', icon: BookOpenCheck },
  { label: 'Guided', text: 'Understand what applies to your business before you begin.', icon: Route },
  { label: 'Transparent', text: 'Clearly separate service charges from official fees where applicable.', icon: Eye },
  { label: 'Digital', text: 'Keep your applications, documents and progress organized.', icon: Laptop },
]

export default function WhySnapBiz() {
  return (
    <section className="section section--ink why-section">
      <div className="container why-grid">
        <div className="why-heading reveal reveal--up">
          <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> Why SnapBiz</p>
          <h2>Built to make business setup easier.</h2>
          <a className="text-link text-link--light" href="#get-started">Find your starting point <ArrowUpRight size={16} strokeWidth={1.5} /></a>
        </div>
        <div className="reasons-grid">
          {reasons.map(({ label, text, icon: Icon }) => (
            <article className="reason-card reveal reveal--up" key={label}>
              <div className="reason-icon"><Icon size={20} strokeWidth={1.4} /></div>
              <h3>{label}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
