import CompanyListCards from "@/component/sections/cards/CompanyLIstCards";
import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";

import SmallNavs from "@/component/sections/SmallNavs";
import CompanyTabs from "@/component/tabs/CompanyTabs";

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
      <SmallNavs />
      <CompanyTabs />
      <CompanyListCards />
      <Footer />
    </Box>
  );
}
