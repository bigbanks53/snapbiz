import Hero from '../components/Hero'
import StartingPaths from '../components/StartingPaths'
import OpportunityDiscovery from '../components/OpportunityDiscovery'
import WhySnapBiz from '../components/WhySnapBiz'
import PlatformEcosystem from '../components/PlatformEcosystem'
import ConsultantsTeaser from '../components/ConsultantsTeaser'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import useDocumentTitle, { BASE_TITLE } from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle(BASE_TITLE)

  return (
    <>
    <main>
      <Hero />
      <StartingPaths />
      <OpportunityDiscovery />
      <WhySnapBiz />
      <PlatformEcosystem />
      <ConsultantsTeaser />
      <FinalCTA />
    </main>
    <Footer />
    </>
  )
}
