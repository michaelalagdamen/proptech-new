"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";

const itemData = [
  { img: "/images/image1.jpg", title: "image 1" },
  { img: "/images/image4.jpg", title: "image 4" },
  { img: "/images/image2.jpg", title: "image 2" },
  { img: "/images/image5.jpg", title: "image 5" },
  { img: "/images/image3.jpg", title: "image 3" },
  { img: "/images/image6.jpg", title: "image 6" },
  { img: "/images/image7.jpg", title: "image 7" },
];

export default function GalleryImages() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleClick = (img: string) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg("");
  };

  return (
    <Container
      id="feature-company"
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        position: "relative",
        marginTop: "60px",
      }}
    >
      <Box sx={{ margin: "0 auto" }}>
        <ImageList variant="masonry" cols={3} gap={12}>
          {itemData.map((item, index) => (
            <ImageListItem
              key={index}
              sx={{
                cursor: "pointer",
                borderRadius: "10px",
                overflow: "hidden",
                "&:hover .overlay": {
                  opacity: 0.3,
                },
              }}
              onClick={() => handleClick(item.img)}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={250}
                height={250}
                style={{ width: "100%", height: "auto", borderRadius: "15px" }}
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#222959",
                  opacity: 0.1,
                  transition: "opacity 0.3s ease",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog open={open} onClose={handleClose} maxWidth="md">
          {selectedImg && (
            <Box
              sx={{
                position: "relative",
                width: 800,
                height: 800,
              }}
            >
              <Image
                src={selectedImg}
                alt="Selected"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          )}
        </Dialog>
      </Box>
    </Container>
  );
}
