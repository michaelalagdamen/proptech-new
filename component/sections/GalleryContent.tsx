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
      <Box sx={{ marginTop: "100px" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            HackEstate
          </Typography>
          <Typography
            sx={{
              marginTop: "7px",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            The power of PropTech collaboration in action.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
