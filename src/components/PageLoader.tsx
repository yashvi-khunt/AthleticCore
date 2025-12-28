"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

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
          opacity:
            animationStage === "initial"
              ? 0
              : animationStage === "complete"
              ? 0
              : 1,
          scale:
            animationStage === "initial"
              ? 0.5
              : animationStage === "center"
              ? 3
              : 1,
          top: animationStage === "transition" ? "1.5rem" : "50%",
          left: animationStage === "transition" ? "2rem" : "50%",
          transform:
            animationStage === "transition" ? "none" : "translate(-50%, -50%)",
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
