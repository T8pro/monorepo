# Header Component

A responsive header component built with HFSA architecture (Hooks, Features, Services, API) following best practices for React/Next.js applications.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: Full ARIA support, keyboard navigation, focus management
- **Performance**: Optimized with debouncing, throttling, and intersection observers
- **TypeScript**: Fully typed with comprehensive interfaces
- **Customizable**: Multiple variants and configuration options
- **Smooth Scrolling**: Automatic scroll-to-section functionality
- **Mobile Menu**: Slide-out navigation with overlay

## Architecture

### Hooks (`hooks.ts`)

- `useHeader`: Main hook managing header state and interactions
- Handles scroll detection, section visibility, keyboard events
- Manages mobile menu state and body scroll prevention

### Services (`services.ts`)

- `HeaderService`: Utility class for navigation and viewport operations
- Smooth scrolling, device detection, performance optimizations
- Debouncing and throttling for scroll events

### Types (`types.ts`)

- Comprehensive TypeScript interfaces
- Props, state, and action definitions
- Navigation item structure

### Constants (`constants.ts`)

- Navigation items, CTA configuration
- Breakpoints and styling constants
- Z-index and dimension values

## Usage

```tsx
import { Header } from './components/header';

// Basic usage
<Header />

// With custom props
<Header
  variant="transparent"
  theme="dark"
  showLogo={true}
  showNavigation={true}
  showCTA={true}
  sticky={true}
/>
```

## Props

| Prop             | Type                                    | Default     | Description            |
| ---------------- | --------------------------------------- | ----------- | ---------------------- |
| `variant`        | `'default' \| 'transparent' \| 'solid'` | `'default'` | Header visual variant  |
| `theme`          | `'light' \| 'dark' \| 'auto'`           | `'light'`   | Color theme            |
| `showLogo`       | `boolean`                               | `true`      | Show/hide logo         |
| `showNavigation` | `boolean`                               | `true`      | Show/hide navigation   |
| `showCTA`        | `boolean`                               | `true`      | Show/hide CTA button   |
| `sticky`         | `boolean`                               | `true`      | Sticky header behavior |
| `className`      | `string`                                | -           | Additional CSS classes |

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Skip links and landmarks

## Performance Optimizations

- Intersection Observer for section detection
- Throttled scroll events
- Debounced resize handlers
- CSS transforms for animations
- Lazy loading considerations
