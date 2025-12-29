// src/components/layouts/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import type { BreadcrumbItem } from "@/types/pages";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs - Navigation breadcrumbs for internal pages
 *
 * Shows current page location in site hierarchy
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <Box
      sx={{
        bgcolor: "#000000",
        borderBottom: "1px solid rgba(163, 230, 53, 0.1)",
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <Box
                key={item.href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {isLast ? (
                  <Typography
                    variant="body2"
                    sx={{
                      color: "primary.main",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <>
                    <Link href={item.href} style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.875rem",
                          transition: "color 0.2s",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                    <NavigateNextIcon
                      sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                      }}
                    />
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
