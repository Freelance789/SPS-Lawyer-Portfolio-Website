import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Team } from './components/Team';
import { Contact } from './components/Contact';

/**
 * HomePage component
 * Main landing page that displays all primary sections of the SPS Law Firm website
 * 
 * Sections included:
 * - Hero: Main banner with firm introduction
 * - About: Firm overview and values
 * - Services: Legal services offered
 * - WhyChooseUs: Key differentiators
 * - Team: Attorney profiles
 * - Contact: Contact form and information
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Contact />
    </>
  );
}