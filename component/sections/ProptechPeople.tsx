"use client";

import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        marginTop: "80px",
        textAlign: "left",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Outfit, sans-serif",
          color: "#222959",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        People Behind PropTech
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
        Passionate professionals at the forefront of progress, collaboration,
        and innovation in PropTech.
      </Typography>

      <Box sx={{ marginTop: "50px" }}>
        <Image
          src="/images/aboutImage.png"
          alt="Team"
          width={596}
          height={466}
        />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 400,
            color: "#222959",
            maxWidth: "1100px",
            margin: "0 auto",
            lineHeight: "35px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          “We are a community of innovators and visionaries reshaping real
          estate through PropTech. By fostering collaboration, we empower
          businesses and organizations to embrace digital transformation, push
          boundaries, and unlock new opportunities for growth.”
        </Typography>
      </Box>
    </Container>
  );
}
