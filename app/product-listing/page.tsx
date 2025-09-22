import SearchProducts from "@/component/search/SearchProducts";
import ProductsCards from "@/component/sections/cards/ProductsCards";
import Footer from "@/component/sections/Footer";
import Hero from "@/component/sections/Hero";
import Navs from "@/component/sections/Navs";
import SmallNavs from "@/component/sections/SmallNavs";
import ProductTabs from "@/component/tabs/ProductTabs";
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
      <SmallNavs />
      <ProductTabs />
      <SearchProducts />
      <ProductsCards />
      <Footer />
    </Box>
  );
}
