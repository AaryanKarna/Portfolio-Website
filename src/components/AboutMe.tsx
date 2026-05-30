import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function AboutMe() {
  return (
    <section id="aboutme-section" className="py-20 bg-neutral-50/50 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-left mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="about-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
              About Me
            </h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
          </motion.div>
        </div>

        {/* Content Block */}
        <div className="w-full text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
            id="about-content"
          >
            <p id="about-bio-main" className="font-sans text-neutral-600 text-[17px] leading-relaxed font-light text-left">
              {PERSONAL_INFO.bio}
            </p>
            <p id="about-bio" className="font-sans text-neutral-600 text-[17px] leading-relaxed font-light text-left">
              {PERSONAL_INFO.aboutMeLong}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
