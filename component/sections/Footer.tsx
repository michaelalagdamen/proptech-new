"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
<<<<<<< HEAD
    <Box sx={{ bgcolor: "#0A1A61", color: "#fff", mt: 8, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <Grid>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontFamily: "Outfit, sans-serif" }}
            >
              Future <span style={{ color: "#3B82F6" }}>Driven</span> Together
            </Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2563EB",
                "&:hover": { bgcolor: "#1E40AF" },
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid>
            <Image
              src="/images/proptech-logo.png"
              alt="PropTech Logo"
              width={180}
              height={60}
            />
            <Typography
              sx={{ mt: 2, mb: 2, fontSize: "14px", color: "#E5E7EB" }}
            >
              Discover cutting-edge technology designed to elevate your
              experience and drive the future.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, fontSize: "20px" }}>
              <MuiLink href="#" color="inherit">
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
=======
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "750px",
        position: "relative",
        paddingBottom: "25px",
      }}
    >
      <Box
        sx={{
          bgcolor: "#0A1A61",
          color: "#fff",
          mt: 8,
          pt: 6,
          pb: 3,
          borderRadius: "15px",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <Grid>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, fontFamily: "Outfit, sans-serif" }}
              >
                Future <span style={{ color: "#3B82F6" }}>Driven</span> Together
              </Typography>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#2563EB",
                  "&:hover": { bgcolor: "#1E40AF" },
                  borderRadius: "8px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Contact Us
              </Button>
            </Grid>
>>>>>>> ed6b31b05844964e764473f1dc345fd71823039f
          </Grid>

          <Grid container spacing={6}>
            <Grid>
              <Image
                src="/images/proptech-white.png"
                alt="PropTech Logo"
                width={180}
                height={60}
              />
              <Typography
                sx={{ mt: 2, mb: 2, fontSize: "14px", color: "#E5E7EB" }}
              >
                Discover cutting-edge technology designed to elevate your
                experience and drive the future.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, fontSize: "20px" }}>
                <MuiLink href="#" color="inherit">
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
            </Grid>

            <Grid>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>Featured</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Featured Companies
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Featured Products
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Featured Events
                </MuiLink>
              </Box>
            </Grid>

            <Grid>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  About
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Product Listing
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Events
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Listed Companies
                </MuiLink>
              </Box>
            </Grid>

            <Grid>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>News</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Latest News
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Opinion & Analysis
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Videos
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  Sponsored Content
                </MuiLink>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 6, pt: 3, borderTop: "1px solid #1E3A8A" }}
          >
            <Grid>
              <Typography sx={{ fontSize: "12px", color: "#D1D5DB" }}>
                © Copyright 2025 PropTech Philippines. All rights reserved
              </Typography>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", gap: 3 }}>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ fontSize: "12px" }}
                >
                  User Terms & Conditions
                </MuiLink>
                <MuiLink
                  component={Link}
                  href="#"
                  underline="none"
                  color="inherit"
                  sx={{ fontSize: "12px" }}
                >
                  Privacy Policy
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
<<<<<<< HEAD

          <Grid>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>News</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
              >
                Latest News
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
              >
                Opinion & Analysis
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
              >
                Videos
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
              >
                Sponsored Content
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 6, pt: 3, borderTop: "1px solid #1E3A8A" }}
        >
          <Grid>
            <Typography sx={{ fontSize: "12px", color: "#D1D5DB" }}>
              © Copyright 2025 PropTech Philippines. All rights reserved
            </Typography>
          </Grid>
          <Grid>
            <Box sx={{ display: "flex", gap: 3 }}>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
                sx={{ fontSize: "12px" }}
              >
                User Terms & Conditions
              </MuiLink>
              <MuiLink
                component={Link}
                href="#"
                underline="none"
                color="inherit"
                sx={{ fontSize: "12px" }}
              >
                Privacy Policy
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
=======
        </Container>
      </Box>
    </Container>
>>>>>>> ed6b31b05844964e764473f1dc345fd71823039f
  );
}
