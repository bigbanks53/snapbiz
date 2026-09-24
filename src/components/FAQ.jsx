import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  { question: 'What is CAC registration?', answer: 'CAC registration is the process of formally registering a business or organisation with Nigeria’s Corporate Affairs Commission. SnapBiz helps you understand the relevant path and prepare for it.' },
  { question: 'Do I need a business name or a company?', answer: 'It depends on your structure, goals and how you plan to operate. Our guided setup experience is designed to help you compare the relevant options before you begin.' },
  { question: 'What documents do I need?', answer: 'Requirements vary by service and business type. SnapBiz will show you the information and documents relevant to the path you choose before you submit.' },
  { question: 'How does SnapBiz work?', answer: 'Tell us what you are building, understand the relevant service, submit your information, and keep track of your progress in one organised workspace.' },
  { question: 'Can I register a business from anywhere in Nigeria?', answer: 'Yes. SnapBiz is designed to support entrepreneurs and businesses across Nigeria, subject to the requirements of the relevant service.' },
  { question: 'How do I track my application?', answer: 'Your future SnapBiz workspace will keep your applications, documents and progress updates together so you can see what is next.' },
  { question: 'What happens after I submit my information?', answer: 'We review the details you provide, clarify any missing information, and guide you through the next relevant step.' },
  { question: 'Are government fees included in your service price?', answer: 'Not always. SnapBiz service prices are shown separately, and government fees or third-party charges may vary depending on the service.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section section--paper faq-section">
      <div className="container faq-grid">
        <div className="faq-heading reveal reveal--up">
          <p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> Frequently asked</p>
          <h2>Questions,<br /><em>answered.</em></h2>
          <p>Still have a question? We’re building a clearer way to find the right answer.</p>
          <a href="mailto:snapbizconsults@gmail.com" className="text-link text-link--ink">Contact the team <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list reveal reveal--right">
          {questions.map((item, index) => {
            const isOpen = open === index
            return (
              <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.question}>
                <button type="button" className="faq-trigger" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span><span className="faq-index">0{index + 1}</span>{item.question}</span>
                  <span className="faq-chevron"><ChevronDown size={17} strokeWidth={1.6} /></span>
                </button>
                <div className="faq-answer"><p>{item.answer}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
