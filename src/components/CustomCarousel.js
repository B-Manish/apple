import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Carousel.css"; // Create a CSS file for basic styles
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
        display: "flex",
        width: "90vw",
        height: "100vh",
        overflow: "hidden",
        // margin: "0 auto",
        border: "1px solid red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "600px",
          height: "400px",
          border: "1px solid yellow",
          display: "flex",
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index + 1}`}
            ref={(el) => (photoRefs.current[index] = el)}
            // className={`carousel-photo ${
            //   index === currentIndex ? "active" : ""
            // }`}
          />
        ))}
      </Box>
      <Button onClick={goToPrev}>Previous</Button>
      <Button onClick={goToNext}>Next</Button>
    </Box>
  );
};

export default Carousel;
