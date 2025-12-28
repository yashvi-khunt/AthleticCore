"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import type { Hero as HeroType } from "@/types/content";

export default function Hero({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
  showStats = false,
  stats = [],
}: HeroType) {
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    // Start unblur effect when logo stops at navbar
    const timer = setTimeout(() => {
      setIsRevealing(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pt: "80px",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          filter: isRevealing ? "blur(0px)" : "blur(20px)",
          clipPath: isRevealing
            ? "circle(150% at 0% 0%)"
            : "circle(0% at 0% 0%)",
          transition: "filter 1s ease-out, clip-path 1s ease-out",
        }}
      >
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <Box className="hero-overlay" sx={{ position: "absolute", inset: 0 }} />
      </Box>

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 10,
          py: 10,
          filter: isRevealing ? "blur(0px)" : "blur(15px)",
          opacity: isRevealing ? 1 : 0,
          transition: "filter 1s ease-out 0.2s, opacity 1s ease-out 0.2s",
        }}
      >
        <Box sx={{ maxWidth: "896px" }}>
          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", md: "3.75rem", lg: "4.5rem" },
              fontWeight: 900,
              color: "white",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            {title.split(" ").map((word, index) => {
              const isHighlight =
                word.includes("CORE") || word.includes("ATHLETE");
              return (
                <React.Fragment key={index}>
                  <Box
                    component="span"
                    sx={{ color: isHighlight ? "primary.main" : "inherit" }}
                  >
                    {word}
                  </Box>
                  {index < title.split(" ").length - 1 ? " " : ""}
                </React.Fragment>
              );
            })}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              color: "rgba(255, 255, 255, 0.9)",
              mb: 4,
              maxWidth: "672px",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 6 }}>
            <Link href={primaryButton.href} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  color: "black",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  },
                }}
              >
                {primaryButton.text}
              </Button>
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    borderWidth: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                      borderColor: "white",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {secondaryButton.text}
                </Button>
              </Link>
            )}
          </Box>

          {/* Stats */}
          {showStats && stats && stats.length > 0 && (
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(8px)",
                      borderRadius: 4,
                      p: 3,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.875rem", md: "2.25rem" },
                        fontWeight: 900,
                        color: "primary.main",
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 4,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: "24px",
            height: "40px",
            borderRadius: "50px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "6px",
              height: "12px",
              bgcolor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50px",
              animation: "bounce 1s infinite",
              "@keyframes bounce": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(8px)",
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
