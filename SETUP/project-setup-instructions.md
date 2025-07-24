# Project Setup Instructions

## Current Status (as of June 2024)
- Project uses Next.js (TypeScript), Tailwind CSS, Headless UI, and MDX for content.
- All content and navigation data are managed in `/content` as TypeScript files.
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Static export (`next export`) is available for Cloudflare Pages deployment.
- Troubleshooting: TypeScript errors may occur if required props are missing (see `TopicLayout` usage).

---

> **Note:** The platform is for Ukrainian users. The primary language for the UI and content should be Ukrainian (uk-UA).

These instructions will help you set up the parenting platform using Next.js, Tailwind CSS, MDX for content (in Ukrainian), and deployment to Cloudflare Pages. This setup is static-first and future-proof for dynamic features.

---

## Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Git
- Cloudflare account (for deployment)

---

## 1. Initialize the Project

```bash
npx create-next-app@latest my-parenting-platform --typescript
cd my-parenting-platform
```

---

## 2. Set Up Tailwind CSS

Follow the [official Tailwind CSS guide for Next.js](https://tailwindcss.com/docs/guides/nextjs):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Update `tailwind.config.js`:
  - Set `content` to include all relevant files:
    ```js
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ]
    ```
- Replace the contents of `globals.css` with:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

---

## 3. Add MDX Support

Install MDX dependencies:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

Update (or create) `next.config.ts`:

```ts
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
```

- Create a `/content` directory for your MDX files (in Ukrainian).
- Use dynamic routes in `/pages` to render MDX content.

---

## 4. Install Headless UI and Radix UI (for accessible components)

```bash
npm install @headlessui/react @radix-ui/react-dropdown-menu
```

---

## 5. Version Control

```bash
git init
git add .
git commit -m "Initial project setup"
```

---

## 6. Local Development

```bash
npm run dev
```
- Visit [http://localhost:3000](http://localhost:3000) to view your site.

---

## 7. Deploy to Cloudflare Pages

1. Push your code to a GitHub/GitLab repository.
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project.
3. Connect your repository.
4. Set the build command to `npm run build` and the output directory to `.next` (for Next.js static export, use `out`).
5. For static export:
    - Add a script to `package.json`:
      ```json
      "scripts": {
        "export": "next export"
      }
      ```
    - Run `npm run export` before deploying if you want a fully static site (output will be in `/out`).
    - Set output directory to `out` in Cloudflare Pages settings.
6. Deploy!

---

## 8. Next Steps & Future Enhancements
- Add more components (Header, MegaMenu, etc.) using Headless UI/Radix UI.
- Integrate a headless CMS when you need dynamic content management (in Ukrainian).
- Add Cloudflare Pages Functions or Workers for API/auth features as you grow.
- Set up analytics (Plausible or Cloudflare Analytics).
- Add search (Algolia) if needed.

---

## Troubleshooting
- **TypeScript errors:** Ensure all required props are passed to components (e.g., `children` for `TopicLayout`).
- **Build errors:** Check for missing or misnamed files in `/content` or `/components`.
- **Static export issues:** Only static-compatible features will work with `next export`.

---

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS + Next.js Guide](https://tailwindcss.com/docs/guides/nextjs)
- [MDX in Next.js](https://nextjs.org/docs/advanced-features/using-mdx)
- [Cloudflare Pages + Next.js Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) 