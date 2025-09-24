"use client";

import * as React from "react";
import { Button, Box, Container, Stack } from "@mui/material";
import LensRoundedIcon from "@mui/icons-material/LensRounded";

export default function SmallNavs() {
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
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "30px",
            marginTop: "-130px",
          }}
        >
          <Button
            href="/about"
            variant="text"
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
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
      </Container>
    </Box>
  );
}
