import ProgramCard from "./ProgramCard";
import type { Program } from "@/types/content";

interface Props {
  programs: Program[];
  title?: string;
  description?: string;
}

export default function ProgramsSection({
  programs,
  title = "Training Programs",
  description = "Custom programs built around your goals, sport, and lifestyle.",
}: Props) {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} item={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
