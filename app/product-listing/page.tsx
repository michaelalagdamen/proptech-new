import SearchProducts from "@/component/search/SearchProducts";
import ProductsCards from "@/component/sections/cards/ProductsCards";
import Footer from "@/component/sections/Footer";
import ProductTabs from "@/component/tabs/ProductTabs";

export default function Products() {
  return (
    <>
      <ProductTabs />
      <SearchProducts />
      <ProductsCards />
      <Footer />
    </>
  );
}
