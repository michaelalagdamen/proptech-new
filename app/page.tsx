import FeaturedCompany from "@/component/sections/FeaturedCompany";
import FeaturedProducts from "@/component/sections/FeaturedProducts";
import Footer from "@/component/sections/Footer";
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
      <WhoWeAre />
      <FeaturedCompany />
      <FeaturedProducts />
      <Footer />
    </Box>
  );
}
