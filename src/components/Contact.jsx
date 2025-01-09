// components/ContactSection.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#4A3A4C]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h3
          className="text-3xl font-bold text-[#D9A8C7] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h3>
        <motion.p
          className="text-lg text-[#EBD6DC] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Feel free to reach out for any inquiries or collaborations. I'm always open to new opportunities!
        </motion.p>

        {/* Email Button */}
        <motion.a
          href="mailto:example@example.com"
          className="px-6 py-3 bg-[#D9A8C7] text-[#674D66] rounded-lg shadow-lg hover:bg-[#EBD6DC] transition-colors duration-300 ease-in-out mb-6 inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send an Email
        </motion.a>

        {/* Contact Form (Improved) */}
        <motion.div
          className="mt-10 p-8 bg-[#674D66] rounded-lg shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-[#EBD6DC] mb-2">Full Name</label>
                <input
                  type="text"
                  className="p-3 rounded-lg border-2 border-[#D9A8C7] bg-[#4A3A4C] text-[#EBD6DC] focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[#EBD6DC] mb-2">Email Address</label>
                <input
                  type="email"
                  className="p-3 rounded-lg border-2 border-[#D9A8C7] bg-[#4A3A4C] text-[#EBD6DC] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-[#EBD6DC] mb-2">Message</label>
              <textarea
                className="p-3 rounded-lg border-2 border-[#D9A8C7] bg-[#4A3A4C] text-[#EBD6DC] focus:outline-none"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="px-8 py-3 bg-[#D9A8C7] text-[#674D66] rounded-lg shadow-lg hover:bg-[#EBD6DC] transition-colors duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
