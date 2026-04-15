import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Transformations from "./pages/Transformations.tsx";
import HallOfFame from "./pages/HallOfFame.tsx";
import Reviews from "./pages/Reviews.tsx";
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
        <div className="relative z-10 min-h-screen bg-[#050505]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            <Route path="/reviews" element={<Reviews />} />
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
