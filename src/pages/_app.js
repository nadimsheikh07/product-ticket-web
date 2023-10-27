import ThemeProvider from "@/theme";
import { SettingsProvider, ThemeSettings } from "@/components/settings";
import { MotionLazyContainer } from "@/components/animate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";
import Head from "next/head";
import PropTypes from "prop-types";
import { StepperProvider } from "@/components/stepper/stepperContext";

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  console.log("getLayout", getLayout);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <MotionLazyContainer>
              <ThemeSettings>
                <SnackbarProvider>
                  <StepperProvider>
                    {getLayout(<Component {...pageProps} />)}
                  </StepperProvider>
                </SnackbarProvider>
              </ThemeSettings>
            </MotionLazyContainer>
          </SettingsProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
