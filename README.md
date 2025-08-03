# 🎟️ Tier-Based Event Showcase

A responsive web application built with **Next.js 14 (App Router)**, **Clerk.dev**, **Supabase**, and **Tailwind CSS**. 
It showcases events based on the logged-in user’s tier (Free, Silver, Gold, Platinum).

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Authentication:** Clerk.dev
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS

---

## 📋 Features

### ✅ Core Functionality
- Authentication using Clerk (Sign In, Sign Up, Sign Out).
- User tier stored in Clerk metadata (`publicMetadata.tier`).
- Events fetched from Supabase and filtered based on user’s tier.
- Responsive grid UI showing event details.
- Middleware protection using `clerkMiddleware()`.
- Clean and modern UI using Tailwind CSS.

### ⚡ Bonus Features
- ✅ Simulated tier upgrade with a single button (updates Clerk metadata).
- ✅ Message shown for events not accessible due to tier.
- ✅ Loading spinner while fetching events.
- ✅ Error handling for Supabase/API issues.

---
## 🚀 Tech Stack
- Next.js 14 (App Router)
- Clerk.dev (Authentication)
- Supabase (PostgreSQL)
- Tailwind CSS

## 🛠 Setup Instructions

1. Clone the repo:
```bash
git clone [<repo-url>](https://github.com/Ri-yan/Tier-Based-Event-Showcase.git)
cd Tier-Based-Event-Showcase
```

2. Add your Clerk and Supabase credentials to `.env.local` (based on `.env.example`)

3. Install dependencies:
```bash
npm install --f
```

4. Run locally:
```bash
npm run dev
```


