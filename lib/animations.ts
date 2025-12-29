// src/lib/animations.ts
"use client";

/**
 * Central animation preset registry for athletic motion system
 *
 * Usage: Apply to section-level animations via SectionShell
 * Future: Can be extended with Framer Motion for complex animations
 */

export type AnimationPreset =
  | "none"
  | "fadeIn"
  | "slideUp"
  | "parallax"
  | "slideInLeft"
  | "slideInRight"
  | "scaleIn"
  | "staggerChildren";

/**
 * Animation configuration for each preset
 * Can be used with Framer Motion or CSS animations
 */
export const animationPresets = {
  /**
   * No animation
   */
  none: {},

  /**
   * Fade in animation - default for most sections
   */
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  /**
   * Slide up with fade - for content-heavy sections
   */
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  /**
   * Parallax effect - handled separately in SectionShell
   */
  parallax: {
    // Custom implementation in SectionShell component
  },

  /**
   * Slide in from left - for storytelling sections
   */
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  /**
   * Slide in from right - for alternating content
   */
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },

  /**
   * Scale in - for featured content and cards
   */
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  /**
   * Stagger children - for grid layouts
   */
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

/**
 * Timing constants for consistent animations
 */
export const animationTiming = {
  standard: 800, // ms - standard section entrance
  quick: 300, // ms - hover interactions
  slow: 1200, // ms - cinematic effects
  parallaxSpeed: 0.3, // multiplier for scroll speed
} as const;

/**
 * Easing functions for athletic motion
 */
export const animationEasing = {
  standard: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-out
  athletic: "cubic-bezier(0.4, 0, 0.2, 1)", // snappy, responsive
  cinematic: "cubic-bezier(0.4, 0, 0.6, 1)", // smooth, elegant
  elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // bounce effect
} as const;

/**
 * Check if user prefers reduced motion
 * Should be called before applying animations
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Get animation preset with reduced motion support
 * Returns 'none' if user prefers reduced motion
 */
export function getAnimation(preset: AnimationPreset): AnimationPreset {
  if (prefersReducedMotion()) {
    return "none";
  }
  return preset;
}

/**
 * CSS class names for animation presets
 * Alternative to JS-based animations
 */
export const animationClasses = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
} as const;

/**
 * Scroll-based animation observer
 * Triggers animations when element enters viewport
 */
export class ScrollAnimationObserver {
  private observer: IntersectionObserver | null = null;

  constructor(
    callback: (entry: IntersectionObserverEntry) => void,
    options?: IntersectionObserverInit
  ) {
    if (typeof window === "undefined") return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
        ...options,
      }
    );
  }

  observe(element: Element) {
    this.observer?.observe(element);
  }

  unobserve(element: Element) {
    this.observer?.unobserve(element);
  }

  disconnect() {
    this.observer?.disconnect();
  }
}

/**
 * Parallax scroll handler
 * Returns scroll offset for parallax effect
 */
export function calculateParallaxOffset(
  element: HTMLElement,
  speed: number = animationTiming.parallaxSpeed
): number {
  if (typeof window === "undefined") return 0;

  const rect = element.getBoundingClientRect();
  const scrollPosition = window.scrollY;
  const elementTop = rect.top + scrollPosition;
  const relativeScroll = scrollPosition - elementTop;

  return relativeScroll * speed;
}

/**
 * Stagger animation delay calculator
 * Returns delay in ms for nth child
 */
export function calculateStaggerDelay(
  index: number,
  delayIncrement: number = 100
): number {
  return index * delayIncrement;
}
