import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iPhone from "../static/phone.jpg";

gsap.registerPlugin(ScrollTrigger);

function Phone() {
  const imgRef = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);

  useEffect(() => {
    const imgfadeIn = () => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 }, // Start with the text hidden
        {
          opacity: 1, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    const imgfadeOut = () => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 1 }, // Start with the text hidden
        {
          opacity: 0, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    const p1fadeIn = () => {
      gsap.fromTo(
        p1.current,
        { opacity: 0 }, // Start with the text hidden
        {
          opacity: 1, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    const p1fadeout = () => {
      gsap.fromTo(
        p1.current,
        { opacity: 1 }, // Start with the text hidden
        {
          opacity: 0, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    const p2fadeIn = () => {
      gsap.fromTo(
        p2.current,
        { opacity: 0 }, // Start with the text hidden
        {
          opacity: 1, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    const p2fadeout = () => {
      gsap.fromTo(
        p2.current,
        { opacity: 1 }, // Start with the text hidden
        {
          opacity: 0, // Fade the text in
          duration: 1, // Duration of the fade-in effect
        }
      );
    };

    ScrollTrigger.create({
      trigger: imgRef.current,
      start: "top 80%", // Start animation when the top of the text reaches 80% down the viewport
      end: "top 60%", // End animation when the top of the text reaches 60% down the viewport
      onEnter: imgfadeIn, // Trigger fadeIn when entering the viewport
      onLeaveBack: imgfadeOut, // Trigger fadeIn when scrolling back up
      // markers: true, // Optional: Show markers for start and end (useful for debugging)
    });

    ScrollTrigger.create({
      trigger: p1.current,
      start: "top 66%",
      end: "top 46%",
      onEnter: p1fadeIn,
      onLeaveBack: p1fadeout,
      //markers: true,
    });

    ScrollTrigger.create({
      trigger: p2.current,
      start: "top 63%",
      end: "top 43%",
      onEnter: p2fadeIn,
      onLeaveBack: p2fadeout,
      // markers: true,
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
        <Box sx={{ padding: "0 0 0 50px" }}>
          <Box
            sx={{
              opacity: "0",
              color: "#86868b",
              fontSize: "21px",
              fontWeight: "600",
              m: "0 0 30px 0",
            }}
            ref={p1}
          >
            The 48MP Main camera is more advanced than ever, capturing
            super‑high‑resolution photos with a new level of detail and colour.
          </Box>
          <Box
            sx={{
              opacity: "0",
              color: "#86868b",
              fontSize: "21px",
              fontWeight: "600",
            }}
            ref={p2}
          >
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
