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
        marginTop: "50px",
        position: "relative",
        paddingBottom: "125px",
        marginLeft: 5,
      }}
    >
      {/* --- Cebu Schools Section --- */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* University of Cebu */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>University of Cebu</Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uc-logo.png"
              alt="UC Logo"
              width={200}
              height={0}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <Typography sx={campusTextStyle}>
              Main Campus <br />
              Banilad Campus
              <br />
              Lapu-Lapu City & Mandaue Campus
            </Typography>
          </Box>
        </Box>

        {/* University of San Carlos */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>
            University of San Carlos
          </Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/usc-logo.png"
              alt="USC Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>Talamban Campus</Typography>
        </Box>

        {/* University of the Philippines */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>
            University of the Philippines
          </Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/up-logo.png"
              alt="UP Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>Cebu Campus</Typography>
        </Box>

        {/* University of Visayas */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>University of Visayas</Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uv-logo.png"
              alt="UV Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>Main Campus</Typography>
        </Box>

        {/* University of Southern Philippines Foundation */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>
            University of Southern <br /> Philippines Foundation
          </Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/uspf-logo.png"
              alt="USPF Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>Main Campus</Typography>
        </Box>

        {/* Asian College of Technology */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>
            Asian College of Technology
          </Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/act-logo.png"
              alt="ACT Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>Cebu Campus</Typography>
        </Box>

        {/* University of San Jose-Recoletos */}
        <Box sx={schoolBoxStyle}>
          <Typography sx={schoolTitleStyle}>
            University of San <br /> Jose-Recoletos
          </Typography>
          <Box sx={logoOverlay}>
            <Image
              src="/images/usjr-logo.png"
              alt="USJR Logo"
              width={200}
              height={0}
            />
          </Box>
          <Typography sx={campusTextStyle}>BASAK Campus</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: -30,
          left: "40px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => setOpenMindanao(true)}
          sx={{
            borderRadius: "10px",
            fontSize: "22px",
            px: 2,
            py: 1,
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#0A0F2C",
            "&:hover": {
              backgroundColor: "#15204d",
            },
          }}
        >
          Mindanao
        </Button>
      </Box>

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
              color: "#0A0F2C",
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
              fontFamily: "Outfit, sans-serif",
              color: "#0A0F2C",
            }}
          >
            Davao City
          </Typography>

          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {/* AMA Computer College */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                AMA Computer College
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/ama-logo.png"
                  alt="AMA Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>
                General Santos City Campus
              </Typography>
            </Box>

            {/* Holy Cross of Davao College */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                Holy Cross of Davao College
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/holycross-logo.png"
                  alt="Holy Cross Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* Mapua Malayan Colleges Mindanao */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                Mapua Malayan Colleges Mindanao
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/mapua-logo.png"
                  alt="MCM Logo"
                  width={150}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* Mindanao State University */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                Mindanao State University
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/msu-logo.png"
                  alt="MSU Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>General Santos City</Typography>
            </Box>

            {/* STI College */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>STI College</Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/sti-logo.png"
                  alt="STI Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* SJP II College */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                St. John Paul II College of Davao
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/sjp-logo.png"
                  alt="STI Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>

            {/* University of Mindanao */}
            <Box sx={schoolBoxStyle}>
              <Typography sx={schoolTitleStyle}>
                University of Mindanao
              </Typography>
              <Box sx={logoOverlay}>
                <Image
                  src="/images/um-logo.png"
                  alt="UM Logo"
                  width={200}
                  height={0}
                />
              </Box>
              <Typography sx={campusTextStyle}>Davao City Campus</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

const schoolBoxStyle = {
  border: "4px solid #0A0F2C",
  borderRadius: "50px",
  px: 5,
  py: 6,
  mb: 6,
  position: "relative",
  width: "400px",
  height: "200px",
};

const schoolTitleStyle = {
  position: "absolute",
  top: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "22px",
  fontWeight: 800,
  color: "#0A0F2C",
  backgroundColor: "#fff",
  px: 2,
  textAlign: "center",
  width: "90%",
};

const campusTextStyle = {
  fontSize: "20px",
  fontStyle: "italic",
  color: "#0A0F2C",
  textAlign: "center",
  fontWeight: 800,
  mt: 4,
};

const logoOverlay = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0.2,
  zIndex: 0,
};
