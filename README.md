# Meditation Course (only for development skill demonstration)

## Instructions for starting for me

1. Open a terminal in the `C:\work\meditation_course` folder.
2. Install dependencies:
```bash
npm install
```
3. Start the dev server:
```bash
npm run dev
```
4. Open `http://localhost:3000` in the browser.
5. For production build:
```bash
npm run build
npm run start
```

This is a meditation course landing page, implemented on `Next.js (App Router) + TypeScript + Tailwind CSS`. The main UI is in `app/page.tsx`, global styles in `app/globals.css`, SEO metadata in `app/layout.tsx`, design tokens in `tailwind.config.ts`. Work in a clean code style, keep TypeScript strict, do not break the existing section structure (`Hero`, `Method`, `Program`, `Benefits`, `FAQ`, `Access`). For new changes, the priority is: accessibility (WCAG), SEO semantics, Core Web Vitals, mobile-first adaptability.