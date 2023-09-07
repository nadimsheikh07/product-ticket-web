import React from "react";
import Header from "./header";
import Footer from "./footer";
import Topbar from "./topbar";

const WebLayout = ({ children }) => {
  return (
    <>
      {/* <Topbar /> */}
      <Header />
        {children}
      <Footer />
    </>
  );
};

export default WebLayout;
