"use client";

import { useState } from "react";
import { Box, Container, Typography, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProgramFAQContent {
  title: string;
  subtitle?: string;
  questions: FAQItem[];
}

interface Props {
  content: ProgramFAQContent;
}

export default function ProgramFAQ({ content }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container maxWidth="xl">
      {/* Section Header */}
      <Box sx={{ textAlign: "center", maxWidth: "768px", mx: "auto", mb: 8 }}>
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
                color: word === "Questions" ? "primary.main" : "white",
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

      {/* FAQ Items */}
      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {content.questions.map((item, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              overflow: "hidden",
              bgcolor: "rgba(255, 255, 255, 0.02)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.04)",
                borderColor: "rgba(163, 230, 53, 0.2)",
              },
            }}
          >
            {/* Question Button */}
            <Box
              onClick={() => toggleQuestion(index)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                p: { xs: 2.5, md: 3 },
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontWeight: 600,
                  color: openIndex === index ? "primary.main" : "white",
                  transition: "color 0.3s",
                }}
              >
                {item.question}
              </Typography>

              <Box
                sx={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  bgcolor:
                    openIndex === index
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s",
                  color: openIndex === index ? "#000" : "white",
                }}
              >
                {openIndex === index ? (
                  <RemoveIcon sx={{ fontSize: "20px" }} />
                ) : (
                  <AddIcon sx={{ fontSize: "20px" }} />
                )}
              </Box>
            </Box>

            {/* Answer */}
            <Collapse in={openIndex === index} timeout={300}>
              <Box
                sx={{
                  px: { xs: 2.5, md: 3 },
                  pb: { xs: 2.5, md: 3 },
                  pt: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9375rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.answer}
                </Typography>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
