'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 matrix-bg overflow-hidden">
      <div className="z-10 flex flex-col items-center">
        <div className="w-48 h-48 rounded-full border-8 border-accent shadow-lg overflow-hidden mb-6 bg-secondary/30 flex items-center justify-center">
          <img
            src="/profile.jpg"
            alt="Profile picture of Francis Fallah Bockarie"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-lg sm:text-xl text-accent font-mono mb-1">Hello, I&apos;m <span className="text-accent font-bold">Francis Bockarie</span></h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">IT Security & Risk Professional</h2>
        <p className="text-text-secondary mb-6 max-w-xl text-center">
          Freelancer, Cybersecurity & Risk Analyst, and Technical Support Specialist with a passion for safeguarding digital environments and building secure, scalable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-accent text-primary font-bold shadow hover:bg-accent/80 transition-colors text-lg"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-primary font-bold shadow hover:from-yellow-300 hover:to-orange-400 transition-colors text-lg"
          >
            Get Resume
          </a>
        </div>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/francis-bockarie-b6080b197" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors"><FaLinkedin size={28} /></a>
          <a href="https://github.com/francisbockarie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors"><FaGithub size={28} /></a>
          <a href="mailto:francisbock20@gmail.com" className="text-accent hover:text-white transition-colors"><FaEnvelope size={28} /></a>
        </div>
      </div>
      {/* Wavy SVG background at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1a2233" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,197.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </section>
  );
};

export default Hero; 