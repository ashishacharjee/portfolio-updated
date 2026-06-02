# Ashish Chandra Acharjee — Portfolio
My personal developer portfolio, built from scratch with Next.js. Wanted something that looks clean, feels smooth, and actually represents the kind of work I do — not just another template.
Live: *coming soon*
---
## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **3D Backgrounds:** Vanta.js (Globe, Rings, Net) + Three.js
- **Language:** TypeScript
## Features
- **Smooth scroll navigation** — Lenis-powered scroll physics with animated page transitions on every nav click
- **Interactive 3D backgrounds** — different Vanta.js effects per section (Globe on hero, Rings on experience, Net on story)
- **Character-by-character text animations** — staggered reveal on headings, typewriter effect on status text
- **Parallax sections** — depth-based scroll movement on images
- **Cursor glow** — subtle radial glow that follows the mouse
- **Floating particles** — ambient particle field across the viewport
- **Scroll progress bar** — thin progress indicator at the top
- **Scroll strip marquees** — infinite horizontal text tickers between sections
- **Page transition overlay** — semi-transparent purple wash with logo when navigating between sections
- **Fully responsive** — works on mobile, tablet, desktop
## Sections
|
 Section 
|
 What's in it 
|
|
---------
|
-------------
|
|
 Hero 
|
 Name, intro, profile photo, animated status text 
|
|
 Work 
|
 4 project cards with images, tech tags, hover effects 
|
|
 Experience 
|
 CodeAlpha internship — 3 projects with GitHub links 
|
|
 Story 
|
 Stats (animated counters), education timeline, 4 certifications, achievements 
|
|
 Stack 
|
 10 languages, 6 frameworks, 30+ skills across 5 categories 
|
|
 Contact 
|
 Email, LinkedIn, GitHub with hover cards 
|
## Project Structure
```
├── app/
│   ├── layout.tsx          # root layout, fonts, global styles
│   ├── page.tsx            # main page — assembles all sections
│   └── globals.css         # design tokens, animations, utilities
├── components/
│   ├── Hero.tsx            # hero section with Vanta Globe bg
│   ├── Projects.tsx        # project grid cards
│   ├── Experience.tsx      # work experience + GitHub links
│   ├── Story.tsx           # education, stats, certifications
│   ├── Stack.tsx           # languages, frameworks, skills
│   ├── Contact.tsx         # contact links
│   ├── Navbar.tsx          # fixed nav with logo + active section tracking
│   ├── Footer.tsx          # footer
│   ├── Logo.tsx            # SVG logo component (used in nav + transitions)
│   ├── PageTransition.tsx  # purple overlay transition on nav clicks
│   ├── AnimatedText.tsx    # text reveal animation components
│   ├── SmoothScroll.tsx    # Lenis smooth scroll provider
│   ├── ScrollStrip.tsx     # infinite marquee text strips
│   ├── ScrollProgress.tsx  # top scroll progress bar
│   ├── ParallaxSection.tsx # scroll-based parallax wrapper
│   ├── ParticleField.tsx   # floating ambient particles
│   ├── CursorGlow.tsx      # mouse-follow glow effect
│   ├── VantaGlobe.tsx      # 3D globe background (hero)
│   ├── VantaRings.tsx      # 3D rings background (experience)
│   └── VantaNet.tsx        # 3D net background (story)
└── public/
    └── logo.png            # logo image
```
## Getting Started
First, run the development server:
```bash
# clone it
git clone https://github.com/ashishacharjee/portfolio.git
cd portfolio
```bash
# install dependencies
npm install
# run dev server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000](http://localhost:3000)
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
## Adding Content
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
Most content is stored as plain arrays at the top of each component file — easy to update without digging through JSX.
## Learn More
**Add a new project** → open `components/Projects.tsx`, uncomment the template at the bottom of the `projects` array and fill in your details.
To learn more about Next.js, take a look at the following resources:
**Add work experience** → open `components/Experience.tsx`, follow the commented template in the `experiences` array.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
**Add a certification** → open `components/Story.tsx`, add to the `certifications` array.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
**Add a new skill/language** → open `components/Stack.tsx`, add to the relevant array (`languages`, `frameworks`, or `skillCategories`).
## Deploy on Vercel
**Change the logo** → replace the SVG in `components/Logo.tsx` or swap it with an `<Image>` pointing to `public/logo.png`.
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
## Build
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```bash
npm run build
npm start
```
## License
This is my personal portfolio. Feel free to use the code structure as a reference for your own, but please don't copy it 1:1 and claim it as yours. Swap out the content, make it your own.
---
Built by Ashish Chandra Acharjee
