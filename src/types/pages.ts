// src/types/pages.ts

/**
 * Page configuration for multi-page architecture
 */
export interface PageConfig {
  slug: string;
  title: string;
  description: string;
  sections: PageSectionConfig[];
  content: Record<string, any>;
}

/**
 * Page-specific section configuration (extends base SectionConfig)
 */
export interface PageSectionConfig {
  id: string;
  type: PageSectionType;
  enabled: boolean;
  order: number;
  bgVariant?: "black" | "ctaDefault" | "hero" | "surface" | "surfaceAlt";
  animationPreset?:
    | "none"
    | "fadeIn"
    | "slideUp"
    | "parallax"
    | "slideInLeft"
    | "slideInRight"
    | "scaleIn";
  spacing?: "none" | "small" | "medium" | "large";
  dataKey?: string;
  customProps?: Record<string, unknown>;
}

/**
 * All possible section types across all pages
 */
export type PageSectionType =
  // Shared sections
  | "hero"
  | "cta"
  | "contact"
  // Page-specific sections
  | "page-hero"
  | "story"
  | "philosophy"
  | "team"
  | "credentials"
  | "program-grid"
  | "comparison-table"
  | "featured-story"
  | "testimonial-grid"
  | "sports-breakdown"
  | "facility-tour"
  | "methodology"
  | "equipment"
  | "safety"
  | "contact-form"
  | "contact-info"
  | "faq";

// ===== PAGE HERO VARIANTS =====

export interface PageHero {
  variant: "minimal" | "with-filters" | "stats-heavy" | "full-screen-video";
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  stats?: Stat[];
  filters?: string[];
}

export interface Stat {
  number: string;
  label: string;
}

// ===== ABOUT PAGE TYPES =====

export interface StorySection {
  title: string;
  variant?: "media-left" | "media-right" | "media-center";
  paragraphs: string[];
  images: string[];
}

export interface PhilosophySection {
  title: string;
  subtitle?: string;
  items: PhilosophyItem[];
}

export interface PhilosophyItem {
  letter: string;
  word: string;
  description: string;
}

export interface TeamSection {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

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

export interface CredentialsSection {
  title: string;
  subtitle?: string;
  items: CredentialItem[];
}

export interface CredentialItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// ===== PROGRAMS PAGE TYPES =====

export interface ProgramGridSection {
  title: string;
  subtitle?: string;
  layout: "3-column-cards" | "4-column-cards" | "grid";
  showFilters?: boolean;
}

export interface ComparisonTableSection {
  title: string;
  subtitle?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export interface ComparisonColumn {
  id: string;
  label: string;
  width?: string;
}

export interface ComparisonRow {
  feature: string;
  [key: string]: string;
}

// ===== ATHLETES PAGE TYPES =====

export interface FeaturedStorySection {
  variant: "full-width-media" | "split-layout";
  athlete: string;
  sport: string;
  achievement?: string;
  title: string;
  story: string;
  quote?: string;
  image: string;
  metrics?: PerformanceMetric[];
}

export interface PerformanceMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export interface TestimonialGridSection {
  title: string;
  subtitle?: string;
  variant: "video-masonry" | "card-grid" | "carousel";
  showFilters?: boolean;
  sportFilters?: string[];
}

export interface SportsBreakdownSection {
  title: string;
  subtitle?: string;
  variant: "icon-grid" | "list" | "stats";
  sports: SportBreakdownItem[];
}

export interface SportBreakdownItem {
  name: string;
  athleteCount: number;
  icon?: string;
}

// ===== FACILITIES PAGE TYPES =====

export interface FacilityTourSection {
  type: "video" | "images" | "3d";
  title: string;
  subtitle?: string;
  variant: "image-gallery" | "video-player" | "360-tour";
  media: FacilityMedia[];
}

export interface FacilityMedia {
  url: string;
  caption?: string;
  thumbnail?: string;
}

export interface MethodologySection {
  title: string;
  subtitle?: string;
  variant: "step-by-step" | "grid" | "timeline";
  steps: MethodologyStep[];
}

export interface MethodologyStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface EquipmentSection {
  title: string;
  subtitle?: string;
  variant: "category-tabs" | "grid" | "list";
  categories: EquipmentCategory[];
}

export interface EquipmentCategory {
  id: string;
  name: string;
  items: string[];
}

export interface SafetySection {
  title: string;
  subtitle?: string;
  variant: "icon-list" | "grid" | "checklist";
  items: SafetyItem[];
}

export interface SafetyItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// ===== CONTACT PAGE TYPES =====

export interface ContactFormSection {
  title: string;
  subtitle?: string;
  variant: "multi-step" | "single-form" | "inline";
  submitEndpoint: string;
  successMessage: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
}

export interface ContactInfoSection {
  title: string;
  subtitle?: string;
  variant: "split-layout" | "centered" | "sidebar";
  address: string;
  phone: string;
  email: string;
  hours: Hours[];
  mapCoordinates?: {
    lat: number;
    lng: number;
  };
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Hours {
  days: string;
  time: string;
}

export interface FAQSection {
  title: string;
  subtitle?: string;
  variant: "accordion" | "grid" | "list";
  items: FAQItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ===== NAVIGATION TYPES =====

export interface NavigationConfig {
  mainNav: NavItem[];
  mobileNav: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  submenu?: NavItem[];
}

// ===== FOOTER TYPES =====

export interface FooterConfig {
  copyright: string;
  description?: string;
  sections: FooterSection[];
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  legal?: NavItem[];
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

// ===== SEO METADATA TYPES =====

export interface SEOMetadata {
  pages: Record<string, PageSEO>;
  global: GlobalSEO;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  twitterCard: "summary" | "summary_large_image" | "app" | "player";
}

export interface GlobalSEO {
  siteName: string;
  siteUrl: string;
  twitterHandle: string;
  locale: string;
  type: string;
}

// ===== BREADCRUMB TYPES =====

export interface BreadcrumbItem {
  label: string;
  href: string;
}
