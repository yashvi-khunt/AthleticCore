import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata for About page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about");
}

export default function AboutPage() {
  // Get sections for About page
  const sections = getPageSections("about");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
