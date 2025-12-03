import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  image?: string;
};

export default function Hero({
  title,
  subtitle,
  buttonText = "Get started",
  image = "/images/hero.jpg",
}: Props) {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-(--color-text-secondary)">
              {subtitle}
            </p>
          )}
          <div className="mt-6">
            <a
              href="#programs"
              className="inline-block px-6 py-3 rounded-lg font-medium shadow"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
            <Image
              src={image}
              alt="Hero"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
