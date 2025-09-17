import { Box } from "@mui/material";
import AboutHero from "@/component/sections/AboutHero";
import MissionVision from "@/component/sections/MissionVision";
import OurJourney from "@/component/sections/OurJourney";
import Schools from "@/component/sections/Schools";
import Footer from "@/component/sections/Footer";

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
      <AboutHero />
      <MissionVision />
      <OurJourney />
      <Schools />
      <Footer />
    </Box>
  );
}
