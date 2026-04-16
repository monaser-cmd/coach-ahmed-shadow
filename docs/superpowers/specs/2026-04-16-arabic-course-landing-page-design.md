# Design Spec: Arabic Course Landing Page

## 1. Overview
A premium, dark-themed landing page in Arabic for the "Nutrition Coach" course. It will feature neon accents (#26bcc4) and follow the existing design language of the "SHADOW" brand.

## 2. Technical Architecture
- **Route:** `/course`
- **Page Component:** `src/pages/Course.tsx`
- **Navigation:** Added to `src/components/Navbar.tsx`
- **Data:** Fetches WhatsApp link from Supabase `site_settings` table.
- **Styling:** Tailwind CSS with custom neon utilities.
- **Animations:** Framer Motion for scroll-reveals and hover effects.

## 3. Section Breakdown
### 3.1 Hero Section
- **Title:** "تعلّم تصميم أنظمة غذائية فعلية وابدأ كـ Nutrition Coach محترف من الصفر"
- **Subtitle:** "مش بس هتعرف 'إيه'… هتعرف 'إزاي تتصرف مع أي حالة'"
- **CTA:** "احجز الكورس الآن" (Redirects to WhatsApp)
- **Trust Indicators:** Videos self-paced, Certificate, Limited spots.

### 3.2 Intro Video
- **Path:** `/src/assets/Course intro/course intro.mp4`
- **Style:** Rounded corners, subtle glow (#26bcc4).

### 3.3 Problem Section (Cards)
- **Header:** "ليه معظم الناس بتفشل في مجال التغذية؟"
- **Content:** List of pain points with card hover glow effects.

### 3.4 Modules (Grid)
- **Header:** "من الأساسيات للمستوى الاحترافي في كورس واحد"
- **Layout:** 2 cols mobile, 3 cols desktop.

### 3.5 Before / After
- **Labels:** "قبل" (Before) vs "بعد" (After).
- **Style:** High contrast comparison layout.

### 3.6 Final CTA
- **Header:** "ابدأ رحلتك الآن وكن من قصص النجاح القادمة"
- **CTA:** "احجز الكورس الآن"

## 4. Visual Styles
- **Background:** `#050505`
- **Accent:** `#26bcc4` (Neon Cyan)
- **Button Glow:** `0 0 15px #26bcc4`
- **RTL Support:** Content direction set to `rtl`.

## 5. Success Criteria
- Page is fully responsive.
- All Arabic text matches the provided HTML exactly.
- CTA buttons correctly open the configured WhatsApp link.
- Smooth animations on all sections.
