# Data Types Reference

This document describes all major data types in the project, where they are defined, their fields, relationships, and how they are used in the UI.

---

## 1. Stage
- **Defined in:** `content/stages.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `name: string` — Display name
  - `description: string` — Description of the stage
  - `image: string` — Path to stage image
  - `icon: any` — Lucide icon
  - `topics: string[]` — Array of topic IDs for this stage
  - `tools: string[]` — Array of tool IDs for this stage
  - `blogPosts: string[]` — Array of blog post IDs for this stage
  - `articles: string[]` — Array of topic article IDs for this stage
- **Relationships:**
  - Links to Topics, Tools, BlogPosts, and TopicArticles by ID
- **UI Usage:**
  - Displayed on stage pages (`pages/stages/[stage].tsx`), navigation, and mega menu

---

## 2. Topic
- **Defined in:** `content/topics.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `stageId: string` — Parent stage ID
  - `name: string` — Display name
  - `icon: any` — Lucide icon
  - `desc: string` — Description
  - `image: string` — Path to topic image
  - `tools: string[]` — Array of tool IDs
  - `blogPosts: string[]` — Array of blog post IDs
- **Relationships:**
  - Belongs to a Stage (`stageId`)
  - Links to Tools, BlogPosts, and TopicArticles by ID
- **UI Usage:**
  - Displayed on topic pages (`pages/stages/[stage]/[topic].tsx`), navigation, and cards

---

## 3. Tool
- **Defined in:** `content/tools.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `name: string` — Tool name
  - `description: string` — Description
  - `url: string` — Route or external link
  - `image: string` — Path to tool image
  - `relatedStages: string[]` — Array of related stage IDs
  - `relatedTopics: string[]` — Array of related topic IDs
- **Relationships:**
  - Linked from Stages and Topics
- **UI Usage:**
  - Displayed in the Tools menu, tool pages (`pages/tools/[tool].tsx`), and related sections on stage/topic/article pages

---

## 4. BlogPost
- **Defined in:** `content/blogPosts.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `title: string` — Title
  - `category: string` — BlogCategory ID
  - `relatedStages: string[]` — Related stage IDs
  - `relatedTopics: string[]` — Related topic IDs
  - `excerpt: string` — Short summary
  - `image: string` — Path to image
  - `url: string` — Route to blog post
  - `date: string` — Publication date
- **Relationships:**
  - Linked to BlogCategory, Stages, Topics
- **UI Usage:**
  - Displayed in blog lists, category pages, and related sections on stage/topic/article pages

---

## 5. BlogCategory
- **Defined in:** `content/blogCategories.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `name: string` — Category name
- **Relationships:**
  - BlogPosts reference BlogCategory by ID
- **UI Usage:**
  - Displayed in blog navigation and category filters

---

## 6. TopicArticle
- **Defined in:** `content/topicArticles.ts`
- **Fields:**
  - `id: string` — Unique identifier
  - `topicId: string` — Parent topic ID
  - `stageId: string` — Parent stage ID
  - `title: string` — Article title
  - `slug: string` — URL slug
  - `content: string` — HTML content (rendered with Tailwind Typography)
  - `relatedTools: string[]` — Related tool IDs
  - `relatedBlogPosts: string[]` — Related blog post IDs
- **Relationships:**
  - Belongs to a Topic and Stage
  - Links to Tools and BlogPosts by ID
- **UI Usage:**
  - Displayed as cards on topic pages, as full articles on article pages, and in related sections

---

## 7. PregnancyPrepSubcategory (if used)
- **Defined in:** `content/pregnancyPrepSubcategories.ts`
- **Fields:**
  - (custom fields, see file)
- **Relationships:**
  - Used for sub-navigation or grouping in pregnancy prep
- **UI Usage:**
  - Displayed in subcategory navigation or filters

---

## 8. Other Types
- **Component Props:**
  - Many components define their own prop types (e.g., `TopicLayoutProps`, `StageLayoutProps`)
  - These are used for type safety and to pass data between pages and components

---

# Data Type Correlation Table

| Type         | Defined In                  | Used In / Displayed On                | Related Types                |
|--------------|-----------------------------|---------------------------------------|------------------------------|
| Stage        | content/stages.ts           | Stage pages, nav, mega menu           | Topic, Tool, BlogPost, Article|
| Topic        | content/topics.ts           | Topic pages, nav, cards               | Stage, Tool, BlogPost, Article|
| Tool         | content/tools.ts            | Tools menu, tool pages, related cards | Stage, Topic, Article        |
| BlogPost     | content/blogPosts.ts        | Blog lists, category, related cards   | BlogCategory, Stage, Topic   |
| BlogCategory | content/blogCategories.ts   | Blog nav, filters                     | BlogPost                    |
| TopicArticle | content/topicArticles.ts    | Topic cards, article pages, related   | Topic, Stage, Tool, BlogPost|

---

**This document should be updated whenever a new data type is added or changed.** 