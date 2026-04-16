# Shadow Realm UI Restoration: Pure Black & Particles

**Goal:** Restore the cinematic "Shadow Realm" aesthetic by moving to a pure deep black global background and re-integrating animated red particles specifically in the Hero section.

## 1. Architecture

- **Global Background:** Removed the 3D grid from `App.tsx`. The entire application now uses a solid deep black foundation.
- **Hero-Specific 3D:** The `HeroSection` will host its own `<Canvas>` to render the `ParticleField`. This isolates the 3D overhead to the top of the page.
- **Removed:** `GlobalBackground.tsx` and the grid-based 3D infrastructure from the main application shell.

## 2. Component Structure

### App Level (`App.tsx`)
- Removed the fixed `<Canvas>` and `<GlobalBackground />`.
- Ensured the root container has a solid black background (`bg-[#050505]`).

### Hero Section (`HeroSection.tsx`)
- Integrated a new `<Canvas>` for the `ParticleField`.
- Removed the static `hero-bg.jpg` image to favor the dynamic 3D background.
- Maintained the existing Framer Motion content animations on top of the 3D layer.

### Particle Field (`ParticleField.tsx`)
- Verified red neon color (`#ff0000`) and additive blending for maximum visual impact.

## 3. Visual System

- **Background:** `#050505` (Deep Black).
- **Primary Accent:** `#FF0000` (Neon Red).
- **Style:** High-contrast, minimalist, cinematic.

## 4. Implementation Strategy

1. **Global Cleanup:** Modify `App.tsx` to remove the background Canvas and the `GlobalBackground` import.
2. **Hero Refactor:** Update `HeroSection.tsx` to include the `ParticleField` within its own Canvas.
3. **Styling Update:** Ensure `index.css` and `App.tsx` are locked to the deep black palette.
4. **Verification:** Confirm particles are animating smoothly and the rest of the site maintains the solid black look.
