# GitHub Copilot Instructions - OSUT Project

Welcome to the **OSUT (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca)** codebase. Follow these instructions to ensure consistency and quality across the project.

## 1. Tech Stack & Environment
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19 (Server & Client Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4 & Vanilla CSS
- **Data Store**: JSON storage via **Vercel Blob** (Production) / `public/assets/data/posts.json` (Local Development)
- **Components**: Swiper (Sliders), Iconoir (Icons)

## 2. Coding Guidelines

### Frontend (React & Next.js)
- **Component Patterns**:
  - Prefer **Server Components** by default for better performance.
  - Use `"use client"` only for components requiring interactivity (e.g., forms, modals, hooks).
  - Place components in `components/` folder, organized by page or feature (e.g., `components/home/`, `components/despre/`).
- **Styling**:
  - Use **Tailwind 4** utility classes for layout and common styling.
  - Use **Vanilla CSS** for complex animations, keyframes, or highly specific designs. Import CSS files directly into the component's `.tsx` file.
- **Image Optimization**:
  - Always use `next/image` for responsive and optimized images.

### Backend & Data Store
- **JSON Data Store**:
  - Use `getPosts()` and `savePosts()` from `@/lib/posts` for all blog interactions.
  - Define all post properties in the `Post` interface within `lib/posts.ts`.
- **API Routes**:
  - Use Next.js App Router route handlers (`route.ts`).
  - Standardize error responses using `NextResponse.json({ error: "..." }, { status: 500 })`.
- **File Handling**:
  - Use `FormData` to handle simultaneous text and file uploads.
  - Images are stored in Vercel Blob or `public/assets/uploads/`.

## 3. Project Specifics
- **Admin Authentication**: 
  - Admin routes (`/admin`, `/api/admin/*`) use a password-based verification from the `ADMIN_PASSWORD` environment variable.
  - Always check for `process.env.ADMIN_PASSWORD` before allowing sensitive operations.
- **Language**: 
  - Code (variables, functions, classes) should be in **English**.
  - Content (UI text, blog posts, labels) must be in **Romanian**.

## 4. Quality Standards
- **TypeScript**: Always use the `Post` interface for post data.
- **Animations**: Use standard CSS `@keyframes` for "alive" UI experiences.
- **Responsiveness**: All pages must be fully responsive (mobile-first).

---
**Note**: When adding new fields to blog posts, update the `Post` interface in `lib/posts.ts` first.
