import MuiDrawer from "./drawer";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  ClickAwayListener,
  Container,
  Stack,
  alpha,
} from "@mui/material";
import Link from "next/link";
import { Close, Phone } from "@mui/icons-material";
import useOffSetTop from "@/hooks/useOffSetTop";
import { useRouter } from "next/router";

const drawerWidth = 280;
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  // {
  //   title: "About",
  //   href: "/about-us",
  // },
  // {
  //   title: "Jobs",
  //   href: "/jobs",
  // },
  // {
  //   title: "Portfolio",
  //   href: "/portfolio",
  // },
  // {
  //   title: "Career",
  //   href: "/careers",
  // },
  {
    title: "Contact",
    href: "/contact-us",
  },
];

const Header = (props) => {
  const router = useRouter();
  const { window } = props;
  const isOffset = useOffSetTop(48);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { query, pathname } = useRouter();

  const { company_code } = query;

  const handleDrawerToggle = (boolean) => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Box sx={{ my: 2 }}>
          <Box
            width="80px"
            // maxWidth={"130px"}
            component="img"
            src="/qrticketweeb.png"
            onClick={() => setMobileOpen(false)}
          />
        </Box>
        <Box>
          <Card
            sx={{ borderRadius: "50%" }}
            onClick={() => setMobileOpen(false)}
          >
            <IconButton size="small">
              <Close fontSize="small" />
            </IconButton>
          </Card>
        </Box>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              href={`${item?.href}?company_code=${company_code}`}
              onClick={() => setMobileOpen(false)}
              sx={{ textAlign: "left" }}
            >
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "14px",
                  },
                }}
                primary={item?.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              router.push("https://qr-ticket-client.vercel.app/");
              setMobileOpen(false);
            }}
          >
            Log In
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  let buttonColor = "inherit";

  if (isOffset) {
    buttonColor = "secondary";
  } else {
    buttonColor = "primary";
  }

  return (
    <>
      <Box>
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            py: 1,
            zIndex: 4,
            boxShadow: !isOffset && "none",
            top: isOffset ? "0px" : "0px",
            background: (theme) =>
              isOffset
                ? alpha(theme.palette.primary.main, 1)
                : alpha(theme.palette.secondary.main, 1),
            transition: (theme) =>
              `${theme.transitions.create(
                ["top", "color", "background-color", "box-shadow"],
                {
                  duration: theme.transitions.duration.enteringScreen,
                  easing: theme.transitions.easing.easeInOut,
                }
              )}`,
          }}
        >
          <Container maxWidth>
            <Toolbar
              sx={{
                justifyContent: "space-between",
                px: { md: 2, sm: 0, xs: 0 },
              }}
            >
              <Box component="div">
                <Box
                  component="img"
                  alt="logo"
                  src="/qrticketweeb.png"
                  sx={{ width: "40px" }}
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                {navItems.map((item) => {
                  return (
                    <Button
                      key={item}
                      sx={{
                        fontWeight: 500,
                        color: (theme) => {
                          let color = theme.palette.common.white;

                          if (isOffset) {
                            color = theme.palette.common.black;
                          } else {
                            color = theme.palette.common.white;
                          }
                          return pathname !== item?.href
                            ? color
                            : theme.palette[buttonColor]?.main;
                        },
                      }}
                      color={pathname !== item?.href ? "inherit" : buttonColor}
                      component={Link}
                      href={`${item?.href}?company_code=${company_code}`}
                      onClick={() => setMobileOpen(false)}
                      variant={pathname == item?.href ? "outlined" : ""}
                    >
                      {item?.title}
                    </Button>
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: { md: "none", lg: "none", xl: "none" },
                  flexGrow: 1,
                }}
              />
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={() => setMobileOpen(true)}
                sx={{
                  mr: 0,
                  color: (theme) => {
                    let color = theme.palette.common.white;
                    if (isOffset) {
                      color = theme.palette.common.white;
                    } else {
                      color = theme.palette.common.white;
                    }
                    return color;
                  },
                  display: { md: "none", lg: "none", xl: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        router.push("https://qr-ticket-client.vercel.app/")
                      }
                      sx={{
                        fontWeight: 500,
                        color: (theme) => {
                          let color = theme.palette.primary.main;

                          if (isOffset) {
                            color = theme.palette.secondary.main;
                          } else {
                            color = theme.palette.primary.main;
                          }
                          return color;
                        },
                      }}
                      color={buttonColor}
                    >
                      Log In
                    </Button>
                  </Box>
                  {/* <Box>
                    <Button
                      variant="outlined"
                      onClick={() => router.push("/auth/register")}
                    >
                      Sign Up
                    </Button>
                  </Box> */}
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <MuiDrawer
        drawer={drawer}
        container={container}
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
      />
    </>
  );
};

export default Header;
