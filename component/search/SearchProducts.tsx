"use client";

import { useState } from "react";
import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import Image from "next/image";

export default function SearchProducts() {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <OutlinedInput
        placeholder="Search..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        startAdornment={
          <InputAdornment position="start">
            <Image
              src="/icons/search-purple.svg"
              alt="Search"
              width={28}
              height={28}
            />
          </InputAdornment>
        }
        sx={{
          borderRadius: "8px",
          height: "60px",
          width: "580px",
          textTransform: "none",
          fontFamily: "Outfit, sans-serif",
          fontSize: "20px",
          fontWeight: 400,
          color: "#83547fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "#672361",
          },
          "& input::placeholder": {
            color: "#83547fff",
            opacity: 0.6,
          },
        }}
      />
    </FormControl>
  );
}
