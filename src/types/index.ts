/**
 * Type definitions for SPS Law Firm website
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  process?: string[];
  benefits?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface BlogContent extends BlogPost {
  content: {
    intro: string;
    sections: BlogSection[];
    conclusion: string;
  };
}

export interface BlogSection {
  heading: string;
  content: string;
  points?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface QuickLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}
