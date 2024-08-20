import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

function Template({ page }) {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        background: "black",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        {page}
      </Box>
    </Grid>
  );
}

export default Template;
