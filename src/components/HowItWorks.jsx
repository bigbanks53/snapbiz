const steps = [
  { number: '01', title: 'Tell us about your business.', text: 'Share a few details about what you are building and where you are going.' },
  { number: '02', title: 'Understand what you need.', text: 'See the relevant setup, documentation and compliance steps in plain language.' },
  { number: '03', title: 'Submit your information.', text: 'Provide the details and documents needed to move your application forward.' },
  { number: '04', title: 'Track your progress.', text: 'Keep an eye on applications, documents and next steps from one place.' },
]

export default function HowItWorks() {
  return (
    <section className="section section--ink process-section" id="how-it-works">
      <div className="container">
        <div className="process-heading reveal reveal--up">
          <p className="eyebrow eyebrow--lime"><span className="eyebrow-line" /> How it works</p>
          <h2>From idea to established business.</h2>
          <p className="section-lede section-lede--light">A clearer path through the decisions, paperwork and progress that come with setting up well.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step reveal reveal--up" key={step.number}>
              <div className="step-top"><span className="step-number">{step.number}</span>{index < steps.length - 1 && <span className="step-line" aria-hidden="true" />}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
