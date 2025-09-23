import FeaturedCompany from "@/component/sections/FeaturedCompany";
import FeaturedProducts from "@/component/sections/FeaturedProducts";

import WhoWeAre from "@/component/sections/WhoWeAre";

export default function Home() {
  return (
    <>
      <WhoWeAre />
      <FeaturedCompany />
      <FeaturedProducts />
    </>
  );
}
