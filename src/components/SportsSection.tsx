import Image from "next/image";
import type { Sport } from "@/types/content";

interface Props {
  sports: Sport[];
  title?: string;
  subtitle?: string;
}

export default function SportsSection({
  sports,
  title = "Sports We Train",
  subtitle = "Specialized training programs for athletes across multiple disciplines",
}: Props) {
  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600">{subtitle}</p>
      </div>

      {/* Sports Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sports.map((sport) => (
          <SportCard key={sport.id} {...sport} />
        ))}
      </div>
    </div>
  );
}

function SportCard({ image, name }: Sport) {
  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-200 hover:border-lime-400 group">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
      <div className="p-4 text-center">
        <div className="text-sm font-semibold text-slate-700 group-hover:text-lime-400 transition-colors">
          {name}
        </div>
      </div>
    </div>
  );
}
