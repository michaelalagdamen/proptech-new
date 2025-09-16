import ProductsCards from "@/component/sections/cards/ProductsCards";
import Hero from "@/component/sections/Hero";
import WhoWeAre from "@/component/sections/WhoWeAre";
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
      <ProductsCards />
    </Box>
  );
}
