'use client';

import React from 'react';
import ClientMotion from './ClientMotion';

interface Skill {
  name: string;
  years: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Security & Risk
    { name: 'Vulnerability Assessment', years: 4, category: 'Security & Risk' },
    { name: 'Risk Analysis', years: 4, category: 'Security & Risk' },
    { name: 'Incident Response', years: 2, category: 'Security & Risk' },
    { name: 'Compliance', years: 3, category: 'Security & Risk' },
    { name: 'Third-party Risk Management', years: 3, category: 'Security & Risk' },
    { name: 'Project Management', years: 3, category: 'Security & Risk' },
    { name: 'IST Integration', years: 4, category: 'Security & Risk' },
    { name: 'Threat Analysis', years: 2, category: 'Security & Risk' },
    { name: 'Security Assessment', years: 3, category: 'Security & Risk' },
    { name: 'Security Awareness', years: 2, category: 'Security & Risk' },

    // Tools
    { name: 'OneTrust', years: 2, category: 'Tools' },
    { name: 'Varonis', years: 2, category: 'Tools' },
    { name: 'Wireshark', years: 2, category: 'Tools' },
    { name: 'MySQL', years: 2, category: 'Tools' },
    { name: 'Jira', years: 2, category: 'Tools' },
    { name: 'Active Directory', years: 2, category: 'Tools' },
    { name: 'System Patching', years: 2, category: 'Tools' },

    // Programming
    { name: 'Java', years: 4, category: 'Programming' },
    { name: 'Python', years: 2, category: 'Programming' },
    { name: 'HTML', years: 2, category: 'Programming' },
    { name: 'CSS', years: 2, category: 'Programming' },
    { name: 'JavaScript', years: 2, category: 'Programming' },
    { name: 'Command Line (CMD)', years: 1, category: 'Programming' },
    { name: 'Network Analysis', years: 2, category: 'Programming' },

    // Other
    { name: 'Microsoft Office Suite', years: 7, category: 'Other' },
    { name: 'Technical Documentation', years: 4, category: 'Other' }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  // Calculate max years for percentage calculation
  const maxYears = Math.max(...skills.map(skill => skill.years));

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            My technical skills and tools I work with in cybersecurity and IT infrastructure
          </p>
        </ClientMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <ClientMotion
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-mono text-accent mb-6">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <ClientMotion
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary">{skill.name}</span>
                        <span className="text-text-secondary">{skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
                      </div>
                      <div className="h-2 bg-primary/30 rounded-full overflow-hidden">
                        <ClientMotion
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.years / maxYears) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-accent rounded-full"
                        >
                          <div />
                        </ClientMotion>
                      </div>
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

export default Skills; 