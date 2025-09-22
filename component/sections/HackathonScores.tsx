"use client";

import * as React from "react";
import { Typography, Container, Box, Button, TextField } from "@mui/material";
import Image from "next/image";

export default function HackathonScores() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "4676px",
      }}
    >
      <Box sx={{ marginTop: "100px" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            HackEstate
          </Typography>
          <Typography
            sx={{
              marginTop: "7px",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 300,
            }}
          >
            The power of PropTech collaboration in action.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Image
            src="/images/poster.jpg"
            alt="Technelolodja"
            width={622}
            height={783}
          />

          <Box
            sx={{
              width: 705,
              height: 385,
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0 0 3px #2C225980",
              padding: "33px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Image
                src="/icons/trophy.svg"
                alt="Technelolodja"
                width={30}
                height={30}
              />
              <Typography
                sx={{
                  fontFamily: "Outfit, sans-serif",
                  color: "#222959",
                  fontSize: "35px",
                  fontWeight: 700,
                }}
              >
                Mindanao League Team Selection
              </Typography>
            </Box>
            <Typography
              sx={{
                marginTop: "15px",
                fontFamily: "Outfit, sans-serif",
                color: "#7689A6",
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: 300,
              }}
            >
              Enter team code to view current ranking.
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                marginTop: "40px",
                "& .MuiTextField-root": {
                  width: "639px",
                },
                "& .MuiOutlinedInput-root": {
                  height: "60px",
                  borderRadius: "10px",
                  "& fieldset": {
                    borderColor: "#222959",
                    borderWidth: "1px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#222959",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#222959",
                  },
                },
                "& .MuiInputBase-input": {
                  fontFamily: "Outfit, sans-serif",
                  color: "#222959",
                  fontSize: "15px",
                  fontWeight: 300,
                  padding: "0 15px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Outfit, sans-serif",
                  color: "#222959",
                  fontSize: "16px",
                  fontWeight: 400,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#7689A6",
                },
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Team Code"
                variant="outlined"
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                width: "639px",
                height: "60px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: 300,
                padding: "10px",
                backgroundColor: "#222959",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#747CB2",
                  fontWeight: 600,
                },
                marginTop: "40px",
              }}
            >
              VIEW TEAM RANKING
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
