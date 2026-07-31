export type ProjectCategory = "website" | "android";
export type ProjectStatus = "completed" | "in-development";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  architecture?: string;
  roadmap?: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: "frontend" | "backend" | "android" | "database" | "cloud" | "ai" | "design";
  name: string;
}

export interface Skill {
  name: string;
  category: SkillCategory["id"];
  level: number; // 0 to 100
  experience: string;
  iconName: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  year: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}
