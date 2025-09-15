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
// If you have @mui/icons-material installed, uncomment below
// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0A1A61", color: "#fff", mt: 8, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        {/* Top Row */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontFamily: "Outfit, sans-serif" }}
            >
              Future <span style={{ color: "#3B82F6" }}>Driven</span> Together
            </Typography>
          </Grid>
          <Grid item>
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

        {/* Middle Row */}
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
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

            {/* Social Media Icons (replace with real icons if installed) */}
            <Box sx={{ display: "flex", gap: 2, fontSize: "20px" }}>
              {/* If using icons: <Facebook />, <Instagram />, <Twitter />, <LinkedIn /> */}
              <span>🌐</span>
              <span>📷</span>
              <span>🐦</span>
              <span>💼</span>
            </Box>
          </Grid>

          {/* Featured Links */}
          <Grid item xs={12} sm={4} md={2}>
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

          {/* Quick Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>Quick Links</Typography>
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

          {/* News */}
          <Grid item xs={12} sm={4} md={2}>
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

        {/* Bottom Row */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 6, pt: 3, borderTop: "1px solid #1E3A8A" }}
        >
          <Grid item>
            <Typography sx={{ fontSize: "12px", color: "#D1D5DB" }}>
              © Copyright 2025 PropTech Philippines. All rights reserved
            </Typography>
          </Grid>
          <Grid item>
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
  );
}
