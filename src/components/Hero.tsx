import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToSub = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 text-left"
          id="hero-content"
        >
          {/* Subtle label */}

          <div className="space-y-4">
            <h1 id="hero-heading" className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 leading-[1.1]">
              Hi, I'm <span className="text-neutral-900 border-b-4 border-blue-500/20">{PERSONAL_INFO.name}</span>
            </h1>
            <p id="hero-subtitle" className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 tracking-wide">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p id="hero-bio" className="font-sans text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            {PERSONAL_INFO.bio}
          </p>

          {/* Contact Details Badges */}
          <div id="hero-badges" className="flex flex-wrap gap-4 pt-2">
            <div 
              id="badge-phone"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-blue-200 bg-blue-50/20 text-blue-700 font-sans font-medium text-sm transition-all duration-300 hover:bg-blue-50/50"
            >
              <Phone className="w-4 h-4 text-blue-500" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>

            <div 
              id="badge-location"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-blue-200 bg-blue-50/20 text-blue-700 font-sans font-medium text-sm transition-all duration-300 hover:bg-blue-50/50"
            >
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div id="hero-ctas" className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSub('projects-section')}
              id="hero-btn-work"
              className="px-6 h-12 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm rounded-lg transition-all duration-200 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
            >
              View my work
            </button>

            <button
              onClick={() => scrollToSub('contact-footer')}
              id="hero-btn-contact"
              className="px-6 h-12 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-sans font-semibold text-sm rounded-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </motion.div>

        {/* Right column (Avatar circle) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
          id="hero-avatar-area"
        >
          {/* Animated decorative circles */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-blue-200 animate-spin" style={{ animationDuration: '40s' }}></div>
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-blue-50/80 animate-pulse"></div>

          {/* Avatar frame */}
          <div 
            className="relative w-64 h-64 sm:w-76 sm:h-76 rounded-full p-2 bg-white shadow-xl shadow-neutral-200/80 border border-neutral-100 z-10 overflow-hidden group"
            id="avatar-circle-wrapper"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-neutral-200 flex items-center justify-center relative">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                id="avatar-image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
