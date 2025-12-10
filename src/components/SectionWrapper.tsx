// src/components/SectionWrapper.tsx
"use client";

import { type ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "gray" | "dark";
  spacing?: "none" | "small" | "medium" | "large";
}

const backgroundClasses = {
  default: "bg-white",
  gray: "bg-gray-50",
  dark: "bg-gray-900 text-white",
};

const spacingClasses = {
  none: "",
  small: "py-8 md:py-12",
  medium: "py-12 md:py-16 lg:py-20",
  large: "py-16 md:py-20 lg:py-24",
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  background = "default",
  spacing = "medium",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
