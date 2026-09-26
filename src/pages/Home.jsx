import Hero from '../components/Hero'
import StartingPaths from '../components/StartingPaths'
import OpportunityDiscovery from '../components/OpportunityDiscovery'
import useDocumentTitle, { BASE_TITLE } from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle(BASE_TITLE)

  return (
    <main>
      <Hero />
      <StartingPaths />
      <OpportunityDiscovery />
    </main>
  )
}
