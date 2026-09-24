import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import Services from './components/Services'
import SetupWizardPreview from './components/SetupWizardPreview'
import HowItWorks from './components/HowItWorks'
import PlatformPreview from './components/PlatformPreview'
import WhySnapBiz from './components/WhySnapBiz'
import AISection from './components/AISection'
import BusinessCategories from './components/BusinessCategories'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleAnchor = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const destination = document.querySelector(id)
      if (destination) {
        event.preventDefault()
        destination.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', id)
      }
    }
    document.addEventListener('click', handleAnchor)
    return () => document.removeEventListener('click', handleAnchor)
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <Services />
        <SetupWizardPreview />
        <HowItWorks />
        <PlatformPreview />
        <WhySnapBiz />
        <AISection />
        <BusinessCategories />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
