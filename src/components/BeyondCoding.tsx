import React from 'react';
import { motion } from 'motion/react';
import { BEYOND_CODING } from '../data';

export default function BeyondCoding() {
  return (
    <section id="beyond-coding-section" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-left mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="beyond-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
              Beyond Coding
            </h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
          id="beyond-coding-grid"
        >
          {BEYOND_CODING.map((panel, idx) => {
            return (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.015,
                  boxShadow: "0 12px 30px -10px rgba(37, 99, 235, 0.08)"
                }}
                whileTap={{ scale: 0.995 }}
                transition={{ 
                  type: "spring",
                  stiffness: 150,
                  damping: 18,
                  delay: idx * 0.05
                }}
                id={`beyond-panel-${panel.title.toLowerCase()}`}
                className="bg-white rounded-2xl p-8 border border-neutral-200/65 shadow-sm hover:border-blue-500/30 flex flex-col text-left min-h-[160px] group cursor-pointer transition-colors duration-300"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-neutral-900 group-hover:text-blue-600 transition-colors duration-250 mb-4">
                    {panel.title}
                  </h3>
                  <ul className="space-y-2.5" id={`beyond-item-list-${panel.title.toLowerCase()}`}>
                    {panel.items.map((item) => (
                      <li key={item} className="font-sans text-neutral-500 text-[15px] flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600/80"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
