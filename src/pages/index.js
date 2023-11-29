import { WebLayout } from "@/layouts";
import HomeSection from "@/sections/home";
import axiosInstance from "@/utils/axios";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

HomePage.getLayout = (page) => <WebLayout>{page}</WebLayout>;
export default function HomePage() {
  const { query, pathname } = useRouter();
  const { company_code } = query;

  React.useEffect(() => {
    if (company_code) {
      axiosInstance.defaults.headers.common.company_code = company_code;
    }
  }, [company_code, pathname, query]);

  return (
    <>
      <Box>
        <HomeSection />
      </Box>
    </>
  );
}
