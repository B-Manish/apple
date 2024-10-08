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

const photos = [one, two, three, four, five, six, seven];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photoRefs = useRef([]);

  useEffect(() => {
    // Fade in the first image on mount
    gsap.from(photoRefs.current[currentIndex], { opacity: 0, duration: 1 });
  }, []);

  const goToNext = () => {
    const newIndex = currentIndex + 1;
    animateSlide(newIndex);
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const newIndex = currentIndex - 1;
    animateSlide(newIndex);
    setCurrentIndex(newIndex);
  };

  const animateSlide = (newIndex) => {
    const timeline = gsap.timeline();

    // Slide all images to the left
    photoRefs.current.forEach((photo, index) => {
      const offset = index - newIndex;
      const isCurrent = index === newIndex;

      timeline.to(
        photo,
        {
          x: offset * 600, // Each photo 600px apart
          opacity: isCurrent ? 1 : 0.5,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "600px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // overflow: "hidden",
            marginTop: "calc(50% - 0px)",
          }}
        >
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Slide ${index + 1}`}
              ref={(el) => (photoRefs.current[index] = el)}
              style={{
                // transform: `translate(${(index - currentIndex) * 300}px, -50%)`,
                width: "600px",
                opacity: currentIndex === index ? 1 : 0.5,
                transition: "opacity 0.5s ease",
                margin: "0 20px",
              }}
            />
          ))}
        </Box>

        <Button
          disabled={currentIndex === 0 ? true : false}
          onClick={goToPrev}
          sx={{
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
          disabled={currentIndex === 6 ? true : false}
          onClick={goToNext}
          sx={{
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
    </Box>
  );
};

export default Carousel;
