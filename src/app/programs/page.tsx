import Section from "@/components/Section";
import { getProgramsSection } from "@/lib/content";

export default function Programs() {
  const programs = getProgramsSection();
  return (
    <div className="py-12">
      {programs ? (
        <Section section={programs} />
      ) : (
        <p className="container">No programs found.</p>
      )}
    </div>
  );
}
