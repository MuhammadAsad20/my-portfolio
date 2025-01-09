// components/TestimonialsSection.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 bg-[#674D66]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#D9A8C7] mb-8">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Client 1", "Client 2", "Client 3"].map((client, index) => (
            <motion.div
              key={index}
              className="bg-[#4A3A4C] p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <p className="text-lg italic text-[#EBD6DC]">
                "Amazing work, highly recommended!"
              </p>
              <span className="block mt-4 font-bold text-[#D9A8C7]">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
