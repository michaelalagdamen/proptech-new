"use client";

import * as React from "react";
import { Button, Box, Typography, Container } from "@mui/material";

export default function Navs() {
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
          position="relative"
          sx={{
            background: "transparent",
            top: "-97px",
            left: "50px",
            padding: "10px 40px",
            zIndex: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 3 }}>
            <Button
              sx={{
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
                  background: "#292045",
                },
              }}
            >
              <Box sx={{ transform: "skew(42deg)" }}>
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
                    paddingTop: "2px",
                    "&:hover": {
                      color: "#fff",
                      fontWeight: 700,
                    },
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
                transform: "skew(-42deg)",
                padding: "10px 40px",
                borderRadius: "10px 0 0 0",
                background: "transparent",
                width: "200px",
                height: "75px",
                "&:hover, &:focus": {
                  borderTop: "3px solid #fff",
                  borderLeft: "3px solid #fff",
                  background: "#292045",
                },
              }}
            >
              <Box sx={{ transform: "skew(42deg)" }}>
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
                    paddingTop: "2px",
                    "&:hover": {
                      color: "#fff",
                      fontWeight: 700,
                    },
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
                transform: "skew(-42deg)",
                padding: "10px 40px",
                borderRadius: "10px 0 0 0",
                background: "transparent",
                width: "200px",
                height: "75px",
                "&:hover, &:focus": {
                  borderTop: "3px solid #fff",
                  borderLeft: "3px solid #fff",
                  background: "#273157",
                },
              }}
            >
              <Box sx={{ transform: "skew(42deg)" }}>
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
                    paddingTop: "2px",
                    "&:hover": {
                      color: "#fff",
                      fontWeight: 700,
                    },
                  }}
                >
                  Featured Events
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
