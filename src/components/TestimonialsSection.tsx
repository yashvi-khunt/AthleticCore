import Image from "next/image";
import type { Testimonial } from "@/types/content";

interface Props {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials,
  title = "What Athletes Say",
  subtitle = "Hear from athletes who have transformed their performance with CORE ATHLETE.",
}: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-4">
            <span className="text-sm font-bold uppercase tracking-wider text-lime-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  sport,
  quote,
  image,
  rating,
}: Testimonial) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-lime-400" : "text-slate-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="text-slate-700 mb-6 leading-relaxed">&quot;{quote}&quot;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden fshrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          {role && <div className="text-sm text-slate-600">{role}</div>}
          {sport && <div className="text-sm text-lime-600">{sport}</div>}
        </div>
      </div>
    </div>
  );
}
