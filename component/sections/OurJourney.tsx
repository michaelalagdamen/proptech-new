"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MissionVision() {
  const [openCity, setOpenCity] = React.useState<"cebu" | "davao" | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        marginTop: "100px",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "180px",
          width: "1400px",
          borderRadius: "20px",
          p: 2,
          backgroundImage: `linear-gradient(rgba(103, 35, 97, 0.1), rgba(34, 41, 89, 0.1)), url('/images/filter.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: 600,
              fontFamily: "Outfit, sans-serif",
              color: "#fff",
            }}
          >
            Our Journey
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", gap: 3, padding: "10px", marginTop: "8px" }}
        >
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              border: "2px solid #fff",
              borderRadius: "15px",
              width: "130px",
              height: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(217, 217, 217, 0.3)",
                boxShadow: "none",
              },
              color: "#fff",
              fontSize: "25px",
              fontWeight: 400,
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
            }}
            onClick={() => setOpenCity("cebu")}
          >
            Cebu
          </Button>

          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              border: "2px solid #fff",
              borderRadius: "15px",
              width: "160px",
              height: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "rgba(217, 217, 217, 0.3)",
                boxShadow: "none",
              },
              color: "#fff",
              fontSize: "25px",
              fontWeight: 400,
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
            }}
            onClick={() => setOpenCity("davao")}
          >
            Mindanao
          </Button>
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
              height: "560px",
              maxWidth: "880px",
              backgroundImage: `linear-gradient(rgba(103, 35, 97, 0.1), rgba(34, 41, 89, 0.1)), url('/images/filterCebu.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  HACKSTATE: Hackathon Cebu 2025
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "35px",
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 400,
                    marginTop: "30px",
                  }}
                >
                  “HACKSTATE: Hackathon Cebu 2025 is more than just a hackathon
                  — it’s a well-curated innovation arena organized by PropTech
                  leaders who are passionate about shaping the future of real
                  estate through technology. Held over two days at Sacred Heart
                  Hall, Cebu City, the event brought together participants from
                  9 universities and institutions across Cebu — University of
                  Cebu Lapu-Lapu & Mandaue Campus, University of Cebu Banilad
                  Campus, University of Cebu Main Campus, University of San
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
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  HACKSTATE: Hackathon Davao 2025
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "35px",
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 300,
                    marginTop: "30px",
                  }}
                >
                  “HACKSTATE: Hackathon Davao 2025 stood as a significant
                  milestone in advancing PropTech innovation, organized by
                  industry leaders committed to shaping the future of real
                  estate through technology. The preliminary round, conducted
                  via Zoom on July 30, identified five finalist teams, while the
                  remaining participants were recognized with consolation prizes
                  and e-certificates from the organizing body. The Grand Finals,
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
