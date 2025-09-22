"use client";

import { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function SearchCompany() {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OutlinedInput
        placeholder="Search"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon
              sx={{ color: "#2A285A", width: "28px", height: "25px" }}
            />
          </InputAdornment>
        }
        sx={{
          borderRadius: "8px",
          height: "40px",
          width: "400px",
          background: "#fff",
          fontFamily: "Outfit, sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#8381A1",

          "& input::placeholder": {
            color: "#8381A1",
            opacity: 0.6,
          },
        }}
      />
    </FormControl>
  );
}
