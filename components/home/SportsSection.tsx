import Image from "next/image";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import type { Sport } from "@/types/content";

interface Props {
  sports: Sport[];
  title?: string;
  subtitle?: string;
}

export default function SportsSection({
  sports,
  title = "Sports We Train",
  subtitle = "Specialized training programs for athletes across multiple disciplines",
}: Props) {
  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Chip
          label="Sports"
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
                color: word === "Sports" ? "primary.main" : "white",
                mr: 0.5,
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.7)" }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Sports Grid */}
      <Grid container spacing={3}>
        {sports.map((sport) => (
          <Grid size={{ xs: 6, md: 4, lg: 2.4 }} key={sport.id}>
            <SportCard {...sport} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function SportCard({ image, name }: Sport) {
  return (
    <Box
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "rgba(163, 230, 53, 0.1)",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
          borderColor: "rgba(163, 230, 53, 0.2)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </Box>
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#f1f5f9",
            transition: "color 0.3s",
            ".MuiBox-root:hover &": {
              color: "primary.main",
            },
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
}
