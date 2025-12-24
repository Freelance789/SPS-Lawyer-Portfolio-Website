# SPS Law Firm Website

A professional, premium corporate portfolio website for SPS Law Firm, showcasing legal services with a sophisticated aesthetic.

## Project Structure

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── WhyChooseUs.tsx
│   ├── pages/            # Page-level components
│   │   ├── BlogDetailPage.tsx
│   │   ├── BlogListPage.tsx
│   │   └── ServiceDetailPage.tsx
│   ├── App.tsx           # Main app component
│   └── HomePage.tsx      # Home page composition
├── constants/            # Application constants
│   ├── colors.ts
│   ├── navigation.ts
│   └── seo.ts
├── types/                # TypeScript type definitions
│   └── index.ts
├── utils/                # Utility functions
│   └── scroll.ts
└── styles/               # Global styles
    ├── fonts.css
    └── theme.css
```

## Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Performance Optimized**: Minimal animations for fast load times
- **SEO-Friendly**: Comprehensive blog system with 9 detailed posts covering all practice areas
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Modern Stack**: React, TypeScript, Tailwind CSS v4, Motion (Framer Motion)

## Design System

### Colors
- Primary: `#c4a574` (Tan)
- Background: Sophisticated textured black with tan accents
- Neutrals: Various shades of gray for hierarchy

### Typography
- Headings: Playfair Display (serif)
- Body: Default system font stack
- All typography managed in `/src/styles/theme.css`

### Animations
- Hero: Fade-in animation only (1.2s)
- Other sections: Simple hover effects
- Optimized for performance and load time

## Routes

- `/` - Home page with all main sections
- `/service/:serviceId` - Individual service detail pages
- `/blog` - Blog listing page
- `/blog/:blogId` - Individual blog post pages

## Key Components

### Navbar
- Scroll-aware background (transparent → solid)
- Always solid on blog pages
- Responsive mobile menu
- Smooth scroll to sections

### Hero
- Elegant fade-in animation
- Textured background
- Call-to-action button

### Services
- Grid layout of legal services
- Links to detailed service pages

### Blog System
- 9 comprehensive blog posts
- Categories and metadata
- Social sharing functionality
- SEO optimized

## Development

### Prerequisites
- Node.js 18+
- npm/pnpm

### Installation
```bash
npm install
```

### Build
```bash
npm run build
```

## Best Practices

1. **Component Structure**: All components include JSDoc comments explaining purpose and features
2. **Type Safety**: TypeScript types defined in `/src/types/index.ts`
3. **Constants**: Shared values in `/src/constants/` for maintainability
4. **Accessibility**: ARIA labels on interactive elements
5. **Performance**: Lazy loading and optimized animations
6. **Code Quality**: Professional naming conventions and organization

## Contact

For questions or support regarding this website, contact SPS Law Firm at info@spslawfirm.com
