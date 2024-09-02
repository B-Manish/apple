import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Iguana from "../static/iguana.jpg";

gsap.registerPlugin(ScrollTrigger);

function Camera() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      //   x: 500,
      //   y: 200,
      duration: 2,
      scale: 0.75,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 95%", // Start animation when the top of the box reaches 80% down the viewport
        end: "top 40%", // End animation when the top of the box reaches 50% down the viewport
        scrub: true, // Smooth animation based on scroll position
        // markers: true, // Optional: Show markers for start and end (useful for debugging)
      },
    });

    gsap.to(textRef.current, {
      duration: 2,
      color: "#F5F5F7",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 95%",
        end: "top 40%",
        scrub: true,
      },
    });
    gsap.to(text2Ref.current, {
      duration: 2,
      color: "#86868B",
      scrollTrigger: {
        trigger: text2Ref.current,
        start: "top 95%",
        end: "top 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <Box
      className="App"
      sx={{
        height: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "70%", maxWidth: "980px", color: "#FFFFFF" }}>
        <Box
          ref={textRef}
          sx={{
            color: "black",
            fontSize: "80px",
            fontWeight: "600",
          }}
        >
          A camera that captures your wildest imagination.
        </Box>
        <Box
          ref={text2Ref}
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </Box>
      </Box>

      <Box className="box" ref={boxRef}>
        <img src={Iguana} style={{ width: "70%" }} />
      </Box>
    </Box>
  );
}

export default Camera;
