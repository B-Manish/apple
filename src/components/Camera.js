import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function Camera() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 500,
      //   y: 200,
      duration: 2,
      scale: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%", // Start animation when the top of the box reaches 80% down the viewport
        end: "top 50%", // End animation when the top of the box reaches 50% down the viewport
        scrub: true, // Smooth animation based on scroll position
        markers: true, // Optional: Show markers for start and end (useful for debugging)
      },
    });
  }, []);

  return (
    <Box className="App" sx={{ height: "100vh", background: "black" }}>
      <Box className="spacer"></Box>
      <Box
        className="box"
        ref={boxRef}
        sx={{
          color: "white",
          border: "1px solid yellow",
          height: "250px",
          width: "500px",
        }}
      >
        ScrollTrigger Box
      </Box>
      <Box className="spacer"></Box>
    </Box>
  );
}

export default Camera;
