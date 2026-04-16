# Hall of Fame Page Design Spec

**Title:** Hall of Fame (Champs & Medals)
**Date:** 2026-04-15
**Status:** Approved by User

## 1. Overview
Create a high-impact "Hall of Fame" page inside the existing fitness coaching website. This page will showcase successful athletes and champions using the existing UI design system, components, and 3D effects.

## 2. Technical Requirements
- **Path:** `/hall-of-fame`
- **Label:** "Hall of Fame" in Navbar.
- **Language:** Default Arabic for content.
- **Theme:** Inherit current dark theme (`#050505`).
- **Assets:**
  - Hero Background: `src/assets/images/Champs and Medals/champ-banner.webp`
  - Gallery Images: `src/assets/images/Champs and Medals/champ-1.webp` through `champ-24.webp`
  - 3D Particles: `src/components/ParticleField.tsx`

## 3. Component Structure

### A. Navigation Update
- Add `{ label: "Hall of Fame", href: "/hall-of-fame" }` to `src/components/Navbar.tsx`.

### B. Page: `src/pages/HallOfFame.tsx`
- **Layout:** Standard `main` wrapper with `pt-24` (navbar spacing).
- **Sections:**
    1. **Hero Section:**
        - Background: `champ-banner.webp` with a dark overlay.
        - Effect: `Canvas` with `ParticleField` (count=800).
        - Text: Exactly as provided in the prompt.
    2. **Authority Section:**
        - Centered `glass-panel` text block.
        - Text: Exactly as provided in the prompt.
    3. **Results Gallery:**
        - Title: "شوف النتائج بنفسك"
        - Grid: 3 columns (Desktop), 2 (Tablet), 1 (Mobile).
        - Component: Reuse `Dialog` / `DialogTrigger` pattern from `Transformations.tsx`.
        - Aspect Ratio: `1040/1350`.
        - Overlay: "VIEW CHAMP" (Arabic: بطل حصل على ميدالية).
    4. **Emotional Hook:**
        - Large typography section with `text-gradient`.
    5. **Trust Section:**
        - Centered text block reinforcing experience and follow-up.
    6. **Claim Your Legacy (CTA):**
        - Title: "دورك جاي… جاهز تبدأ؟"
        - Button: "اشترك الآن وابدأ رحلتك" linked to `/packages`.

## 4. Design Details
- **Typography:** `font-display` for headers, `font-arabic` (or default body) for text.
- **Animations:** 
  - `initial={{ opacity: 0, y: 20 }}` for staggered entry.
  - Hover scale `1.05` on images.
- **Responsiveness:** Maintain existing container widths and spacing (`px-4`, `max-w-7xl`).

## 5. Implementation Notes
- Import all 24 images manually or use a loop if the environment supports dynamic imports (preferred: manual imports to match existing `Transformations.tsx` style).
- Ensure `Canvas` is properly cleaned up on unmount.
