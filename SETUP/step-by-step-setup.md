# Step-by-Step Setup: Foundation for Your Parenting Platform

## Current Status (as of June 2024)
- Project uses Next.js (TypeScript), Tailwind CSS, Headless UI, and MDX for content.
- All content and navigation data are managed in `/content` as TypeScript files.
- Main layout and navigation components are in `/components` (e.g., `Header.tsx`, `Footer.tsx`, `Layout.tsx`).
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Static export (`next export`) is available for Cloudflare Pages deployment.

---

> **Note:** The platform is for Ukrainian users. The primary language for the UI and content should be Ukrainian (uk-UA).

This guide will take you from zero to a running Next.js + Tailwind CSS + MDX project, with a home page, header, footer, and a clear layout/navigation foundation for your platform (in Ukrainian).

---

## 1. Install Prerequisites
- **Node.js** (v18+): [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git**: [Download here](https://git-scm.com/)

---

## 2. Create Your Project Directory

```bash
npx create-next-app@latest my-parenting-platform --typescript
cd my-parenting-platform
```
- Choose **TypeScript** for type safety and maintainability.

---

## 3. Initialize Git (Optional but recommended)

```bash
git init
git add .
git commit -m "Initial Next.js app"
```

---

## 4. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Edit `tailwind.config.js`:
  - Replace the `content` array with:
    ```js
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ]
    ```
- Edit `globals.css` to contain only:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

---

## 5. Install MDX Support

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

- Edit (or create) `next.config.ts` to look like:
    ```ts
    const withMDX = require('@next/mdx')({
      extension: /\.mdx?$/,
    });
    module.exports = withMDX({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    });
    ```

---

## 6. Create Core Folders

```bash
mkdir content
mkdir components
```

---

## 7. Create Layout, Header, and Footer Components

- Create `components/Layout.tsx`, `components/Header.tsx`, `components/Footer.tsx` (see actual files for implementation).
- Use these components in your pages (e.g., `pages/index.tsx`).

---

## 8. Use the Layout in Your Home Page

- Edit `pages/index.tsx`:
    ```tsx
    import Layout from '../components/Layout';
    
    export default function Home() {
      return (
        <Layout>
          <section className="container mx-auto py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Parenting Platform</h1>
            <p className="text-lg mb-8">Your trusted resource for every stage of parenting, from pre-conception to adolescence.</p>
            {/* Add hero image, call-to-action, or featured links here */}
          </section>
        </Layout>
      );
    }
    ```

---

## 9. (Optional) Add a Navigation Outline Page

- Create `pages/_app.tsx` (if not present) to apply global styles and layout:
    ```tsx
    import '../globals.css';
    
    export default function App({ Component, pageProps }) {
      return <Component {...pageProps} />;
    }
    ```

- Add placeholder pages for navigation (e.g., `pages/stages/index.tsx`, `pages/tools/index.tsx`, etc.) to outline your site structure (in Ukrainian).

---

## 10. Run the Development Server

```bash
npm run dev
```
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- You should see your home page with header, footer, and navigation links.

---

## 11. Next Steps
- Refine the header and footer with branding, icons, and responsive design.
- Build out navigation dropdowns/mega menus as needed.
- Start populating content and improving the layout (in Ukrainian).
- Commit your changes regularly with Git.

---

## 12. (Optional) Prepare for Deployment
- Push your code to GitHub or GitLab.
- Follow the deployment instructions in `project-setup-instructions.md` to deploy to Cloudflare Pages.

---

## Troubleshooting
- **TypeScript errors:** Ensure all required props are passed to components (e.g., `children` for `TopicLayout`).
- **Build errors:** Check for missing or misnamed files in `/content` or `/components`.
- **Static export issues:** Only static-compatible features will work with `next export`.

---

## You’re Ready!
You now have a solid foundation—home page, header, footer, and navigation—to start building your parenting platform (in Ukrainian)! 