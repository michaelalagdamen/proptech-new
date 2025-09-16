import FeaturedCompany from "@/component/sections/FeaturedCompany";
import FeaturedProducts from "@/component/sections/FeaturedProducts";
import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import WhoWeAre from "@/component/sections/WhoWeAre";
import { Box } from "@mui/material";

export default function Home() {
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
      <WhoWeAre />
      <FeaturedCompany />
      <FeaturedProducts />
      <Footer />
    </Box>
  );
}
