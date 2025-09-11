import { Box } from "@mui/material";
import Hero from "./sections/Hero";
import Navs from "./sections/Navs";

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
    </Box>
  );
}
