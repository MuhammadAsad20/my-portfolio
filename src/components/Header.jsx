
// components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-transparent transition-all duration-300 ease-in-out">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <motion.h1
        className="text-2xl font-bold text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Muhammad Asad
      </motion.h1>
      <nav>
        <ul className="flex space-x-8">
          {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((section) => (
            <motion.li
              key={section}
              className="text-lg text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <a href={`#${section.toLowerCase()}`}>{section}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
