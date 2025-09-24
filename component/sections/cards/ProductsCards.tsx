"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Container, Box, Typography } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Blink Video Doorbell",
    brand: "DoorSmarty",
    description:
      "Standout features like its 135° field of view, HD resolution, and seamless integration.",
    image: "/images/doorbell.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Smart Vacuum",
    brand: "HomeSmart",
    description:
      "Get Smart & Enhance your cleaning regimen! New era of clean homes.",
    image: "/images/vacuum.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Smart Thermostat",
    brand: "Just Tech Me At",
    description:
      "Regulates heating and cooling systems in a more efficient and user-friendly way.",
    image: "/images/thermostat.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Moon Coffee Maker",
    brand: "Yanko Design",
    description:
      "This machine is very unlike the espresso makers in the market and it’s the aesthetics that set it apart.",
    image: "/images/coffee.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Oculus Quest 2",
    brand: "Meta",
    description:
      "The most popular virtual reality (VR) hardware belongs to Meta’s Oculus (formerly Facebook).",
    image: "/images/vr.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Cordless Knee Massager",
    brand: "BIBIRE",
    description:
      "The knee massager has 9-speed vibration and heating modes (107°F-137°F).",
    image: "/images/knee.png",
    rating: 5,
  },
  {
    id: 7,
    name: "Anti-Gravity Humidifier",
    brand: "Personocare",
    description:
      "Experience the magic, where mist floats upward, creating a calming, almost magical ambiance.",
    image: "/images/humidifier.png",
    rating: 5,
  },
  {
    id: 8,
    name: "iFlight Alpha A85 HD",
    brand: "Caddx",
    description:
      "Compact and versatile Whoop style racing FPV drone. Features DJI-compatible digital FPV system.",
    image: "/images/drone.png",
    rating: 5,
  },
];

export default function ProductsCards() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "750px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="section"
        sx={{ py: 8, display: "flex", alignItems: "center" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gap: 8,
              gridTemplateColumns: {
                xs: "2fr",
                sm: "2fr 2fr",
                lg: "2fr 2fr 2fr 2fr",
              },
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                  position: "relative",
                  paddingBottom: "50px",
                }}
              >
                <Box>
                  {/* Top Section */}
                  <Box sx={{ padding: "25px" }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        alignItems: "start",
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150}
                        height={60}
                        style={{
                          borderRadius: "15px 0 15px 0",
                          position: "relative",
                          display: "flex",
                          left: "-25px",
                          top: "-25px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#6E1B5D",
                            mb: 1,
                            fontFamily: "Outfit, sans-serif",
                            fontSize: "25px",
                            lineHeight: "25px",
                            width: "165px",
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {[...Array(product.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4"
                              style={{ color: "#6E1B5D", fill: "#6E1B5D" }}
                            />
                          ))}
                          <Typography
                            variant="body2"
                            sx={{
                              ml: 1,
                              color: "#6E1B5D",
                              fontFamily: "Outfit, sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            (5)
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Description */}
                  <Box sx={{ py: -1, px: 4, flex: 1 }}>
                    <Typography variant="body1" sx={{ color: "#222959" }}>
                      <strong>{product.brand}</strong> {product.description}
                    </Typography>
                  </Box>
                </Box>
                {/* Button */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#672361",
                    "&:hover": { backgroundColor: "#986393" },
                    zIndex: 1,
                  }}
                >
                  <Link
                    href="#"
                    className="block w-full text-center text-white text-sm py-3 font-medium z-10"
                  >
                    Click Here
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
