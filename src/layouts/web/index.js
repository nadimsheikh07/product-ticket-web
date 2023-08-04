import React from "react";
import WebHeader from "./header";
import WebFooter from "./footer";
import { Toolbar } from "@mui/material";

export const WebLayout = ({ children }) => {
  return (
    <React.Fragment>
      <WebHeader />
      <Toolbar />
      {children}
      <WebFooter />
    </React.Fragment>
  );
};
