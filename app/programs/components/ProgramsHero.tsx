"use client";

import { Box, Container, Typography, Chip, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";
import YouTubeBackground from "@/components/YouTubeBackground";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

interface ProgramsHeroProps {
  title: string;
  subtitle: string;
  filters?: string[];
  videoId?: string;
}

export default function ProgramsHero({
  title,
  subtitle,
  filters,
  videoId,
}: ProgramsHeroProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        bgcolor: "background.default",
        pt: 10,
      }}
    >
      {videoId ? (
        <YouTubeBackground videoId={videoId} opacity={0.3} />
      ) : (
        <>
          {/* Dynamic Background Lines */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 25%, transparent 25%, transparent 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main} 75%, transparent 75%, transparent)`,
              backgroundSize: "60px 60px",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "20%",
              right: "-10%",
              width: "50vw",
              height: "50vw",
              borderRadius: "50%",
              bgcolor: "primary.main",
              opacity: 0.1,
              filter: "blur(100px)",
              animation: `${pulse} 8s ease-in-out infinite`,
              zIndex: 0,
            }}
          />
        </>
      )}

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3.5rem", md: "6rem" },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            mb: 4,
            textTransform: "uppercase",
            animation: `${slideUp} 0.8s ease-out forwards`,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h4"
          component="p"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 300,
            color: "text.secondary",
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
            mb: 6,
            animation: `${slideUp} 0.8s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          {subtitle}
        </Typography>

        {filters && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              animation: `${slideUp} 0.8s ease-out 0.4s forwards`,
              opacity: 0,
            }}
          >
            {filters.map((filter, index) => (
              <Chip
                key={index}
                label={filter}
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "text.primary",
                  fontSize: "1rem",
                  py: 2.5,
                  px: 2,
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(163, 230, 53, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
