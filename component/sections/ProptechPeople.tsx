import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        marginTop: "60px",
        textAlign: "center",
        mt: 15,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "#0A0F2C",
          fontSize: "70px",
          letterSpacing: "-3px",
          mb: 4,
          textAlign: "left",
        }}
      >
        People Behind Proptech
      </Typography>

      <Box
        sx={{
          border: "3px solid #0A0F2C",
          borderRadius: "30px",
          padding: "12px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          mb: 4,
        }}
      >
        <Image
          src="/images/people.png"
          alt="Who We Are Team"
          width={1200}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#0A0F2C",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        “We are a community of innovators and visionaries reshaping real estate
        through PropTech. By fostering collaboration, we empower businesses and
        organizations to embrace digital transformation, push boundaries, and
        unlock new opportunities for growth.”
      </Typography>
    </Container>
  );
}
