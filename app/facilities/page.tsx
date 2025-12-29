import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata for Facilities page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("facilities");
}

export default function FacilitiesPage() {
  // Get sections for Facilities page
  const sections = getPageSections("facilities");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
