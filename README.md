# Vastu-Compliant Airbnb Guide

A visually compelling, interactive website showcasing a Vastu-compliant ground floor house plan designed for Airbnb rental properties. This project combines ancient Vastu principles with modern interior design to create a harmonious, profitable rental space.

## 🌐 Live Website

**Visit the live site:** [https://vastuairbnb-qqzfxf6t.manus.space](https://vastuairbnb-qqzfxf6t.manus.space)

## 📋 Project Overview

The Vastu-Compliant Airbnb Guide is a modern web application that presents:

- **Interactive Hero Section**: Stunning visual introduction with gradient overlay and compelling call-to-action
- **Design Features**: Six key design principles highlighting Vastu compliance and contemporary aesthetics
- **Space Exploration**: Detailed cards showcasing front section, central living area, rear section, and specialized zones
- **Vastu Principles**: Comprehensive documentation of ancient wisdom integrated into modern architecture
- **Professional Navigation**: Sticky header with smooth scrolling to key sections
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices

## 🎨 Design Philosophy

**Theme**: Digital Sanctuary  
**Aesthetic**: Contemporary minimalism with warm, natural elements

### Color Palette
- **Neutral Base**: Warm cream (#F5F1E8), Soft gray (#A89F97), Warm white (#FAFAF8)
- **Accent Colors**: Soft sage green (#9DB4A0), Warm terracotta (#D4845C), Deep teal (#2C5F6F)
- **Primary Brand Color**: Deep teal (#2C5F6F)

### Typography
- **Display Font**: Montserrat (Bold, 700-800 weight) - Headlines and titles
- **Body Font**: Merriweather (Regular, 400-500 weight) - Body text and descriptions

## 🏗️ Technical Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with OKLCH color system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: Wouter (lightweight client-side router)
- **Icons**: Lucide React
- **Build Tool**: Vite 7
- **Package Manager**: pnpm

## 📁 Project Structure

```
vastu-airbnb-guide/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx           # Google Maps integration
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # Light/dark theme management
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts          # Utility functions
│   │   ├── App.tsx               # Main app component with routing
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles and design tokens
│   └── index.html                # HTML template
├── server/
│   └── index.ts                  # Express server (static deployment)
├── shared/
│   └── const.ts                  # Shared constants
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (v22.13.0 recommended)
- pnpm 10.4.1+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bihari-bhau/vastu-airbnb-guide.git
   cd vastu-airbnb-guide
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🎯 Key Features

### 1. Hero Section
- Full-width background image with gradient overlay
- Compelling headline: "Unlock Harmony: Your Vastu-Compliant Airbnb Journey Begins Here"
- Dual call-to-action buttons with hover effects
- Responsive text sizing for all screen sizes

### 2. Features Overview
- Six feature cards highlighting:
  - Vastu-Compliant design
  - Optimized circulation
  - Natural elements integration
  - Guest-centric design
  - Smart space utilization
  - 3D visualization capabilities

### 3. Space Exploration
- Four detailed space cards:
  - Front Section (entrance, entry lobby, guest bedroom, washroom)
  - Central Living Area (hall, kitchen, dining, secondary washroom)
  - Rear Section (master bedroom, attached storeroom)
  - Specialized Zones (pooja room, staircase, storage, utilities)

### 4. Vastu Principles
- Six principle cards documenting:
  - Kitchen orientation and fixture placement
  - Staircase positioning and movement
  - Washroom location and orientation
  - Pooja room placement
  - Natural elements and ventilation
  - Space utilization strategy

### 5. Professional Footer
- Multi-column layout with navigation links
- About section
- Resource links
- Contact information
- Copyright notice

## 🎨 Design System

### Spacing
- Base unit: 0.25rem (4px)
- Used consistently across padding, margins, and gaps
- Responsive scaling for mobile/tablet/desktop

### Border Radius
- Default: 0.65rem
- Variants: sm (0.25rem), md (0.45rem), lg (0.65rem), xl (1.05rem)

### Shadows
- Subtle shadows for depth without visual heaviness
- Applied to cards on hover for interactive feedback

### Animations
- Smooth transitions (180-300ms) for hover states
- Fade-in effects for page load
- Scale transformations for interactive elements
- Respects `prefers-reduced-motion` preference

## 📱 Responsive Design

- **Mobile**: Optimized for 375px+ screens
- **Tablet**: Enhanced layout for 768px+ screens
- **Desktop**: Full-featured experience for 1024px+ screens

All components scale gracefully with proper breakpoints and flexible layouts.

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Component-based architecture
- Utility-first CSS with Tailwind

### Best Practices
- Semantic HTML
- Accessible color contrasts
- Keyboard navigation support
- Performance optimized with lazy loading
- Clean, maintainable code structure

## 📦 Dependencies

### Core
- `react@19.2.1` - UI library
- `react-dom@19.2.1` - DOM rendering
- `typescript@5.6.3` - Type safety

### Styling
- `tailwindcss@4.1.14` - Utility-first CSS
- `tailwind-merge@3.3.1` - Merge Tailwind classes
- `tailwindcss-animate@1.0.7` - Animation utilities

### UI Components
- `@radix-ui/*` - Accessible component primitives
- `shadcn/ui` - Pre-built components
- `lucide-react@0.453.0` - Icon library

### Routing & State
- `wouter@3.3.5` - Lightweight routing
- `react-hook-form@7.64.0` - Form management
- `zod@4.1.12` - Schema validation

### Utilities
- `clsx@2.1.1` - Class name utilities
- `nanoid@5.1.5` - ID generation
- `framer-motion@12.23.22` - Animation library

## 🚢 Deployment

The project is deployed on **Manus** with the following configuration:

- **Hosting Mode**: Autoscale (serverless)
- **Domain**: vastuairbnb-qqzfxf6t.manus.space
- **Build Command**: `pnpm build`
- **Start Command**: `pnpm start`
- **Environment**: Production

### Static Assets
All images and media are stored externally using Manus's cloud storage to prevent deployment timeouts.

## 📄 Project Documentation

### Related Files
- `instruction.md` - Detailed design specifications and requirements
- `asset_file.docx` - Product requirements document (PRD)
- `rubric.docx` - Evaluation criteria for design deliverables

## 🤝 Contributing

This is a showcase project for a Vastu-compliant Airbnb design. For contributions or modifications:

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Commit your changes (`git commit -m 'Add your feature'`)
3. Push to the branch (`git push origin feature/your-feature`)
4. Open a Pull Request

## 📞 Contact & Support

For inquiries about the Vastu-compliant design or the Airbnb project:
- Visit the live site: [https://vastuairbnb-qqzfxf6t.manus.space](https://vastuairbnb-qqzfxf6t.manus.space)
- GitHub Repository: [https://github.com/bihari-bhau/vastu-airbnb-guide](https://github.com/bihari-bhau/vastu-airbnb-guide)

## 📜 License

This project is proprietary and confidential. All rights reserved.

## 🙏 Acknowledgments

- **Design Philosophy**: Digital Sanctuary aesthetic combining contemporary minimalism with warm, natural elements
- **Vastu Principles**: Ancient wisdom integrated into modern architectural design
- **Technology Stack**: Built with React, Tailwind CSS, and modern web technologies
- **Deployment**: Hosted on Manus platform with automatic scaling and optimization

---

**Last Updated**: June 25, 2026  
**Version**: 1.0.0  
**Status**: Live and Production Ready
