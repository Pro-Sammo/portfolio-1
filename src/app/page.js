"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import CustomCursor from "@/components/CustomCursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import BackgroundImage from "../../public/background.jpg";
import Promptopia from "../../public/promptopia.png";
import Sammo from "../../public/sammo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  const panel = useRef();
  const body = useRef();
  const navbar = useRef();
  const textRef = useRef();
  const about = useRef();
  const panel3 = useRef();

  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation, setCurrentLocation] = useState("Dhaka, Bangladesh");

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const updateTime = () => {
    setCurrentTime(getCurrentTime());
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin();
  useGSAP(() => {
    gsap.to(body.current, {
      scrollTrigger: {
        trigger: panel.current,
        start: "top 25%",
        end: "bottom 20%",
        onEnter: () => {
          body.current.classList.add("dark");
        },
        onLeave: () => {
          body.current.classList.remove("dark");
        },
        onEnterBack: () => body.current.classList.add("dark"),
        onLeaveBack: () => body.current.classList.remove("dark"),
      },
    });

    // gsap.to("#page5", {
    //   scrollTrigger: {
    //     trigger: "#page5",
    //     start: "top 20%",
    //     end: "bottom 20%",
    //     markers:true,
    //     onEnter: () => {
    //       body.current.classList.add("dark");
    //     },
    //     onLeave: () => {
    //       body.current.classList.remove("dark");
    //     },
    //     onEnterBack: () => body.current.classList.add("dark"),
    //     onLeaveBack: () => body.current.classList.remove("dark"),
    //   },
    // });

    const tl = gsap.timeline();

    tl.from(".navbar", {
      y: "-100%",
      duration: 1,
      opacity: 0,
    });

    tl.from(".herotext", {
      y: "100px",
      duration: 0.8,
      opacity: 0.5,
    });

    gsap.from(".about", {
      scrollTrigger: {
        trigger: panel3.current,
        start: "top 20%",
        end: "bottom 60%",
        ease: "power1.in",
        scrub: 0.5,
      },
      opacity: 0.3,
    });

    var clutter = "";
    document
      .querySelector("#text")
      .textContent.split(" ")
      .forEach(function (dets) {
        clutter += `<span>${dets} </span>`;
        document.querySelector("#text").innerHTML = clutter;
      });

    gsap.from("#text>span", {
      scrollTrigger: {
        trigger: panel.current,
        start: "top 25%",
        end: "bottom 60%",
        scrub: 0.5,
        pin: true,
      },
      stagger: 0.2,
      opacity: 0,
    });
    gsap.from("#bar1", {
      scrollTrigger: {
        trigger: "#bar1",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 0.5,
      },
      ease: "power2.in",
      width: 0,
      opacity: 0,
    });
    gsap.from("#bar2", {
      scrollTrigger: {
        trigger: "#bar2",
        start: "top 85%",
        end: "bottom 75%",
        scrub: 0.5,
      },
      ease: "power2.in",
      width: 0,
      opacity: 0,
    });
  });
  return (
    <>
      <CustomCursor />
      <div
        ref={body}
        id="body"
        className="bg-[#FAFAF9] transition-all duration-1000 ease"
      >
        <div
          id="page1"
          className="min-h-screen transition-all duration-1000 ease"
        >
          <div
            ref={navbar}
            className="h-16 w-full bg-[#FAFAF9] z-50  fixed   navbar"
          >
            <div className="flex justify-between px-8 items-center dark:text-[#FAFAF9]  dark:bg-[#0E0E0C] h-full transition-all duration-1000 ease">
              <h1
                style={{ fontFamily: "Cabinet, sans-serif" }}
                className="text-3xl font-extrabold flex items-center"
              >
                sammo{" "}
                <span>
                  <svg
                    className="mb-5 ml-[-3px]"
                    width="12"
                    height="12"
                    viewBox="0 0 190 190"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M160.963 129.037C155.496 134.504 146.631 134.504 141.164 129.037L117.027 104.899C111.559 99.4319 111.559 90.5677 117.027 85.1004L141.164 60.963C146.631 55.4956 155.496 55.4956 160.963 60.963L185.101 85.1003C190.568 90.5677 190.568 99.4319 185.101 104.899L160.963 129.037ZM48.836 129.037C43.3687 134.504 34.5043 134.504 29.037 129.037L4.89958 104.899C-0.567758 99.4319 -0.567768 90.5677 4.89957 85.1004L29.037 60.963C34.5043 55.4956 43.3687 55.4956 48.836 60.963L72.9734 85.1003C78.4407 90.5677 78.4407 99.4319 72.9734 104.899L48.836 129.037ZM104.9 185.1C99.4321 190.568 90.568 190.568 85.1006 185.1L60.9632 160.963C55.4959 155.496 55.4959 146.631 60.9632 141.164L85.1006 117.027C90.568 111.559 99.4321 111.559 104.9 117.027L129.037 141.164C134.504 146.631 134.504 155.496 129.037 160.963L104.9 185.1ZM104.9 72.9731C99.4321 78.4404 90.568 78.4405 85.1006 72.9731L60.9632 48.8357C55.4959 43.3684 55.4959 34.5041 60.9632 29.0367L85.1006 4.89934C90.568 -0.568002 99.4321 -0.568012 104.9 4.89933L129.037 29.0367C134.504 34.5041 134.504 43.3684 129.037 48.8357L104.9 72.9731Z"
                      fill="#B2B2A2"
                    />
                  </svg>
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div
                  style={{ fontFamily: "Cabinet, sans-serif" }}
                  className="md:flex items-center gap-8 hidden text-lg"
                >
                  <p className="underline-left-to-right">about</p>
                  <p className="underline-left-to-right">service</p>
                  <p className="underline-left-to-right">project</p>
                </div>
                <div
                  style={{ fontFamily: "Cabinet, sans-serif" }}
                  className="px-8 py-2 relative group bg-black text-[#FAFAF9] dark:text-black dark:bg-[#FAFAF9]  rounded-3xl text-lg transition-all duration-1000 ease"
                >
                  Let's Talk
                  <span className="absolute top-[1.3rem] ml-5 left-0 h-[0.12em] w-0 rounded-full bg-[#8C8C73] duration-300 ease-linear group-hover:w-24"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-screen flex justify-center items-center flex-col gap-6">
            <div className="text-center h-12 md:h-24 w-full overflow-hidden">
              <h1
                style={{ fontFamily: "Cabinet-Extrabold, sans-serif " }}
                className="text-5xl text-[#262626] herotext md:text-8xl"
              >
                HEY, I'M SAMMO
              </h1>
            </div>
            <div className="text-center h-12 md:h-24 w-full overflow-hidden">
              <h1
                style={{ fontFamily: "Cabinet-Extrabold, sans-serif" }}
                className="text-5xl herotext md:text-8xl"
                id="stroke_text"
              >
                HEY, I'M SAMMO
              </h1>
            </div>
            <div className="text-center h-12 w-full md:h-24 overflow-hidden">
              <h1
                style={{ fontFamily: "Cabinet-Extrabold, sans-serif" }}
                className="text-5xl text-[#262626] md:text-8xl  herotext"
              >
                HEY, I'M SAMMO
              </h1>
            </div>
          </div>
        </div>
        <div id="page2" ref={panel} className="max-h-[600px] md:max-h-screen">
          <div className="min-h-screen">
            <h1
              id="text"
              ref={textRef}
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className="text-[#D1D1C7] font-semibold text-4xl lg:text-8xl md:text-6xl tracking-tight pl-3 md:pl-6"
            >
              I create elevating digital experiences that inspire and connect
              with people through development and design.
            </h1>
          </div>
        </div>
        <div ref={panel3} id="page3" className="min-h-screen w-full mb-[5vw]">
          <div className="about">
            <div
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className="text-center font-medium text-5xl mb-6 lg:text-8xl xl:text-9xl  md:mb-20 text-[#8C8C73] flex justify-center items-center gap-4"
            >
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>ABOUT ME</p>
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="md:flex md:justify-center md:px-4 lg:px-12 lg:ml-[4vw] py-8 md:py-4">
              <div className="px-6 md:px-2 md:w-1/2 md:flex ">
                <Image
                  src={Sammo}
                  className="rounded-lg  object-contain md:w-[90%]"
                />
              </div>
              <div ref={about} className=" px-6 md:w-1/2 md:ml-[-30px]">
                <h1
                  style={{
                    fontFamily: "GeneralSans, sans-serif",
                  }}
                  className="pt-8 md:pt-1  text-3xl font-medium tracking-tight lg:text-7xl"
                >
                  A brief intro, who am I?
                </h1>
                <p
                  style={{ fontFamily: "Cabinet, sans-serif" }}
                  className="py-4 lg:text-5xl  md:text-2xl lg:tracking-tight text-lg lg:font-light"
                >
                  I am an independent frontend developer, UI/UX designer and
                  creator based in Dhaka, Bangladesh.
                </p>
                <p
                  style={{ fontFamily: "Cabinet, sans-serif" }}
                  className="lg:text-5xl md:text-2xl lg:tracking-tight text-lg lg:font-light"
                >
                  I specialize in crafting elevated, intuitive, and minimalistic
                  designs for startups and small businesses to help them stand
                  out in the digital landscape with a powerful impact. 😎
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="page4" className="min-h-screen">
          <div
            style={{
              fontFamily: "GeneralSans, sans-serif",
            }}
            className="text-center font-medium text-5xl mb-6 mt-4 text-[#8C8C73] py-7 lg:text-8xl xl:text-9xl lg:mb-20 flex justify-center items-center gap-4"
          >
            <span className="hidden lg:flex">
              <svg
                width="70"
                height="70"
                viewBox="0 0 197 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_605_2014)">
                  <path
                    d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                    fill="#8C8C73"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_605_2014">
                    <rect
                      width="111"
                      height="197"
                      fill="white"
                      transform="matrix(0 -1 1 0 0.000244141 110.999)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p>SERVICES</p>
            <span className="hidden lg:flex">
              <svg
                width="70"
                height="70"
                viewBox="0 0 197 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_605_2014)">
                  <path
                    d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                    fill="#8C8C73"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_605_2014">
                    <rect
                      width="111"
                      height="197"
                      fill="white"
                      transform="matrix(0 -1 1 0 0.000244141 110.999)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="px-6 md:px-8 lg:flex lg:px-20">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-medium tracking-tight lg:pb-16 pb-5 lg:text-[4vw] ">
                my expertises.
              </h1>
              <p
                style={{ fontFamily: "Cabinet, sans-serif" }}
                className="md:text-2xl md:tracking-tight text-lg lg:text-[2vw] font-light lg:w-3/4 lg:tracking-tight"
              >
                I focus on all things design and web related. With each of my
                services, my goal is to deliver an impactful and elevating
                digital experience for everyone.
              </p>
            </div>
            <div
              id="bar1"
              className="h-1 w-full px-6 bg-[#AEAE9D] my-3 lg:hidden"
            ></div>
            <div
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className=" text-[#AEAE9D] font-bold text-3xl lg:ml-6 lg:text-[3.8vw] flex flex-col gap-[2vw]"
            >
              <div>Fontend Development</div>
              <div>Backend Development</div>
              <div>Web Design</div>
              <div>Wireframing</div>
              <div>Branding</div>
            </div>
          </div>
          <div className="px-6 md:px-8 lg:px-20 my-6 lg:flex lg:mt-[5vw]">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-medium tracking-tight pb-5 lg:pb-16 lg:text-[4vw] ">
                my digital tool box.
              </h1>
              <p
                style={{ fontFamily: "Cabinet, sans-serif" }}
                className="md:text-2xl md:tracking-tight text-lg lg:text-[2vw] font-light lg:w-3/4 lg:tracking-tight leading-4"
              >
                These are my go to tech stack to make any projects happen. I am
                always eager of learning more about my current stack, and new
                technologies that could expand my horizons.
              </p>
            </div>
            <div
              id="bar2"
              className="h-1 w-full px-6 bg-[#AEAE9D] my-3 lg:hidden"
            ></div>
            <div
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className=" text-[#AEAE9D] font-bold text-3xl lg:ml-6 lg:text-[4vw] flex flex-col gap-[2vw] "
            >
              <div>Javascript</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>ReactJS</div>
              <div>NextJS</div>
              <div>TailwindCSS</div>
              <div>GSAP</div>
            </div>
          </div>
        </div>
        {/* <div id="page5" className="min-h-screen w-full mt-24">
          <div className="project">
            <div
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className="text-center font-medium text-5xl mb-6 lg:text-8xl xl:text-9xl  md:mb-20 text-[#8C8C73] flex justify-center items-center gap-4"
            >
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>PROJECTS</p>
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="h-full w-full">
            <div className="w-full h-fit p-3 lg:p-20">
              <a href="https://promtopia-puce.vercel.app" target="_blank">
                <Image src={Promptopia} className="w-full rounded-lg" />
              </a>
              <div className="border-[#848C73] border-[1px] w-fit px-4 py-1 rounded-full text-[#848C73] mt-4">
                NextJS, Tailwind
              </div>
            </div>
            <div className="w-full h-12 bg-orange-300"></div>
          </div>
        </div> */}
        <div id="page6" className="min-h-screen mt-24 w-full md:px-14">
          <div className="contact">
            <div
              style={{
                fontFamily: "GeneralSans, sans-serif",
              }}
              className="text-center font-medium text-5xl mb-6 lg:text-8xl xl:text-9xl  md:mb-20 text-[#8C8C73] flex justify-center items-center gap-4"
            >
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p>CONTACT US</p>
              <span className="hidden lg:flex">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 197 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_605_2014)">
                    <path
                      d="M7.00025 9.35907C2.58197 9.35907 -1.03354 12.9535 -0.68106 17.3577C3.37408 68.0259 45.6279 107.72 97.3609 107.72C149.094 107.72 191.348 68.0259 195.403 17.3577C195.755 12.9535 192.14 9.35907 187.722 9.35907L7.00025 9.35907Z"
                      fill="#8C8C73"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_605_2014">
                      <rect
                        width="111"
                        height="197"
                        fill="white"
                        transform="matrix(0 -1 1 0 0.000244141 110.999)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="px-6 lg:px-20 md:px-10 md:flex  md:flex-row w-full">
              <div id="form_section" className="md:w-1/2">
                <div id="contact_area">
                  <div>
                    <h1
                      style={{ fontFamily: "GeneralSans" }}
                      className="font-bold text-4xl md:text-5xl lg:text-7xl"
                    >
                      Have an awesome idea? Let's bring it to life.
                    </h1>
                    <p
                      style={{ fontFamily: "Cabinet" }}
                      className="text-xl md:text-2xl lg:text-4xl mt-5 text-[#afaf90]"
                    >
                      I am currently not available for freelance work. I am
                      accepting new projects starting from February 2022.
                    </p>
                  </div>
                </div>
                <div className="mt-12 ">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="relative z-0 md:w-full">
                      <label
                        style={{ fontFamily: "Cabinet, sans-serif" }}
                        className="absolute top-3 left-0 transition-transform transform text-xl text-[#D1D1C7] duration-300 origin-0"
                      >
                        Your name
                      </label>
                      <input
                        required
                        className="text-[#8C8C73] peer w-full appearance-none border-0 border-b border-[#818080] accent-slate-300 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 cursor-none"
                        type="text"
                        onFocus={(e) =>
                          e.target.previousSibling.classList.add(
                            "-translate-y-6",
                            "-translate-x-3",
                            "scale-75"
                          )
                        }
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.previousSibling.classList.remove(
                              "-translate-y-6",
                              "-translate-x-3",
                              "scale-75"
                            );
                          }
                        }}
                      />
                    </div>
                    <div className="relative z-0 md:w-full">
                      <label
                        style={{ fontFamily: "Cabinet, sans-serif" }}
                        className="absolute top-3 left-0 transition-transform transform text-xl text-[#D1D1C7] duration-300 origin-0"
                      >
                        Your email
                      </label>
                      <input
                        required
                        className="text-[#8C8C73] peer w-full appearance-none border-0 border-b border-[#818080] accent-slate-300 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 cursor-none"
                        type="email"
                        onFocus={(e) =>
                          e.target.previousSibling.classList.add(
                            "-translate-y-6",
                            "-translate-x-3",
                            "scale-75"
                          )
                        }
                        onBlur={(e) => {
                          if (!e.target.value) {
                            e.target.previousSibling.classList.remove(
                              "-translate-y-6",
                              "-translate-x-3",
                              "scale-75"
                            );
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative z-0 mt-14 ">
                    <label
                      style={{ fontFamily: "Cabinet, sans-serif" }}
                      className="absolute top-3 left-0 transition-transform transform text-xl text-[#D1D1C7] duration-300 origin-0"
                    >
                      Your message
                    </label>
                    <textarea
                      rows={4}
                      className="text-[#8C8C73] peer w-full appearance-none border-0 border-b border-[#818080] accent-slate-300 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 cursor-none"
                      type="text"
                      onFocus={(e) =>
                        e.target.previousSibling.classList.add(
                          "-translate-y-6",
                          "-translate-x-3",
                          "scale-75"
                        )
                      }
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.previousSibling.classList.remove(
                            "-translate-y-6",
                            "-translate-x-3",
                            "scale-75"
                          );
                        }
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{ fontFamily: "Cabinet, sans-serif" }}
                  className="mt-10 px-7 py-3 relative group w-fit bg-black text-[#FAFAF9] dark:text-black dark:bg-[#FAFAF9]  rounded-3xl text-lg transition-all duration-1000 ease"
                >
                  Send Message
                  <span className="absolute top-[1.6rem] ml-5 left-0 h-[0.12em] w-0 rounded-full bg-[#8C8C73] duration-300 ease-linear group-hover:w-32"></span>
                </div>
              </div>
              <div
                style={{ fontFamily: "GeneralSans" }}
                id="contact_details"
                className="my-8 md:w-1/2 md:pl-20 flex flex-col md:items-center"
              >
                <div className="space-y-3 ">
                  <h4 className="font-semibold text-lg md:text-3xl lg:text-4xl">
                    Contact Details
                  </h4>
                  <div>
                    <a
                      href="mailto:ss.sammo2002@gmail.com"
                      className="md:text-lg lg:text-xl"
                    >
                      <p>ss.sammo2002@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className="space-y-2 md:ml-9 mt-5 md:mt-7 lg:mt-10 ">
                  <h4 className="font-semibold text-lg md:text-2xl lg:text-4xl md:pb-5">
                    My Digital Spaces
                  </h4>
                  <div className="space-y-3 md:space-y-4 md:ml-1">
                    <a href="" className="flex gap-2 items-center">
                      <FaGithubSquare color="8C8C73" size={20} />
                      <p className="underline-left-to-right">Github</p>
                    </a>
                    <a href="" className="flex gap-2 items-center">
                      <FaLinkedin color="8C8C73" size={20} />{" "}
                      <p className="underline-left-to-right">LinkedIn</p>
                    </a>
                    <a href="" className="flex gap-2 items-center">
                      <FaInstagramSquare color="8C8C73" size={20} />
                      <p className="underline-left-to-right">Instagram</p>
                    </a>
                  </div>
                </div>
                <div className="space-y-2 mt-5 md:mt-7 lg:mt-10 ">
                  <div className="font-semibold text-lg md:text-2xl lg:text-4xl md:pb-5">
                    Location
                  </div>
                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="lg:text-3xl md:text-2xl text-base"
                  >
                    {currentLocation}
                  </p>
                  <p
                    style={{ fontFamily: "GeneralSans" }}
                    className="lg:text-3xl md:text-2xl text-base"
                  >
                    {currentTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
