import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function MissionVision() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        py: 5,
        fontFamily: "Outfit, sans-serif",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#101733",
          height: "310px",
          width: "1400px",
          borderRadius: "50px",
          p: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "70px",
              fontWeight: 700,
              fontFamily: "Outfit, sans-serif",
              color: "#fff",
              mb: 3,
            }}
          >
            Our Journey
          </Typography>

          {/* Cebu + Mindanao side by side */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                px: 4,
                py: 1,
                borderRadius: "10px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2B3045",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#101733",
                  fontSize: "40px",
                  fontWeight: "800px",
                  fontFamily: "Outfit, sans-serif",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                Cebu
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                px: 4,
                py: 1,
                borderRadius: "10px",
                fontFamily: "Outfit, sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2B3045",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#101733",
                  fontSize: "40px",
                  fontWeight: "800px",
                  fontFamily: "Outfit, sans-serif",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                Mindanao
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
