/**
 * Brand color palette for SPS Law Firm
 * Consistent color values used throughout the application
 */

export const COLORS = {
  // Primary brand colors
  primary: {
    tan: '#c4a574',
    tanHover: '#b39565',
    tanLight: 'rgba(196,165,116,0.08)',
  },
  
  // Neutral colors
  neutral: {
    black: '#000000',
    dark: '#1a2e2e',
    gray: {
      100: '#f5f5f0',
      300: '#d1d5db',
      400: '#9ca3af',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
    },
    white: '#ffffff',
  },
  
  // Gradients
  gradients: {
    dark: 'from-neutral-950 via-neutral-900 to-neutral-950',
  },
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
  },
  easing: {
    default: 'easeOut',
  },
} as const;
