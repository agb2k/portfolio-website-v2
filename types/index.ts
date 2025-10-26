export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: readonly string[];
  logo?: string;
}

export interface Project {
  name: string;
  description: string;
  tech: readonly string[];
  link: string | undefined;
  company: string;
  logo: string | undefined;
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  skills: readonly string[];
}
