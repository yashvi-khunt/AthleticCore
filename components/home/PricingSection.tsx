import Link from "next/link";
import { Box, Container, Typography, Button, Chip, Grid } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import type { PricingPlan } from "@/types/content";

interface Props {
  plans: PricingPlan[];
  title?: string;
  subtitle?: string;
}

export default function PricingSection({
  plans,
  title = "Flexible Pricing",
  subtitle = "Choose the plan that fits your goals and schedule.",
}: Props) {
  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Chip
          label="Pricing"
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
                color: word === "Pricing" ? "primary.main" : "white",
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

      {/* Pricing Cards */}
      <Grid container spacing={3} sx={{ maxWidth: "1024px", mx: "auto" }}>
        {plans.map((plan) => (
          <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
            <PricingCard {...plan} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function PricingCard(plan: PricingPlan) {
  return (
    <Box
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 4,
        p: 4,
        border: plan.featured ? "2px solid" : "1px solid",
        borderColor: plan.featured ? "primary.main" : "rgba(163, 230, 53, 0.1)",
        boxShadow: plan.featured
          ? "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)"
          : "none",
        position: "relative",
        mt: { xs: 0, md: plan.featured ? 0 : 0 },
        transform: { md: plan.featured ? "scale(1.05)" : "scale(1)" },
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
        },
      }}
    >
      {plan.featured && (
        <Box
          sx={{
            position: "absolute",
            top: -16,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Chip
            label="Most Popular"
            sx={{
              px: 2,
              py: 0.5,
              bgcolor: "primary.main",
              color: "black",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />
        </Box>
      )}

      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#f1f5f9", mb: 1 }}
        >
          {plan.name}
        </Typography>
        <Typography sx={{ fontSize: "0.875rem", color: "#cbd5e1" }}>
          {plan.description}
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mb: 3,
          pb: 3,
          borderBottom: "1px solid",
          borderColor: "rgba(163, 230, 53, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Typography
            sx={{ fontSize: "3rem", fontWeight: 700, color: "#f1f5f9" }}
          >
            {plan.price}
          </Typography>
          {plan.interval && (
            <Typography sx={{ color: "#94a3b8" }}>/{plan.interval}</Typography>
          )}
        </Box>
      </Box>

      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          mb: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {plan.features.map((feature, i) => (
          <Box
            component="li"
            key={i}
            sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
          >
            <CheckIcon
              sx={{
                color: "primary.main",
                fontSize: 20,
                flexShrink: 0,
                mt: 0.25,
              }}
            />
            <Typography sx={{ fontSize: "0.875rem", color: "#cbd5e1" }}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      <Link
        href={plan.buttonLink || "#contact"}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            borderRadius: "50px",
            fontWeight: 700,
            bgcolor: plan.featured ? "primary.main" : "#141d2e",
            color: plan.featured ? "black" : "#f1f5f9",
            transition: "all 0.3s",
            "&:hover": {
              bgcolor: plan.featured ? "primary.dark" : "#1a2332",
            },
          }}
        >
          {plan.buttonText || "Get Started"}
        </Button>
      </Link>
    </Box>
  );
}
