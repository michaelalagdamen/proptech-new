import * as React from "react";
import { Card, CardContent, Button, Typography, Box } from "@mui/material";
import Image from "next/image";

export default function ProductListing() {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(316px, 1fr))",
          gridTemplateRows: "297px",
          gap: 3,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              maxHeight: 300,
              wmaxWidth: 316,
              borderRadius: "15px",
              boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              zIndex: 2,
              position: "relative",
            }}
          >
            <CardContent sx={{ padding: "15px" }}>
              {/* <Image
                src="/images/proptech-logo.png"
                alt="Technelolodja"
                width={133}
                height={116}
              /> */}

              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontFamily: "Outfit, sans-serif",
                  color: "#6E1B5D",
                  fontSize: "25px",
                  fontWeight: 700,
                  marginTop: "10px",
                  width: "150px",
                  textAlign: "left",
                }}
              >
                Blink Video Doorbell
              </Typography>
              <Typography
                sx={{
                  marginTop: "80px",
                  fontFamily: "Outfit, sans-serif",
                  color: "#222959",
                  fontSize: "20px",
                  fontWeight: 700,
                  width: "100%",
                  height: "100%",
                }}
              >
                DoorSmary
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  fontFamily: "Outfit, sans-serif",
                  color: "#222959",
                  fontSize: "18px",
                  lineHeight: "30px",
                  fontWeight: 300,
                  width: "285px",
                }}
              >
                Standout features like its 135° field of view, 1080p resolution,
                and seamless Alexa integration.
              </Typography>
            </CardContent>
          </Card>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              bottom: -40,
              left: "50%",
              transform: "translateX(-50%)",
              width: "331px",
              height: "60px",
              backgroundColor: "#672361",
              borderRadius: " 0 0 15px 15px",
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontWeight: 300,
                textTransform: "none",
                marginTop: "30px",
                fontSize: "18px",
              }}
            >
              Click Here
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
