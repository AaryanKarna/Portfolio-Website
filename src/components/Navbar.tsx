import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="app-header" className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          id="nav-logo-container"
        >
          <span id="nav-logo" className="font-display font-bold text-xl tracking-tight text-neutral-900">
            Aaryan Karn
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3"
          id="nav-links-container"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-btn-github"
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 h-10 rounded-full font-sans font-medium text-xs bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer transition-all duration-200"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-btn-linkedin"
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 h-10 rounded-full font-sans font-medium text-xs bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer transition-all duration-200"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            id="nav-btn-email"
            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 h-10 rounded-full font-sans font-medium text-xs bg-neutral-900 border border-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer transition-all duration-200"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
