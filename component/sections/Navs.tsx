"use client";
import Link from "next/link";
import * as React from "react";
import { Button, Box, Typography, Container } from "@mui/material";

export default function Navs() {
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
                <Link href="/listed-company" passHref>
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
                </Link>
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
                <Link href="/product-listing" passHref>
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
                </Link>
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
                <Link href="/events" passHref>
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
                </Link>
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
