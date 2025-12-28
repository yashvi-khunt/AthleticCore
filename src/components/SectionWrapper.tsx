// src/components/SectionWrapper.tsx
"use client";

import { type ReactNode } from "react";
import { Box } from "@mui/material";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "gray" | "dark";
  spacing?: "none" | "small" | "medium" | "large";
}

const backgroundStyles = {
  default: { bgcolor: "white" },
  gray: { bgcolor: "grey.50" },
  dark: { bgcolor: "grey.900", color: "white" },
};

const spacingStyles = {
  none: {},
  small: { py: { xs: 4, md: 6 } },
  medium: { py: { xs: 6, md: 8, lg: 10 } },
  large: { py: { xs: 8, md: 10, lg: 12 } },
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  background = "default",
  spacing = "medium",
}: SectionWrapperProps) {
  return (
    <Box
      id={id}
      component="section"
      className={className}
      sx={{
        ...backgroundStyles[background],
        ...spacingStyles[spacing],
      }}
    >
      {children}
    </Box>
  );
}
