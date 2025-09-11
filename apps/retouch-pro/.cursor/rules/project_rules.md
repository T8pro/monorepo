# Retouch Pro - Architecture Documentation

A Next.js 15 application for AI-powered photo retouching services, built within a Turborepo monorepo architecture.

## 🏗️ Architecture Overview

### Monorepo Structure

This app is part of a Turborepo monorepo located at `/Users/thiago/Projects/t8/monorepo/`. The monorepo contains:

```
monorepo/
├── apps/
│   ├── retouch-pro/          # This Next.js app
│   └── site/                 # Another Next.js app
├── packages/
│   ├── design-system/        # Shared component library
│   ├── eslint-config/        # Shared ESLint configurations
│   └── typescript-config/    # Shared TypeScript configurations
└── turbo.json               # Turborepo configuration
```

### App Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: SCSS Modules + Design System tokens
- **TypeScript**: Strict mode with shared configurations
- **Icons**: React Icons (Font Awesome)
- **3D Graphics**: OGL for WebGL components

## Folder Structure

```
apps/retouch-pro/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page composition
│   └── favicon.ico          # App favicon
├── components/              # Reusable UI components
│   ├── faulty-terminal/     # WebGL terminal animation
│   │   ├── index.tsx        # Main component
│   │   ├── styles.module.scss
│   │   ├── types.ts         # TypeScript definitions
│   │   ├── hooks.ts         # Custom hooks
│   │   ├── utils.ts         # Utility functions
│   │   └── constants.ts     # Configuration constants
│   └── logo/                # Logo component
│       └── index.tsx
├── features/                # Feature-based components
│   ├── hero/                # Landing page hero section (FULLY REFACTORED)
│   │   ├── index.tsx        # Dumb component (JSX only)
│   │   ├── types.ts         # TypeScript interfaces
│   │   ├── constants.ts     # Default content & config
│   │   ├── hooks.ts         # Custom hooks (useHero)
│   │   ├── utils.ts         # Utility functions
│   │   └── styles.module.scss
│   ├── before-after/        # Before/after image slider (SIMPLE)
│   │   ├── index.tsx        # Component with inline data
│   │   └── styles.module.scss
│   ├── faq/                 # Frequently asked questions (SIMPLE)
│   ├── how-it-works/        # Process explanation (SIMPLE)
│   ├── lead-magnet/         # Lead capture form (SIMPLE)
│   ├── plans/               # Pricing plans (SIMPLE)
│   ├── retouch-process/     # Process details (EMPTY)
│   ├── social-proof/        # Testimonials/social proof (SIMPLE)
│   ├── upload/              # File upload interface (SIMPLE)
│   └── what-you-get/        # Service benefits (PARTIAL REFACTOR)
│       ├── index.tsx
│       ├── constants.ts     # Has constants file
│       └── styles.module.scss
├── public/                  # Static assets
│   ├── before-after/        # Sample images
│   └── retouch-pro-logo.svg # Logo file
├── next.config.ts           # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System & Tokens

### CSS Design Tokens

The app uses a comprehensive design token system defined in `@t8pro/design-system`:

#### Colors

- **Primary**: `#679a58` (brand green)
- **Secondary**: `#20231c` (light) / `#cbd4c6` (dark)
- **Semantic**: Informative, Error, Success, Attention variants
- **Neutral**: 50-900 gray scale with dark theme inversion

#### Typography

- **Primary Font**: Montserrat (500, 600, 700, 800 weights)
- **Monospace**: Geist Mono (300-700 weights)
- **Sizes**: xs (12px) to 6xl (60px)
- **Line Heights**: tight (1.1) to loose (1.8)

#### Spacing

- **Scale**: 8px grid system starting at 4px
- **Range**: `--spacing-50` (4px) to `--spacing-1000` (80px)

#### Other Tokens

- **Border Radius**: none to 3xl (24px)
- **Shadows**: sm to 2xl with inner variant
- **Z-Index**: 0-900 scale
- **Transitions**: fast (150ms) to slower (500ms)

### Theme Support

- **Automatic**: Respects `prefers-color-scheme: dark`
- **Manual**: `.dark` class override
- **Inversion**: Gray scale and semantic colors automatically invert

## 🧩 Components

### Design System Components

Available from `@t8pro/design-system`:

- **Button**: 6 variants (primary, secondary, tertiary, quaternary, outline, whatsapp)
- **Heading**: Configurable size, weight, color, alignment
- **Text**: Typography component with size and margin options
- **Card**: Container component
- **Logo**: Brand logo component
- **ThemeToggle**: Dark/light mode switcher
- **BeforeAfterSlider**: Image comparison component

### Custom Components

#### FaultyTerminal

WebGL-powered terminal animation with configurable:

- Scale, time scale, scanline intensity
- Curvature and tint effects
- Mouse interaction
- Theme-aware colors

## 🔄 Feature Refactoring Patterns

### Current State Analysis

**FULLY REFACTORED (Hero Pattern):**

- ✅ `hero/` - Complete separation with types, constants, hooks, utils
- ✅ Dumb component with clean JSX only
- ✅ All logic extracted to hooks and utilities

**PARTIALLY REFACTORED:**

- 🔄 `what-you-get/` - Has constants.ts but needs full refactor

**SIMPLE COMPONENTS (No refactor needed):**

- ✅ `before-after/` - Simple component with inline data
- ✅ `faq/` - Basic component structure
- ✅ `how-it-works/` - Basic component structure
- ✅ `lead-magnet/` - Basic component structure
- ✅ `plans/` - Basic component structure
- ✅ `social-proof/` - Basic component structure
- ✅ `upload/` - Basic component structure

**EMPTY FEATURES:**

- ❌ `retouch-process/` - Empty directory, needs implementation

### Refactoring Guidelines

#### When to Refactor (Hero Pattern):

- Complex components with multiple responsibilities
- Components with custom hooks or state management
- Components with utility functions
- Components with extensive configuration
- Components that need type safety

#### When NOT to Refactor (Simple Pattern):

- Single-purpose components
- Components with only inline data
- Components without complex logic
- Components under 100 lines

#### Refactored Feature Structure:

```
feature-name/
├── index.tsx        # Dumb component (JSX only)
├── types.ts         # TypeScript interfaces
├── constants.ts     # Default content & configuration
├── hooks.ts         # Custom hooks
├── utils.ts         # Utility functions
└── styles.module.scss
```

## 📋 Action Plan

### Immediate Tasks

1. **Complete `what-you-get/` refactor** (has constants.ts, needs full pattern)
2. **Implement `retouch-process/`** (empty directory)
3. **Review simple components** - ensure they follow simple pattern correctly

### Refactoring Checklist

For each complex feature, ensure:

- [ ] `index.tsx` is a dumb component (JSX only)
- [ ] `types.ts` contains all interfaces
- [ ] `constants.ts` has default content/config
- [ ] `hooks.ts` contains custom logic
- [ ] `utils.ts` has utility functions
- [ ] All imports are clean and organized
- [ ] No business logic in component file

### Code Quality Standards

- **Dumb Components**: Only JSX rendering, no logic
- **Type Safety**: All props and data structures typed
- **Separation of Concerns**: Logic in hooks, data in constants
- **Reusability**: Utilities can be imported elsewhere
- **Maintainability**: Easy to find and modify specific functionality

## How to Run

### Prerequisites

- Node.js >= 18
- Yarn 4.9.4 (package manager)

### Development

```bash
# From monorepo root
yarn dev

# Or specifically for retouch-pro
cd apps/retouch-pro
yarn dev
```

### Build

```bash
# From monorepo root
yarn build

# Or specifically for retouch-pro
cd apps/retouch-pro
yarn build
```

### Other Commands

```bash
# Linting
yarn lint

# Type checking
yarn check-types

# Format code
yarn format
```

## �� Configuration

### TypeScript

- Extends `@t8pro/typescript-config/nextjs.json`
- Path aliases: `@/*`, `@/components/*`, `@/features/*`
- Strict mode enabled

### ESLint

- Extends `@t8pro/eslint-config/next-js`
- Max 5 warnings allowed
- Shared configuration across monorepo

### Next.js

- App Router enabled
- Turbopack for development
- Default configuration (can be extended)

## 📦 Dependencies

### Production

- `@t8pro/design-system`: Internal design system
- `next`: ^15.5.0
- `react`: ^19.1.0
- `react-dom`: ^19.1.0
- `react-icons`: ^5.5.0 (Font Awesome icons)
- `ogl`: ^1.0.11 (WebGL library)
- `sass`: ^1.92.1 (SCSS compilation)

### Development

- `@t8pro/eslint-config`: Shared ESLint config
- `@t8pro/typescript-config`: Shared TypeScript config
- `@types/node`: ^22.15.3
- `@types/react`: 19.1.0
- `@types/react-dom`: 19.1.1
- `eslint`: ^9.34.0
- `typescript`: 5.9.2

## 🎯 Features

### Landing Page Sections

1. **Hero**: Main value proposition with CTA
2. **Social Proof**: Trust indicators and badges
3. **Before/After**: Image comparison slider
4. **How It Works**: Process explanation
5. **What You Get**: Service benefits
6. **Plans**: Pricing tiers
7. **Upload**: File upload interface
8. **FAQ**: Common questions
9. **Lead Magnet**: Lead capture
10. **Sticky CTA**: Fixed call-to-action

### Key Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Theme**: Automatic and manual switching
- **WebGL Animations**: Interactive terminal component
- **Type Safety**: Full TypeScript coverage
- **Performance**: Next.js optimizations with Turbopack

## 🔄 Turborepo Integration

### Benefits

- **Shared Dependencies**: Common packages across apps
- **Incremental Builds**: Only rebuild changed packages
- **Parallel Execution**: Run tasks across packages simultaneously
- **Caching**: Intelligent build caching

### Commands

```bash
# Run all apps in development
yarn dev

# Build all packages and apps
yarn build

# Lint all packages
yarn lint

# Type check all packages
yarn check-types
```

### Workspace Configuration

- **Apps**: `apps/*` (Next.js applications)
- **Packages**: `packages/*` (shared libraries)
- **Dependencies**: Hoisted to root `node_modules`
- **Build Order**: Dependencies built before dependents

## 🎨 Icons

Using **React Icons** with **Font Awesome** icons:

```tsx
import {
  FaClock,
  FaShieldAlt,
  FaFileContract,
  FaFlag,
  FaWhatsapp,
} from 'react-icons/fa';
```

### Icon Usage

- **Trust Badges**: Clock, Shield, Contract, Flag
- **WhatsApp**: Chat integration
- **Consistent**: All icons from Font Awesome family

## 📱 Responsive Design

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile-First Approach

- SCSS modules with responsive mixins
- Design system tokens for consistent spacing
- Touch-friendly interactive elements

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Production build
yarn build
yarn start
```

### Other Platforms

- **Docker**: Can be containerized
- **Static Export**: `next export` for static hosting
- **Node.js**: Standard Node.js deployment

## �� Development Tips

### Code Organization

- **Feature-based**: Components grouped by feature
- **Co-location**: Styles, types, and components together
- **Barrel Exports**: Clean import paths

### Performance

- **Turbopack**: Faster development builds
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Next.js font loading

### Type Safety

- **Strict TypeScript**: No implicit any
- **Shared Types**: Common types in design system
- **Component Props**: Fully typed component interfaces

```

This documentation provides a comprehensive overview of the Retouch Pro app's architecture, covering all the aspects you requested: folder structure, design tokens, components, how to run, and Turborepo integration. The documentation is structured for senior developers and includes practical examples and configuration details.
```
