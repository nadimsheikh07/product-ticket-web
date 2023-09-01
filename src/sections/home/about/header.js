import { Box, Typography } from "@mui/material";
import React from "react";

const AboutHeader = () => {
  return (
    <Box mb={2}>
      <Typography
        component="p"
        variant="body2"
        textTransform="uppercase"
        color="primary"
      >
        {"// About us"}
      </Typography>
      <Typography
        component="h3"
        variant="h3"
        // fontFamily="playfair-display"
        textTransform="capitalize"
      >
        we make every QR easy for Everyone.
      </Typography>
    </Box>
  );
};

export default AboutHeader;
