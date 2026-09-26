import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

/**
 * Global auth state: tracks the Supabase session across the app, keeps the
 * navbar in sync with the signed-in/out state, and exposes signUp / signIn /
 * signOut actions used by the auth pages.
 */
export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    // Restore any persisted session on first load.
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (mounted) {
          setSession(data.session ?? null)
          setLoading(false)
        }
      })
      .catch(() => {
        if (mounted) setLoading(false)
      })

    // Stay in sync with sign-in, sign-out, token refresh, and cross-tab changes.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession ?? null)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const value = useMemo(() => {
    const user = session?.user ?? null

    return {
      session,
      user,
      loading,
      isAuthenticated: Boolean(user),
      /** Create a new account with email + password. */
      signUp: ({ email, password }) => supabase.auth.signUp({ email, password }),
      /** Sign in an existing user with email + password. */
      signIn: ({ email, password }) => supabase.auth.signInWithPassword({ email, password }),
      /** Sign the current user out and clear the local session. */
      signOut: async () => {
        try {
          await supabase.auth.signOut()
        } catch {
          // Network hiccup — clear local state anyway so the UI returns to
          // its logged-out state.
          setSession(null)
        }
      },
    }
  }, [session, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an <AuthProvider>')
  }
  return context
}
