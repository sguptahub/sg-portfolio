# Sanjay Gupta - Premium AI/ML Portfolio

A professional portfolio for a Senior Technical Program Manager specializing in AI/ML enterprise transformation. Designed with a premium dark aesthetic inspired by Linear and Vercel.

## 🚀 Tech Stack

- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS for utility-first styling
- **UI Components:** Radix UI primitives via shadcn/ui
- **Animations:** Framer Motion for smooth transitions and micro-interactions
- **Icons:** Lucide React
- **Routing:** Wouter (lightweight routing)
- **Build Tool:** Vite

## 🛠️ Key Features

- **APEX-AI Framework:** A detailed methodology section for AI implementation.
- **Interactive Case Studies:** Deep dives into enterprise SaaS governance, fraud detection, and IoT predictive maintenance.
- **Thought Leadership:** Integration with LinkedIn publications and specialized skill matrices.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Dark Mode Aesthetic:** High-contrast, accessibility-compliant (WCAG 2.1 AA) UI.

## 📂 Project Structure

- `client/src/components`: Reusable UI components and page sections.
- `client/src/pages`: Main page layouts and case study templates.
- `client/src/lib`: Utility functions and theme configurations.
- `client/public/assets`: Static assets including the APEX-AI Framework Guide and Resume.

## 🚀 Deployment on Vercel

To deploy this project on Vercel:

1. **Root Directory:** Set this to the project root (where `package.json` is located), **NOT** the `client` folder.
2. **Build Command:** `npm run build` (which runs `vite build`)
3. **Output Directory:** `dist/public` (Vite is configured to build into this directory)
4. **Install Command:** `npm install`

### 🛠️ Manual Deployment Commands

If you are pushing via CLI:
```bash
git add .
git commit -m "Configure Vercel deployment"
git push origin main
```

## 📜 License

© 2026 Sanjay Gupta. All rights reserved.
