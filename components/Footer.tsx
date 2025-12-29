import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getFooterData, getSiteInfo, getContactInfo } from "@/lib/content";

export default function Footer() {
  const footerData = getFooterData();
  const siteInfo = getSiteInfo();
  const contact = getContactInfo();

  return (
    <Box component="footer" sx={{ bgcolor: "black", color: "white" }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                position: "relative",
                height: "64px",
                width: "160px",
                mb: 2,
              }}
            >
              <Image
                src="/AthleticCore/images/logos/full-logo-white.png"
                alt="Athletic Core Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
                sizes="160px"
              />
            </Box>
            <Typography
              sx={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)" }}
            >
              {siteInfo.tagline}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box component="li">
                <Link href="#programs" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "color 0.3s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Programs
                  </Typography>
                </Link>
              </Box>
              <Box component="li">
                <Link href="#about" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "color 0.3s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </Box>
              <Box component="li">
                <Link href="#services" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "color 0.3s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Services
                  </Typography>
                </Link>
              </Box>
              <Box component="li">
                <Link href="#pricing" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "color 0.3s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Pricing
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box component="li">
                <Box
                  component="a"
                  href={`mailto:${contact.email}`}
                  sx={{
                    fontSize: "0.875rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {contact.email}
                </Box>
              </Box>
              <Box component="li">
                <Box
                  component="a"
                  href={`tel:${contact.phone}`}
                  sx={{
                    fontSize: "0.875rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {contact.phone}
                </Box>
              </Box>
              {contact.address && (
                <Box component="li">
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {contact.address}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Social */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {contact.socialMedia?.instagram && (
                <IconButton
                  component="a"
                  href={contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "black",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              )}
              {contact.socialMedia?.facebook && (
                <IconButton
                  component="a"
                  href={contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "black",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              )}
              {contact.socialMedia?.twitter && (
                <IconButton
                  component="a"
                  href={contact.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "black",
                    },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            mt: 4,
            pt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.5)" }}
          >
            {footerData.copyright}
          </Typography>
          {footerData.links && footerData.links.length > 0 && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {footerData.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.5)",
                      transition: "color 0.3s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
