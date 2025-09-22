"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import {
  AccountCircleRounded,
  OpenInNewRounded,
  RemoveRedEyeRounded,
  YouTube,
} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function PropTechYoutube() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "4676px",
      }}
    >
      <Box sx={{ marginTop: "100px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            PropTech is on
          </Typography>

          <YouTube sx={{ color: "#222959", width: "65px", height: "65px" }} />

          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            Youtube
          </Typography>

          <Box
            sx={{
              marginLeft: "530px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "260px",
                height: "54px",
                backgroundColor: "#fff",
                borderRadius: "15px 0 0 15px",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "25px",
                lineHeight: "30px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              PropTech YouTube
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "60px",
                height: "55px",
                backgroundColor: "#222959",
                borderRadius: "0 15px 15px 0",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#747CB2",
                  fontWeight: 600,
                },
              }}
            >
              <OpenInNewRounded
                sx={{ color: "#fff", width: "30px", height: "30px" }}
              />
            </Button>
          </Box>
        </Box>

        <Box>
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
            Witnessed the HACKESTATE highlights that PropTech organize for
            solving real life problems.
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              height: "64px",
              width: "64px",
              background: "#F1F1F7",
              borderRadius: "10px",
              border: "2px solid #222959",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AccountCircleRounded
              sx={{ color: "#222959", width: "30px", height: "29px" }}
            />
          </Box>

          <Box sx={{ marginLeft: "5px" }}>
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "25px",
                fontWeight: 400,
              }}
            >
              500
            </Typography>

            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#7689A6",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Subscribers
            </Typography>
          </Box>

          <Box
            sx={{
              height: "64px",
              width: "64px",
              background: "#F1F1F7",
              borderRadius: "10px",
              border: "2px solid #222959",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTube sx={{ color: "#222959", width: "40px", height: "35px" }} />
          </Box>

          <Box sx={{ marginLeft: "5px" }}>
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "25px",
                fontWeight: 400,
              }}
            >
              5
            </Typography>

            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#7689A6",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Videos
            </Typography>
          </Box>

          <Box
            sx={{
              height: "64px",
              width: "64px",
              background: "#F1F1F7",
              borderRadius: "10px",
              border: "2px solid #222959",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RemoveRedEyeRounded
              sx={{ color: "#222959", width: "35px", height: "30px" }}
            />
          </Box>

          <Box sx={{ marginLeft: "5px" }}>
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "25px",
                fontWeight: 400,
              }}
            >
              1.5K
            </Typography>

            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                color: "#7689A6",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Views
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: "60px" }}>
          <Grid container spacing={2}>
            <Grid>
              <Item
                sx={{
                  height: "560px",
                  width: "980px",
                  boxSizing: "border-box",
                  background: "#F1F1F7",
                  borderRadius: "15px",
                  boxShadow: "none",
                }}
              ></Item>
            </Grid>
            <Grid>
              <Stack spacing={2}>
                <Item
                  sx={{
                    height: "272px",
                    width: "385px",
                    boxSizing: "border-box",
                    background: "#F1F1F7",
                    borderRadius: "15px",
                    boxShadow: "none",
                  }}
                ></Item>
                <Item
                  sx={{
                    height: "272px",
                    width: "385px",
                    boxSizing: "border-box",
                    background: "#F1F1F7",
                    borderRadius: "15px",
                    boxShadow: "none",
                  }}
                ></Item>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
