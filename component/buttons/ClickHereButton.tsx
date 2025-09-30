"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";

export default function ClickHereButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",
      }}
    >
      <Button
        variant="contained"
        sx={{
          fontSize: "16px",
          backgroundColor: "#672361",
          width: "285px",
          height: "40px",
          fontFamily: "Outfit, sans-serif",
          color: "#fff",
          lineHeight: "30px",
          fontWeight: 300,
          textTransform: "none",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#986393",
            fontWeight: 600,
            boxShadow: "none",
          },
        }}
      >
        Click Here
      </Button>
    </Box>
  );
}
