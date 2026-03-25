# KiXTiZM Website

Official website for **KiXTiZM**.

This project is a custom-built artist hub made with Next.js. It acts as a single source of truth for music, videos, release links, and contact info, while also being built to a quality standard that makes sense as a portfolio project.

## What the site is for

The site is meant to do two things well:

- give listeners a clear place to find KiXTiZM across platforms
- serve as a polished frontend project with modern structure, clean code, and good foundations

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- React 19
- App Router
- ESLint
- Vercel deployment

## Current features

- single-page artist homepage
- hero section with branded artwork
- featured release CTA
- about section
- platform grid
- featured video section
- contact section
- responsive layout
- config-driven site content
- branded redirect routes under `/go/...`
- metadata, Open Graph, robots, sitemap, and structured data

## Project structure

```text
src/
  app/
    go/[target]/route.ts
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts

  components/
    site/
    ui/

  config/
    site.ts

  lib/
    cn.ts
    go-links.ts

  types/
    site.ts

public/
  images/
```

## Notes on structure

A few important things are centralized on purpose:

- `src/config/site.ts` holds the main site content, featured release, platform links, and metadata-related values
- `src/lib/go-links.ts` keeps internal redirect targets in one place
- homepage sections are split into focused components instead of being dumped into one file

That makes the site easier to maintain and easier to change later when release links, copy, or layout need updating.

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

## Redirect routes

The site uses internal branded redirect routes such as:

- `/go/latest`
- `/go/spotify`
- `/go/youtube`

These exist so platform and campaign links can be changed in one place later without rewriting UI components everywhere.

## Deployment

The site is deployed with **Vercel** and connected to a custom domain.

## Status

This is an actively developed project.  
Current work is focused on branding polish, content refinement, and overall presentation quality.
