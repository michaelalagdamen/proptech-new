"use client";

import MissionVision from "@/component/sections/MissionVision";
import OurJourney from "@/component/sections/OurJourney";
import Schools from "@/component/sections/Schools";
import ProductPeople from "@/component/sections/ProptechPeople";
import Partner from "@/component/sections/Partner";

export default function About() {
  return (
    <>
      <ProductPeople />
      <OurJourney />
      <Schools />
      <MissionVision />
      <Partner />
    </>
  );
}
