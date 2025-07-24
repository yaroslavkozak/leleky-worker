# Project Structure Reference

This document explains every folder and file in the project, its purpose, and which data types it uses or triggers. Use this to understand the system, find flaws, and plan future development.

---

## Root Directory
- **package.json / package-lock.json** — Project dependencies and scripts
- **next.config.ts** — Next.js configuration
- **tailwind.config.js** — Tailwind CSS configuration (includes typography plugin)
- **postcss.config.js** — PostCSS configuration
- **tsconfig.json / next-env.d.ts** — TypeScript configuration
- **globals.css** — Global CSS (Tailwind base, components, utilities)
- **README.md** — Project overview
- **.gitignore / .gitattributes** — Git settings

---

## /SETUP
- **header-requirements.md, nav.md, style.md, content-structure.md, stack-requirements.md, project-setup-instructions.md, step-by-step-setup.md** — Project documentation
- **data-types.md** — (NEW) All data types, fields, relationships, and usage
- **project-structure.md** — (THIS FILE) Project structure and file purposes

---

## /content
- **stages.ts** — Defines Stage data type and all stages
- **topics.ts** — Defines Topic data type and all topics
- **tools.ts** — Defines Tool data type and all tools
- **blogPosts.ts** — Defines BlogPost data type and all blog posts
- **blogCategories.ts** — Defines BlogCategory data type and all blog categories
- **topicArticles.ts** — Defines TopicArticle data type and all topic articles (main array)
- **topicArticles/** — (Optional) Per-topic or per-article files for evergreen content (currently mostly empty)
- **pregnancyPrepSubcategories.ts** — (If used) Subcategories for pregnancy prep navigation

---

## /components
- **Header.tsx** — Main navigation, mega menu, mobile menu (uses Stage, Topic, Tool, BlogCategory, BlogPost)
- **Footer.tsx** — Footer navigation (uses Stage, Tool, BlogCategory)
- **Layout.tsx** — Generic layout wrapper (Header, Footer)
- **LandingLayout.tsx** — Home/landing page layout
- **StageLayout.tsx** — Layout for stage pages (uses Stage, Topic, Tool, BlogPost)
- **TopicLayout.tsx** — Layout for topic pages (uses Topic, Tool, BlogPost, TopicArticle)
- **TopicArticleLayout.tsx** — Layout for topic article pages (uses TopicArticle, Tool, BlogPost)
- **ToolLayout.tsx** — Layout for tool pages (uses Tool)
- **KnowledgeBaseLayout.tsx** — Layout for knowledge base pages
- **BlogPostLayout.tsx** — Layout for individual blog posts
- **BlogCategoryLayout.tsx** — Layout for blog category pages
- **WeekSelectionBlock.tsx, TrimesterSelectionBlock.tsx** — UI blocks for week/trimester selection

---

## /pages
- **_app.tsx** — Next.js app wrapper (imports global CSS)
- **_document.tsx** — Custom document (adds fonts, lang)
- **index.tsx** — Home page (uses LandingLayout)
- **/stages/** —
  - `[stage].tsx` — Stage landing pages (uses StageLayout)
  - `[stage]/[topic].tsx` — Topic landing pages (uses TopicLayout)
  - `[stage]/by-weeks/[week].tsx` — Week subtopic pages
  - `[stage]/by-trimesters/[trimester].tsx` — Trimester subtopic pages
- **/topics/[topicId]/articles/[slug].tsx** — Dynamic topic article pages (uses TopicArticleLayout, loads TopicArticle by topicId/slug)
- **/tools/[tool].tsx** — Tool pages (uses ToolLayout, loads Tool by ID)
- **/blog/** — Blog index, category, and post pages (uses BlogCategoryLayout, BlogPostLayout)
- **/knowledge-base/** — Knowledge base index and section pages (uses KnowledgeBaseLayout)

---

## /public
- **/images/** — All static images
  - **/topics/** — Topic images, organized by stage/topic
  - **/tools/** — Tool images, organized by tool
  - **/development-stages/** — Stage images
  - **/homepage-slider/** — Homepage hero images
- **globe.svg, next.svg, vercel.svg, window.svg, file.svg** — Icons

---

## /migrations
- **001_init.sql, 002_seed_articles.sql** — (If used) SQL migrations for database seeding (not used in static build)

---

## Data Type Usage Map
| File/Folder                        | Data Types Used/Triggered                |
|------------------------------------|------------------------------------------|
| content/stages.ts                  | Stage                                    |
| content/topics.ts                  | Topic                                    |
| content/tools.ts                   | Tool                                     |
| content/blogPosts.ts               | BlogPost                                 |
| content/blogCategories.ts          | BlogCategory                             |
| content/topicArticles.ts           | TopicArticle                             |
| components/Header.tsx              | Stage, Topic, Tool, BlogCategory, BlogPost|
| components/Footer.tsx              | Stage, Tool, BlogCategory                |
| components/StageLayout.tsx         | Stage, Topic, Tool, BlogPost             |
| components/TopicLayout.tsx         | Topic, Tool, BlogPost, TopicArticle      |
| components/TopicArticleLayout.tsx  | TopicArticle, Tool, BlogPost             |
| components/ToolLayout.tsx          | Tool                                     |
| components/BlogPostLayout.tsx      | BlogPost                                 |
| components/BlogCategoryLayout.tsx  | BlogCategory, BlogPost                   |
| pages/stages/[stage].tsx           | Stage, Topic, Tool, BlogPost             |
| pages/stages/[stage]/[topic].tsx   | Topic, Tool, BlogPost, TopicArticle      |
| pages/topics/[topicId]/articles/[slug].tsx | TopicArticle, Tool, BlogPost      |
| pages/tools/[tool].tsx             | Tool                                     |
| pages/blog/                        | BlogPost, BlogCategory                   |
| pages/knowledge-base/              | (Knowledge base content, static)         |

---

**This document should be updated whenever the project structure changes or new data types are added.** 

## Component Consistency

All blog post and tool grids are now rendered via reusable `BlogPostGrid` and `ToolGrid` components for consistency across the project.

## SEO Meta Tags

SEO meta tags (title, description) are not yet implemented and should be added for production for all major page types (home, stage, topic, article, tool, blog post, blog category, knowledge base). 