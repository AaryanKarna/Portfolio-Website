import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { GraduationCap, Award, Calendar, ShieldCheck } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="edu-cert-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-10 text-left" id="education-timeline-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="education-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
                Education
              </h2>
              <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
            </motion.div>

            {/* Vertical timeline */}
            <div className="relative pl-8 border-l-2 border-neutral-100/80 space-y-12 py-2 ml-4" id="timeline-thread">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="relative group"
                  id={`timeline-node-${edu.id}`}
                >
                  {/* Timeline circle marker */}
                  <div className="absolute -left-12 top-1.5 w-8 h-8 rounded-full border-4 border-white bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-medium text-lg text-neutral-900 group-hover:text-blue-600 transition duration-300">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100 uppercase tracking-wide">
                        {edu.period}
                      </span>
                    </div>

                    {edu.degree && (
                      <p className="font-sans text-neutral-500 text-sm font-light">
                        {edu.degree}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications cards (7 cols) */}
          <div className="lg:col-span-7 space-y-10 text-left" id="certifications-list-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="certifications-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
                Certifications
              </h2>
              <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
            </motion.div>

            <div className="space-y-4" id="certifications-grid">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ 
                    scale: 1.012, 
                    x: 4,
                    boxShadow: "0 8px 24px -10px rgba(0,0,0,0.05)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                    delay: idx * 0.08
                  }}
                  id={`cert-card-${cert.id}`}
                  className="p-5 bg-neutral-50/50 hover:bg-white border border-neutral-100 hover:border-neutral-300 rounded-2xl flex justify-between items-center gap-4 group cursor-pointer transition-colors duration-300"
                >
                  <div className="flex gap-4 items-start text-left">
                    <div className="p-3 bg-white border border-neutral-150 rounded-xl text-neutral-700 shadow-sm group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-neutral-900 group-hover:text-neutral-950 text-base leading-snug">
                        {cert.title}
                      </h4>
                      <p className="font-sans text-[12px] text-neutral-400">
                        {cert.issuer} • {cert.date}
                      </p>
                      
                      {cert.badge && (
                        <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 bg-blue-50/60 text-blue-700 border border-blue-100 text-[10px] font-mono rounded font-semibold uppercase tracking-wide">
                          <ShieldCheck className="w-3 h-3 text-blue-500" />
                          <span>{cert.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
