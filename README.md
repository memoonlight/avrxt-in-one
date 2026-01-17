avrxt | Full-Stack Infrastructure & Personal Engine

"avrxt" (https://cdn.avrxt.in/assets/logo-02.png)

A high-performance, premium personal website and service platform engineered with Next.js 15+, Supabase, Tailwind CSS 4, and Vercel Analytics. Built for speed, security, scalability, and complete architectural control.

---

🏗️ System Architecture

graph TD
    User((User)) -->|HTTPS / TLS 1.3| WAF[Cloudflare WAF]
    WAF -->|Filtered Traffic| Vercel[Vercel Edge Network]

    subgraph "Application Layer (Next.js)"
        Vercel -->|SSR / ISR| AppRouter[App Router]
        AppRouter -->|Server Actions| Logic[Business Logic]
        AppRouter -->|Metadata Engine| SEO[Dynamic SEO & Robots]
    end

    subgraph "Data & Persistence"
        Logic -->|PostgreSQL| SupabaseDB[(Supabase DB)]
        Logic -->|Auth / JWT| SupabaseAuth[Supabase Auth]
        Logic -->|Blob Storage| SupabaseStorage[(Supabase Storage)]
    end

    subgraph "External Integrations"
        Logic -->|Lead Capture| GSheets[(Google Sheets API)]
        Logic -->|Transactional Email| Resend[(Resend API)]
        Logic -->|Payments| Razorpay[(Razorpay API)]
    end

    Admin((Admin)) -->|Verified Access| AdminPanels[Admin Dashboards]
    AdminPanels --> Logic

    style SEO fill:#f9f,stroke:#333,stroke-width:2px
    style WAF fill:#f60,stroke:#333,stroke-width:2px
    style Vercel fill:#000,stroke:#fff,color:#fff

---

🚀 Key Features

🎯 Core Pages & Functionality

- Landing Page ("/")
High-impact hero section with glassmorphism, tech stack matrices, and real-time production metrics.
- Profile Node ("/me")
Immersive “Link-in-Bio” ecosystem featuring live status, music sync, and a terminal-style newsletter.
- Technical Library ("/docs")
Markdown-powered documentation system with professional SEO and admin-level controls.
- Interaction Hub ("/guestbook")
Verified community messaging secured via GitHub OAuth.
- Project Intake ("/hireme")
Advanced service inquiry system with automated budget and timeline estimation.

☁️ Cloud Engineering ("/cloud")

Premium, tier-based service architecture supporting:

- Discord Bot Development – Moderation systems, AI dashboards, and custom neural workflows.
- Website Re-Design – UI/UX overhauls with performance-focused refactoring.
- Infrastructure Maintenance – Continuous monitoring, security hardening, and optimization.

🔐 Security & Privacy (Harden Layer)

- Zero-Index Protocol
Admin endpoints and sensitive routes are explicitly blocked using "robots.ts" and server metadata.
- Infrastructure Hardening
Enforced TLS 1.3, strict CSP headers, and Cloudflare WAF protection.
- Data Governance
Compliance with DPDP Act 2023 and GDPR.
- Secure Payments
Razorpay integration secured with 256-bit SSL and automated non-refundability enforcement.

📈 Pro-Level SEO

- Dynamic Sitemap – Auto-generated via "sitemap.ts" for static and dynamic routes.
- Metadata Objects – Server-side metadata injection for optimized social sharing and indexing.
- Dynamic Robots Control – Programmatic crawl-budget management via "robots.ts".

---

🛠️ Technology Stack

Layer| Technologies
Frontend| Next.js 15+, React 19, Tailwind CSS 4, Lucide
Backend| Next.js Server Actions, Node.js
Database| Supabase (PostgreSQL), Realtime
Authentication| Supabase Auth, GitHub OAuth
Communications| Resend API, Google Sheets API
Payments| Razorpay SDK
Observability| Vercel Analytics, Vercel Speed Insights

---

🏗️ Project Structure

src/
├── app/
│   ├── (legal)/         # Privacy, Terms, Refund, Security pages
│   ├── actions/         # Secured Server Actions
│   ├── admin/           # Multi-node admin dashboards
│   ├── cloud/           # Cloud services & payment flows
│   ├── me/              # Personalized profile & bio terminal
│   ├── robots.ts        # Dynamic robots configuration
│   └── sitemap.ts       # Dynamic sitemap generator
├── components/          # Premium UI components
├── lib/                 # Shared logic & Supabase client
└── utils/               # Helper utilities & constants

---

⚙️ Setup & Deployment

1. Clone & Install

git clone https://github.com/avrxtcloud/avrxt-in.git
npm install

2. Environment Configuration
Create ".env.local" and configure Supabase, Resend, Razorpay, and Google Service Account credentials.

3. Deployment
Optimized for Vercel with automatic CI/CD on "main" and "development" branches.

---

🤝 Contributing

This project accepts controlled community contributions.

Please read ""CONTRIBUTING.md"" (./CONTRIBUTING.md) before submitting a Pull Request.
All accepted contributions become part of the avrxt proprietary codebase.

---

🎨 Design Philosophy

The system follows a Dark Mesh design language:

- Performance – Sub-second LCP.
- Aesthetics – Glassmorphism, soft blurs, typography-driven layouts.
- Responsiveness – Fluid scaling from 320px to 4K displays.

---

📝 License & Contact

PROPRIETARY & CONFIDENTIAL
Copyright © 2026 @avrxt. All rights reserved.

This project is strictly for the exclusive use of @avrxt.
Unauthorized copying, modification, distribution, or reproduction of any part of this project without express written permission is prohibited and may result in legal action.

Developer: "@avrxt" (https://instagram.com/aviorxt)
Contact: "support@avrxt.in" (mailto:support@avrxt.in)

Last updated: January 15, 2026
