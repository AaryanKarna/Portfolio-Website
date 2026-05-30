export interface Skill {
  name: string;
  category: 'Web' | 'Software' | 'Design' | 'VC' | 'Others';
  proficiency?: number; // percentage, e.g. 90
  description?: string; // high-quality detail for interactive display
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoType: 'weather' | 'music' | 'lms' | 'commercial';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree?: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
