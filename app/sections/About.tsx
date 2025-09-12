import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import WhoWeAre from "./WhoWeAre";

export default function About() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1450px",
          maxHeight: "750px",
          position: "relative",
        }}
      >
        <Box>
          <WhoWeAre />
        </Box>
      </Container>
    </Box>
  );
}
