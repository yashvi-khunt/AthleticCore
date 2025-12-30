"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  useTheme,
} from "@mui/material";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export default function TeamSection({
  title,
  subtitle,
  members,
}: TeamSectionProps) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 2,
            }}
          >
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900 }}>
            {title}
          </Typography>
        </Box>

        <Grid container spacing={8} justifyContent="center">
          {members.map((member, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  "&:hover": {
                    "& .blob-bg": {
                      transform: "scale(1.1) rotate(180deg)",
                    },
                    "& .member-img": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 280,
                    height: 280,
                    mx: "auto",
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Animated Blob Background */}
                  <Box
                    className="blob-bg"
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      bgcolor:
                        index % 2 === 0 ? "primary.main" : "secondary.light",
                      borderRadius:
                        index % 2 === 0
                          ? "60% 40% 30% 70% / 60% 30% 70% 40%"
                          : "30% 70% 70% 30% / 30% 30% 70% 70%",
                      opacity: 0.2,
                      transition: "transform 0.8s ease-in-out",
                      zIndex: 0,
                    }}
                  />

                  <Avatar
                    src={member.image}
                    alt={member.name}
                    className="member-img"
                    sx={{
                      width: 240,
                      height: 240,
                      zIndex: 1,
                      transition: "transform 0.5s ease",
                      border: `4px solid ${theme.palette.background.default}`,
                    }}
                  />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    maxWidth: "300px",
                    mx: "auto",
                  }}
                >
                  {member.bio}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
