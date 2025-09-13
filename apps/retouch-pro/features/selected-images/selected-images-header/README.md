# SelectedImagesHeader Component

A header component that displays the count of selected photos and provides action buttons for the photo retouching workflow.

## Features

- **Dynamic Count Display**: Shows current selected photos count out of maximum allowed
- **Visual Feedback**: Text color changes when approaching or reaching the limit
- **Action Buttons**:
  - "Be Pro" (outlined) - For upgrading to pro features
  - "Process" (filled) - For starting the photo processing
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper semantic HTML structure

## Usage

```tsx
import { SelectedImagesHeader } from './selected-images-header';

export const MyComponent = () => {
  return (
    <div>
      <SelectedImagesHeader />
      {/* Other content */}
    </div>
  );
};
```

## Props

This component doesn't accept props as it uses the `usePhotosContext` hook to get the current photo selection state.

## Styling

The component uses CSS modules and follows the design system tokens. Key styling features:

- Uses design system colors and spacing
- Responsive breakpoints for mobile devices
- Hover states for interactive elements
- Visual feedback for photo limit reached

## Dependencies

- `@t8pro/design-system` - For Button and Icon components
- `usePhotosContext` - For accessing photo selection state
