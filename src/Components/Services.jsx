import React from 'react';
import { Code, Laptop, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <section id="services" className="relative bg-[#0e0c1e] text-white pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          What I Offer
        </motion.h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <motion.div
            className="group p-6 bg-[#1c1c32] rounded-xl border border-[#3b3b5c] hover:border-[#a855f7] shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-5">
              <Code className="w-14 h-14 text-[#ec4899] transition-transform duration-300 group-hover:rotate-12" />
              <div>
                <h3 className="text-2xl font-bold mb-1">Frontend Development</h3>
                <p className="text-gray-400">
                  Building responsive and modern user interfaces using React.js, Next.js, and Tailwind CSS.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="group p-6 bg-[#1c1c32] rounded-xl border border-[#3b3b5c] hover:border-[#8b5cf6] shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-5">
              <Laptop className="w-14 h-14 text-[#8b5cf6] transition-transform duration-300 group-hover:rotate-12" />
              <div>
                <h3 className="text-2xl font-bold mb-1">Backend Development</h3>
                <p className="text-gray-400">
                  Developing scalable backend systems using Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="group p-6 bg-[#1c1c32] rounded-xl border border-[#3b3b5c] hover:border-[#3b82f6] shadow-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-5">
              <Users className="w-14 h-14 text-[#3b82f6] transition-transform duration-300 group-hover:rotate-12" />
              <div>
                <h3 className="text-2xl font-bold mb-1">API Development</h3>
                <p className="text-gray-400">
                  Creating RESTful APIs and connecting frontend with backend using Node.js and Express.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Get Started With Me
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Services;