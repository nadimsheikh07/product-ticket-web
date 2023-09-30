import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import MobileForm from "./mobileForm";
import OTPForm from "./otpForm";
import { LoadingButton } from "@mui/lab";
import ProductDetail from "./productDetail";

const ProductSection = ({
  params,
  showMobile,
  formik,
  showDetail,
  productDetail,
}) => {
  return (
    <Box component="div" sx={{ mt: 10 }}>
      <Container>
        {!showDetail && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              height: { md: "100vh", sm: "100%", xs: "100%" },
            }}
          >
            <Grid item md={6}>
              <Box>
                <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  my={4}
                >
                  <Card>
                    <CardContent>
                      {showMobile && <MobileForm formik={formik} />}
                      {!showMobile && <OTPForm formik={formik} />}
                      <Box>
                        <LoadingButton
                          type="submit"
                          variant="contained"
                          loading={formik?.isSubmitting}
                        >
                          {showMobile ? "Get OTP" : "Submit"}
                        </LoadingButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
        {showDetail && (
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              my: 4,
            }}
          >
            <Card>
              <CardContent>
                <ProductDetail productDetail={productDetail} formik={formik} />
              </CardContent>
            </Card>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductSection;
