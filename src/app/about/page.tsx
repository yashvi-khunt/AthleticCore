import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      title: "Creating",
      description:
        "We create opportunities for athletes to reach their full potential through innovative training methods.",
      icon: "🎯",
    },
    {
      title: "Opportunities",
      description:
        "Every session is an opportunity to improve, learn, and grow as an athlete and individual.",
      icon: "🚀",
    },
    {
      title: "Realigning",
      description:
        "We help athletes realign their focus on what truly matters for performance excellence.",
      icon: "🔄",
    },
    {
      title: "Expectations",
      description:
        "Setting and exceeding expectations through science-based training and proven results.",
      icon: "⭐",
    },
  ];

  const team = [
    {
      name: "Lead Coach",
      role: "Athletic Performance Specialist",
      bio: "Elite-level training experience across multiple sports with a focus on youth development.",
    },
    {
      name: "Strength Coach",
      role: "Strength & Conditioning Expert",
      bio: "Certified professional with extensive experience in power development and injury prevention.",
    },
    {
      name: "Skills Coach",
      role: "Sport-Specific Training",
      bio: "Former multi-sport athlete specializing in technique refinement and tactical development.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://source.unsplash.com/1600x900/?fitness,training,athlete"
            alt="About CORE ATHLETE"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-display mb-6">
              About <span className="text-lime">CORE</span> ATHLETE
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We believe every athlete has untapped potential. Our mission is to
              unlock that potential through science-based training, personalized
              coaching, and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* C.O.R.E. Philosophy */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-heading-1 mb-4">
              The <span className="text-lime">C.O.R.E.</span> Philosophy
            </h2>
            <p className="text-lg text-slate-600">
              Our name isn&apos;t just branding—it&apos;s our foundation.
              C.O.R.E. represents the four pillars that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all group"
              >
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lime-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-1 mb-6">
                Our <span className="text-lime">Story</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  CORE ATHLETE was founded with a simple mission: to provide
                  athletes of all levels with access to elite training methods
                  that were once reserved for professional sports programs.
                </p>
                <p>
                  Our approach combines the latest sports science research with
                  practical, sport-specific training that delivers real results.
                  We&apos;ve worked with athletes from youth leagues to
                  collegiate programs, helping them achieve their performance
                  goals.
                </p>
                <p>
                  What sets us apart is our commitment to long-term athletic
                  development. We don&apos;t just train athletes—we educate them
                  on proper movement mechanics, injury prevention, and the
                  mental aspects of competition.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://source.unsplash.com/1600x900/?fitness,training,facility"
                alt="CORE ATHLETE training facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-heading-1 mb-4">
              Meet Our <span className="text-lime">Team</span>
            </h2>
            <p className="text-lg text-slate-600">
              Experienced coaches dedicated to your athletic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all"
              >
                <div className="relative h-64 bg-slate-200">
                  <Image
                    src="https://source.unsplash.com/800x800/?coach,trainer,portrait"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-lime-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-lime-400 font-semibold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-heading-1 mb-6">
            Ready to Start Your <span className="text-lime">Journey?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join our community of dedicated athletes and experience the
            difference that professional training makes.
          </p>
          <a href="/contact" className="btn btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </>
  );
}
