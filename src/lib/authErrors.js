/**
 * Maps raw Supabase auth errors to friendly, non-enumerating copy for the UI.
 */
export function friendlyAuthError(error) {
  const message = String(error?.message ?? '').toLowerCase()
  const code = error?.code ?? ''

  if (code === 'invalid_credentials' || message.includes('invalid login credentials')) {
    return 'Incorrect email or password. Please try again.'
  }
  if (code === 'user_already_exists' || message.includes('already registered')) {
    return 'An account with this email already exists. Try logging in instead.'
  }
  if (code === 'email_not_confirmed' || message.includes('email not confirmed')) {
    return 'Please confirm your email first — check your inbox for the confirmation link.'
  }
  if (code === 'weak_password' || message.includes('password should') || message.includes('password must')) {
    return 'Password must be at least 6 characters long.'
  }
  if (code === 'validation_failed' || message.includes('valid email')) {
    return 'Please enter a valid email address.'
  }
  if (message.includes('rate limit') || message.includes('too many requests')) {
    return 'Too many attempts. Please wait a moment and try again.'
  }
  if (message.includes('network') || message.includes('fetch')) {
    return 'Network error — check your connection and try again.'
  }

  return error?.message || 'Something went wrong. Please try again.'
}
