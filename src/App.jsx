import { MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Idea from './pages/Idea'
import Discover from './pages/Discover'
import HowItWorks from './pages/HowItWorks'
import Learn from './pages/Learn'
import Services from './pages/Services'
import Consultants from './pages/Consultants'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultants" element={<Consultants />} />
        {/* Unknown paths keep the previous behaviour and fall back to the home page. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </MotionConfig>
  )
}
