# Arabic Course Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Build a premium, RTL Arabic landing page for the "Nutrition Coach" course with neon cyan accents and dynamic WhatsApp integration.

**Architecture:** A new page component `Course.tsx` that leverages existing `Navbar` and `Footer`. It will use Framer Motion for scroll-reveal animations and fetch the WhatsApp link from Supabase `site_settings`.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, Supabase.

---

### Task 1: Setup Route and Navigation

**Files:**
- Create: `src/pages/Course.tsx` (Basic scaffold)
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`

- [x] **Step 1: Create basic page scaffold**
```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Course = () => {
  return (
    <main className="bg-[#050505] min-h-screen pt-24" dir="rtl">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-white">Course Page Scaffold</h1>
      </div>
      <Footer />
    </main>
  );
};

export default Course;
```

- [x] **Step 2: Add route to App.tsx**
```tsx
// Import
import Course from "./pages/Course.tsx";

// Inside Routes
<Route path="/course" element={<Course />} />
```

- [x] **Step 3: Add link to Navbar.tsx**
```tsx
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Arabic Course", href: "/course" }, // Add this
  // ... rest
];
```

- [x] **Step 4: Verify navigation**
Run: `npm run dev` and click "Arabic Course" in Navbar.

- [x] **Step 5: Commit**
```bash
git add src/pages/Course.tsx src/App.tsx src/components/Navbar.tsx
git commit -m "feat: add course page route and nav link"
```

---

### Task 2: Hero Section & WhatsApp Integration

**Files:**
- Modify: `src/pages/Course.tsx`

- [x] **Step 1: Implement Hero Section with Supabase hook**
```tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

// Inside Course component
const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/yournumber");

useEffect(() => {
  const fetchSettings = async () => {
    const { data } = await supabase.from("site_settings").select("*").eq("key", "whatsapp").single();
    if (data) setWhatsappUrl(data.value);
  };
  fetchSettings();
}, []);

// Hero JSX
<section className="relative py-20 overflow-hidden">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="container mx-auto px-4 text-center"
  >
    <span className="inline-block px-4 py-1.5 rounded-full bg-[#26bcc4]/10 text-[#26bcc4] text-sm font-medium mb-6 border border-[#26bcc4]/20">
      كورس تغذية احترافي
    </span>
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      تعلّم تصميم أنظمة غذائية فعلية وابدأ كـ <span className="text-[#26bcc4]">Nutrition Coach</span> محترف من الصفر
    </h1>
    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
      مش بس هتعرف "إيه"… هتعرف "إزاي تتصرف مع أي حالة"
    </p>
    <a 
      href={whatsappUrl}
      target="_blank"
      className="inline-block px-10 py-4 bg-[#26bcc4] text-black font-bold rounded-xl shadow-[0_0_20px_rgba(38,188,196,0.3)] hover:scale-105 transition-transform"
    >
      احجز الكورس الآن
    </a>
  </motion.div>
</section>
```

- [x] **Step 2: Commit**
```bash
git add src/pages/Course.tsx
git commit -m "feat: implement hero section and whatsapp integration"
```

---

### Task 3: Video & Problem Sections

**Files:**
- Modify: `src/pages/Course.tsx`

- [x] **Step 1: Add Video Section**
```tsx
<section className="py-20 container mx-auto px-4">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-[#26bcc4]/30 shadow-[0_0_30px_rgba(38,188,196,0.1)]"
  >
    <video 
      src="/src/assets/Course intro/course intro.mp4" 
      controls 
      className="w-full aspect-video object-cover"
    />
  </motion.div>
</section>
```

- [x] **Step 2: Add Problem Section (Pain points)**
```tsx
const painPoints = [
  "بتدي أنظمة غذائية عشوائية ومش بتجيب نتائج",
  "مش فاهم السعرات والماكروز بشكل عملي، بس حافظهم",
  "عملائك بيشتكوا من ثبات الوزن ومش عارف تعمل إيه",
  "تايه بين الأنظمة (كيتو – لو كارب – كارب سايكل) ومش عارف تختار الصح",
  "مش واثق في نفسك ككوتش لأنك مش فاهم 'ليه' كل حاجة"
];

// JSX
<section className="py-20 bg-[#0a0a0a]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white text-center mb-12">ليه معظم الناس بتفشل في مجال التغذية؟</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {painPoints.map((point, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl bg-[#050505] border border-red-500/20 hover:border-red-500/40 transition-colors"
        >
          <p className="text-gray-300 text-lg flex gap-3">
            <span className="text-red-500 font-bold">✕</span> {point}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

- [x] **Step 3: Commit**
```bash
git add src/pages/Course.tsx
git commit -m "feat: add video and problem sections"
```

---

### Task 4: Modules & Before/After Sections

**Files:**
- Modify: `src/pages/Course.tsx`

- [x] **Step 1: Add Course Modules Grid**
```tsx
const modules = [
  { title: "حساب السعرات والماكروز", body: "بدقة وبشكل عملي حسب هدف كل عميل" },
  { title: "تصميم نظام غذائي كامل", body: "من الصفر لأي حالة — تخسيس أو تضخيم أو صيانة" },
  { title: "المياه والملح والفيتامينات", body: "احتياجات الجسم الفعلية واللي بيغفل عنها الكوتشيز" },
  { title: "المستوى المتقدم", body: "كيتو، PSMF، Carb Cycling، Refeed — بالتطبيق" },
  { title: "مقاومة الإنسولين", body: "تفهمها وتتعامل معاها احترافياً" },
  { title: "ثبات الوزن", body: "السبب الحقيقي وإزاي تكسره لعملائك" }
];

// JSX
<section className="py-20 container mx-auto px-4">
  <h2 className="text-3xl font-bold text-white text-center mb-12">محتوى الكورس</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {modules.map((m, i) => (
      <motion.div 
        key={i}
        className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#26bcc4]/10 hover:border-[#26bcc4]/40 transition-all group"
      >
        <h3 className="text-xl font-bold text-[#26bcc4] mb-3">{m.title}</h3>
        <p className="text-gray-400">{m.body}</p>
      </motion.div>
    ))}
  </div>
</section>
```

- [x] **Step 2: Add Before/After Comparison**
```tsx
<section className="py-20 bg-[#0a0a0a]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white text-center mb-12">النتيجة: إيه اللي هيتغير بعد الكورس؟</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="p-8 rounded-3xl bg-[#050505] border border-gray-800 text-center">
        <span className="text-4xl font-bold text-gray-600 block mb-4">قبل</span>
        <p className="text-gray-400">بتجرب وبتغلط وعملائك مش واثقين فيك</p>
      </div>
      <div className="p-8 rounded-3xl bg-[#050505] border border-[#26bcc4]/30 text-center shadow-[0_0_20px_rgba(38,188,196,0.1)]">
        <span className="text-4xl font-bold text-[#26bcc4] block mb-4">بعد</span>
        <p className="text-white">فاهم ليه كل قرار وبتصمم بثقة وعملائك بيجيبوا نتائج</p>
      </div>
    </div>
  </div>
</section>
```

- [x] **Step 3: Commit**
```bash
git add src/pages/Course.tsx
git commit -m "feat: add modules and before/after sections"
```

---

### Task 5: Final CTA & Polish

**Files:**
- Modify: `src/pages/Course.tsx`

- [x] **Step 1: Add "Who is this for" and "Certification"**
- [x] **Step 2: Add Final CTA Section**
```tsx
<section className="py-32 text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">ابدأ رحلتك الآن وكن من قصص النجاح القادمة</h2>
    <a 
      href={whatsappUrl}
      target="_blank"
      className="inline-block px-12 py-5 bg-[#26bcc4] text-black font-bold text-xl rounded-2xl shadow-[0_0_30px_rgba(38,188,196,0.4)] hover:scale-105 transition-all"
    >
      احجز الكورس الآن ←
    </a>
  </div>
</section>
```

- [x] **Step 3: Verify responsive layout and animations**
- [x] **Step 4: Commit**
```bash
git add src/pages/Course.tsx
git commit -m "feat: complete final cta and polish landing page"
```
