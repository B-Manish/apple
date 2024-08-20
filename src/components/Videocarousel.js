import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  useGSAP(() => {
    // gsap.to("#title", { opacity: 1, y: -20 });
    // gsap.to(".link", { opacity: 1, y: -20, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <Box sx={{ border: "1px solid red" }}>
      {hightlightsSlides?.map((item) => {
        return (
          <Box sx={{ width: "1000px" }}>
            <video
              autoPlay
              muted
              playsInline={true}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </Box>
        );
      })}
    </Box>
  );
};

export default VideoCarousel;
