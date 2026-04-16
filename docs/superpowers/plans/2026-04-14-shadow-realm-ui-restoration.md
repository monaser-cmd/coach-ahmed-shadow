# Shadow Realm UI Restoration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the "Shadow Realm" aesthetic with a solid deep black background and animated red particles in the Hero section.

**Architecture:** Hybrid 2D/3D with localized 3D in the Hero section. Global background set to solid black.

**Tech Stack:** React, Three.js (@react-three/fiber, @react-three/drei), Framer Motion, Tailwind CSS.

---

### Task 1: Global Background Cleanup

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Remove GlobalBackground and Canvas from App.tsx**
    Remove the fixed background Canvas and the GlobalBackground component. Set the background color to `#050505`.

```tsx
// src/App.tsx (Update the main container)
<div className="relative z-10 min-h-screen bg-[#050505]">
  {/* Remove the fixed inset-0 div with Canvas */}
  <Routes>
    {/* ... routes ... */}
  </Routes>
</div>
```

- [ ] **Step 2: Update index.css for Deep Black**
    Ensure the body and root background colors are set to `#050505`.

```css
/* src/index.css */
@layer base {
  :root {
    --background: 0 0% 2%; /* Approximately #050505 */
    /* ... rest of variables ... */
  }
  body {
    @apply bg-[#050505] text-foreground;
    font-family: var(--font-body);
  }
}
```

- [ ] **Step 3: Verify the background is solid black**
    Check the app in the browser to ensure the red grid is gone and the background is deep black.

- [ ] **Step 4: Commit**
    `git add src/App.tsx src/index.css && git commit -m "style: remove global grid and set deep black background"`

---

### Task 2: Hero Section Particle Restoration

**Files:**
- Modify: `src/components/HeroSection.tsx`
- Create (if missing): `src/components/HeroCanvas.tsx` (optional, for cleaner separation)

- [ ] **Step 1: Update HeroSection.tsx to include ParticleField**
    Remove the static background image and add a dedicated Canvas for the ParticleField.

```tsx
// src/components/HeroSection.tsx
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

// ... inside HeroSection component ...
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
  {/* 3D Background Layer */}
  <div className="absolute inset-0 z-0">
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} color="#ff3333" intensity={2} />
      <ParticleField count={600} />
    </Canvas>
    {/* Subtle gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-[#050505]" />
  </div>

  {/* Existing content wrapped in relative z-10 container */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    {/* ... existing motion elements ... */}
  </div>
</section>
```

- [ ] **Step 2: Verify Particle Animation**
    Ensure the red particles are animating smoothly behind the Hero text.

- [ ] **Step 3: Commit**
    `git add src/components/HeroSection.tsx && git commit -m "feat: restore animated red particles in hero section"`

---

### Task 3: Visual Polish and Verification

- [ ] **Step 1: Check all pages for background consistency**
    Verify that About, Transformations, Packages, and Contact pages all have the solid deep black background.
- [ ] **Step 2: Run type checks and build**
    `npm run typecheck` (if available) or `npm run build` to ensure no regressions.
- [ ] **Step 3: Final Review**
    Compare the result with the target look: https://coach-ahmed-shadow.vercel.app/
- [ ] **Step 4: Commit**
    `git commit -m "chore: final shadow realm UI restoration polish"`
