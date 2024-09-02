import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iPhone from "../static/phone.jpg";

gsap.registerPlugin(ScrollTrigger);

function Phone() {
  const imgRef = useRef(null);

  useEffect(() => {
    const fadeIn = () => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 }, // Start with the text hidden
        {
          opacity: 1, // Fade the text in
          duration: 2, // Duration of the fade-in effect
        }
      );
    };

    ScrollTrigger.create({
      trigger: imgRef.current,
      start: "top 100%", // Start animation when the top of the text reaches 80% down the viewport
      end: "top 60%", // End animation when the top of the text reaches 60% down the viewport
      onEnter: fadeIn, // Trigger fadeIn when entering the viewport
      onLeaveBack: fadeIn, // Trigger fadeIn when scrolling back up
      markers: true, // Optional: Show markers for start and end (useful for debugging)
    });
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "70%", maxWidth: "980px" }}>
        <Box ref={imgRef}>
          <img src={iPhone} />
        </Box>
        <Box>
          <Box sx={{ color: "#86868b", fontSize: "21px", fontWeight: "600" }}>
            The 48MP Main camera is more advanced than ever, capturing
            super‑high‑resolution photos with a new level of detail and colour.
          </Box>
          <Box sx={{ color: "#86868b", fontSize: "21px", fontWeight: "600" }}>
            You’ll see the improvements in your portraits. And now you no longer
            have to switch to Portrait mode. If your subject is a person, dog or
            cat, iPhone automatically captures depth information. So you can
            choose to instantly see your photo as a portrait, with an artful
            blur effect. Or later in the Photos app.
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Phone;
