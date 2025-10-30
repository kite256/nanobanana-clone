import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { provider } = await request.json()

  // Support both GitHub and Google OAuth providers
  if (!provider || !['github', 'google'].includes(provider)) {
    return NextResponse.json({ error: 'Only GitHub and Google providers are supported' }, { status: 400 })
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider as 'github' | 'google',
    options: {
      redirectTo: `${request.nextUrl.origin}/auth/callback`,
    },
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ url: data.url })
}