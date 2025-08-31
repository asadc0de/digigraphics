import React from "react";
import project1 from "../assets/pr1.png";
import project2 from "../assets/pr2.png";
import project3 from "../assets/pr3.png";
import Cta from "./Cta";

const Work = () => {
  return (
    <div
      id="work"
      className="scroll-mt-16 w-full lg:px-28 md:px-22 px-4 py-14 relative overflow-hidden bg-[#000000]"
    >
      {/* Text */}
      <h2
        class="lg:text-5xl md:text-3xl text-[1.7rem] font-bold text-center font-[neue] bg-gradient-to-r from-[#343434] via-white to-[#343434] 
  bg-clip-text text-transparent leading-14"
      >
        Some Fancy Selected Work
      </h2>
      <p class="mt-4 text-[#CDD1D8] md:text-xl text-base text-center max-w-2xl mx-auto px-2 font-[matter-light]">
        From brands to digital experiences, every project is a story brought to
        life, crafted with precision and passion.
      </p>

      {/* Overlay */}
      <div className="absolute left-1/2 top-50 -translate-x-1/2">
        <div
          class="w-[300px] md:w-[450px] h-[300px] md:h-[400px] rounded-[999px] filter blur-[100px] md:blur-[150px] opacity-40 animate-blob -z-10 scale-x-125
    bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.3)_100%)]"
        ></div>
      </div>
      {/* Container */}
      <section className="mt-14 flex lg:flex-row flex-col justify-center items-center gap-3 px-2">
        {/* Card 1 */}
        <a href="https://marryingmuslims.vercel.app" className="relative flex-1 h-[60vw] min-h-[220px] max-h-[500px] md:h-[80vh] md:min-h-[350px] md:max-h-none rounded-3xl border border-[#ffffff14] overflow-hidden flex flex-col items-center justify-center hover:scale-98 transition-transform duration-300 cusror-pointer">
          {/* Image */}
          <img
            className="object-cover"
            src={project1}
            alt="Image is loading"
          />

          {/* Dark bottom fade for content */}
          <div
            className="absolute inset-0 rounded-3xl 
                  bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent"
          ></div>

          {/* Border fade at bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-24 
                  bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-3xl"
          ></div>
        </a>

        {/* Card 2 */}
        <a href="https://talentlyglobalnetwork.vercel.app" className="relative flex-1 h-[60vw] min-h-[220px] max-h-[500px] md:h-[80vh] md:min-h-[350px] md:max-h-none rounded-3xl border border-[#ffffff14] overflow-hidden flex flex-col items-center justify-center hover:scale-98 transition-transform duration-300 cusror-pointer">
          <img
            className="w-fit object-cover"
            src={project2}
            alt="Image is loading"
          />
          <div
            className="absolute inset-0 rounded-3xl 
                  bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-24 
                  bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-3xl"
          ></div>
        </a>

      </section>
      {/* Cta */}
      <div className="flex justify-end mt-8 px-2">
        <Cta text={"See All"} link={"/projects"} />
      </div>
    </div>
  );
};

export default Work;
