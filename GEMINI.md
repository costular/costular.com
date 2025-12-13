# Project Context: costular.com

## Project Overview

This is a personal website and blog built with **Astro** and **Tailwind CSS**. It features a distinct "neo-brutalist" design aesthetic characterized by bold typography, high-contrast borders, hard shadows, and a specific green (`#59AC77`) accent color.

### Tech Stack
*   **Framework:** Astro (v5+)
*   **Styling:** Tailwind CSS (v4) with `@tailwindcss/typography`
*   **Language:** TypeScript / Astro
*   **Content:** Markdown-based blog using Astro Content Collections

## Architecture & Structure

*   **`src/layouts/Layout.astro`**: The main layout component wrapping all pages. Handles the `<head>`, global navigation, and footer.
*   **`src/pages/`**:
    *   `index.astro`: The homepage.
    *   `blog/index.astro`: The blog listing page.
    *   `blog/[...slug].astro`: Dynamic route for individual blog posts.
*   **`src/content/blog/`**: Directory for blog posts written in Markdown (`.md`).
*   **`src/styles/global.css`**:  **Crucial file.** Contains the Tailwind v4 configuration, including custom CSS variables for the theme (colors, fonts, shadows) and custom utility classes like `.brutal-btn` and `.brutal-card`.
*   **`public/`**: Static assets like the avatar image and `robots.txt`.

## Design System & Conventions

The project follows a **Neo-Brutalist** design system configured in `src/styles/global.css`:

*   **Typography:**
    *   **Headings:** `Archivo Black` (sans-serif, bold).
    *   **Body:** `Inter` (sans-serif).
*   **Colors:**
    *   **Primary (Green):** `#59AC77` (Used for highlights, hover states, badges). Defined as `--color-primary`.
    *   **Text:** `#1a1a1a` (Dark gray, almost black). Defined as `--color-brutal-text`.
    *   **Background:** `#fff`.
    *   **Borders/Shadows:** `#000` (Pure black).
*   **Styling Patterns:**
    *   **Shadows:** Hard, offset shadows (e.g., `box-shadow: 4px 4px 0px 0px #000`).
    *   **Borders:** Thick, solid borders (e.g., `border-4 border-black`).
    *   **Interactions:** Hover states often involve slight rotation (`rotate-3`) and scaling (`scale-105`).
*   **Tailwind v4:** Note that this project uses Tailwind v4. Theme customization happens in the CSS file via the `@theme` directive, not `tailwind.config.js`.

## Building and Running

### Prerequisites
*   Node.js (LTS recommended)
*   npm

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    Runs usually at `http://localhost:4321`.

*   **Build for Production:**
    ```bash
    npm run build
    ```
    Generates static files in the `dist/` directory.

*   **Preview Build:**
    ```bash
    npm run preview
    ```

## Key Configuration Files

*   **`astro.config.mjs`**: Configures Astro integrations (Tailwind, Sitemap).
*   **`src/content/config.ts`**: Defines the schema for the blog content collection (validating frontmatter like title, date, description).
*   **`src/utils/readingTime.ts`**: Utility to calculate reading time for blog posts.
