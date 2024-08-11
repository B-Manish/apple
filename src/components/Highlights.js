import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import "../App.css";

const Highlights = () => {
  //   useGSAP(() => {
  //     gsap.to("#iphone", { opacity: 1, delay: 1.5 });
  //     gsap.to("#gg", { opacity: 1, y: -50, delay: 1.5 });
  //   }, []);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid green",
      }}
    >
      Highlights
    </Box>
  );
};

export default Highlights;
