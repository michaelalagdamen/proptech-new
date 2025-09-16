import ProductsCards from "@/component/sections/cards/ProductsCards";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import NavTab from "@/component/sections/NavTab";
import WhoWeAre from "@/component/sections/WhoWeAre";
import { Box } from "@mui/material";

export default function Products() {
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
      <ProductsCards />
    </Box>
  );
}
