import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, Grid } from "@mui/material";
import VideoCarousel from "./Videocarousel";
import "../App.css";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: -20 });
    gsap.to(".link", { opacity: 1, y: -20, duration: 1, stagger: 0.25 });
  }, []);
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
      <Box
        sx={{
          width: "80%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "#957E81",
            fontSize: "56px",
            fontWeight: "600",
            opacity: "0",
          }}
          className="roboto"
          id="title"
        >
          Get the highlights
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box className="link" sx={{ opacity: "0" }}>
            Watch the film
          </Box>
          <Box className="link" sx={{ opacity: "0" }}>
            Watch the event
          </Box>
        </Box>
      </Box>
      <VideoCarousel />
    </Box>
  );
};

export default Highlights;
