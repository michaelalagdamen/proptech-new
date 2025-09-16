"use client";

import * as React from "react";
import { Button, Box, Typography, Container, Stack } from "@mui/material";
import Image from "next/image";

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

        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
            marginTop: "-150px",
            // zIndex: 9999,
          }}
        >
          <Button
            variant="text"
            href="/"
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "20px",
              textTransform: "none",
              color: "#222959",
              "&:hover, &:focus": {
                color: "#672361",
                fontWeight: 700,
              },
            }}
          >
            About
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              src="/icons/circle.svg"
              alt="Call Icon"
              width={5}
              height={5}
            />
          </Box>

          <Button
            variant="text"
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              textTransform: "none",
              color: "#222959",
              ":hover": { fontColor: "#672361", fontWeight: 600 },
            }}
          >
            Product Listing
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              src="/icons/circle.svg"
              alt="Call Icon"
              width={5}
              height={5}
            />
          </Box>

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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              src="/icons/circle.svg"
              alt="Call Icon"
              width={5}
              height={5}
            />
          </Box>

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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Image
              src="/icons/circle.svg"
              alt="Call Icon"
              width={5}
              height={5}
            />
          </Box>

          <Button
            href="/"
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20px",
              textTransform: "none",
              color: "#222959",
              "&:hover": {
                color: "#672361",
                fontWeight: 700,
              },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
