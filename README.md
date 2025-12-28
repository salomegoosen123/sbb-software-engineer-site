# SBB Software Engineer — Static Site

Clean, modern single-page website (React + Vite) you can deploy anywhere (Netlify, Vercel, GitHub Pages, S3/CloudFront).

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Update your branding

1. Open `src/data/siteData.ts` and set:
   - `brand.name`
   - `brand.tagline`
   - `brand.email`
   - `brand.links.github` / `brand.links.linkedin`

2. Logo
   - Replace the placeholder mark in `src/components/Logo.tsx` with your actual SBB logo (SVG recommended).

## Content

All copy and section data lives in `src/data/siteData.ts`.

## Notes

- No Bootstrap / jQuery — keep it lightweight.
- Accessible focus styles and a skip-to-content link.
