"use client";

import * as React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  Modal,
  Backdrop,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function Schools() {
  const [openMindanao, setOpenMindanao] = React.useState(false);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        marginTop: "60px",
        position: "relative",
        paddingBottom: "30px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // keeps Cebu City in center
          width: "100%",
        }}
      >
        {/* Centered Cebu City */}
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Outfit, sans-serif",
            color: "#222959",
          }}
        >
          Cebu City
        </Typography>

        {/* Right-aligned Button (absolute) */}
        <Box
          sx={{
            position: "absolute",
            right: 0, // sticks to the right
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setOpenMindanao(true)}
            sx={{
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: 400,
              fontFamily: "Outfit, sans-serif",
              textTransform: "none",
              background: "#222959",
              boxShadow: "none",
              "&:hover": {
                background: "#747CB2",
                boxShadow: "none",
              },
            }}
          >
            Mindanao
          </Button>
        </Box>
      </Box>

      {/* --- Cebu Schools Section --- */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          columnGap: 3,
          rowGap: 10,
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        {/* University of Cebu */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uc-logo.png"
              alt="UC Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>University of Cebu</Typography>

          <Box>
            <Typography
              sx={{
                ...campusTextStyle,
                display: "flex",
                flexDirection: "column",
                gap: 1, // works now!
              }}
            >
              <span>Main Campus</span>
              <span>Banilad Campus</span>
              <span>Lapu-Lapu City & Mandaue Campus</span>
            </Typography>
          </Box>
        </Box>

        {/* University of San Carlos */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/usc-logo.png"
              alt="USC Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            University of San Carlos
          </Typography>
          <Typography sx={campusTextStyle}>Talamban Campus</Typography>
        </Box>

        {/* University of the Philippines */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/up-logo.png"
              alt="UP Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            University of the Philippines
          </Typography>
          <Typography sx={campusTextStyle}>Cebu Campus</Typography>
        </Box>

        {/* University of Visayas */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uv-logo.png"
              alt="UV Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            University of the Visayas
          </Typography>

          <Typography sx={campusTextStyle}>Main Campus</Typography>
        </Box>

        {/* University of Southern Philippines Foundation */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uspf-logo.png"
              alt="USPF Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            University of Southern <br /> Philippines Foundation
          </Typography>
          <Typography sx={campusTextStyle}>Main Campus</Typography>
        </Box>

        {/* Asian College of Technology */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/act-logo.png"
              alt="ACT Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            Asian College of Technology
          </Typography>
          <Typography sx={campusTextStyle}>Cebu Campus</Typography>
        </Box>

        {/* University of San Jose-Recoletos */}
        <Box sx={schoolBoxStyle}>
          <Box sx={logoOverlay}>
            <Image
              src="/images/usjr-logo.png"
              alt="USJR Logo"
              width={104}
              height={69}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={schoolTitleStyle}>
            University of San <br /> Jose-Recoletos
          </Typography>
          <Typography sx={campusTextStyle}>Basak Campus</Typography>
        </Box>
      </Box>

      {/* <Box
        sx={{
          marginTop: "-100px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => setOpenMindanao(true)}
          sx={{
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: "Outfit, sans-serif",
            textTransform: "none",
            background: "#222959",
            boxShadow: "none",
            "&:hover": {
              background: "#747CB2",
              boxShadow: "none",
            },
          }}
        >
          Mindanao
        </Button>
      </Box> */}

      <Modal
        open={openMindanao}
        onClose={() => setOpenMindanao(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: { backdropFilter: "blur(6px)" },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "1400px",
            bgcolor: "white",
            borderRadius: "30px",
            boxShadow: 24,
            p: 5,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <IconButton
            onClick={() => setOpenMindanao(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#222959",
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              textAlign: "center",
              fontFamily: "Outfit, sans-serif",
              color: "#222959",
            }}
          >
            Davao City
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              position: "relative",
              columnGap: 3,
              rowGap: 10,
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            {/* AMA Computer College */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/ama-logo.png"
                  alt="AMA Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                AMA Computer College
              </Typography>
              <Typography sx={campusTextStyle}>
                General Santos City Campus
              </Typography>
            </Box>

            {/* Holy Cross of Davao College */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/holycross-logo.png"
                  alt="Holy Cross Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                Holy Cross of Davao College
              </Typography>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* Mapua Malayan Colleges Mindanao */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/mapua-logo.png"
                  alt="MCM Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                Mapua Malayan Colleges Mindanao
              </Typography>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* Mindanao State University */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/msu-logo.png"
                  alt="MSU Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                Mindanao State University
              </Typography>
              <Typography sx={campusTextStyle}>General Santos City</Typography>
            </Box>

            {/* STI College */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/sti-logo.png"
                  alt="STI Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>STI College</Typography>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* SJP II College */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/sjp-logo.png"
                  alt="STI Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                St. John Paul II College of Davao
              </Typography>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* University of Mindanao */}
            <Box sx={schoolBoxStyle}>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/um-logo.png"
                  alt="UM Logo"
                  width={104}
                  height={69}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography sx={schoolTitleStyle}>
                University of Mindanao
              </Typography>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

const schoolBoxStyle = {
  background: "#E1E8F9",
  border: "2px solid #222959",
  borderRadius: "15px",
  height: "204px",
  width: "300px",
};

const schoolTitleStyle = {
  fontSize: "23px",
  lineHeight: "32px",
  fontFamily: "Outfit, sans-serif",
  color: "#222959",
  fontWeight: 700,
  textAlign: "center",
  marginTop: "15px",
  maxWidth: "250px",
  wordWrap: "break-word",
  marginLeft: "auto",
  marginRight: "auto",
};

const campusTextStyle = {
  fontSize: "15px",
  lineHeight: "15px",
  fontFamily: "Outfit, sans-serif",
  color: "#222959",
  fontWeight: 300,
  marginTop: "10px",
  textAlign: "center",
};

const logoOverlay = {
  background: "#fff",
  borderRadius: "50%",
  width: "134px",
  height: "134px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  marginTop: "-70px",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
};
