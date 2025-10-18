# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application showcasing the "Nano Banana" AI image editing service. It's a marketing/landing page built with:

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling with custom color schemes
- **shadcn/ui components** (configured with "new-york" style)
- **Lucide React** for icons
- **same-runtime** custom JSX runtime integration

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

### Linting Setup
- **Biome** for formatting and basic linting (space indentation, double quotes)
- **ESLint** with Next.js and TypeScript configs
- Most accessibility and unused variable rules disabled
- No test framework detected