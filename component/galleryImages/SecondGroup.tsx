"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export default function SecondGroup() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        marginTop: "40px",
      }}
    >
      <Image src="/images/cebu1.jpg" alt="Today" width={285} height={200} />

      <Image src="/images/cebu2.jpg" alt="Today" width={305} height={290} />

      <Image src="/images/cebu3.jpg" alt="Today" width={360} height={290} />

      <Image src="/images/cebu4.jpg" alt="Today" width={305} height={290} />

      <Image src="/images/cebu5.jpg" alt="Today" width={285} height={200} />
    </Box>
  );
}
