# SPS Law Firm Website - Architecture Documentation

## Overview
This document outlines the architecture, design patterns, and technical decisions for the SPS Law Firm website.

## Technology Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Custom CSS Variables** - Theme management in `/src/styles/theme.css`

### Animation
- **Motion (Framer Motion)** - Smooth, performant animations
  - Hero fade-in: 1.2s
  - Minimal animations throughout for performance

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Project Structure

```
src/
├── app/                    # Application code
│   ├── components/        # Reusable components
│   ├── pages/            # Page-level components
│   ├── App.tsx           # Root component
│   └── HomePage.tsx      # Home page composition
├── config/               # Configuration files
│   └── site.config.ts   # Site-wide settings
├── constants/           # Constant values
│   ├── colors.ts       # Brand colors
│   ├── navigation.ts   # Nav configuration
│   └── seo.ts         # SEO metadata
├── hooks/              # Custom React hooks
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
├── types/              # TypeScript definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── scroll.ts
│   └── format.ts
└── styles/             # Global styles
    ├── fonts.css
    └── theme.css
```

## Key Design Patterns

### 1. Component Composition
Components are small, focused, and composable. The HomePage component demonstrates this:

```tsx
<HomePage>
  <Hero />
  <About />
  <Services />
  <WhyChooseUs />
  <Team />
  <Contact />
</HomePage>
```

### 2. Custom Hooks
Reusable logic extracted into custom hooks:
- `useScrollPosition` - Track scroll state
- `useMediaQuery` - Responsive breakpoint detection

### 3. Configuration-Driven
Settings centralized in configuration files:
- `site.config.ts` - Site-wide configuration
- `colors.ts` - Brand colors
- `navigation.ts` - Navigation structure

### 4. Type Safety
Comprehensive TypeScript interfaces for:
- Blog posts
- Services
- Team members
- Navigation items

### 5. Error Boundaries
React Error Boundaries catch runtime errors and display fallback UI.

## Performance Optimizations

### 1. Animations
- Hero section: Single fade-in animation
- Other sections: Simple hover effects
- No heavy scroll-based animations

### 2. Image Optimization
- Unsplash images with optimized parameters
- Lazy loading for images below the fold

### 3. Code Splitting
- Route-based code splitting via React Router
- Lazy loading of page components

### 4. Asset Management
- SVG icons for scalability
- Optimized image formats

## Accessibility

### ARIA Labels
All interactive elements have appropriate ARIA labels:
```tsx
<button aria-label="Navigate to About Us">About Us</button>
<nav role="navigation" aria-label="Main navigation">
```

### Semantic HTML
Proper use of semantic elements:
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for blog posts
- `<section>` for page sections

### Keyboard Navigation
All interactive elements are keyboard accessible.

## SEO Strategy

### 1. Blog System
9 comprehensive blog posts covering all practice areas:
- Startup Law
- FCRA & Compliance
- Real Estate Law
- Intellectual Property
- Corporate Law
- Family Law
- Dispute Resolution
- Criminal Law
- Commercial Law

### 2. Metadata
- Descriptive page titles
- Meta descriptions
- Open Graph tags (prepared)

### 3. Semantic Structure
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive alt text for images
- Structured data ready

## Routing Structure

```
/                           # Home page
/service/:serviceId         # Service detail pages
/blog                       # Blog listing
/blog/:blogId              # Individual blog posts
```

## State Management

### Local State
Component-level state using `useState`:
- Mobile menu open/closed
- Form inputs
- UI toggles

### URL State
Route parameters for:
- Service ID
- Blog post ID

### No Global State
Deliberate choice to keep the app simple without Redux/Context for global state.

## Styling Strategy

### Tailwind Utilities
Primary styling method using Tailwind classes.

### Custom CSS
- Typography in `theme.css`
- Font imports in `fonts.css`
- No font-size, font-weight, or line-height utilities (managed in theme)

### Color System
Consistent color palette:
- Primary: `#c4a574` (tan)
- Hover: `#b39565`
- Background: Sophisticated black with gradients

## Build & Deployment

### Build Command
```bash
npm run build
```

### Output
Optimized static files in `/dist` directory.

### Hosting Recommendations
- Vercel
- Netlify
- Any static hosting service

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support required
- No IE11 support

## Future Enhancements

Potential areas for expansion:
1. CMS integration for blog management
2. Contact form backend integration
3. Client portal
4. Case study section
5. Newsletter subscription
6. Live chat integration
7. Multi-language support

## Code Quality Standards

### 1. TypeScript
- Strict mode enabled
- All components properly typed
- No `any` types

### 2. Comments
- JSDoc comments on all components
- Inline comments for complex logic
- README files for documentation

### 3. Naming Conventions
- PascalCase for components
- camelCase for functions/variables
- SCREAMING_SNAKE_CASE for constants

### 4. File Organization
- One component per file
- Related files grouped in directories
- Index files for exports

## Maintenance

### Regular Updates
- Dependencies should be updated quarterly
- Security patches applied immediately
- Test after major version updates

### Content Updates
- Blog posts added monthly
- Service descriptions reviewed quarterly
- Team profiles kept current

---

**Last Updated:** December 2024
**Version:** 1.0.0
