export interface ProfileData {
  name: string;
  title: string;
  titleUrdu: string;
  tagline: string;
  bio: string;
  bioUrdu: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  yearsExperience: string;
  gamesShipped: string;
  fpsTarget: string;
  downloadsReach: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  portraitUrl: string;
  currentPursuit: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  engineArchitecture: string[];
  optimizationMetrics: string[];
}

export interface GameProject {
  id: string;
  title: string;
  genre: string;
  category: 'AR, VR & XR' | 'Shooting & Action' | 'Simulation & Sports' | 'Playable Ads & Casual' | 'R&D & Conferences';
  year: string;
  studio: string;
  role?: string;
  platforms: string[]; // e.g. ["AR", "VR", "Desktop", "Android", "iOS", "Tablet"]
  summary: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  playStoreMetrics?: {
    rating?: string;
    downloads?: string;
    performanceTarget?: string;
    buildSize?: string;
  };
  caseStudy: CaseStudy;
  playStoreUrl?: string;
  playableDemoUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // "Expert", "Advanced", "Proficient"
    experience: string;
  }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
