// src/components/layouts/PageLayout.tsx
"use client";

import { type ReactNode } from "react";
import { Box } from "@mui/material";
import type { BreadcrumbItem } from "@/types/pages";
import Breadcrumbs from "./Breadcrumbs";

interface PageLayoutProps {
  children: ReactNode;
  pageType?: "default" | "full-width" | "narrow";
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * PageLayout - Optional wrapper for page-level behaviors
 *
 * Provides:
 * - Consistent page container
 * - Optional breadcrumb navigation
 * - Page-type variants for different layouts
 *
 * Usage is optional - pages can render sections directly
 */
export default function PageLayout({
  children,
  pageType = "default",
  showBreadcrumbs = false,
  breadcrumbs = [],
}: PageLayoutProps) {
  const maxWidth = {
    default: "100%",
    "full-width": "100%",
    narrow: "1200px",
  }[pageType];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#000000",
        maxWidth: maxWidth,
        mx: "auto",
      }}
    >
      {showBreadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} />
      )}
      {children}
    </Box>
  );
}
