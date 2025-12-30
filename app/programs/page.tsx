import {
  getPageSections,
  getPageContent,
  getPageMetadata,
} from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import ProgramsHero from "./components/ProgramsHero";
import type { Metadata } from "next";

// Generate metadata for Programs page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("programs");
}

export default function ProgramsPage() {
  // Get all sections
  const sections = getPageSections("programs");

  // Get hero content specifically for the custom hero component
  const heroContent = getPageContent("programs", "programsHero");

  return (
    <main>
      {/* Custom Hero Section */}
      {heroContent && (
        <ProgramsHero
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          filters={heroContent.filters}
          videoId={heroContent.videoId}
        />
      )}

      {/* Render other sections using the standard renderer */}
      {sections
        .filter((section) => section.id !== "programs-hero")
        .map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
    </main>
  );
}
