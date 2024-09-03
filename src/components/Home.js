import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Apple from "./Apple";
import Highlights from "./Highlights";
import Threed from "./Threed";
import Camera from "./Camera";
import Phone from "./Phone";
import CustomCarousel from "./CustomCarousel";
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
        <CustomCarousel />
        <Phone />
        <Threed />
      </Box>
    </>
  );
}

export default Home;
