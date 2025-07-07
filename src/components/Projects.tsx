'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ClientMotion from './ClientMotion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Vendor Risk Assessment System',
      description: 'Led development of comprehensive vendor assessment framework in OneTrust. Customized over 70% of third-party risk questionnaire to evaluate security, risk, compliance, governance, and data privacy posture of external vendors.',
      image: '/projects/vendor-risk.svg',
      technologies: ['OneTrust', 'Third-party Risk Management', 'Risk Analysis', 'Compliance', 'Data Privacy']
    },
    {
      title: 'Data Security Platform Implementation',
      description: 'Supported Varonis Data Security Platform deployment and training. Assisted in monitoring sensitive data access, configuring alerts, and aligning governance with internal risk policies.',
      image: '/projects/data-security.svg',
      technologies: ['Varonis', 'Data Security', 'Access Monitoring', 'Risk Analysis', 'Governance']
    },
    {
      title: 'Internal threat analysis & Risk REduction',
      description: '(Internship @ USLI) Conducted internal threat analyses to identify potential vulnerabilities at USLI. Contributed to reducing organizational risk exposure through proactive system patching and enhancing employee security awareness programs.',
      image: '/projects/threat-analysis.svg',
      technologies: ['Threat Analysis', 'Vulnerability Assessment', 'Risk Analysis', 'System Patching', 'Security Awareness']
    },
    {
      title: 'Campus Security Assessment',
      description: 'Conducted comprehensive security assessment of campus IT infrastructure. Identified vulnerabilities and provided remediation recommendations while creating security awareness training materials.',
      image: '/projects/security-assessment.svg',
      technologies: ['Security Assessment', 'Vulnerability Assessment', 'Infrastructure', 'Technical Documentation']
    }, 
    {
      title: 'Campus Career Center Alumni App',
      description: '(Undergrad Project) Designed and developed a mobile application to facilitate mentorship opportunities for underclassmen. Implemented features to streamline connecting students with suitable mentors, and collaborated with career center staff on requirements. Conducted user testing and collected feedback for iterative improvements, resulting in an intuitive and effective platform.',
      image: '/projects/mobile-app.svg',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Project Management', 'Technical Documentation']
    },
    {
      title: 'Network Analysis & Diagnostics',
      description: '(Undergrad Skill Application) Utilized Wireshark to identify and diagnose network issues by capturing and analyzing network packets. This project involved deep packet inspection to troubleshoot connectivity and performance problems, enhancing network stability.',
      image: '/projects/network-analysis.svg',
      technologies: ['Wireshark', 'Network Analysis', 'Command Line (CMD)', 'Technical Documentation']
    },
    {
      title: 'TPRM System Development (OneTrust)',
      description: "Full-time Role @ The Institute's Knowledge Company) Led the development and customization of a comprehensive vendor assessment system using OneTrust. Authored a significant portion of the third-party risk questionnaire to evaluate vendor security, risk, compliance, governance, and data privacy.",
      image: '/projects/tprm-system.svg',
      technologies: ['OneTrust', 'Third-party Risk Management', 'Risk Analysis', 'Compliance', 'Governance', 'Data Privacy']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Key projects and initiatives in cybersecurity, risk management, and IT infrastructure
          </p>
        </ClientMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ClientMotion
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/50 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {project.title.includes('Vendor') || project.title.includes('TPRM') ? '🏢' :
                       project.title.includes('Data Security') ? '🔐' :
                       project.title.includes('Security Assessment') ? '🛡️' :
                       project.title.includes('Threat') ? '⚠️' :
                       project.title.includes('Mobile') || project.title.includes('App') ? '📱' :
                       project.title.includes('Network') ? '🌐' : '🔒'}
                    </div>
                    <div className="text-accent font-mono text-sm">{project.title.split(' ')[0]}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-mono text-accent mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
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

                {project.githubUrl && (
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ClientMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 