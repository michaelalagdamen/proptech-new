"use client";

import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      position="relative"
      sx={{
        background: "transparent",
        top: "-97px",
        left: "105px",
        padding: "10px 40px",
        zIndex: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 5 }}>
        <Button
          sx={{
            borderTop: "1px solid #fff",
            borderLeft: "1px solid #fff",
            borderRight: "none",
            borderBottom: "none",
            transform: "skew(-30deg)",
            padding: "10px 40px",
            borderRadius: "10px 0 0 0",
            background: "transparent",
            width: "200px",
            height: "75px",
          }}
        >
          <Box sx={{ transform: "skew(30deg)" }}>
            <Typography
              sx={{
                fontSize: "25px",
                lineHeight: "22px",
                color: "#ffffff",
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
                width: "180px",
                textAlign: "left",
                paddingLeft: "30px",
                paddingTop: "10px",
              }}
            >
              Featured Company
            </Typography>
          </Box>
        </Button>

        <Button
          sx={{
            borderTop: "1px solid #fff",
            borderLeft: "1px solid #fff",
            borderRight: "none",
            borderBottom: "none",
            transform: "skew(-30deg)",
            padding: "10px 40px",
            borderRadius: "10px 0 0 0",
            background: "transparent",
            width: "200px",
            height: "75px",
          }}
        >
          <Box sx={{ transform: "skew(30deg)" }}>
            <Typography
              sx={{
                fontSize: "25px",
                lineHeight: "22px",
                color: "#ffffff",
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
                width: "180px",
                textAlign: "left",
                paddingLeft: "30px",
                paddingTop: "10px",
              }}
            >
              Featured Products
            </Typography>
          </Box>
        </Button>

        <Button
          sx={{
            borderTop: "1px solid #fff",
            borderLeft: "1px solid #fff",
            borderRight: "none",
            borderBottom: "none",
            transform: "skew(-30deg)",
            padding: "10px 40px",
            borderRadius: "10px 0 0 0",
            background: "transparent",
            width: "200px",
            height: "75px",
          }}
        >
          <Box sx={{ transform: "skew(30deg)" }}>
            <Typography
              sx={{
                fontSize: "25px",
                lineHeight: "22px",
                color: "#ffffff",
                fontFamily: "Outfit, sans-serif",
                textTransform: "none",
                width: "180px",
                textAlign: "left",
                paddingLeft: "30px",
                paddingTop: "10px",
              }}
            >
              Featured Events
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
