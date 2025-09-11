"use client";

import * as React from "react";
import { Button, Box, Typography } from "@mui/material";

export default function Navs() {
  return (
    <Box>
      <Box
        position="relative"
        sx={{
          background: "transparent",
          top: "-97px",
          left: "105px",
          padding: "10px 40px",
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 5 }}>
          <Button
            sx={{
              borderTop: "1px solid #fff",
              borderLeft: "1px solid #fff",
              borderRight: "none",
              borderBottom: "none",
              transform: "skew(-30deg)",
              padding: "10px 40px",
              borderRadius: "10px 0 0 0",
              background: "transparent",
              width: "200px",
              height: "75px",
            }}
          >
            <Box sx={{ transform: "skew(30deg)" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "22px",
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  textTransform: "none",
                  width: "180px",
                  textAlign: "left",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                }}
              >
                Featured Company
              </Typography>
            </Box>
          </Button>

          <Button
            sx={{
              borderTop: "1px solid #fff",
              borderLeft: "1px solid #fff",
              borderRight: "none",
              borderBottom: "none",
              transform: "skew(-30deg)",
              padding: "10px 40px",
              borderRadius: "10px 0 0 0",
              background: "transparent",
              width: "200px",
              height: "75px",
            }}
          >
            <Box sx={{ transform: "skew(30deg)" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "22px",
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  textTransform: "none",
                  width: "180px",
                  textAlign: "left",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                }}
              >
                Featured Products
              </Typography>
            </Box>
          </Button>

          <Button
            sx={{
              borderTop: "1px solid #fff",
              borderLeft: "1px solid #fff",
              borderRight: "none",
              borderBottom: "none",
              transform: "skew(-30deg)",
              padding: "10px 40px",
              borderRadius: "10px 0 0 0",
              background: "transparent",
              width: "200px",
              height: "75px",
            }}
          >
            <Box sx={{ transform: "skew(30deg)" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "22px",
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  textTransform: "none",
                  width: "180px",
                  textAlign: "left",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                }}
              >
                Featured Events
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "55px",
          marginTop: "-150px",
          gap: "22px",
          zIndex: 9999,
        }}
      >
        <Button
          href="/"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            color: "#222959",
            backgroundColor: "transparent",
            boxShadow: "none",
            "&:hover": {
              color: "#672361",
              fontWeight: 800,
              backgroundColor: "transparent", // keeps it clean, no gray hover
            },
          }}
        >
          About
        </Button>
        <Button
          href="/"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            color: "#222959",
            ":hover": { color: "#672361", fontWeight: 800 },
          }}
        >
          Product Listing
        </Button>
        <Button
          href="/"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            color: "#222959",
            ":hover": { color: "#672361", fontWeight: 600 },
          }}
        >
          Events
        </Button>
        <Button
          href="/"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            color: "#222959",
            ":hover": { color: "#672361", fontWeight: 600 },
          }}
        >
          Listed Companies
        </Button>
        <Button
          href="/"
          sx={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textTransform: "none",
            color: "#222959",
            ":hover": { color: "#672361", fontWeight: 600 },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
