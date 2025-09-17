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
          maxHeight: "750px",
        }}
      >
        <Box
          sx={{
            marginTop: "25px",
            top: "20px",
            left: "70px",
            zIndex: 2,
          }}
        >
          <Image
            src="/images/proptech-logo.png"
            alt="Technelolodja"
            width={270}
            height={91}
          />
        </Box>

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
            top: "340px",
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

          <Stack direction="row" spacing={2} sx={{ marginTop: "42px" }}>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                borderColor: "#fff",
                borderRadius: "10px",
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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
