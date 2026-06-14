# Iorl - WhatChar

Iorl - WhatChar is a minimal, SEO-first web tool for identifying confusing Unicode characters.

It helps distinguish lookalike characters such as `I`, `l`, `1`, `O`, `0`, Greek and Cyrillic homoglyphs, Hangul lookalikes, Japanese/CJK lookalikes, fullwidth characters, punctuation variants, and invisible spaces.

## Features

* Detects Unicode lookalike and homoglyph characters
* Shows the exact character, Unicode code point, script, and name
* Highlights confusing characters directly in the pasted text
* Reveals invisible characters such as zero-width spaces and no-break spaces
* Supports Latin, Greek, Cyrillic, Hangul, Japanese kana, CJK characters, fullwidth forms, and common punctuation variants
* Runs entirely in the browser
* Static, fast, and easy to deploy

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

Recommended Cloudflare Pages settings:

* Framework preset: `Astro`
* Build command: `npm run build`
* Build output directory: `dist`

## Before production

Update production URLs after choosing a domain:

* `astro.config.mjs` site URL
* `public/robots.txt` sitemap URL
* `public/sitemap.xml` canonical URLs
* `src/layouts/BaseLayout.astro` canonical and Open Graph URLs

## Privacy

All analysis runs locally in the browser. The pasted text is not sent to a server.
