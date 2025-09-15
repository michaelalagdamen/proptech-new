import { Box } from "@mui/material";
import Hero from "../component/sections/Hero";
import Navs from "../component/sections/Navs";
import WhoWeAre from "../component/sections/WhoWeAre";
import FeaturedCompanies from "../component/sections/FeaturedCompany";
import FeaturedProducts from "../component/sections/FeaturedProducts";

export default function Page() {
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
    </Box>
  );
}
