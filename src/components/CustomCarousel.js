import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Box, Button } from "@mui/material";
import one from "../static/carousel/1.jpg";
import two from "../static/carousel/2.jpg";
import three from "../static/carousel/3.jpg";
import four from "../static/carousel/4.jpg";
import five from "../static/carousel/5.jpg";
import six from "../static/carousel/6.jpg";
import seven from "../static/carousel/7.jpg";

// const photos = [
//   "https://via.placeholder.com/600x400?text=Photo+1",
//   "https://via.placeholder.com/600x400?text=Photo+2",
//   "https://via.placeholder.com/600x400?text=Photo+3",
// ];

const photos = [one, two, three, four, five, six, seven];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photoRefs = useRef([]);

  useEffect(() => {
    // Fade in the first image on mount
    gsap.from(photoRefs.current[0], { opacity: 0, duration: 1 });
  }, []);

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    animateSlide(newIndex, 1);
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    animateSlide(newIndex, -1);
    setCurrentIndex(newIndex);
  };

  const animateSlide = (newIndex, direction) => {
    const currentPhoto = photoRefs.current[currentIndex];
    const nextPhoto = photoRefs.current[newIndex];

    const timeline = gsap.timeline();

    // Animate out current photo
    timeline
      .to(currentPhoto, {
        x: -600 * direction, // slide left/right
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .set(currentPhoto, { x: 600 * direction, opacity: 0 });

    // Animate in new photo
    timeline.fromTo(
      nextPhoto,
      { x: 600 * direction, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "600px",
        height: "400px",
        overflow: "hidden",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index + 1}`}
            ref={(el) => (photoRefs.current[index] = el)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}
      </Box>

      <Button
        onClick={goToPrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        Previous
      </Button>

      <Button
        onClick={goToNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Carousel;
