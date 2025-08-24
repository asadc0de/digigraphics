import logo from "../assets/web_develop.mp4";
import graphics from "../assets/img (5).gif";
import brandStories from "../assets/people.gif";
import { useState } from "react";
import { useRef } from "react";

const About = () => {
  const numberRef = useRef();
  const textRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    { number: "50 +", text: "Clients Worldwide" },
    { number: "100 +", text: "Projects Completed" },
    { number: "3 +", text: "Years of Experience" },
  ];

  // useEffect(() => {
  //   let timeoutId;

  //   const animateToNext = () => {
  //     const nextIndex = (currentIndex + 1) % cardData.length;

  //     // Smooth fade transition with shorter duration
  //     const tl = gsap.timeline({
  //       onComplete: () => {
  //         // Continue the loop - removed the condition that was stopping it
  //         timeoutId = setTimeout(animateToNext, 1500); // Shorter delay between changes
  //       }
  //     });

  //     // Faster fade out
  //     tl.to([numberRef.current, textRef.current], {
  //       opacity: 0,
  //       duration: 0.6, // Faster fade
  //       ease: "power1.inOut"
  //     })
  //     // Update content
  //     .call(() => setCurrentIndex(nextIndex))
  //     // Faster fade in
  //     .to([numberRef.current, textRef.current], {
  //       opacity: 1,
  //       duration: 0.6, // Faster fade
  //       ease: "power1.inOut"
  //     });
  //   };

  //   // Start after shorter initial delay
  //   timeoutId = setTimeout(animateToNext, 1500);

  //   return () => {
  //     if (timeoutId) clearTimeout(timeoutId);
  //   };
  // }, [currentIndex]);

  return (
    <div className="w-full lg:px-28 md:px-22 px-4 py-20 overflow-x-hidden">
      {/* Upper Text */}
      <div className="lg:text-5xl md:text-3xl text-[2rem] md:w-[75%] w-full lg:leading-14 px-2">
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
          <div className="lg:w-[22%] md:w-[40%] w-[100%] border border-[#ffffff14] rounded-3xl p-4 overflow-hidden">
            <h3 ref={numberRef} className="md:text-xl text-base font-bold">
              {cardData[currentIndex].number}
            </h3>
            <p ref={textRef} className="mt-14 lg:text-4xl md:text-2xl text-xl text-right">
              {cardData[currentIndex].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
