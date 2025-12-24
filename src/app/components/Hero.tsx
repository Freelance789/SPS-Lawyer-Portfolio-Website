import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero component
 * Main landing section with firm introduction and call-to-action
 * 
 * Features:
 * - Elegant fade-in animation on page load
 * - Textured background with gradient
 * - Responsive grid layout
 * - CTA button with smooth scroll
 */
export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
    >
      {/* Textured Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,165,116,0.08),transparent_50%)]"></div>
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 mt-20" 
              style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontWeight: 700, 
                letterSpacing: '-0.02em' 
              }}
            >
              SPS Law Firm
            </h1>
            
            <div className="mb-8">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-[#c4a574] text-black px-8 py-3 rounded flex items-center gap-2 hover:bg-[#b39565] transition-all group"
                aria-label="Explore our services"
              >
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed mb-4">
              Chennai-based legal excellence providing comprehensive legal services to individuals, 
              startups, corporates, and institutions. Built on integrity, professionalism, and 
              client-focused representation.
            </p>
            
            <p className="text-[#c4a574] text-sm italic">
              "Defining Success Together"
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBqdXN0aWNlJTIwc3RhdHVlfGVufDF8fHx8MTc2NjQyMDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scales of Justice"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}