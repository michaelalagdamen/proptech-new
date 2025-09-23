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

export default function ContactUs() {
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
            width: "785px",
            height: "680px",
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
            <Box
              component="form"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1r", md: "2fr 2fr" },
                gap: 3,
                mt: 13,
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
                          color: "#C4C7D9",
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
                    width: "355px",
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
                          color: "#C4C7D9",
                        },
                        backgroundColor: "#F2F3FD",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography sx={{ color: "#222959" }}>Company Name</Typography>
                <Box
                  sx={{
                    width: "355px",
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
                          color: "#C4C7D9",
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
                    width: "355px",
                    height: "50px",
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Select ategory"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#222959",
                          borderRadius: "10px",
                        },
                        "& input::placeholder": {
                          color: "#C4C7D9",
                        },
                        backgroundColor: "#F2F3FD",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography sx={{ color: "#222959" }}>Message</Typography>
                <Box
                  sx={{
                    marginTop: "10px",
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
                          color: "#C4C7D9",
                        },
                        backgroundColor: "#F2F3FD",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* <TextField
                label="Category"
                placeholder="Select Category"
                select
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#222959",
                      background: "#F2F3FD",
                      borderRadius: "10px",
                    },
                  },
                }}
              >
                <MenuItem value="general">General Inquiry</MenuItem>
                <MenuItem value="support">Support</MenuItem>
                <MenuItem value="partnership">Partnership</MenuItem>
              </TextField> */}
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "49px" }}>
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
