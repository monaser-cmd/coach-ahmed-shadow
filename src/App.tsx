import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Canvas } from "@react-three/fiber";
import SceneManager from "./components/three/SceneManager";
import GlobalBackground from "./components/three/GlobalBackground";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Transformations from "./pages/Transformations.tsx";
import Packages from "./pages/Packages.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }} gl={{ antialias: false }}>
            <SceneManager />
            <GlobalBackground />
          </Canvas>
        </div>
        <div className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
