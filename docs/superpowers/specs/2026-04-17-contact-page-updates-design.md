# Design Spec - Contact Page Updates

This document outlines the changes to the Contact page to integrate dynamic social links from the Admin Dashboard, replace Email with Facebook, update the base location, and transition the form to a WhatsApp-based Inquiry Terminal.

## 1. Objectives
- Link WhatsApp and Instagram to values managed in the Admin Dashboard (`site_settings` table).
- Replace the "Email" card with a "Facebook" card.
- Update the "Base" location to "Alexandria, Egypt".
- Transform the "TRANSMIT" button into a WhatsApp redirect that includes the form data as a message.

## 2. Technical Strategy

### 2.1 Dynamic Data Fetching
- Add a `useEffect` hook to `src/pages/Contact.tsx` to fetch settings from Supabase.
- Table: `site_settings`.
- Keys to fetch: `whatsapp`, `instagram`, `facebook`.
- Fallback to hardcoded defaults if database values are missing.

### 2.2 Component Updates
- **WhatsApp Card:** Update `link` and `value` props to use database values.
- **Instagram Card:** Update `link` and `value` props to use database values.
- **Email -> Facebook Card:** 
  - Change icon to `Facebook` (from `lucide-react`).
  - Change title to "Facebook".
  - Change value to "@ahmedshady10" (or similar fetched value).
  - Update `link` to use the Facebook URL from the database.
- **Base Card:** Update `value` to "Alexandria, Egypt".

### 2.3 Form Integration (WhatsApp Redirect)
- Modify the `handleSubmit` function in `src/pages/Contact.tsx`.
- Collect form inputs (Name, Email, Objective).
- Construct a WhatsApp URL: `https://wa.me/[phone_number]?text=[encoded_message]`.
- Message Format:
  ```text
  New Inquiry from Shadow Realm Terminal
  👤 Name: [Name]
  📧 Email: [Email]
  🎯 Objective: [Objective]
  ```
- Use `window.open(whatsappUrl, '_blank')` to trigger the redirect.

## 3. Implementation Details

### src/pages/Contact.tsx
- Import `Facebook` icon from `lucide-react`.
- Import `supabase` client from `@/lib/supabase`.
- Define state for `links` and `form` data.
- Implement data fetching logic.
- Update the `handleSubmit` logic.
- Update the `ContactInfoCard` instances in the JSX.

## 4. Testing & Validation
- **Data Fetching:** Verify that updating WhatsApp/Instagram in the Admin Dashboard reflects on the Contact page.
- **Facebook Link:** Ensure the new Facebook card leads to the correct URL.
- **Location:** Confirm the base location displays "Alexandria, Egypt".
- **WhatsApp Redirect:** Fill out the form and verify that the "TRANSMIT" button opens WhatsApp with a correctly formatted message and the correct recipient number.
