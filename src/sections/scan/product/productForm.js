import { DragDrop, TextBox } from "@/components/form";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import React from "react";

const ProductForm = ({ formik }) => {
  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit}>
      <Box>
        <TextBox
          fullWidth
          name="description"
          label="Description"
          multiline={true}
          rows={3}
          value={formik.values.description}
          onChange={formik.handleChange}
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <DragDrop
          fullWidth={true}
          name="file"
          url="api/upload/image"
          value={formik.values.file}
          onChange={(e) => {
            formik.setFieldValue("file", e);
          }}
        />
      </Box>
      <Box>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={formik?.isSubmitting}
        >
          Submit
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default ProductForm;
