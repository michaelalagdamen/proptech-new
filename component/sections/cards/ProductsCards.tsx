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
<<<<<<< HEAD
              height: "350px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
=======
              display: "grid",
              gap: 8,
              gridTemplateColumns: {
                xs: "2fr",
                sm: "5fr 5fr",
                lg: "2fr 2fr 2fr 2fr",
              },
>>>>>>> ad62763fdf006003cbfbbc4cd13cbb03b956b6ef
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
<<<<<<< HEAD
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
=======
                  borderRadius: "15px",
                  boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
                  display: "flex",
                  flexDirection: "column",
                  zIndex: 2,
                }}
              >
                <Box>
                  {/* Top Section */}
                  <Box sx={{ padding: "20px" }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr",
                        alignItems: "start",
                      }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150}
                        height={60}
                        style={{
                          borderRadius: "15px 0 15px 0",
                          position: "relative",
                          display: "flex",
                          left: "-20px",
                          top: "-20px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#6E1B5D",
                            mb: 1,
                            fontFamily: "Outfit, sans-serif",
                            fontSize: "25px",
                            lineHeight: "25px",
                            width: "165px",
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          {[...Array(product.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4"
                              style={{ color: "#6E1B5D", fill: "#6E1B5D" }}
                            />
                          ))}
                          <Typography
                            variant="body2"
                            sx={{
                              ml: 1,
                              color: "#6E1B5D",
                              fontFamily: "Outfit, sans-serif",
                              fontSize: "16px",
                            }}
                          >
                            (5)
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Description */}
                  <Box sx={{ py: -1, px: 4, flex: 1 }}>
                    <Typography variant="body1" sx={{ color: "#222959" }}>
                      <strong>{product.brand}</strong> {product.description}
                    </Typography>
                  </Box>
                </Box>
                {/* Button */}
                <Box
                  sx={{
                    position: "absolute",
                    marginTop: "250px",
                    width: "310px",
                    background: "#672361",
                    "&:hover": { backgroundColor: "#986393" },
                    borderRadius: "0 0 15px 15px",
                    zIndex: 1,
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <Link
                    href="#"
                    className="block w-full text-center text-white text-sm py-3 font-medium z-10"
                  >
                    Click Here
                  </Link>
                </Box>
>>>>>>> ad62763fdf006003cbfbbc4cd13cbb03b956b6ef
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
