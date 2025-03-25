import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate submission delay
    setTimeout(() => {
      const mailtoLink = `mailto:bundelaanshika1233@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSuccessMessage('Message sent successfully!');
      setError('');
      setIsSubmitting(false);

      setTimeout(() => setSuccessMessage(''), 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative bg-[#0e0c1e] text-white py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#a855f7] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#ec4899] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-purple-500 bg-clip-text"
            animate={{
              backgroundPosition: ['0%', '100%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-[#b4b4d8] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon.
          </motion.p>
        </motion.div>

        {/* Contact Container */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3 bg-[#1a1a2e] p-8 rounded-2xl border border-[#2d2d44] shadow-2xl backdrop-blur-sm"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              variants={floatingVariants}
              animate="float"
            >
              <Mail className="text-purple-500" size={28} />
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#a855f7]/10 rounded-lg">
                  <Mail className="text-[#a855f7]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#b4b4d8] text-sm">Email</h4>
                  <p className="font-medium">bundelaanshika1233@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ec4899]/10 rounded-lg">
                  <User className="text-[#ec4899]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#b4b4d8] text-sm">Github</h4>
                  <p className="font-medium">LAV1E</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#3b82f6]/10 rounded-lg">
                  <MessageSquare className="text-[#3b82f6]" size={20} />
                </div>
                <div>
                  <h4 className="text-[#b4b4d8] text-sm">Quick Response</h4>
                  <p className="font-medium">Typically replies within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="lg:w-2/3 bg-[#1a1a2e] p-8 rounded-2xl border border-[#2d2d44] shadow-2xl backdrop-blur-sm"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            {/* Name */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block text-[#d1d5db] mb-3 font-medium flex items-center gap-2">
                <User size={18} className="text-[#a855f7]" />
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-[#16213e] border border-[#2d2d44] rounded-xl outline-none text-white focus:ring-2 focus:ring-[#a855f7] transition-all duration-300 placeholder-[#4b5563]"
                placeholder="Your name"
                whileFocus={{
                  borderColor: "#a855f7",
                  boxShadow: "0 0 0 2px rgba(168, 85, 247, 0.3)"
                }}
              />
            </motion.div>

            {/* Email */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block text-[#d1d5db] mb-3 font-medium flex items-center gap-2">
                <Mail size={18} className="text-[#8b5cf6]" />
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-[#16213e] border border-[#2d2d44] rounded-xl outline-none text-white focus:ring-2 focus:ring-[#8b5cf6] transition-all duration-300 placeholder-[#4b5563]"
                placeholder="your.email@example.com"
                whileFocus={{
                  borderColor: "#8b5cf6",
                  boxShadow: "0 0 0 2px rgba(139, 92, 246, 0.3)"
                }}
              />
            </motion.div>

            {/* Subject */}
            <motion.div className="mb-6" variants={itemVariants}>
              <label className="block text-[#d1d5db] mb-3 font-medium flex items-center gap-2">
                <MessageSquare size={18} className="text-[#3b82f6]" />
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 bg-[#16213e] border border-[#2d2d44] rounded-xl outline-none text-white focus:ring-2 focus:ring-[#3b82f6] transition-all duration-300 placeholder-[#4b5563]"
                placeholder="What's this about?"
                whileFocus={{
                  borderColor: "#3b82f6",
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.3)"
                }}
              />
            </motion.div>

            {/* Message */}
            <motion.div className="mb-8" variants={itemVariants}>
              <label className="block text-[#d1d5db] mb-3 font-medium flex items-center gap-2">
                <MessageSquare size={18} className="text-[#ec4899]" />
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-[#16213e] border border-[#2d2d44] rounded-xl outline-none text-white focus:ring-2 focus:ring-[#ec4899] transition-all duration-300 resize-none placeholder-[#4b5563]"
                rows="5"
                placeholder="Write your message here..."
                whileFocus={{
                  borderColor: "#ec4899",
                  boxShadow: "0 0 0 2px rgba(236, 72, 153, 0.3)"
                }}
              />
            </motion.div>

            {/* Messages */}
            <motion.div className="mb-6" variants={itemVariants}>
              {error && (
                <motion.div 
                  className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 flex items-start gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle className="flex-shrink-0 mt-0.5" size={18} />
                  <span>{error}</span>
                </motion.div>
              )}
              {successMessage && (
                <motion.div 
                  className="p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-300 flex items-start gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle className="flex-shrink-0 mt-0.5" size={18} />
                  <span>{successMessage}</span>
                </motion.div>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg bg-purple-500 hover:bg-purple-400 relative overflow-hidden flex items-center justify-center gap-2 ${
                  isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
          <motion.h2
  className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
  animate={{
    backgroundPosition: ['0%', '100%'],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'linear',
  }}
>
  Let's Create Something Amazing
</motion.h2>

        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Contact;