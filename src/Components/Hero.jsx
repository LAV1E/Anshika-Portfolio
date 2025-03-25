import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Increased for smoother delay
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
        mass: 1, // Reduced mass for softer motion
      },
    },
  };

  return (
    <div className="text-white py-16 bg-[#0e0c1e] min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8, // Slower for a more relaxed feel
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

      {/* Pulsating Gradient Ring */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full border-[8px] border-transparent"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(128, 0, 128, 0.5), rgba(0, 0, 255, 0.3), rgba(128, 0, 128, 0.5))',
          filter: 'blur(10px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10, // Slower rotation for a subtle effect
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Hero Content with Smooth Staggered Animation */}
      <motion.div
        className="text-center px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-purple-400">Anshika</span> 👩‍💻
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-6"
          variants={itemVariants}
        >
          A passionate <span className="text-purple-300">Full Stack Developer</span> who loves crafting clean and scalable web applications.
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-gray-500 mb-8"
          variants={itemVariants}
        >
          From frontend to backend, I bring ideas to life through clean code and creative solutions.
        </motion.p>

        {/* Buttons with Smooth Hover Effects */}
        <motion.div
          className="flex gap-6 justify-center"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 10,
            }}
            className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 10,
            }}
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-full transition duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
