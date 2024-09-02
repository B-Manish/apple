import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Apple from "./Apple";
import Highlights from "./Highlights";
import Threed from "./Threed";
import Camera from "./Camera";
import Phone from "./Phone";
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
        <Phone />
      </Box>
    </>
  );
}

export default Home;
