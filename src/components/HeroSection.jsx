import React from "react";
import Header from "./Header";
import DarkVeil from "./DarkVeil";
import { CardDemo } from "./CardDemo";
import { GoGlobe } from "react-icons/go";
import Cta from "./Cta";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <DarkVeil />
      </div>

      {/* Header */}
      <div className="flex justify-center mt-14 w-full">
        <Header />
      </div>

      {/* Hero Content */}
      <div
        id="headline"
        className="flex flex-col items-center justify-center flex-1 text-center px-4 w-full mt-8"
      >
        {/* Trust Headline */}
        <div className="font-[matter-light] mb-11 w-full max-w-full flex justify-center">
          <button
            className="border border-[#ffffff14] text-white rounded-3xl cursor-pointer flex items-center gap-2 hover:gap-5 transition-all duration-300 backdrop-blur-3xl md:text-base text-[11px] max-w-full overflow-hidden"
            style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            Trusted by 50+ Clients Across the Globe
            <span className="transition-transform flex-shrink-0">
              <GoGlobe />
            </span>
          </button>
        </div>
        {/* Headline */}
        <h1
          className="md:w-[70%] w-[95%] lg:text-6xl md:text-4xl text-3xl font-[boldF] max-w-full 
  bg-gradient-to-r from-[#333] via-white to-[#333] 
  bg-clip-text text-transparent"
        >
          Innovation Framed in Every Pixel
        </h1>

        {/* Slogan */}
        <p
          id="slogan"
          className="md:mt-4 mt-6 lg:text-xl md:text-lg text-sm md:w-[70%] w-[95%] max-w-full text-[#CDD1D8]"
        >
          Great Ideas, Greater Designs — Growing Your Business Visually
        </p>

        {/* Animated Icons */}
        <div className="md:mt-6 w-full max-w-full overflow-hidden">
          <CardDemo />
        </div>

        {/* CTA */}
        <Cta text={"Start Your Design Journey"} />
      </div>
    </div>
  );
};

export default HeroSection;
