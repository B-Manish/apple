import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function Camera() {
  const boxRef = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);
  const box5Ref = useRef(null);
  const box6Ref = useRef(null);

  useEffect(() => {
    // Basic scroll animation
    gsap.to(boxRef.current, {
      x: 500,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "top 100px",
        scrub: true,
        markers: true,
      },
    });

    // Another animation with different scroll points
    gsap.to(box2Ref.current, {
      y: 300,
      scrollTrigger: {
        trigger: box2Ref.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
        markers: true,
      },
    });

    // Pin an element during scroll
    gsap.to(box3Ref.current, {
      scrollTrigger: {
        trigger: box3Ref.current,
        start: "top top",
        end: "+=500",
        pin: true,
        markers: true,
      },
    });

    // Add callbacks on scroll
    ScrollTrigger.create({
      trigger: box4Ref.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => console.log("Entered!"),
      onLeave: () => console.log("Left!"),
      onEnterBack: () => console.log("Entered again!"),
      onLeaveBack: () => console.log("Left again!"),
      markers: true,
    });

    // Complex animation using a timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box5Ref.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    tl.to(box5Ref.current, { x: 200 })
      .to(box5Ref.current, { y: 100 })
      .to(box5Ref.current, { rotation: 360 });

    // Responsive ScrollTrigger settings
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        gsap.to(box6Ref.current, {
          x: 500,
          scrollTrigger: {
            trigger: box6Ref.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1,
            markers: true,
          },
        });
      },
      "(max-width: 799px)": function () {
        gsap.to(box6Ref.current, {
          x: 200,
          scrollTrigger: {
            trigger: box6Ref.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        });
      },
    });
  }, []);

  return (
    <div className="App">
      <div className="spacer"></div>
      <div className="box" ref={boxRef}>
        Box 1
      </div>
      <div className="box box2" ref={box2Ref}>
        Box 2
      </div>
      <div className="box box3" ref={box3Ref}>
        Box 3
      </div>
      <div className="box box4" ref={box4Ref}>
        Box 4
      </div>
      <div className="box box5" ref={box5Ref}>
        Box 5
      </div>
      <div className="box box6" ref={box6Ref}>
        Box 6
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Camera;
