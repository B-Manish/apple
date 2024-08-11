import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import "../App.css";
import { heroVideo, smallHeroVideo } from "../utils";

const Apple = () => {
  useGSAP(() => {
    gsap.to("#apple", { opacity: 1, delay: 1 });
    gsap.to("#highlights", { opacity: 1, delay: 1.5, y: -200 });
    gsap.to(".aa", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <Box sx={{ width: "100%", background: "black" }}>
      <Box
        sx={{ opacity: "0", fontSize: "100px" }}
        className="roboto"
        id="apple"
      >
        Apple
      </Box>
      <Box sx={{ border: "1px solid red", width: "400px", height: "800px" }}>
        <video
          autoPlay
          muted
          playsInline={true}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={smallHeroVideo} type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{ opacity: "0", fontSize: "100px" }}
        className="roboto"
        id="highlights"
      >
        Highlights
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ mr: "30px" }} className="aa">
          Highlights
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box className="aa" sx={{ mr: "30px", opacity: "0" }}>
            Watch the flim
          </Box>
          <Box className="aa" sx={{ mr: "30px", opacity: "0" }}>
            Watch the flim
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Apple;
