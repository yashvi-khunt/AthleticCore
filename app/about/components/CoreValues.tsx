"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";

interface PhilosophyItem {
  letter: string;
  word: string;
  description: string;
}

interface CoreValuesProps {
  title: string;
  subtitle: string;
  items: PhilosophyItem[];
}

export default function CoreValues({
  title,
  subtitle,
  items,
}: CoreValuesProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 15, bgcolor: "secondary.main", position: "relative" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 2,
            }}
          >
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900 }}>
            {title}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 4,
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    bgcolor: "rgba(255,255,255,0.05)",
                    "& .letter": {
                      color: "primary.main",
                      transform: "scale(1.2) rotate(-10deg)",
                    },
                  },
                }}
              >
                <Typography
                  className="letter"
                  variant="h1"
                  sx={{
                    fontSize: "5rem",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.1)",
                    mb: 2,
                    transition: "all 0.3s ease",
                    lineHeight: 1,
                  }}
                >
                  {item.letter}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2, color: "common.white" }}
                >
                  {item.word}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
