"use client";

import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update)

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll");
    };
  }, []);

  return null;
};

export default SmoothScroll;
