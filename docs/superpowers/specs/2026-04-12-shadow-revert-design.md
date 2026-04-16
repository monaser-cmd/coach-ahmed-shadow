# Shadow Realm Hybrid 2D/3D Multi-Page Design

**Goal:** Revert to a stable multi-page experience while retaining a subtle 3D aesthetic. Restore the full home page content and ensure all pages render correctly without infinite loading.

## 1. Architecture

- **Global 3D Layer:** A single, fixed-position `Canvas` in `App.tsx` rendering ONLY the `GlobalBackground` (Red Grid). 
- **Removed:** `SceneManager.tsx`, all per-page 3D sectors (`HomeSector`, `AboutSector`, etc.), and complex camera animations.
- **Master Routing:** Standard `react-router-dom` setup. Each route renders a dedicated page component.
- **Home Page:** `Index.tsx` restored to include all sections: Hero, About, Transformations, Packages, Contact.

## 2. Component Structure

### App Level
- `App.tsx`: Contains the background `Canvas` and the `Routes`.
- `GlobalBackground.tsx`: Retained for the neon grid effect.

### Home Page (`/`)
- Restoration of all sections into a single scrollable view.
- Section IDs preserved for scroll-to-link functionality.

### Sub-pages
- `/about`: 2D version of the coach bio.
- `/transformations`: 2D grid/carousel of transformations.
- `/packages`: 2D pricing table.
- `/contact`: 2D inquiry form.

## 3. Visual System (UI-UX Pro Max)

- **Style:** Dark Glassmorphism with Red Neon accents.
- **Colors:** Background `#050505`, Primary `#FF0000`, Secondary `#1A1A1A`.
- **Effects:** Backdrop blur (20px+), Neon glow borders, Framer Motion entrance animations.
- **Typography:** Oswald (Display), Inter (Body).

## 4. Implementation Strategy

1. **Purge 3D Sectors:** Delete all files in `src/components/three/sectors/`.
2. **Simplify SceneManager:** Delete `src/components/three/SceneManager.tsx`.
3. **Refactor App.tsx:** Remove SceneManager and postprocessing.
4. **Restore Index.tsx:** Combine all section components.
5. **Convert Pages:** Update About, Transformations, Packages, and Contact to 2D-only versions.
6. **Navbar Update:** Ensure navigation works for both hash links (on home) and routes (from sub-pages).
