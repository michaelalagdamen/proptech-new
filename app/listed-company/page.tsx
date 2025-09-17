import CompanyListCards from "@/component/sections/cards/CompanyLIstCards";
import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import NavTab from "@/component/sections/NavTab";

import { Box } from "@mui/material";

export default function Company() {
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
      <NavTab />
      <CompanyListCards />
      <Footer />
    </Box>
  );
}
