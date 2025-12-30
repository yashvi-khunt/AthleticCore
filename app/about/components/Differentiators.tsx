"use client";

import { Box, Container, Typography, Grid, useTheme } from "@mui/material";

const differentiators = [
  {
    title: "Science-Backed",
    description:
      "Every program is built on the latest sports science research.",
    icon: "🧬",
  },
  {
    title: "Elite Coaching",
    description: "Learn from coaches who have trained champions.",
    icon: "🏆",
  },
  {
    title: "Data-Driven",
    description: "We measure everything to ensure you are progressing.",
    icon: "📊",
  },
  {
    title: "Holistic Approach",
    description: "Training, nutrition, and recovery all in one place.",
    icon: "🔄",
  },
];

export default function Differentiators() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 15,
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "100%",
          background: `radial-gradient(circle at center, ${theme.palette.secondary.main} 0%, transparent 70%)`,
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 3 }}>
            Why Athletic Core?
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "text.secondary", maxWidth: "700px", mx: "auto" }}
          >
            We don&apos;t just train; we engineer performance.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {differentiators.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: "50px 50px 0 50px",
                  bgcolor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "primary.main",
                    transform: "translateY(-10px) rotate(2deg)",
                    "& .icon": { transform: "scale(1.2)" },
                    "& .title, & .desc": { color: "common.black" },
                  },
                }}
              >
                <Typography
                  className="icon"
                  sx={{
                    fontSize: "4rem",
                    mb: 2,
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {item.icon}
                </Typography>
                <Typography
                  className="title"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "common.white",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="desc"
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
