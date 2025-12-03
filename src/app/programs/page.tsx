import Section from "@/components/Section";
import { SiteContent } from "@/types/site";
import path from "path";
import fs from "fs";

export default async function Programs() {
  const filePath = path.join(process.cwd(), "src/data/site-content.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const content: SiteContent = JSON.parse(raw);
  const programs = content.sections.find((s) => s.id === "programs");

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
