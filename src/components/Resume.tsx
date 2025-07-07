'use client';

import React, { useState } from 'react';
import ClientMotion from './ClientMotion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { resumeData } from '../data/resume';

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Resume</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Download my resume or explore my qualifications below
          </p>
        </ClientMotion>

        {/* Contact Information */}
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-6 mb-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">{resumeData.contact.name}</h3>
            <p className="text-text-secondary mb-4">{resumeData.contact.location}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <FaEnvelope />
                {resumeData.contact.email}
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <FaPhone />
                {resumeData.contact.phone}
              </a>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </ClientMotion>

        {/* Download Button */}
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaDownload />
            Download PDF Resume
          </a>
        </ClientMotion>

        {/* Professional Summary */}
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-accent mb-4">Professional Summary</h3>
          <p className="text-text-secondary leading-relaxed">{resumeData.summary}</p>
        </ClientMotion>

        {/* Section Navigation */}
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-accent text-primary'
                  : 'bg-secondary text-text-secondary hover:text-accent'
              }`}
            >
              {section.label}
            </button>
          ))}
        </ClientMotion>

        {/* Content Sections */}
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-6"
        >
          {activeSection === 'experience' && (
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">Professional Experience</h3>
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-text-primary">{job.title}</h4>
                    <p className="text-accent font-medium">{job.company}</p>
                    <p className="text-text-secondary text-sm mb-2">{job.period}</p>
                    <p className="text-text-secondary mb-3">{job.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-lg font-bold text-text-primary mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary text-accent rounded-full text-sm border border-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">Education</h3>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="text-lg font-bold text-text-primary">{resumeData.education.degree}</h4>
                <p className="text-accent font-medium">{resumeData.education.school}</p>
                <p className="text-text-secondary">{resumeData.education.graduation} • GPA: {resumeData.education.gpa}</p>
                <div className="mt-4">
                  <h5 className="font-bold text-text-primary mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-primary text-accent rounded-full text-sm border border-accent"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">Projects</h3>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-text-primary">{project.title}</h4>
                    <p className="text-text-secondary mb-3">{project.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-text-secondary text-sm">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'certifications' && (
            <div>
              <h3 className="text-xl font-bold text-accent mb-6">Certifications</h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-primary rounded-lg">
                    <span className="text-text-primary font-medium">{cert.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      cert.status === 'In Progress' 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ClientMotion>
      </div>
    </section>
  );
};

export default Resume; 