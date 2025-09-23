import FeaturedEvents from "@/component/sections/FeaturedEvents";
import HackathonScores from "@/component/sections/HackathonScores";
import PropTechGallery from "@/component/sections/PropTechGallery";
import PropTechYoutube from "@/component/sections/PropTechYoutube";

export default function Events() {
  return (
    <>
      <FeaturedEvents />
      <PropTechYoutube />
      <PropTechGallery />
      <HackathonScores />
    </>
  );
}
