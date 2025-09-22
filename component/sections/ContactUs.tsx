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
      sx={{ maxWidth: 1200, mx: "auto", my: 10, px: 2 }}
    >
      <Grid>
        <Paper
          elevation={0}
          sx={{
            boxShadow: "0 0 3px #2C225980",
            ml: -30,
            borderRadius: "15px",
            p: 4,
            position: "relative",
            width: "773px",
            height: "600px",
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
              borderRadius: "0 0 15px 15px ",
              boxShadow: "0 1px 3px rgba(90, 45, 130, 0.3)",
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
            component="form"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              mt: 15,
            }}
          >
            <TextField
              label="Name"
              placeholder="Enter Your Name"
              fullWidth
              sx={{ background: "#F2F3FD" }}
            />
            <TextField
              label="Email"
              placeholder="Enter Email Address"
              fullWidth
              sx={{ background: "#F2F3FD" }}
            />
            <TextField
              label="Company Name"
              placeholder="Enter Company Name"
              fullWidth
              sx={{ background: "#F2F3FD" }}
            />
            <TextField
              label="Category"
              placeholder="Select Category"
              select
              fullWidth
              sx={{ background: "#F2F3FD" }}
            >
              <MenuItem value="general">General Inquiry</MenuItem>
              <MenuItem value="support">Support</MenuItem>
              <MenuItem value="partnership">Partnership</MenuItem>
            </TextField>

            <TextField
              label="Message"
              placeholder="Enter Message"
              fullWidth
              multiline
              rows={5}
              sx={{
                gridColumn: {
                  xs: "1",
                  md: "span 2",
                  background: "#F2F3FD",
                },
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "72px" }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "16px",
                border: "none",
                borderRadius: " 12px 12px 0 0 ",
                textTransform: "none",
                bgcolor: "#222959",
                "&:hover": { bgcolor: "#747CB2" },
                boxShadow: "none",
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
              borderRadius: "15px",
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
              borderRadius: "15px",
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
              borderRadius: "15px",
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
