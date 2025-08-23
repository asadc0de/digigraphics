import packeging from "../assets/Packaging.svg";
import Web from "../assets/Web.svg";
import blackHole from "../assets/black hole.webm";

export default function Services() {
  return (
    <section className="w-full px-6 py-20">
      {/* Text */}
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl md:text-3xl text-[1.7rem] font-bold text-white mb-6">
          Design Solutions That Deliver
        </h2>

        <p className="text-gray-300 md:text-xl text-base max-w-3xl mx-auto leading-relaxed">
          We blend strategy with stunning visuals to create designs that not
          only look amazing but perform exceptionally.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto relative bento-section">
        {/* Row 1 - Narrow Left */}
        <div className="relative rounded-3xl min-h-[280px] overflow-hidden">
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/20 via-[#0d0d0d]/40 to-[#1a1a1a]/80"
          >
            <h3 className="md:text-xl text-[1.7rem] font-semibold mb-3">Flyer Design</h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none list-inside">
              <li>Eye-catching layouts that grab attention</li>
              <li>Clear messaging with bold visuals</li>
              <li>Print-ready files for events & promotions</li>
            </ul>
          </div>
        </div>

        {/* Row 1 - Wide Right */}
        <div className="relative md:col-span-2 rounded-3xl min-h-[280px] overflow-hidden">
          {/* Svg */}
          <div className="absolute bottom-3 right-3 opacity-25">
            <img className="w-56" src={packeging} alt="" />
          </div>
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
                  bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-6 flex flex-col justify-between h-full 
                  bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem] font-semibold mb-3">Logo Design</h3>
            {/* <FaPalette className="text-6xl text-pink-400 mb-4" /> */}
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none list-inside">
              <li>Unique & timeless logo marks</li>
              <li>Scalable vector designs</li>
              <li>Brand-focused creativity</li>
            </ul>
          </div>
        </div>

        {/* Row 2 - Wide Left */}
        <div className="relative md:col-span-2 rounded-3xl min-h-[280px] overflow-hidden">
          {/* Svg */}
          <div className="absolute bottom-3 right-3 opacity-25">
            <img className="w-56" src={Web} alt="Poster Design" />
          </div>

          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem] font-semibold mb-3">Poster Design</h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none list-inside">
              <li>Bold visuals that grab attention instantly</li>
              <li>Creative layouts for events, ads & campaigns</li>
              <li>High-resolution, print-ready designs</li>
            </ul>
          </div>
        </div>

        {/* Row 2 - Narrow Right */}
        <div className="relative rounded-3xl min-h-[280px] overflow-hidden">
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
                  bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-6 flex flex-col justify-between h-full 
                  bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem] font-semibold mb-3">Packaging</h3>
            {/* <MdOutlineBrush className="text-6xl text-red-400 mb-4" /> */}
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none list-inside">
              <li>Eye-catching package design</li>
              <li>Print-ready files</li>
              <li>Strong shelf appeal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
