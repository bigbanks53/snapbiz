import HowItWorksHero from '../components/HowItWorksHero'
import HowItWorksJourney from '../components/HowItWorksJourney'
import HowItWorksStatus from '../components/HowItWorksStatus'
import HowItWorksClosing from '../components/HowItWorksClosing'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function HowItWorks() {
  useDocumentTitle('How It Works | SnapBiz')

  return (
    <div id="how-it-works-page">
      <main>
        <HowItWorksHero />
        <HowItWorksJourney />
        <HowItWorksStatus />
        <HowItWorksClosing />
      </main>
    </div>
  )
}
