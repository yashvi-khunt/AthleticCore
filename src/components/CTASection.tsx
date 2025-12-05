import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title = "Ready to Elevate Your Game?",
  subtitle = "Join hundreds of athletes who have transformed their performance with CORE ATHLETE training.",
  primaryButtonText = "Get Started Today",
  primaryButtonLink = "#contact",
  secondaryButtonText = "View Programs",
  secondaryButtonLink = "#programs",
}: Props) {
  return (
    <section className="py-20 bg-lime-400 text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-black">{title}</h2>
          <p className="text-xl">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-lime-400 text-base font-bold rounded-full hover:bg-slate-900 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-black text-black text-base font-bold rounded-full hover:bg-black hover:text-lime-400 transition-all hover:-translate-y-1"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
