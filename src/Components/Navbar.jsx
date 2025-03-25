import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import resume from '../assets/AnshikaBundela\'sResume.pdf';
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Service' },
    { id: 3, name: 'Work' },
    { id: 4, name: 'Contact' }
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#0a0815]">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-6"
      >
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">Anshika's</span>
          <span className="text-purple-500">Portfolio</span>
        </div>

        {/* Navigation Items */}
        <div>
          <ul className="cursor-pointer hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-sm text-white">
            {items.map(({ id, name }) => (
              <li key={id} className="hover:text-purple-500 transition duration-200">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Download Resume Button */}
        <a
          className="md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
            href={resume}
          download="AnshikaBundela'sResume.pdf"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="sticky top-0 z-50 bg-black md:hidden flex justify-between items-center py-4 px-4">
        {/* Overlay */}
        {menu && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setMenu(false)}
          />
        )}

        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2 z-20">
          <span className="text-white">Anshika's</span>
          <span className="text-purple-500">Portfolio</span>
        </div>

        {/* Menu Button */}
        <div 
          onClick={() => setMenu(prev => !prev)} 
          className="z-30 cursor-pointer"
        >
          {menu ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <IoCloseSharp size={30} className="text-white hover:scale-110 transition duration-200" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AiOutlineMenu size={30} className="text-white hover:scale-110 transition duration-200" />
            </motion.div>
          )}
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menu ? 'open' : 'closed'}
          variants={{
            open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
            closed: { x: '-100%', opacity: 0, transition: { duration: 0.3 } },
          }}
          className="bg-white w-4/5 h-screen fixed top-0 left-0 z-20 shadow-xl rounded-r-lg"
        >
          <div className="px-7 py-6">
            <ul className="space-y-6 text-lg text-black">
              {items.map(({ id, name }) => (
                <motion.li
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * id, duration: 0.2 }}
                  className="hover:text-purple-500 transition duration-200 cursor-pointer"
                >
                  {name}
                </motion.li>
              ))}
            </ul>

            {/* Resume Button */}
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-6 inline-block text-lg bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
              href={resume}
          download="AnshikaBundela'sResume.pdf"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
