export type ProjectKind = "website" | "webapp" | "android" | "game";
export type ProjectStatus = "live" | "published" | "ready" | "in-progress";

export interface Shot {
  src: string;
  w: number;
  h: number;
  label?: string;
  /** phone = tall portrait, desktop = wide */
  frame: "phone" | "desktop" | "tablet";
}

export interface Project {
  slug: string;
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  /** Built for a paying client */
  client?: string;
  year: number;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  /** When it was built, e.g. "Aug 2026 – Nov 2026" */
  timeline?: string | null;
  icon?: string | null;
  cover?: Shot;
  shots: Shot[];
  links: {
    play?: string;
    live?: string;
    github?: string;
  };
  play?: { downloads?: string; rating?: string };
  featured?: boolean;
}

export interface MiniProject {
  name: string;
  kind: ProjectKind;
  status: ProjectStatus;
  tagline: string;
  tech: string[];
}

export interface Service {
  title: string;
  price: string;
  time: string;
  forWho: string;
  includes: string[];
}
