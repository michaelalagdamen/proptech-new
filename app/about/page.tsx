import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
<<<<<<< HEAD
=======
import Navs from "@/component/sections/Navs";
import WhoWeAre from "@/component/sections/WhoWeAre";
import WhyTrustUs from "@/component/sections/WhyTrustUs";
>>>>>>> 485bb26371d23216bfe89551d8671cd9ee150903
import { Box } from "@mui/material";
import AboutHero from "@/component/sections/AboutHero";
import MissionVision from "@/component/sections/MissionVision";

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
<<<<<<< HEAD
      <AboutHero />
      <MissionVision />
=======
      <Hero />
      <Navs />
      <WhoWeAre />
      <WhyTrustUs />
      <Footer />
>>>>>>> 485bb26371d23216bfe89551d8671cd9ee150903
    </Box>
  );
}
