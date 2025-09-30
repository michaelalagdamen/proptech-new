"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Paper, Typography, Rating } from "@mui/material";
import Images from "next/image";
import ClickHereButton from "@/component/buttons/ClickHereButton";

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
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} gap={3}>
          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              {/* Top image */}
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
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
              <Box
                sx={{
                  textAlign: "left",
                  padding: "0 15px 0 15px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Blink Video Doorbell
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={4} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (12)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  Standout features like its 135° field of view, 1080p
                  resolution, and seamless Alexa integration.
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/vacuum.jpg"
                  alt="Drone"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Smart Vacuum
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (30)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  Get Smart & Enhance your cleaning regimen! New era of clean
                  homes.
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/smarttherm.jpg"
                  alt="Thermostat"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Smart Thermostat
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={4} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (22)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  Regulate heating and cooling systems in a more efficient and
                  user-friendly way.
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/coffemachine.jpg"
                  alt="Vacuum"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Moon Coffee Maker
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (40)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  This machine is very unlike the espresso makers in the market
                  and it’s the aesthetics that set it apart. 
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/vr.jpg"
                  alt="Coffee Machine"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Oculus Quest 2
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={4} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (15)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  The most popular virtual reality (VR) hardware belongs to
                  Meta’s Oculus (formerly Facebook). 
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          {/* VR Headset */}
          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/kneemassage.jpg"
                  alt="VR Headset"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Cordless Knee Massager
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (50)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  The knee massager has 9-speed vibration and heating modes
                  (107℉-131℉).
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "15px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/humidifier.jpg"
                  alt="Drone"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  Anti-Gravity Humidifier
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (30)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  Experience the magic, where mist floats upward, creating a
                  calming, almost magical ambiance.
                </Typography>
              </Box>

              <ClickHereButton />
            </Item>
          </Grid>

          <Grid size={3}>
            <Item
              sx={{
                height: "370px",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
              }}
            >
              {/* Top image */}
              <Box
                sx={{
                  right: 8,
                  bottom: 8,
                  height: "50%",
                  width: "108%",
                  position: "relative",
                }}
              >
                <Images
                  src="/images/drone.jpg"
                  alt="Doorbell"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </Box>

              {/* Context */}
              <Box sx={{ textAlign: "left", padding: "0 15px 0 15px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#222959",
                    fontSize: "20px",
                    marginTop: "5px",
                  }}
                >
                  iFlight Alpha A85 HD
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <Rating name="read-only" value={4} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{ ml: 0.5, color: "#222959" }}
                  >
                    (12)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    color: "#222959",
                    fontWeight: 300,
                    marginTop: "15px",
                  }}
                >
                  Compact and versatile Whoop style racing FPV drone. Features
                  DJI compatible digital FPV system.
                </Typography>
              </Box>

              {/* Button */}
              <ClickHereButton />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
