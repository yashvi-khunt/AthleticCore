import { getPageSections, getPageMetadata } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";
import type { Metadata } from "next";

// Generate metadata for Contact page
export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("contact");
}

export default function ContactPage() {
  // Get sections for Contact page
  const sections = getPageSections("contact");

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
