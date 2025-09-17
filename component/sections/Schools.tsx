import * as React from "react";
import { Typography, Container, Box } from "@mui/material";
import SchoolCards from "./cards/SchoolCards";

export default function Schools() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "749px",
        position: "relative",
      }}
    >
      <Box sx={{ marginTop: "10px" }}>
        <Typography
          sx={{
            fontSize: "70px",
            fontWeight: 700,
            color: "#0A0F2C",
            mb: 4,
          }}
        >
          Collaborated Schools
        </Typography>

        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: 700,
            color: "#0A0F2C",
            mb: 4,
          }}
        >
          Cebu City
        </Typography>
      </Box>

      <SchoolCards />
    </Container>
  );
}
