"use client";

import * as React from "react";
import { Box, Container, Tabs, Tab, Button } from "@mui/material";
import { useState } from "react";
import SearchCompany from "../search/SearchCompany";
import {
  MovingRounded,
  AutoAwesomeOutlined,
  SyncRounded,
} from "@mui/icons-material";

export default function CompanyTabs() {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                minHeight: "40px",
                "& .MuiTabs-flexContainer": {
                  gap: "20px",
                },
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
                "& .MuiTab-root:not(.Mui-selected)": {
                  color: "#fff",
                },
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
            <SearchCompany />
            <Button
              onClick={() => setActive("refresh")}
              sx={{
                height: "40px",
                borderRadius: "8px",
                paddingX: "20px",
                textTransform: "none",
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                background: "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SyncRounded sx={{ color: "inherit", fontSize: "25px" }} />
              Refresh
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
