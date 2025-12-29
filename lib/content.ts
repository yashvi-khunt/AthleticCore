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
  CTA,
} from "@/types/content";
import type {
  PageConfig,
  PageSectionConfig,
  NavigationConfig,
  FooterConfig,
  SEOMetadata,
} from "@/types/pages";
import type { Metadata } from "next";
import siteData from "@/data/site-content.json";
import aboutData from "@/data/pages/about.json";
import programsData from "@/data/pages/programs.json";
import athletesData from "@/data/pages/athletes.json";
import facilitiesData from "@/data/pages/facilities.json";
import contactData from "@/data/pages/contact.json";
import navigationData from "@/data/shared/navigation.json";
import footerData from "@/data/shared/footer.json";
import seoData from "@/data/shared/seo-metadata.json";

// Type assertion for imported JSON
const content: SiteContent = siteData as SiteContent;

// Page data registry
const pages: Record<string, PageConfig> = {
  about: aboutData as PageConfig,
  programs: programsData as PageConfig,
  athletes: athletesData as PageConfig,
  facilities: facilitiesData as PageConfig,
  contact: contactData as PageConfig,
};

// Shared data
const navigation: NavigationConfig = navigationData as NavigationConfig;
const footer: FooterConfig = footerData as FooterConfig;
const seoMetadata: SEOMetadata = seoData as SEOMetadata;

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

// ===== CTA =====
export const getCTA = (): CTA => {
  return content.cta;
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

// ===== MULTI-PAGE FUNCTIONS =====

/**
 * Get sections for a specific page
 * Returns enabled sections sorted by order
 */
export function getPageSections(pageSlug: string): PageSectionConfig[] {
  const pageData = pages[pageSlug];

  if (!pageData) {
    console.warn(`Page data not found for slug: ${pageSlug}`);
    return [];
  }

  return pageData.sections
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get content for a specific section on a page
 * Returns null if page or content key doesn't exist
 */
export function getPageContent<T = any>(
  pageSlug: string,
  dataKey: string
): T | null {
  const pageData = pages[pageSlug];

  if (!pageData) {
    console.warn(`Page data not found for slug: ${pageSlug}`);
    return null;
  }

  return (pageData.content?.[dataKey] as T) || null;
}

/**
 * Get all page data for a specific page
 */
export function getPageData(pageSlug: string): PageConfig | null {
  return pages[pageSlug] || null;
}

/**
 * Get metadata for SEO (Next.js Metadata API)
 */
export function getPageMetadata(pageSlug: string): Metadata {
  const pageSEO = seoMetadata.pages[pageSlug];
  const global = seoMetadata.global;

  if (!pageSEO) {
    console.warn(`SEO metadata not found for page: ${pageSlug}`);
    return {
      title: global.siteName,
      description: "",
    };
  }

  return {
    title: pageSEO.title,
    description: pageSEO.description,
    keywords: pageSEO.keywords,
    openGraph: {
      title: pageSEO.title,
      description: pageSEO.description,
      images: [pageSEO.ogImage],
      siteName: global.siteName,
      locale: global.locale,
      type: global.type as "website",
      url: `${global.siteUrl}/${pageSlug}`,
    },
    twitter: {
      card: pageSEO.twitterCard,
      title: pageSEO.title,
      description: pageSEO.description,
      images: [pageSEO.ogImage],
      site: global.twitterHandle,
    },
  };
}

/**
 * Get navigation data
 */
export function getNavigationData(): NavigationConfig {
  return navigation;
}

/**
 * Get main navigation items
 */
export function getMainNav() {
  return navigation.mainNav;
}

/**
 * Get mobile navigation items
 */
export function getMobileNav() {
  return navigation.mobileNav;
}

/**
 * Get footer data
 */
export function getFooterConfig(): FooterConfig {
  return footer;
}

/**
 * Get all available page slugs
 */
export function getAllPageSlugs(): string[] {
  return Object.keys(pages);
}
