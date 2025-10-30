# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application showcasing the "Nano Banana" AI image editing service. It's a marketing/landing page built with:

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling with custom color schemes
- **shadcn/ui components** (configured with "new-york" style)
- **Lucide React** for icons
- **same-runtime** custom JSX runtime integration
- **Supabase** for authentication and backend services
- **OpenAI API** for AI image processing

## Development Commands

```bash
# Development server with Turbopack (binds to all interfaces)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint (TypeScript check + ESLint)
npm run lint

# Code formatting
npm run format
```

## Architecture Notes

### Client-Side Hydration
The app uses a `ClientBody` component (`src/app/ClientBody.tsx`) to handle hydration issues by cleaning up extension-added CSS classes after client-side mounting.

### Custom JSX Runtime
- Uses `same-runtime` instead of standard React JSX
- TypeScript configured with `"jsxImportSource": "same-runtime/dist"`
- External script loaded via unpkg CDN in layout

### Authentication System
- **Supabase Auth** with GitHub and Google OAuth providers
- Client-side auth state management in `AuthButton` component
- Server-side auth utilities in `src/lib/supabase/`
- API routes for login/logout in `src/app/api/auth/`
- Auth callback handling at `/auth/callback`
- SSR-compatible authentication using `@supabase/ssr`

### OAuth Providers Configuration
**Supported Providers**: GitHub, Google

**Setup Requirements**:
1. **Supabase Dashboard**: Enable Google and GitHub providers in Auth > Providers
2. **Google Cloud Console**: Create OAuth 2.0 client credentials
   - Authorized JavaScript origins: Your domain
   - Authorized redirect URIs: `https://[project-ref].supabase.co/auth/v1/callback`
3. **GitHub OAuth App**: Configure in GitHub Developer Settings

### API Routes
- `/api/generate` - AI image processing using OpenAI GPT-4 Vision
- `/api/auth/login` - Multi-provider OAuth initiation (GitHub, Google)
- `/api/auth/logout` - Session termination
- Custom OpenAI base URL pointing to `breakout.wenwen-ai.com`

### Component Structure
- UI components follow shadcn/ui patterns in `src/components/ui/`
- Main page is a large single-file component with extensive marketing content
- Uses `@/` path alias for src directory imports
- Utility functions in `src/lib/utils.ts` using clsx and tailwind-merge

### Styling Approach
- Tailwind with CSS variables for theming
- Custom yellow/orange gradient branding
- Mobile-responsive design patterns
- Uses `cn()` utility for conditional classes

### Image Configuration
Next.js configured for external images from:
- Unsplash (source.unsplash.com, images.unsplash.com)
- Custom domains (ext.same-assets.com, ugc.same-assets.com)
- Images set to unoptimized mode

### Environment Variables
Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `API_KEY` - OpenAI API key for image processing

### Linting Setup
- **Biome** for formatting and basic linting (space indentation, double quotes)
- **ESLint** with Next.js and TypeScript configs
- Most accessibility and unused variable rules disabled
- No test framework detected