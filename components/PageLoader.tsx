"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Box } from "@mui/material";

export default function PageLoader() {
  const pathname = usePathname();

  // Determine if loader should show based on conditions
  const shouldShowLoader = (() => {
    if (typeof window === "undefined") return false; // SSR check
    const isHomepage = pathname === "/";
    if (!isHomepage) return false;

    // Show loader on refresh/direct access, but not on navigation from internal pages
    const referrer = document.referrer;
    const currentHost = window.location.hostname;

    // If referrer is from the same site, it's likely navigation - skip loader
    if (referrer && referrer.includes(currentHost)) {
      return false;
    }

    // Otherwise, show loader (refresh, direct access, or external referrer)
    return true;
  })();

  const [isLoading, setIsLoading] = useState(shouldShowLoader);
  const [animationStage, setAnimationStage] = useState<
    "initial" | "center" | "transition" | "complete"
  >("initial");

  useEffect(() => {
    if (!shouldShowLoader) return;

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
  }, [shouldShowLoader]);

  if (!isLoading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        bgcolor: "grey.900",
        opacity: animationStage === "complete" ? 0 : 1,
        pointerEvents: animationStage === "complete" ? "none" : "auto",
        transition: "opacity 1s",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: animationStage === "transition" ? "1.5rem" : "50%",
          left: animationStage === "transition" ? "2rem" : "50%",
          transform:
            animationStage === "transition"
              ? "scale(0.3)"
              : `translate(-50%, -50%) scale(${
                  animationStage === "initial"
                    ? 0.5
                    : animationStage === "center"
                    ? 3
                    : 1
                })`,
          transformOrigin: "center center",
          opacity:
            animationStage === "initial"
              ? 0
              : animationStage === "complete"
              ? 0
              : 1,
          rotate: animationStage === "initial" ? "180deg" : "0deg",
          transition: "all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        }}
      >
        <Box sx={{ position: "relative", width: "256px", height: "64px" }}>
          <Image
            src="/AthleticCore/images/logos/full-logo-white.png"
            alt="Athletic Core"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
