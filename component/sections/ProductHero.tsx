"use client";

import * as React from "react";
import { Box, Typography, Container, Link as MuiLink } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default function AboutHero() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          maxHeight: "750px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Image
            src="/images/about-hero.jpg"
            alt=""
            width={1450}
            height={750}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "70px",
            zIndex: 2,
          }}
        >
          <MuiLink href="/home">
            <Image
              src="/images/proptech-logo.png"
              alt=""
              width={280}
              height={80}
            />
          </MuiLink>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "250px",
            left: "60px",
            zIndex: 2,
            width: "990px",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "semi-bold",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
              textTransform: "uppercase",
              lineHeight: "50px",
            }}
          >
            innovative products for <br />
            smarter living
          </Typography>

          <Divider
            sx={{ width: "765px", height: "1px", backgroundColor: "#ffffff" }}
          />
          <Typography
            sx={{
              fontSize: "22px",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Innovative tech designed to enhance everyday living with ease and
            efficiency.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
