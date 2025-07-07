'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import StatsBar from '../components/StatsBar';

// Dynamically import all components with no SSR to prevent hydration issues
const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Resume = dynamic(() => import('../components/Resume'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-primary text-text-primary">
        <div className="flex items-center justify-center h-screen">
          <div className="text-accent text-xl">Loading Portfolio...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-primary text-text-primary">
      <Navigation />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
} 