"use client";
import * as React from "react";
import { Button, Box, Container, Stack } from "@mui/material";
import Image from "next/image";

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
            marginRight: "30px",
            marginTop: "-130px",
            // zIndex: 9999,
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
            href="/product-listing"
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
            href="/events"
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
            href="/listed-company"
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
            href="/news"
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
