import React from "react";
import { Box } from "@mui/material";
// import "../App.css";

function CustomDivider({ width = "140px", margin = "0 0 0 20px" }) {
  return (
    <Box
      sx={{ width: width, margin: margin, height: "1px", background: "grey" }}
    ></Box>
  );
}

export default CustomDivider;
