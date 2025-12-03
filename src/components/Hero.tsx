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
    <section className="hero">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="headline">{title}</h1>
          {subtitle && <p className="subhead">{subtitle}</p>}
          <div className="mt-6">
            <a href="#programs" className="btn-primary">
              {buttonText}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg aspect-4/3">
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
