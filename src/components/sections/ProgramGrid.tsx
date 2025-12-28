"use client";

import { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ProgramCard from "../ProgramCard";
import { getPrograms } from "@/lib/content";

interface ProgramGridContent {
  title: string;
  subtitle?: string;
  layout?: "3-column-cards" | "4-column-cards" | "list";
  showFilters?: boolean;
}

interface Props {
  content: ProgramGridContent;
}

const filterCategories = ["All", "Team", "Small Group", "1-on-1"];

export default function ProgramGrid({ content }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const allPrograms = getPrograms();

  // Filter programs based on active filter
  const filteredPrograms = allPrograms.filter((program) => {
    if (activeFilter === "All") return true;
    // Match filter to program name
    return program.name.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.25rem", md: "3rem" },
            fontWeight: 900,
            color: "white",
            mb: 2,
          }}
        >
          {content.title.split(" ").map((word, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                color:
                  word === "Path" || word === "Your" ? "primary.main" : "white",
                mr: 0.5,
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>
        {content.subtitle && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
            }}
          >
            {content.subtitle}
          </Typography>
        )}
      </Box>

      {/* Filters */}
      {content.showFilters && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          {filterCategories.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              sx={{
                px: 3,
                py: 1,
                borderRadius: "50px",
                bgcolor:
                  activeFilter === filter
                    ? "primary.main"
                    : "rgba(255, 255, 255, 0.05)",
                color: activeFilter === filter ? "#000" : "white",
                border:
                  activeFilter === filter
                    ? "2px solid transparent"
                    : "2px solid rgba(255, 255, 255, 0.1)",
                fontWeight: 700,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor:
                    activeFilter === filter
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {filter}
            </Button>
          ))}
        </Box>
      )}

      {/* Programs Grid */}
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((program) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={program.id}>
              <ProgramCard item={program} />
            </Grid>
          ))
        ) : (
          <Grid size={12}>
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <Typography variant="h6">
                No programs found for &quot;{activeFilter}&quot;
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
