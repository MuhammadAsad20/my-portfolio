// components/ProjectsSection.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://shorturl.at/ipkqH", // Replace with actual image paths
    demoLink: "#", // Replace with the live demo link
    githubLink: "#", // Replace with the GitHub repo link
    tags: ["React", "Tailwind", "FullStack"], // Example tags
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://shorturl.at/BnSg9",
    demoLink: "#",
    githubLink: "#",
    tags: ["Node.js", "Express", "Backend"],
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://shorturl.at/213xh",
    demoLink: "#",
    githubLink: "#",
    tags: ["MongoDB", "Database"],
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-[#674D66] text-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-[#D9A8C7] mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#4A3A4C] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-bold text-[#D9A8C7]">
                {project.title}
              </h4>
              <p className="text-lg text-[#EBD6DC] mb-4">
                {project.description}
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D9A8C7] text-[#4A3A4C] px-4 py-2 rounded-md hover:bg-[#EBD6DC]"
                >
                  View Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EBD6DC] text-[#4A3A4C] px-4 py-2 rounded-md hover:bg-[#D9A8C7]"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-2 text-sm text-[#EBD6DC]">
                {project.tags.map((tag, index) => (
                  <span key={index} className="mr-2">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
