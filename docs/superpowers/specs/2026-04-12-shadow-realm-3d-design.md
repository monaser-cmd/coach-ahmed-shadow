# Design Spec: Shadow Realm 3D Multi-Page Migration

## 1. Vision & Goals
Transform the current single-page "Coach Ahmed Shadow" website into a high-end, multi-page 3D immersive experience ("The Shadow Realm"). Use a persistent 3D environment with red neon aesthetics and custom shaders.

## 2. Architecture: The Master Canvas
To ensure a seamless experience without 3D reload stutters, the application will use a **Persistent Canvas Pattern**.

### Core Components
- **`App.tsx`**: The `<Canvas>` component from `@react-three/fiber` will wrap the entire `<BrowserRouter>`.
- **`SceneManager.tsx`**: A global 3D component that listens to `useLocation()` from `react-router-dom` and triggers camera "flights" to different "Sectors" using GSAP.
- **`GlobalBackground.tsx`**: A large-scale, dark 3D grid with red neon pulse shaders that exists across all routes.

## 3. Page Sectors & 3D Scenes

### 3.1 Home Sector (`/`)
- **Camera:** Default wide-angle view.
- **3D Elements:** Hero particle field (existing) integrated into the global grid.
- **UI:** Existing HeroSection content.

### 3.2 About Sector (`/about`)
- **Camera:** Flies to a close-up "Portrait" sector.
- **3D Elements:** Stylized 3D wireframe anatomy or geometric "blueprint" model rotating slowly.
- **UI:** AboutSection text + **New Integrated Contact Form** (Floating panel).

### 3.3 Transformations Sector (`/transformations`)
- **Camera:** Tilts and moves to look at a vertical "Wall of Progress."
- **3D Elements:** A vertical 3D scrolling wall of panels.
- **Data Integration:** 
  - Fetches photos from Supabase `transformations` table.
  - Maps photos as textures onto 3D planes.
  - Custom "Hologram/Glitch" shaders for panel entry animations.
- **Interaction:** Page scroll controls the vertical position of the 3D camera along the wall.

### 3.4 Packages Sector (`/packages`)
- **Camera:** Flies to a "Vault" sector with 3 floating 3D data-cubes.
- **3D Elements:** Floating 3D cubes/panels that glow red on hover.
- **Data Integration:** Fetches package details from Supabase; labels on 3D elements update dynamically.

### 3.5 Contact Sector (`/contact`)
- **Camera:** Minimalist, focused "Uplink" view.
- **3D Elements:** Interactive 3D holographic terminal for form inputs.
- **Form Fields:** Name, Email, Package (Dropdown), Message.
- **UI:** Professional 3D-integrated form.

## 4. Technical Constraints & Style
- **Color Palette:** Deep Charcoal (#121212), Neon Red (#FF0000), White/Silver (#F8FAFC).
- **Typography:** Barlow Condensed (Headings), Barlow (Body).
- **Libraries:** Three.js, React Three Fiber, Drei, GSAP (Animations), Framer Motion (UI Transitions).
- **Backend:** Supabase (Real-time updates for Transformations and Packages).

## 5. Success Criteria
- [ ] No 3D canvas re-renders when navigating between pages.
- [ ] Smooth camera "flight" transitions between all routes.
- [ ] Transformations wall automatically reflects Supabase data in 3D.
- [ ] Contact form is fully functional and visually integrated into the 3D space.
