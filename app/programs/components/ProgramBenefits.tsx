"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";

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
  const theme = useTheme();

  return (
    <Box sx={{ py: 15, bgcolor: "background.default", position: "relative" }}>
      <Container maxWidth="xl">
        <Box
          sx={{ textAlign: "center", maxWidth: "800px", mx: "auto", mb: 10 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 900,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            {content.title}
          </Typography>
          {content.subtitle && (
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 300,
              }}
            >
              {content.subtitle}
            </Typography>
          )}
        </Box>

        <Grid container spacing={4}>
          {content.benefits.map((benefit, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  height: "100%",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 4,
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "primary.main",
                    "& .icon-bg": {
                      transform: "scale(1.5)",
                      opacity: 0.1,
                    },
                  },
                }}
              >
                <Box
                  className="icon-bg"
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    fontSize: "8rem",
                    opacity: 0.05,
                    transition: "all 0.4s ease",
                    pointerEvents: "none",
                  }}
                >
                  {benefit.icon}
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "4rem",
                    mb: 3,
                    lineHeight: 1,
                  }}
                >
                  {benefit.icon}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "common.white",
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: "1.1rem",
                  }}
                >
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
