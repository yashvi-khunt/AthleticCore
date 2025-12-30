"use client";

import { useState } from "react";
import { Box, Container, Typography, Button, Grid, Chip } from "@mui/material";
import ProgramCard from "@/components/ProgramCard";
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
    // Match filter to program name or tags if available
    return program.name.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <Box sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 900,
              color: "white",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            {content.title}
          </Typography>
          {content.subtitle && (
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
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
              mb: 8,
              flexWrap: "wrap",
            }}
          >
            {filterCategories.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "filled" : "outlined"}
                color={activeFilter === filter ? "primary" : "default"}
                sx={{
                  px: 2,
                  py: 2.5,
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderColor:
                    activeFilter === filter
                      ? "transparent"
                      : "rgba(255,255,255,0.2)",
                  color:
                    activeFilter === filter ? "common.black" : "text.primary",
                  "&:hover": {
                    bgcolor:
                      activeFilter === filter
                        ? "primary.dark"
                        : "rgba(255,255,255,0.05)",
                  },
                }}
              />
            ))}
          </Box>
        )}

        {/* Programs Grid */}
        <Grid container spacing={4}>
          {filteredPrograms.map((program) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={program.id}>
              <ProgramCard item={program} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
