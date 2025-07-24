# Content Structure & Relationships

## Current Status (as of June 2024)
- All content is managed as TypeScript objects in `/content` (stages, topics, tools, blogPosts, blogCategories).
- Relationships are established via unique IDs (e.g., topic.stageId, blogPost.relatedTopics).
- Navigation is hierarchical: Stages > Topics > BlogPosts/Tools.
- The structure is static-first, but future-proofed for dynamic content (e.g., headless CMS).

---

## Data Models (TypeScript-like)

```ts
export type Stage = {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: any; // Lucide icon
  topics: string[]; // topic IDs
  tools: string[]; // tool IDs
  blogPosts: string[]; // blog post IDs
  articles: string[]; // article IDs
};

export type Topic = {
  id: string;
  stageId: string;
  name: string;
  icon: any;
  desc: string;
  image: string;
  tools: string[]; // tool IDs
  blogPosts: string[]; // blog post IDs
};

export type Tool = {
  id: string;
  name: string;
  description: string;
  url: string;
  image: string;
  relatedStages: string[];
  relatedTopics: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  category: string; // blogCategory ID
  relatedStages: string[];
  relatedTopics: string[];
  excerpt: string;
  image: string;
  url: string;
  date: string;
};

export type BlogCategory = {
  id: string;
  name: string;
};
```

---

## Topic Articles (Evergreen Content)

Topic Articles are evergreen, knowledge-base-style articles linked to specific topics and stages. They are stored in `/content/topicArticles.ts` as TypeScript objects with the following type:

```ts
export type TopicArticle = {
  id: string;
  topicId: string;
  stageId: string;
  title: string;
  slug: string;
  content: string; // HTML, rendered with Tailwind Typography
  relatedTools: string[];
  relatedBlogPosts: string[];
};
```

**Relationships:**
- Each Topic Article is linked to a topic (`topicId`) and stage (`stageId`).
- Articles can reference related tools and blog posts by ID for cross-linking.
- Topic pages display related articles as cards. If a topic has no articles, articles from other topics in the same stage are shown as fallback.

**Layout:**
- `TopicLayout` displays articles as cards, with fallback logic for empty topics.
- `TopicArticleLayout` uses a wide layout, with content, related articles, tools, and blog posts, and uses Tailwind Typography for content.

**Content Authoring:**
- Write article content as HTML in a template string for best results with Tailwind Typography.

## 1. Top-Level Menu Items (Evergreen Pages)
- **Examples:** Етапи батьківства, Інструменти, Блог, База знань, Спільнота, Підписка
- **Characteristics:**
  - Rarely updated
  - Serve as landing pages for their section
  - Display second-level items (subpages or categories)
  - Display blog posts related to all their submenu items
- **Special Cases:**
  - **Інструменти:** Lists all tools (internal or external) and blog posts about tools
  - **Блог:** Lists all blog categories and allows filtering by development stage/topic
  - **База знань, Спільнота:** Standalone pages for now
  - **Підписка:** CTA button with a dedicated link

## 2. Second-Level Menu Items
- **For Етапи батьківства:**
  - **Examples:** Підготовка до вагітності, Вагітність, Новонароджений, etc.
  - **Each is a page with:**
    - Detailed description of the development stage
    - Section of third-level items (topics for this stage)
    - Section of blog posts related to this stage
    - Section of tools related to this stage
    - Section of articles about this stage
- **For Інструменти:**
  - Each is a link to a tool page or external tool
- **For Блог:**
  - Each is a blog post category (e.g., Колонки експертів, Історії батьків, Огляди товарів, Що подивитись/почитати)
  - Each category page can feature posts related to any development stage
  - Should allow filtering by development stage/topic

## 3. Third-Level Menu Items (Development Stage Topics)
- **Examples:** Основи вагітності, Овуляція та фертильність, etc.
- **Each is a page with:**
  - Information on the specific topic for the selected development stage
  - Section of tools related to this topic
  - Section of blog posts related to this topic

## 4. Blog Posts
- **Each post has:**
  - Its own category (e.g., Колонки експертів, Історії батьків, Огляди товарів, Що подивитись/почитати, or future categories)
  - Can be related to any development stage or topic
  - Should be filterable by category, development stage, or topic

## 5. Relationships & Navigation
- **Top-level pages** link to their second-level items and aggregate related blog posts
- **Second-level (development stage) pages** link to their third-level topics, related tools, and blog posts
- **Third-level (topic) pages** link to related tools and blog posts
- **Blog category pages** can filter posts by development stage/topic
- **Tools** can be linked from multiple stages/topics
- **База знань, Спільнота** are standalone for now
- **Підписка** is a CTA, not a content page

## 6. Content Organization
- Each content type is stored in its own file in `/content` (e.g., `stages.ts`, `topics.ts`, `tools.ts`, `blogPosts.ts`, `blogCategories.ts`).
- Unique IDs are used for cross-referencing.
- Top-level menu structure is defined in code/config for easy updates.
- Relationships are documented here and in code comments.

---

## Component Consistency

All blog post and tool grids are now rendered via reusable `BlogPostGrid` and `ToolGrid` components for consistency across the project.

## SEO Meta Tags

SEO meta tags (title, description) are not yet implemented and should be added for production for all major page types (home, stage, topic, article, tool, blog post, blog category, knowledge base).

**If you have any questions or want to clarify specific relationships, please ask!** 