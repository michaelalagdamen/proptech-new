import { Box } from "@mui/material";
import Hero from "./sections/Hero";

export default function Page() {
  return (
    <Box component={"main"} sx={{ overflowX: "hidden" }}>
      <Hero />
    </Box>
  );
}
