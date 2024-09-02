import React, { useState, useRef, Suspense } from "react";
import { Box } from "@mui/material";
import "../App.css";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
  width = "450px",
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      style={{
        height: "calc(80vh - 150px)",
        width: width,
      }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={0.4}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1}?"small":"large"`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <Box>loading...</Box>
            </Html>
          }
        >
          <Iphone
            scale={index === 1 ? [12, 12, 12] : [13.6, 13.6, 13, 6]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
