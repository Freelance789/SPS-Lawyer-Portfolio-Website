import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Logo } from './Logo';

// Navigation configuration
const NAV_ITEMS = [
  { label: 'Home', sectionId: 'home' },
  { label: 'About Us', sectionId: 'about' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Team', sectionId: 'team' },
  { label: 'Contact', sectionId: 'contact' },
] as const;

/**
 * Navbar component
 * Responsive navigation bar with scroll-aware background and mobile menu
 * 
 * Features:
 * - Transparent background on hero, solid on scroll
 * - Always solid background on blog pages
 * - Smooth scroll to sections
 * - Mobile-responsive hamburger menu
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isScrolled = useScrollPosition(50);

  /**
   * Scrolls to a specific section on the page
   * If not on home page, navigates to home with hash
   */
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      setIsMobileMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const isBlogPage = location.pathname.startsWith('/blog');
  const shouldShowSolidBackground = isBlogPage || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowSolidBackground ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-gray-300 hover:text-[#c4a574] transition-colors"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c4a574] text-black px-6 py-2 rounded hover:bg-[#b39565] transition-all"
              aria-label="Get consultation"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left text-gray-300 hover:text-[#c4a574] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#c4a574] text-black px-6 py-3 rounded hover:bg-[#b39565] transition-all"
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}