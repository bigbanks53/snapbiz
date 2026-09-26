import { Link } from 'react-router-dom'
import { ArrowRight, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

/**
 * Shown on the auth pages when a session already exists — confirms the
 * signed-in state without building out a dashboard/profile yet.
 */
export default function SignedInPanel({ message = 'You are currently signed in to SnapBiz.' }) {
  const { user, signOut } = useAuth()
  const email = user?.email ?? 'your account'

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime font-display text-lg font-extrabold text-forest-deep">
          {email.charAt(0).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Signed in</p>
          <p className="truncate text-sm text-ivory/70">{email}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-ivory/60">{message}</p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => signOut()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
        >
          <LogOut size={16} strokeWidth={2} aria-hidden="true" />
          Log out
        </button>
        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest-deep transition-all duration-200 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
        >
          Back to home
          <ArrowRight
            size={16}
            strokeWidth={2.2}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  )
}
