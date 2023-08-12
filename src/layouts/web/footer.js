import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const WebFooter = () => {
  return (
    <React.Fragment>
      <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Typography component="p" variant="subtitle2" color="inherit">
            Copy Rigth
          </Typography>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
};

export default WebFooter;
