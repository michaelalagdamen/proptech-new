import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import { Box } from "@mui/material";

export default function Contacts() {
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
      <Footer />
    </Box>
  );
}
