"use client";

import { Box, Container, Typography } from "@mui/material";

interface Phase {
  number: string;
  title: string;
  description: string;
  duration: string;
}

interface ProgramMethodologyContent {
  title: string;
  subtitle?: string;
  phases: Phase[];
}

interface Props {
  content: ProgramMethodologyContent;
}

export default function ProgramMethodology({ content }: Props) {
  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.25rem", md: "3rem" },
            fontWeight: 900,
            color: "white",
            mb: 2,
          }}
        >
          {content.title.split(" ").map((word, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                color:
                  word === "Methodology" || word === "Training"
                    ? "primary.main"
                    : "white",
                mr: 0.5,
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>
        {content.subtitle && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
            }}
          >
            {content.subtitle}
          </Typography>
        )}
      </Box>

      {/* Phases Timeline */}
      <Box sx={{ maxWidth: "900px", mx: "auto" }}>
        {content.phases.map((phase, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: { xs: 3, md: 4 },
              mb: index !== content.phases.length - 1 ? 6 : 0,
              position: "relative",
              "&::after":
                index !== content.phases.length - 1
                  ? {
                      content: '""',
                      position: "absolute",
                      left: { xs: "31px", md: "39px" },
                      top: "80px",
                      bottom: "-48px",
                      width: "2px",
                      bgcolor: "rgba(163, 230, 53, 0.2)",
                    }
                  : {},
            }}
          >
            {/* Number Circle */}
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: "64px", md: "80px" },
                height: { xs: "64px", md: "80px" },
                borderRadius: "50%",
                bgcolor: "rgba(163, 230, 53, 0.1)",
                border: "2px solid",
                borderColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                fontWeight: 900,
                color: "primary.main",
                position: "relative",
                zIndex: 1,
              }}
            >
              {phase.number}
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, pt: 1 }}>
              {/* Duration Badge */}
              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 0.5,
                  mb: 1.5,
                  bgcolor: "rgba(163, 230, 53, 0.1)",
                  border: "1px solid rgba(163, 230, 53, 0.2)",
                  borderRadius: "50px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "primary.main",
                }}
              >
                {phase.duration}
              </Box>

              {/* Title */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 700,
                  color: "white",
                  mb: 2,
                }}
              >
                {phase.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.7,
                }}
              >
                {phase.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
