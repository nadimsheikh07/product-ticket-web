import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AboutContent from "./content";
import AboutImage from "./image";
import AboutHeader from "./header";

const About = () => {
  return (
    <Box mt={3}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={5} sm={12} xs={12}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AboutImage />
            </Box>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <AboutHeader />
            <AboutContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
