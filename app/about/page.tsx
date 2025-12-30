import { getPageContent, getPageMetadata } from "@/lib/content";
import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import MissionVision from "./components/MissionVision";
import CoreValues from "./components/CoreValues";
import Differentiators from "./components/Differentiators";
import TeamSection from "./components/TeamSection";
import CTASection from "@/components/CTASection";

// Generate metadata for About page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about");
}

export default function AboutPage() {
  // Get content for About page
  const heroContent = getPageContent("about", "aboutHero");
  const storyContent = getPageContent("about", "story");
  const philosophyContent = getPageContent("about", "philosophy");
  const teamContent = getPageContent("about", "team");
  const ctaContent = getPageContent("about", "cta");

  return (
    <main>
      {heroContent && (
        <AboutHero
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          videoId={heroContent.videoId}
        />
      )}

      {storyContent && (
        <MissionVision
          title={storyContent.title}
          paragraphs={storyContent.paragraphs}
          images={storyContent.images}
        />
      )}

      {philosophyContent && (
        <CoreValues
          title={philosophyContent.title}
          subtitle={philosophyContent.subtitle}
          items={philosophyContent.items}
        />
      )}

      <Differentiators />

      {teamContent && (
        <TeamSection
          title={teamContent.title}
          subtitle={teamContent.subtitle}
          members={teamContent.members}
        />
      )}

      {ctaContent && (
        <CTASection
          title={ctaContent.title}
          subtitle={ctaContent.subtitle}
          primaryButtonText={ctaContent.primaryButton?.text}
          primaryButtonLink={ctaContent.primaryButton?.href}
          secondaryButtonText={ctaContent.secondaryButton?.text}
          secondaryButtonLink={ctaContent.secondaryButton?.href}
        />
      )}
    </main>
  );
}
