"use client";

import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";

interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

interface FeaturedStoryContent {
  variant: string;
  athlete: string;
  sport: string;
  achievement: string;
  title: string;
  story: string;
  quote: string;
  image: string;
  metrics: Metric[];
}

interface FeaturedStoryProps {
  content: FeaturedStoryContent;
}

export default function FeaturedStory({ content }: FeaturedStoryProps) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        {/* Image Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              position: "relative",
              height: { xs: "400px", md: "600px" },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              component="img"
              src={content.image}
              alt={content.athlete}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                p: 4,
              }}
            >
              <Typography variant="h4" sx={{ color: "white", fontWeight: 800 }}>
                {content.athlete}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {content.sport} • {content.achievement}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Content Side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="overline"
              sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}
            >
              FEATURED ATHLETE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              {content.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              {content.story}
            </Typography>

            <Paper
              elevation={0}
              sx={{
                bgcolor: "rgba(255,255,255,0.05)",
                p: 3,
                borderLeft: "4px solid",
                borderColor: "primary.main",
                mb: 5,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", color: "white", mb: 1 }}
              >
                &quot;{content.quote}&quot;
              </Typography>
            </Paper>

            {/* Metrics Grid */}
            <Grid container spacing={2}>
              {content.metrics.map((metric, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Box
                    sx={{
                      p: 2,
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", display: "block", mb: 1 }}
                    >
                      {metric.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      {metric.after}
                    </Typography>
                    <Chip
                      label={metric.improvement}
                      size="small"
                      color="success"
                      sx={{ mt: 1, height: 20, fontSize: "0.7rem" }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
