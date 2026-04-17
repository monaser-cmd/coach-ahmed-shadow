# Contact Page Updates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Contact page to use dynamic social links from Supabase and redirect form submissions to WhatsApp.

**Architecture:** Fetch global site settings in a `useEffect` hook, replace static values with state, and use form data to construct a WhatsApp API URL.

**Tech Stack:** React, TypeScript, Supabase, Framer Motion, Lucide React, Tailwind CSS.

---

### Task 1: Setup State and Data Fetching [COMPLETED]

**Files:**
- Modify: `src/pages/Contact.tsx`

- [x] **Step 1: Add imports and state for links**

```typescript
// Add these imports at the top
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { MessageCircle, Facebook, Instagram, MapPin } from "lucide-react"; // Replace Mail with Facebook

// Inside Contact component:
const [links, setLinks] = useState<Record<string, string>>({
  whatsapp: "+20 123 456 7890",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  whatsapp_link: "https://wa.me/"
});
```

- [x] **Step 2: Implement useEffect for data fetching**

```typescript
useEffect(() => {
  const fetchLinks = async () => {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*");
    
    if (!error && data) {
      const settings = data.reduce((acc: Record<string, string>, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {});
      setLinks(prev => ({ ...prev, ...settings }));
    }
  };

  fetchLinks();
}, []);
```

- [x] **Step 3: Commit fetching logic**

```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): add dynamic site settings fetching from supabase"
```

---

### Task 2: Update Contact Info Cards [COMPLETED]

**Files:**
- Modify: `src/pages/Contact.tsx`

- [x] **Step 1: Update the JSX for ContactInfoCards**

Replace the existing cards with dynamic ones, replacing Email with Facebook and updating Base location.

```tsx
<div className="grid sm:grid-cols-2 gap-8">
  <ContactInfoCard 
    icon={<MessageCircle className="w-6 h-6" />}
    title="WhatsApp"
    value={links.whatsapp || "+20 123 456 7890"}
    link={links.whatsapp ? `https://wa.me/${links.whatsapp.replace(/\s+/g, '')}` : "https://wa.me/"}
  />
  <ContactInfoCard 
    icon={<Instagram className="w-6 h-6" />}
    title="Instagram"
    value="@ahmedshady10"
    link={links.instagram || "https://instagram.com/"}
  />
  <ContactInfoCard 
    icon={<Facebook className="w-6 h-6" />}
    title="Facebook"
    value="@ahmedshady10"
    link={links.facebook || "https://facebook.com/"}
  />
  <ContactInfoCard 
    icon={<MapPin className="w-6 h-6" />}
    title="Base"
    value="Alexandria, Egypt"
  />
</div>
```

- [x] **Step 2: Commit UI updates**

```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): update info cards with facebook and alexandria location"
```

---

### Task 3: WhatsApp Inquiry Terminal Implementation [COMPLETED]

**Files:**
- Modify: `src/pages/Contact.tsx`

- [x] **Step 1: Update Form State**

```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  objective: ""
});
```

- [x] **Step 2: Update Form Inputs and HandleSubmit**

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const phoneNumber = links.whatsapp?.replace(/\s+/g, '') || "201234567890";
  const message = `*New Inquiry from Shadow Realm Terminal*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🎯 *Objective:* ${formData.objective}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');

  toast({
    title: "Transmission Initiated",
    description: "Opening secure link to WhatsApp...",
  });
};

// Update Input fields in JSX to use value and onChange
// <Input 
//   value={formData.name} 
//   onChange={(e) => setFormData({...formData, name: e.target.value})} 
//   required 
// />
// ... similar for Email and Objective
```

- [x] **Step 3: Apply the full form updates in JSX**

```tsx
<form className="space-y-6" onSubmit={handleSubmit}>
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Full Name</label>
    <Input 
      placeholder="IDENTIFY YOURSELF" 
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl h-14 font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
    />
  </div>
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Email Address</label>
    <Input 
      type="email" 
      placeholder="COMMUNICATION FREQUENCY" 
      required
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl h-14 font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
    />
  </div>
  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-display ml-1">Objective</label>
    <Textarea 
      placeholder="DEFINE YOUR GOALS..." 
      required
      value={formData.objective}
      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
      className="bg-background/40 border-primary/20 focus:border-primary transition-all rounded-xl min-h-[120px] font-display text-sm tracking-widest placeholder:text-muted-foreground/30"
    />
  </div>
  <Button 
    type="submit" 
    className="w-full h-16 bg-primary text-primary-foreground font-display tracking-[0.4em] text-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all animate-pulse-glow border-none"
  >
    TRANSMIT
  </Button>
</form>
```

- [x] **Step 4: Commit form updates**

```bash
git add src/pages/Contact.tsx
git commit -m "feat(contact): transform inquiry form into whatsapp terminal"
```

---

### Task 4: Final Verification

- [ ] **Step 1: Verify data fetching**
Ensure links update when changed in database (via admin dashboard).

- [ ] **Step 2: Verify WhatsApp redirect**
Test the "TRANSMIT" button with sample data and ensure the message is correctly formatted in the opened tab.
