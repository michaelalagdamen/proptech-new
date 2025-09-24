"use client";

import { useState } from "react";
import { Box, Typography, Tabs, Tab, Container, Divider } from "@mui/material";
import Image from "next/image";

export default function NewsSection() {
  const [tabValue, setTabValue] = useState("latest");

  const newsList = [
    {
      title: "Firm organizes 1st hackathon in Cebu, eyes tech solutions…",
      date: "By SunStar | April 13, 2025",
      img: "/images/sunstar.png",
      category: "cebu",
    },
    {
      title: "PropTech hosts 2-day real estate hackathon",
      date: "By Freeman | April 14, 2025",
      img: "/images/freeman.png",
      category: "cebu",
    },
    {
      title: "PropTech Philippines holds first hackathon in Cebu to...",
      date: "By BusinessNewsAsia | April 13, 2025",
      img: "/images/businessnewsasia.png",
      category: "cebu",
    },
    {
      title: "Six Student Teams Advance to Davao Real Estate Hack...",
      date: "By CebuBusinessNews | April 13, 2025",
      img: "/images/cebubusiness.png",
      category: "davao",
    },
    {
      title: "6 teams secure spots in Davao Hackathon 2025 fin...",
      date: "By SunStar | August 26, 2025",
      img: "/images/sunstar2.png",
      category: "davao",
    },
    {
      title: "6 teams qualify for Davao Hackestate: Hackathon...",
      date: "By DXRD 711 | August 26, 2025",
      img: "/images/dxrd.png",
      category: "davao",
    },
    {
      title: "6 student teams vie in Hackathon 2025 finals",
      date: "By Calvin Cordova | August 26, 2025",
      img: "/images/calvincordova.png",
      category: "davao",
    },
  ];

  const filteredNews =
    tabValue === "latest"
      ? newsList
      : newsList.filter((news) => news.category === tabValue);

  return (
    <Container
      maxWidth={false}
      sx={{ maxWidth: "1440px", px: { xs: 2, md: 4 }, py: 6 }}
    >
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={(e, v) => setTabValue(v)}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#672361",
            height: "3px",
            borderRadius: "3px",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            color: "#672361 !important",
            fontFamily: "Outfit, sans-serif",
          },
          "& .MuiTab-root.Mui-selected": {
            fontWeight: 600,
          },
        }}
      >
        <Tab
          value="latest"
          label="Latest News"
          sx={{ fontSize: "22px", fontWeight: "bold", textTransform: "none" }}
        />
        <Tab
          value="cebu"
          label="Cebu"
          sx={{ fontSize: "22px", fontWeight: "bold", textTransform: "none" }}
        />
        <Tab
          value="davao"
          label="Davao"
          sx={{ fontSize: "22px", fontWeight: "bold", textTransform: "none" }}
        />
      </Tabs>

      <Divider
        sx={{
          width: "100%",
          height: "2px",
          background: "linear-gradient(90deg, #672361 0%, #222959 100%)",
          top: 0,
        }}
      />

      {/* News Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          marginTop: "40px",
        }}
      >
        {filteredNews.map((news, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              height: 250,
              width: "100%",
            }}
          >
            <Image
              src={news.img}
              alt={news.title}
              fill
              style={{
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  mb: 1,
                }}
              >
                {news.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#fff",
                  opacity: 0.9,
                }}
              >
                {news.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
