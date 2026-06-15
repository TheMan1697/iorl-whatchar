# Iorl - WhatChar

**Live site:** https://isitiorl.com

Iorl - WhatChar is a lightweight web tool for identifying confusing Unicode characters, lookalike letters, homoglyphs, punctuation variants, fullwidth forms, and invisible spaces.

It helps distinguish visually similar characters such as `I`, `l`, `1`, `O`, `0`, Greek and Cyrillic homoglyphs, Hangul lookalikes, Japanese/CJK lookalikes, dash and minus variants, and zero-width spaces.

## Features

* Detects Unicode lookalike and homoglyph characters
* Highlights confusing characters directly in pasted text
* Shows each character's Unicode code point, script, and name
* Reveals invisible characters such as zero-width spaces, no-break spaces, and word joiners
* Supports Latin, Greek, Cyrillic, Hangul, Japanese kana, CJK characters, fullwidth forms, punctuation variants, and common symbol lookalikes
* Provides localized pages for multiple languages
* Runs entirely in the browser without sending pasted text to a server
* Static, fast, mobile-friendly, and SEO-focused

## Tech Stack

* Astro
* React
* TypeScript
* CSS
* Cloudflare Pages

## Use Cases

Iorl - WhatChar can be useful when checking:

* `I` vs `l` vs `1`
* `O` vs `0`
* Greek or Cyrillic characters that look like Latin letters
* Hangul, Japanese kana, and CJK lookalikes
* Fullwidth and halfwidth forms
* Dash, hyphen, and minus sign variants
* Hidden zero-width or no-break spaces
* Suspicious usernames, copied text, identifiers, domains, or code snippets

## Privacy

All analysis runs locally in the browser.
The pasted text is not sent to a server.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

This project is deployed on Cloudflare Pages.

Recommended Cloudflare Pages settings:

* Framework preset: `Astro`
* Build command: `npm run build`
* Build output directory: `dist`

## Project Structure

```txt
src/
  components/
  data/
  i18n/
  layouts/
  pages/
  styles/
  utils/

public/
  favicon.svg
  og-image.png
  robots.txt
  sitemap.xml
```

## License

This project is built as a personal web utility.
