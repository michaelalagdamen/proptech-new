"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Button,
} from "@mui/material";

import Image from "next/image";

export default function GalleryHero() {
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
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <Image
            src="/images/gallery-bg.jpg"
            alt="Technelolodja"
            width={1450}
            height={450}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "320px",
            left: "100px",
            zIndex: 2,
            width: "990px",
          }}
        >
          <Typography
            sx={{
              width: "780px",
              fontSize: "60px",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
              textTransform: "uppercase",
              lineHeight: "60px",
            }}
          >
            inside the hackestate journey
          </Typography>

          <Divider
            sx={{ width: "930px", height: "1px", backgroundColor: "#ffffff" }}
          />
          <Typography
            sx={{
              fontSize: "22px",
              color: "#ffffff",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
            }}
          >
            Take a closer look at the milestones and moments that shaped the
            HACKESTATE experience.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ marginTop: "45px" }}>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                borderColor: "#fff",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                Latest Highlights
              </Typography>
            </Button>

            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                borderColor: "#fff",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                Luzon
              </Typography>
            </Button>

            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                borderColor: "#fff",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                Visayas
              </Typography>
            </Button>

            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                borderColor: "#fff",
                borderRadius: "10px",
                ":hover": {
                  bgcolor: "rgba(217, 217, 217, 0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 300,
                }}
              >
                Mindanao
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
