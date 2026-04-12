# Shadow Realm 3D Multi-Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the single-page site to a persistent 3D multi-page experience with Red Neon aesthetics and custom shaders.

**Architecture:** Use a "Master Canvas" pattern where the 3D scene wraps the entire app, and a SceneManager handles camera flights between "Sectors" based on the current URL.

**Tech Stack:** React, Three.js, React Three Fiber, GSAP, Supabase, Tailwind CSS.

---

### Task 1: Persistent 3D Infrastructure

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/three/SceneManager.tsx`
- Create: `src/components/three/GlobalBackground.tsx`

- [ ] **Step 1: Move Canvas to App level**
    Modify `src/App.tsx` to include the Persistent Canvas.
    ```tsx
    import { Canvas } from "@react-three/fiber";
    import SceneManager from "./components/three/SceneManager";
    import GlobalBackground from "./components/three/GlobalBackground";
    
    // ... inside App component
    <BrowserRouter>
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <SceneManager />
          <GlobalBackground />
        </Canvas>
      </div>
      <Routes>...</Routes>
    </BrowserRouter>
    ```

- [ ] **Step 2: Implement Global Red Neon Grid**
    Create `src/components/three/GlobalBackground.tsx` with a custom grid shader.
    ```tsx
    import { useRef } from "react";
    import { Grid } from "@react-three/drei";

    const GlobalBackground = () => {
      return (
        <group>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" />
          <Grid 
            infiniteGrid 
            fadeDistance={50} 
            fadeStrength={5} 
            sectionColor="#ff0000" 
            cellColor="#330000" 
          />
        </group>
      );
    };
    export default GlobalBackground;
    ```

- [ ] **Step 3: Implement SceneManager with GSAP Camera Flight**
    Create `src/components/three/SceneManager.tsx`.
    ```tsx
    import { useThree } from "@react-three/fiber";
    import { useLocation } from "react-router-dom";
    import { useEffect } from "react";
    import gsap from "gsap";

    const SceneManager = () => {
      const { camera } = useThree();
      const location = useLocation();

      useEffect(() => {
        const targets: Record<string, { x: number, y: number, z: number }> = {
          "/": { x: 0, y: 0, z: 10 },
          "/about": { x: 10, y: 2, z: 5 },
          "/transformations": { x: -10, y: 0, z: 15 },
          "/packages": { x: 0, y: -10, z: 20 },
          "/contact": { x: 5, y: -5, z: 5 },
        };

        const target = targets[location.pathname] || targets["/"];
        gsap.to(camera.position, {
          x: target.x,
          y: target.y,
          z: target.z,
          duration: 1.5,
          ease: "power2.inOut"
        });
      }, [location.pathname, camera]);

      return null;
    };
    export default SceneManager;
    ```

- [ ] **Step 4: Commit Infrastructure**
    `git add src/App.tsx src/components/three/`
    `git commit -m "feat: persistent 3d infrastructure with camera flight manager"`

---

### Task 2: Multi-Page Routing & Navigation

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Create: `src/pages/About.tsx`, `src/pages/Transformations.tsx`, `src/pages/Packages.tsx`, `src/pages/Contact.tsx`

- [ ] **Step 1: Create Page Stubs**
    Create basic stubs for all new pages in `src/pages/`.

- [ ] **Step 2: Update App Routes**
    Map paths to the new page components.

- [ ] **Step 3: Update Navbar Links**
    Convert hash links (`#about`) to router links (`/about`).

- [ ] **Step 4: Commit Routing**
    `git add src/pages/ src/components/Navbar.tsx`
    `git commit -m "feat: multi-page routing and navbar update"`

---

### Task 3: About Page & 3D Anatomy Sector

**Files:**
- Create: `src/components/three/sectors/AboutSector.tsx`
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Create 3D Wireframe Model**
    In `AboutSector.tsx`, use a stylized wireframe sphere or geometric "Blueprint" as a placeholder for the anatomy model.
    
- [ ] **Step 2: Implement About Page UI with Form**
    Add the text content and a floating Contact Form in `src/pages/About.tsx`.

- [ ] **Step 3: Commit About Sector**
    `git add src/components/three/sectors/AboutSector.tsx src/pages/About.tsx`
    `git commit -m "feat: about page with 3d blueprint sector and contact form"`

---

### Task 4: Transformations 3D Scrolling Wall

**Files:**
- Create: `src/components/three/sectors/TransformationsSector.tsx`
- Modify: `src/pages/Transformations.tsx`

- [ ] **Step 1: Fetch Supabase Data**
    Fetch image URLs from the `transformations` table.

- [ ] **Step 2: Create 3D Photo Wall**
    Map images as textures to `<planeGeometry />` in a vertical array.

- [ ] **Step 3: Bind Scroll to Camera Y**
    Use `window.scrollY` to move the 3D camera along the wall.

- [ ] **Step 4: Commit Transformations Wall**
    `git add src/components/three/sectors/TransformationsSector.tsx src/pages/Transformations.tsx`
    `git commit -m "feat: 3d scrolling wall for transformations using supabase data"`

---

### Task 5: Packages & Contact Finalization

- [ ] **Step 1: Implement Packages 3D Cubes**
- [ ] **Step 2: Implement Contact Holographic Terminal**
- [ ] **Step 3: Final Polish (Red Neon Shaders, Glitch effects)**
- [ ] **Step 4: Final Commit**
