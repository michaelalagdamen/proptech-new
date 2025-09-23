"use client";

import React from "react";
import Hero from "./sections/Hero";
import Navs from "./sections/Navs";
import SmallNavs from "./sections/SmallNavs";
import Footer from "./sections/Footer";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

const specialPaths = ["/gallery"];

const theme = createTheme({
  pallete: {
    primary: {
      main: "#32sd23",
    },

    background: {
      default: "#fff232",
    },
  },
});

const hideLayoutByPathname = (path: string) =>
  specialPaths.some((p) => p === path);

export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideBaseLayout = hideLayoutByPathname(pathname);

  if (hideBaseLayout) {
    return (
      <Box
        sx={{
          overflowX: "hidden",
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
        <Footer />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
      }}
    >
      <Hero />
      <Navs />
      <SmallNavs />
      {children}
      <Footer />
    </Box>
  );
}
