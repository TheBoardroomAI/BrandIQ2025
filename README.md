# Brand IQ Creative - Modern Website

**Tech Stack:** Next.js 15 (App Router) + TypeScript + TailwindCSS  
**Deployment:** Vercel  
**CMS:** Sanity (Phase 4)

---

## Project Status

| Phase | Status | Completion |
|-------|--------|------------|
| **Phase 1: Discovery & Asset Extraction** | ✅ Complete | 100% |
| **Phase 2: Technical Architecture** | ✅ Complete | 100% |
| **Phase 3: Build & Development** | 🔄 In Progress | 50% |
| **Phase 4: Content Migration** | ⏳ Pending | 0% |
| **Phase 5: Testing & Optimization** | ⏳ Pending | 0% |
| **Phase 6: Deployment** | ⏳ Pending | 0% |

---

## Phase 3: Build Progress

| Step | Status | Details |
|------|--------|---------|
| **Step 1: Repository Setup** | ✅ Complete | Next.js 15, TypeScript, TailwindCSS configured |
| **Step 2: Component Library** | ✅ Complete | 9 components (583 LOC) |
| **Step 3: Homepage Build** | ✅ Complete | Hero videos, value props, case studies, research |
| **Step 4: Services & Process** | ⏳ Pending | - |
| **Step 5: Portfolio & Blog** | ⏳ Pending | - |
| **Step 6: Contact & Supporting** | ⏳ Pending | - |
| **Step 7: QA & Polish** | ⏳ Pending | - |

---

## Component Library (Step 2 ✅)

### Components Built:
1. **Navigation** - Responsive header with mobile menu
2. **Footer** - 3-column layout with social links
3. **Button** - 3 variants (primary/secondary/ghost)
4. **Card** - Service/case-study/client variants
5. **VideoPlayer** - MP4/WebM with poster fallback
6. **Container** - Responsive max-width wrapper
7. **Section** - Pre-styled layout sections
8. **Typography** - Heading/Text components
9. **Barrel Exports** - Clean import syntax

### Brand Colors:
- Green: `#00b159` (`brandiq-green`)
- Purple: `#a0218d` (`brandiq-purple`)
- Blue: `#007db1` (`brandiq-blue`)
- Orange: `#f3901d` (`brandiq-orange`)
- Gray: `#696a6d` (`brandiq-gray`)

---

## Development

### Prerequisites:
- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

### Installation:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production:
```bash
npm run build
npm start
```

---

## Deployment to Vercel

**You can deploy NOW (Step 2 complete):**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `TheBoardroomAI/BrandIQ2025`
3. Vercel auto-detects Next.js
4. Click "Deploy" (~2 minutes)
5. Get staging URL: `brandiq2025.vercel.app`

**What's live:**
- ✅ Responsive navigation
- ✅ Mobile menu
- ✅ Footer with contact info
- ✅ Brand color system
- ✅ Typography components

---

## Project Structure

```
BrandIQ2025/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles + brand variables
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Site header
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # CTA buttons
│   ├── Card.tsx           # Content cards
│   ├── VideoPlayer.tsx    # Video backgrounds
│   ├── Container.tsx      # Layout wrapper
│   ├── Section.tsx        # Section layout
│   ├── Typography.tsx     # Heading/Text
│   └── index.ts           # Barrel exports
├── public/                # Static assets
│   └── images/            # Logo, media files
├── tailwind.config.ts     # Tailwind + brand colors
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

---

## Git Commits

| Commit | Message | Files |
|--------|---------|-------|
| `ca39daf` | Step 1: Initial Next.js 15 setup | 9 files |
| `6f5e8a2` | Step 2: Complete Component Library | 11 files |
| `99cb3f3` | Update layout and page imports | 2 files |

**Total LOC:** 583 lines (components) + 150 lines (config/pages) = **733 lines**

---

## Performance Targets

- **Lighthouse Score:** 95+
- **Page Load:** <2 seconds
- **Core Web Vitals:** "Good" rating
- **Mobile Score:** 95/100

---

## Documentation

- [Phase 1 Report](/mnt/aidrive/BrandIQ_Replication/04_Documentation/phase1_complete_report.md)
- [Phase 2 Architecture](/mnt/aidrive/BrandIQ_Replication/04_Documentation/phase2_technical_architecture.md)
- [Step 2 Complete](/mnt/aidrive/BrandIQ_Replication/04_Documentation/STEP2_COMPLETE.md)

---

## Next Steps

**Ready for Step 3: Homepage Build**

Homepage features:
- Hero section with video backgrounds
- "Brands That Inspire" headline
- 3 value propositions (Confidence/Innovation/ROI)
- Research callout section
- Featured case studies carousel
- CTA buttons

**Awaiting approval to proceed.**

---

## Contact

**Brand IQ Creative**  
606 Liberty Ave, 3rd Floor  
Pittsburgh, PA 15222  
412.701.6226

---

**GitHub:** [github.com/TheBoardroomAI/BrandIQ2025](https://github.com/TheBoardroomAI/BrandIQ2025)  
**Staging URL:** TBD (deploy after Step 2 approval)  
**Production URL:** brandiqcreative.com (Phase 6)
