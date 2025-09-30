"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button, Box, Typography, Container } from "@mui/material";

export default function Navs() {
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1100px",
          maxHeight: "750px",
          position: "relative",
        }}
      >
        <Box
          position="relative"
          sx={{
            background: "transparent",
            top: "-85px",
            left: "-480px",
            zIndex: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 3 }}>
            {/* ✅ Featured Company */}
            {pathname === "/" ? (
              <Button
                onClick={() => scrollToSection("feature-company")}
                sx={navButtonStyle}
              >
                <Box sx={{ transform: "skew(42deg)" }}>
                  <Typography sx={navTextStyle}>Featured Company</Typography>
                </Box>
              </Button>
            ) : (
              <Link href="/#feature-company" passHref>
                <Button sx={navButtonStyle}>
                  <Box sx={{ transform: "skew(42deg)" }}>
                    <Typography sx={navTextStyle}>Featured Company</Typography>
                  </Box>
                </Button>
              </Link>
            )}

            {/* ✅ Featured Products */}
            {pathname === "/" ? (
              <Button
                onClick={() => scrollToSection("featured-products")}
                sx={navButtonStyle}
              >
                <Box sx={{ transform: "skew(42deg)" }}>
                  <Typography sx={navTextStyle}>Featured Products</Typography>
                </Box>
              </Button>
            ) : (
              <Link href="/#featured-products" passHref>
                <Button sx={navButtonStyle}>
                  <Box sx={{ transform: "skew(42deg)" }}>
                    <Typography sx={navTextStyle}>Featured Products</Typography>
                  </Box>
                </Button>
              </Link>
            )}

            {/* ✅ Featured Events (still just links) */}
            <Link href="/events" passHref>
              <Button sx={navButtonStyle}>
                <Box sx={{ transform: "skew(42deg)" }}>
                  <Typography sx={navTextStyle}>Featured Events</Typography>
                </Box>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const navButtonStyle = {
  borderTop: "1px solid #fff",
  borderLeft: "1px solid #fff",
  borderRight: "none",
  borderBottom: "none",
  transform: "skew(-42deg)",
  padding: "10px 40px",
  borderRadius: "10px 0 0 0",
  background: "transparent",
  width: "200px",
  height: "75px",
  "&:hover, &:focus": {
    borderTop: "3px solid #fff",
    borderLeft: "3px solid #fff",
    bgcolor: "rgba(217, 217, 217, 0.3)",
    boxShadow: "none",
  },
};

const navTextStyle = {
  fontSize: "25px",
  lineHeight: "22px",
  color: "#ffffff",
  fontFamily: "Outfit, sans-serif",
  textTransform: "none",
  width: "180px",
  textAlign: "left",
  paddingLeft: "30px",
  paddingTop: "2px",
};
