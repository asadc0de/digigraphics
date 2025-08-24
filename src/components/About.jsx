import logo from "../assets/web_develop.mp4";
import graphics from "../assets/img (5).gif";
import brandStories from "../assets/people.gif";
import { useState, useEffect } from "react";
import { useRef } from "react";

const About = () => {
  const numberRef = useRef();
  const textRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardData = [
    { number: "50 +", text: "Clients Worldwide" },
    { number: "100 +", text: "Projects Completed" },
    { number: "3 +", text: "Years of Experience" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setIsAnimating(false);
      }, 3000); // Increased from 300ms to 600ms for smoother transition
    }, 3000); // Increased from 1000ms to 3000ms (3 seconds) for slower cycling

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div className="w-full lg:px-28 md:px-22 px-4 py-20 overflow-x-hidden">
      {/* Upper Text */}
      <div className="lg:text-5xl md:text-3xl text-[2rem] md:w-[75%] w-full lg:leading-14 px-2 bg-gradient-to-r from-[#343434] via-white to-[#fff] 
  bg-clip-text text-transparent">
        <p>
          I'm AsadAl, a designer who loves turning imagination into visuals. I
          create logos{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-10 md:h-8 w-8 h-5 inline-block rounded-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src={logo}
              autoPlay
              muted
              loop
            ></video>
          </span>
          , graphics{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-10 md:h-8 w-8 h-5 rounded-full overflow-hidden inline-flex justify-center items-center">
            <img className="w-10 object-cover" src={graphics} alt="" />
          </span>
          , and brand stories{" "}
          <span className="border border-[#ffffff14] lg:w-16 md:w-12 lg:h-10 md:h-8 w-8 h-5 inline-block rounded-full overflow-hidden relative">
            <img
              className="w-full object-cover absolute top-[2px]"
              src={brandStories}
              alt=""
            />
          </span>{" "}
          that carry emotion and leave impact. Every project I take is not just
          design — it's a way to tell a story beautifully.
        </p>
      </div>
      {/* Lower Cards */}
      <div className="border-t border-[#ffffff14] mt-8 pt-8">
        <div className="flex justify-end relative">
          {/* Card */}
          <div className="lg:w-[22%] md:w-[40%] w-[100%] border border-[#ffffff14] rounded-3xl p-4 overflow-hidden bg-[#090909]">
            <h3
              ref={numberRef}
              className={`md:text-xl text-base font-bold font-[boldF] transition-opacity duration-600 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {cardData[currentIndex].number}
            </h3>
            <p
              ref={textRef}
              className={`mt-14 lg:text-4xl md:text-2xl text-[2rem] text-right transition-opacity duration-600 bg-gradient-to-r from-[#343434] via-white to-[#343434] 
  bg-clip-text text-transparent ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
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
