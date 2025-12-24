/**
 * Site-wide configuration
 * Central place for all site configuration values
 */

export const siteConfig = {
  // Basic site information
  name: 'SPS Law Firm',
  tagline: 'Defining Success Together',
  description: 'Chennai-based legal excellence providing comprehensive legal services to individuals, startups, corporates, and institutions. Built on integrity, professionalism, and client-focused representation.',
  
  // Contact information
  contact: {
    email: 'info@spslawfirm.com',
    phone: '+91 98765 43210',
    alternatePhone: '+91 98765 43211',
    address: {
      street: '123 Legal Avenue',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600001',
      country: 'India',
    },
  },
  
  // Social media links
  social: {
    facebook: 'https://facebook.com/spslawfirm',
    twitter: 'https://twitter.com/spslawfirm',
    linkedin: 'https://linkedin.com/company/spslawfirm',
    instagram: 'https://instagram.com/spslawfirm',
  },
  
  // Business hours
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
  },
  
  // SEO settings
  seo: {
    keywords: [
      'law firm',
      'legal services',
      'Chennai lawyers',
      'corporate law',
      'startup legal',
      'FCRA compliance',
      'real estate law',
      'intellectual property',
    ],
    ogImage: '/og-image.jpg',
  },
  
  // Feature flags
  features: {
    blog: true,
    testimonials: false,
    newsletter: false,
    chatbot: false,
  },
  
  // UI settings
  ui: {
    navbar: {
      scrollThreshold: 50,
    },
    animation: {
      enableHeroAnimation: true,
      enableScrollAnimations: true,
      duration: {
        fast: 300,
        normal: 600,
        slow: 1200,
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
