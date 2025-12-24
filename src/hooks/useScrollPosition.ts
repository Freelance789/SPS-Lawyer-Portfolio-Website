import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position
 * @param threshold - Scroll threshold in pixels
 * @returns Boolean indicating if scrolled past threshold
 */
export function useScrollPosition(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
