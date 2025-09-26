"use client";

import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import SchoolCards from "./cards/SchoolCards";

export default function Schools() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "749vh",
        position: "relative",
      }}
    >
      <Box sx={{ marginTop: "60px" }}>
        <Typography
          sx={{
            fontFamily: "Outfit, sans-serif",
            color: "#222959",
            fontSize: "40px",
            fontWeight: 700,
          }}
        >
          Collaborated Schools
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
          Building stronger futures through partnerships that inspire growth and
          learning.
        </Typography>

        {/* <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 600,
            color: "#222959",
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          Cebu City
        </Typography> */}
      </Box>

      <SchoolCards />
    </Container>
  );
}
