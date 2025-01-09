// components/SkillsSection.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "MongoDB", level: 85 },
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-20 bg-[#4A3A4C]">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-bold text-[#D9A8C7] mb-12 text-center">
          Skills
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-[#D9A8C7]">
                    {skill.name}
                  </span>
                  <span className="text-lg font-medium text-[#D9A8C7]">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-[#674D66] rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute top-0 left-0 h-full bg-[#EDB6DC] rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
