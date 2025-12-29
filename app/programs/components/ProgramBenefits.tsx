"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ProgramBenefitsContent {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

interface Props {
  content: ProgramBenefitsContent;
}

export default function ProgramBenefits({ content }: Props) {
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
                  word === "Choose" || word === "Our"
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

      {/* Benefits Grid */}
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {content.benefits.map((benefit, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  borderColor: "primary.main",
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(163, 230, 53, 0.1)",
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  fontSize: "3rem",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "72px",
                  height: "72px",
                  bgcolor: "rgba(163, 230, 53, 0.1)",
                  borderRadius: "50%",
                }}
              >
                {benefit.icon}
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "white",
                  mb: 1.5,
                }}
              >
                {benefit.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "0.9375rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.7,
                }}
              >
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
