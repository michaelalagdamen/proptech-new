import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default function Hero() {
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
            src="/images/hero-bg.png"
            alt="Technelolodja"
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
          <Image
            src="/images/proptech-logo.png"
            alt="Technelolodja"
            width={280}
            height={80}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "460px",
            left: "80px",
            zIndex: 2,
            width: "990px",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
              textTransform: "uppercase",
              lineHeight: "50px",
            }}
          >
            your partner in shaping smarter digital landscapes
          </Typography>

          <Divider
            sx={{ width: "988px", height: "1px", backgroundColor: "#ffffff" }}
          />
          <Typography
            sx={{
              fontSize: "22px",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Experience the power of cutting-edge technology built to elevate
            your journey and shape the future.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
