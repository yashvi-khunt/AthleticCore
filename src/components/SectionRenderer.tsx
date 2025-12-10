// src/components/SectionRenderer.tsx
"use client";

import { type SectionConfig } from "@/types/content";
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
} from "@/lib/content";

interface SectionRendererProps {
  section: SectionConfig;
}

/**
 * SectionRenderer - Dynamically renders sections based on configuration
 *
 * This component reads the section type and custom props to render
 * the appropriate section component. Custom props from the section
 * configuration are merged with default data.
 */
export default function SectionRenderer({ section }: SectionRendererProps) {
  // Return null if section is disabled
  if (!section.enabled) {
    return null;
  }

  // Get custom props if provided
  const customProps = section.customProps || {};

  // Render the appropriate component based on section type
  switch (section.type) {
    case "hero": {
      const hero = getHero();
      return (
        <div id={section.id}>
          <Hero {...hero} {...customProps} />
        </div>
      );
    }

    case "programs": {
      const programs = getPrograms();
      return (
        <div id={section.id}>
          <ProgramsSection programs={programs} {...customProps} />
        </div>
      );
    }

    case "about": {
      const about = getAbout();
      return (
        <div id={section.id}>
          <AboutSection {...about} {...customProps} />
        </div>
      );
    }

    case "services": {
      const services = getServices();
      return (
        <div id={section.id}>
          <ServicesSection services={services} {...customProps} />
        </div>
      );
    }

    case "pricing": {
      const pricing = getPricing();
      return (
        <div id={section.id}>
          <PricingSection plans={pricing} {...customProps} />
        </div>
      );
    }

    case "testimonials": {
      const testimonials = getTestimonials();
      return (
        <div id={section.id}>
          <TestimonialsSection testimonials={testimonials} {...customProps} />
        </div>
      );
    }

    case "sports": {
      const sports = getSports();
      return (
        <div id={section.id}>
          <SportsSection sports={sports} {...customProps} />
        </div>
      );
    }

    case "cta": {
      return (
        <div id={section.id}>
          <CTASection {...customProps} />
        </div>
      );
    }

    case "contact": {
      const contact = getContactInfo();
      return (
        <div id={section.id}>
          <ContactSection contact={contact} {...customProps} />
        </div>
      );
    }

    default:
      console.warn(`Unknown section type: ${section.type}`);
      return null;
  }
}
