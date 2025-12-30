"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

interface AboutHeroProps {
  title: string;
  subtitle: string;
}

export default function AboutHero({ title, subtitle }: AboutHeroProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "background.default",
        pt: 10,
      }}
    >
      {/* Fluid Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "60vw",
          height: "60vw",
          bgcolor: "primary.main",
          opacity: 0.15,
          filter: "blur(80px)",
          animation: `${morph} 15s ease-in-out infinite, ${float} 20s ease-in-out infinite`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          bgcolor: "secondary.main",
          opacity: 0.3,
          filter: "blur(60px)",
          animation: `${morph} 12s ease-in-out infinite reverse, ${float} 25s ease-in-out infinite reverse`,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3.5rem", md: "6rem", lg: "8rem" },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            mb: 4,
            background: `linear-gradient(180deg, ${theme.palette.common.white} 0%, ${theme.palette.grey[400]} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.8rem" },
            fontWeight: 300,
            color: "text.secondary",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
