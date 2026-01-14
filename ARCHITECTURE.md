# Application Architecture - Route Layouts

## Current Structure (After Changes)

```
avrxt/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← ROOT LAYOUT (with Navbar + Footer)
│   │   │   └── Applied to: All routes except /me/*
│   │   │
│   │   ├── page.tsx                      ← Homepage (has nav/footer)
│   │   ├── contact/page.tsx              ← Contact (has nav/footer)
│   │   ├── gallery/page.tsx              ← Gallery (has nav/footer)
│   │   ├── docs/page.tsx                 ← Docs (has nav/footer)
│   │   │
│   │   └── me/
│   │       ├── layout.tsx                ← CUSTOM LAYOUT (NO nav/footer) ✨ NEW
│   │       │   └── Applied to: /me and /me/admin
│   │       │
│   │       ├── page.tsx                  ← /me page (standalone) ✨ ISOLATED
│   │       └── admin/
│   │           └── page.tsx              ← /me/admin (standalone) ✨ ISOLATED
│   │
│   ├── components/
│   │   ├── Navbar.tsx                    ← Used by root layout only
│   │   ├── Footer.tsx                    ← Used by root layout only
│   │   └── ...
│   │
│   └── lib/
│       ├── me-config.ts                  ← Config for /me page
│       └── utils.ts
│
├── public/
├── package.json
└── tsconfig.json                         ← Fixed jsx: "preserve"
```

---

## Layout Hierarchy

### Root Layout (src/app/layout.tsx)
```
┌─────────────────────────────────────┐
│         ROOT LAYOUT                 │
│  ┌───────────────────────────────┐  │
│  │         Navbar                │  │ ← Logo + Menu
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │         {children}            │  │ ← Page content
│  │                               │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │         Footer                │  │ ← Footer links
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

Applied to routes:
✓ /
✓ /contact
✓ /gallery
✓ /docs
✓ /hireme
✓ /privacy
✓ /subscribe
✓ /terms
✓ ... (all except /me/*)
```

### /me Custom Layout (src/app/me/layout.tsx) ✨ NEW
```
┌─────────────────────────────────────┐
│       /me CUSTOM LAYOUT             │
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │         {children}            │  │ ← Page content ONLY
│  │                               │  │ ← NO Navbar
│  │                               │  │ ← NO Footer
│  │                               │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

Applied to routes:
✓ /me
✓ /me/admin
```

---

## Component Usage Map

### Navbar Component
```
Used by: Root Layout (src/app/layout.tsx)
Visible on:
  ✓ /
  ✓ /contact
  ✓ /gallery
  ✓ /docs
  ✗ /me          ← NOT visible
  ✗ /me/admin    ← NOT visible
```

### Footer Component
```
Used by: Root Layout (src/app/layout.tsx)
Visible on:
  ✓ /
  ✓ /contact
  ✓ /gallery
  ✓ /docs
  ✗ /me          ← NOT visible
  ✗ /me/admin    ← NOT visible
```

---

## Request Flow

### Regular Route (e.g., /contact)
```
Request: /contact
    ↓
Root Layout (layout.tsx)
    ├── Navbar ✓
    ├── Contact Page Content
    └── Footer ✓
    ↓
Response: Page WITH navigation
```

### /me Route (ISOLATED)
```
Request: /me
    ↓
Custom /me Layout (me/layout.tsx)
    └── /me Page Content ONLY
    ↓
Response: Standalone page WITHOUT navigation
```

### /me/admin Route (ISOLATED)
```
Request: /me/admin
    ↓
Custom /me Layout (me/layout.tsx)
    └── /me/admin Page Content ONLY
    ↓
Response: Standalone page WITHOUT navigation
```

---

## Key Benefits

### 1. Route Isolation ✨
- `/me` routes are completely independent
- No global navigation interference
- Clean, focused user experience

### 2. Maintainability 📦
- Easy to modify `/me` without affecting other routes
- Clear separation of concerns
- Modular architecture

### 3. Performance ⚡
- Smaller bundle for `/me` routes (no nav/footer components)
- Faster load times
- Better user experience

### 4. Flexibility 🎨
- Different layouts for different route groups
- Easy to add more custom layouts
- Scalable architecture

---

## Next.js Layout System

Next.js uses a nested layout system where:
1. Each folder can have its own `layout.tsx`
2. Child layouts inherit from parent layouts
3. To override parent layout, create a custom layout in child folder
4. Layouts are shared across all pages in that folder

**Our Implementation:**
```
app/layout.tsx           ← Root layout (with nav/footer)
  └── me/layout.tsx      ← Custom layout (overrides root, no nav/footer)
```

This creates a clean separation where `/me/*` routes are completely isolated!

---

**Architecture Design:** Antigravity AI
**Date:** 2026-01-14
**Status:** ✅ IMPLEMENTED
