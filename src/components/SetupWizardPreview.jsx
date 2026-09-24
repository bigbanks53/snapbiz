import { useState } from 'react'
import { ArrowRight, Check, Circle } from 'lucide-react'

const options = [
  'Start a new business',
  'Register an existing business',
  'Protect my brand',
  'Start an NGO',
  'Prepare my business for expansion',
]

export default function SetupWizardPreview() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="section section--paper wizard-section" id="get-started">
      <div className="container wizard-grid">
        <div className="wizard-copy reveal reveal--up">
          <p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> Start here</p>
          <h2>Not sure where to start?</h2>
          <p className="section-lede">Tell us what you’re building. We’ll help you understand the steps involved.</p>
          <p className="small-note">A guided starting point — not legal advice or an official government decision.</p>
        </div>

        <div className="wizard-card reveal reveal--right">
          <div className="wizard-card__top"><span>SnapBiz / guided setup</span><span>01 — 02</span></div>
          <div className="wizard-card__rule" />
          <div className="wizard-question">
            <span className="step-kicker">First, a little context</span>
            <h3>What are you trying to do?</h3>
          </div>
          <div className="wizard-options">
            {options.map((option, index) => {
              const isSelected = selected === index
              return (
                <button className={`wizard-option ${isSelected ? 'wizard-option--selected' : ''}`} key={option} type="button" onClick={() => setSelected(index)}>
                  <span className="wizard-option__radio">{isSelected ? <Check size={13} strokeWidth={3} /> : <Circle size={13} strokeWidth={1.5} />}</span>
                  <span>{option}</span>
                  {isSelected && <span className="wizard-option__selected-label">Selected</span>}
                </button>
              )
            })}
          </div>
          <a className="button button--ink wizard-cta" href="#services">Find What I Need <ArrowRight size={16} strokeWidth={1.5} /></a>
        </div>
      </div>
    </section>
  )
}
