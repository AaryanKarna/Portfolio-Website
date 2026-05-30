/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import BeyondCoding from './components/BeyondCoding';
import ContactFooter from './components/ContactFooter';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div id="root-portfolio" className="min-h-screen bg-neutral-50 selection:bg-blue-600/10 selection:text-blue-700 antialiased overflow-x-hidden relative">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main content sections */}
      <main id="app-main-content">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Dynamic Skills Panel Section */}
        <Skills />

        {/* Projects Playground Segment */}
        <Projects />

        {/* Education & Certifications Timeline Columns */}
        <EducationCertifications />

        {/* Beyond Coding Hobbies Panels Grid */}
        <BeyondCoding />
      </main>

      {/* Joint Dark Contact Form & Footer Section */}
      <ContactFooter />

      {/* Floating Scroll to Top Arrow */}
      <ScrollToTop />
    </div>
  );
}

