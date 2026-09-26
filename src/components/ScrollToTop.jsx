import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Keeps scrolling predictable across client-side route changes:
 * a new route starts at the top of the page, while "#" anchors keep
 * scrolling to their target section (and stay put when there is no match).
 */
export default function ScrollToTop() {
  const { key, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) target.scrollIntoView()
      return
    }

    // Bypass the global `scroll-behavior: smooth` so route changes start instantly at the top.
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [key, hash])

  return null
}
