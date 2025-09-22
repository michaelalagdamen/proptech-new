"use client";

import * as React from "react";
import { Box, Container, Tabs, Tab, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SearchButton from "../search/SearchCompany";
import SearchCompany from "../search/SearchCompany";

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
                  background: "#93578E",
                  color: "#fff",
                  fontWeight: 400,
                },
                "& .MuiTab-root:not(.Mui-selected)": {
                  color: "#fff",
                },
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
              <Image
                src="/icons/refresh.svg"
                alt="Refresh"
                width={24}
                height={24}
              />
              Refresh
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
