"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/types/content";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface TestimonialGridContent {
  title: string;
  subtitle: string;
  variant: string;
  showFilters: boolean;
  sportFilters: string[];
}

interface TestimonialGridProps {
  content: TestimonialGridContent;
  testimonials: Testimonial[];
}

export default function TestimonialGrid({
  content,
  testimonials,
}: TestimonialGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter for video testimonials only
  const videoTestimonials = testimonials.filter((t) => t.videoId);

  const filteredTestimonials =
    activeFilter === "All"
      ? videoTestimonials
      : videoTestimonials.filter(
          (t) =>
            (t.role && t.role.includes(activeFilter)) ||
            (t.sport && t.sport.includes(activeFilter))
        );

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

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
          sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto", mb: 4 }}
        >
          {content.subtitle}
        </Typography>

        {content.showFilters && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {content.sportFilters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "contained" : "outlined"}
                onClick={() => setActiveFilter(filter)}
                sx={{
                  borderRadius: 50,
                  px: 3,
                  borderColor:
                    activeFilter === filter
                      ? "primary.main"
                      : "rgba(255,255,255,0.2)",
                  color: activeFilter === filter ? "black" : "white",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor:
                      activeFilter === filter
                        ? "primary.dark"
                        : "rgba(255,255,255,0.05)",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        )}
      </Box>

      <Grid container spacing={4}>
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={testimonial.id}
              component={motion.div}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "primary.main",
                  },
                }}
                onClick={() =>
                  testimonial.videoId && handleVideoClick(testimonial.videoId)
                }
              >
                {/* Video Thumbnail */}
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    overflow: "hidden",
                    backgroundImage: testimonial.videoThumbnail
                      ? `url(${testimonial.videoThumbnail})`
                      : `url(https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Play Button Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      bgcolor: "rgba(0,0,0,0.7)",
                      borderRadius: "50%",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "primary.main",
                        transform: "translate(-50%, -50%) scale(1.1)",
                      },
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 32, color: "white" }} />
                  </Box>

                  {/* Duration Badge */}
                  {testimonial.videoDuration && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        bgcolor: "rgba(0,0,0,0.8)",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 14 }} />
                      {testimonial.videoDuration}
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      mb: 1,
                      fontWeight: 700,
                      fontSize: "1rem",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {testimonial.videoTitle || `${testimonial.name}'s Story`}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: "white",
                          fontSize: "0.9rem",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "primary.main", fontSize: "0.8rem" }}
                      >
                        {testimonial.sport || testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
}
