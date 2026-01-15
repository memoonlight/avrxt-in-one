# avrxt | Full-Stack Infrastructure & Personal Engine

![avrxt](https://cdn.avrxt.in/assets/logo-02.png)

A high-performance, premium personal website and service platform built with **Next.js 16**, **Supabase**, **Tailwind CSS 4**, and **Vercel Analytics**. Designed for speed, security, scalability, and absolute control.

---

## 🚀 Key Features

### 🎯 Core Pages & Functionality

- **Landing Page (`/`)**: Premium hero section with animated gradients, featured projects showcase, tech stack display, and call-to-action sections.
- **Personal Profile (`/me`)**: Standalone, immersive "Link in Bio" page with:
  - Live status indicator
  - Integrated music player
  - Visual gallery feed
  - Social media links
  - Resource cards
  - Newsletter subscription
- **Documentation Portal (`/docs`)**: Dynamic, SEO-optimized documentation system powered by Supabase with:
  - Markdown rendering
  - Category organization
  - Search functionality
  - Admin editing capabilities
- **Interactive Guestbook (`/guestbook`)**: Modern communication hub where users can:
  - Sign in via **GitHub OAuth**
  - Leave verified messages
  - Edit their own messages
  - Delete their own messages
  - View all community messages
- **Gallery (`/gallery`)**: Visual showcase of projects and media
- **Contact (`/contact`)**: Professional contact form with Google Sheets integration
- **Hire Me (`/hireme`)**: Service inquiry form with automated lead capture

### ☁️ Cloud Services Platform

- **Cloud Services (`/cloud`)**: Professional service booking platform featuring:
  - **Discord Bot Development** (Basic, Advanced, Custom tiers)
  - **Website Re-Design** (Basic, Advanced, Custom tiers)
  - **Website Maintenance** (Basic, Pro tiers)
  - Dynamic pricing based on selected variant
  - Feature comparison display
  - Integrated booking forms
  - Razorpay payment integration
  - Success confirmation pages
  - Email notifications via Resend

### 🧁 Cupcake Service

- **Cupcake Orders (`/cupcake`)**: Custom cupcake ordering system with:
  - Interactive order form
  - Google Sheets integration for order management
  - Email confirmations
  - Custom flavor and design options

### 🛡️ Legal & Compliance

- **Privacy Policy (`/privacy`)**: Comprehensive privacy documentation
- **Terms of Service (`/terms`)**: Service terms and conditions

### 🔐 Admin & Management

- **Admin Dashboards**: Integrated management tools for:
  - **Profile Admin (`/me/admin`)**: Edit `/me` content, status, gallery, music player, and social links
  - **Docs Admin (`/docs/admin`)**: Create, edit, publish, and manage documentation
  - Simple authentication system (demo/demo for development)
  - Live preview functionality
  - Real-time content updates

### 📊 Analytics & Performance

- **Vercel Analytics**: Real-time user behavior tracking and insights
- **Vercel Speed Insights**: Performance monitoring with Core Web Vitals:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - Time to First Byte (TTFB)
  - First Input Delay (FID)

### 🎨 Design & UX

- **Premium Aesthetics**: Modern glassmorphism design with:
  - Vibrant gradient backgrounds
  - Smooth animations and transitions
  - Responsive layouts for all devices
  - Dark mode optimized
  - Custom font stack (Inter, Space Mono, Outfit, Instrument Serif)
- **Interactive Components**:
  - Reveal animations on scroll
  - Hover effects
  - Micro-interactions
  - Loading states
  - Toast notifications

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16.1.1 (App Router, Server Actions)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

### Backend & Database
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth + GitHub OAuth
- **Storage**: Supabase Storage
- **Server Actions**: Next.js Server Actions

### Integrations & APIs
- **Analytics**: @vercel/analytics, @vercel/speed-insights
- **Email**: Resend API, Nodemailer (Gmail backup)
- **Payments**: Razorpay
- **Lead Capture**: Google Sheets API (googleapis)
- **CDN**: Amazon CloudFront
- **Hosting**: Vercel (CI/CD Automation)

### Development Tools
- **Language**: TypeScript 5
- **Linting**: ESLint 9
- **Package Manager**: npm

---

## 🏗️ System Architecture

```mermaid
graph TD
    User((User)) -->|Public Access| CF[Amazon CloudFront CDN]
    CF -->|Static Cache| Vercel[Vercel Hosting]
    Admin((Admin)) -->|Auth Access| AdminPanels[Admin Dashboards]
    Guest((Guest)) -->|GitHub OAuth| Guestbook[Guestbook Page]
    Customer((Customer)) -->|Service Booking| CloudServices[Cloud Services]
    
    Vercel -->|Server Side Rendering| EdgeFunctions[App Router / Server Actions]
    AdminPanels -->|Mutate Data| EdgeFunctions
    Guestbook -->|Verified Post| EdgeFunctions
    CloudServices -->|Payment & Booking| EdgeFunctions
    
    EdgeFunctions -->|Persistence| SupabaseDB[(Supabase DB)]
    EdgeFunctions -->|Asset Storage| SupabaseStorage[(Supabase Storage)]
    EdgeFunctions -->|Lead Capture| GSheets[(Google Sheets)]
    EdgeFunctions -->|Notifications| Resend[(Resend Email)]
    EdgeFunctions -->|Payment Processing| Razorpay[(Razorpay)]
    EdgeFunctions -->|Analytics| VercelAnalytics[Vercel Analytics]
    EdgeFunctions -->|Performance| SpeedInsights[Speed Insights]
    
    SupabaseDB -->|Docs/Config/Messages| EdgeFunctions
    SupabaseStorage -->|Media| CF
    
    style VercelAnalytics fill:#0070f3
    style SpeedInsights fill:#0070f3
    style Razorpay fill:#528ff0
    style CloudServices fill:#7c3aed
```

---

## 📁 Project Structure

```
avrxt-in-analysis/
├── src/
│   ├── app/
│   │   ├── actions/          # Server Actions
│   │   │   ├── cloud.ts      # Cloud service booking logic
│   │   │   └── cupcake.ts    # Cupcake order logic
│   │   ├── api/              # API Routes
│   │   │   └── subscribe/    # Newsletter subscription
│   │   ├── auth/             # Authentication pages
│   │   ├── cloud/            # Cloud services platform
│   │   │   ├── [service]/    # Dynamic service pages
│   │   │   └── success/      # Booking success page
│   │   ├── contact/          # Contact form
│   │   ├── cupcake/          # Cupcake ordering
│   │   ├── docs/             # Documentation portal
│   │   │   ├── admin/        # Docs admin panel
│   │   │   └── [slug]/       # Dynamic doc pages
│   │   ├── gallery/          # Media gallery
│   │   ├── guestbook/        # Interactive guestbook
│   │   ├── hireme/           # Hire me form
│   │   ├── me/               # Personal profile
│   │   │   └── admin/        # Profile admin panel
│   │   ├── privacy/          # Privacy policy
│   │   ├── subscribe/        # Newsletter subscription
│   │   ├── terms/            # Terms of service
│   │   ├── layout.tsx        # Root layout with Analytics
│   │   ├── page.tsx          # Landing page
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Reveal.tsx        # Scroll reveal animations
│   ├── lib/                  # Utilities & config
│   │   ├── me-config.ts      # /me page configuration
│   │   └── supabase/         # Supabase client setup
│   └── utils/                # Helper functions
├── public/                   # Static assets
├── .env.local               # Environment variables
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

---

## ⚙️ Environment Configuration

Create a `.env.local` file with the following keys:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Google Integration (Lead Capture)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_contact_sheet_id
INTAKE_SHEET_ID=your_hireme_sheet_id

# Email (Resend - Primary)
RESEND_API_KEY=re_your_api_key
RESEND_AUDIENCE_ID=your_audience_id
RESEND_FROM_EMAIL=updates@yourdomain.com

# Email (Gmail - Backup)
GMAIL_APP_PASSWORD=your_gmail_app_password
ADMIN_GMAIL_ID=your_gmail_address

# Payment (Razorpay)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

# App URL (Required for OAuth Redirects)
NEXT_PUBLIC_API_URL=https://avrxt.in
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Supabase account
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avrxtcloud/avrxt-in.git
   cd avrxt-in
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 🔐 Administrative Access

Access the admin panels via `/docs/login`. Once authenticated, you can toggle between:

- **Profile Admin (`/me/admin`)**: 
  - Edit profile content, bio, and handle
  - Update live status
  - Manage music player (title, artist, cover, audio)
  - Add/remove social links
  - Customize resource cards
  - Upload gallery images
  - Configure theme colors and branding

- **Docs Admin (`/docs/admin`)**: 
  - Create new documentation
  - Edit existing docs
  - Publish/unpublish content
  - Organize categories
  - Preview changes live

**Default Credentials (Development):**
- Username: `demo`
- Password: `demo`

> ⚠️ **Important**: Change these credentials in production!

---

## 🛠️ Deployment

This project is optimized for **Vercel Automation**:

1. **Connect to Vercel**
   - Import your GitHub repository
   - Configure environment variables
   - Deploy automatically

2. **Branch Strategy**
   - `main` / `master`: Production deployment
   - `development`: Staging/preview deployment
   - Feature branches: Automatic preview deployments

3. **Performance Optimization**
   - Static assets cached via Amazon CloudFront
   - Server-side rendering for dynamic content
   - Edge functions for API routes
   - Automatic image optimization
   - Code splitting and lazy loading

4. **Monitoring**
   - Real-time analytics via Vercel Analytics
   - Performance metrics via Speed Insights
   - Error tracking and logging

---

## 📊 Database Schema

### Supabase Tables

**guestbook_messages**
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to auth.users)
- `username`: Text
- `avatar_url`: Text
- `message`: Text
- `created_at`: Timestamp
- `updated_at`: Timestamp

**documents**
- `id`: UUID (Primary Key)
- `title`: Text
- `slug`: Text (Unique)
- `content`: Text (Markdown)
- `category`: Text
- `published`: Boolean
- `created_at`: Timestamp
- `updated_at`: Timestamp

**me_config**
- `id`: UUID (Primary Key)
- `config_key`: Text (Unique)
- `config_value`: JSONB
- `updated_at`: Timestamp

---

## 🎨 Design Philosophy

This project follows modern web design principles:

- **Performance First**: Optimized for Core Web Vitals
- **Mobile Responsive**: Seamless experience across all devices
- **Accessibility**: WCAG 2.1 compliant
- **SEO Optimized**: Meta tags, semantic HTML, sitemap
- **Progressive Enhancement**: Works without JavaScript
- **Dark Mode**: Optimized for low-light environments

---

## 🔄 Recent Updates

### Latest Features (January 2026)
- ✅ Vercel Analytics integration
- ✅ Vercel Speed Insights integration
- ✅ Cloud Services platform with tiered pricing
- ✅ Razorpay payment integration
- ✅ Cupcake ordering system
- ✅ Enhanced admin panels with live preview
- ✅ Improved mobile responsiveness
- ✅ Performance optimizations

### Coming Soon
- 🔜 Blog platform with CMS
- 🔜 Project showcase with case studies
- 🔜 Advanced analytics dashboard
- 🔜 Multi-language support
- 🔜 PWA capabilities
- 🔜 Advanced search functionality

---

## 📝 License

This project is proprietary and confidential.

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

---

## 📧 Contact

**Developer**: [@avrxt](https://instagram.com/aviorxt)  
**Website**: [avrxt.in](https://avrxt.in)  
**Email**: Available via contact form

---

**Designed and Developed by [@avrxt](https://instagram.com/aviorxt)**  
Built with 🖤 using Next.js, Supabase, and Vercel

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and analytics
- Supabase for backend infrastructure
- The open-source community

---

*Last Updated: January 15, 2026*
