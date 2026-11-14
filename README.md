# Ambaram Jhansi Lakshmi: Developer Portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Lucide. Dark, glassmorphism-styled, fully responsive.

## Project structure

```
portfolio/
├── index.html              SEO meta, Open Graph, JSON-LD
├── public/
│   ├── favicon.svg
│   └── resume.pdf          <- ADD THIS (see "Resume" below)
├── src/
│   ├── data/portfolio.ts   All content lives here (edit this to update the site)
│   ├── hooks/              useActiveSection (nav highlight), useTypedRoles (hero typing)
│   ├── components/         Navbar, Hero, About, Skills, Experience, Projects,
│   │                       ProjectCard/Modal/Visual, Coding, Certifications,
│   │                       Contact, Footer, Section, BrandIcons, ErrorBoundary
│   ├── App.tsx  main.tsx  index.css
├── vercel.json  netlify.toml  .env.example
```

## Run locally

Requires Node 18+ (20 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serves the production build
```

## Before you publish: 2 things to do

1. **Resume.** Put your PDF at `public/resume.pdf`. The "Download Resume" button checks the file exists before downloading; until then it shows a friendly "email me" note instead of a broken download.
2. **Contact form backend.** A static site cannot send email on its own, so the form is wired to [Formspree](https://formspree.io) (free tier available):
   - Create a form there and copy the form ID (the part after `/f/`).
   - Local: copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID=yourid`.
   - Vercel/Netlify: add `VITE_FORMSPREE_ID` as an environment variable, then redeploy.
   - **Until configured**, the form does not pretend to send: the button reads "Open in Email App" and opens the visitor's mail client with the message pre-filled (mailto).
   - Includes validation and a honeypot spam field.

## Deploy

**Vercel**
1. Push this folder to a GitHub repository.
2. vercel.com → Add New → Project → import the repo. Framework preset: Vite (auto-detected).
3. Add `VITE_FORMSPREE_ID` under Environment Variables, then Deploy.

**Netlify**
1. Push to GitHub, then app.netlify.com → Add new site → Import from Git.
2. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
3. Site settings → Environment variables → add `VITE_FORMSPREE_ID`, then redeploy.

(Or drag the `dist/` folder onto Netlify after `npm run build`.)

## Content notes

- All facts come from your brief; nothing was added. Project metrics shown are only the ones you gave (96.67%, 97.76%, 98.63%); the URL Shortener card shows qualitative highlights (Redis caching, QR codes) because no numbers were supplied.
- GitHub repo links had the trailing `.git` removed so they open as normal web pages.
- Hero floating chips ("IDS · 98.63% recall", "ML · 96.67% acc") reuse those same figures.
- The URL Shortener has no live demo, so no Live Demo button is rendered for it.

## Accessibility and performance

Keyboard-navigable, skip link, visible focus rings, ARIA on menu/modal/form, reduced-motion support, focus-trapped project modal (Esc to close), code-split vendor/motion chunks, no raster images (all visuals are inline SVG).
