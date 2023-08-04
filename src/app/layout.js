"use client";
import ThemeProvider from "@/theme";
import { Inter } from "next/font/google";
import { SettingsProvider, ThemeSettings } from "@/components/settings";
import { MotionLazyContainer } from "@/components/animate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SnackbarProvider from "@/components/snackbar/SnackbarProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <SettingsProvider>
              <MotionLazyContainer>
                <ThemeSettings>
                  <SnackbarProvider>{children}</SnackbarProvider>
                </ThemeSettings>
              </MotionLazyContainer>
            </SettingsProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
