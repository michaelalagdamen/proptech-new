import FeaturedEvents from "@/component/sections/FeaturedEvents";
import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import SmallNavs from "@/component/sections/SmallNavs";
import { Box } from "@mui/material";

export default function Events() {
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
      <FeaturedEvents />
      <Footer />
    </Box>
  );
}
