import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import AuthLayout from '../components/AuthLayout'
import SignedInPanel from '../components/SignedInPanel'
import { useAuth } from '../context/AuthContext'
import { friendlyAuthError } from '../lib/authErrors'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Real sign-up flow — the destination of every "Get Started" CTA on the site.
 * Creates a Supabase account with email + password.
 */
export default function GetStarted() {
  const { user, loading: authLoading, signUp } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  // 'check-email' when email confirmation is required, 'signed-up' when the
  // session is created immediately (confirmation disabled in Supabase).
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setSubmitting(true)
    try {
      const { data, error: signUpError } = await signUp({ email: email.trim(), password })

      if (signUpError) {
        setError(friendlyAuthError(signUpError))
        return
      }

      if (data?.session) {
        // Email confirmation is off — the user is signed in right away.
        setStatus('signed-up')
      } else {
        // Confirmation email sent (default Supabase behavior).
        setStatus('check-email')
      }
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setSubmitting(false)
    }
  }

  const loading = authLoading || submitting

  return (
    <AuthLayout
      documentTitle="Get Started — Create Your Account | SnapBiz"
      eyebrow="Get started"
      heading="Create your SnapBiz account."
      lede="One account unlocks the full SnapBiz experience — discover opportunities, pressure-test ideas, and follow your personalized path. It only takes a minute."
    >
      {authLoading ? (
        <div className="flex items-center justify-center gap-3 py-10 text-ivory/60">
          <Loader2 size={20} className="animate-spin text-lime" aria-hidden="true" />
          <span className="text-sm">Checking your session…</span>
        </div>
      ) : status === 'check-email' ? (
        <div className="space-y-6" role="status">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={28} strokeWidth={1.8} className="shrink-0 text-lime" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ivory">
              Check your email
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ivory/70">
            We sent a confirmation link to{' '}
            <span className="font-semibold text-ivory">{email.trim()}</span>. Confirm your
            address, then log in to start using SnapBiz.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/login"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest-deep transition-all duration-200 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Go to log in
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <button
              type="button"
              onClick={() => setStatus(null)}
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-ivory/50 hover:bg-ivory/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Use a different email
            </button>
          </div>
        </div>
      ) : status === 'signed-up' && user ? (
        <div className="space-y-6" role="status">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={28} strokeWidth={1.8} className="shrink-0 text-lime" aria-hidden="true" />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ivory">
              Account created
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ivory/70">
            Welcome to SnapBiz — you&apos;re signed in as{' '}
            <span className="font-semibold text-ivory">{email.trim()}</span>.
          </p>
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime px-2 py-2 pl-7 text-sm font-semibold text-forest-deep transition-all duration-200 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime sm:w-auto"
          >
            <span>Continue to SnapBiz</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </span>
          </Link>
        </div>
      ) : user ? (
        <SignedInPanel message="You already have a SnapBiz account, so you're all set." />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ivory">
              Sign up with email
            </h2>
            <p className="mt-1.5 text-sm text-ivory/55">
              Free to start. No credit card required.
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
            <label htmlFor="signup-email" className="block text-sm font-semibold text-ivory/80">
              Email
            </label>
            <input
              id="signup-email"
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
            <label htmlFor="signup-password" className="block text-sm font-semibold text-ivory/80">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/25"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="signup-confirm-password"
              className="block text-sm font-semibold text-ivory/80"
            >
              Confirm password
            </label>
            <input
              id="signup-confirm-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat your password"
              className="w-full rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-ivory placeholder:text-ivory/35 transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/25"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime px-2 py-2 pl-7 text-sm font-semibold text-forest-deep transition-all duration-200 hover:bg-lime/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{submitting ? 'Creating account…' : 'Create account'}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-lime transition-transform duration-300 group-hover:translate-x-0.5">
              {submitting ? (
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              ) : (
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              )}
            </span>
          </button>

          <p className="text-center text-sm text-ivory/60">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-lime underline-offset-4 transition-colors hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  )
}
