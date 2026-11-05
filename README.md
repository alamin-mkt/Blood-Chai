# রক্ত চাই (BloodBondhu)
### Bangladesh National Blood Donation & Management Ecosystem

**Official Brand**: রক্ত চাই  
**Working English Project Name**: BloodBondhu  
**Tagline**: "রক্তের প্রয়োজনে, মানুষের পাশে।" / "এক ফোঁটা রক্ত, বাঁচাতে পারে একটি জীবন।"  
**Framework**: Next.js 14 App Router (React 18, TypeScript, Tailwind CSS)  
**Database**: Supabase PostgreSQL with 32 structured SQL migrations & Row-Level Security (RLS)  
**Authentication & Backend**: Supabase Auth + Edge Functions  
**Supported Languages**: Bangla (বাংলা) + English (Dual-Language Switcher)  
**Platform**: Responsive Web Application + Progressive Web App (PWA)

---

## 🌟 Key Features

1. **Official Brand & Asset Integration**:
   - Official uploaded logo faithfully integrated across website header, footer, authentication, universal digital ID cards, certificates, and PWA manifest.
   - Primary colors: Brand Red (`#E31E24`), Brand Green (`#00843D`), Dark Navy (`#152238`), Light Background (`#F8FAFC`).

2. **Universal Role-Based Digital ID Card System (Part 9, 10, 11)**:
   - Physical credit card standard size (85.6mm × 54mm) front and back design.
   - Separate authenticated digital ID cards for:
     - `SUPER-ADMIN-000001` (Super Admin)
     - `ADMIN-000001` (Platform Admin)
     - `DIV-ADMIN-000001` (Division Admin)
     - `DIST-COORD-000001` (District Coordinator)
     - `UPAZILA-COORD-000001` (Upazila Coordinator)
     - `ORG-ADMIN-000001` (Organization Admin)
     - `VOL-000001` (Volunteer)
     - `DONOR-000001` (Blood Donor)
   - High-resolution **PNG download** (via `html2canvas`), **PDF download** (via `jspdf`), direct browser print, and one-click social sharing (WhatsApp, Facebook, Messenger).

3. **Cryptographic QR Verification Engine**:
   - Route: `/verify/[cardNumber]`
   - Public inspection without exposing private donor phone numbers or residential addresses.
   - Immediate reflection of card status (`verified`, `suspended`, `revoked`).

4. **Bangladesh Administrative Location Database**:
   - All **8 Divisions** (Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, Mymensingh)
   - All **64 Districts**
   - Comprehensive Upazilas and Thanas in both Bangla and English.

5. **Advanced Donor Search & Filtering**:
   - Search by 8 blood groups (`A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`).
   - Dependent filtering: Division → District → Upazila.
   - Availability and verified badges filters.

6. **Automated Donor Availability & Health Reminders**:
   - 90-day post-donation countdown timer.
   - One-click pause and reactivation controls.

7. **Emergency Blood Requests & Donor Matching**:
   - Priority classification (`Normal`, `Urgent`, `Critical`).
   - Automatic matching with nearby eligible donors.
   - Immediate hospital and contact broadcasting.

8. **Contact Privacy & Consent Protection**:
   - Donor phone numbers are shielded by default.
   - Mutual approval workflow: requester sends an in-app inquiry; donor approves before phone access is unlocked.

9. **Donation History & Verification Queue**:
   - Donors submit hospital donation records.
   - Authorized coordinators and admins verify or reject records.
   - Automated verified counter increment and milestone badge granting (`First Hero`, `Life Saver`, `Super Hero`, `Legend Donor`).

10. **Role-Based Admin Portals**:
    - Central Platform Overview with live statistics.
    - Donation Verification Queue.
    - Universal Digital ID Card Registry.
    - Regional Scopes Management (Divisions & Districts).
    - Emergency Blood Requests Management.
    - User & Role Assignment Panel.

---

## 🚀 Getting Started

### 1. Environment Setup
Copy the example environment configuration:
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials when connecting to a remote Supabase project:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_NAME="রক্ত চাই (BloodBondhu)"
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Database Migrations
Run the 32 migration files in `supabase/migrations/` sequentially on your Supabase PostgreSQL instance:
```bash
supabase db push
# or execute 001_extensions.sql through 032_seed_data.sql in the Supabase SQL editor
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 👥 Demo Personas for Evaluation
In development mode, you can instantly toggle between authorized accounts using the **"Demo Persona"** dropdown in the top bar:
- **Mahmudur Rahman**: Super Administrator (`SUPER-ADMIN-000001`) • O+
- **Farhana Akter**: District Coordinator & Volunteer (`DIST-COORD-000001`, `VOL-000001`) • A+
- **Tanvir Hossain**: Blood Donor (`DONOR-000003`) • B+
- **Ariful Islam**: Legend Donor (`DONOR-000005`, 26 verified donations) • O-
