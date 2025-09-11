import { Box } from "@mui/material";
import Hero from "./sections/Hero";
import WhoWeAre from "./sections/WhoWeAre";

export default function Page() {
  return (
    <Box component={"main"} sx={{ overflowX: "hidden" }}>
      <Hero />
      <WhoWeAre />
    </Box>
  );
}
