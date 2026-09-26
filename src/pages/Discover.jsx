import DiscoverHero from '../components/DiscoverHero'
import DiscoveryFactors from '../components/DiscoveryFactors'
import DiscoverJourney from '../components/DiscoverJourney'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function Discover() {
  useDocumentTitle('Discover — Find a Business That Fits Your Reality | SnapBiz')

  return (
    <main id="discover-page">
      <DiscoverHero />
      <DiscoveryFactors />
      <DiscoverJourney />
    </main>
  )
}
