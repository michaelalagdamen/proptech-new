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
import {
  PhoneRounded,
  Email,
  LocationOn,
  OpenInNewRounded,
} from "@mui/icons-material";

export default function CompanyListCards() {
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
                <Image
                  src="/images/infinite-logo.png"
                  alt="Technelolodja"
                  width={155}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#6681a8ff",
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#6681a8ff",
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#6681a8ff",
                        fontWeight: 400,
                      }}
                    >
                      Door A, 345 L. Tudtud Street,Mabolo, Cebu City
                    </Typography>
                  </Box>
                </Box>
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
                  padding: "15px",
                  backgroundColor: "#672361",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Image
                  src="/images/smart-home.png"
                  alt="Technelolodja"
                  width={125}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      0932 887 3173
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Email sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      hello@smarthomecebu.com
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      Level 2 The Space, AS Fortuna St, Mandaue, Cebu
                    </Typography>
                  </Box>
                </Box>
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
                  We provide end-to-end automation services that redefine the
                  way you interact with your space.
                </Typography>
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Image
                  src="/images/iconnect-tech.png"
                  alt="Technelolodja"
                  width={155}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      (032) 252-1122
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Email sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      sales@iconnecttech.com
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      Unit 11L, 11th floor Avenir Bldg., Cebu City
                    </Typography>
                  </Box>
                </Box>
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
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            marginTop: "25px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gridTemplateRows: "380px",
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
                <Image
                  src="/images/itech.png"
                  alt="Technelolodja"
                  width={155}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      +639770374462
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Email sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      support@itech.com.ph
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      3rd Floor, Cyberzone, SM J Mall, Mandaue City, Cebu
                    </Typography>
                  </Box>
                </Box>
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
                  peripherals, and just about any videogame entertainment you
                  may need.
                </Typography>
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
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
                <Image
                  src="/images/rapid-tech.png"
                  alt="Technelolodja"
                  width={155}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      0917 112 1948
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Email sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      admin@rapidtechph.com
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      2nd floor JY Square Mall Salinas Drive Lahug, Cebu
                    </Typography>
                  </Box>
                </Box>
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
                  Get the upgrade you deserve! Our units are affordable,
                  reliable, and ready to take on the toughest challenges.
                </Typography>
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
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
                <Image
                  src="/images/republic-gamers.png"
                  alt="Technelolodja"
                  width={155}
                  height={50}
                />

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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneRounded
                        sx={{ color: "#7689A6", fontSize: "13px" }}
                      />
                    </Box>
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Email sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      asusrepublic@gmail.com
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
                    <Box
                      sx={{
                        bgcolor: "#E8E8E8",
                        borderRadius: "50%",
                        p: 0.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ color: "#7689A6", fontSize: "13px" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontFamily: "Outfit, sans-serif",
                        color: "#222959",
                        fontWeight: 400,
                      }}
                    >
                      3rd Floor, Ayala Center Cebu, Cebu Business Park
                    </Typography>
                  </Box>
                </Box>
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
              </Box>
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
                  "&:hover": {
                    backgroundColor: "#986393",
                    fontWeight: 600,
                  },
                }}
              >
                View all products
                <Box
                  sx={{
                    marginLeft: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <OpenInNewRounded sx={{ color: "#fff", fontSize: "22px" }} />
                </Box>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
