"use client";

import Image from "next/image";
import { useState } from "react";
import { Box, Container, Typography, Button, Chip, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { Testimonial } from "@/types/content";

interface Props {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials,
  title = "What Athletes Say",
  subtitle = "Hear from athletes who have transformed their performance with CORE ATHLETE.",
}: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Chip
          label="Testimonials"
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
                color: word === "Athletes" ? "primary.main" : "white",
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

      {/* Testimonials Grid */}
      <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto" }}>
        {testimonials.slice(0, 3).map((testimonial) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </Grid>
        ))}
      </Grid>

      {/* Show More Button */}
      {testimonials.length > 3 && (
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component="a"
            href="/testimonials"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 2,
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: 2,
              color: "black",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              "&:hover": {
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              },
            }}
          >
            View All Testimonials
          </Button>
        </Box>
      )}
    </Container>
  );
}

function TestimonialCard(testimonial: Testimonial) {
  const {
    name,
    role,
    sport,
    quote,
    image,
    rating,
    videoId,
    videoThumbnail,
    videoDuration,
    videoTitle,
  } = testimonial;

  // If it's a YouTube video testimonial, render video card
  if (videoId) {
    return <YouTubeTestimonialCard {...testimonial} />;
  }

  // Otherwise render traditional text testimonial
  return (
    <Box
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 4,
        p: 3,
        boxShadow:
          "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
        border: "1px solid",
        borderColor: "rgba(163, 230, 53, 0.1)",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow:
            "0 20px 50px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(163, 230, 53, 0.08)",
          borderColor: "rgba(163, 230, 53, 0.2)",
        },
      }}
    >
      {/* Rating Stars */}
      {rating && (
        <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
          {Array.from({ length: 5 }).map((_, i) =>
            i < rating ? (
              <StarIcon key={i} sx={{ fontSize: 20, color: "primary.main" }} />
            ) : (
              <StarBorderIcon
                key={i}
                sx={{ fontSize: 20, color: "rgba(163, 230, 53, 0.3)" }}
              />
            )
          )}
        </Box>
      )}

      {/* Quote */}
      <Typography sx={{ color: "#cbd5e1", mb: 3, lineHeight: 1.6 }}>
        &quot;{quote}&quot;
      </Typography>

      {/* Author */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          pt: 2,
          borderTop: "1px solid",
          borderColor: "rgba(163, 230, 53, 0.1)",
        }}
      >
        {image && (
          <Box
            sx={{
              position: "relative",
              width: 48,
              height: 48,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              sizes="48px"
            />
          </Box>
        )}
        <Box>
          <Typography sx={{ fontWeight: 700, color: "#f1f5f9" }}>
            {name}
          </Typography>
          {role && (
            <Typography sx={{ fontSize: "0.875rem", color: "#cbd5e1" }}>
              {role}
            </Typography>
          )}
          {sport && (
            <Typography sx={{ fontSize: "0.875rem", color: "primary.main" }}>
              {sport}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

function YouTubeTestimonialCard({
  videoId,
  videoThumbnail,
  videoDuration,
  videoTitle,
  name,
  sport,
  image,
}: Testimonial) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate YouTube thumbnail URL
  const thumbnailUrl =
    videoThumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <Box
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
        },
      }}
    >
      {/* Video Thumbnail */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16/9",
          bgcolor: "grey.900",
          overflow: "hidden",
        }}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail Image */}
            <Image
              src={thumbnailUrl}
              alt={videoTitle || `${name} testimonial`}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Duration Badge */}
            {videoDuration && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 1,
                  right: 1,
                  bgcolor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                {videoDuration}
              </Box>
            )}

            {/* Play Button Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  bgcolor: "#ff0000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <PlayArrowIcon
                  sx={{ fontSize: { xs: 32, md: 40 }, color: "white", ml: 0.5 }}
                />
              </Box>
            </Box>
          </>
        ) : (
          // Embedded YouTube Player
          <Box
            component="iframe"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            src={videoUrl}
            title={videoTitle || `${name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </Box>

      {/* Video Info */}
      <Box sx={{ p: 2 }}>
        {/* Video Title */}
        <Typography
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.3s",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {videoTitle || `${name}'s Testimonial`}
        </Typography>

        {/* Author Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {image && (
            <Box
              sx={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
                sizes="36px"
              />
            </Box>
          )}
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "white",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            {sport && (
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {sport}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
