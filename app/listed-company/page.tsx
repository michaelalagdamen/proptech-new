import CompanyListCards from "@/component/sections/cards/CompanyLIstCards";
import Footer from "@/component/sections/Footer";
import CompanyTabs from "@/component/tabs/CompanyTabs";

export default function Company() {
  return (
    <>
      <CompanyTabs />
      <CompanyListCards />
      <Footer />
    </>
  );
}
