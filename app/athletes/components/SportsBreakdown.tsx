"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  sports_basketball: SportsBasketballIcon,
  sports_soccer: SportsSoccerIcon,
  directions_run: DirectionsRunIcon,
  sports_football: SportsFootballIcon,
  sports_baseball: SportsBaseballIcon,
  sports_volleyball: SportsVolleyballIcon,
  sports_tennis: SportsTennisIcon,
  pool: PoolIcon,
};

interface SportStat {
  name: string;
  athleteCount: number;
  icon: string;
}

interface SportsBreakdownContent {
  title: string;
  subtitle: string;
  variant: string;
  sports: SportStat[];
}

interface SportsBreakdownProps {
  content: SportsBreakdownContent;
}

export default function SportsBreakdown({ content }: SportsBreakdownProps) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 900,
            mb: 2,
          }}
        >
          {content.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto" }}
        >
          {content.subtitle}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {content.sports.map((sport, index) => {
          const IconComponent = iconMap[sport.icon] || FitnessCenterIcon;

          return (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    borderColor: "primary.main",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 2,
                    borderRadius: "50%",
                    bgcolor: "rgba(163, 230, 53, 0.1)",
                    color: "primary.main",
                    mb: 2,
                  }}
                >
                  <IconComponent sx={{ fontSize: 32 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "white", mb: 0.5 }}
                >
                  {sport.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {sport.athleteCount}+ Athletes
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
