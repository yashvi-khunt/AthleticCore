import ProgramCard from "./ProgramCard";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import type { Program } from "@/types/content";

interface Props {
  programs: Program[];
  title?: string;
  description?: string;
}

export default function ProgramsSection({
  programs,
  title = "Training Programs",
  description = "Custom programs built around your goals, sport, and lifestyle.",
}: Props) {
  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Chip
          label="Programs"
          sx={{
            mb: 2,
            px: 2,
            py: 1,
            bgcolor: "rgba(163, 230, 53, 0.1)",
            border: "1px solid rgba(163, 230, 53, 0.2)",
            borderRadius: "50px",
            "& .MuiChip-label": {
              fontSize: "0.875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "primary.main",
            },
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.25rem", md: "3rem" },
            fontWeight: 900,
            color: "white",
            mb: 2,
          }}
        >
          {title.split(" ").map((word, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                color: word === "Training" ? "primary.main" : "white",
                mr: 0.5,
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {/* Programs Grid */}
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        {programs.map((program) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={program.id}>
            <ProgramCard item={program} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
