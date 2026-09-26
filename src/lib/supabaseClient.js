import { createClient } from '@supabase/supabase-js'

// Supabase credentials are read from environment variables so they are never
// hardcoded into committed source files.
//   - Local dev:  set them in `.env` (gitignored; see `.env.example`)
//   - Production: set them in Vercel → Project Settings → Environment Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase environment variables. Set VITE_SUPABASE_URL and ' +
      'VITE_SUPABASE_PUBLISHABLE_KEY in .env for local development (copy .env.example) ' +
      'and in Vercel → Project Settings → Environment Variables for production, then rebuild.',
  )
}

// This is the publishable (formerly "anon") key — it is designed to be exposed
// in the browser. Protect your data with Row Level Security (RLS) policies,
// not by hiding this key.
export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
