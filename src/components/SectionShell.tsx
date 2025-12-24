// src/components/SectionShell.tsx
"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

export type SectionBgVariant = "black" | "ctaDefault" | "hero";
export type SectionAnimationPreset = "none" | "fadeIn" | "slideUp" | "parallax";
export type SectionSpacing = "none" | "small" | "medium" | "large";

interface SectionShellProps {
  /** Unique section ID for anchor links */
  id?: string;
  /** Section content */
  children: ReactNode;
  /** Background variant - CTA sections use 'ctaDefault', most use 'black' */
  bgVariant?: SectionBgVariant;
  /** Spacing preset */
  spacing?: SectionSpacing;
  /** Animation preset for section-level effects */
  animationPreset?: SectionAnimationPreset;
  /** Additional CSS classes */
  className?: string;
  /** Custom inline styles */
  style?: React.CSSProperties;
}

const bgVariantClasses: Record<SectionBgVariant, string> = {
  black: "bg-black",
  ctaDefault: "", // CTA section handles its own background
  hero: "", // Hero section handles its own background (image-based)
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  small: "py-8 md:py-12",
  medium: "py-12 md:py-16 lg:py-20",
  large: "py-16 md:py-20 lg:py-24",
};

/**
 * SectionShell - Centralized section container for consistent layout
 *
 * This component provides:
 * - Consistent section backgrounds via bgVariant tokens
 * - Standardized padding/spacing
 * - Section-level scroll animations (no text animations)
 * - Clean separation of container vs content concerns
 *
 * CMS Conversion:
 * When converting to a dynamic CMS/admin system, this component will receive
 * all its configuration from the database/API (bgVariant, spacing, animationPreset)
 * while the actual section content comes from individual section components.
 */
export default function SectionShell({
  id,
  children,
  bgVariant = "black",
  spacing = "medium",
  animationPreset = "fadeIn",
  className = "",
  style = {},
}: SectionShellProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Section-level scroll animation
  useEffect(() => {
    if (animationPreset === "none") return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Fade in when section enters viewport
      if (animationPreset === "fadeIn" || animationPreset === "slideUp") {
        const inView = rect.top < windowHeight * 0.8 && rect.bottom > 0;
        setIsVisible(inView);
      }

      // Parallax effect
      if (animationPreset === "parallax") {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollPosition = window.scrollY;
        const relativeScroll = scrollPosition - sectionTop;
        setScrollOffset(relativeScroll * 0.3);
        setIsVisible(true);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationPreset]);

  // Animation classes
  const getAnimationClasses = () => {
    if (animationPreset === "none") return "";

    const base = "transition-all duration-700 ease-out";

    if (animationPreset === "fadeIn") {
      return `${base} ${isVisible ? "opacity-100" : "opacity-0"}`;
    }

    if (animationPreset === "slideUp") {
      return `${base} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`;
    }

    return "";
  };

  const sectionStyle =
    animationPreset === "parallax"
      ? { ...style, transform: `translateY(${scrollOffset}px)` }
      : style;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`${bgVariantClasses[bgVariant]} ${
        spacingClasses[spacing]
      } ${getAnimationClasses()} ${className}`}
      style={sectionStyle}
    >
      {children}
    </section>
  );
}
