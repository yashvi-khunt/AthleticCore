"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Button,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { getMainNav, getMobileNav } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mainNav = getMainNav();
  const mobileNav = getMobileNav();

  useEffect(() => {
    // Reveal navbar with unblur effect when logo stops
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle scroll event for background change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="header"
      className="site-header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        bgcolor: isScrolled ? "#000000" : "transparent",
        filter: isVisible ? "blur(0px)" : "blur(10px)",
        opacity: isVisible ? 1 : 0,
        transition:
          "filter 1s ease-out, opacity 1s ease-out, background-color 0.3s ease",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.5)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                position: "relative",
                height: "64px",
                width: "256px",
                transition: "opacity 0.3s",
                "&:hover": { opacity: 0.9 },
              }}
            >
              <Image
                src="/AthleticCore/images/logos/full-logo-white.png"
                alt="Athletic Core Logo"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
                sizes="256px"
                priority
              />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box
            component="nav"
            className="site-nav"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <List sx={{ display: "flex", alignItems: "center", gap: 3, p: 0 }}>
              {mainNav.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <ListItem key={link.href} sx={{ width: "auto", p: 0 }}>
                    <Link href={link.href} style={{ textDecoration: "none" }}>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: isActive ? "primary.main" : "white",
                          transition: "color 0.3s",
                          borderBottom: isActive ? "2px solid" : "none",
                          borderColor: "primary.main",
                          paddingBottom: "2px",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {link.label}
                      </Box>
                    </Link>
                  </ListItem>
                );
              })}
            </List>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  px: 3,
                  py: 1.25,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  borderRadius: "50px",
                  color: "black",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  "&:hover": {
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  },
                }}
              >
                Book Session
              </Button>
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        <Collapse in={isOpen}>
          <Box
            component="nav"
            sx={{
              display: { xs: "block", md: "none" },
              pb: 2,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <List
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}
            >
              {mobileNav.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <ListItem key={link.href} sx={{ p: 0 }}>
                    <Link
                      href={link.href}
                      style={{ textDecoration: "none", width: "100%" }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Box
                        sx={{
                          display: "block",
                          px: 2,
                          py: 1,
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: isActive ? "primary.main" : "white",
                          borderRadius: 1,
                          bgcolor: isActive
                            ? "rgba(163, 230, 53, 0.1)"
                            : "transparent",
                          transition: "all 0.3s",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            color: "primary.main",
                          },
                        }}
                      >
                        {link.label}
                      </Box>
                    </Link>
                  </ListItem>
                );
              })}
              <ListItem sx={{ mt: 1, px: 2 }}>
                <Link
                  href="/contact"
                  style={{ textDecoration: "none", width: "100%" }}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.25,
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      borderRadius: "50px",
                      color: "black",
                    }}
                  >
                    Book Session
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
