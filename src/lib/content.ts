// src/lib/content.ts
import type {
  SiteContent,
  Program,
  Service,
  PricingPlan,
  Testimonial,
  Sport,
  NavLink,
  Hero,
  About,
  ContactInfo,
} from "@/types/content";
import siteData from "@/data/site-content.json";

// Type assertion for imported JSON
const content: SiteContent = siteData as SiteContent;

// ===== MAIN CONTENT GETTER =====
export const getContent = (): SiteContent => {
  return content;
};

// ===== SITE INFO =====
export const getSiteInfo = () => {
  return content.site;
};

// ===== NAVIGATION =====
export const getNavigation = (): NavLink[] => {
  return content.navigation;
};

// ===== HERO =====
export const getHero = (): Hero => {
  return content.hero;
};

// ===== ABOUT =====
export const getAbout = (): About => {
  return content.about;
};

// ===== PROGRAMS =====
export const getPrograms = (): Program[] => {
  return content.programs;
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return content.programs.find((program) => program.slug === slug);
};

export const getFeaturedPrograms = (): Program[] => {
  return content.programs.filter((program) => program.featured);
};

export const getAllProgramSlugs = (): string[] => {
  return content.programs.map((program) => program.slug);
};

// ===== SERVICES =====
export const getServices = (): Service[] => {
  return content.services;
};

export const getServiceById = (id: string): Service | undefined => {
  return content.services.find((service) => service.id === id);
};

// ===== PRICING =====
export const getPricing = (): PricingPlan[] => {
  return content.pricing;
};

export const getFeaturedPlan = (): PricingPlan | undefined => {
  return content.pricing.find((plan) => plan.featured);
};

// ===== TESTIMONIALS =====
export const getTestimonials = (): Testimonial[] => {
  return content.testimonials || [];
};

// ===== SPORTS =====
export const getSports = (): Sport[] => {
  return content.sports;
};

// ===== ONLINE PROGRAMS =====
export const getOnlinePrograms = () => {
  return content.onlinePrograms || [];
};

// ===== CONTACT =====
export const getContactInfo = (): ContactInfo => {
  return content.contact;
};

// ===== FOOTER =====
export const getFooterData = () => {
  return content.footer;
};

// ===== SECTIONS =====
export const getSections = () => {
  return content.sections || [];
};

export const getEnabledSections = () => {
  return getSections()
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order);
};

export const getSectionByType = (type: string) => {
  return getSections().find((section) => section.type === type);
};

// ===== UTILITY FUNCTIONS =====

// Search programs
export const searchPrograms = (query: string): Program[] => {
  const lowerQuery = query.toLowerCase();
  return content.programs.filter(
    (program) =>
      program.name.toLowerCase().includes(lowerQuery) ||
      program.shortDescription.toLowerCase().includes(lowerQuery)
  );
};

// Get programs by price range
export const getProgramsByPriceRange = (
  min: number,
  max: number
): Program[] => {
  return content.programs.filter((program) => {
    if (typeof program.price === "number") {
      return program.price >= min && program.price <= max;
    }
    return false;
  });
};
