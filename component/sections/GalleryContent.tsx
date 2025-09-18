"use client";

import * as React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import Image from "next/image";

export default function GalleryContent() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "4676px",
      }}
    >
      <Box sx={{ marginTop: "70px" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            Latest PropTech Highlights
          </Typography>
          <Typography
            sx={{
              marginTop: "60px",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            HACKESTATE Finals in Davao City
          </Typography>
        </Box>

        <Box sx={{ marginTop: "70px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            HACKESTATE Hosted in Cebu
          </Typography>
          <Typography
            sx={{
              marginTop: "60px",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            First PropTech Hackathon Hosted in Cebu
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
