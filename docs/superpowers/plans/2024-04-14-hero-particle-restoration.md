# Hero Section Particle Restoration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the cinematic animated red particles in the Hero section to enhance the "Shadow Realm" aesthetic while maintaining performance.

**Architecture:** Replace the static background image in `HeroSection.tsx` with a localized `@react-three/fiber` Canvas hosting a `ParticleField` component.

**Tech Stack:** React, Three.js, @react-three/fiber, @react-three/drei, Framer Motion, Tailwind CSS.

---

### Task 1: Update HeroSection.tsx

**Files:**
- Modify: `src/components/HeroSection.tsx`

- [ ] **Step 1: Update imports**
    Add `Canvas` from `@react-three/fiber` and import `ParticleField`.

```tsx
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
```

- [ ] **Step 2: Replace background image with Canvas and ParticleField**
    Remove the `img` tag and replace the background div content with the `Canvas` setup.

```tsx
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
  {/* ... existing motion elements ... */}
</section>
```

- [ ] **Step 3: Verify the changes**
    Check that the `HeroSection` still has its content and the `Canvas` is properly positioned in the background.

- [ ] **Step 4: Commit changes**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: restore animated red particles in hero section"
```

### Task 2: Verification

- [ ] **Step 1: Check for lint errors**
    Run `npm run lint` or `npx eslint src/components/HeroSection.tsx` to ensure no regressions.

- [ ] **Step 2: Verify particle animation**
    Ensure the red particles are animating smoothly behind the Hero text (visual verification if possible, or checking code logic in `ParticleField.tsx`).
