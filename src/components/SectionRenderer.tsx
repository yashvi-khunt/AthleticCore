// src/components/SectionRenderer.tsx
"use client";

import { type SectionConfig } from "@/types/content";
import type { PageSectionConfig } from "@/types/pages";
import SectionShell from "@/components/SectionShell";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SportsSection from "@/components/SportsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/sections/PageHero";
import ProgramGrid from "@/components/sections/ProgramGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ProgramBenefits from "@/components/sections/ProgramBenefits";
import ProgramMethodology from "@/components/sections/ProgramMethodology";
import ProgramFAQ from "@/components/sections/ProgramFAQ";

import {
  getHero,
  getAbout,
  getPrograms,
  getServices,
  getPricing,
  getTestimonials,
  getSports,
  getContactInfo,
  getCTA,
  getPageContent,
} from "@/lib/content";

interface SectionRendererProps {
  section: SectionConfig | PageSectionConfig;
}

/**
 * SectionRenderer - Dynamically renders sections based on configuration
 *
 * This component acts as the bridge between section configuration (from JSON/DB)
 * and the actual section components. It wraps each section in SectionShell for
 * consistent styling and animations, making the site easily convertible to CMS.
 *
 * CMS Conversion Notes:
 * - Section config (bgVariant, spacing, animationPreset) comes from DB/JSON
 * - Section content comes from content getters (will be API calls in CMS)
 * - SectionShell provides consistent container styling
 * - Individual section components remain pure presentational components
 */
export default function SectionRenderer({ section }: SectionRendererProps) {
  // Return null if section is disabled
  if (!section.enabled) {
    return null;
  }

  // Get custom props if provided
  const customProps = section.customProps || {};

  // Extract section shell configuration
  // Handle type differences between SectionConfig and PageSectionConfig
  const rawBgVariant = (section as any).bgVariant || "black";
  const rawAnimationPreset = (section as any).animationPreset || "fadeIn";
  const spacing = (section as any).spacing || "large";

  // Map PageSectionConfig variants to SectionShell compatible ones
  const bgVariant = ["black", "ctaDefault", "hero"].includes(rawBgVariant)
    ? (rawBgVariant as "black" | "ctaDefault" | "hero")
    : "black";
  const animationPreset = ["none", "fadeIn", "slideUp", "parallax"].includes(
    rawAnimationPreset
  )
    ? (rawAnimationPreset as "none" | "fadeIn" | "slideUp" | "parallax")
    : "fadeIn";

  // Render the appropriate component based on section type
  // Each section is wrapped in SectionShell for consistent styling
  const renderSectionContent = () => {
    switch (section.type) {
      case "hero": {
        const hero = getHero();
        // Hero manages its own container and background
        return <Hero {...hero} {...customProps} />;
      }

      case "programs": {
        const programs = getPrograms();
        return <ProgramsSection programs={programs} {...customProps} />;
      }

      case "about": {
        const about = getAbout();
        return <AboutSection {...about} {...customProps} />;
      }

      case "services": {
        const services = getServices();
        return <ServicesSection services={services} {...customProps} />;
      }

      case "pricing": {
        const pricing = getPricing();
        return <PricingSection plans={pricing} {...customProps} />;
      }

      case "testimonials": {
        const testimonials = getTestimonials();
        return (
          <TestimonialsSection testimonials={testimonials} {...customProps} />
        );
      }

      case "sports": {
        const sports = getSports();
        return <SportsSection sports={sports} {...customProps} />;
      }

      case "cta": {
        const cta = getCTA();
        // CTA section manages its own styling (lime background)
        return <CTASection {...cta} {...customProps} />;
      }

      case "contact": {
        const contact = getContactInfo();
        return <ContactSection contact={contact} {...customProps} />;
      }

      // ===== PAGE-SPECIFIC SECTIONS =====

      case "page-hero": {
        // Extract page slug from section ID (e.g., "about-hero" -> "about")
        const pageSlug = section.id.split("-")[0];
        const heroData = getPageContent(
          pageSlug,
          section.dataKey || "aboutHero"
        );
        if (!heroData) {
          console.warn(
            `Page hero data not found for ${pageSlug}:${section.dataKey}`
          );
          return null;
        }
        return <PageHero {...heroData} {...customProps} />;
      }

      case "program-grid": {
        const pageSlug = section.id.split("-")[0];
        const gridData = getPageContent(
          pageSlug,
          section.dataKey || "programsGrid"
        );
        if (!gridData) {
          console.warn(
            `Program grid data not found for ${pageSlug}:${section.dataKey}`
          );
          return null;
        }
        return <ProgramGrid content={gridData} {...customProps} />;
      }

      case "comparison-table": {
        const pageSlug = section.id.split("-")[0];
        const comparisonData = getPageContent(
          pageSlug,
          section.dataKey || "comparison"
        );
        if (!comparisonData) {
          console.warn(
            `Comparison table data not found for ${pageSlug}:${section.dataKey}`
          );
          return null;
        }
        return <ComparisonTable content={comparisonData} {...customProps} />;
      }

      case "program-benefits": {
        const pageSlug = section.id.split("-")[0];
        const benefitsData = getPageContent(
          pageSlug,
          section.dataKey || "benefits"
        );
        if (!benefitsData) {
          console.warn(
            `Benefits data not found for ${pageSlug}:${section.dataKey}`
          );
          return null;
        }
        return <ProgramBenefits content={benefitsData} {...customProps} />;
      }

      case "program-methodology": {
        const pageSlug = section.id.split("-")[0];
        const methodologyData = getPageContent(
          pageSlug,
          section.dataKey || "methodology"
        );
        if (!methodologyData) {
          console.warn(
            `Methodology data not found for ${pageSlug}:${section.dataKey}`
          );
          return null;
        }
        return (
          <ProgramMethodology content={methodologyData} {...customProps} />
        );
      }

      case "program-faq": {
        const pageSlug = section.id.split("-")[0];
        const faqData = getPageContent(pageSlug, section.dataKey || "faq");
        if (!faqData) {
          console.warn(`FAQ data not found for ${pageSlug}:${section.dataKey}`);
          return null;
        }
        return <ProgramFAQ content={faqData} {...customProps} />;
      }

      // Placeholder for other page-specific sections
      // These will be implemented as needed
      case "story":
      case "philosophy":
      case "team":
      case "credentials":
      case "featured-story":
      case "testimonial-grid":
      case "sports-breakdown":
      case "facility-tour":
      case "methodology":
      case "equipment":
      case "safety":
      case "contact-form":
      case "contact-info":
      case "faq":
        return (
          <div
            style={{ padding: "4rem 0", textAlign: "center", color: "white" }}
          >
            <h3>Section: {section.type}</h3>
            <p style={{ color: "#a3e635" }}>
              Coming soon - Component in development
            </p>
          </div>
        );

      default:
        console.warn(`Unknown section type: ${(section as any).type}`);
        return null;
    }
  };

  // Hero, CTA, page-hero, and about sections manage their own containers, skip SectionShell
  if (
    section.type === "hero" ||
    section.type === "cta" ||
    section.type === "page-hero" ||
    section.type === "about"
  ) {
    return <div id={section.id}>{renderSectionContent()}</div>;
  }

  // All other sections use SectionShell for consistent styling
  return (
    <SectionShell
      id={section.id}
      bgVariant={bgVariant}
      spacing={spacing}
      animationPreset={animationPreset}
    >
      {renderSectionContent()}
    </SectionShell>
  );
}
