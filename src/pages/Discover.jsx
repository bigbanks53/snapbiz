import OpportunityDiscovery from '../components/OpportunityDiscovery'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Discover() {
  useDocumentTitle('Discover — Opportunity Discovery Flow | SnapBiz')

  return (
    // The section was designed to sit below the hero, so add the top spacing the
    // fixed navbar needs when it is the first thing on the page.
    <main className="bg-forest pt-10 sm:pt-12 lg:pt-6">
      <OpportunityDiscovery />
    </main>
  )
}
