import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
}

const serviceDetails: { [key: string]: ServiceDetail } = {
  'litigation': {
    id: 'litigation',
    title: 'Litigation & Representation',
    description: 'Strategic advocacy in civil, criminal, commercial, labour, and property matters',
    fullDescription: 'Our litigation practice is driven by research, preparation, and strategic advocacy. We represent clients in civil, criminal, commercial, labour, and property matters before District & Sessions Courts, Madras High Court, and various tribunals and statutory authorities.',
    keyFeatures: [
      'Court Representation',
      'Trial Advocacy',
      'Research & Strategy',
      'Appeals & Revisions',
      'Case Management'
    ],
    benefits: [
      'Experienced courtroom representation',
      'Thorough legal research and case preparation',
      'Strategic approach to litigation',
      'Regular case updates and communication'
    ],
    processSteps: [
      {
        title: 'Initial Consultation',
        description: 'Detailed discussion of your case and assessment of legal options'
      },
      {
        title: 'Case Research & Strategy',
        description: 'Comprehensive legal research and development of litigation strategy'
      },
      {
        title: 'Court Representation',
        description: 'Professional representation before courts and tribunals'
      },
      {
        title: 'Resolution',
        description: 'Working towards the best possible outcome for your case'
      }
    ]
  },
  'startup': {
    id: 'startup',
    title: 'Startup Legal Services',
    description: 'End-to-end legal support for startups and founders',
    fullDescription: 'We provide comprehensive legal support for startups and founders, from incorporation to funding and beyond. Our services include startup incorporation and structuring, founders\' and shareholders\' agreements, contract drafting and review, compliance and regulatory advisory, investment and funding documentation, and ongoing legal advisory.',
    keyFeatures: [
      'Startup Incorporation',
      'Founders Agreements',
      'Investment Documentation',
      'Contract Drafting & Review',
      'Ongoing Legal Advisory'
    ],
    benefits: [
      'Tailored solutions for startups',
      'Understanding of startup ecosystem',
      'Cost-effective legal support',
      'Proactive compliance guidance'
    ],
    processSteps: [
      {
        title: 'Business Structure Planning',
        description: 'Advising on the best legal structure for your startup'
      },
      {
        title: 'Incorporation & Documentation',
        description: 'Complete incorporation process and foundational documents'
      },
      {
        title: 'Compliance Setup',
        description: 'Setting up necessary compliance frameworks'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous legal advisory as your startup grows'
      }
    ]
  },
  'corporate': {
    id: 'corporate',
    title: 'Corporate & Commercial Law',
    description: 'Comprehensive corporate support including compliance, governance, and contracts',
    fullDescription: 'Our corporate practice supports businesses with corporate compliance and governance, commercial contracts and agreements, MSME and business advisory, legal due diligence, business structuring and restructuring, and corporate dispute advisory.',
    keyFeatures: [
      'Corporate Compliance',
      'Commercial Contracts',
      'Legal Due Diligence',
      'Business Advisory',
      'Governance Support'
    ],
    benefits: [
      'Comprehensive corporate legal support',
      'Risk mitigation strategies',
      'Commercial contract expertise',
      'Practical business solutions'
    ],
    processSteps: [
      {
        title: 'Business Assessment',
        description: 'Understanding your business structure and requirements'
      },
      {
        title: 'Compliance Framework',
        description: 'Setting up or reviewing compliance systems'
      },
      {
        title: 'Contract Management',
        description: 'Drafting and reviewing commercial agreements'
      },
      {
        title: 'Ongoing Advisory',
        description: 'Regular legal counsel for business matters'
      }
    ]
  },
  'fcra': {
    id: 'fcra',
    title: 'FCRA Advisory',
    description: 'Expert guidance for NGOs, trusts, and associations on FCRA compliance',
    fullDescription: 'We assist NGOs, trusts, and associations with FCRA registration and renewal, foreign contribution compliance, filing and reporting requirements, advisory on utilization of foreign funds, and handling notices and regulatory issues.',
    keyFeatures: [
      'FCRA Registration',
      'Compliance Filing',
      'Regulatory Advisory',
      'Notice Response',
      'Fund Utilization Guidance'
    ],
    benefits: [
      'Specialized FCRA expertise',
      'Timely compliance management',
      'Regulatory issue resolution',
      'Clear guidance on fund utilization'
    ],
    processSteps: [
      {
        title: 'Eligibility Assessment',
        description: 'Reviewing eligibility for FCRA registration'
      },
      {
        title: 'Application & Registration',
        description: 'Complete application process and documentation'
      },
      {
        title: 'Compliance Management',
        description: 'Ongoing filing and reporting support'
      },
      {
        title: 'Regulatory Support',
        description: 'Handling notices and regulatory matters'
      }
    ]
  },
  'ipr': {
    id: 'ipr',
    title: 'Intellectual Property - Patent',
    description: 'Protection of innovation and intellectual assets',
    fullDescription: 'Our IPR services focus on protecting innovation and intellectual assets through patent filing and advisory, patent documentation and compliance, IP strategy for startups and companies, advisory on patent protection and enforcement, and support in IP-related disputes.',
    keyFeatures: [
      'Patent Filing',
      'IP Strategy',
      'Patent Protection',
      'Documentation & Compliance',
      'Dispute Support'
    ],
    benefits: [
      'Expert patent filing assistance',
      'Strategic IP planning',
      'Protection of innovations',
      'IP portfolio management'
    ],
    processSteps: [
      {
        title: 'Innovation Review',
        description: 'Assessment of patentability and IP strategy'
      },
      {
        title: 'Patent Application',
        description: 'Preparation and filing of patent applications'
      },
      {
        title: 'Prosecution',
        description: 'Managing the patent examination process'
      },
      {
        title: 'Protection & Enforcement',
        description: 'Advisory on IP protection and enforcement'
      }
    ]
  },
  'property': {
    id: 'property',
    title: 'Property & Real Estate Law',
    description: 'Comprehensive property legal services',
    fullDescription: 'We assist clients with title verification and due diligence, sale, lease, and property documentation, builder disputes and land litigation, and property injunctions and ownership disputes.',
    keyFeatures: [
      'Title Verification',
      'Property Documentation',
      'Land Litigation',
      'Due Diligence',
      'Dispute Resolution'
    ],
    benefits: [
      'Thorough title verification',
      'Secure property transactions',
      'Expert dispute resolution',
      'Comprehensive legal support'
    ],
    processSteps: [
      {
        title: 'Title Verification',
        description: 'Comprehensive verification of property title'
      },
      {
        title: 'Due Diligence',
        description: 'Legal and compliance due diligence'
      },
      {
        title: 'Documentation',
        description: 'Preparation of sale/lease agreements'
      },
      {
        title: 'Registration',
        description: 'Assistance with property registration'
      }
    ]
  },
  'family': {
    id: 'family',
    title: 'Family & Matrimonial Matters',
    description: 'Sensitive and confidential handling of family matters',
    fullDescription: 'We handle sensitive family matters with confidentiality and care, including divorce and separation, maintenance and alimony, child custody and guardianship, domestic violence matters, and family settlements.',
    keyFeatures: [
      'Divorce & Separation',
      'Child Custody',
      'Family Settlements',
      'Maintenance Cases',
      'Domestic Violence Support'
    ],
    benefits: [
      'Confidential handling',
      'Compassionate approach',
      'Expert legal guidance',
      'Focus on best outcomes'
    ],
    processSteps: [
      {
        title: 'Confidential Consultation',
        description: 'Private discussion of your family matter'
      },
      {
        title: 'Legal Strategy',
        description: 'Development of appropriate legal approach'
      },
      {
        title: 'Representation',
        description: 'Professional representation in family courts'
      },
      {
        title: 'Resolution',
        description: 'Working towards fair and amicable resolution'
      }
    ]
  },
  'criminal': {
    id: 'criminal',
    title: 'Criminal & Bail Matters',
    description: 'Strong criminal defense representation',
    fullDescription: 'Our criminal practice includes criminal defence, bail applications, trial representation, and FIR-related advisory.',
    keyFeatures: [
      'Criminal Defence',
      'Bail Applications',
      'Trial Representation',
      'FIR Advisory',
      'Legal Consultation'
    ],
    benefits: [
      'Experienced criminal defense',
      'Prompt bail assistance',
      'Strong court representation',
      'Strategic defense planning'
    ],
    processSteps: [
      {
        title: 'Case Assessment',
        description: 'Detailed review of criminal charges or FIR'
      },
      {
        title: 'Defense Strategy',
        description: 'Development of defense strategy'
      },
      {
        title: 'Court Representation',
        description: 'Aggressive defense in criminal proceedings'
      },
      {
        title: 'Resolution',
        description: 'Working towards best possible outcome'
      }
    ]
  },
  'arbitration': {
    id: 'arbitration',
    title: 'Arbitration & Mediation',
    description: 'Alternative dispute resolution for cost-effective solutions',
    fullDescription: 'We represent clients in alternative dispute resolution proceedings, offering cost-effective and efficient solutions outside traditional litigation.',
    keyFeatures: [
      'Arbitration Representation',
      'Mediation Services',
      'Dispute Resolution',
      'ADR Advisory',
      'Settlement Negotiation'
    ],
    benefits: [
      'Cost-effective dispute resolution',
      'Faster than traditional litigation',
      'Confidential proceedings',
      'Expert mediation support'
    ],
    processSteps: [
      {
        title: 'Dispute Analysis',
        description: 'Assessment of dispute and ADR suitability'
      },
      {
        title: 'ADR Process Selection',
        description: 'Choosing appropriate ADR mechanism'
      },
      {
        title: 'Representation',
        description: 'Professional representation in ADR proceedings'
      },
      {
        title: 'Resolution',
        description: 'Achieving mutually acceptable resolution'
      }
    ]
  },
  'documentation': {
    id: 'documentation',
    title: 'Legal Documentation',
    description: 'Professional drafting and review of legal documents',
    fullDescription: 'We draft and review legal notices, contracts and agreements, affidavits and declarations, and legal opinions and compliance documents.',
    keyFeatures: [
      'Contract Drafting',
      'Legal Notices',
      'Compliance Documents',
      'Document Review',
      'Legal Opinions'
    ],
    benefits: [
      'Professionally drafted documents',
      'Legal compliance assured',
      'Clear and enforceable terms',
      'Risk mitigation'
    ],
    processSteps: [
      {
        title: 'Requirement Discussion',
        description: 'Understanding your documentation needs'
      },
      {
        title: 'Drafting',
        description: 'Professional preparation of legal documents'
      },
      {
        title: 'Review & Refinement',
        description: 'Review and revisions as needed'
      },
      {
        title: 'Finalization',
        description: 'Final document delivery and guidance'
      }
    ]
  }
};

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#1a2e2e] mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#c4a574] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-[#c4a574] hover:text-[#b39565] transition-colors mb-12 mt-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-serif">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded shadow-lg"
              >
                <h2 className="text-3xl text-[#1a2e2e] mb-4 font-serif">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded shadow-lg"
              >
                <h2 className="text-3xl text-[#1a2e2e] mb-6 font-serif">Our Process</h2>
                <div className="space-y-6">
                  {service.processSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#c4a574] rounded-full flex items-center justify-center text-white font-serif">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl text-[#1a2e2e] mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded shadow-lg"
              >
                <h2 className="text-3xl text-[#1a2e2e] mb-6 font-serif">Why Choose Us</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#c4a574] flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded shadow-lg sticky top-24"
              >
                <h3 className="text-2xl text-[#1a2e2e] mb-6 font-serif">Key Features</h3>
                <ul className="space-y-3">
                  {service.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c4a574] flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg text-[#1a2e2e] mb-4 font-serif">Ready to Get Started?</h4>
                  <Link 
                    to="/#contact" 
                    className="block w-full bg-[#c4a574] text-[#1a2e2e] px-6 py-3 rounded hover:bg-[#b39565] transition-all text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}