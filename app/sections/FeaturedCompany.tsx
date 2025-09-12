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
      <Box>
        <Typography
          sx={{
            marginTop: "100px",
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
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(420px, 380px), 1fr))",
          gap: 3,
        }}
      >
        <Card
          sx={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
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
                fontWeight: 700,
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
                width: "365px",
              }}
            >
              Our product lines include real solutions meant to help IMPROVE,
              ENHANCE and SECURE businesses on a day-to-day basis.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "420px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
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
                fontWeight: 700,
              }}
            >
              Smart Home
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "365px",
              }}
            >
              We provide end-to-end automation services that redefine the way
              you interact with your space.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "420px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
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
                fontWeight: 700,
              }}
            >
              iConnect Technologies Inc.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "365px",
              }}
            >
              Specializes in IT Solutions. We offer comprehensive, powerful
              solutions for your IT needs.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "420px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
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
