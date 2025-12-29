import { getEnabledSections } from "@/lib/content";
import SectionRenderer from "@/components/SectionRenderer";

export default function HomePage() {
  // Get all enabled sections sorted by order
  const sections = getEnabledSections();

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
}
