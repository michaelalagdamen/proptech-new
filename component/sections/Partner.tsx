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
        width: "100%",
        minHeight: "500px",
        backgroundImage: `linear-gradient(rgba(103, 35, 97, 0.1), rgba(34, 41, 89, 0.1)), url('/images/filterPartner.jpg')`,
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
        marginTop: "100px",
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
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontFamily: "Outfit, sans-serif",
            fontSize: "35px",
          }}
        >
          PropTech is on the rise—don’t get left behind.
        </Typography>

        <NoSsr>
          <TextField
            id="partner-email"
            placeholder="Type your Email Address"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "#fff",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                paddingRight: 0.7,
                color: "#672361",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#8381A1",
                opacity: 0.8,
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
                      bgcolor: "#672361",
                      borderRadius: "25px",
                      px: 3,
                      py: 1.2,
                      textTransform: "none",
                      fontWeight: "bold",
                      ml: 1,
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#986393", boxShadow: "none" },
                    }}
                  >
                    Partner With Us
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </NoSsr>

        <Typography
          variant="body2"
          sx={{
            marginTop: "20px",
            fontFamily: "Outfit, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
          }}
        >
          Stay updated. Enter your email and be part of the future of PropTech.
        </Typography>
      </Box>
    </Box>
  );
}
