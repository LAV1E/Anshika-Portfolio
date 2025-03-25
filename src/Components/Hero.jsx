import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import resume from '../assets/AnshikaBundela\'sResume.pdf';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="text-white pt-32 pb-16 bg-[#0e0c1e] min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full opacity-30 blur-3xl"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -30, 30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Gradient Ring */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full border-[8px] border-transparent"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(128, 0, 128, 0.5), rgba(0, 0, 255, 0.3), rgba(128, 0, 128, 0.5))',
          filter: 'blur(10px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="text-center px-4 z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-purple-400">Anshika</span> 👩‍💻
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-6"
          variants={itemVariants}
        >
          A passionate <span className="text-purple-300 font-medium">Full Stack Developer</span> specializing in modern web technologies
        </motion.p>
        
        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I build responsive, accessible, and performant web applications with clean code and intuitive user experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={itemVariants}
        >
          {/* Hire Me Button - Scrolls to Contact */}
          <Link 
            to="contact" 
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 10,
              }}
              className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 w-full"
            >
              Get In Touch
            </motion.button>
          </Link>
          
          {/* Download Resume Button */}
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 10,
            }}
            href={resume}
            download="AnshikaBundela_Resume.pdf"
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 text-center w-full sm:w-auto"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links or Additional CTA can be added here */}
      </motion.div>

      {/* Optional: Animated Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link 
          to="about" 
          smooth={true} 
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;