"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Paper, Typography, Rating } from "@mui/material";
import Images from "next/image";

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

export default function ProductCards() {
  return (
    <Box sx={{ flexGrow: 1, py: 4, px: 4 }}>
      <Grid container spacing={4} gap={4}>
        {/* Doorbell */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top image */}
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/doorbell.png"
                alt="Doorbell"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            {/* Context */}
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                DoorSmart
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={4} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (12)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  color: "#222959",
                }}
              >
                The most advanced smart doorbell system with camera and remote
                control.
              </Typography>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>

        {/* Drone */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/drone.png"
                alt="Drone"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                SkyCam Drone
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (30)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Capture amazing aerial footage with 4K camera and GPS
                navigation.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>

        {/* Thermostat */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/thermostat.png"
                alt="Thermostat"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                SmartThermo
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={4} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (22)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Control your home temperature remotely with energy-saving
                features.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>

        {/* Vacuum */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/vacuum.png"
                alt="Vacuum"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                CleanBot
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (40)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Smart vacuum robot that cleans floors automatically with
                mapping.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>

        {/* Coffee Machine */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/coffee.png"
                alt="Coffee Machine"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                BrewMaster
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={4} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (15)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Enjoy fresh coffee every morning with smart scheduling.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>

        {/* VR Headset */}
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/vr.png"
                alt="VR Headset"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                VisionVR
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (50)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Immerse yourself in virtual worlds with ultra HD VR experience.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "15px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/drone.png"
                alt="Drone"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                SkyCam Drone
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={5} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (30)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Capture amazing aerial footage with 4K camera and GPS
                navigation.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "10px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>
        <Grid size={3}>
          <Item
            sx={{
              height: "350px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top image */}
            <Box
              sx={{
                right: 8,
                bottom: 8,
                height: "55%",
                width: "108%",
                position: "relative",
              }}
            >
              <Images
                src="/images/doorbell.png"
                alt="Doorbell"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>

            {/* Context */}
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#222959", fontSize: "22px" }}
              >
                DoorSmart
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Rating name="read-only" value={4} readOnly size="small" />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#222959" }}>
                  (12)
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  color: "#222959",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                The most advanced smart doorbell system with camera and remote
                control.
              </Typography>
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                bottom: 10,
                left: 6.5,
                position: "absolute",
                borderRadius: "10px",
                textTransform: "none",
                width: "95%",
                fontSize: "16px",
                backgroundColor: "#672361",
              }}
            >
              Click Here
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
