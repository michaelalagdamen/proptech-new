"use client";

import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function MissionVision() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        py: 15,
        fontFamily: "Outfit, sans-serif",
      }}
    >
      {/* Mission Section */}
      <Box
        sx={{
          border: "4px solid #0A0F2C",
          borderRadius: "50px",
          px: 5,
          py: 6,
          mb: 8,
          position: "relative",
          width: "920px",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-5px",
            fontSize: "60px",
            fontWeight: 800,
            color: "#0A0F2C",
            backgroundColor: "#fff",
            px: 3,
            letterSpacing: "-3px",
          }}
        >
          Our Mission
        </Typography>

        <Typography
          sx={{
            fontSize: "22px",
            fontStyle: "italic",
            color: "#0A0F2C",
            textAlign: "right",
            fontWeight: 800,
            mt: -3,
          }}
        >
          “Driving Change, One Solution at a Time.”
        </Typography>

        <Typography
          sx={{
            fontSize: "28px",
            color: "#0A0F2C",
            maxWidth: "1000px",
            mt: 6,
            lineHeight: "45px",
          }}
        >
          To be the trusted tech partner of choice for forward-thinking
          organizations across the Philippines and beyond — helping them thrive
          through meaningful, sustainable technology solutions.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
          pl: 60,
          mt: -40,
        }}
      >
        <Box sx={{ pl: 60 }}>
          <Image
            src="/images/brainy-bots.png"
            alt="Robot"
            width={450}
            height={400}
          />
        </Box>

        {/* Our Vision Box */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            position: "relative",
            width: "920px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: "-20px",
              right: "-5px",
              fontSize: "60px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 3,
              letterSpacing: "-3px",
            }}
          >
            Our Vision
          </Typography>

          {/* Description on top */}
          <Typography
            sx={{
              fontSize: "28px",
              color: "#0A0F2C",
              maxWidth: "1000px",
              lineHeight: "45px",
              textAlign: "right",
              mt: -1,
              mb: 6,
            }}
          >
            Through innovation, strategy, and clean code, we deliver PropTech
            solutions that drive progress — becoming the trusted partner for
            businesses in the digital real estate space.
          </Typography>

          {/* Quote below */}
          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "right",
              fontWeight: 800,
              width: "480px",
              mb: -3,
            }}
          >
            “Solutions Designed for Enduring Success.”
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
