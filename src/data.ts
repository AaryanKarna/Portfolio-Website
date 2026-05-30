import { Skill, Project, EducationItem, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Aaryan Karn',
  title: 'Information Technology Student & Developer',
  email: 'Karnaaryan062@gmail.com',
  phone: '+977 9865374963',
  location: 'Kathmandu, Nepal',
  website: 'aaryankarn.com.np',
  github: 'https://github.com/AaryanKarna',
  linkedin: 'https://www.linkedin.com/in/aaryan-karn-9352b326a/',
  instagram: 'https://instagram.com/_aaryan.karn',
  avatar: '/src/assets/images/regenerated_image_1780140733375.jpg',
  bio: 'I am an Information Technology student with a strong interest in applying technology to solve real-world problems. I am passionate about using technology to improve public services, increase transparency, and make systems more efficient for people.',
  aboutMeLong: 'Currently seeking opportunities to learn, collaborate, and work on projects that align with public impact and development. I specialize in front-end development and UI/UX design, aiming to create intuitive and visually appealing user experiences.'
};

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    category: 'Web',
    proficiency: 95,
    description: 'Expert in semantic HTML5 markup, accessibility (a11y), and web essentials.'
  },
  {
    name: 'CSS',
    category: 'Web',
    proficiency: 92,
    description: 'Proficient in layouts (Flexbox, Grid), CSS Custom Properties, and responsive web design.'
  },
  {
    name: 'JavaScript',
    category: 'Web',
    proficiency: 90,
    description: 'Strong foundation in modern ES6+ JS, asynchronous operations, DOM manipulation, and functional paradigms.'
  },
  {
    name: 'MySQL',
    category: 'Software',
    proficiency: 82,
    description: 'Relational database designing, indexing, optimizing complex SQL queries, and normalization.'
  },
  {
    name: 'Node.js',
    category: 'Software',
    proficiency: 85,
    description: 'Backend API design using RESTful architecture, Express middleware integration, and routing.'
  },
  {
    name: 'React Native',
    category: 'Software',
    proficiency: 78,
    description: 'Building native mobile UI experiences across iOS/Android, navigation managers, and state bridges.'
  },
  {
    name: 'PHP',
    category: 'Software',
    proficiency: 80,
    description: 'Server-side scripting, MVC pattern frameworks, and connecting client forms with database engines.'
  },
  {
    name: 'Figma',
    category: 'Design',
    proficiency: 88,
    description: 'Iterative prototyping, typography grids, component systems, and high-fidelity mockups.'
  },
  {
    name: 'Git/GitHub',
    category: 'VC',
    proficiency: 90,
    description: 'Distributed version control, branch merging workflows, pull requests, and multi-developer systems.'
  },
  {
    name: 'C++ / C# / C',
    category: 'Others',
    proficiency: 75,
    description: 'Procedural and Object-Oriented paradigms, algorithms, hardware-level performance, and desktop compiling.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'commercial-websites',
    title: 'Commercial Websites',
    description: 'Designed and built professional, high-performance commercial websites tailored specifically to client business needs. Integrated with advanced layouts, modern styling frameworks, speed optimization, and responsive user experiences for maximum impact.',
    longDescription: 'This represents a curated collection of customized, high-performance web systems crafted for commercial businesses. Integrating modern styling frameworks, interactive pricing matrixes, SEO optimizations, and analytics. Built to load fast, capture metrics, and drive conversion rates with rich layouts.',
    image: '/src/assets/images/commercial_website_1780122349552.png',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'SEO Opt'],
    demoType: 'commercial'
  },
  {
    id: 'edunest-lms',
    title: 'EduNest LMS App',
    description: 'A comprehensive mobile Learning Management System application designed for educators and students to seamlessly manage course content, monitor academic progress, submit assignments, and access offline resources with beautiful animations.',
    longDescription: 'EduNest is a complete mobile-first Learning Management System designed around user micro-interactions. Key features include assignments feeds, progress bars, calendar integrations, interactive syllabus checks, student profile performance graphics, and offline learning notes cache.',
    image: '/src/assets/images/edunest_lms_1780122369616.png',
    tags: ['React Native', 'Node.js', 'Express', 'SQL', 'JWT Auth'],
    demoType: 'lms'
  },
  {
    id: 'weather-app',
    title: 'Weather App UI',
    description: 'High-fidelity, minimalist UI/UX design and atmospheric concept for a weather application. Features clean visual density, elegant data visualizations for complex telemetry, neon aesthetics, and real-time solar cycle tracking.',
    longDescription: 'An atmospheric visualizer combining artistic, neon-line vectors with real-time location feeds. It incorporates modular elements displaying complex telemetry: humidity graphs, wind gust velocities, rain chance density sliders, and interactive theme shifts reflecting the actual local solar cycles.',
    image: '/src/assets/images/weather_app_1780122392024.png',
    tags: ['Figma', 'UI/UX Design', 'Neon Aesthetics', 'Vector Illustration'],
    demoType: 'weather'
  },
  {
    id: 'music-player',
    title: 'Music Player App',
    description: 'A fully functional music player interface with reactive audio play states, custom playlist generation, tactile equalizer slider adjustments, and high-quality, aesthetic skeuomorphic design modules.',
    longDescription: 'A retro-inspired premium touchscreen electronic audio player that lets users trigger loops, stream test tracks, see real-time canvas visualizers, adjust frequency bands via an equalizer, edit queues, and toggle dark/light skeuomorphic frames in actual playtime.',
    image: '/src/assets/images/music_player_1780122411857.png',
    tags: ['HTML5 Audio', 'React Hooks', 'Skeuomorphic UI', 'WAV Equalizer'],
    demoType: 'music'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Kathmandu University',
    degree: "Bachelor's Degree",
    period: '2024–2029'
  },
  {
    id: 'edu-2',
    institution: "NASA International College",
    degree: "+2 Degree",
    period: '2023–2024'
  },
  {
    id: 'edu-3',
    institution: 'Nexus International School',
    period: '2021–2022'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Professional Web Design',
    issuer: 'Broadway Infosys',
    date: 'August 2022',
    badge: '113 hours intensive course'
  },
  {
    id: 'cert-2',
    title: 'Getting Started with DevOps on AWS',
    issuer: 'Amazon Web Services',
    date: 'August 2025'
  },
  {
    id: 'cert-3',
    title: 'Innovating with Google Cloud AI',
    issuer: 'Google Cloud via Simplilearn',
    date: 'May 2025'
  }
];

export const BEYOND_CODING = [
  {
    title: 'Socials',
    bgColor: 'bg-blue-50/50 border border-blue-100 hover:bg-blue-50/80 transition-colors duration-300',
    hoverRing: 'focus-within:ring-blue-200',
    labelColor: 'text-blue-600 font-medium tracking-wide font-display text-sm uppercase mb-2',
    items: ['Networking', 'Improvisation']
  },
  {
    title: 'Creativity',
    bgColor: 'bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50/80 transition-colors duration-300',
    hoverRing: 'focus-within:ring-emerald-200',
    labelColor: 'text-emerald-600 font-medium tracking-wide font-display text-sm uppercase mb-2',
    items: ['Photography', 'Writing']
  },
  {
    title: 'Intellectual',
    bgColor: 'bg-purple-50/50 border border-purple-100 hover:bg-purple-50/80 transition-colors duration-300',
    hoverRing: 'focus-within:ring-purple-200',
    labelColor: 'text-purple-600 font-medium tracking-wide font-display text-sm uppercase mb-2',
    items: ['Puzzle Solving', 'Reading Global Affairs']
  },
  {
    title: 'Sports',
    bgColor: 'bg-orange-50/50 border border-orange-100 hover:bg-orange-50/80 transition-colors duration-300',
    hoverRing: 'focus-within:ring-orange-200',
    labelColor: 'text-orange-600 font-medium tracking-wide font-display text-sm uppercase mb-2',
    items: ['Football', 'Basketball', 'Table Tennis']
  }
];
