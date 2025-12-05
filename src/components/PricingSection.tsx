import Link from "next/link";
import type { PricingPlan } from "@/types/content";

interface Props {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
}

export default function PricingSection({
  plans,
  title = "Flexible Pricing",
  subtitle = "Choose the plan that fits your goals and schedule.",
}: Props) {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-4">
            <span className="text-sm font-bold uppercase tracking-wider text-lime-400">
              Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard(plan: PricingPlan) {
  return (
    <div
      className={`bg-white rounded-2xl p-8 hover:shadow-xl transition-all ${
        plan.featured
          ? "border-2 border-lime-400 shadow-lg relative -mt-4 md:mt-0 md:scale-105"
          : "border border-slate-200"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block px-4 py-1 bg-lime-400 text-black text-xs font-bold rounded-full uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
        <p className="text-sm text-slate-600">{plan.description}</p>
      </div>

      <div className="text-center mb-6 pb-6 border-b border-slate-200">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-slate-900">
            {plan.price}
          </span>
          {plan.interval && (
            <span className="text-slate-500">/{plan.interval}</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg
              className="w-5 h-5 text-lime-400 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.buttonLink || "#contact"}
        className={`block text-center px-6 py-3 rounded-full font-bold transition-all ${
          plan.featured
            ? "bg-lime-400 text-black hover:bg-lime-500"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {plan.buttonText || "Get Started"}
      </Link>
    </div>
  );
}
