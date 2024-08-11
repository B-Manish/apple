import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "../App.css";
import Apple from "./Apple";
function Home() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Apple />
        {/* <Box>
          <Box className="roboto" sx={{ color: "#5BF2CE" }}>
            Hi, my name is
          </Box>
          <Box
            className="customdmsans"
            sx={{
              color: "#A7C3E5",
              fontSize: "80px",
              fontWeight: "600",
            }}
          >
            Manish Batchu
          </Box>
          <Box
            className="customdmsans"
            sx={{ color: "#A19A8F", fontSize: "80px", fontWeight: "600" }}
          >
            I build things for the web
          </Box>
          <Box className="customdmsans" sx={{ width: "517px" }}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </Box>
        </Box> */}
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#081324",
        }}
      >
        <Aboutme />
        <Built />
        <Getintouch />
      </Box> */}
    </>
  );
}

export default Home;
