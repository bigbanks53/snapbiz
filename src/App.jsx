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
import Login from './pages/Login'
import NotFound from './pages/NotFound'

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
        <Route path="/login" element={<Login />} />
        {/* Only genuinely unknown URLs land here — every real route renders its own page. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MotionConfig>
  )
}
