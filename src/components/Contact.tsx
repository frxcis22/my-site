'use client';

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ClientMotion from './ClientMotion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting form data:', formData); // Debug log
      
      // Try Formspree first
      const response = await fetch('https://formspree.io/f/xpzgwqjq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      console.log('Response status:', response.status); // Debug log
      console.log('Response ok:', response.ok); // Debug log

      if (response.ok) {
        const result = await response.json();
        console.log('Formspree response:', result); // Debug log
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: Open email client with pre-filled data
        const subject = encodeURIComponent('Contact from Portfolio Website');
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        );
        const mailtoLink = `mailto:francisbock20@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback: Open email client with pre-filled data
      const subject = encodeURIComponent('Contact from Portfolio Website');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      );
      const mailtoLink = `mailto:francisbock20@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact Me</h2>
        </ClientMotion>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ClientMotion
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-mono text-accent mb-4">Get in Touch</h3>
                <p className="text-text-secondary">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <ClientMotion
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <FaEnvelope className="text-accent w-5 h-5" />
                  <a
                    href="mailto:francisbock20@gmail.com"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    francisbock20@gmail.com
                  </a>
                </ClientMotion>

                <ClientMotion
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <FaPhone className="text-accent w-5 h-5" />
                  <a
                    href="tel:6104833022"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    (610) 483-3022
                  </a>
                </ClientMotion>

                <ClientMotion
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <FaMapMarkerAlt className="text-accent w-5 h-5" />
                  <span className="text-text-secondary">
                    Sharon Hill, PA
                  </span>
                </ClientMotion>
              </div>
            </div>
          </ClientMotion>

          <ClientMotion
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary/50 border-2 border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text-primary placeholder-text-secondary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary/50 border-2 border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text-primary placeholder-text-secondary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-primary/50 border-2 border-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text-primary placeholder-text-secondary resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {isMounted && submitStatus === 'success' && (
                <div className="text-green-500 text-center p-3 bg-green-500/10 rounded-md">
                  Message sent successfully! If your email client didn't open, please contact me directly at francisbock20@gmail.com
                </div>
              )}

              {isMounted && submitStatus === 'error' && (
                <div className="text-red-500 text-center p-3 bg-red-500/10 rounded-md">
                  Failed to send message. Please try again or contact me directly at francisbock20@gmail.com
                </div>
              )}
            </form>
          </ClientMotion>
        </div>
      </div>
    </section>
  );
};

export default Contact; 