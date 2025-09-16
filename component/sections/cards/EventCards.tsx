import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function EventCards() {
  return (
    <Container
      id="feature-company"
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "848px",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gridTemplateRows: "380px",
            gap: 3,
          }}
        >
          <Card
            sx={{
              maxWidth: 450,
              maxHeight: 380,
              borderRadius: "15px",
              boxShadow: "0 0 3px rgba(90, 45, 130, 0.5)",
            }}
          >
            <CardContent sx={{ padding: "25px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "240px",
                    marginLeft: "15px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Image
                      src="/icons/call-icon.svg"
                      alt="Call Icon"
                      width={20}
                      height={20}
                    />
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      (02) 8892-9073 to 77
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "17px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Image
                      src="/icons/email-icon.svg"
                      alt="Call Icon"
                      width={20}
                      height={20}
                    />
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      inquiry.ayala@infinitePH.com
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "17px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Image
                      src="/icons/location.svg"
                      alt="Call Icon"
                      width={20}
                      height={20}
                    />
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      Door A, 345 L. Tudtud Street,Mabolo, Cebu City
                    </Typography>
                  </Box>
                </Box>

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
                      "&:hover": {
                        backgroundColor: "#986393",
                        fontWeight: 600,
                      },
                    }}
                  >
                    View all products
                    <Box sx={{ marginLeft: "10px" }}>
                      <Image
                        src="/icons/view-icon.svg"
                        alt="ViewIcon"
                        width={15}
                        height={15}
                      />
                    </Box>
                  </Button>
                </CardActions>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "35px",
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
                  Our product lines include real solutions meant to help
                  IMPROVE, ENHANCE and SECURE businesses on a day-to-day basis.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
