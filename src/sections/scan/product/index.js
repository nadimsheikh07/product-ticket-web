import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import MobileForm from "./mobileForm";
import OTPForm from "./otpForm";
import { LoadingButton } from "@mui/lab";
import ProductDetail from "./productDetail";

const ProductSection = ({ params, showMobile, formik, showDetail }) => {
  return (
    <Box component="div">
      <Container>
        {!showDetail && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
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
                <ProductDetail formik={formik} />
              </CardContent>
            </Card>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProductSection;
