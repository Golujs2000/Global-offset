# GLOBAL OFFSET – PRODUCTION DEPLOYMENT & FIREBASE HOSTING GUIDE

**Business:** Global Offset  
**Location:** Kunkun Singh Lane, Bikna Pahari, Near National Press, Patna, Bihar – 800004, India  
**Phone / WhatsApp:** +91 93869 51081  
**Category:** Printing Equipment Supplier, Commercial Printing & Printing Solutions  

---

## 1. Quick Start & Local Preview

To run the project in development mode:
```bash
npm install
npm run dev
```

To build and verify the pre-rendered production build:
```bash
npm run build
npm run preview
```

The build pipeline performs:
1. Client bundle compilation via Vite.
2. Server-side rendering (SSR) build.
3. Automated static HTML prerendering for all 15 routes (`/`, `/about`, `/products`, `/products/*`, `/gallery`, `/contact`).
4. Automatic insertion of canonical URLs, Open Graph tags, and Schema.org structured data (LocalBusiness, Product, BreadcrumbList, FAQPage).

---

## 2. Firebase Hosting Deployment

### Prerequisites
1. Install Firebase CLI globally (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to your Google / Firebase Account:
   ```bash
   firebase login
   ```

### Step-by-Step Deployment
1. Initialize Firebase (or ensure `.firebaserc` points to your project):
   ```bash
   firebase init hosting
   ```
   - **What do you want to use as your public directory?** `dist`
   - **Configure as a single-page app (rewrite all urls to /index.html)?** `Yes` (already handled in `firebase.json`)
   - **Set up automatic builds and deploys with GitHub?** `No` (or as preferred)
   - **File dist/index.html already exists. Overwrite?** `No`

2. Build the production application:
   ```bash
   npm run build
   ```

3. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

---

## 3. Custom Domain & HTTPS Setup in Firebase

1. Open the [Firebase Console](https://console.firebase.google.com/).
2. Select your project -> **Hosting** -> Click **Add Custom Domain**.
3. Enter your domain (e.g., `globaloffsetpatna.com` or `www.globaloffsetpatna.com`).
4. Copy the TXT or A records provided by Firebase into your domain registrar (GoDaddy, Namecheap, Hostinger, etc.).
5. Firebase automatically provisions and renews a free **Let's Encrypt SSL/TLS certificate** for secure HTTPS within 24 hours.

---

## 4. Google Search Console & Google Business Profile Setup

1. **Google Search Console**:
   - Add property: `https://globaloffsetpatna.com`
   - Submit Sitemap: `https://globaloffsetpatna.com/sitemap.xml`
   - Verify indexing of pre-rendered product and location URLs.

2. **Google Business Profile (GBP) Linking**:
   - Primary Category: *Commercial Printer* or *Print Shop*
   - Secondary Category: *Printing Equipment Supplier*
   - Name: `Global Offset`
   - Address: `Kunkun Singh Lane, Bikna Pahari, Near National Press, Patna, Bihar – 800004`
   - Phone: `+91 93869 51081`
   - Website URL: `https://globaloffsetpatna.com`
   - Appointment / Contact link: `https://globaloffsetpatna.com/contact`

---

## 5. Security & Caching Headers

The included `firebase.json` automatically enforces:
- `Cache-Control: public, max-age=31536000, immutable` for static assets, fonts, and images.
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Clean URLs without `.html` extensions.
