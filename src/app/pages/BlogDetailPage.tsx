import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogContent {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      points?: string[];
    }[];
    conclusion: string;
  };
}

const blogContents: { [key: string]: BlogContent } = {
  'startup-legal-mistakes': {
    id: 'startup-legal-mistakes',
    title: 'Top 10 Legal Mistakes Startups Make and How to Avoid Them',
    excerpt: 'Starting a business is exciting, but legal missteps can be costly.',
    author: 'SPS Legal Team',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Startup Law',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: {
      intro: 'Starting a business is an exciting journey filled with opportunities and challenges. However, many startups make critical legal mistakes that can jeopardize their growth and success. Understanding these common pitfalls and how to avoid them is essential for building a strong legal foundation for your business.',
      sections: [
        {
          heading: '1. Choosing the Wrong Business Structure',
          content: 'Many startups rush into selecting a business structure without fully understanding the implications. The choice between a Private Limited Company, LLP, or Partnership affects taxation, liability, and future funding opportunities.',
          points: [
            'Evaluate your business needs and growth plans',
            'Consider liability protection for founders',
            'Understand tax implications of different structures',
            'Consult with legal and financial advisors'
          ]
        },
        {
          heading: '2. Neglecting Founders\' Agreements',
          content: 'A comprehensive founders\' agreement is crucial for defining roles, responsibilities, equity distribution, and exit mechanisms. Without one, disputes can arise that threaten the business.',
          points: [
            'Define equity split and vesting schedules',
            'Establish decision-making processes',
            'Include dispute resolution mechanisms',
            'Plan for founder exits and buyout clauses'
          ]
        },
        {
          heading: '3. Ignoring Intellectual Property Protection',
          content: 'Your intellectual property—whether it\'s a unique product, technology, or brand—is often your most valuable asset. Failing to protect it can result in costly legal battles or loss of competitive advantage.',
          points: [
            'File for patents, trademarks, and copyrights early',
            'Implement IP assignment agreements with employees',
            'Use non-disclosure agreements (NDAs) with third parties',
            'Conduct IP audits regularly'
          ]
        },
        {
          heading: '4. Poor Contract Management',
          content: 'Verbal agreements and poorly drafted contracts can lead to misunderstandings and disputes. Every business relationship should be formalized with clear, legally binding agreements.',
          points: [
            'Use written contracts for all business relationships',
            'Clearly define terms, deliverables, and payment schedules',
            'Include termination and dispute resolution clauses',
            'Have contracts reviewed by legal counsel'
          ]
        }
      ],
      conclusion: 'Avoiding these common legal mistakes can save your startup significant time, money, and stress. Early investment in proper legal infrastructure pays dividends as your business grows. Consult with experienced startup attorneys to ensure you\'re building on a solid legal foundation.'
    }
  },
  'understanding-fcra': {
    id: 'understanding-fcra',
    title: 'Understanding FCRA: A Complete Guide for NGOs and Trusts',
    excerpt: 'The Foreign Contribution Regulation Act (FCRA) is crucial for NGOs receiving foreign funding.',
    author: 'SPS Legal Team',
    date: 'December 10, 2024',
    readTime: '10 min read',
    category: 'FCRA & Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: {
      intro: 'The Foreign Contribution (Regulation) Act, 2010 (FCRA) regulates the acceptance and utilization of foreign contributions by individuals, associations, and companies in India. For NGOs and trusts that receive or plan to receive foreign funding, understanding FCRA compliance is critical.',
      sections: [
        {
          heading: 'What is FCRA?',
          content: 'FCRA is a legislation enacted to regulate foreign donations and ensure that such contributions do not adversely affect national interest. The Act requires organizations receiving foreign contributions to register with the Ministry of Home Affairs.',
          points: [
            'Regulates foreign contributions to organizations in India',
            'Administered by the Ministry of Home Affairs',
            'Applies to associations, NGOs, trusts, and individuals',
            'Aims to ensure transparency in foreign funding'
          ]
        },
        {
          heading: 'FCRA Registration Process',
          content: 'Organizations must obtain FCRA registration before receiving foreign contributions. The registration process involves detailed documentation and compliance with eligibility criteria.',
          points: [
            'Organization must be registered for at least 3 years',
            'Must have spent at least ₹15 lakhs on core activities in recent 3 years',
            'Submit detailed application with supporting documents',
            'Registration is valid for 5 years and must be renewed'
          ]
        },
        {
          heading: 'Compliance Requirements',
          content: 'FCRA-registered organizations must maintain strict compliance with annual filing requirements, maintain separate FCRA bank accounts, and use funds only for stated purposes.',
          points: [
            'File annual returns (FC-4) by December 31st each year',
            'Maintain separate FCRA bank account in State Bank of India',
            'Keep detailed records of receipts and utilization',
            'Submit intimation of foreign contribution receipt within specified time'
          ]
        },
        {
          heading: 'Recent Amendments',
          content: 'The FCRA (Amendment) Act, 2020 introduced significant changes to the regulatory framework, making compliance more stringent.',
          points: [
            'Mandatory use of single FCRA account in SBI, Delhi',
            'Restrictions on transfer of foreign contributions between NGOs',
            'Reduction in administrative expenses cap to 20%',
            'Prohibition on sub-granting foreign contributions'
          ]
        }
      ],
      conclusion: 'FCRA compliance is complex and requires careful attention to regulatory requirements. Non-compliance can result in serious consequences, including cancellation of registration and prohibition from receiving foreign funds. NGOs should work with experienced FCRA advisors to ensure full compliance and avoid regulatory issues.'
    }
  },
  'property-title-verification': {
    id: 'property-title-verification',
    title: 'Property Title Verification: Why It\'s Critical Before Purchase',
    excerpt: 'Buying property is a major investment. Learn why thorough title verification is essential.',
    author: 'SPS Legal Team',
    date: 'December 5, 2024',
    readTime: '7 min read',
    category: 'Real Estate Law',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    content: {
      intro: 'Property purchase is one of the most significant financial decisions you\'ll make. Before committing to a property transaction, thorough title verification is absolutely essential to ensure you\'re acquiring clear, marketable title free from encumbrances and legal disputes.',
      sections: [
        {
          heading: 'What is Title Verification?',
          content: 'Title verification is the process of examining the property\'s ownership history and legal status to confirm that the seller has clear, marketable title and the legal right to sell the property.',
          points: [
            'Examination of title deeds and ownership documents',
            'Verification of chain of ownership for past 30+ years',
            'Search for encumbrances, liens, and legal disputes',
            'Confirmation of property tax and dues payment'
          ]
        },
        {
          heading: 'Why Title Verification is Critical',
          content: 'Without proper title verification, you risk purchasing property with hidden legal issues that could result in financial loss, legal disputes, or even loss of the property itself.',
          points: [
            'Protect against fraudulent sales and forged documents',
            'Identify pending litigation or property disputes',
            'Discover undisclosed encumbrances or mortgages',
            'Ensure compliance with land use regulations'
          ]
        },
        {
          heading: 'The Title Verification Process',
          content: 'A comprehensive title verification involves multiple steps and examination of various documents and records.',
          points: [
            'Review of sale deed and previous title documents',
            'Encumbrance certificate verification for 13-30 years',
            'Property tax receipt and dues verification',
            'Khata certificate and property card examination',
            'Search for pending litigations and disputes',
            'Verification of approved building plans and permits'
          ]
        },
        {
          heading: 'Red Flags to Watch For',
          content: 'Certain warning signs during title verification should raise immediate concerns and may indicate serious legal issues.',
          points: [
            'Gaps in the chain of ownership',
            'Multiple sales of the same property',
            'Pending or past litigation involving the property',
            'Discrepancies in property measurements or boundaries',
            'Outstanding property taxes or municipal dues',
            'Unauthorized constructions or deviations from approved plans'
          ]
        }
      ],
      conclusion: 'Never skip or rush through property title verification. The relatively small investment in professional legal due diligence can save you from devastating financial and legal consequences. Always engage experienced property lawyers to conduct thorough title verification before finalizing any property transaction.'
    }
  }
};

export function BlogDetailPage() {
  const { blogId } = useParams<{ blogId: string }>();
  
  const blog = blogId ? blogContents[blogId] : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#1a2e2e] mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-[#c4a574] hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Hero Image with Title Overlay */}
      <div className="relative h-96 overflow-hidden mt-20">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#c4a574] text-black px-3 py-1 rounded text-xs uppercase tracking-wide mb-4">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl text-white mb-4 font-serif">{blog.title}</h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded shadow-lg"
              >
                {/* Introduction */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {blog.content.intro}
                </p>

                {/* Sections */}
                {blog.content.sections.map((section, index) => (
                  <div key={index} className="mb-10">
                    <h2 className="text-2xl md:text-3xl text-[#1a2e2e] mb-4 font-serif">
                      {section.heading}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.content}
                    </p>
                    {section.points && (
                      <ul className="space-y-3">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#c4a574] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="bg-[#f5f5f0] p-6 rounded-lg border-l-4 border-[#c4a574]">
                  <h3 className="text-xl text-[#1a2e2e] mb-3 font-serif">Conclusion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {blog.content.conclusion}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 rounded text-center">
                    <h3 className="text-2xl text-white mb-4 font-serif">Need Legal Assistance?</h3>
                    <p className="text-gray-300 mb-6">
                      Our experienced legal team is ready to help with your legal needs
                    </p>
                    <Link
                      to="/#contact"
                      className="inline-block bg-[#c4a574] text-black px-8 py-3 rounded hover:bg-[#b39565] transition-all"
                    >
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Share */}
                <div className="bg-white p-6 rounded shadow-lg">
                  <h3 className="text-lg text-[#1a2e2e] mb-4 font-serif flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#f5f5f0] rounded-full flex items-center justify-center hover:bg-[#c4a574] transition-colors group"
                    >
                      <Facebook className="w-5 h-5 text-gray-600 group-hover:text-black" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#f5f5f0] rounded-full flex items-center justify-center hover:bg-[#c4a574] transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 group-hover:text-black" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#f5f5f0] rounded-full flex items-center justify-center hover:bg-[#c4a574] transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-black" />
                    </a>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded shadow-lg">
                  <h3 className="text-lg text-[#1a2e2e] mb-4 font-serif">Categories</h3>
                  <div className="space-y-2">
                    {['Startup Law', 'FCRA & Compliance', 'Real Estate Law', 'Intellectual Property', 'Corporate Law', 'Family Law'].map((category) => (
                      <div key={category} className="text-sm text-gray-600 hover:text-[#c4a574] transition-colors cursor-pointer">
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}