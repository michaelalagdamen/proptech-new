"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import Image from "next/image";

const itemData = [
  { img: "/images/davao1.jpg", title: "image" },
  { img: "/images/davao2.jpg", title: "image" },
  { img: "/images/davao3.jpg", title: "image" },
  { img: "/images/davao3.jpg", title: "image" },
  { img: "/images/davao4.jpg", title: "image" },
  { img: "/images/davao1.jpg", title: "image" },
  { img: "/images/davao2.jpg", title: "image" },
  { img: "/images/davao3.jpg", title: "image" },
  { img: "/images/davao3.jpg", title: "image" },
  { img: "/images/davao4.jpg", title: "image" },
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
        maxWidth: "1450px",
        marginTop: "40px",
      }}
    >
      {/* Scrollable fixed box */}
      <Box
        sx={{
          height: "600px",
          overflowY: "auto",
          borderRadius: "15px",
          border: "1px solid #222959",
          padding: 2,
          margin: "0 auto",

          "&::-webkit-scrollbar": {
            width: "10px",
            height: "30px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#e9edffff",
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "10px",
            borderRadius: "15px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#222959",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#afbafcff",
          },

          //   scrollbarWidth: "thin",
          //   scrollbarColor: "#222959 #edf0feff",
        }}
      >
        <Box>
          <ImageList variant="masonry" cols={3} gap={10}>
            {itemData.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
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
                  style={{ width: "100%", height: "auto" }}
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
        </Box>

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
