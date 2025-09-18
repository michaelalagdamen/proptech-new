import EventCards from "@/component/sections/cards/EventCards";
import Footer from "@/component/sections/Footer";
import GalleryContent from "@/component/sections/GalleryContent";
import GalleryHero from "@/component/sections/GalleryHero";
import { Box } from "@mui/material";

export default function Gallery() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
      }}
    >
      <GalleryHero />
      <GalleryContent />
      <Footer />
    </Box>
  );
}
