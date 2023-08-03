import { TextBox } from "@/components/form";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const MobileForm = ({ formik }) => {
  return (
    <>
      <TextBox
        fullWidth
        name="phone"
        label="Mobile no."
        value={formik.values.phone}
        onChange={formik.handleChange}
        helperText={formik.touched.phone && formik.errors.phone}
      />
    </>
  );
};

export default MobileForm;
