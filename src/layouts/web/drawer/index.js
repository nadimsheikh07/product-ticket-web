import { Box, Drawer } from "@mui/material";
import React from "react";

const MuiDrawer = ({
  drawer,
  container,
  mobileOpen,
  setMobileOpen,
  drawerWidth,
}) => {
 
  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={()=>setMobileOpen(false)}
        ModalProps={{
          keepMounted: false, // Better open performance on mobile.
        }}
        anchor="right"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MuiDrawer;
