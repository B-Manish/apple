import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, duration } from "@mui/material";
import "../App.css";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
// if screnwidth is less than 760 PieChartOutlineSharp, then dusplay smallherovideo

const Threed = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation of each model
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // timeline
  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }
    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <Box
      sx={{
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "black",
      }}
    >
      <Box
        id="heading"
        sx={{ opacity: "0", color: "#86868b", fontSize: "56px" }}
        className="roboto"
      >
        Take a closer look.
      </Box>
      <Box id="heading" sx={{ opacity: "0", display: "flex" }}>
        <ModelView
          index={1}
          groupRef={small}
          gsapType="view1"
          controlRef={cameraControlSmall}
          setRotationState={setSmallRotation}
          item={model}
          size={size}
        />
        <ModelView
          index={2}
          groupRef={large}
          gsapType="view2"
          controlRef={cameraControlLarge}
          setRotationState={setLargeRotation}
          item={model}
          size={size}
        />

        <Canvas
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
          eventSource={document.getElementById("root")}
        >
          <View.Port />
        </Canvas>
      </Box>
      <Box>
        {model.title}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid red",
            padding: "8px",
            background: "#2E2E30",
            borderRadius: "20px",
          }}
        >
          {models.map((item, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: item.color[0],
                borderRadius: "100px",
                width: "20px",
                height: "20px",
                marginRight: "9px",
                cursor: "pointer",
              }}
              onClick={() => setModel(item)}
            ></Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            background: "#2E2E30",
            borderRadius: "10px",
            padding: "0 10px",
          }}
        >
          {sizes.map((item) => (
            <Box
              key={item?.label}
              sx={{
                border: "1px solid blue",
                backgroundColor: size === item?.value ? "white" : "yellow",
                color: size === item?.value ? "black" : "grey",
                height: "35px",
                width: "35px",
                borderRadius: "25px",
                display: "grid",
                placeItems: "center",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => setSize(item?.value)}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Threed;
