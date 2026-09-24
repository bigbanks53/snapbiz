import { Check, Circle, CreditCard, FileText, FolderKanban, LayoutDashboard, MessageCircle, ReceiptText } from 'lucide-react'

const setupItems = [
  { label: 'Business Name', done: true },
  { label: 'CAC Registration', done: true },
  { label: 'TIN', done: true },
  { label: 'Trademark', done: false },
]

function MiniBar({ label, value, tone = 'ink' }) {
  return (
    <div className="mini-bar-row">
      <div><span>{label}</span><span>{value}</span></div>
      <div className="mini-bar"><span className={`mini-bar__fill mini-bar__fill--${tone}`} style={{ width: value }} /></div>
    </div>
  )
}

export default function PlatformPreview() {
  return (
    <section className="section section--paper platform-section" id="resources">
      <div className="container">
        <div className="platform-heading reveal reveal--up">
          <div>
            <p className="eyebrow eyebrow--ink"><span className="eyebrow-line" /> The platform</p>
            <h2>Your business setup, in one place.</h2>
          </div>
          <p className="section-lede">A calmer way to keep the moving parts of your business organised as you grow.</p>
        </div>

        <div className="browser-shell reveal reveal--up">
          <div className="browser-chrome">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="browser-address">app.snapbiz.ng / workspace</div>
            <div className="browser-secure">Private workspace</div>
          </div>
          <div className="dashboard">
            <aside className="dashboard-sidebar">
              <div className="mini-brand"><span className="brand-mark brand-mark--small"><span>S</span><span>B</span></span> SnapBiz</div>
              <div className="dashboard-nav-label">Workspace</div>
              <div className="dashboard-nav-item dashboard-nav-item--active"><LayoutDashboard size={15} /> Overview</div>
              <div className="dashboard-nav-item"><FolderKanban size={15} /> Applications</div>
              <div className="dashboard-nav-item"><FileText size={15} /> Documents</div>
              <div className="dashboard-nav-item"><CreditCard size={15} /> Payments</div>
              <div className="dashboard-nav-item"><MessageCircle size={15} /> Support</div>
              <div className="dashboard-sidebar-footer"><span className="avatar">AM</span><span>Amara M.</span><span className="avatar-caret">⌄</span></div>
            </aside>
            <main className="dashboard-main">
              <div className="dashboard-topline"><div><span className="dashboard-kicker">Good morning, Amara</span><h3>Business Setup</h3></div><button className="dashboard-help" type="button"><MessageCircle size={14} /> Support</button></div>
              <div className="dashboard-grid">
                <div className="completion-card">
                  <div className="completion-card__top"><span>Setup progress</span><span className="completion-percent">80%</span></div>
                  <div className="progress-ring"><div className="progress-ring__inner"><strong>80%</strong><span>complete</span></div></div>
                  <p>Keep going — you’re close to having the essentials in place.</p>
                </div>
                <div className="checklist-card">
                  <div className="dashboard-card-heading"><span>Business setup</span><ReceiptText size={16} /></div>
                  {setupItems.map((item) => <div className="checklist-item" key={item.label}><span className={`check-circle ${item.done ? 'check-circle--done' : ''}`}>{item.done ? <Check size={11} strokeWidth={3} /> : <Circle size={10} strokeWidth={1.4} />}</span><span>{item.label}</span><span className={item.done ? 'item-status item-status--done' : 'item-status'}>{item.done ? 'Complete' : 'Next'}</span></div>)}
                </div>
                <div className="activity-card">
                  <div className="dashboard-card-heading"><span>Workspace activity</span><span className="live-label"><i /> Live</span></div>
                  <MiniBar label="Documents" value="72%" />
                  <MiniBar label="Applications" value="58%" tone="lime" />
                  <MiniBar label="Information" value="91%" />
                </div>
                <div className="next-card"><span className="next-label">Up next</span><div className="next-icon"><FileText size={17} strokeWidth={1.4} /></div><strong>Review your trademark details</strong><span className="next-arrow">↗</span></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}
