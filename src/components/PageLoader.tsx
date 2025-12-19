"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationStage, setAnimationStage] = useState<
    "initial" | "center" | "transition" | "complete"
  >("initial");

  useEffect(() => {
    // Animation sequence - faster timings
    const showLogoTimer = setTimeout(() => {
      setAnimationStage("center");
    }, 400);

    const startTransitionTimer = setTimeout(() => {
      setAnimationStage("transition");
    }, 2000);

    const completeTimer = setTimeout(() => {
      setAnimationStage("complete");
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(showLogoTimer);
      clearTimeout(startTransitionTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-slate-950 transition-opacity duration-1000 ${
        animationStage === "complete"
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      <div
        className={`absolute ${
          animationStage === "initial"
            ? "opacity-0 scale-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180"
            : animationStage === "center"
            ? "opacity-100 scale-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0"
            : animationStage === "transition"
            ? "opacity-100 scale-100"
            : "opacity-0"
        }`}
        style={{
          transition: "all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          ...(animationStage === "transition" && {
            top: "1.5rem",
            left: "2rem",
            transform: "none",
          }),
        }}
      >
        <div className="relative w-64 h-16">
          <Image
            src="/images/logos/full-logo-white.png"
            alt="Athletic Core"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
