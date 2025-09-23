import { Box } from "@mui/material";
import MissionVision from "@/component/sections/MissionVision";
import OurJourney from "@/component/sections/OurJourney";
import Schools from "@/component/sections/Schools";
import ProductPeople from "@/component/sections/ProptechPeople";
import Partner from "@/component/sections/Partner";
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
      <MissionVision />
      <OurJourney />
      <Schools />
      <ProductPeople />
      <Partner />
      <Footer />
    </Box>
  );
}
