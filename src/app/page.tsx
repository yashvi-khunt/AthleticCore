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

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SportsSection from "@/components/SportsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const hero = getHero();
  const about = getAbout();
  const programs = getPrograms();
  const services = getServices();
  const pricing = getPricing();
  const testimonials = getTestimonials();
  const sports = getSports();
  const contact = getContactInfo();

  return (
    <>
      <Hero {...hero} />
      <ProgramsSection programs={programs} />
      <AboutSection {...about} />
      <ServicesSection services={services} />
      <PricingSection plans={pricing} />
      <TestimonialsSection testimonials={testimonials} />
      <SportsSection sports={sports} />
      <CTASection />
      <ContactSection contact={contact} />
    </>
  );
}
