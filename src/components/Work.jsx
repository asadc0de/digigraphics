import React from "react";
import work1 from "../assets/work (1).jpg";
import work2 from "../assets/work (4).jpg";
import work3 from "../assets/work (3).jpg";
import Cta from "./Cta";

const Work = () => {
  return (
    <div className="w-full min-h-screen lg:px-28 md:px-22 px-6 relative mt-8">
      {/* Text */}
      <h2 class="lg:text-5xl md:text-3xl text-[1.7rem] font-bold text-center">
        Some Fancy Selected Work
      </h2>
      <p class="mt-4 text-gray-400 md:text-xl text-base text-center max-w-2xl mx-auto">
        From brands to digital experiences, every project is a story brought to
        life, crafted with precision and passion.
      </p>

      {/* Overlay */}
      <div className="absolute left-1/2 top-25 -translate-x-1/2">
        <div
          class="w-[450px] h-[400px] rounded-[999px] filter blur-[150px] opacity-40 animate-blob -z-10 scale-x-125
    bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.3)_100%)]"
        ></div>
      </div>
      {/* Container */}
      <section className="mt-14 flex lg:flex-row flex-col justify-center items-center gap-3">
        {/* Card 1 */}
        <div className="relative flex-1 md:h-[80vh] h-[50vh] rounded-3xl border border-[#ffffff14] overflow-hidden">
          {/* Image */}
          <img
            className="w-full h-full object-cover"
            src={work3}
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
        </div>

        {/* Card 2 */}
        <div className="relative flex-1 md:h-[80vh] h-[50vh] rounded-3xl border border-[#ffffff14] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={work1}
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
        </div>

        {/* Card 3 */}
        <div className="relative flex-1 md:h-[80vh] h-[50vh] rounded-3xl border border-[#ffffff14] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={work2}
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
        </div>
      </section>
      {/* Cta */}
      <div className="flex justify-end mt-8">
        <Cta text={"See All"} />
      </div>
    </div>
  );
};

export default Work;
