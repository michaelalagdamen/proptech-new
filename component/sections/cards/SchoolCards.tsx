import * as React from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function Schools() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        marginTop: "50px",
        position: "relative",
        paddingBottom: "125px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {/* First Box */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "100px",
              fontSize: "26px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of Cebu
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/uc-logo.png"
              alt="UC Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: -1,
            }}
          >
            Main Campus <br />
            Banilad Campus
            <br />
            Lapu-Lapu City & Mandaue Campus
          </Typography>
        </Box>

        {/* Second Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "60px",
              fontSize: "22px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of San Carlos
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/usc-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 2,
            }}
          >
            Talamban Campus
          </Typography>
        </Box>

        {/* Third Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "25px",
              fontSize: "22px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of the Philippines
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/usc-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 2,
            }}
          >
            Cebu Campus
          </Typography>
        </Box>

        {/* 4th Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "60px",
              fontSize: "26px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of Visayas
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/uv-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 2,
            }}
          >
            Main Campus
          </Typography>
        </Box>

        {/* fifth Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "70px",
              fontSize: "23px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of Southern <br />
            Philippines Foundation
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/uspf-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 5,
            }}
          >
            Main Campus
          </Typography>
        </Box>

        {/* Sixth Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "25px",
              fontSize: "22px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            Asian College of Technology
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/act-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 2,
            }}
          >
            Cebu Campus
          </Typography>
        </Box>

        {/* seventh Box  */}
        <Box
          sx={{
            border: "4px solid #0A0F2C",
            borderRadius: "50px",
            left: "430px",
            px: 5,
            py: 6,
            mb: 6,
            position: "relative",
            width: "400px",
            height: "200px",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              top: "-10px",
              left: "120px",
              fontSize: "26px",
              fontWeight: 800,
              color: "#0A0F2C",
              backgroundColor: "#fff",
              px: 2,
              width: "500px",
            }}
          >
            University of San <br />
            Jose-Recoletos
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <Image
              src="/images/usjr-logo.png"
              alt="Sample Logo"
              width={200}
              height={0}
            />
          </Box>

          <Typography
            sx={{
              fontSize: "22px",
              fontStyle: "italic",
              color: "#0A0F2C",
              textAlign: "center",
              fontWeight: 800,
              mt: 5,
            }}
          >
            BASAK Campus
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "25px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "10px",
              px: 3,
              py: 2,
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
      </Box>
    </Container>
  );
}
