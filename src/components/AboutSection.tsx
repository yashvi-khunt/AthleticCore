"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import type { About } from "@/types/content";

export default function AboutSection({
  title,
  subtitle,
  description,
  image,
  philosophy,
}: About) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll position relative to section
      const sectionScrollStart = sectionTop - windowHeight;
      const sectionScrollEnd = sectionTop + sectionHeight;

      // Only apply parallax when section is in viewport
      if (
        scrollPosition > sectionScrollStart &&
        scrollPosition < sectionScrollEnd
      ) {
        const relativeScroll = scrollPosition - sectionScrollStart;
        setOffsetY(relativeScroll * 0.3); // Adjust 0.3 for parallax speed
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className=" text-white overflow-hidden">
      {/* Background Logo with Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[140%] -top-[50%]"
          style={{
            transform: `translateY(${offsetY}px)`,
            willChange: "transform",
          }}
        >
          <Image
            src="/AthleticCore/images/aboutBackground.png"
            alt="CORE ATHLETE Logo"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt="Athletic training"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full">
              <span className="text-sm font-bold uppercase tracking-wider text-lime-400">
                Our Philosophy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              {title.split(" ").map((word, index) => {
                const isHighlight = word.includes("C.O.R.E");
                return (
                  <span key={index}>
                    {isHighlight ? (
                      <span className="text-lime-400">{word}</span>
                    ) : (
                      word
                    )}
                    {index < title.split(" ").length - 1 ? " " : ""}
                  </span>
                );
              })}
            </h2>

            {description.map((para, i) => (
              <p key={i} className="text-lg text-white/80 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="space-y-4 mt-8">
              {philosophy?.map((item) => (
                <PhilosophyItem key={item.letter} {...item} />
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-lime-400 text-black text-base font-bold rounded-full hover:bg-lime-500 transition-colors shadow-lg mt-4"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhilosophyItem({
  letter,
  word,
  description,
}: {
  letter: string;
  word: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
        <span className="text-xl font-black text-black">{letter}</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{word}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
