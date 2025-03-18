# Margin and Spacing Patterns

This document explains the spacing and margin patterns implemented in the IELTS Online Tests application.

## Core Principles

- **Container-based Layout**: Using a global container for consistent outer margins
- **Component Spacing**: Using gap utilities for consistent internal spacing
- **Reusable PageWrapper**: A dedicated component that ensures uniform page margins
- **Flexbox/Grid Spacing**: Relying on modern layout techniques instead of arbitrary margins

## Implementation Details

### PageWrapper Component

A reusable component that wraps page content with consistent margins:
- Provides responsive padding on all sides
- Uses container utility for width constraints
- Easy to customize through className prop

### Layout Structure

- Root layout uses flex column to ensure proper content flow
- Main content area uses flex-grow to fill available space
- Components use space-y and gap utilities for internal spacing

### Component Cards

Cards and UI elements follow these patterns:
- Using flex-col and space-y for vertical spacing
- Using gap utilities for grid layouts
- Avoiding excessive margin-bottom in favor of gap utilities
- Using mt-X only for specific design requirements

## Best Practices

1. **Use PageWrapper** for all page content
2. **Prefer gap utilities** over individual margins
3. **Use space-y-X** for vertical spacing between child elements
4. **Use the container** for consistent width constraints
5. **Use responsive padding** that adjusts to different screen sizes

These patterns ensure a professional, consistent layout throughout the application. 