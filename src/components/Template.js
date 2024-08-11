import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

function Template({ page }) {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: "#081324",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 89px)",
          width: "100vw",
        }}
      >
        {page}
      </Box>
    </Grid>
  );
}

export default Template;
