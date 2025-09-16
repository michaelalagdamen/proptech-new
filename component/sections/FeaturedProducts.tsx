import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import ProductsCards from "./cards/ProductsCards";

export default function FeaturedProducts() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "749px",
        position: "relative",
      }}
    >
      <Box sx={{ marginTop: "100px" }}>
        <Typography
          sx={{
            fontFamily: "Outfit, sans-serif",
            color: "#672361",
            fontSize: "40px",
            fontWeight: 700,
          }}
        >
          Featured Products
        </Typography>
        <Typography
          sx={{
            marginTop: "7px",
            fontFamily: "Outfit, sans-serif",
            color: "#672361",
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: 300,
          }}
        >
          Explore innovative solutions crafted to make your everyday life
          simpler and smarter.
        </Typography>
      </Box>

      <ProductsCards />
    </Container>
  );
}
