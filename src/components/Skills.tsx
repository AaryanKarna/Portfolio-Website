import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Code, Cpu, Palette, GitBranch, Terminal } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // Percentage out of 100
  category: 'web' | 'tools' | 'design' | 'git' | 'languages';
  colorClass: string;
  bgAccent: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'web', label: 'Web Dev' },
    { id: 'tools', label: 'Software & Tools' },
    { id: 'design', label: 'Design' },
    { id: 'git', label: 'Version Control' },
    { id: 'languages', label: 'Languages' }
  ];

  const skills: SkillItem[] = [
    // Web
    { name: 'HTML & CSS', level: 90, category: 'web', colorClass: 'bg-blue-600', bgAccent: 'bg-blue-500/10' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'web', colorClass: 'bg-amber-500', bgAccent: 'bg-amber-500/10' },
    
    // Tools
    { name: 'Node.js', level: 75, category: 'tools', colorClass: 'bg-emerald-600', bgAccent: 'bg-emerald-500/10' },
    { name: 'React Native', level: 80, category: 'tools', colorClass: 'bg-cyan-500', bgAccent: 'bg-cyan-500/10' },
    { name: 'MySQL Database', level: 78, category: 'tools', colorClass: 'bg-blue-500', bgAccent: 'bg-blue-500/10' },
    { name: 'PHP', level: 68, category: 'tools', colorClass: 'bg-indigo-600', bgAccent: 'bg-indigo-500/10' },
    
    // Design
    { name: 'Figma Canvas Design', level: 85, category: 'design', colorClass: 'bg-pink-500', bgAccent: 'bg-pink-500/10' },
    { name: 'UI/UX Wireframing & Design', level: 80, category: 'design', colorClass: 'bg-purple-600', bgAccent: 'bg-purple-500/10' },
    
    // Git
    { name: 'Git Workspace Management', level: 90, category: 'git', colorClass: 'bg-orange-600', bgAccent: 'bg-orange-500/10' },
    { name: 'GitHub Collaboration', level: 88, category: 'git', colorClass: 'bg-neutral-800', bgAccent: 'bg-neutral-500/15' },
    
    // Languages
    { name: 'C / C++', level: 75, category: 'languages', colorClass: 'bg-teal-600', bgAccent: 'bg-teal-500/10' },
    { name: 'C# (ASP.NET principles)', level: 65, category: 'languages', colorClass: 'bg-purple-500', bgAccent: 'bg-purple-500/10' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills-section" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 id="skills-heading" className="font-display font-bold text-3xl text-neutral-900 tracking-tight">
              Skills
            </h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded mt-2.5"></div>
            <p id="skills-intro" className="font-sans text-neutral-500 w-full leading-relaxed text-[15px] font-light pt-2">
              An interactive representation of my tech stack, frameworks, design proficiency, and relative programming strengths.
            </p>
          </motion.div>
        </div>

        {/* Tab filters to switch visual representation dynamically */}
        <div className="flex flex-wrap gap-2.5 mb-10 justify-start" id="skills-tab-bar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Horizontal Bar Chart Layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 bg-neutral-50/30 border border-neutral-150/60 p-8 sm:p-10 rounded-3xl"
          id="skills-chart-container"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="space-y-2.5"
                id={`skill-bar-${skill.name.toLowerCase().replace(/[^a-z]/g, '')}`}
              >
                {/* Skill Name & Level label */}
                <div className="flex justify-between items-center text-sm font-sans">
                  <span className="font-medium text-neutral-900 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${skill.colorClass}`} />
                    {skill.name}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 font-mono">
                    {skill.level}%
                  </span>
                </div>

                {/* Outer empty bar */}
                <div className="h-3 w-full bg-neutral-100 border border-neutral-200/40 rounded-full overflow-hidden relative">
                  {/* Outer glow effect under active level bar */}
                  <div className={`absolute top-0 left-0 h-full w-full ${skill.bgAccent}`} />
                  
                  {/* Animating Fill progress bar */}
                  <motion.div
                    className={`h-full rounded-full ${skill.colorClass}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Minimal Bottom Legend */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-start text-[11px] font-mono text-neutral-400 font-light" id="skills-chart-legend">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-blue-600 block"></span>
            <span>Web Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-emerald-500 block"></span>
            <span>Backend & Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-pink-500 block"></span>
            <span>Creative Design UI/UX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded bg-orange-600 block"></span>
            <span>Collaborative Workflows</span>
          </div>
        </div>

      </div>
    </section>
  );
}
