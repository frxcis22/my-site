import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary/90 text-text-primary w-full md:w-80 min-h-screen flex flex-col items-center py-10 px-4 border-r border-secondary/30">
      <img
        src="/profile.jpg"
        alt="Profile picture of Francis Fallah Bockarie"
        className="w-28 h-28 rounded-full border-4 border-accent shadow-lg object-cover mb-4"
      />
      <h2 className="text-2xl font-bold text-accent mb-1">Francis Fallah Bockarie</h2>
      <p className="text-text-secondary mb-4">IT Security & Risk Professional</p>
      <div className="mb-6 text-sm text-text-secondary">
        <div className="mb-1"><span className="font-bold">Location:</span> Sharon Hill, PA</div>
        <div className="mb-1"><span className="font-bold">Email:</span> <a href="mailto:francisbock20@gmail.com" className="hover:text-accent">francisbock20@gmail.com</a></div>
        <div className="mb-1"><span className="font-bold">Phone:</span> <a href="tel:6104833022" className="hover:text-accent">(610) 483-3022</a></div>
      </div>
      <div className="flex space-x-4 mt-auto mb-4">
        <a href="https://linkedin.com/in/francisbockarie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white"><FaLinkedin size={20} /></a>
        <a href="https://github.com/francisbockarie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white"><FaGithub size={20} /></a>
        <a href="mailto:francisbock20@gmail.com" className="text-accent hover:text-white"><FaEnvelope size={20} /></a>
        <a href="tel:6104833022" className="text-accent hover:text-white"><FaPhone size={20} /></a>
      </div>
    </aside>
  );
};

export default Sidebar; 