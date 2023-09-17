import { Box, Grid, Stack, Typography, alpha } from "@mui/material";
import React from "react";

const Step = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {[...Array(4)].map((elem, index) => {
          return (
            <Grid item md={3} sm={6} xs={12} key={index}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: (theme) => `2px solid ${theme.palette.primary.main}`,
                  height: "250px",
                  width: "250px",
                  m: "auto",
                  background: (theme) => alpha(theme.palette.primary.main, 0.1),
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(1.6px)",
                  WebkitBackdropFilter: "blur(1.6px)",
                  border: "1px solid rgba(54, 161, 212, 0.21)",
                }}
              >
                <Typography variant="h3" color="primary">
                  Step {index + 1}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Step;
