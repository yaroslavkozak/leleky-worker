🧾 Technical Brief: Header Implementation for Parenting Platform

## Current Status (as of June 2024)
- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **Component:** `components/Header.tsx`
- **Navigation:** Mega menu for "Етапи батьківства" (Parenting Stages) is planned, with dropdowns and multi-level support. Some features (e.g., language switcher, social icons) are planned but not yet implemented.
- **Accessibility:** Uses Headless UI and ARIA roles for accessible navigation. Keyboard navigation and focus states are in progress.
- **Performance:** Designed to be sticky, responsive, and modular. Uses Next.js best practices for performance.

---

> **Note:** The platform is for Ukrainian users. The primary language for the UI and content should be Ukrainian (uk-UA).

🎯 Goal:

Develop a responsive, scalable, and user-friendly header component for a parenting educational platform that helps mothers and fathers navigate through key stages of child development—from pre-conception to adolescence.

This header will serve as the main navigation system and must support a complex content structure, be fully accessible, and work across desktop and mobile devices.

⚙️ Technology Stack
- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI, Radix UI (for dropdowns/menus)
- **Routing:** Next.js file-based routing
- **Accessibility:** WCAG 2.1 A/AA compliance where possible
- **Performance:** Sticky header, optimized for modern browsers

📐 Header Requirements
1. Top Bar (optional)
   - Language switcher (UA / RU) [Planned]
   - Social icons (Telegram, Viber, Facebook) [Planned]
   - Login / Register or Profile Avatar [Planned]

2. Main Header
   - Logo (left-aligned)
   - Main Navigation Menu (center or right-aligned):
     - Home
     - Parenting Stages ▼ (dropdown menu / mega menu)
     - Tools ▼
     - Blog ▼
     - Knowledge Base ▼
     - Community ▼ [hidden]
     - Subscription / Newsletter [hidden]
   - Search Icon / Input [Planned]
   - Profile Icon / Avatar [Planned]
   - Sticky header on scroll

🗂️ Advanced Mega Menu Structure
- Parenting Stages menu item triggers a full-width horizontal bar with main stages.
- Hover/click on a stage opens a mega menu panel with:
  - Level 3 sub-items (multi-column layout)
  - Related blog posts (2-3 preview cards)
  - Related tools (2-3 icons/links)
- Fully responsive: collapses into nested accordion on mobile.

🗂️ Navigation Structure (Legacy/Reference)
- Parenting Stages (Mega Menu with 2-level nesting):
  - Pre-conception, Pregnancy, Newborn, Infant, Toddler, Preschool, Schooler, Teenager
  - Each with sub-categories/topics
- Tools: All tools are shown in a grid with images in the dropdown for improved UX.
- Blog: Expert Columns, Parent Stories, Product Reviews, etc.
- Knowledge Base: A–Z Topics, FAQ, Symptom Checker, etc.
- Community: Forum, Groups, Events, etc.

## Topic Articles & Knowledge Base

Topic Articles are evergreen articles linked to topics and stages, displayed as cards on topic pages. If a topic has no articles, fallback to articles from other topics in the same stage. Knowledge Base has a dedicated layout and navigation.

📱 Mobile View Requirements
- Hamburger menu (top-left or top-right)
- Logo centered
- Search and profile icons visible [Planned]
- Full-screen overlay with accordion for nested items
- Prioritize one-hand navigation

🧩 UX/UI Guidelines
- Design: Warm, reliable, calm (mint, soft blue, pale coral)
- Fonts: Inter, Open Sans, or similar
- Hover/focus states for accessibility
- Mega menu: Multi-column with icons/thumbnails
- Breadcrumbs on nested pages (if possible)
- All navigation/content in Ukrainian (uk-UA)

♿ Accessibility & Performance
- Uses Headless UI for accessible dropdowns/menus
- ARIA roles and keyboard navigation in progress
- Sticky header for persistent navigation
- Optimized for Lighthouse accessibility & performance

📚 Reference Websites
- TheBump.com, BabyCenter.com, WhatToExpect.com, Nanit.com

✅ Acceptance Criteria
- All menu items accessible from desktop and mobile
- Header remains fixed (sticky) on scroll
- Navigation is intuitive with 2-level nesting max
- Code is clean, modular, and maintainable
- Design scales with future additions
- Passes Lighthouse audit for accessibility & performance

---

**Component Reference:**
- Main header logic: `components/Header.tsx`
- Mega menu logic: [Planned, to be implemented in Header or separate MegaMenu component]
- Navigation data: `/content/stages.ts`, `/content/topics.ts`, etc.

