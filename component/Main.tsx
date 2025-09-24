"use client";

import React from "react";
import Hero from "./sections/Hero";
import Navs from "./sections/Navs";
import SmallNavs from "./sections/SmallNavs";
import Footer from "./sections/Footer";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import GalleryNavs from "./GalleryNavs";

const specialPaths = ["/gallery"];

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
        {" "}
        <GalleryNavs />
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
