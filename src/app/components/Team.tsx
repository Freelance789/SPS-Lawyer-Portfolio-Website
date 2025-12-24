import { motion } from 'motion/react';
import { Linkedin, Mail, Award } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'T.M. Shiva Kumar, B.A., LL.B.',
      role: 'Advocate and Legal Consultant',
      specialization: 'Startup, Corporate, Educational Institution & FCRA Advisory',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      bio: 'Seasoned advocate with over a decade of experience practicing law across India since 2011',
      achievements: ['10+ Years Experience', 'Madras High Court', 'Corporate & FCRA Specialist']
    },
    {
      name: 'Priya Menon, B.Com., LL.B.',
      role: 'Senior Associate',
      specialization: 'Corporate Law & Contract Management',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Specialized in corporate compliance, commercial contracts, and business advisory with 8 years of experience',
      achievements: ['8+ Years Experience', 'Corporate Law Expert', 'Contract Specialist']
    },
    {
      name: 'Pravin, B.A., LL.M.',
      role: 'Associate Attorney',
      specialization: 'Litigation & Property Law',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Expert in civil litigation, property disputes, and real estate transactions with strong courtroom presence',
      achievements: ['6+ Years Experience', 'Litigation Expert', 'Property Law Specialist']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative">
      {/* Textured Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-wider text-sm">Our Legal Team</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4 mb-6 font-serif">
            Meet Our Expert Attorneys
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our distinguished team of legal professionals brings decades of combined experience 
            and a passion for achieving justice.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#2a3e3e]/50 backdrop-blur-sm rounded overflow-hidden border border-[#3a4e4e] hover:border-[#c4a574]/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e2e] via-[#1a2e2e]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    
                    {/* Social Links - Show on Hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 bg-[#c4a574] rounded-full flex items-center justify-center hover:bg-[#b39565] transition-colors">
                        <Linkedin className="w-5 h-5 text-[#1a2e2e]" />
                      </button>
                      <button className="w-10 h-10 bg-[#c4a574] rounded-full flex items-center justify-center hover:bg-[#b39565] transition-colors">
                        <Mail className="w-5 h-5 text-[#1a2e2e]" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl text-white mb-1 font-serif">{member.name}</h3>
                    <div className="text-[#c4a574] mb-2">{member.role}</div>
                    <div className="text-gray-400 text-sm mb-4">{member.specialization}</div>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <Award className="w-3 h-3 text-[#c4a574]" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Want to work with our talented team? We're always looking for exceptional legal professionals.
          </p>
          <button className="border-2 border-[#c4a574] text-[#c4a574] px-8 py-3 rounded hover:bg-[#c4a574] hover:text-[#1a2e2e] transition-all">
            View Career Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  );
}