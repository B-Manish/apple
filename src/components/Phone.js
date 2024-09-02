import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Iguana from "../static/iguana.jpg";

gsap.registerPlugin(ScrollTrigger);

function Phone() {
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

  return <Box>Phone</Box>;
}

export default Phone;
