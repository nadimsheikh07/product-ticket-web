import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Step = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {[...Array(4)].map((elem, index) => {
          return (
            <Grid item md={3} sm={6} xs={12} key={index}>
              <Box
                sx={{
                  border: "2px solid grey",
                  height: "250px",
                  width: "250px",
                  m: "auto",
                }}
              >
                <Typography >Step {index + 1}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Step;
