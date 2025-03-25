import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Rocket, Sparkles, Cpu, Database } from 'lucide-react';

const About = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const techStack = [
    { name: "React", color: "text-blue-400" },
    { name: "Next.js", color: "text-white" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "Tailwind", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Java", color: "text-red-500" },
    { name: "GraphQL", color: "text-pink-500" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "PostgreSQL", color: "text-blue-300" },
    { name: "Docker", color: "text-blue-200" },
    { name: "Kubernetes", color: "text-blue-500" },
    { name: "AWS", color: "text-orange-400" },
  ];

  // Duplicate the array to create seamless looping
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="relative bg-gradient-to-br from-[#0a0a12] to-[#1a1a2e] text-white py-16 md:py-28 overflow-hidden">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/30"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 50]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header with floating effect */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 text-center mb-4">
              About Me
            </h2>
            <Sparkles className="absolute -top-6 -right-6 text-yellow-400 animate-spin" size={24} />
          </motion.div>
        </motion.div>

        {/* Responsive layout for profile and description */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 mb-8 md:mb-16 w-full px-4 sm:px-6">
  {/* Profile card with responsive sizing */}
  <motion.div
    initial={{ opacity: 0, x: -100, rotateY: 90 }}
    animate={{ opacity: 1, x: 0, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-purple-500/30 mb-6 lg:mb-0 flex-shrink-0"
    whileHover={{ y: -10 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
      <Cpu size={48} className="text-white/90" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 sm:p-4 backdrop-blur-md">
      <h3 className="text-lg sm:text-xl font-bold text-white">Anshika</h3>
      <p className="text-purple-300 text-xs sm:text-sm">Frontend Developer</p>
    </div>
  </motion.div>

  {/* Optimized text paragraph for all devices */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
    className="max-w-full lg:max-w-2xl w-full"
  >
    <div className="relative">
      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-snug sm:leading-relaxed">
        Hey there! I'm <span className="text-purple-300 font-semibold">Anshika</span>, a passionate{' '}
        <span className="text-purple-400">Frontend Developer</span> at{' '}
        <span className="text-purple-400">Mendzone</span> with expertise in modern web technologies. 
        I specialize in creating immersive digital experiences that blend beautiful design with 
        cutting-edge functionality.
      </p>
    </div>

    {/* Infinite Scrolling Tech Stack */}
    <motion.div 
      className="mt-4 md:mt-6 overflow-x-hidden w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
    >
      <motion.div
        className="flex gap-2 w-max"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedTechStack.map((tech, i) => (
          <motion.span
            key={`${tech.name}-${i}`}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${tech.color} font-medium flex-shrink-0 text-xs sm:text-sm md:text-base`}
            whileHover={{ y: -2, scale: 1.05 }}
          >
            {tech.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  </motion.div>
</div>


        {/* Animated Stats Cards - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Experience Card */}
          <motion.div
            className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-purple-500/20 rounded-lg">
                <Code size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Experience</h3>
            </div>
            <p className="text-4xl md:text-5xl font-extrabold mb-1 md:mb-2">1</p>
            <p className="text-gray-400 text-sm md:text-base">Years in Frontend Development</p>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </motion.div>

          {/* Projects Card */}
          <motion.div
            className="relative bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-pink-500/20 rounded-lg">
                <Laptop size={24} className="text-pink-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Projects</h3>
            </div>
            <p className="text-4xl md:text-5xl font-extrabold mb-1 md:mb-2">20+</p>
            <p className="text-gray-400 text-sm md:text-base"> Projects </p>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.7 }}
            />
          </motion.div>

          {/* Specialization Card */}
          <motion.div
            className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="p-2 md:p-3 bg-cyan-500/20 rounded-lg">
                <Database size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Full Stack</h3>
            </div>
            <p className="text-4xl md:text-5xl font-extrabold mb-1 md:mb-2"></p>
            <p className="text-gray-400 text-sm md:text-base">Full Stack </p>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.9 }}
            />
          </motion.div>
        </div>

        {/* Animated Quote - Responsive */}
        <motion.div
          className="mt-16 md:mt-20 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 max-w-3xl mx-auto relative">
              <Rocket className="hidden md:block absolute -left-10 top-1/2 transform -translate-y-1/2 text-purple-400 animate-float" />
              "I don't just write code, I craft digital experiences that users love."
              <Sparkles className="hidden md:block absolute -right-10 top-1/2 transform -translate-y-1/2 text-yellow-400 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Gradient Effects */}
        <div className="absolute top-1/4 left-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-500/20 rounded-full blur-3xl animate-float-slow-delay"></div>
      </div>
    </div>
  );
};

export default About;