import ThankyouComponent from "@/components/thank-you";
import { WebLayout } from "@/layouts";
import { ProductSection } from "@/sections/scan";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const CodePage = () => {
  const { query } = useRouter();
  const { code } = query;
  const { enqueueSnackbar } = useSnackbar();
  const [showMobile, setShowMobile] = React.useState(true);
  const [showDetail, setShowDetail] = React.useState(false);
  const [productDetail, setProductDetail] = React.useState({});

  const [message, setMessage] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      phone: "",
      otp: "",
      file: "",
      code: code,
      description: "",
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
      if (!showMobile && !showDetail) {
        if (!values.otp) {
          errors.otp = "OTP is required";
        }
      }
      return errors;
    },
    onSubmit: async (values, { setFieldError, setFieldValue }) => {
      let url, Method;
      if (showMobile && !showDetail) {
        url = "/api/generate-otp";
        Method = "POST";
      } else if (!showMobile && !showDetail) {
        url = "/api/verify-otp";
        Method = "POST";
      } else {
        url = "/api/generate-ticket";
        Method = "POST";
      }

      await axiosInstance
        .request({
          method: Method,
          url: url,
          data: values,
        })
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            if (response?.data && response?.data?.otp) {
              setFieldValue("otp", response?.data?.otp);
            }

            setShowMobile(false);
            if (!showMobile) {
              setShowDetail(true);
            }
            setShowMobile(false);
            if (response?.data?.accessToken) {
              axiosInstance.defaults.headers.common.Authorization = `Bearer ${response?.data?.accessToken}`;
            }
            if (url === "/api/generate-ticket") {
              setMessage(code);
            }
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          console.log("responseresponse", response);
          // show error message
          enqueueSnackbar(response?.data?.message, {
            variant: "error",
          });

          // set server error
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.errors[key]) {
                setFieldError(key, response.data.errors[key][0]);
              }
            }
          }
        });
    },
  });

  const onReset = () => {
    setMessage(false);
    formik.resetForm();
  };

  const getProductDetail = async () => {
    await axiosInstance
      .get(`/api/product_scan/${code}`)
      .then((response) => {
        if (response?.status === 200) {
          setProductDetail(response?.data);
        }
      })
      .catch((error) => {
        console.log("ProductDetailError");
        const { response } = error;
      });
  };
  React.useEffect(() => {
    if (showDetail) {
      getProductDetail();
    }
  }, [showDetail]);

  return (
    <React.Fragment>
      <WebLayout>
        <ProductSection
          showMobile={showMobile}
          formik={formik}
          params={query}
          showDetail={showDetail}
          productDetail={productDetail}
        />
      </WebLayout>
      <ThankyouComponent open={message} onReset={onReset} />
    </React.Fragment>
  );
};

export default CodePage;
