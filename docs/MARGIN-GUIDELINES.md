# Margin and Spacing Guidelines

This document outlines the standardized approach to margins and spacing throughout the IELTS Project application.

## Core Components

### Container Component

The `Container` component is the fundamental building block for consistent margins:

```tsx
<Container>{/* Content here */}</Container>
```

- Provides `max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8`
- Ensures consistent horizontal margins
- Optimized for laptop screens (HP ProBook G2 450)
- Used throughout the app for consistent alignment

### PageWrapper Component

The `PageWrapper` builds on the Container and adds consistent vertical padding:

```tsx
<PageWrapper>{/* Page content here */}</PageWrapper>
```

- Adds `py-6 md:py-8` vertical padding
- Uses the Container component internally
- Should be used for all main content sections

### Section Component

The `Section` component provides a complete, standardized content section:

```tsx
<Section background="gray">{/* Section content */}</Section>
```

- Wraps content in a properly spaced section
- Provides consistent padding: `py-8 md:py-12`
- Includes PageWrapper for horizontal margins
- Supports different background colors: "white", "gray", "blue"

## Component Hierarchy

```
Container → PageWrapper → Section
```

- `Container`: Base horizontal margins (used in navbar, carousel, and content)
- `PageWrapper`: Adds vertical padding to Container
- `Section`: Complete section with background + PageWrapper

## Spacing Guidelines

1. **Use established components:**

   - Use `Section` for major content sections
   - Use `Container` for consistent horizontal margins
   - Use `PageWrapper` for page content without background
   - Never create arbitrary margin/padding directly

2. **Use spacing utilities consistently:**

   - Use `space-y-{n}` for vertical spacing between elements
   - Use `gap-{n}` for grid and flex layouts
   - Use responsive variants for different screen sizes

3. **Follow breakpoint patterns:**

   - `px-4 sm:px-6 lg:px-8` for horizontal padding
   - `py-6 md:py-8` for content vertical padding
   - `py-8 md:py-12` for section vertical padding

4. **Avoid direct margins when possible:**
   - Prefer container/layout-based spacing over individual margins
   - Use `mt-{n}` only when necessary for specific designs

## Implementation Example

```tsx
// Page structure
<div className="flex flex-col">
  {/* Full-width component with consistent container */}
  <Carousel />

  {/* Content sections with consistent spacing */}
  <div className="space-y-16">
    <Section background="gray">
      <h2 className="text-2xl font-bold">Section Title</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cards */}
      </div>
    </Section>

    <Section background="white">
      <div className="space-y-8">{/* Content */}</div>
    </Section>
  </div>
</div>
```

All components, including Navbar and Carousel, use the same Container component to ensure consistent margins throughout the application that are optimized for HP ProBook G2 450 laptop screens.
