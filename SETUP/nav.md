# Navigation Structure & Relationships

## Current Status (as of June 2024)
- Navigation is hierarchical and data-driven, defined in `/content` (stages, topics, tools, blogCategories, blogPosts).
- The main navigation is implemented in `components/Header.tsx`.
- Mega menu for "Етапи батьківства" (Parenting Stages) is planned, with multi-level dropdowns.
- All navigation and content are in Ukrainian (uk-UA).

---

## Visual Outline

```
Header Navigation:

- Головна (Home)
- Етапи батьківства ▼ (Parenting Stages)
    - Підготовка до вагітності (Pregnancy Prep)
        - Основи вагітності (Basics)
        - Овуляція та фертильність (Ovulation)
        - Репродуктивне здоров'я (Reproductive Health)
        - Профілактика та обстеження (Prevention)
        - Харчування та спосіб життя (Nutrition)
        - Психологічна підготовка (Psychology)
        - Планування сім’ї (Family Planning)
    - Вагітність (Pregnancy)
        - За триместрами (By Trimesters)
        - По тижнях (By Weeks)
        - Стан мами (Mom State)
        - Розвиток дитини (Baby Development)
        - Здоров'я та безпека (Health & Safety)
        - Харчування та активність (Nutrition & Activity)
        - Підготовка до пологів (Birth Prep)
        - Підготовка до малюка (Baby Prep)
    - ... (Новонароджений, Немовля, Дитина, Підліток, etc.)
- Інструменти ▼ (Tools)
    - All tools are displayed in a grid with images in the dropdown menu for better UX.
- Блог ▼ (Blog)
    - Колонки експертів (Expert Columns)
    - Історії батьків (Parent Stories)
    - Огляди товарів (Product Reviews)
    - Що подивитись/почитати (What to Watch/Read)
- База знань (Knowledge Base)
- Спільнота (Community) [hidden]
- Підписка (Subscription) [hidden]
```

---

## Relationships & Correlation

- **Stages** are the primary navigation axis. Each stage (e.g., "Вагітність") contains multiple **topics** (e.g., "За триместрами").
- **Topics** are always linked to a parent stage and may have related **tools** and **blog posts**.
- **Tools** can be linked from multiple stages/topics and are listed under the "Інструменти" menu.
- **Blog** is organized by **categories** (e.g., "Колонки експертів") and can be filtered by stage or topic. Blog posts are cross-referenced to stages/topics via IDs.
- **Knowledge Base** and **Community** are standalone sections for now, but may aggregate or cross-link content in the future.
- **Subscription** is a CTA, not a content page, and may appear as a button in the header.

---

## Data-Driven Navigation
- All navigation items are defined in `/content` files:
    - `stages.ts` (array of stages, each with topic IDs)
    - `topics.ts` (array of topics, each with stageId)
    - `tools.ts` (array of tools, each with relatedStages/relatedTopics)
    - `blogCategories.ts` (array of blog categories)
    - `blogPosts.ts` (array of blog posts, each with relatedStages/relatedTopics)
- Relationships are established via unique IDs for easy cross-referencing and filtering.

---

## Example: Correlation Table

| Menu Item         | Submenu/Section         | Data Source         | Relationship                |
|-------------------|------------------------|---------------------|-----------------------------|
| Етапи батьківства | Підготовка до вагітності| stages.ts           | topics[] (by ID)            |
| Підготовка до вагітності | Основи вагітності   | topics.ts           | stageId                     |
| Інструменти       | Калькулятор овуляції   | tools.ts            | relatedStages/relatedTopics |
| Блог              | Колонки експертів      | blogCategories.ts   | blogPosts[] (by category)   |
| Блог пост         | ...                    | blogPosts.ts        | relatedStages/relatedTopics |

---

## Notes
- The navigation is designed to be scalable and easily updatable by editing the `/content` files.
- Mega menu and advanced filtering are planned for future releases.
- All navigation and content are in Ukrainian (uk-UA) for the target audience.

---

**For more details, see:**
- `SETUP/content-structure.md` (data models & relationships)
- `SETUP/header-requirements.md` (header & menu UX)
- `/content/*.ts` (actual navigation data)

## Topic Articles & Knowledge Base

Topic Articles are accessible from topic pages as cards. If a topic has no articles, articles from other topics in the same stage are shown as fallback. Knowledge Base has a dedicated layout and navigation.
