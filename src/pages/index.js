import { WebLayout } from "@/layouts";
import HomeSection from "@/sections/home";
import { Box } from "@mui/material";

HomePage.getLayout = (page) => <WebLayout>{page}</WebLayout>;
export default function HomePage() {
  return (
    <>
      <Box>
        <HomeSection />
      </Box>
    </>
  );
}
