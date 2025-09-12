# Design Tokens

This document outlines the design tokens used throughout the T8 Pro design system.

## Colors

### Primary & Secondary

- `--color-primary`: #679a58 (main brand color)
- `--color-secondary`: #181914 (light theme)
- `--color-secondary`: #cbd4c6 (dark theme - automatically applied)

### Semantic Colors

- `--color-informative`: #3b82f6 (blue)
- `--color-error`: #ef4444 (red)
- `--color-success`: #22c55e (green)
- `--color-attention`: #f59e0b (yellow/orange)

### Neutral Colors

- `--color-white`: #ffffff (light theme) / #181818 (dark theme)
- `--color-black`: #000000 (light theme) / #dcdcdc (dark theme)
- `--color-gray-50` to `--color-gray-900`: Gray scale that inverts in dark theme

## Typography

### Font Families

- `--font-primary`: var(--font-montserrat), 'Montserrat', sans-serif
- `--font-mono`: var(--jet-brains-mono), 'Geist Mono', monospace

### Font Weights

- `--font-weight-thin`: 100
- `--font-weight-extralight`: 200
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
- `--font-weight-extrabold`: 800
- `--font-weight-black`: 900

### Font Sizes

- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 1.875rem (30px)
- `--font-size-4xl`: 2.25rem (36px)
- `--font-size-5xl`: 3rem (48px)
- `--font-size-6xl`: 3.75rem (60px)

### Line Heights

- `--line-height-none`: 1
- `--line-height-tight`: 1.1
- `--line-height-snug`: 1.2
- `--line-height-normal`: 1.4
- `--line-height-relaxed`: 1.6
- `--line-height-loose`: 1.8

## Spacing

Based on 8px grid system, starting at 4px:

- `--spacing-50`: 0.25rem (4px)
- `--spacing-100`: 0.5rem (8px)
- `--spacing-150`: 0.75rem (12px)
- `--spacing-200`: 1rem (16px)
- `--spacing-300`: 1.5rem (24px)
- `--spacing-400`: 2rem (32px)
- `--spacing-500`: 2.5rem (40px)
- `--spacing-600`: 3rem (48px)
- `--spacing-700`: 3.5rem (56px)
- `--spacing-800`: 4rem (64px)
- `--spacing-900`: 4.5rem (72px)
- `--spacing-1000`: 5rem (80px)

## Border Radius

- `--radius-none`: 0
- `--radius-sm`: 0.125rem (2px)
- `--radius-base`: 0.25rem (4px)
- `--radius-md`: 0.375rem (6px)
- `--radius-lg`: 0.5rem (8px)
- `--radius-xl`: 0.75rem (12px)
- `--radius-2xl`: 1rem (16px)
- `--radius-3xl`: 1.5rem (24px)
- `--radius-full`: 9999px

## Border Widths

- `--border-0`: 0
- `--border-1`: 1px
- `--border-2`: 2px
- `--border-4`: 4px
- `--border-8`: 8px

## Shadows

- `--shadow-sm`: Small shadow
- `--shadow-base`: Base shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow
- `--shadow-2xl`: 2x large shadow
- `--shadow-inner`: Inner shadow

## Z-Index Scale

- `--z-0`: 0
- `--z-10`: 10
- `--z-20`: 20
- `--z-30`: 30
- `--z-40`: 40
- `--z-50`: 50
- `--z-auto`: auto

## Transitions

- `--transition-fast`: 150ms ease
- `--transition-base`: 200ms ease
- `--transition-slow`: 300ms ease
- `--transition-slower`: 500ms ease

## Breakpoints

- `--breakpoint-sm`: 640px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px
- `--breakpoint-2xl`: 1536px

## Theme Support

The design system supports both light and dark themes with automatic inversion:

- **Light Theme**: Default theme with light backgrounds and dark text
- **Dark Theme**: Automatically applied based on `prefers-color-scheme: dark`
  - Gray scale colors are inverted (gray-50 becomes gray-900, etc.)
  - White becomes dark gray (#181818)
  - Black becomes light gray (#dcdcdc)
  - Secondary color switches to light variant (#cbd4c6)

## Usage

```css
/* Using tokens in your CSS */
.my-component {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: var(--spacing-200);
  border-radius: var(--radius-lg);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-base);
}
```

```tsx
// Using tokens in React components
const MyComponent = () => (
  <div
    style={{
      backgroundColor: 'var(--color-primary)',
      padding: 'var(--spacing-200)',
      borderRadius: 'var(--radius-lg)',
    }}
  >
    Content
  </div>
);
```
