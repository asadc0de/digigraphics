import logo from "../assets/web_develop.mp4";
import creativeCoding from "../assets/creative_coding.mp4";
import interface_design from "../assets/interface_design.mp4";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const numberRef = useRef();
  const textRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const cardData = [
    { number: "30 +", text: "Clients Worldwide" },
    { number: "20 +", text: "Projects Completed" },
    { number: "3 +", text: "Years of Experience" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Create a timeline for orchestrated chaos (the good kind)
      const tl = gsap.timeline();

      // Phase 1: The Great Fade & Slide Out
      tl.to([numberRef.current, textRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.1, // Number goes first, text follows like a loyal sidekick
      })

        // Phase 2: Card does a little shimmy
        .to(
          cardRef.current,
          {
            scale: 0.95,
            rotationY: 5,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "-=0.2"
        ) // Start slightly before previous animation ends

        // Phase 3: Content update (the magic happens here)
        .call(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        })

        // Phase 4: Card resets and welcomes new content
        .to(cardRef.current, {
          scale: 1,
          rotationY: 0,
          duration: 0.3,
          ease: "back.out(1.2)", // Little bounce for personality
        })

        // Phase 5: The Grand Entrance
        .fromTo(
          [numberRef.current, textRef.current],
          {
            opacity: 0,
            y: 20, // Come from below like rising stars
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.4)",
            stagger: 0.15, // Text makes a slightly delayed entrance
          },
          "-=0.1"
        );
    }, 3500); // Slightly longer to let people actually read it!

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div
      id="about"
      className="scroll-mt-26 w-full lg:px-28 md:px-22 px-4 pb-14 overflow-x-hidden"
    >
      {/* Upper Text */}
      <div
        className="lg:text-5xl md:text-3xl text-[2rem] md:w-[75%] w-full lg:leading-14 px-2 bg-gradient-to-r from-[#343434] via-white to-[#fff] 
  bg-clip-text text-transparent"
      >
        <p>
          We create websites{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-8 md:h-8 w-8 h-5 inline-block rounded-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={logo}
              autoPlay
              muted
              loop
            ></video>
          </span>
          , solutions{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-8 md:h-8 w-8 h-5 rounded-full overflow-hidden inline-flex justify-center items-center">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={creativeCoding}
            ></video>
          </span>
          , and brands that turn ideas into impactful digital experiences{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-8 md:h-8 w-8 h-5 inline-block rounded-full overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src={interface_design}
            ></video>
          </span>{" "}
          that engage audiences and leave a lasting impact.
        </p>
      </div>
      {/* Lower Cards */}
      <div className="border-t border-[#ffffff14] mt-8 pt-8">
        <div className="flex justify-end relative">
          <div
            ref={cardRef}
            className="lg:w-[22%] md:w-[40%] w-[100%] border border-[#ffffff14] rounded-3xl p-4 overflow-hidden bg-[#090909]"
          >
            <h3
              ref={numberRef}
              className="md:text-xl text-base font-extrabold font-[matter-light]"
            >
              {cardData[currentIndex].number}
            </h3>
            <p
              ref={textRef}
              className="mt-14 lg:text-4xl md:text-2xl text-[2rem] text-right bg-gradient-to-r from-[#343434] via-white to-[#343434] bg-clip-text text-transparent"
            >
              {cardData[currentIndex].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
