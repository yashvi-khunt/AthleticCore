import { Box, Container, Typography, Chip, Grid } from "@mui/material";
import type { Service } from "@/types/content";

interface Props {
  services: Service[];
  title?: string;
  subtitle?: string;
}

export default function ServicesSection({
  services,
  title = "What We Specialise In",
  subtitle,
}: Props) {
  return (
    <Container maxWidth="xl" sx={{ color: "white" }}>
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Chip
          label="Services"
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
            mb: 2,
          }}
        >
          {title.split(" ").map((word, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                color: word === "Specialise" ? "primary.main" : "white",
                mr: 0.5,
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.7)" }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Services Grid */}
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function ServiceCard({ icon, title, description }: Service) {
  return (
    <Box
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 4,
        p: 3,
        border: "1px solid",
        borderColor: "rgba(163, 230, 53, 0.1)",
        transition: "all 0.3s",
        "&:hover": {
          bgcolor: "#141d2e",
          borderColor: "rgba(163, 230, 53, 0.2)",
          transform: "translateY(-4px)",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
        },
      }}
    >
      <Typography sx={{ fontSize: "3rem", mb: 2 }}>{icon}</Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#f1f5f9", mb: 1.5 }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "#cbd5e1", lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  );
}
