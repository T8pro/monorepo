# @t8pro/design-system

A centralized design system package containing reusable UI components for T8 Pro applications.

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@t8pro/design-system';

<Button variant="primary" size="large" iconLeft={<Icon />}>
  Click me
</Button>;
```

**Variants:** `primary`, `secondary`, `tertiary`, `quaternary`, `outline`, `whatsapp`
**Sizes:** `small`, `medium`, `large`

### Card

A flexible card component for content containers.

```tsx
import { Card } from '@t8pro/design-system';

<Card variant="service">
  <h3>Service Title</h3>
  <Text>Service description</Text>
</Card>;
```

**Variants:** `default`, `service`, `process`

### Header

A configurable header component.

```tsx
import { Header } from '@t8pro/design-system';

<Header
  ctaLabel="Get Started"
  ctaVariant="primary"
  onCtaClick={() => console.log('Clicked')}
/>;
```

### Logo

A responsive logo component.

```tsx
import { Logo } from '@t8pro/design-system';

<Logo variant="header" size="medium" alt="Company Logo" />;
```

**Variants:** `header`
**Sizes:** `small`, `medium`, `large`

## Installation

```bash
npm install @t8pro/design-system
```

## Usage

```tsx
import { Button, Card, Header } from '@t8pro/design-system';

function App() {
  return (
    <div>
      <Header ctaLabel="Get Started" />
      <main>
        <Card variant="service">
          <Button variant="primary">Click me</Button>
        </Card>
      </main>
    </div>
  );
}
```

## Development

```bash
# Build the package
npm run build

# Watch for changes
npm run dev

# Lint
npm run lint

# Type check
npm run check-types
```
