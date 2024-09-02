import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Apple from "./Apple";
import Highlights from "./Highlights";
import Threed from "./Threed";
import Camera from "./Camera";
function Home() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Apple />
        {/* <Highlights /> */}
        <Threed />
        <Camera />
      </Box>
    </>
  );
}

export default Home;
