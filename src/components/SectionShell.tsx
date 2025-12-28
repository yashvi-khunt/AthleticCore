// src/components/SectionShell.tsx
"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

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

const bgVariantStyles: Record<SectionBgVariant, object> = {
  black: { bgcolor: "#000000" }, // Black background
  ctaDefault: { bgcolor: "#000000" }, // Black background
  hero: { bgcolor: "#000000" }, // Black background
};

const spacingStyles: Record<SectionSpacing, object> = {
  none: {},
  small: { py: { xs: 4, md: 6 } },
  medium: { py: { xs: 6, md: 8, lg: 10 } },
  large: { py: { xs: 8, md: 10, lg: 12 } },
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
  const [scrollOffset, setScrollOffset] = useState(0);

  // Section-level scroll animation - only for parallax
  useEffect(() => {
    if (animationPreset !== "parallax") return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Parallax effect
      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      const relativeScroll = scrollPosition - sectionTop;
      setScrollOffset(relativeScroll * 0.3);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationPreset]);

  const sectionStyle =
    animationPreset === "parallax"
      ? { ...style, transform: `translateY(${scrollOffset}px)` }
      : style;

  return (
    <Box
      ref={sectionRef}
      id={id}
      component="section"
      className={className}
      sx={{
        ...bgVariantStyles[bgVariant],
        ...spacingStyles[spacing],
        ...sectionStyle,
      }}
    >
      {children}
    </Box>
  );
}
