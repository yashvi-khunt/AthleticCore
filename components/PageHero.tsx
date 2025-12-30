// src/components/sections/PageHero.tsx
"use client";

import { Box, Container, Typography } from "@mui/material";
import type { PageHero as PageHeroType } from "@/types/pages";
import YouTubeBackground from "@/components/YouTubeBackground";

/**
 * PageHero - Minimal hero component for internal pages
 *
 * Different from main Hero - simpler, cleaner, no video backgrounds
 */
export default function PageHero({
  title,
  subtitle,
  variant = "minimal",
  backgroundImage,
  videoId,
  stats,
}: PageHeroType) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#000000",
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        ...(backgroundImage &&
          !videoId && {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
      }}
    >
      {videoId && <YouTubeBackground videoId={videoId} opacity={0.3} />}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontWeight: 900,
              color: "white",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: "text.secondary",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
          )}

          {variant === "stats-heavy" && stats && stats.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 4,
                mt: 6,
              }}
            >
              {stats.map((stat, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 900,
                      color: "primary.main",
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.875rem",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
