# Shadow Realm Hybrid Stability Restoration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore full home page content and convert sub-pages to stable 2D versions while keeping a subtle 3D grid background.

**Architecture:** Hybrid 2D/3D. Fixed background Canvas with minimal grid shader. Standard multi-page routing.

**Tech Stack:** React, Three.js (Background only), Framer Motion, Tailwind CSS.

---

### Task 1: Cleanup 3D Infrastructure

**Files:**
- Delete: `src/components/three/SceneManager.tsx`
- Delete: `src/components/three/sectors/` (All files)
- Modify: `src/App.tsx`

- [ ] **Step 1: Remove SceneManager and Sectors**
    Delete redundant 3D orchestration files to stop camera flight logic.
- [ ] **Step 2: Simplify App.tsx Canvas**
    Remove all postprocessing and SceneManager. Keep only GlobalBackground.
    ```tsx
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <GlobalBackground />
      </Canvas>
    </div>
    ```

---

### Task 2: Restore Home Page (`Index.tsx`)

**Files:**
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Re-add all sections**
    Import and render all sections: Hero, About, Transformations, Packages, Contact.
    Ensure sections have correct IDs for hash navigation.

---

### Task 3: Stabilize Sub-pages (2D)

**Files:**
- Modify: `src/pages/About.tsx`, `src/pages/Transformations.tsx`, `src/pages/Packages.tsx`, `src/pages/Contact.tsx`

- [ ] **Step 1: Remove 3D synchronization**
    Remove all `CameraScroller`, `CustomEvent`, and Three.js hooks from page components.
- [ ] **Step 2: Ensure 2D layout consistency**
    Ensure each page uses `Navbar`, `Footer`, and has a `bg-transparent` main container to show the global 3D grid.

---

### Task 4: Navbar & Navigation Fix

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Handle Hybrid Navigation**
    Ensure Navbar links use full paths (e.g., `/about`) or smart hash handling to work across different pages.

---

### Task 5: Final Polish & Verification

- [ ] **Step 1: Run Type Checks**
- [ ] **Step 2: Verify zero loading hangs**
- [ ] **Step 3: Commit all changes**
