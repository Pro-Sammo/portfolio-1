import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "auto";
    };
  });

  return (
    <div
      className="hidden md:flex"
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#8e8e87",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
