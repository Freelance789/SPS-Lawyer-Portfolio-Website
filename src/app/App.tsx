import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

/**
 * ScrollToTop component handles automatic scrolling behavior when navigating between routes
 * - Scrolls to hash anchors when present
 * - Scrolls to top for regular page navigation
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Handle hash navigation (e.g., /#contact)
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top for regular page navigation
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/**
 * Main App component
 * Handles routing and layout structure for SPS Law Firm website
 */
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:blogId" element={<BlogDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}