"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, Fragment } from "react";
import { Box, Container, Typography, Button, Chip, Grid } from "@mui/material";
import type { About } from "@/types/content";

export default function AboutSection({
  title,
  subtitle,
  description,
  image,
  philosophy,
}: About) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll position relative to section
      const sectionScrollStart = sectionTop - windowHeight;
      const sectionScrollEnd = sectionTop + sectionHeight;

      // Only apply parallax when section is in viewport
      if (
        scrollPosition > sectionScrollStart &&
        scrollPosition < sectionScrollEnd
      ) {
        const relativeScroll = scrollPosition - sectionScrollStart;
        setOffsetY(relativeScroll * 0.3); // Adjust 0.3 for parallax speed
      }
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{ color: "white", overflow: "hidden", position: "relative" }}
    >
      {/* Background Logo with Parallax */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "140%",
            top: "-50%",
            transform: `translateY(${offsetY}px)`,
            willChange: "transform",
          }}
        >
          <Image
            src="/AthleticCore/images/aboutBackground.png"
            alt="CORE ATHLETE Logo"
            fill
            style={{ objectFit: "cover", opacity: 0.2 }}
            sizes="100vw"
            priority
          />
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "384px", lg: "500px" },
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt="Athletic training"
                fill
                style={{ objectFit: "contain" }}
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </Box>
          </Grid>

          {/* Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Chip
                label="Our Philosophy"
                sx={{
                  alignSelf: "flex-start",
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
                }}
              >
                {title.split(" ").map((word, index) => {
                  const isHighlight = word.includes("C.O.R.E");
                  return (
                    <Fragment key={index}>
                      <Box
                        component="span"
                        sx={{ color: isHighlight ? "primary.main" : "inherit" }}
                      >
                        {word}
                      </Box>
                      {index < title.split(" ").length - 1 ? " " : ""}
                    </Fragment>
                  );
                })}
              </Typography>

              {description.map((para, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{
                    fontSize: "1.125rem",
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                  }}
                >
                  {para}
                </Typography>
              ))}

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
              >
                {philosophy?.map((item) => (
                  <PhilosophyItem key={item.letter} {...item} />
                ))}
              </Box>

              <Link href="#contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 2,
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    color: "black",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    alignSelf: "flex-start",
                  }}
                >
                  Start Your Journey
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function PhilosophyItem({
  letter,
  word,
  description,
}: {
  letter: string;
  word: string;
  description: string;
}) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box
        sx={{
          flexShrink: 0,
          width: 48,
          height: 48,
          borderRadius: "50%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.25rem", fontWeight: 900, color: "black" }}
        >
          {letter}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#f1f5f9",
            mb: 0.5,
          }}
        >
          {word}
        </Typography>
        <Typography sx={{ fontSize: "0.875rem", color: "#cbd5e1" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
