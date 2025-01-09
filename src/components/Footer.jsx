
// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className="bg-[#4A3A4C] text-[#EBD6DC] py-6 border-t border-[#D9A8C7]">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-lg">© 2025 Muhammad Asad. All Rights Reserved.</p>
    <div className="flex justify-center mt-4 space-x-6">
      {["facebook-f", "twitter", "linkedin-in"].map((icon, index) => (
        <motion.a
          key={index}
          href="#"
          className="text-[#D9A8C7] hover:text-[#EBD6DC] transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <i className={`fab fa-${icon}`} />
        </motion.a>
      ))}
    </div>
  </div>
</footer>

  );
};

export default Footer;
