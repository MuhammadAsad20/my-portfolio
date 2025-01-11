import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-transparent transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Muhammad Asad
          </motion.h1>

          <button
            className="lg:hidden text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300 focus:outline-none"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>

          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-16 right-0 bg-[#4A3A4C] text-center w-full lg:static lg:flex lg:items-center lg:w-auto lg:space-x-8 lg:bg-transparent`}
          >
            <ul className="lg:flex lg:space-x-8">
              {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((section) => (
                <motion.li
                  key={section}
                  className="text-lg text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300 py-2 lg:py-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <a
                    href={`#${section.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Gradient Animation Line */}
      <div className="relative h-1 overflow-hidden bg-transparent">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-[#EBD6DC] via-[#674D66] to-[#674D66]"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </>
  );
};

export default Header;
