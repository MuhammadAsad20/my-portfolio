// App.js
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsSection from './components/ProjectsSection';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#674D66] text-[#EBD6DC] min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
