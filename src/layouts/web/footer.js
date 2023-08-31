import typography, { secondaryFont } from "@/theme/typography";
import {
  Email,
  Facebook,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Container
        maxWidth
        sx={{ background: (theme) => theme.palette.grey.main, py: 3 }}
      >
        <Grid
          container
          columnSpacing={{ md: 8 }}
          
          rowSpacing={{ md: 0, sm: 2, xs: 2 }}
          justifyContent="center"
        >
          <Grid item md={3} sm={6} xs={12}>
            <List sx={{textAlign:"center"}}>
              <ListSubheader
                sx={{
                  mb: 2,
                  fontFamily: `${secondaryFont.style.fontFamily} !important`,
                  color: (theme) => theme.palette.common.black,
                  background: "transparent",
                  fontSize: (theme) => theme.typography.h4,
                }}
              >
                About Us
              </ListSubheader>
              <ListItem disablePadding >
                <Stack spacing={1.5} sx={{ marginLeft: "1px" }}>
                  {/* <Box
                    width="125px"
                    component="img"
                    src="/assets/images/logo/logo.png"
                  /> */}
                  <ListItemText
                    sx={{
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                        pl: 2,
                      },
                      textAlign: "justify",
                    }}
                    primary="Scribe Seva collaborates and communicates with its clients to provide design, technology, and marketing services."
                  />
                </Stack>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <List sx={{textAlign:"center"}}>
              <ListSubheader
                sx={{
                  mb: 2,
                  fontFamily: `${secondaryFont.style.fontFamily} !important`,
                  color: (theme) => theme.palette.common.black,
                  background: "transparent",
                  fontSize: (theme) => theme.typography.h4,
                }}
              >
                Quick Links
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{

                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Home"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="About us"
                  />
                </ListItemButton>
              </ListItem>

              {/* <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Services"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Career"
                  />
                </ListItemButton>
              </ListItem> */}

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Contact"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <List sx={{textAlign:"center"}}>
              <ListSubheader
                sx={{
                  mb: 2,
                  fontFamily: `${secondaryFont.style.fontFamily} !important`,
                  color: (theme) => theme.palette.common.black,
                  background: "transparent",
                  fontSize: (theme) => theme.typography.h4,
                }}
              >
                Information
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Refund Policy"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Privacy Statement"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="Shipping & Delivering Information "
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
      
          <Grid item md={3} sm={6} xs={12}>
            <List sx={{textAlign:"center"}}>
              <ListSubheader
                sx={{
                  mb: 2,
                  fontFamily: `${secondaryFont.style.fontFamily} !important`,
                  color: (theme) => theme.palette.common.black,
                  background: "transparent",
                  fontSize: (theme) => theme.typography.h4,
                }}
              >
                Office Address
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOn
                      fontSize="small"
                      sx={{ color: (theme) => theme.palette.common.black }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="123 Street, New York, USA"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Phone
                      fontSize="small"
                      sx={{ color: (theme) => theme.palette.common.black }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="+012 3456789"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Email
                      fontSize="small"
                      sx={{ color: (theme) => theme.palette.common.black }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      textAlign:"center",
                      color: (theme) => theme.palette.common.black,
                      "& .MuiTypography-root": {
                        ...typography.body2,
                      },
                    }}
                    primary="info@example.com"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{justifyContent:"center"}}>
                <Stack direction="row"  spacing={1} pl={2} mt={1.5}>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        p: 0.5,
                        background: (theme) =>
                          alpha(theme.palette.common.black, 0.4),
                        borderRadius: "4px",
                      }}
                    >
                      <Facebook
                        fontSize="small"
                        sx={{ color: (theme) => theme.palette.common.black }}
                      />
                    </Stack>
                  </Box>

                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        p: 0.5,
                        background: (theme) =>
                          alpha(theme.palette.common.black, 0.4),
                        borderRadius: "4px",
                      }}
                    >
                      <Twitter
                        fontSize="small"
                        sx={{ color: (theme) => theme.palette.common.black }}
                      />
                    </Stack>
                  </Box>

                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        p: 0.5,
                        background: (theme) =>
                          alpha(theme.palette.common.black, 0.4),
                        borderRadius: "4px",
                      }}
                    >
                      <LinkedIn
                        fontSize="small"
                        sx={{ color: (theme) => theme.palette.common.black }}
                      />
                    </Stack>
                  </Box>
                </Stack>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth
        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
      >
        <Box
          sx={{
            py: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="overline" color="common.white" fontWeight={400}>
            © Copyright Scribe Seva. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
