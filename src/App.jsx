import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StartingPaths from './components/StartingPaths'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <StartingPaths />
      </main>
    </MotionConfig>
  )
}
