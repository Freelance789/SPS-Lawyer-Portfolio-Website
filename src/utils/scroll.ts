/**
 * Utility functions for scroll behavior
 */

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Scrolls to top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Checks if user has scrolled past a certain threshold
 * @param threshold - Scroll threshold in pixels
 * @returns boolean indicating if scrolled past threshold
 */
export const hasScrolledPast = (threshold: number): boolean => {
  return window.scrollY > threshold;
};
