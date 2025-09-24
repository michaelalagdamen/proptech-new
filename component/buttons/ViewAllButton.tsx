"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import { OpenInNewRounded } from "@mui/icons-material";

export default function ViewAllButton() {
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
          width: "385px",
          height: "40px",
          fontFamily: "Outfit, sans-serif",
          color: "#fff",
          fontSize: "18px",
          lineHeight: "30px",
          fontWeight: 300,
          textTransform: "none",
          padding: "15px",
          backgroundColor: "#672361",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#986393",
            fontWeight: 600,
            boxShadow: "none",
          },
        }}
      >
        View all products
        <Box
          sx={{
            marginLeft: "10px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
        </Box>
      </Button>
    </Box>
  );
}
