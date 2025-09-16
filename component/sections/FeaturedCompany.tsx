import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import CompanyListCards from "./cards/CompanyLIstCards";

export default function FeaturedCompany() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        position: "relative",
        marginTop: "100px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Outfit, sans-serif",
            color: "#672361",
            fontSize: "40px",
            fontWeight: 700,
          }}
        >
          Featured Company
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
          Discover listed companies and explore the opportunities they bring to
          the market.
        </Typography>
      </Box>

      <CompanyListCards />
    </Container>
  );
}
