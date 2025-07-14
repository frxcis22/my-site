'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/francisbockarie',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/francis-bockarie-b6080b197',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-primary/80 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © {currentYear} Francis Fallah Bockarie. All rights reserved.
          </p>

          {/* Made with */}
          <p className="text-text-secondary text-sm">
            Built with{' '}
            <span className="text-accent">Next.js</span>,{' '}
            <span className="text-accent">Tailwind CSS</span>, and{' '}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 