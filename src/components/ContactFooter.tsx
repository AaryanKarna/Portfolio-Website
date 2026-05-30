import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactFooter() {
  return (
    <footer id="contact-footer" className="bg-[#171717] text-neutral-400 py-16 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main layout matching the user's reference image exactly */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 text-left" id="footer-main-layout">
          
          {/* Column 1: Profile & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4" id="footer-col-profile">
            <h3 className="font-display font-semibold text-2xl text-white tracking-wide">
              Aaryan <span className="text-blue-500">Karn</span>
            </h3>
            <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              Information Technology student passionate about creating innovative solutions and building the future through code.
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-4" id="footer-col-links">
            <span className="block font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </span>
            <ul className="space-y-2.5 font-sans text-sm font-light">
              <li>
                <a href="#aboutme-section" className="hover:text-blue-400 transition duration-200">About</a>
              </li>
              <li>
                <a href="#skills-section" className="hover:text-blue-400 transition duration-200">Skills</a>
              </li>
              <li>
                <a href="#projects-section" className="hover:text-blue-400 transition duration-200">Projects</a>
              </li>
              <li>
                <a href="#contact-footer" className="hover:text-blue-400 transition duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (4 cols) */}
          <div className="md:col-span-4 space-y-4" id="footer-col-contact">
            <span className="block font-display font-bold text-sm text-white uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="space-y-2.5 font-sans text-sm font-light">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="block hover:text-blue-400 transition duration-200"
              >
                {PERSONAL_INFO.email}
              </a>
              <span className="block text-neutral-400">
                {PERSONAL_INFO.phone}
              </span>
              <span className="block text-neutral-400">
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Social Circle Links */}
            <div className="flex gap-3 pt-3" id="footer-col-socials">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#202020] border border-neutral-800 flex items-center justify-center text-neutral-350 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-250 cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#202020] border border-neutral-800 flex items-center justify-center text-neutral-350 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-250 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#202020] border border-neutral-800 flex items-center justify-center text-neutral-350 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-250 cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="w-9 h-9 rounded-full bg-[#202020] border border-neutral-800 flex items-center justify-center text-neutral-350 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-250 cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-neutral-800/80 my-8" />

        {/* Bottom row copyrights matching exactly */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4 text-center sm:text-left relative" id="footer-bottom-row">
          <div>
            © 2026 Aaryan Karn. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
