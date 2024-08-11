import React from "react";
import { Box } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";

function Aboutme() {
  return (
    <Box
      sx={{
        width: "75%",
        maxWidth: "900px",
        height: "500px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        className="roboto"
      >
        <Box
          sx={{
            color: "#5BF2CE",
            fontSize: "24px",
          }}
        >
          01.
        </Box>
        <Box
          className="customdmsans"
          sx={{ color: "#A7C3E5", fontWeight: "600", fontSize: "32px" }}
        >
          About me
        </Box>
        <CustomDivider />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "511px" }}>
          <Box className="customdmsans">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </Box>
        </Box>
        <Box sx={{ width: "389px" }}>r</Box>
      </Box>
    </Box>
  );
}

export default Aboutme;
