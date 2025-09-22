import * as React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { OpenInNewRounded } from "@mui/icons-material";
import Image from "next/image";

export default function EventCards() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        marginTop: "50px",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(429px, 1fr))",
            gridTemplateRows: "541px",
            gap: 3,
          }}
        >
          {/* FIRST EVENT CARD */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "absolute", top: 0, left: 347, zIndex: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: "85px",
                  height: "55px",
                  backgroundColor: "#672361",
                  borderRadius: "0 15px 0 15px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                <OpenInNewRounded
                  sx={{ color: "#fff", width: "30px", height: "30px" }}
                />
              </Button>
            </Box>

            <Card
              sx={{
                maxWidth: 450,
                height: 541,
                borderRadius: "15px",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                zIndex: 1,
              }}
            >
              <CardContent sx={{ padding: "15px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#672361",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    HACKESTATE 2025
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginTop: "240px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 22,
                      zIndex: 2,
                      position: "absolute",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      Cebu City
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      April 14 - 15, 2025
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px", zIndex: 1 }}>
                    <Image
                      src="/images/cebuhack.jpg"
                      alt="Cebu Hackathon"
                      width={400}
                      height={276}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#222959",
                      fontSize: "18px",
                      lineHeight: "25px",
                      fontWeight: 300,
                      width: "400px",
                    }}
                  >
                    HackEstate 2025 brings together brilliant minds to reimagine
                    real estate through technology and innovation. Hosted in
                    Cebu City, this event empowers teams to collaborate, code,
                    and create future-ready solutions for the property industry.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* SECOND */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "absolute", top: 0, left: 347, zIndex: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: "85px",
                  height: "55px",
                  backgroundColor: "#672361",
                  borderRadius: "0 15px 0 15px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                <OpenInNewRounded
                  sx={{ color: "#fff", width: "30px", height: "30px" }}
                />
              </Button>
            </Box>

            <Card
              sx={{
                maxWidth: 450,
                height: 541,
                borderRadius: "15px",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                zIndex: 1,
              }}
            >
              <CardContent sx={{ padding: "15px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#672361",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    HACKESTATE 2025
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginTop: "240px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 22,
                      zIndex: 2,
                      position: "absolute",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      Zoom Session
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      July 30, 2025
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px", zIndex: 1 }}>
                    <Image
                      src="/images/onlinehack.jpg"
                      alt="Cebu Hackathon"
                      width={400}
                      height={276}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#222959",
                      fontSize: "18px",
                      lineHeight: "25px",
                      fontWeight: 300,
                      width: "400px",
                    }}
                  >
                    HackEstate 2025: Pitch and Demo Day is where innovation
                    takes the spotlight. Through this Zoom session, teams from
                    GenSan and Davao will showcase their groundbreaking
                    solutions, pitching ideas and demonstrating technologies
                    that reimagine the future of real estate.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* THIRD */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "absolute", top: 0, left: 347, zIndex: 2 }}>
              <Button
                variant="contained"
                sx={{
                  width: "85px",
                  height: "55px",
                  backgroundColor: "#672361",
                  borderRadius: "0 15px 0 15px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                <OpenInNewRounded
                  sx={{ color: "#fff", width: "30px", height: "30px" }}
                />
              </Button>
            </Box>

            <Card
              sx={{
                maxWidth: 450,
                height: 541,
                borderRadius: "15px",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                zIndex: 1,
              }}
            >
              <CardContent sx={{ padding: "15px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#672361",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    HACKESTATE 2025
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      marginTop: "240px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 22,
                      zIndex: 2,
                      position: "absolute",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      Davao City
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#fff",
                        fontWeight: 300,
                        textTransform: "none",
                      }}
                    >
                      August 30, 2025
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "15px", zIndex: 1 }}>
                    <Image
                      src="/images/davaohack.jpg"
                      alt="Cebu Hackathon"
                      width={400}
                      height={276}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontFamily: "Outfit, sans-serif",
                      color: "#222959",
                      fontSize: "18px",
                      lineHeight: "25px",
                      fontWeight: 300,
                      width: "400px",
                    }}
                  >
                    HackEstate 2025: Hackathon Finals unites young innovators
                    and visionaries in Davao City to reimagine the future of
                    real estate through groundbreaking technology. Challenges
                    teams to showcase smart solutions that can transform the
                    real estate industry.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
