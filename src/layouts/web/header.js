import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const WebHeader = () => {
  return (
    <React.Fragment>
      <Box>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <Box component="img" width={50} src="/favicon.ico" />
            </Box>
            <Box>
              <Typography component="p" variant="subtitle2" color="inherit">
                test@gmail.com
              </Typography>
              <Typography component="p" variant="subtitle2" color="inherit">
                +91 1234567890
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default WebHeader;
