"use client";

import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface ComparisonColumn {
  id: string;
  label: string;
  width?: string;
}

interface ComparisonRow {
  feature: string;
  [key: string]: string;
}

interface ComparisonTableContent {
  title: string;
  subtitle?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

interface Props {
  content: ComparisonTableContent;
}

export default function ComparisonTable({ content }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
                color: word === "Comparison" ? "primary.main" : "white",
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

      {/* Comparison Table */}
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "12px",
          overflow: "hidden",
          "& .MuiTable-root": {
            minWidth: isMobile ? "auto" : 650,
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "rgba(163, 230, 53, 0.05)",
                "& .MuiTableCell-root": {
                  borderBottom: "2px solid rgba(163, 230, 53, 0.2)",
                },
              }}
            >
              {content.columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    color: column.id === "feature" ? "primary.main" : "white",
                    fontWeight: 700,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    width: column.width || "auto",
                    px: { xs: 1.5, md: 2 },
                    py: 2,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {content.rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.02)",
                  },
                  "& .MuiTableCell-root": {
                    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 2, md: 2.5 },
                  }}
                >
                  {row.feature}
                </TableCell>
                {content.columns.slice(1).map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      px: { xs: 1.5, md: 2 },
                      py: { xs: 2, md: 2.5 },
                      textAlign: "center",
                    }}
                  >
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Mobile-friendly note */}
      {isMobile && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255, 255, 255, 0.5)" }}
          >
            Scroll horizontally to view all columns
          </Typography>
        </Box>
      )}
    </Container>
  );
}
