import { Box } from "@mui/material";
import Hero from "./sections/Hero";
import Navs from "./sections/Navs";
import WhoWeAre from "./sections/WhoWeAre";

export default function Page() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Hero />
      <Navs />
      <WhoWeAre />
    </Box>
  );
}
