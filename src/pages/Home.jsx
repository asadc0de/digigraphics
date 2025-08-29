import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Footer />
    </>
  );
};

export default Home;
