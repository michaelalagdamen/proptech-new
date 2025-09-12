import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import WhoWeAre from "./WhoWeAre";

export default function Hero() {
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
