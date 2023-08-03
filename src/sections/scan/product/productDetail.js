import { Box, Typography } from "@mui/material";
import React from "react";
import ProductForm from "./productForm";

const ProductDetail = ({ formik }) => {
  return (
    <React.Fragment>
      <Typography component="h4" variant="h4">
        Product Detail
      </Typography>
      <Box sx={{ my: 4 }}>
        <ProductForm formik={formik} />
      </Box>
    </React.Fragment>
  );
};

export default ProductDetail;
