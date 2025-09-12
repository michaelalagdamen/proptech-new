import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function FeaturedCompany() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1450px",
        maxHeight: "750px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(420px, 380px), 1fr))",
          gap: 2,
        }}
      >
        <Card
          sx={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            <Image
              src="/images/proptech-logo.png"
              alt="Technelolodja"
              width={180}
              height={60}
            />
            <Typography
              sx={{
                marginTop: "20px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              Infinite Systems Technology Corp.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
              }}
            >
              Our product lines include real solutions meant to help IMPROVE,
              ENHANCE and SECURE businesses on a day-to-day basis.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: "0 25px 0",
            }}
          >
            <Button
              size="small"
              sx={{
                width: "420px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
