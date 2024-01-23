import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RemoteComponent from "../RemoteComponent";

const StoreHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Store
          </Typography>
          <RemoteComponent remote="CART" component="Cart" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default StoreHeader;
