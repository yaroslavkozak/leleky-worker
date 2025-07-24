# Style Guide & Design System

## Current Status (as of June 2024)
- Styling is managed with Tailwind CSS, configured in `tailwind.config.js`, and the Tailwind Typography plugin (`@tailwindcss/typography`) for rich content.
- Custom color palette, font families, border radii, and shadows are defined in the Tailwind config.
- Layout is based on a responsive, mobile-first approach using Flexbox and CSS Grid via Tailwind utilities.
- All UI and content are in Ukrainian (uk-UA).
- Design is intended to be warm, reliable, and calm, with a focus on accessibility and clarity.

---

## Color Palette (from `tailwind.config.js`)

| Name       | Value      | Usage Example                |
|------------|------------|-----------------------------|
| primary    | #6C63FF    | Main accent, buttons, links  |
| secondary  | #FF6584    | Secondary accent, highlights |
| accent     | #FFE066    | Callouts, highlights         |
| neutral    | #F7F7FA    | Backgrounds, cards           |
| background | #FFFFFF    | Main background              |
| text       | #2D2E32    | Main text                    |
| muted      | #A0A3BD    | Muted text, placeholders     |
| border     | #E5E7EB    | Borders, dividers            |
| info       | #3ABFF8    | Info messages                |
| success    | #36D399    | Success messages             |
| warning    | #FBBD23    | Warning messages             |
| error      | #F87272    | Error messages               |

---

## Typography
- **Font Families:**
  - `sans`: 'Manrope', 'Inter', system-ui, sans-serif
  - `body`: 'Inter', system-ui, sans-serif
- **Font Weights:** Use Tailwind's `font-bold`, `font-medium`, etc.
- **Font Sizes:** Use Tailwind's `text-` utilities (e.g., `text-lg`, `text-2xl`).
- **Line Height:** Use Tailwind's `leading-` utilities for readability.

---

## Typography for Articles & Knowledge Base

All rich HTML content (e.g., Topic Articles, knowledge base pages) is rendered inside a `div` with the `prose` class from Tailwind Typography. This ensures beautiful, consistent styling for headings, lists, links, and more.

**Example:**
```tsx
<div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
```

Write content as HTML for best results. Markdown is also supported if a parser is added.

---

## Layout & Spacing
- **Container:** Centered, with `max-w-screen-xl` and `p-4` padding by default.
- **Spacing:**
  - Section spacing: `section` = `6rem` (custom spacing)
  - Content spacing: `content` = `3rem` (custom spacing)
  - Use Tailwind's `space-y-`, `space-x-`, `gap-`, `my-`, `py-`, etc. for consistent spacing.
- **Grid & Flex:**
  - Use `flex`, `flex-col`, `flex-row`, `items-center`, `justify-between`, etc.
  - Use `grid`, `grid-cols-2`, `md:grid-cols-3`, etc. for multi-column layouts.

---

## Border Radius & Shadows
- **Border Radius:**
  - Default: `rounded-[1rem]`
  - Large: `rounded-lg` (`1.5rem`)
  - Extra Large: `rounded-xl` (`2rem`)
- **Shadows:**
  - Card: `shadow-card` (`0 4px 8px rgba(0, 0, 0, 0.06)`)
  - Button: `shadow-button` (`0 2px 6px rgba(0, 0, 0, 0.08)`)
  - Use Tailwind's `shadow`, `shadow-md`, etc. for additional effects.

---

## Buttons
- **Primary Button:**
  - `bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg`
- **Secondary Button:**
  - `bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg`
- **Outlined Button:**
  - `border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors`
- **Disabled State:**
  - `opacity-50 cursor-not-allowed`

---

## Forms & Inputs
- **Input Fields:**
  - `border border-border rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary`
- **Labels:**
  - `block text-sm font-medium text-muted mb-1`
- **Error State:**
  - `border-error text-error`
- **Success State:**
  - `border-success text-success`
- **Checkboxes/Switches:**
  - Use Headless UI or Radix UI for accessible, styled controls.
- **Validation:**
  - Use clear error messages and accessible ARIA attributes.

---

## Cards & Surfaces
- **Card:**
  - `bg-white rounded-lg shadow-card p-6`
- **Section:**
  - `bg-neutral rounded-xl p-section my-section`

---

## Iconography
- **Icon Set:** [Lucide React](https://lucide.dev/icons/)
- **Usage:** Import icons and use with Tailwind color classes (e.g., `text-primary`, `text-muted`).

---

## Responsive Design
- **Mobile-First:** All layouts are mobile-first, using Tailwind's responsive prefixes (`md:`, `lg:`, etc.).
- **Navigation:** Header is sticky and responsive, with a planned mega menu and mobile accordion.
- **Images:** Use Next.js `<Image />` for optimization; avoid raw `<img>` where possible.

---

## Accessibility
- **Color Contrast:** All colors meet WCAG AA contrast requirements.
- **Focus States:** Use Tailwind's `focus:` utilities for visible focus rings.
- **ARIA:** Use ARIA roles and attributes for navigation, forms, and interactive elements.
- **Keyboard Navigation:** All interactive elements are keyboard accessible.

---

## Tailwind Usage & Customization
- All custom styles are defined in `tailwind.config.js`.
- Use utility classes for rapid prototyping and consistent design.
- Avoid custom CSS unless necessary; prefer Tailwind's approach.
- For new components, follow the established color, spacing, and typography system.

---

## Example Component Snippets

**Primary Button:**
```tsx
<button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
  Primary Action
</button>
```

**Input Field:**
```tsx
<input className="border border-border rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary" />
```

**Card:**
```tsx
<div className="bg-white rounded-lg shadow-card p-6">
  Card content here
</div>
```

---

## Design Consistency
- Always use the defined color palette, spacing, and typography.
- Reuse components and utility classes to maintain a unified look and feel.
- For new UI, consult this guide and `tailwind.config.js` before introducing new styles.

---

**For more details, see:**
- `tailwind.config.js` (all customizations)
- `components/` (actual UI components)
- `public/` (static assets, images)
