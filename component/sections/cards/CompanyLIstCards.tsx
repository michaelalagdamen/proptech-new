import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from "@mui/material";
// import Image from "next/image";

export default function CompanyListCards() {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "50px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
          gridTemplateRows: "341px",
          gap: 3,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/infinite-logo.png"
              alt="Technelolodja"
              width={180}
              height={60}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Infinite Systems Technology Corp.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              Our product lines include real solutions meant to help IMPROVE,
              ENHANCE and SECURE businesses on a day-to-day basis.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/smart-home.png"
              alt="Technelolodja"
              width={85}
              height={92}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Smart Home
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              We provide end-to-end automation services that redefine the way
              you interact with your space.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/iconnect-tech.png"
              alt="Technelolodja"
              width={215}
              height={52}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              iConnect Technologies Inc.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              Specializes in IT Solutions. We offer comprehensive, powerful
              solutions for your IT needs.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box
        sx={{
          marginTop: "25px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(418px, 1fr))",
          gridTemplateRows: "341px",
          gap: 3,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/itech.png"
              alt="Technelolodja"
              width={192}
              height={51}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              iTECH Philippines
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              Offer a large array of videogames, consoles, PC hardware, and
              peripherals, and just about any videogame entertainment you may
              need.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/rapid-tech.png"
              alt="Technelolodja"
              width={300}
              height={35}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Rapid Tech Cebu 
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              Get the upgrade you deserve! Our units are affordable, reliable,
              and ready to take on the toughest challenges.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            maxWidth: 450,
            borderRadius: "15px",
            boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
          }}
        >
          <CardContent sx={{ padding: "25px" }}>
            {/* <Image
              src="/images/republic-gamers.png"
              alt="Technelolodja"
              width={205}
              height={51}
            /> */}
            <Typography
              sx={{
                marginTop: "95px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              ASUS Republic of Gamers
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontFamily: "Outfit, sans-serif",
                color: "#222959",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                width: "380px",
              }}
            >
              Driven by relentless innovation, ROG is committed to producing
              out-of-this-world experiences for gamers and enthusiasts.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: " 0 25px 25px 25px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "400px",
                height: "40px",
                fontFamily: "Outfit, sans-serif",
                color: "#fff",
                fontSize: "18px",
                lineHeight: "30px",
                fontWeight: 300,
                textTransform: "none",
                padding: "10px",
                backgroundColor: "#672361",
                borderRadius: "10px",
              }}
            >
              View all products
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
