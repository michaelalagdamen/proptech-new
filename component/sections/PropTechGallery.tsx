"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Container, Box, Button, Paper } from "@mui/material";
import Image from "next/image";
import GalleryImages from "./gallery-boxes/GalleryImages";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function PropTechGallery() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "4676px",
      }}
    >
      <Box sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            PropTech Highlights and Success Stories
          </Typography>

          <Box
            sx={{
              marginLeft: "260px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "260px",
                height: "54px",
                backgroundColor: "#fff",
                borderRadius: "15px 0 0 15px",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "25px",
                lineHeight: "30px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              PropTech Gallery
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "60px",
                height: "55px",
                backgroundColor: "#222959",
                borderRadius: "0 15px 15px 0",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#747CB2",
                  fontWeight: 600,
                },
              }}
            >
              <Image
                src="/icons/view-icon.svg"
                alt="ViewIcon"
                width={30}
                height={30}
              />
            </Button>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              marginTop: "7px",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            Discover key highlights and success stories driving PropTech
            forward.
          </Typography>
        </Box>

        <GalleryImages />
      </Box>
    </Container>
  );
}
