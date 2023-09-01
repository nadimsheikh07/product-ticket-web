import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Topbar = () => {
  return (
    <React.Fragment>
      <Container
        maxWidth
        sx={{ background: (theme) => theme.palette.primary.main }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: "auto !important",
            py: 1.5,
            alignItems: "center",
          }}
        >
          <Box />
          <Box>
            <Stack direction="row" spacing={1}>
              <Typography component="p" variant="body2" color="common.white">
                Follow us:
              </Typography>

              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
                  alignItems="center"
                >
                  <Facebook sx={{color:"white"}} />

                  <Twitter sx={{color:"white"}}/>

                  <LinkedIn sx={{color:"white"}}/>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default Topbar;
