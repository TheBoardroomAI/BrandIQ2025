# VERCEL DEPLOYMENT GUIDE - Brand IQ Creative 2025

**Repository:** https://github.com/TheBoardroomAI/BrandIQ2025  
**Status:** Ready for deployment (95% complete, all routes functional)

---

## DEPLOYMENT STEPS

### **Option 1: Vercel Dashboard (Recommended - Fastest)**

1. **Go to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with your GitHub account

2. **Import Repository:**
   - Click "Import Git Repository"
   - Select `TheBoardroomAI/BrandIQ2025`
   - Vercel will auto-detect Next.js configuration

3. **Configure Project:**
   - **Project Name:** `brandiq2025` (or custom)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Install Command:** `npm install` (auto)

4. **Environment Variables:**
   - None required for current build
   - (Future: Add form submission API keys, analytics, etc.)

5. **Deploy:**
   - Click "Deploy"
   - Wait ~3-4 minutes (video assets take time to upload)
   - Vercel will provide staging URL: `brandiq2025.vercel.app`

---

### **Option 2: Vercel CLI (Alternative)**

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Navigate to project
cd /path/to/BrandIQ2025

# Login to Vercel
vercel login

# Deploy to staging
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: brandiq2025
# - Directory: ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## WHAT YOU'LL SEE AFTER DEPLOYMENT

### **Live Site Features:**
- ✅ Homepage with rotating video backgrounds (15s auto-cycle)
- ✅ Navigation with 8 working routes
- ✅ Services page (24 offerings across 3 categories)
- ✅ Process page (4-stage methodology)
- ✅ Gallery page (6 case studies with results)
- ✅ News page (6 articles + newsletter signup)
- ✅ Contact page (lead capture form)
- ✅ Clients page (100+ institutions)
- ✅ Personalized Video page (PIVOT 2.0 showcase)
- ✅ Responsive mobile → desktop layouts
- ✅ Brand colors throughout
- ✅ Hover effects and animations

### **Current Limitations (Step 7 will address):**
- ⚠️ Contact form submits locally (no backend API yet)
- ⚠️ Newsletter form is UI-only (no backend)
- ⚠️ Google Maps is placeholder (can add embed)
- ⚠️ Some images reused (need high-res originals from backend)
- ⚠️ Minor performance optimizations pending

---

## EXPECTED PERFORMANCE

**Lighthouse Scores (Current Estimate):**
- Performance: 85-90 (video assets impact)
- Accessibility: 90-95
- Best Practices: 95-100
- SEO: 95-100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

**Page Load Times:**
- Homepage: 2-3 seconds (video loading)
- Other pages: 1-2 seconds

---

## POST-DEPLOYMENT CHECKLIST

After deployment, verify these items:

### **Functional Testing:**
- [ ] Homepage video carousel auto-rotates
- [ ] All 8 navigation links work
- [ ] Contact form accepts input (submission currently simulated)
- [ ] Newsletter form accepts email
- [ ] Case study cards have hover effects
- [ ] Mobile menu opens/closes
- [ ] Footer social links work (external)

### **Visual Testing:**
- [ ] Videos play on homepage (may require user interaction on mobile)
- [ ] Images load correctly
- [ ] Brand colors display properly
- [ ] Typography is readable
- [ ] Spacing looks consistent
- [ ] Mobile layout stacks correctly

### **Cross-Browser Testing:**
- [ ] Chrome (desktop + mobile)
- [ ] Safari (macOS + iOS)
- [ ] Firefox
- [ ] Edge

---

## DOMAIN CONFIGURATION (Optional - Production Ready)

To use custom domain `brandiqcreative.com`:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add domain: `brandiqcreative.com`
   - Add domain: `www.brandiqcreative.com`

2. **In Domain Registrar (GoDaddy/Namecheap/etc.):**
   - Add A record: `@` → Vercel IP (provided by Vercel)
   - Add CNAME: `www` → `brandiq2025.vercel.app`

3. **SSL Certificate:**
   - Vercel auto-provisions SSL (Let's Encrypt)
   - Takes ~24 hours to propagate

---

## ENVIRONMENT VARIABLES (Future Needs)

When integrating backend services, add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Contact Form (Future)
NEXT_PUBLIC_FORM_API_URL=https://api.example.com/contact
SENDGRID_API_KEY=your_sendgrid_key

# Analytics (Future)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# CMS (Phase 4 - Content Migration)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

---

## CONTINUOUS DEPLOYMENT

Vercel auto-deploys on GitHub push:

- **Production branch:** `main` → `brandiq2025.vercel.app`
- **Preview branches:** Any branch → unique preview URL
- **Pull requests:** Auto-generates preview URL

**Workflow:**
1. Make changes locally
2. Commit to GitHub: `git push origin main`
3. Vercel auto-deploys in ~2-3 minutes
4. Check deployment status in Vercel dashboard

---

## STAGING URL STRUCTURE

After deployment, you'll get:

**Staging URL:**
- Format: `brandiq2025.vercel.app` or `brandiq2025-[hash].vercel.app`
- Public: Anyone with link can view
- Shareable: Send to stakeholders for feedback

**Preview URLs (per commit):**
- Format: `brandiq2025-git-[branch]-[user].vercel.app`
- Unique per branch/commit
- Useful for testing features before merging

---

## TROUBLESHOOTING

### **Videos don't play:**
- **Cause:** Browser autoplay policies
- **Fix:** Videos require muted + playsInline attributes (already added)
- **Workaround:** User interaction may be needed on some browsers

### **Build fails:**
- **Check:** `npm run build` locally first
- **Common issues:** TypeScript errors, missing dependencies
- **Fix:** Review build logs in Vercel dashboard

### **Slow load times:**
- **Cause:** 9.5 MB video assets
- **Fix:** Step 7 will optimize (compression, lazy loading)
- **Workaround:** Consider hosting videos on Vimeo/YouTube

### **Form doesn't submit:**
- **Expected:** Form currently simulates submission
- **Production fix:** Connect to Netlify Forms, Formspree, or custom API

---

## MONITORING & ANALYTICS

**Vercel Analytics (Built-in):**
- Enable in Project Settings → Analytics
- Tracks: Page views, performance, Core Web Vitals
- Free tier: 100k events/month

**Google Analytics (Future):**
- Add GA4 tracking ID
- Install `next/script` component
- Track: Conversions, form submissions, user flows

---

## COST ESTIMATE

**Vercel Pricing:**
- **Hobby Plan (Free):**
  - 100 GB bandwidth/month
  - Unlimited sites
  - Automatic SSL
  - **Recommended for staging/testing**

- **Pro Plan ($20/month):**
  - 1 TB bandwidth/month
  - Team collaboration
  - Analytics included
  - **Recommended for production**

**Current Site Usage:**
- ~10 MB per page load (with videos)
- 100 GB = ~10,000 page loads/month (free tier)
- Typical traffic: 1,000-5,000 monthly visits = fits free tier

---

## NEXT STEPS AFTER DEPLOYMENT

1. **Get Staging URL:**
   - Copy from Vercel dashboard
   - Format: `https://brandiq2025.vercel.app`

2. **Share with Stakeholders:**
   - Send URL for review
   - Gather feedback on content, design, functionality

3. **Run Step 7 (QA & Polish):**
   - Address any deployment issues
   - Optimize performance based on live metrics
   - Fix bugs discovered during stakeholder testing

4. **Plan Production Launch:**
   - Custom domain setup
   - Form backend integration
   - Analytics tracking
   - Final content review

---

## SUPPORT & RESOURCES

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Repo:** [github.com/TheBoardroomAI/BrandIQ2025](https://github.com/TheBoardroomAI/BrandIQ2025)

---

## DEPLOYMENT STATUS

**Ready to Deploy:** ✅ Yes  
**Build Tested:** ✅ Locally successful  
**Dependencies:** ✅ All installed  
**Assets:** ✅ All committed to repo  
**Routes:** ✅ All 8 functional  
**Forms:** ⚠️ UI-only (backend needed for production)

**Estimated Deployment Time:** 3-4 minutes  
**Expected URL:** `brandiq2025.vercel.app` or `brandiq2025-[hash].vercel.app`

---

**Ready to deploy when you are. Follow Option 1 (Dashboard) for fastest results.**
