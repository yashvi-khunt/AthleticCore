import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Hero as HeroType } from "@/types/content";

export default function Hero({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
  showStats = false,
  stats = [],
}: HeroType) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {title.split(" ").map((word, index) => {
              const isHighlight =
                word.includes("CORE") || word.includes("ATHLETE");
              return (
                <span key={index}>
                  {isHighlight ? (
                    <span className="text-lime">{word}</span>
                  ) : (
                    word
                  )}
                  {index < title.split(" ").length - 1 ? " " : ""}
                </span>
              );
            })}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-lime text-black text-base font-bold rounded-full hover:bg-lime-dark transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {primaryButton.text}
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white text-base font-bold rounded-full hover:bg-white hover:text-black transition-all hover:-translate-y-1"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>

          {/* Stats */}
          {showStats && stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl md:text-4xl font-black text-lime mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
