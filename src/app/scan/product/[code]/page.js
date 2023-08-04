"use client";
import { WebLayout } from "@/layouts/web";
import { ProductSection } from "@/sections/scan";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React from "react";

const CodePage = ({ params }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [showMobile, setShowMobile] = React.useState(true);
  const [showDetail, setShowDetail] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "",
      otp: "",
    },
    validate: (values) => {
      const errors = {};
      const phoneRegex = /^\d+$/i;
      if (showMobile) {
        if (!values.phone) {
          errors.phone = "Phone is required";
        } else if (!phoneRegex.test(values.phone)) {
          errors.phone = "Invalid phone number";
        } else if (values.phone.length < 10 || values.phone.length > 10) {
          errors.phone = "Phone number must be 10 digit";
        }
      }
      if (!showMobile) {
        if (!values.otp) {
          errors.otp = "OTP is required";
        }
      }
      return errors;
    },
    onSubmit: async (values, { setFieldError }) => {
      setShowMobile(false);
      if (!showMobile) {
        setShowDetail(true);
      }

      let url, Method;
      if (showMobile && !showDetail) {
        url = "/api/mobile";
        Method = "POST";
      } else if (!showMobile && !showDetail) {
        url = "/api/otp";
        Method = "POST";
      } else {
        url = "/api/product-detail";
        Method = "POST";
      }

      console.log("urlurlurl", url);
      // await axiosInstance
      //   .post("")
      //   .then((response) => {
      //     if (response?.status === 200) {
      //       setShowMobile(false);
      //       enqueueSnackbar(response.data.message, {
      //         variant: "success",
      //       });
      //     } else {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "error",
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     const { response } = error;
      //     // show error message
      //     enqueueSnackbar(response?.data?.message, {
      //       variant: "error",
      //     });

      //     // set server error
      //     if (response.status === 422) {
      //       // eslint-disable-next-line no-unused-vars
      //       for (const [key, value] of Object.entries(values)) {
      //         if (response.data.errors[key]) {
      //           setFieldError(key, response.data.errors[key][0]);
      //         }
      //       }
      //     }
      //   });
    },
  });

  console.log("formikformik", showMobile);
  return (
    <React.Fragment>
      <WebLayout>
        <ProductSection
          showMobile={showMobile}
          formik={formik}
          params={params}
          showDetail={showDetail}
        />
      </WebLayout>
    </React.Fragment>
  );
};

export default CodePage;
