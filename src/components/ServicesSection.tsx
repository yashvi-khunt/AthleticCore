import type { Service } from "@/types/content";

interface Props {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  services,
  title = "What We Specialise In",
  subtitle,
}: Props) {
  return (
    <div className="container mx-auto px-4 text-white">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-block px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-4">
          <span className="text-sm font-bold uppercase tracking-wider text-lime-400">
            Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-white/70">{subtitle}</p>}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: Service) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all hover:-translate-y-1 border border-slate-700 hover:border-lime-400">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
