"use client";

import GalleryNavs from "@/component/GalleryNavs";
import GalleryContent from "@/component/sections/GalleryContent";
import GalleryHero from "@/component/sections/GalleryHero";

export default function Gallery() {
  return (
    <>
      <GalleryNavs />
      <GalleryHero />
      <GalleryContent />
    </>
  );
}
