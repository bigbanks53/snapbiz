import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Client-side navigation doesn't reset scroll or follow #hashes on its own.
// On every route change: jump to the #hash target if there is one, otherwise the top.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const pageChanged = prevPathname.current !== pathname
    prevPathname.current = pathname

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // Wait a frame so the new route's sections are in the DOM.
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: pageChanged ? 'instant' : 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }

    if (pageChanged) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return undefined
    // `key` changes on every navigation, so re-clicking the same #hash link scrolls again.
  }, [pathname, hash, key])

  return null
}
