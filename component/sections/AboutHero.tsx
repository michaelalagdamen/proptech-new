import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function AboutHero() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "750px",
        position: "relative",
        overflow: "hidden",
        p: 0,
      }}
    >
      <Image
        src="/images/about-hero.png"
        alt="Hero Background"
        width={1450}
        height={750}
        style={{
          borderRadius: "20px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 43,
          left: 50,
          width: "1075px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          py: 3.5,
          backdropFilter: "blur(40px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0px 4px 24px -1px rgba(0,0,0,0.2)",
          borderRadius: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            Product Listing
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            Listed Companies
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            Contacts
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            Events
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 43,
          left: 1230,
          width: "145px",
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 3.5,
          backgroundColor: "rgba(81, 116, 255, 100)",
          borderRadius: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Outfit, sans-serif",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            Join Us!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "185px",
          left: "55px",
          zIndex: 2,
        }}
      >
        <Image src="/images/proptech-logo.png" alt="" width={280} height={80} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "300px",
          left: "320px",
          zIndex: 2,
          width: "990px",
        }}
      >
        <Typography
          sx={{
            fontSize: "100px",
            color: "#ffffff",
            fontFamily: "Outfit, sans-serif",
            fontWeight: "Bold",
            letterSpacing: "-1px",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "440px",
          left: "150px",
          width: "600px",
          textAlign: "right",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            color: "#ffffff",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          Experience the power of cutting-edge technology built to elevate your
          journey and shape the future.
        </Typography>
      </Box>
    </Container>
  );
}
