import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import "../App.css";
import { heroVideo, smallHeroVideo } from "../utils";
// if screnwidth is less than 760 PieChartOutlineSharp, then dusplay smallherovideo

const Apple = () => {
  useGSAP(() => {
    gsap.to("#iphone", { opacity: 1, delay: 1.5 });
    gsap.to("#gg", { opacity: 1, y: -50, delay: 1.5 });
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
      }}
    >
      <Box
        sx={{
          opacity: "0",
          fontSize: "28px",
          fontWeight: "600",
          color: "#d7d5d1",
        }}
        id="iphone"
        className="roboto"
      >
        iPhone 15 Pro
      </Box>
      <Box sx={{ width: "80%", maxWidth: "1200px" }}>
        <video
          autoPlay
          muted
          playsInline={true}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          opacity: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "300px",
        }}
        id="gg"
      >
        <Box
          sx={{
            background: "#005ab5",
            padding: "11px 21px",
            fontSize: "17px",
            borderRadius: "980px",
            cursor: "pointer",
            width: "fit-content",
            mb: "27px",
          }}
        >
          Buy
        </Box>
        <Box
          sx={{ fontSize: "21px", fontWeight: "600", color: "#d7d5d1" }}
          className="roboto"
        >
          From ₹129800.00
        </Box>
      </Box>
    </Box>
  );
};

export default Apple;
