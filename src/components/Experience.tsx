'use client';

import React from 'react';
import ClientMotion from './ClientMotion';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Audio/Visual Technician & Security Assistant',
      company: 'The Institute\'s Knowledge Company',
      period: 'July 2024 - Present',
      description: 'Maintaining corporate conference room systems and leading vendor risk assessments while supporting data security platform implementation. Customized over 70% of third-party risk questionnaire in OneTrust.',
      technologies: ['OneTrust', 'Varonis', 'AV Systems', 'Risk Assessment', 'Data Security']
    },
    {
      title: 'IT Intern – Infrastructure & Security',
      company: 'United States Liability Insurance (USLI)',
      period: 'March 2023 - May 2024',
      description: 'Conducted internal threat analysis and provided technical support for over 200 employees while researching cybersecurity trends to strengthen IT infrastructure.',
      technologies: ['Threat Analysis', 'Technical Support', 'Cybersecurity', 'Infrastructure', 'Compliance']
    },
    {
      title: 'Engineering Technician (Contractor)',
      company: 'Communication Test Design, Inc. (CTDI)',
      period: 'June 2024 - July 2024',
      description: 'Performed diagnostics and QA testing on telecommunications hardware while supporting engineers with configuration and repairs. Assisted in reducing testing cycle time by 10%.',
      technologies: ['Hardware Testing', 'QA Testing', 'Telecommunications', 'Technical Documentation']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            My work experience in cybersecurity, IT infrastructure, and technical support
          </p>
        </ClientMotion>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ClientMotion
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/50 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-mono text-accent">{experience.title}</h3>
                  <p className="text-text-secondary">{experience.company}</p>
                </div>
                <p className="text-text-secondary mt-2 md:mt-0">{experience.period}</p>
              </div>
              <p className="text-text-secondary mb-4">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <ClientMotion
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  </ClientMotion>
                ))}
              </div>
            </ClientMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 