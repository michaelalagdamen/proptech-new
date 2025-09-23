"use client";

import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Paper,
  Grid,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useState } from "react";
import { ReactNode } from "react";

export default function ContactUs() {
  const [category, setCategory] = useState("");
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="flex-start"
      sx={{ marginTop: "100px" }}
    >
      <Grid>
        <Paper
          sx={{
            boxShadow: "0 0 3px #2C225980",
            ml: -30,
            borderRadius: "20px",
            p: 4,
            position: "relative",
            width: "773px",
            height: "685px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "#fff",
              py: 1,
              borderRadius: "0 0 12px 12px ",
              boxShadow: "0 1px 3px #2C225980",
              borderTop: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#222959",
                textAlign: "center",
                width: 550,
                fontSize: "40px",
              }}
            >
              Connect with PropTech
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="form" sx={{ marginTop: "100px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography sx={{ color: "#222959" }}>Name</Typography>
                  <Box
                    sx={{
                      width: "355px",
                      height: "50px",
                      marginTop: "10px",
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Enter your name"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#222959",
                            borderRadius: "10px",
                          },
                          "& input::placeholder": {
                            color: "#737AAD",
                            fontFamily: "Outfit, sans-serif",
                            fontSize: "15px",
                            fontWeight: 300,
                          },
                          backgroundColor: "#F2F3FD",
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: "#222959" }}>Email</Typography>
                  <Box
                    sx={{
                      width: "327px",
                      height: "50px",
                      marginTop: "10px",
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Enter email address"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#222959",
                            borderRadius: "10px",
                          },
                          "& input::placeholder": {
                            color: "#737AAD",
                            fontFamily: "Outfit, sans-serif",
                            fontSize: "15px",
                            fontWeight: 300,
                          },
                          backgroundColor: "#F2F3FD",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 2,
                  marginTop: "35px",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#222959" }}>
                    Company Name
                  </Typography>
                  <Box
                    sx={{
                      width: "496px",
                      height: "50px",
                      marginTop: "10px",
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Enter company name"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#222959",
                            borderRadius: "10px",
                          },
                          "& input::placeholder": {
                            color: "#737AAD",
                            fontFamily: "Outfit, sans-serif",
                            fontSize: "15px",
                            fontWeight: 300,
                          },
                          backgroundColor: "#F2F3FD",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Typography sx={{ color: "#222959" }}>Category</Typography>
                  <Box
                    sx={{
                      width: "186px",
                      height: "50px",
                      marginTop: "10px",
                    }}
                  >
                    <TextField
                      fullWidth
                      select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (selected: unknown): ReactNode => {
                          if (!selected) {
                            return (
                              <span
                                style={{
                                  color: "#737AAD",
                                  fontFamily: "Outfit, sans-serif",
                                  fontSize: "15px",
                                  fontWeight: 300,
                                }}
                              >
                                Select category
                              </span>
                            );
                          }
                          return selected as ReactNode;
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#222959",
                            borderRadius: "10px",
                          },
                          backgroundColor: "#F2F3FD",
                        },
                      }}
                    >
                      <MenuItem value="General Inquiry">
                        General Inquiry
                      </MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                      <MenuItem value="Partnership">Partnership</MenuItem>
                    </TextField>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ marginTop: "35px" }}>
                <Typography
                  sx={{
                    color: "#222959",
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                  }}
                >
                  Message
                </Typography>
                <Box
                  sx={{
                    marginTop: "10px",
                    width: "698px",
                  }}
                >
                  <TextField
                    fullWidth
                    multiline
                    minRows={6}
                    placeholder="Enter message"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#222959",
                          borderRadius: "10px",
                        },
                        "& textarea::placeholder": {
                          color: "#737AAD",
                          fontFamily: "Outfit, sans-serif",
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                        backgroundColor: "#F2F3FD",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "59.5px" }}>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "16px",
                border: "none",
                borderRadius: " 12px 12px 0 0 ",
                textTransform: "none",
                bgcolor: "#222959",
                boxShadow: "none",
                "&:hover": { bgcolor: "#747CB2", boxShadow: "none" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Grid>

      <Grid>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 0 3px #2C225980",
              borderRadius: "50px",
              p: 1,
              pr: 2,
              maxWidth: 280,
              bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                bgcolor: "#222959",
                borderRadius: "50%",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <Phone sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Typography
              sx={{
                color: "#222959",
              }}
            >
              (032) 254-8900
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 0 3px #2C225980",
              borderRadius: "50px",
              p: 1,
              pr: 2,
              maxWidth: 280,
              bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                bgcolor: "#222959",
                borderRadius: "50%",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <Email sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Typography
              sx={{
                color: "#222959",
              }}
            >
              propertytechph@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 0 3px #2C225980",
              borderRadius: "50px",
              p: 1,
              pr: 2,
              maxWidth: 280,
              bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                bgcolor: "#222959",
                borderRadius: "50%",
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <LocationOn sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
            <Typography
              sx={{
                color: "#222959",
              }}
            >
              Cebu City, Philippines
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
