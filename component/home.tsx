import { Box } from "@mui/material";
import Hero from "../../sections/Hero";
import Navs from "../../sections/Navs";
import WhoWeAre from "../../sections/WhoWeAre";
import FeaturedCompanies from "../../sections/FeaturedCompany";
import FeaturedProducts from "../../sections/FeaturedProducts";
import Footer from "../../sections/Footer";

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
      <FeaturedCompanies />
      <FeaturedProducts />
      <Footer />
    </Box>
  );
}
