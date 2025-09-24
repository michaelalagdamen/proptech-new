"use client";

import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  NoSsr,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

export default function Partner() {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  return (
    <Box
      sx={{
        width: "100",
        minHeight: "400px",
        backgroundImage: "url('/images/partner-with-us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        py: 8,
        position: "relative",
        color: "#fff",
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(67,0,54,0.3)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          “PropTech is rising — don’t get left behind.”
        </Typography>

        <NoSsr>
          <TextField
            id="partner-email"
            label="Type your Email Address"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "#fff",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                paddingRight: 0.7,
              },
            }}
            value={email}
            onChange={handleChangeEmail}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "#00165E",
                      borderRadius: "25px",
                      px: 3,
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: "bold",
                      ml: 1,
                      "&:hover": { bgcolor: "#141b4d" },
                    }}
                  >
                    Partner With Us
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </NoSsr>

        <Typography variant="body2" sx={{ opacity: 0.8, mt: 2 }}>
          *Stay updated. Enter your email and be part of the future of
          PropTech.*
        </Typography>
      </Box>
    </Box>
  );
}
