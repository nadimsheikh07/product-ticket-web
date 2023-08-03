import { OTPBox, TextBox } from "@/components/form";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const OTPForm = ({ formik }) => {
  return (
    <>
      <Box>
        <OTPBox formik={formik} />
        {/* <TextBox
          fullWidth
          label="OTP"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          helperText={formik.touched.phone && formik.errors.phone}
        /> */}
      </Box>
    </>
  );
};

export default OTPForm;
