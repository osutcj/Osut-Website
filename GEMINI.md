# Gemini CLI Instructions - OSUT Project

This document provides project-specific mandates and workflows for the **OSUT (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca)** codebase. These instructions take precedence over general defaults.

## 1. Project Overview
- **Core Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- **Data Store**: JSON-based storage using **Vercel Blob** (production) and `public/assets/data/posts.json` (development fallback).
- **Storage Logic**: Centralized in `lib/posts.ts` using `getPosts()` and `savePosts()`.
- **Authentication**: Password-based auth for `/admin` and `/api/admin/*` using the `ADMIN_PASSWORD` environment variable.

## 2. Engineering Mandates

### Architecture & Components
- **Server Components First**: Default to React Server Components. Use `"use client"` only for interactivity (forms, modals, carousels).
- **Component Organization**: 
  - Shared components in `components/`.
  - Feature-specific components in subdirectories (e.g., `components/home/`, `components/despre/`).
- **Styling**: 
  - Primary: **Tailwind CSS 4**.
  - Secondary: **Vanilla CSS** for complex animations and keyframes (found in `.css` files imported into components).
- **Images**: Always use `next/image` with proper `sizes` and `alt` tags.

### API & Data Handling
- **Route Handlers**: Use App Router `route.ts` files.
- **Form Data**: Admin operations use `FormData` for concurrent file and text handling.
- **Error Handling**: Use consistent JSON responses: `NextResponse.json({ error: "Message" }, { status: ... })`.
- **JSON Store**: Always use the helper functions from `lib/posts.ts` to interact with the blog data. NEVER write directly to the JSON file in routes.

### Content & Localization
- **Code Language**: All variable names, function names, comments, and commit messages must be in **English**.
- **User Interface**: All user-facing text, blog content, and labels must be in **Romanian**.

## 3. Workflow Specializations

### Data Schema Changes
- Since the data is JSON-based, "schema" changes involve:
  1. Updating the `Post` interface in `lib/posts.ts`.
  2. Updating the Admin Dashboard form and API logic.
  3. Potentially writing a migration script to update existing `posts.json` entries if necessary.

### Admin Feature Updates
- When updating the Admin Dashboard or related APIs:
  - Verify password protection is maintained via `process.env.ADMIN_PASSWORD`.
  - Ensure the Vercel Blob / Local FS fallback logic in `lib/posts.ts` is respected.

## 4. Verification Checklist
- [ ] Does the change maintain mobile responsiveness?
- [ ] Are all new user-facing strings in Romanian?
- [ ] If the data structure changed, was the Admin Dashboard updated to match?
- [ ] For new features, verify the local fallback works (no `BLOB_READ_WRITE_TOKEN` set).
