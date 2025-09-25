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
        marginTop: "150px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(103, 35, 97, 0.6), rgba(34, 41, 89, 0.6)), url('/images/filterMission.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "0 200px 200px 0",
          left: -65,
          position: "relative",
          width: "955px",
          height: "296px",
        }}
      >
        <Box>
          <Typography
            sx={{
              position: "absolute",
              top: "-40px",
              left: "177px",
              fontSize: "50px",
              fontWeight: 600,
              color: "#672361",
              background: "#fff",
              borderRadius: "15px",
              width: "320px",
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
              textAlign: "center",
            }}
          >
            Our Mission
          </Typography>
        </Box>

        <Box sx={{ padding: "75px 60px 60px 135px" }}>
          <Typography
            sx={{
              fontSize: "25px",
              fontStyle: "italic",
              color: "#fff",
              textAlign: "left",
              fontWeight: 600,
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
            }}
          >
            “Driving Change, One Solution at a Time.”
          </Typography>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#fff",
              textAlign: "left",
              fontWeight: 300,
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
              maxWidth: "721px",
              lineHeight: "35px",
              marginTop: "25px",
            }}
          >
            To be the trusted tech partner of choice for forward-thinking
            organizations across the Philippines and beyond — helping them
            thrive through meaningful, sustainable technology solutions.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(103, 35, 97, 0.5), rgba(34, 41, 89, 0.7)), url('/images/filterVission.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "200px 0 0 200px",
            right: -65,
            position: "relative",
            width: "1390px",
            height: "296px",
            marginTop: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                position: "absolute",
                top: "-40px",
                right: 660,
                fontSize: "50px",
                fontWeight: 600,
                color: "#672361",
                background: "#fff",
                borderRadius: "15px",
                width: "300px",
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
                textAlign: "center",
              }}
            >
              Our Vision
            </Typography>
          </Box>

          <Box sx={{ marginTop: "25px" }}>
            <Typography
              sx={{
                fontSize: "25px",
                fontStyle: "italic",
                color: "#fff",
                textAlign: "right",
                fontWeight: 600,
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
              }}
            >
              “Solutions Designed for Enduring Success.”
            </Typography>

            <Typography
              sx={{
                fontSize: "25px",
                color: "#fff",
                textAlign: "right",
                fontWeight: 300,
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
                maxWidth: "721px",
                lineHeight: "35px",
                marginTop: "20px",
              }}
            >
              Through innovation, strategy, and clean code, we deliver PropTech
              solutions that drive progress — becoming the trusted partner for
              businesses in the digital real estate space.
            </Typography>
          </Box>

          <Box
            sx={{
              flexShrink: 0,
              marginTop: "-400px",
            }}
          >
            <Image
              src="/images/robot.png"
              alt="Robot"
              width={510}
              height={700}
              style={{ height: "695px" }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
