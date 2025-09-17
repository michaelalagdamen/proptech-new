import Hero from "@/component/sections/Hero";
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
      <AboutHero />
      <MissionVision />
    </Box>
  );
}
