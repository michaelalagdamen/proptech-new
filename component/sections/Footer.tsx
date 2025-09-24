"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "750px",
        position: "relative",
        paddingBottom: "25px",
        marginTop: "180px",
      }}
    >
      <Box
        sx={{
          bgcolor: "#00165E",
          color: "#fff",
          borderRadius: "15px",
          padding: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "240px",
            gap: 14,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontFamily: "Outfit, sans-serif",
                fontSize: "50px",
              }}
            >
              Future <span style={{ color: "#3B82F6" }}>Driven</span> Together
            </Typography>
            <Divider
              sx={{
                marginTop: "17px",
                width: "950px",
                height: "2px",
                backgroundColor: "#0533B7",
              }}
            />
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{
                width: "250px",
                height: "67px",
                bgcolor: "#0533B7",
                "&:hover": { bgcolor: "#3456B9", boxShadow: "none" },
                borderRadius: "8px",
                boxShadow: "none",
              }}
            >
              <Link href="/contact" passHref>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontFamily: "Outfit, sans-serif",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Box sx={{ marginTop: "55px" }}>
            <MuiLink href="/home">
              <Image
                src="/images/proptech-white.png"
                alt="PropTech Logo"
                width={180}
                height={60}
              />
            </MuiLink>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#E5E7EB",
                width: "420px",
                marginTop: "30px",
                fontWeight: 300,
                lineHeight: "25px",
                fontFamily: "Outfit, sans-serif",
              }}
            >
              Discover cutting-edge technology designed to elevate your
              experience and drive the future.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                fontSize: "20px",
                marginTop: "25px",
              }}
            >
              <MuiLink
                href="https://www.facebook.com/proptechphilippines"
                color="inherit"
              >
                <Facebook />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <Instagram />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <Twitter />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <LinkedIn />
              </MuiLink>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: "110px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              gap: 15,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  marginTop: "75px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "25px",
                }}
              >
                Featured
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop: "25px",
                }}
              >
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Featured Company
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Featured Products
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Featured Events
                </MuiLink>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  marginTop: "75px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "25px",
                }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop: "25px",
                }}
              >
                <MuiLink
                  component={Link}
                  href="/about"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  About
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/product-listing"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Product Listing
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/events"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Events
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="/listed-company"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Listed Companies
                </MuiLink>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  marginTop: "75px",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "25px",
                }}
              >
                News
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  marginTop: "25px",
                }}
              >
                <MuiLink
                  component={Link}
                  href=""
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Latest News
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Opinion & Analysis
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="https://www.youtube.com/watch?v=JhKpUbTGjIc"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Videos
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "18px",
                  }}
                >
                  Sponsored Content
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
            marginTop: "80px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "20px", color: "#fff", fontWeight: 300 }}
            >
              © Copyright 2025 PropTech Philippines. All rights reserved
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
                sx={{ fontSize: "20px" }}
              >
                User Terms & Conditions
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
                sx={{ fontSize: "20px" }}
              >
                Privacy Policy
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
