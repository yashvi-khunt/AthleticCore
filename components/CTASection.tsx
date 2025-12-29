import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";

interface Props {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title = "Ready to Elevate Your Game?",
  subtitle = "Join hundreds of athletes who have transformed their performance with CORE ATHLETE training.",
  primaryButtonText = "Get Started Today",
  primaryButtonLink = "#contact",
  secondaryButtonText = "View Programs",
  secondaryButtonLink = "#programs",
}: Props) {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        bgcolor: "primary.main",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: "896px",
            mx: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 900,
            }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "1.25rem" }}>
            {subtitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              pt: 2,
            }}
          >
            <Link href={primaryButtonLink} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 2,
                  bgcolor: "black",
                  color: "primary.main",
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "grey.900",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonLink} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 2,
                  color: "black",
                  borderColor: "black",
                  borderWidth: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "black",
                    color: "primary.main",
                    borderColor: "black",
                    borderWidth: 2,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
