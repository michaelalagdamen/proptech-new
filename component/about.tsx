import { Box } from "@mui/material";
import Hero from "../../sections/Hero";
import Navs from "../../sections/Navs";
import WhoWeAre from "../../sections/WhoWeAre";
import Footer from "../../sections/Footer";

export default function About() {
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
      <Footer />
    </Box>
  );
}
