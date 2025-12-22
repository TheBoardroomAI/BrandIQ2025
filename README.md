# Brand IQ Creative - Modern Website

**Next.js 15 | TypeScript | TailwindCSS | Vercel**

## 🎯 Project Overview

Modern, high-performance website for Brand IQ Creative - a higher education marketing and branding agency specializing in research-driven creative solutions.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS with custom Brand IQ color palette
- **Deployment:** Vercel (automatic CI/CD from GitHub)
- **CMS:** Sanity CMS (coming in Phase 4)

## 🎨 Brand Colors

```css
--brandiq-green: #00b159   /* Primary brand color */
--brandiq-purple: #a0218d  /* Innovation */
--brandiq-blue: #007db1    /* Trust/Confidence */
--brandiq-orange: #f3901d  /* Energy/Accent */
--brandiq-gray: #696a6d    /* Body text */
```

## 📂 Project Structure

```
BrandIQ2025/
├── app/                  # Next.js 15 App Router
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage
├── components/          # Reusable React components
├── lib/                 # Utilities and helpers
├── public/             
│   ├── images/         # Static images
│   └── fonts/          # Custom fonts
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 📋 Build Progress

### ✅ Phase 1: Discovery & Asset Extraction (Complete)
- Site structure mapped (9 pages)
- Content extracted and documented
- Brand identity specifications captured
- Key media assets downloaded

### ✅ Phase 2: Technical Architecture (Complete)
- Tech stack defined
- Cost analysis completed
- Deployment workflow designed
- Performance targets set

### 🚧 Phase 3: Build & Development (In Progress)
- [x] Repository setup
- [x] Next.js initialization
- [x] TailwindCSS configuration with brand colors
- [x] Homepage hero section
- [x] Value propositions layout
- [ ] Navigation component
- [ ] Services page
- [ ] Process page
- [ ] Gallery/Portfolio
- [ ] Blog section
- [ ] Contact form

### ⏳ Phase 4: Content Migration (Upcoming)
- Import content to Sanity CMS
- Upload media assets
- Configure forms and analytics

### ⏳ Phase 5: Testing & Optimization (Upcoming)
- Cross-browser testing
- Performance optimization
- Accessibility audit

### ⏳ Phase 6: Deployment (Upcoming)
- Production launch
- DNS configuration
- Post-launch monitoring

## 🔒 Environment Variables

Create a `.env.local` file:

```env
# Sanity CMS (Phase 4)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Analytics (Phase 5)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Forms (Phase 5)
RESEND_API_KEY=
EMAIL_TO=info@brandiqcreative.com
```

## 📦 Deployment

This project is configured for automatic deployment to Vercel:

1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Live in ~60 seconds

**Staging URL:** TBD (after first deployment)
**Production URL:** brandiqcreative.com (final launch)

## 🎯 Performance Targets

- **Lighthouse Score:** 95+ (all categories)
- **Page Load:** <2 seconds globally
- **Core Web Vitals:** "Good" rating
- **Mobile Score:** 95/100

## 📄 License

Proprietary - Brand IQ Creative © 2025

## 🤝 Contributing

This is a private project. For access or questions, contact:
- **Email:** info@brandiqcreative.com
- **Phone:** 412.701.6226

---

**Built with ❤️ by the Brand IQ Creative team**
