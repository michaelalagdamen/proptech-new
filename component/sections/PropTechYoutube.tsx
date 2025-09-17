import * as React from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import Image from "next/image";

export default function PropTechYoutube() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "749px",
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

          <Image
            src="/icons/yt.svg"
            alt="YouTube Icon"
            width={65}
            height={65}
          />

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
              marginLeft: "500px",
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
              <Image
                src="/icons/view-icon.svg"
                alt="ViewIcon"
                width={30}
                height={30}
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
            <Image
              src="/icons/profile-icon.svg"
              alt="YouTube Icon"
              width={30}
              height={30}
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
            <Image
              src="/icons/yt.svg"
              alt="YouTube Icon"
              width={30}
              height={30}
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
            <Image
              src="/icons/eye-icon.svg"
              alt="YouTube Icon"
              width={35}
              height={23}
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

        <Box></Box>
      </Box>
    </Container>
  );
}
