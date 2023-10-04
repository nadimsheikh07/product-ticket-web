import { TextBox } from "@/components/form";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const MobileForm = ({ formik }) => {
  return (
    <>
      <TextBox
        fullWidth
        isMaxLenght={10}
        name="phone"
        label="Mobile no."
        value={formik.values.phone}
        onChange={(e) => {
          if (e) {
            formik.setFieldValue(
              "phone",
              e.target.value.replace(/\D/gm, "")
            );
          }
          }}
        helperText={formik.touched.phone && formik.errors.phone}
      />
    </>
  );
};

export default MobileForm;
