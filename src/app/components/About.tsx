import { motion } from 'motion/react';
import { Award, Users, Target, Shield, Briefcase, Scale } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Scale,
      title: 'Experienced Advocates',
      description: 'Strong courtroom exposure across District Courts, Madras High Court, and tribunals'
    },
    {
      icon: Briefcase,
      title: 'Startup & Business Support',
      description: 'Dedicated legal support for startups, corporates, and institutions'
    },
    {
      icon: Award,
      title: 'Multi-Practice Expertise',
      description: 'Expertise in corporate, regulatory, compliance, and FCRA matters'
    },
    {
      icon: Shield,
      title: 'Transparent Guidance',
      description: 'Honest legal consultation with a client-focused approach'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1658249682512-1bb162538ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjYzNjM4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Lawyers"
                className="relative rounded shadow-xl"
              />
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-neutral-950 p-6 rounded shadow-2xl border border-neutral-800">
                <div className="text-4xl text-[#c4a574] mb-1">10+</div>
                <div className="text-gray-300 text-sm">Years of Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-[#c4a574] uppercase tracking-wider text-sm">About SPS Law Firm</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#1a2e2e] mb-6 font-serif">
              Chennai-Based Legal Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              SPS Law Firm is a Chennai-based law firm providing comprehensive legal services to 
              individuals, startups, corporates, and institutions. Our firm is built on the principles 
              of integrity, professionalism, and client-focused representation.
            </p>
            <p className="text-gray-600 mb-6">
              We offer clear legal advice, strategic planning, and strong representation across 
              litigation, advisory, and compliance matters. Our goal is to simplify legal complexities 
              and help clients make informed decisions with confidence.
            </p>
            <p className="text-gray-600 mb-8">
              With experience before District Courts, the Madras High Court, tribunals, and arbitration 
              forums, SPS Law Firm combines legal expertise with practical understanding to deliver 
              reliable and effective legal solutions.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#c4a574]/20 rounded flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#c4a574]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1a2e2e] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-20"
        >
          {/* Mission */}
          <div className="bg-white p-8 rounded shadow-lg">
            <div className="w-14 h-14 bg-[#c4a574] rounded flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-[#1a2e2e] mb-4 font-serif">Our Mission</h3>
            <p className="text-gray-600">
              To provide practical, transparent, and professional legal solutions that protect client 
              interests, simplify legal processes, and support business and personal growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded shadow-lg">
            <div className="w-14 h-14 bg-[#c4a574] rounded flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-[#1a2e2e] mb-4 font-serif">Our Vision</h3>
            <p className="text-gray-600">
              To be the trusted legal partner for startups, corporates, educational institutions and 
              individuals in Chennai and across Tamil Nadu, known for excellence, integrity, and 
              results-driven advocacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}