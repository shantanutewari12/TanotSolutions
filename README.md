# Tanot Solutions — Homepage Redesign (Next.js)

Pixel-faithful rebuild of the approved Tanot Solutions homepage redesign mockup, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS tokens matching the approved mockup + Tailwind CSS v4
- **Typography**: Google Fonts `Inter` (body, headings) & `DM Sans` (nav, footer) via `next/font`
- **Images**: `next/image` with WebP format, responsive sizes, priority loading for above-the-fold assets, and lazy loading below the fold
- **Icons**: SVG & Lucide icons for stats and UI controls
- **Theme**: Strict light theme (`color-scheme: light`)

## Project Structure
```
├── app/
│   ├── globals.css      # Core brand design tokens, typography scale & responsive grid rules
│   ├── layout.tsx       # Root layout, Google Fonts (Inter + DM Sans), viewport & SEO metadata
│   └── page.tsx         # Single-page layout assembling all section components in exact order
├── components/          # Modular section components
│   ├── Header.tsx       # Sticky navigation, logo, desktop links, mobile hamburger drawer
│   ├── Hero.tsx         # 2-col hero, lead text, CTAs, Clutch badge, lead capture form card
│   ├── StatsBand.tsx    # 4-col dark band with green icon circles and client retention stats
│   ├── TrustedBrands.tsx# 16 client logo tiles (8-col desktop / 4-col tablet & mobile)
│   ├── Reviews.tsx      # Vimeo video facade + Sandeep Das featured review + 3 equal cards
│   ├── Services.tsx     # 6 services tabs (desktop horizontal list, mobile vertical stack)
│   ├── CaseStudy.tsx    # 2-col case study, 3 KPI cards, traffic chart at natural size
│   ├── GrowthPartner.tsx# 3x2 differentiators grid + "Talk to our team" CTA
│   ├── Awards.tsx       # 3x2 grid of 6 equal award tiles in 4:3 white frames
│   ├── FounderTeam.tsx  # Renu Sharma 280px 4:5 founder block + 4 team cards with initials
│   ├── FeaturedOn.tsx   # Dedicated light-blue band with 5 publication logos
│   ├── FAQ.tsx          # 6 questions using semantic native <details>/<summary> accordion
│   ├── BlogInsights.tsx # Dark green (#2C6A2E) band with 3 white blog cards
│   ├── CTABand.tsx      # Blue (#1A8CD0) 30-day trial banner with 2 buttons
│   └── Footer.tsx       # Dark (#0F0F0F) 4-column footer and copyright bar
├── data/
│   └── content.ts       # Central source of truth for all copy, numbers, links, and metadata
└── public/
    └── images/          # Real site assets converted and named cleanly
        ├── logo.webp
        ├── clutch-badge.webp
        ├── case-study-chart.webp
        ├── founder-renu.webp
        ├── clients/     # 16 client logos (client-01.webp ... client-16.webp)
        ├── awards/      # 6 award images
        ├── featured/    # 5 publication logos
        └── blog/        # 3 blog thumbnails
```

## How to Edit Content
All copy, navigation links, numbers, testimonials, FAQs, and metadata are centralized in [`data/content.ts`](./data/content.ts). To update any content:
1. Open [`data/content.ts`](./data/content.ts).
2. Locate the section object (e.g. `hero`, `stats`, `reviews`, `services`, `caseStudy`, `faq`, `blog`, etc.).
3. Edit the strings or arrays. TypeScript interfaces ensure type safety and prevent runtime errors.
4. Changes will hot-reload automatically in development.

## Running Locally
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000 or http://localhost:3001)
npm run dev

# Create optimized production build
npm run build

# Start production server
npm run start
```

## Deployment to Vercel
This project is configured out of the box for zero-config Vercel deployment:
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com/).
3. Framework preset will automatically detect Next.js.
4. Click **Deploy**.
