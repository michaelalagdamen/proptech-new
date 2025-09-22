"use client";

import { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import Image from "next/image";

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
            <Image
              src="/icons/search.svg"
              alt="Search"
              width={25}
              height={25}
            />
          </InputAdornment>
        }
        sx={{
          borderRadius: "8px",
          height: "40px",
          width: "400px",
          background: "#6660A2",
          fontFamily: "Outfit, sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#fff",

          "& input::placeholder": {
            color: "#fff",
            opacity: 0.6,
          },
        }}
      />
    </FormControl>
  );
}
