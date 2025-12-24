import { motion } from 'motion/react';
import { CheckCircle2, Scale, Briefcase, Shield } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Scale,
      title: 'Experienced Advocates',
      description: 'Strong courtroom exposure before District Courts, Madras High Court, and tribunals.',
      stat: '10+',
      statLabel: 'Years Experience'
    },
    {
      icon: Briefcase,
      title: 'Startup & Business Focus',
      description: 'Dedicated legal support for startups, corporates, and educational institutions.',
      stat: 'Chennai',
      statLabel: 'Tamil Nadu'
    },
    {
      icon: CheckCircle2,
      title: 'Multi-Practice Expertise',
      description: 'Comprehensive expertise in corporate, regulatory, compliance, and FCRA matters.',
      stat: '10+',
      statLabel: 'Practice Areas'
    },
    {
      icon: Shield,
      title: 'Transparent & Honest',
      description: 'Clear legal consultation and transparent guidance throughout your legal journey.',
      stat: '100%',
      statLabel: 'Client-Focused'
    }
  ];

  return (
    <section className="py-20 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-wider text-sm">Why Choose SPS</span>
          <h2 className="text-4xl md:text-5xl text-[#1a2e2e] mt-4 mb-6 font-serif">
            Your Success Is Our Priority
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine legal excellence with genuine care for our clients, delivering results 
            that exceed expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded shadow-lg"
            >
              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="relative w-20 h-20 bg-[#c4a574] rounded-full flex items-center justify-center mx-auto">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Stat */}
              <div className="text-4xl text-[#1a2e2e] mb-2 font-serif">{reason.stat}</div>
              <div className="text-sm text-[#c4a574] uppercase tracking-wider mb-4">
                {reason.statLabel}
              </div>

              {/* Content */}
              <h3 className="text-xl text-[#1a2e2e] mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjY0MDE2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Partnership"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-[#1a2e2e]/90 flex items-center">
              <div className="max-w-3xl px-8 md:px-16">
                <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif">
                  Let's Build Your Case Together
                </h3>
                <p className="text-gray-300 mb-6">
                  Every great legal victory starts with a conversation. Schedule your free consultation 
                  today and discover how we can help you achieve your goals.
                </p>
                <button className="bg-[#c4a574] text-[#1a2e2e] px-8 py-4 rounded hover:bg-[#b39565] transition-all">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}