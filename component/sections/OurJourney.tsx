"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Container, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MissionVision() {
  const [openCity, setOpenCity] = React.useState<"cebu" | "davao" | null>(null);

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
          backgroundColor: "#00165E",
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
              mt: -3,
              mb: 4,
              ml: -8,
            }}
          >
            Our Journey
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                px: 4,
                py: 1,
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#00165E",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => setOpenCity("cebu")}
            >
              <Typography
                sx={{
                  color: "#00165E",
                  fontSize: "40px",
                  fontWeight: 800,
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
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#00165E",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
              onClick={() => setOpenCity("davao")}
            >
              <Typography
                sx={{
                  color: "#00165E",
                  fontSize: "40px",
                  fontWeight: 800,
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

      {openCity && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 9998,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setOpenCity(null)}
        >
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: "700px",
              bgcolor: "#00165E",
              color: "white",
              borderRadius: "20px",
              p: 4,
              boxShadow: 10,
              zIndex: 9999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <IconButton
              onClick={() => setOpenCity(null)}
              sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            >
              <CloseIcon />
            </IconButton>

            {/* Cebu Content */}
            {openCity === "cebu" && (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  Cebu HACKSTATE:2025
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  “Cebu HACKSTATE:2025 is more than just a hackathon — it’s a
                  well-curated innovation arena organized by PropTech leaders
                  who are passionate about shaping the future of real estate
                  through technology. Held over two days at Sacred Heart Hall,
                  Cebu City, the event brought together participants from 9
                  universities and institutions across Cebu — University of Cebu
                  Lapu-Lapu & Mandaue Campus, University of Cebu Banilad Campus,
                  University of Cebu Main Campus, University of San
                  Jose-Recoletos Basak Campus, Asian College of Technology Cebu
                  Campus, University of Southern Philippines Foundation Main
                  Campus, University of the Visayas Main Campus, University of
                  the Philippines Cebu, and University of San Carlos Talamban
                  Campus — with each school registering up to ten teams.
                  Showcasing collaboration, creativity, and innovation, the
                  competition concluded with the selection of the top 3 winners
                  — a true milestone in driving forward the future of PropTech.”
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -35,
                    right: 16,
                  }}
                >
                  <Image
                    src="/images/sunstar-logo.png"
                    alt="Cebu Hackstate Logo"
                    width={80}
                    height={80}
                  />
                </Box>
              </>
            )}

            {openCity === "davao" && (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  Davao City HACKSTATE:2025
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  “Cebu HACKSTATE:2025 stood as a significant milestone in
                  advancing PropTech innovation, organized by industry leaders
                  committed to shaping the future of real estate through
                  technology. The preliminary round, conducted via Zoom on July
                  30, identified five finalist teams, while the remaining
                  participants were recognized with consolation prizes and
                  e-certificates from the organizing body. The Grand Finals,
                  held on August 27, featured formal pitching presentations from
                  the finalists and concluded with the announcement of the top
                  three winners. The event brought together participants from
                  seven academic institutions in Davao City, namely AMA Computer
                  College, STI, University of Mindanao, Mindanao State
                  University, Mapúa Malayan Colleges, St. John Paul II College,
                  and Holy Cross of Davao College.”
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -35,
                    right: 16,
                  }}
                >
                  <Image
                    src="/images/sunstar-logo.png"
                    alt="Cebu Hackstate Logo"
                    width={80}
                    height={80}
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
}
