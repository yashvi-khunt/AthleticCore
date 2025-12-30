"use client";

import { Box } from "@mui/material";

interface YouTubeBackgroundProps {
  videoId: string;
  opacity?: number;
}

export default function YouTubeBackground({
  videoId,
  opacity = 0.4,
}: YouTubeBackgroundProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "black",
          opacity: 1 - opacity,
          zIndex: 1,
        },
      }}
    >
      <Box
        component="iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1`}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "56.25vw", // 16:9 aspect ratio
          minHeight: "100vh",
          minWidth: "177.77vh", // 16:9 aspect ratio
          transform: "translate(-50%, -50%)",
          border: "none",
          zIndex: 0,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </Box>
  );
}
