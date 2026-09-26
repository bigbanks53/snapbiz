import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Loader2 } from 'lucide-react'
import AuthLayout from '../components/AuthLayout'
import SignedInPanel from '../components/SignedInPanel'
import { useAuth } from '../context/AuthContext'
import { friendlyAuthError } from '../lib/authErrors'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Real login flow — the destination of the "Log in" nav link.
 * Signs an existing user in with email + password.
 */
export default function Login() {
  const { user, loading: authLoading, signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    if (!password) {
      setError('Please enter your password.')
      return
    }

    setSubmitting(true)
    try {
      const { error: signInError } = await signIn({ email: email.trim(), password })
      if (signInError) {
        setError(friendlyAuthError(signInError))
      }
      // On success the auth listener updates the session and the panel below
      // (plus the navbar) switches to the signed-in state.
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setSubmitting(false)
    }
  }

  const loading = authLoading || submitting

  return (
    <AuthLayout
      documentTitle="Log in — SnapBiz"
      eyebrow="Welcome back"
      heading="Log in to SnapBiz."
      lede="Pick up right where you left off — your ideas, matches, and progress are waiting."
    >
      {authLoading ? (
        <div className="flex items-center justify-center gap-3 py-10 text-ivory/60">
          <Loader2 size={20} className="animate-spin text-lime" aria-hidden="true" />
          <span className="text-sm">Checking your session…</span>
        </div>
      ) : user ? (
        <SignedInPanel message="You're signed in — welcome back to SnapBiz." />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ivory">
              Log in with email
            </h2>
            <p className="mt-1.5 text-sm text-ivory/55">
              Use the email and password for your SnapBiz account.
            </p>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-apricot/40 bg-apricot/10 px-4 py-3 text-sm font-medium text-apricot"
            >
              {error}
            </p>
          )}

          <div className="space-y-1.5">
            <label htmlFor="login-email" className="block text-sm font-semibold text-ivory/80">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/25"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="login-password" className="block text-sm font-semibold text-ivory/80">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/25"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime px-2 py-2 pl-7 text-sm font-semibold text-forest-deep transition-all duration-200 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{submitting ? 'Signing in…' : 'Log in'}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover:translate-x-0.5">
              {submitting ? (
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              ) : (
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              )}
            </span>
          </button>

          <p className="text-center text-sm text-ivory/60">
            Don&apos;t have an account?{' '}
            <Link
              to="/get-started"
              className="font-semibold text-lime underline-offset-4 transition-colors hover:underline"
            >
              Get Started
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  )
}
