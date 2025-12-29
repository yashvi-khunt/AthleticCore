"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a3e635", // lime-400
      light: "#bef264", // lime-300
      dark: "#65a30d", // lime-600
      contrastText: "#000000",
    },
    secondary: {
      main: "#1a2332", // surface
      light: "#141d2e", // surface-alt
      dark: "#0a101d", // surface-dark
      contrastText: "#f1f5f9",
    },
    background: {
      default: "#000000", // Black background
      paper: "#1a2332", // surface
    },
    text: {
      primary: "#f1f5f9", // Light slate
      secondary: "#cbd5e1", // Lighter slate
    },
    grey: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1", // text-muted
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    divider: "rgba(163, 230, 53, 0.1)",
  },
  typography: {
    fontFamily:
      '"Poppins", "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 900,
      fontSize: "3.5rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 900,
      fontSize: "2.5rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      fontSize: "2rem",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000000",
          color: "#f1f5f9",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "8px",
          padding: "12px 32px",
        },
        contained: {
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
          "&:hover": {
            boxShadow:
              "0 20px 50px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(163, 230, 53, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          backgroundColor: "#1a2332",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.7), 0 2px 8px rgba(163, 230, 53, 0.05)",
          border: "1px solid rgba(163, 230, 53, 0.1)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
});

export default theme;
