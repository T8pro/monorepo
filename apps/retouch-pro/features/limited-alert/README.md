# Limited Alert

This feature creates urgency and scarcity to drive immediate action from potential customers.

## Content

### Alert Section

- **Limited Capacity**: Only 50 new restaurants per month
- **Spots Remaining**: Dynamic counter (default: 37 spots)
- **Progress Bar**: Visual representation of capacity usage
- **Urgency Message**: "Every day you wait is revenue lost to competitors"

### Guarantees Section

- **30-Day Money-Back Guarantee**: Full refund if photos don't increase orders
- **Authenticity Promise**: No fake ingredients or misleading images
- **Delivery Guarantee**: 48-hour delivery or next order free

## Design Features

- **Urgency-focused styling** with red color scheme
- **Animated elements** (pulse, bounce, shimmer effects)
- **Progress bar** showing capacity usage
- **Card-based layout** for guarantees
- **Responsive design** for all screen sizes

## Usage

```tsx
import { LimitedAlert } from '@/features/limited-alert';

// Default props
<LimitedAlert />

// Custom props
<LimitedAlert
  spotsRemaining={25}
  totalSpots={50}
  ctaText="SECURE YOUR SPOT NOW"
/>
```

## Props

- `spotsRemaining?: number` - Number of spots left (default: 37)
- `totalSpots?: number` - Total monthly capacity (default: 50)
- `ctaText?: string` - Custom CTA button text

## Psychology

This section leverages several psychological triggers:

- **Scarcity**: Limited spots create urgency
- **FOMO**: Fear of missing out on the opportunity
- **Social Proof**: Shows high demand (spots filling up)
- **Risk Reversal**: Multiple guarantees reduce perceived risk
