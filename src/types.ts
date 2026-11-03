export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  role: string;
  badge: string;
  category: 'Full Stack' | 'Backend' | 'Frontend';
  githubUrl: string;
  liveDemoUrl: string;
  architectureDetails: {
    overview: string;
    keyHighlights: string[];
    csharpSnippet: string;
    databaseStructure: string[];
  };
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  experienceDuration: string;
  description: string;
  keyAreas: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  coursework: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  detailedBio: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  experienceDuration: string;
  experience: ExperienceItem[];
  education: EducationItem[];
}
