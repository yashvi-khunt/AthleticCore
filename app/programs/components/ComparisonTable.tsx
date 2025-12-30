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

        {/* Comparison Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: 4,
            overflow: "hidden",
            "& .MuiTable-root": {
              minWidth: isMobile ? "auto" : 650,
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "rgba(255,255,255,0.05)" }}>
                {content.columns.map((column, index) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      py: 3,
                      px: 3,
                      color: index === 0 ? "text.primary" : "primary.main",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      width: column.width,
                      textAlign: index === 0 ? "left" : "center",
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
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: "rgba(255,255,255,0.02)" },
                    transition: "background-color 0.2s",
                  }}
                >
                  {content.columns.map((column, colIndex) => (
                    <TableCell
                      key={`${rowIndex}-${column.id}`}
                      sx={{
                        py: 2.5,
                        px: 3,
                        color:
                          colIndex === 0 ? "text.primary" : "text.secondary",
                        fontWeight: colIndex === 0 ? 600 : 400,
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        textAlign: colIndex === 0 ? "left" : "center",
                      }}
                    >
                      {colIndex === 0 ? (
                        row.feature
                      ) : row[column.id] === "true" ? (
                        <Box
                          component="span"
                          sx={{ color: "primary.main", fontSize: "1.5rem" }}
                        >
                          ●
                        </Box>
                      ) : row[column.id] === "false" ? (
                        <Box
                          component="span"
                          sx={{ color: "text.disabled", fontSize: "1.5rem" }}
                        >
                          -
                        </Box>
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
