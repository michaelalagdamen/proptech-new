"use client";

import * as React from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function ProductTabs() {
  // left tabs
  const [leftValue, setLeftValue] = useState(0);
  // right tabs
  const [rightValue, setRightValue] = useState(0);

  const handleLeftChange = (event: React.SyntheticEvent, newValue: number) => {
    setLeftValue(newValue);
  };

  const handleRightChange = (event: React.SyntheticEvent, newValue: number) => {
    setRightValue(newValue);
  };

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            marginTop: "60px",
            height: "60px",
            background: "linear-gradient(90deg, #672361 0%, #222959 100%)",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "10px",
          }}
        >
          <Box>
            <Tabs
              value={leftValue}
              onChange={handleLeftChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                minHeight: "40px",
                "& .MuiTabs-flexContainer": { gap: "20px" },
                "& .MuiTab-root": {
                  minHeight: "40px",
                  textTransform: "none",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  borderRadius: "8px",
                  paddingX: "20px",
                },
                "& .Mui-selected": {
                  background: "#93578E",
                  color: "#fff",
                  fontWeight: 400,
                },
                "& .MuiTab-root:not(.Mui-selected)": { color: "#fff" },
              }}
            >
              <Tab
                icon={
                  <Image
                    src="/icons/today-arrow.svg"
                    alt="Today"
                    width={28}
                    height={25}
                  />
                }
                iconPosition="start"
                label="Today (5)"
              />
              <Tab
                icon={
                  <Image
                    src="/icons/shimmer.svg"
                    alt="New"
                    width={24}
                    height={24}
                  />
                }
                iconPosition="start"
                label="New"
              />
            </Tabs>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Tabs
              value={rightValue}
              onChange={handleRightChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                minHeight: "40px",
                "& .MuiTabs-flexContainer": { gap: "20px" },
                "& .MuiTab-root": {
                  minHeight: "40px",
                  textTransform: "none",
                  fontFamily: "Outfit, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  borderRadius: "8px",
                  paddingX: "20px",
                },
                "& .Mui-selected": {
                  background: "#575290",
                  color: "#fff",
                  fontWeight: 400,
                },
                "& .MuiTab-root:not(.Mui-selected)": { color: "#fff" },
              }}
            >
              <Tab
                icon={
                  <Image
                    src="/icons/filter.svg"
                    alt="filter"
                    width={24}
                    height={24}
                  />
                }
                iconPosition="start"
                label="Filter"
              />
              <Tab
                icon={
                  <Image
                    src="/icons/verified.svg"
                    alt="Verified"
                    width={24}
                    height={24}
                  />
                }
                iconPosition="start"
                label="Verified"
              />
              <Tab
                icon={
                  <Image
                    src="/icons/refresh.svg"
                    alt="Refresh"
                    width={24}
                    height={24}
                  />
                }
                iconPosition="start"
                label="Refresh"
              />
            </Tabs>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
