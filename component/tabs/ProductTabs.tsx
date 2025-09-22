"use client";

import * as React from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import {
  MovingRounded,
  AutoAwesomeOutlined,
  SyncRounded,
  FilterAltOutlined,
  VerifiedRounded,
} from "@mui/icons-material";
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
                  background: "#fff",
                  color: "#672361",
                  fontWeight: 400,
                },
                "& .MuiTab-root:not(.Mui-selected)": { color: "#fff" },
              }}
            >
              <Tab
                icon={
                  <MovingRounded
                    sx={{ color: "inherit", width: "30px", height: "28px" }}
                  />
                }
                iconPosition="start"
                label="Today (5)"
              />
              <Tab
                icon={
                  <AutoAwesomeOutlined
                    sx={{ color: "inherit", fontSize: "24px" }}
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
                  background: "#fff",
                  color: "#222959",
                  fontWeight: 400,
                },
                "& .MuiTab-root:not(.Mui-selected)": { color: "#fff" },
              }}
            >
              <Tab
                icon={
                  <FilterAltOutlined
                    sx={{ color: "inherit", fontSize: "25px" }}
                  />
                }
                iconPosition="start"
                label="Filter"
              />
              <Tab
                icon={
                  <VerifiedRounded
                    sx={{ color: "inherit", fontSize: "25px" }}
                  />
                }
                iconPosition="start"
                label="Verified"
              />
              <Tab
                icon={
                  <SyncRounded sx={{ color: "inherit", fontSize: "25px" }} />
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
