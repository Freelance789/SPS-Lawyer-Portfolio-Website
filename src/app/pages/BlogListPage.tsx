import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

/**
 * BlogPost interface
 * Defines the structure for blog post metadata
 */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

/**
 * Blog posts data
 * Comprehensive collection of legal insights and guides
 */
const blogPosts: BlogPost[] = [
  {
    id: 'startup-legal-mistakes',
    title: 'Top 10 Legal Mistakes Startups Make and How to Avoid Them',
    excerpt: 'Starting a business is exciting, but legal missteps can be costly. Learn about the most common legal mistakes startups make and how proper legal guidance can help you avoid them.',
    author: 'SPS Legal Team',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Startup Law',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'understanding-fcra',
    title: 'Understanding FCRA: A Complete Guide for NGOs and Trusts',
    excerpt: 'The Foreign Contribution Regulation Act (FCRA) is crucial for NGOs receiving foreign funding. This comprehensive guide covers registration, compliance, and recent regulatory changes.',
    author: 'SPS Legal Team',
    date: 'December 10, 2024',
    readTime: '10 min read',
    category: 'FCRA & Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'property-title-verification',
    title: 'Property Title Verification: Why It\'s Critical Before Purchase',
    excerpt: 'Buying property is a major investment. Learn why thorough title verification is essential and what red flags to watch for during property due diligence.',
    author: 'SPS Legal Team',
    date: 'December 5, 2024',
    readTime: '7 min read',
    category: 'Real Estate Law',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'intellectual-property-startups',
    title: 'Protecting Your Intellectual Property: A Startup\'s Guide',
    excerpt: 'Your ideas and innovations are valuable assets. Discover how startups can protect their intellectual property through patents, trademarks, and strategic IP planning.',
    author: 'SPS Legal Team',
    date: 'November 28, 2024',
    readTime: '9 min read',
    category: 'Intellectual Property',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'corporate-compliance-checklist',
    title: 'Annual Corporate Compliance Checklist for Indian Companies',
    excerpt: 'Stay compliant with Indian corporate laws. This comprehensive checklist covers all annual compliance requirements for private limited companies and LLPs.',
    author: 'SPS Legal Team',
    date: 'November 22, 2024',
    readTime: '6 min read',
    category: 'Corporate Law',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'family-law-divorce-process',
    title: 'Navigating Divorce in India: Understanding the Legal Process',
    excerpt: 'Divorce can be emotionally challenging. This guide explains the legal process, types of divorce, custody considerations, and what to expect during proceedings.',
    author: 'SPS Legal Team',
    date: 'November 15, 2024',
    readTime: '11 min read',
    category: 'Family Law',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'arbitration-vs-litigation',
    title: 'Arbitration vs. Litigation: Choosing the Right Path for Dispute Resolution',
    excerpt: 'Disputes are inevitable in business. Learn the key differences between arbitration and litigation, and when each approach is most effective.',
    author: 'SPS Legal Team',
    date: 'November 8, 2024',
    readTime: '8 min read',
    category: 'Dispute Resolution',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'criminal-bail-rights',
    title: 'Understanding Your Rights: Bail in Criminal Cases',
    excerpt: 'Being accused of a crime can be overwhelming. Know your rights regarding bail applications, the bail process, and what factors courts consider.',
    author: 'SPS Legal Team',
    date: 'November 1, 2024',
    readTime: '7 min read',
    category: 'Criminal Law',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'contract-drafting-tips',
    title: 'Essential Contract Drafting Tips for Business Owners',
    excerpt: 'Well-drafted contracts protect your business interests. Learn the essential elements of effective contracts and common pitfalls to avoid.',
    author: 'SPS Legal Team',
    date: 'October 25, 2024',
    readTime: '9 min read',
    category: 'Commercial Law',
    image: 'https://images.unsplash.com/photo-1554224311-beee460201f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export function BlogListPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#c4a574] uppercase tracking-wider text-sm">Legal Insights & Updates</span>
            <h1 className="text-5xl md:text-6xl text-white mt-4 mb-6 font-serif">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert legal insights, guides, and updates from the SPS Law Firm team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={index === 0 ? { opacity: 0 } : false}
                whileInView={index === 0 ? { opacity: 1 } : false}
                transition={index === 0 ? { duration: 0.8 } : undefined}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#c4a574] text-black px-3 py-1 rounded text-xs uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl text-[#1a2e2e] mb-3 font-serif group-hover:text-[#c4a574] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#c4a574] hover:text-[#b39565] transition-colors text-sm group-hover:gap-3 duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-serif">
            Need Legal Assistance?
          </h2>
          <p className="text-gray-300 mb-8">
            Our experienced legal team is here to help with all your legal needs
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-[#c4a574] text-black px-8 py-3 rounded hover:bg-[#b39565] transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}