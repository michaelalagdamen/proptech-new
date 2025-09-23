import FeaturedCompany from "@/component/sections/FeaturedCompany";
import FeaturedProducts from "@/component/sections/FeaturedProducts";
import Footer from "@/component/sections/Footer";
import WhoWeAre from "@/component/sections/WhoWeAre";

export default function Home() {
  return (
    <>
      <WhoWeAre />
      <FeaturedCompany />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
