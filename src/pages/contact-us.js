import { WebLayout } from "@/layouts";
import ContactSection from "@/sections/contact";
import { Box, Stack } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Stack spacing={4} mb={4} width="100%">
      <Box
        component="img"
        sx={{
          width: "100%",
          height: { md: "400px", sm: "200px", xs: "200px" },
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        src="/bgbanner.jpg"
      />
      <ContactSection />
    </Stack>
  );
};
ContactUs.getLayout = (page) => <WebLayout>{page}</WebLayout>;
export default ContactUs;
