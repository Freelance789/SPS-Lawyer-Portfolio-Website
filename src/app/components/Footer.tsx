import { Scale, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

/**
 * Footer component
 * Comprehensive footer with brand info, links, services, and contact details
 * 
 * Features:
 * - Brand logo and social links
 * - Quick navigation links
 * - Practice areas
 * - Contact information
 * - Legal disclaimer
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Litigation & Representation',
    'Startup Legal Services',
    'Corporate & Commercial Law',
    'FCRA Advisory',
    'Property & Real Estate',
    'Family & Matrimonial'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white relative">
      {/* Textured Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <Logo className="h-16" />
            </div>
            <p className="text-gray-400 mb-6">
              Chennai-based law firm providing comprehensive legal services to individuals, startups, corporates, and institutions. Built on integrity, professionalism, and client-focused representation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#c4a574] transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 text-[#c4a574] font-serif">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-[#c4a574] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#c4a574] transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-6 text-[#c4a574] font-serif">Practice Areas</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#c4a574] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6 text-[#c4a574] font-serif">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c4a574] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-400">Chennai, Tamil Nadu</div>
                  <div className="text-gray-400">India</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c4a574] flex-shrink-0" />
                <a href="tel:+91" className="text-gray-400 hover:text-[#c4a574] transition-colors">
                  +91 [Your Contact Number]
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c4a574] flex-shrink-0" />
                <a href="mailto:info@spslawfirm.com" className="text-gray-400 hover:text-[#c4a574] transition-colors">
                  info@spslawfirm.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SPS Law Firm. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#c4a574] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c4a574] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c4a574] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-black/50 border-t border-neutral-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-500 text-xs text-center">
            Disclaimer: The information on this website is for general information purposes only. 
            Nothing on this site should be taken as legal advice for any individual case or situation. 
            This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}