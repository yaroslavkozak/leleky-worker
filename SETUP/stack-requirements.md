# Tech Stack & Deployment Requirements for Parenting Platform

## Current Status (as of June 2024)
- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS, Tailwind Typography plugin (@tailwindcss/typography)
- **Content:** Static-first, MDX/Markdown and rich HTML in `/content` (Ukrainian). Topic Articles and knowledge base content use HTML rendered with Tailwind Typography for beautiful, consistent styling.
- **UI Components:** Headless UI, Radix UI, Lucide React
- **Deployment:** Cloudflare Pages (static export recommended)
- **Analytics:** [Planned] Plausible or Cloudflare Analytics
- **Search:** [Optional/Future] Algolia/Typesense
- **Design System:** [Future] Figma, Storybook
- **All dependencies listed in `package.json`**

---

> **Note:** The platform is for Ukrainian users. The primary language for the UI and content should be Ukrainian (uk-UA).

## 1. Framework
- **Next.js** (Required)
  - Static export for initial launch
  - Supports hybrid SSG/SSR and API routes for future dynamic features
  - Excellent SEO, performance, and scalability

## 2. Styling
- **Tailwind CSS** (Required)
  - Utility-first, responsive, accessible
  - Works seamlessly with Next.js
- **Tailwind Typography plugin** (Required for rich content styling)

## 3. Content Management
- **MDX/Markdown or HTML** (Required for static content; Topic Articles use HTML for rich formatting)
- **Headless CMS** (Optional/Future: Sanity, Contentful, Strapi)

## 4. Routing
- **Next.js file-based routing** (Required)
  - Supports static and dynamic routes

## 5. UI Components
- **Headless UI** (Required for accessible dropdowns/menus)
- **Radix UI** (Required for advanced dropdowns/menus)
- **Lucide React** (Required for icons)

## 6. Deployment
- **Cloudflare Pages** (Recommended for static export)
- **Cloudflare Pages Functions/Workers** (Optional/Future for SSR, API, auth)

## 7. Analytics
- **Plausible** or **Cloudflare Analytics** (Optional/Future)

## 8. Search
- **Algolia** or **Typesense** (Optional/Future)

## 9. Design System
- **Figma** (Future, for design/prototyping)
- **Storybook** (Future, for UI component documentation)

---

## Project Structure Example

```
/pages or /src/pages      // Next.js pages
/content                  // MDX/Markdown content (Ukrainian)
/components               // Header, MegaMenu, etc.
/public                   // Static assets
/styles                   // Tailwind config and global styles
```

---

## Why this stack?
- **Static-first:** Fast, simple, and cheap to deploy
- **Future-proof:** Easily add dynamic features (auth, API, CMS) via Cloudflare Workers/Functions
- **SEO & Accessibility:** Next.js + Tailwind + accessible components = best practices by default
- **Cloudflare-native:** No vendor lock-in, global performance, and security
- **Ukrainian-first:** All UI and content should be in Ukrainian (uk-UA)

---

## Dependencies (from `package.json`)

### Required
- next
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer
- @headlessui/react
- @radix-ui/react-dropdown-menu
- @mdx-js/loader
- @mdx-js/react
- @next/mdx
- lucide-react

### Dev/TypeScript
- typescript
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
- @eslint/eslintrc

### Optional/Future
- plausible
- cloudflare-analytics
- algolia
- typesense
- figma
- storybook

---

## References
- [Cloudflare Pages + Next.js Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [Cloudflare Pages + Astro Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) 