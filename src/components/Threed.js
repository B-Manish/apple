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
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectedModel, setSelectedModel] = useState(0);
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
    // animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
    //   transform: "translateX(0)",
    //   duration: 2,
    // });
    if (!isFirstRender) {
      if (size === "large") {
        tl.to(
          "#view1",
          {
            transform: "translateX(-100%)",
            duration: 2,
            ease: "power2.inOut",
          },
          ">"
        );
        tl.to(
          "#view2",
          {
            transform: "translateX(-100%)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );
      }
      if (size === "small") {
        tl.to(
          "#view2",
          {
            transform: "translateX(0px)",
            duration: 2,
            ease: "power2.inOut",
          },
          ">"
        );
        tl.to(
          "#view1",
          {
            transform: "translateX(0px)",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        );
      }
    } else {
      setIsFirstRender(false);
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "black",
        overflowX: "hidden",
        height: "100vh",
      }}
    >
      <Box
        id="heading"
        sx={{ opacity: "0", color: "#86868b", fontSize: "56px" }}
        className="roboto"
      >
        Take a closer look.
      </Box>
      <Box
        id="heading"
        sx={{
          opacity: "0",
          display: "flex",
          width: "65vw",
        }}
      >
        <Box>
          <ModelView
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
            width="65vw"
          />
        </Box>
        <Box>
          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
            width="65vw"
          />
        </Box>

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
      <Box sx={{ color: " white", margin: "0 0 25px 0" }}> {model.title}</Box>
      <Box
        sx={{
          display: "flex",
          width: "400px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "0 10px",
            background: "#2E2E30",
            borderRadius: "100px",
            height: "60px",
            alignItems: "center",
          }}
        >
          {models.map((item, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: "37px",
                width: "37px",
                height: "37px",
                marginRight: i !== models?.length - 1 && "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: selectedModel === i + 1 && "blue",
              }}
            >
              <Box
                sx={{
                  borderRadius: "32px",
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: selectedModel === i + 1 && "white",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: item.color[0],
                    borderRadius: "25px",
                    width: "25px",
                    height: "25px",
                  }}
                  onClick={() => {
                    setModel(item);
                    setSelectedModel(i + 1);
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2E2E30",
            borderRadius: "100px",
            padding: "0 10px",
          }}
        >
          {sizes.map((item, index) => (
            <Box
              key={item?.label}
              sx={{
                backgroundColor: size === item?.value ? "white" : "grey",
                color: size === item?.value ? "black" : "black",
                height: "25px",
                width: "25px",
                borderRadius: "35px",
                padding: "5px",
                marginRight: index !== sizes?.length - 1 && "10px",
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
