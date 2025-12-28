"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import type { ContactInfo } from "@/types/content";

interface Props {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", sport: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "1024px", mx: "auto" }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="Contact"
            sx={{
              mb: 2,
              px: 2,
              py: 1,
              bgcolor: "rgba(163, 230, 53, 0.1)",
              border: "1px solid rgba(163, 230, 53, 0.2)",
              borderRadius: "50px",
              "& .MuiChip-label": {
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "primary.main",
              },
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 900,
              color: "white",
              mb: 2,
            }}
          >
            Get In{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Touch
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.7)" }}
          >
            {contact.availability ||
              "We're here to help you reach your athletic goals."}
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <ContactItem
                icon={<EmailIcon sx={{ fontSize: 24 }} />}
                label="Email"
                value={contact.email}
                link={`mailto:${contact.email}`}
              />

              <ContactItem
                icon={<PhoneIcon sx={{ fontSize: 24 }} />}
                label="Phone"
                value={contact.phone}
                link={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
              />

              {contact.address && (
                <ContactItem
                  icon={<LocationOnIcon sx={{ fontSize: 24 }} />}
                  label="Location"
                  value={contact.address}
                />
              )}

              {/* Social Media */}
              {contact.socialMedia && (
                <Box sx={{ pt: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "white",
                      mb: 2,
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {contact.socialMedia.instagram && (
                      <SocialLink
                        href={contact.socialMedia.instagram}
                        label="Instagram"
                      />
                    )}
                    {contact.socialMedia.facebook && (
                      <SocialLink
                        href={contact.socialMedia.facebook}
                        label="Facebook"
                      />
                    )}
                    {contact.socialMedia.twitter && (
                      <SocialLink
                        href={contact.socialMedia.twitter}
                        label="Twitter"
                      />
                    )}
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box>
                <Typography
                  component="label"
                  htmlFor="name"
                  sx={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Name *
                </Typography>
                <TextField
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="Your name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  component="label"
                  htmlFor="email"
                  sx={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Email *
                </Typography>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  placeholder="your@email.com"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  component="label"
                  htmlFor="sport"
                  sx={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Sport / Activity
                </Typography>
                <TextField
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  fullWidth
                  placeholder="e.g., Basketball, Football"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Box>
                <Typography
                  component="label"
                  htmlFor="message"
                  sx={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "white",
                    mb: 1,
                  }}
                >
                  Message *
                </Typography>
                <TextField
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell us about your goals..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  color: "black",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  const content = (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
      <Box
        sx={{
          flexShrink: 0,
          width: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: "rgba(163, 230, 53, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "primary.main",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.7)",
            mb: 0.5,
          }}
        >
          {label}
        </Typography>
        <Typography sx={{ fontSize: "1rem", fontWeight: 500, color: "white" }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );

  if (link) {
    return (
      <Box
        component="a"
        href={link}
        sx={{
          display: "block",
          textDecoration: "none",
          transition: "opacity 0.3s",
          "&:hover": { opacity: 0.7 },
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      sx={{
        width: 40,
        height: 40,
        bgcolor: "grey.900",
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
  );
}
