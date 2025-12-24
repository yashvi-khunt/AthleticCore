// src/components/SectionRenderer.tsx
"use client";

import { type SectionConfig } from "@/types/content";
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
} from "@/lib/content";

interface SectionRendererProps {
  section: SectionConfig;
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
  const {
    bgVariant = "black",
    animationPreset = "fadeIn",
    spacing = "large",
  } = section;

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

      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };

  // Hero and CTA sections manage their own containers, skip SectionShell
  if (section.type === "hero" || section.type === "cta") {
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
