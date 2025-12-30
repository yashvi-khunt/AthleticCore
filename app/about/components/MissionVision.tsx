"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

interface MissionVisionProps {
  title: string;
  paragraphs: string[];
  images: string[];
}

export default function MissionVision({
  title,
  paragraphs,
  images,
}: MissionVisionProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 15, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  zIndex: 0,
                  opacity: 0.5,
                },
              }}
            >
              <Box
                component="img"
                src={images[0]}
                alt="Mission"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  position: "relative",
                  zIndex: 1,
                  filter: "grayscale(20%) contrast(110%)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    filter: "grayscale(0%) contrast(100%)",
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 800,
                textTransform: "uppercase",
                color: "primary.main",
              }}
            >
              Mission
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 3, lineHeight: 1.6, fontWeight: 400 }}
            >
              {paragraphs[0]}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={8}
          alignItems="center"
          sx={{ mt: 15, flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 800,
                textTransform: "uppercase",
                color: "common.white",
                textAlign: { xs: "left", md: "right" },
              }}
            >
              Vision
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                fontWeight: 400,
                textAlign: { xs: "left", md: "right" },
                color: "text.secondary",
              }}
            >
              {paragraphs[1] || paragraphs[0]}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${theme.palette.secondary.light}`,
                  borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                  zIndex: 0,
                  opacity: 0.5,
                },
              }}
            >
              <Box
                component="img"
                src={images[1] || images[0]}
                alt="Vision"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                  position: "relative",
                  zIndex: 1,
                  filter: "grayscale(20%) contrast(110%)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    filter: "grayscale(0%) contrast(100%)",
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
