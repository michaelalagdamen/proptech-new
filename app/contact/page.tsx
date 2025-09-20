import { Box } from "@mui/material";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import SmallNavs from "@/component/sections/SmallNavs";
import ContactUs from "@/component/sections/ContactUs";
import Footer from "@/component/sections/Footer";

export default function ContactUS() {
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
      <SmallNavs />
      <ContactUs />
      <Footer />
    </Box>
  );
}
