'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">About Me</h2>
        <p className="text-lg text-text-secondary mb-4">
          I am Francis Fallah Bockarie, an IT Security & Risk professional with experience in vulnerability assessments, incident response, and technical support. I demonstrate strong leadership, communication, and problem-solving skills through cross-functional projects and student-led initiatives.
        </p>
        <p className="text-lg text-text-secondary mb-4">
          I am adept at implementing security frameworks and building secure applications to support enterprise goals. My passion lies in safeguarding digital environments through proactive and scalable strategies that protect organizations from evolving cyber threats.
        </p>
        <p className="text-lg text-text-secondary">
          Currently working as an Audio/Visual Technician & Security Assistant, I lead vendor risk assessments and support data security platform implementations while maintaining corporate conference room systems. I am committed to continuous learning and making a positive impact in the cybersecurity field.
        </p>
      </div>
    </section>
  );
};

export default About; 