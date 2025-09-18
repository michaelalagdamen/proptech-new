import { Box } from "@mui/material";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import SmallNavs from "@/component/sections/SmallNavs";
import NewsSection from "@/component/sections/NewsSection";
import Footer from "@/component/sections/Footer";

export default function News() {
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
      <NewsSection />
      <Footer />
    </Box>
  );
}
