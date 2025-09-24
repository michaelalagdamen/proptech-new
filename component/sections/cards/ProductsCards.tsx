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
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr 1fr",
              },
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  borderRadius: 2,
                  border: "3px solid #e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Top Section */}
                <Box sx={{ p: 3, flex: 1 }}>
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
                        borderRadius: "6px",
                        position: "relative",
                        display: "flex",
                        left: "-25px",
                        top: "-25px",
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#6E1B5D", mb: 1 }}
                      >
                        {product.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {[...Array(product.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4"
                            style={{ color: "#7e22ce", fill: "#7e22ce" }}
                          />
                        ))}
                        <Typography
                          variant="body2"
                          sx={{ ml: 1, color: "gray" }}
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

                {/* Button */}
                <Box
                  sx={{
                    backgroundColor: "#672361",
                    "&:hover": { backgroundColor: "#986393" },
                  }}
                >
                  <Link
                    href="#"
                    className="block w-full text-center text-white text-sm py-3 font-medium"
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
