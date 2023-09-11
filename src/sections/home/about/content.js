import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const AboutContent = () => {
  return (
    <React.Fragment>
      <Stack spacing={1.2} >
        <Typography component="p" variant="body2" sx={{fontSize:"16px"}}>
          Qr  has been a well-known name for a variety of web-based
          services since its inception. We offer web design, web development,
          graphics design, internet marketing, mobile application development,
          video animation, and other related services. We have watched services
          evolve over time and with changing technologies, and we have earned
          competence in a variety of disciplines. We have emerged as the most
          popular alternative for website design and development due to our
          professional work force and cutting-edge technologies.
        </Typography>
        <Typography component="p" variant="body2"  sx={{fontSize:"16px"}}>
          Why Qr ? No Clutter, Innovative Approach Over ten years
          of expertise Main emphasis on customer satisfaction Systematic work as
          we incorporate our buyers in team Reporting on a regular basis Quality
          control Features that must be kept an eye onChoosing any company:
        </Typography>
      </Stack>

      {/* <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          href="/about-us"
        >
          Read More
        </Button>
      </Box> */}
    </React.Fragment>
  );
};

export default AboutContent;
