import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 [Your Contact Number]'],
      action: 'tel:+91'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@spslawfirm.com', 'contact@spslawfirm.com'],
      action: 'mailto:info@spslawfirm.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Chennai, Tamil Nadu', 'India'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c4a574] uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl text-[#1a2e2e] mt-4 mb-6 font-serif">
            Schedule Your Consultation
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Reach out to us today for a free initial consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f5f5f0] rounded p-8 shadow-lg">
              <h3 className="text-2xl text-[#1a2e2e] mb-6 font-serif">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20 outline-none transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20 outline-none transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20 outline-none transition-all bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
                    Legal Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="litigation">Litigation & Representation</option>
                    <option value="startup">Startup Legal Services</option>
                    <option value="corporate">Corporate & Commercial Law</option>
                    <option value="fcra">FCRA Advisory</option>
                    <option value="ipr">Intellectual Property - Patent</option>
                    <option value="property">Property & Real Estate Law</option>
                    <option value="family">Family & Matrimonial Matters</option>
                    <option value="criminal">Criminal & Bail Matters</option>
                    <option value="arbitration">Arbitration & Mediation</option>
                    <option value="documentation">Legal Documentation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#c4a574] focus:ring-2 focus:ring-[#c4a574]/20 outline-none transition-all resize-none bg-white"
                    placeholder="Tell us about your legal needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c4a574] text-[#1a2e2e] px-8 py-4 rounded hover:bg-[#b39565] transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#f5f5f0] rounded p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#c4a574] rounded flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1a2e2e] mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded p-6 shadow-lg border border-neutral-800">
              <h3 className="text-xl text-white mb-4 font-serif">Office Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#c4a574]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[#c4a574]">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#c4a574]">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <p className="text-[#c4a574] text-sm">
                  Emergency consultations available 24/7 for existing clients
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded overflow-hidden shadow-lg h-64">
              <img
                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjYzMDk4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office Location"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}