import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata for Programs page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("programs");
}

export default function ProgramsPage() {
  // Get sections for Programs page
  const sections = getPageSections("programs");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
