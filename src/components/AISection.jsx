import { ArrowUpRight, Bot, Check, Send, UserRound } from 'lucide-react'

export default function AISection() {
  return (
    <section className="section section--paper ai-section">
      <div className="container ai-grid">
        <div className="ai-copy reveal reveal--up">
          <p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> Built for what’s next</p>
          <h2>Your business questions, answered.</h2>
          <p className="section-lede">SnapBiz is being built with AI-powered assistance to help entrepreneurs understand business setup, prepare business information, and handle repetitive business tasks.</p>
          <p className="small-note">Designed to support your next step — never to replace professional or official advice.</p>
          <a className="text-link text-link--ink" href="#get-started">Explore the approach <ArrowUpRight size={16} strokeWidth={1.5} /></a>
        </div>

        <div className="chat-card reveal reveal--right">
          <div className="chat-card__header"><span className="ai-label"><i /> AI-powered</span><span className="chat-status">Preview</span></div>
          <div className="chat-card__body">
            <div className="chat-date">Today · 09:41</div>
            <div className="chat-message chat-message--user"><div className="chat-avatar chat-avatar--user"><UserRound size={14} /></div><div><span className="chat-speaker">You</span><p>“I want to start a fashion business with my sister. What should we register?”</p></div></div>
            <div className="chat-message chat-message--ai"><div className="chat-avatar chat-avatar--ai"><Bot size={14} /></div><div><span className="chat-speaker">SnapBiz assistant</span><p>“Let’s understand a few details about your business first. I’ll help you identify the relevant setup options.”</p><span className="chat-scope"><Check size={11} strokeWidth={2.5} /> Guidance, not legal advice</span></div></div>
          </div>
          <div className="chat-input"><span>Ask about your next step…</span><button type="button" aria-label="Send message"><Send size={15} /></button></div>
        </div>
      </div>
    </section>
  )
}
