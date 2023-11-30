import { WebLayout } from "@/layouts";
import ContactSection from "@/sections/contact";
import axiosInstance from "@/utils/axios";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const ContactUs = () => {
  const { query, pathname } = useRouter();
  const { company_code } = query;

  React.useEffect(() => {
    if (company_code) {
      axiosInstance.defaults.headers.common.company_code = company_code;
    }
  }, [company_code, pathname, query]);
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
