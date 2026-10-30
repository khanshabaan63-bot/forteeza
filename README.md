# Forteeza Safe Company — Website Guide & Deployment Documentation

Welcome to the **Forteeza Safe Company** official website codebase. This website has been built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** to provide a fast, SEO-optimized, and premium industrial digital presence.

---

## 📁 Quick Architecture Overview

All website content, WhatsApp numbers, product catalogues, project showcases, and location pages are stored in clean data files. **You do not need coding knowledge to edit text, replace photos, or update prices/phone numbers.**

```
rakshak/
├── public/
│   └── images/
│       ├── logo/            # Brand logos (logo.png)
│       ├── hero/            # Hero section graphics (hero-safe.png)
│       ├── manufacturing/   # Factory workshop & craftsmanship photos
│       └── products/        # Commercial safe catalogue photos
├── src/
│   ├── config/
│   │   └── site.ts          # Central company info, WhatsApp number & URLs
│   ├── data/
│   │   ├── products.ts      # Product catalogue, categories & technical specs
│   │   ├── locations.ts     # 9 regional SEO location pages
│   │   ├── projects.ts      # Commercial installation case studies
│   │   └── manufacturing.ts # 7 manufacturing setup stages & photos
│   └── app/                 # All page routes, layouts & SEO sitemaps
```

---

## 🛠️ How to Make Common Changes (No Coding Needed)

### 1. How to Change the WhatsApp Number
Open `src/config/site.ts` in any text editor (like Notepad or VS Code):
```typescript
export const siteConfig = {
  name: "Forteeza Safe Company",
  whatsappNumber: "918076009057",     // Change to your new number (include country code 91, no plus sign or spaces)
  whatsappDisplay: "+91 8076009057",  // Change to your human-readable display number
};
```
Every WhatsApp button across the header, footer, product pages, location pages, and floating button will automatically update.

---

### 2. How to Replace Manufacturing Photos
The About Us page features 7 dedicated manufacturing setup stages. When you have new photographs from your workshop:
1. Copy your photo into the `public/images/manufacturing/` folder.
2. Open `src/data/manufacturing.ts`.
3. Locate the item you wish to update and change `imageSrc`:
```typescript
{
  id: "mfg-workshop",
  title: "Heavy Manufacturing Workshop & Machining Bay",
  imageSrc: "/images/manufacturing/my-new-workshop-photo.jpg", // your new photo
  isGenuineSuppliedPhoto: true,
  statusLabel: "Actual Workshop Photo",
}
```

---

### 3. How to Add or Edit Products
Open `src/data/products.ts`:
- To edit an existing safe: change the name, description, features list, or technical specifications.
- To add a new safe: copy an existing product block, change its `id`, `name`, `slug`, and `images` path.
- To replace a product photo: place the image in `public/images/products/` and update the `images: ["/images/products/my-new-safe.png"]` field.

---

### 4. How to Update Target Location Information
Open `src/data/locations.ts`:
- Each of the 9 locations has its own tailored introduction, commercial profile, local market references, and FAQs.
- You can add or modify local text easily without touching code.

---

### 5. How to Update Website Domain
Open `src/config/site.ts`:
```typescript
siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://forteezasafes.com",
```
Change `"https://forteezasafes.com"` to your verified live domain name.

---

## 🚀 Deployment Instructions (Step-by-Step)

### Step 1: Push Code to GitHub
1. Create a free account at [GitHub.com](https://github.com) if you haven't already.
2. Create a new private or public repository named `forteeza-website`.
3. Upload or push this folder to your GitHub repository.

### Step 2: Deploy on Vercel (Free & Instant)
1. Sign in to [Vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New"** -> **"Project"**.
3. Select your `forteeza-website` repository from GitHub.
4. Leave all build settings at their defaults:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **"Deploy"**. Vercel will build and deploy the website in under 2 minutes and assign a live URL (e.g., `forteeza-website.vercel.app`).

### Step 3: Connect Your Custom Domain
1. In your Vercel project dashboard, go to **Settings** -> **Domains**.
2. Enter your domain name (e.g. `forteezasafes.com` and `www.forteezasafes.com`).
3. Vercel will show you the exact DNS records to add:
   - Type `A` Record: Name `@`, Value `76.76.21.21`
   - Type `CNAME` Record: Name `www`, Value `cname.vercel-dns.com`
4. Log into your domain registrar (GoDaddy, Namecheap, Hostinger, etc.), open **DNS Management**, and add these two records.
5. Vercel automatically generates and renews a free **SSL / HTTPS security certificate**.

### Step 4: Google Search Console & Sitemap Submission
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Add your domain property (`https://forteezasafes.com`).
3. Verify domain ownership using the DNS TXT record or HTML tag provided by Google.
4. Go to **Sitemaps** on the left menu.
5. Enter `sitemap.xml` in the submission field and click **Submit**.
   The website automatically generates a dynamic XML sitemap located at `https://yourdomain.com/sitemap.xml` containing all pages, products, and regional location URLs.

---

## 💻 Local Testing & Development

To test the website on your local machine:
```bash
# Run local development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
The website will run locally at `http://localhost:3000`.
