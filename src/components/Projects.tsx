import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projects-section" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="projects-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
          </motion.div>
        </div>

        {/* 2x2 Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6" 
          id="projects-cards-grid"
        >
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ 
                y: -6, 
                scale: 1.015,
                boxShadow: "0 12px 30px -10px rgba(37, 99, 235, 0.08)"
              }}
              whileTap={{ scale: 0.995 }}
              transition={{ 
                type: "spring",
                stiffness: 140,
                damping: 18,
                delay: idx * 0.06
              }}
              id={`project-card-${proj.id}`}
              className="bg-white rounded-2xl p-8 border border-neutral-200/65 shadow-sm hover:border-blue-500/30 flex flex-col justify-center text-left min-h-[180px] group cursor-pointer transition-colors duration-300"
            >
              <h3 className="font-display font-bold text-xl text-neutral-900 group-hover:text-blue-600 transition-colors duration-250 mb-3">
                {proj.title}
              </h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed font-light text-justify">
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
