# Hall of Fame Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-impact "Hall of Fame" page showcasing 24 champions with a 3D particle hero section, exact Arabic copy, and a responsive image gallery.

**Architecture:**
- **Routing:** Add `/hall-of-fame` route to `App.tsx`.
- **Navigation:** Update `Navbar.tsx` with "Hall of Fame" link.
- **Page Component:** `HallOfFame.tsx` will use `Framer Motion` for reveal animations and `@react-three/fiber` for the background particle effect. It follows the existing `Dialog`-based lightbox pattern for the gallery.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, Three.js, Lucide React.

---

### Task 1: Navigation & Routing Updates

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add Hall of Fame link to Navbar**
Modify `src/components/Navbar.tsx` to include the new link in the `navLinks` array.

- [ ] **Step 2: Add Route to App.tsx**
Import the `HallOfFame` page and add the `<Route>` element.

- [ ] **Step 3: Commit navigation changes**

---

### Task 2: Hall of Fame Page - Imports & Hero Section

**Files:**
- Create: `src/pages/HallOfFame.tsx`

- [ ] **Step 1: Setup Imports and Image assets**
Import all 24 champion images from `src/assets/images/Champs and Medals/` and the banner.

- [ ] **Step 2: Implement Hero Section**
Create the component with the 3D particle background (using `ParticleField` component) and the exact Arabic copy.

- [ ] **Step 3: Commit Skeleton & Hero**

---

### Task 3: Authority & Content Sections

**Files:**
- Modify: `src/pages/HallOfFame.tsx`

- [ ] **Step 1: Add Authority Section**
Insert the "Authority" Arabic text block with the `glass-panel` styling.

- [ ] **Step 2: Commit Content Sections**

---

### Task 4: Champion Gallery & Lightbox

**Files:**
- Modify: `src/pages/HallOfFame.tsx`

- [ ] **Step 1: Implement the Grid Gallery**
Use the `Dialog` component for the lightbox and the 3-column responsive grid. Set aspect ratio to `1040/1350`.

- [ ] **Step 2: Commit Gallery**

---

### Task 5: Final CTA & Integration

**Files:**
- Modify: `src/pages/HallOfFame.tsx`

- [ ] **Step 1: Add Final Trust & CTA sections**
Complete the page with the "Claim Your Legacy" CTA section and `Footer`.

- [ ] **Step 2: Final Verification**
Verify 3D effect and image responsiveness.

- [ ] **Step 3: Final Commit**
