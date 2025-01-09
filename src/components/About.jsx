// components/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#4A3A4C]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title with animation */}
        <motion.h3
          className="text-4xl font-extrabold text-[#D9A8C7] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          About Me
        </motion.h3>

        {/* About text with animation */}
        <motion.p
          className="text-lg text-[#EBD6DC] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am a passionate MERN Developer with hands-on experience in building modern, scalable web applications. Using React, Node.js, MongoDB, and Express, I create seamless, responsive, and user-friendly applications. My goal is to solve real-world problems with clean, efficient, and maintainable code. I thrive in collaborative environments, continuously learning and adapting to new technologies.
        </motion.p>

        {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <motion.div
            className="text-center p-6 bg-[#674D66] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4 className="text-xl font-semibold text-[#D9A8C7] mb-3">React</h4>
            <p className="text-[#EBD6DC]">Building responsive, component-driven UI's with React.</p>
          </motion.div>
          
          <motion.div
            className="text-center p-6 bg-[#674D66] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h4 className="text-xl font-semibold text-[#D9A8C7] mb-3">Node.js</h4>
            <p className="text-[#EBD6DC]">Creating back-end services and APIs with Node.js and Express.</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-[#674D66] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h4 className="text-xl font-semibold text-[#D9A8C7] mb-3">MongoDB</h4>
            <p className="text-[#EBD6DC]">Handling databases and building scalable data models with MongoDB.</p>
          </motion.div>

          <motion.div
            className="text-center p-6 bg-[#674D66] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <h4 className="text-xl font-semibold text-[#D9A8C7] mb-3">Tailwind CSS</h4>
            <p className="text-[#EBD6DC]">Styling applications efficiently with Tailwind CSS.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
