import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Chip } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { Program } from "@/types/content";

export default function ProgramCard({ item }: { item: Program }) {
  return (
    <Box
      component="article"
      sx={{
        bgcolor: "#1a2332",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(163, 230, 53, 0.1)",
        boxShadow:
          "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow:
            "0 20px 50px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(163, 230, 53, 0.08)",
          transform: "translateY(-4px)",
          borderColor: "rgba(163, 230, 53, 0.2)",
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          height: "224px",
          width: "100%",
          overflow: "hidden",
          bgcolor: "grey.200",
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 350px, 100vw"
        />

        {/* Featured Badge */}
        {item.featured && (
          <Box sx={{ position: "absolute", top: 2, right: 2 }}>
            <Chip
              label="Popular"
              sx={{
                bgcolor: "primary.main",
                color: "black",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                height: "auto",
                px: 1.5,
                py: 0.5,
              }}
            />
          </Box>
        )}

        {/* Gradient Overlay on Hover */}
        <Box
          className="gradient-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)",
            opacity: 0,
            transition: "opacity 0.3s",
            ".MuiBox-root:hover &": {
              opacity: 1,
            },
          }}
        />

        {/* Quick View Button */}
        <Box
          className="quick-view"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s",
            ".MuiBox-root:hover &": {
              opacity: 1,
            },
          }}
        >
          <Chip
            label="View Details"
            sx={{
              px: 3,
              py: 1.5,
              bgcolor: "primary.main",
              color: "black",
              fontWeight: 700,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#f1f5f9",
            transition: "color 0.3s",
            ".MuiBox-root:hover &": {
              color: "primary.main",
            },
          }}
        >
          {item.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.875rem",
            color: "#cbd5e1",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.shortDescription}
        </Typography>

        {/* Meta Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            pt: 1,
            borderTop: "1px solid",
            borderColor: "rgba(163, 230, 53, 0.1)",
          }}
        >
          {item.groupSize && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "0.75rem",
                color: "#94a3b8",
              }}
            >
              <GroupIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: "0.75rem" }}>
                {item.groupSize}
              </Typography>
            </Box>
          )}

          {item.duration && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "0.75rem",
                color: "#94a3b8",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography sx={{ fontSize: "0.75rem" }}>
                {item.duration}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Footer with Price and Link */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pt: 2,
          }}
        >
          {item.price && (
            <Typography
              sx={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "primary.main",
              }}
            >
              {item.price}
            </Typography>
          )}

          <Link
            href={`/programs/${item.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "primary.main",
                transition: "color 0.3s",
                "&:hover": {
                  color: "primary.dark",
                },
              }}
            >
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
                Learn More
              </Typography>
              <ArrowForwardIcon
                sx={{
                  fontSize: 16,
                  transition: "transform 0.3s",
                  "a:hover &": {
                    transform: "translateX(4px)",
                  },
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
