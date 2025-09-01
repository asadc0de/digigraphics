import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Footer from "../components/Footer";


const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
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
