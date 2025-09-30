"use client";

import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function WhoWeAre() {
  const [open, setOpen] = useState(false);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          marginTop: "100px",
        }}
      >
        <Box>
          <Image
            src="/images/aboutImage.png"
            alt="Team"
            width={720}
            height={500}
          />
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#672361",
              fontSize: "45px",
              fontWeight: 700,
            }}
          >
            People Behind PropTech
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 600,
              color: "#222959",
              maxWidth: "560px",
              lineHeight: "35px",
              textAlign: "left",
              marginTop: "7px",
            }}
          >
            Passionate professionals at the forefront of progress and
            collaboration.
          </Typography>
          <Typography
            sx={{
              fontSize: "23px",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 400,
              color: "#222959",
              maxWidth: "560px",
              lineHeight: "33px",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            We are a community of innovators and visionaries reshaping real
            estate through PropTech. By fostering collaboration, we empower
            businesses and organizations to embrace digital transformation, push
            boundaries, and unlock new opportunities for growth.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "40px",
              color: "#672361",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 400,
              marginTop: "30px",
            }}
          >
            Anthony Leuterio
          </Typography>

          <Typography
            sx={{
              color: "#222959",
              fontSize: "18ox",
              fontFamily: "Outfit, sans-serif",
              fontWeight: 300,
              marginTop: "20px",
            }}
          >
            Founder of PropTech PH • CEO/Founder of Filipino Homes
          </Typography>

          <Box sx={{ marginTop: "20px" }}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              className="text-[#672361] hover:text-[#222959] font-medium"
            >
              View Certificate
            </Link>
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: "#672361",
                  zIndex: 1,
                }}
              >
                <CloseIcon />
              </IconButton>

              <DialogContent sx={{ p: 0 }}>
                <Image
                  src="/images/certificate-CJSHc-71.png"
                  alt="Certificate"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
