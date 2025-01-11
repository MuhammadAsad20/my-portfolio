// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#D9A8C7] via-[#674D66] to-[#4A3A4C] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Horizontal movement and rotation animation on the image */}
        <motion.img
          src="https://shorturl.at/jBfqE"
          alt="Muhammad Asad"
          className="w-48 h-48 rounded-full mb-4 border-4 border-[#EBD6DC] shadow-lg sm:ml-0 ml-auto mr-auto" // Mobile-specific centering
          animate={{
            rotate: [0, 10, -10, 10, 0], // Rotation effect
          }}
          transition={{
            duration: 20, // Duration for one full cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth in and out transitions
          }}
        />
        <h2 className="text-5xl font-extrabold mb-4 text-[#EBD6DC] tracking-wide">
          Hello, I'm Muhammad Asad
        </h2>
        <p className="text-xl mb-6 text-[#EBD6DC]">
          MERN Developer | React | Tailwind | Next.js | Node.js
        </p>
        <motion.a
          href="#projects"
          className="px-8 py-3 bg-[#EBD6DC] text-[#674D66] rounded-lg shadow-xl hover:bg-[#D9A8C7] transition-colors duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
