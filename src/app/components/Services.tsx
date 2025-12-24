import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Building2, 
  Users2, 
  Home, 
  Scale, 
  Shield,
  FileText,
  Gavel,
  Landmark,
  HeartHandshake,
  FileSearch,
  ArrowRight
} from 'lucide-react';

export function Services() {
  const services = [
    {
      id: 'litigation',
      icon: Scale,
      title: 'Litigation & Representation',
      description: 'Strategic advocacy in civil, criminal, commercial, labour, and property matters before District Courts, Madras High Court, and tribunals.',
      features: ['Court Representation', 'Trial Advocacy', 'Research & Strategy']
    },
    {
      id: 'startup',
      icon: Briefcase,
      title: 'Startup Legal Services',
      description: 'End-to-end legal support for startups and founders from incorporation to funding and compliance.',
      features: ['Startup Incorporation', 'Founders Agreements', 'Investment Documentation']
    },
    {
      id: 'corporate',
      icon: Building2,
      title: 'Corporate & Commercial Law',
      description: 'Comprehensive corporate support including compliance, governance, contracts, and business advisory.',
      features: ['Corporate Compliance', 'Commercial Contracts', 'Legal Due Diligence']
    },
    {
      id: 'fcra',
      icon: Landmark,
      title: 'FCRA Advisory',
      description: 'Expert guidance for NGOs, trusts, and associations on FCRA registration, compliance, and foreign contribution matters.',
      features: ['FCRA Registration', 'Compliance Filing', 'Regulatory Advisory']
    },
    {
      id: 'ipr',
      icon: FileSearch,
      title: 'Intellectual Property - Patent',
      description: 'Protection of innovation and intellectual assets through patent filing, documentation, and IP strategy.',
      features: ['Patent Filing', 'IP Strategy', 'Patent Protection']
    },
    {
      id: 'property',
      icon: Home,
      title: 'Property & Real Estate Law',
      description: 'Comprehensive property legal services including title verification, documentation, and property disputes.',
      features: ['Title Verification', 'Property Documentation', 'Land Litigation']
    },
    {
      id: 'family',
      icon: HeartHandshake,
      title: 'Family & Matrimonial Matters',
      description: 'Sensitive and confidential handling of divorce, custody, maintenance, and family settlement matters.',
      features: ['Divorce & Separation', 'Child Custody', 'Family Settlements']
    },
    {
      id: 'criminal',
      icon: Shield,
      title: 'Criminal & Bail Matters',
      description: 'Strong criminal defense representation including bail applications and trial advocacy.',
      features: ['Criminal Defence', 'Bail Applications', 'Trial Representation']
    },
    {
      id: 'arbitration',
      icon: Gavel,
      title: 'Arbitration & Mediation',
      description: 'Alternative dispute resolution through arbitration and mediation for cost-effective and efficient solutions.',
      features: ['Arbitration Representation', 'Mediation Services', 'Dispute Resolution']
    },
    {
      id: 'documentation',
      icon: FileText,
      title: 'Legal Documentation',
      description: 'Professional drafting and review of legal notices, contracts, agreements, and compliance documents.',
      features: ['Contract Drafting', 'Legal Notices', 'Compliance Documents']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-wider text-sm">Our Legal Services</span>
          <h2 className="text-4xl md:text-5xl text-[#1a2e2e] mt-4 mb-6 font-serif">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From corporate matters to personal legal needs, our experienced attorneys provide 
            expert guidance across a wide range of practice areas.
          </p>
        </motion.div>

        {/* Services Grid - 4 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={index}
              initial={index === 0 ? { opacity: 0 } : false}
              whileInView={index === 0 ? { opacity: 1 } : false}
              transition={index === 0 ? { duration: 0.8 } : undefined}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#f5f5f0] rounded p-5 h-full hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#c4a574] flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#c4a574] rounded flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg text-[#1a2e2e] mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start">
                      <span className="text-[#c4a574] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center gap-2 text-[#c4a574] hover:text-[#b39565] transition-colors text-sm group-hover:gap-3 duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last 2 cards - centered */}
        <div className="flex justify-center mt-6">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full">
            {services.slice(8).map((service, index) => (
              <div
                key={index + 8}
                className="group"
              >
                <div className="bg-[#f5f5f0] rounded p-5 h-full hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#c4a574] flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#c4a574] rounded flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-[#1a2e2e] mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="text-[#c4a574] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={`/service/${service.id}`}
                    className="inline-flex items-center gap-2 text-[#c4a574] hover:text-[#b39565] transition-colors text-sm group-hover:gap-3 duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}