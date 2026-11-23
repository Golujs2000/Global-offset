# GLOBAL OFFSET – Professional Printing Solutions & Equipment Supplier (Patna, Bihar)

Welcome to the official repository for **Global Offset**, a premier commercial printing house and printing solutions supplier based in Bikna Pahari, Patna, Bihar.

---

## 🌟 Business Overview

- **Business Name:** Global Offset
- **Category:** Printing Equipment Supplier, Commercial Printing & Printing Solutions
- **Location:** Kunkun Singh Lane, Bikna Pahari, Near National Press, Patna, Bihar – 800004, India
- **Phone:** +91 93869 51081
- **WhatsApp:** +91 93869 51081 (`https://wa.me/919386951081`)

---

## 🚀 Key Website Features

1. **High-Performance Architecture:**
   - React.js 19 with Vite
   - Tailwind CSS v4 custom corporate palette:
     - Primary: `#142B52` (Deep Industrial Navy)
     - Secondary: `#1877F2` (Vibrant Corporate Blue)
     - Accent: `#F59E0B` (Amber Gold)
     - Surface Light: `#F4F7FB`
   - Zero TypeScript (Clean Modern JavaScript)
   - Lucide React iconography

2. **Lead Generation & WhatsApp Integration:**
   - **Floating WhatsApp button** with pulsating ring and prompt.
   - **Sticky mobile bottom bar** featuring quick "Call Now" and "WhatsApp" actions.
   - **Pre-filled product-specific WhatsApp messages** (e.g. *"Hello Global Offset, I am interested in Diary Printing. Please share pricing and details."*).
   - Interactive **Fast Quote Modal** with direct WhatsApp transmission.
   - Click-to-call links throughout (`tel:+919386951081`).

3. **Complete Multi-Page Structure:**
   - **Home Page (`/`)**: Hero section, commercial printing overview, why choose us, featured products, industries served, testimonials, local SEO hub block, FAQs, and strong CTAs.
   - **About Us (`/about`)**: Company background in Bikna Pahari, mission, vision, facility overview, and trust pillars.
   - **Products & Services Listing (`/products`)**: Filterable catalog with quick specifications.
   - **10 Individual SEO Category Pages:**
     1. `/products/paper-printing` – All Types of Paper Printing
     2. `/products/diary-printing` – Diary Printing & Manufacturing
     3. `/products/register-printing` – Register Printing
     4. `/products/exam-copy-printing` – Examination Copy Printing
     5. `/products/study-material-printing` – Study Material Printing
     6. `/products/bill-book-printing` – Bill Books & Invoice Books
     7. `/products/receipt-book-printing` – Receipt Books & Voucher Books
     8. `/products/office-stationery` – Office Stationery Printing
     9. `/products/notebook-printing` – Customized Notebook Printing
     10. `/products/commercial-printing` – Commercial & Bulk Printing
   - **Work Gallery (`/gallery`)**: Categorized image portfolio with interactive lightbox preview and direct WhatsApp quote link.
   - **Contact Us (`/contact`)**: Verified address, phone, WhatsApp, interactive Google Map embed, business hours, and quote request form.
   - **404 Catch-All Page (`*`)**: Safe recovery with quick navigation.

4. **Advanced Local & Technical SEO:**
   - **Static Prerendering:** Every single route is pre-rendered into static HTML during build, allowing search engines (Googlebot, Bingbot) to index content without running JS.
   - **JSON-LD Structured Data:**
     - `LocalBusiness` / `PrintingShop` with official Bikna Pahari Patna address, geo-coordinates, telephone, and opening hours.
     - `BreadcrumbList` on all subpages.
     - `Product` schema on every product category.
     - `FAQPage` schema on Home and Product pages.
   - **Targeted Local Keywords:** Natural optimization for Patna, Bikna Pahari, Kunkun Singh Lane, Langar Toli, Ashok Rajpath, Bakarganj, Gandhi Maidan, and Bihar.
   - **Search Essentials:** `robots.txt`, dynamic `sitemap.xml`, canonical URLs, and Open Graph / Twitter Card tags.

---

## 🛠️ Build & Deployment Instructions

### Local Development
```bash
npm install
npm run dev
```

### Production Build & Static Prerendering
```bash
npm run build
```
This builds both the client assets and automatically pre-renders all 15 routes into `dist`.

### Firebase Hosting
```bash
firebase login
firebase deploy --only hosting
```
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed custom domain and SSL configuration.
