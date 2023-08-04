import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ProductForm from "./productForm";

const ProductDetail = ({ formik }) => {
  return (
    <React.Fragment>
      <Box>
        <Typography component="h4" variant="h4">
          User Detail
        </Typography>
        <Stack spacing={2} my={4}>
          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Name :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Test USer</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Email :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Test@gmail.com</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Phone :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">1234567890</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography component="h4" variant="h4">
          Product Detail
        </Typography>
        <Stack spacing={2} my={4}>
          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Invoice No. :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Invoice No.</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Invoice Date :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Product Name</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Product Name :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Product Name</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Model :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Model Name</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Warranty Start :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Warranty Start</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ width: "200px" }}>
                <Typography fontWeight={600}>Warranty End :</Typography>
              </Box>
              <Box>
                <Typography variant="body2">Warranty End</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ my: 4 }}>
        <ProductForm formik={formik} />
      </Box>
    </React.Fragment>
  );
};

export default ProductDetail;
