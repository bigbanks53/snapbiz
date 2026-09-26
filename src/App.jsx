import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StartingPaths from './components/StartingPaths'
import OpportunityDiscovery from './components/OpportunityDiscovery'
import IdeaPage from './components/IdeaPage'

export default function App() {
  // Lightweight path check: the /idea preview page renders its own sections.
  const isIdeaPage = window.location.pathname.replace(/\/+$/, '') === '/idea'

  return (
    <MotionConfig reducedMotion="user">
      <Navbar linkBase={isIdeaPage ? '/' : undefined} />
      {isIdeaPage ? (
        <IdeaPage />
      ) : (
        <main>
          <Hero />
          <StartingPaths />
          <OpportunityDiscovery />
        </main>
      )}
    </MotionConfig>
  )
}
