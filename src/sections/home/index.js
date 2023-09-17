import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import About from "./about";
import StepsProcedure from "./steps";

const HomeSection = () => {
  return (
    <>
      <Stack spacing={8} mt={8}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: { md: "400px", sm: "250px", xs: "250px" },
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          src="/bgbanner.jpg"
        />

        <Box>
          <About />
        </Box>
        <Box>
          <StepsProcedure />
        </Box>
      </Stack>
    </>
  );
};

export default HomeSection;
