import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Schools() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          border: "4px solid #0A0F2C",
          borderRadius: "50px",
          px: 5,
          py: 6,
          mb: 6,
          position: "relative",
          width: "400px",
          height: "200px",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "-20px",
            left: "100px",
            fontSize: "26px",
            fontWeight: 800,
            color: "#0A0F2C",
            backgroundColor: "#fff",
            px: 2,
            width: "500px",
          }}
        >
          University of Cebu
        </Typography>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.2,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/uc-logo.png"
            alt="UC Logo"
            width={200}
            height={0}
          />
        </Box>

        <Typography
          sx={{
            fontSize: "22px",
            fontStyle: "italic",
            color: "#0A0F2C",
            textAlign: "center",
            fontWeight: 800,
            mt: -1,
          }}
        >
          Main Campus <br />
          Banilad Campus
          <br />
          Lapu-Lapu City & Mandaue Campus
        </Typography>
      </Box>
    </Container>
  );
}
