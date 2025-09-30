"use client";

import * as React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import LensRoundedIcon from "@mui/icons-material/LensRounded";
import Link from "next/link";
import Image from "next/image";

export default function GalleryNavs() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          maxHeight: "2288px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            marginTop: "25px",
            display: "flex",
            alignItems: "center",
            gap: 70,
          }}
        >
          <Link href="/home">
            <Image
              src="/images/proptech-logo.png"
              alt="PropTech"
              width={270}
              height={91}
              style={{ display: "block", cursor: "pointer" }}
            />
          </Link>

          <Stack
            spacing={1}
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              href="/about"
              variant="text"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "20px",
                textTransform: "none",
                color: "#222959",
                "&:hover, &:focus": {
                  fontWeight: 700,
                  background: "transparent",
                },
              }}
            >
              About
            </Button>

            <LensRoundedIcon
              sx={{
                color: "#222959",
                fontSize: "5px",
              }}
            />

            <Button
              href="/product-listing"
              variant="text"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                textTransform: "none",
                color: "#222959",
                ":hover": {
                  fontWeight: 600,
                  background: "transparent",
                },
              }}
            >
              Product Listing
            </Button>

            <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

            <Button
              href="/events"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                textTransform: "none",
                color: "#222959",
                ":hover": {
                  fontWeight: 600,
                  background: "transparent",
                },
              }}
            >
              Events
            </Button>

            <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

            <Button
              href="/listed-company"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                textTransform: "none",
                color: "#222959",
                ":hover": {
                  fontWeight: 600,
                  background: "transparent",
                },
              }}
            >
              Listed Companies
            </Button>

            <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

            <Button
              href="/news"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20px",
                textTransform: "none",
                color: "#222959",
                "&:hover": {
                  fontWeight: 700,
                  background: "transparent",
                },
              }}
            >
              News
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
