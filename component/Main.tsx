"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductHero from "./sections/ProductHero";
import NewsHero from "./sections/NewsHero";
import ListedCompanyHero from "./sections/ListedCompanyHero";
import AboutHero from "./sections/AboutHero";
import EventsHero from "./sections/EventsHero";
import Navs from "./sections/Navs";
import SmallNavs from "./sections/SmallNavs";
import Footer from "./sections/Footer";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import GalleryNavs from "./GalleryNavs";

export default function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const renderHero = () => {
    if (pathname === "/product-listing") return <ProductHero />;
    if (pathname === "/news") return <NewsHero />;
    if (pathname === "/listed-company") return <ListedCompanyHero />;
    if (pathname === "/events") return <EventsHero />;
    if (pathname === "/about") return <AboutHero />;
    if (pathname === "/gallery") return null;
    return <Hero />;
  };

  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
      }}
    >
      {renderHero()}
      <Navs />
      <SmallNavs />
      {children}
      <Footer />
    </Box>
  );
}
