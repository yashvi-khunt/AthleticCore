import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata for Athletes page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("athletes");
}

export default function AthletesPage() {
  // Get sections for Athletes page
  const sections = getPageSections("athletes");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
