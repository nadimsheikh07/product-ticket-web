import typography, { secondaryFont } from "@/theme/typography";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
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
        sx={{ background: (theme) => theme.palette.grey[100], py: 3 }}
      >
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <List>
              <ListSubheader
                sx={{
                  mb: 1,
                  fontFamily: `${secondaryFont.style.fontFamily} !important`,
                  color: (theme) => theme.palette.common.black,
                  background: "transparent",
                  fontSize: (theme) => theme.typography.h4,
                }}
              >
                About Us
              </ListSubheader>
              <ListItem disablePadding>
                <ListItemText
                  sx={{
                    color: (theme) => theme.palette.common.black,
                    "& .MuiTypography-root": {
                      ...typography.body2,
                      pl: 2,
                    },
                    textAlign: "justify",
                  }}
                  primary="Qr collaborates and communicates with its clients to provide design, technology, and marketing services."
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ListSubheader
              sx={{
                mb: 1,
                fontFamily: `${secondaryFont.style.fontFamily} !important`,
                color: (theme) => theme.palette.common.black,
                background: "transparent",
                fontSize: (theme) => theme.typography.h4,
              }}
            >
              Address
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
                    color: (theme) => theme.palette.common.black,
                    "& .MuiTypography-root": {
                      ...typography.body2,
                    },
                  }}
                  primary="435, 4th floor Emrald Tower, Hathipole, Udaipur"
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
                    color: (theme) => theme.palette.common.black,
                    "& .MuiTypography-root": {
                      ...typography.body2,
                    },
                  }}
                  primary="+91 9928736111"
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
                    color: (theme) => theme.palette.common.black,
                    "& .MuiTypography-root": {
                      ...typography.body2,
                    },
                  }}
                  primary="shoqeen@gmail.com"
                />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ListSubheader
              sx={{
                mb: 1,
                fontFamily: `${secondaryFont.style.fontFamily} !important`,
                color: (theme) => theme.palette.common.black,
                background: "transparent",
                fontSize: (theme) => theme.typography.h4,
              }}
            >
              Follow Us
            </ListSubheader>
            <Stack direction="row" spacing={1}>
              <ListItem disablePadding sx={{ width: "max-content" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "4px",
                  }}
                >
                  <Facebook
                    fontSize="small"
                    sx={{ color: (theme) => theme.palette.common.black }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ width: "max-content" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "4px",
                  }}
                >
                  <Instagram
                    fontSize="small"
                    sx={{ color: (theme) => theme.palette.common.black }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ width: "max-content" }}>
                <ListItemButton
                  sx={{
                    borderRadius: "4px",
                  }}
                >
                  <LinkedIn
                    fontSize="small"
                    sx={{ color: (theme) => theme.palette.common.black }}
                  />
                </ListItemButton>
              </ListItem>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth
        sx={{ bgcolor: (theme) => theme.palette.primary.main }}
      >
        <Box
          sx={{
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="common.white" fontWeight={400}>
            © Copyright Qr Ticket System. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
