// src/types/content.ts

// ===== NAVIGATION =====
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ===== HERO =====
export interface Hero {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  showStats?: boolean;
  stats?: Stat[];
}

export interface Stat {
  number: string;
  label: string;
}

// ===== PROGRAMS/TRAINING =====
export interface Program {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  frequency?: string;
  groupSize?: string;
  price?: string | number;
  featured?: boolean;
}

// ===== SERVICES =====
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

// ===== PRICING/PLANS =====
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string | number;
  interval?: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

// ===== TESTIMONIALS =====
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  sport?: string;
  image?: string;
  quote: string;
  rating?: number;
  // YouTube video support
  videoId?: string; // YouTube video ID
  videoThumbnail?: string; // Custom thumbnail URL (optional, will auto-generate from videoId)
  videoDuration?: string; // Display duration like "2:34"
  videoTitle?: string; // Optional custom title for the video
}

// ===== TEAM MEMBERS =====
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials?: string[];
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// ===== ABOUT =====
export interface About {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  features?: string[];
  philosophy?: Philosophy[];
}

export interface Philosophy {
  letter: string;
  word: string;
  description: string;
}

// ===== SPORTS =====
export interface Sport {
  id: string;
  name: string;
  icon?: string;
  image: string;
}

// ===== ONLINE PROGRAMS =====
export interface OnlineProgram {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

// ===== CONTACT =====
export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
  availability?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

// ===== SECTION CONFIGURATION =====
export type SectionType =
  | "hero"
  | "programs"
  | "about"
  | "services"
  | "pricing"
  | "testimonials"
  | "sports"
  | "cta"
  | "contact";

export interface SectionConfig {
  id: string;
  type: SectionType;
  enabled: boolean;
  order: number;
  title?: string;
  customProps?: Record<string, any>;
}

// ===== SITE CONTENT (MAIN DATA STRUCTURE) =====
export interface SiteContent {
  site: {
    name: string;
    tagline?: string;
    description: string;
  };
  navigation: NavLink[];
  sections?: SectionConfig[];
  hero: Hero;
  about: About;
  programs: Program[];
  services: Service[];
  pricing: PricingPlan[];
  testimonials?: Testimonial[];
  team?: TeamMember[];
  sports: Sport[];
  onlinePrograms?: OnlineProgram[];
  contact: ContactInfo;
  footer: {
    copyright: string;
    links?: {
      label: string;
      href: string;
    }[];
  };
}
