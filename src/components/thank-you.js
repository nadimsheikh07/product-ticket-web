"use client";
import PropTypes from "prop-types";
// @mui
import { Link, Button, Divider, Typography, Stack } from "@mui/material";
import { OrderCompleteIllustration } from "@/assets/illustrations";
import { DialogAnimate } from "./animate";
import Iconify from "./iconify/Iconify";
import { useRouter } from "next/navigation";
// components

// ----------------------------------------------------------------------

ThankyouComponent.propTypes = {
  open: PropTypes.bool,
  onReset: PropTypes.func,
  onDownloadPDF: PropTypes.func,
};

export default function ThankyouComponent({ open }) {
  const router = useRouter();
  return (
    <DialogAnimate
      fullScreen
      open={open}
      PaperProps={
        {
          // sx: {
          //   maxWidth: { md: "calc(100% - 48px)" },
          //   maxHeight: { md: "calc(100% - 48px)" },
          // },
        }
      }
    >
      <Stack
        spacing={5}
        sx={{
          m: "auto",
          maxWidth: 480,
          textAlign: "center",
          px: { xs: 2, sm: 0 },
          my: 2,
        }}
      >
        <Typography variant="h4">Thank you for your complain!</Typography>

        <OrderCompleteIllustration sx={{ height: 280 }} />

        <Typography>
          Your complain has received
          <br />
          <br />
          Product Code: <Link>{open}</Link>
          <br />
          <br />
          We will contact you soon
        </Typography>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack
          spacing={2}
          justifyContent="space-between"
          direction={{ xs: "column-reverse", sm: "row" }}
        >
          <Button
            fullWidth
            size="large"
            color="inherit"
            variant="outlined"
            onClick={() => router.push("/")}
            startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          >
            Home
          </Button>

          {/* <Button
            fullWidth
            size="large"
            variant="contained"
            startIcon={<Iconify icon="ant-design:file-pdf-filled" />}
            onClick={onDownloadPDF}
          >
            Download as PDF
          </Button> */}
        </Stack>
      </Stack>
    </DialogAnimate>
  );
}
