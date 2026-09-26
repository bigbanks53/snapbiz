import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Earlier builds linked to hash URLs such as `/#login` and `/#get-started`.
 * Anyone arriving with one of those (bookmark, old link, typed URL) is sent to
 * the real route instead of silently landing on the home page.
 */
const LEGACY_HASHES = {
  '#login': '/login',
  '#get-started': '/get-started',
}

export default function LegacyHashRedirect() {
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const target = LEGACY_HASHES[hash]
    if (target) navigate(target, { replace: true })
  }, [hash, navigate])

  return null
}
