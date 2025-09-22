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

          <LensRoundedIcon
            sx={{
              color: "#222959",
              fontSize: "5px",
            }}
          />

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

          <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

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

          <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

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

          <LensRoundedIcon sx={{ color: "#222959", fontSize: "5px" }} />

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
            News
          </Button>
          {/* 
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
          </Button> */}
        </Stack>
      </Container>
    </Box>
  );
}
