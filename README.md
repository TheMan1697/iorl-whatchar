# Iorl - WhatChar

A minimal SEO-first tool for identifying confusing Unicode characters like `I`, `l`, `1`, `O`, `0`, Greek/Cyrillic lookalikes, Hangul lookalikes, and invisible spaces.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

This project is static and works well on Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

## Before production

Update these URLs:

- `astro.config.mjs` site URL
- `public/robots.txt` sitemap URL
- `public/sitemap.xml` canonical URL
- `src/layouts/BaseLayout.astro` canonical/OG URLs
