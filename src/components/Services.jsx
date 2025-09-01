import packeging from "../assets/Packaging.svg";
import Web from "../assets/Web.svg";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full lg:px-28 md:px-22 px-4 overflow-hidden py-14 scroll-m-22 animated-element"
    >
      {/* Text */}
      <div className="text-center mb-16 px-2">
        <h2
          className="lg:text-5xl md:text-3xl text-[2rem] font-bold mb-6 font-[neue] bg-gradient-to-r from-[#343434] via-white to-[#343434] 
  bg-clip-text text-transparent md:leading-14 leading-10"
        >
          Design Solutions That Deliver
        </h2>

        <p className="text-[#CDD1D8] font-[matter-light] md:text-xl text-base max-w-3xl mx-auto leading-relaxed">
          We blend strategy with stunning visuals to create designs that not
          only look amazing but perform exceptionally.
        </p>
      </div>
      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-full mx-auto relative bento-section px-2">
        {/* Row 1 - Narrow Left */}
        <div className="relative rounded-3xl min-h-[280px] overflow-hidden">
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-4 md:p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/20 via-[#0d0d0d]/40 to-[#1a1a1a]/80"
          >
            <h3 className="md:text-xl text-[1.7rem]  mb-3 text-[#CDD1D8]">
              Web Design
            </h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none font-[matter-light]">
              <li>Modern, responsive designs</li>
              <li>User-focused layouts</li>
              <li>Clean, aesthetic visuals</li>
            </ul>
          </div>
        </div>

        {/* Row 1 - Wide Right */}
        <div className="relative md:col-span-2 rounded-3xl min-h-[280px] overflow-hidden">
          {/* Svg */}
          <div className="absolute bottom-3 right-3 opacity-25">
            <img className="w-40 md:w-56" src={packeging} alt="" />
          </div>
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-4 md:p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem]  mb-3 text-[#CDD1D8]">
              Landing Pages
            </h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none font-[matter-light]">
              <li>High-converting page structures</li>
              <li>Optimized for leads & sales</li>
              <li>Fast & mobile-friendly</li>
            </ul>
          </div>
        </div>

        {/* Row 2 - Wide Left */}
        <div className="relative md:col-span-2 rounded-3xl min-h-[280px] overflow-hidden">
          {/* Svg */}
          <div className="absolute bottom-3 right-3 opacity-25">
            <img className="w-40 md:w-56" src={Web} alt="Web Development" />
          </div>
          {/* Gradient border wrapper */}
          <div
            className="absolute inset-0 rounded-3xl p-[1px] 
    bg-gradient-to-t from-transparent via-[#ffffff0a] to-[#ffffff26]"
          ></div>

          {/* Content with gradient bg */}
          <div
            className="relative rounded-3xl p-4 md:p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem]  mb-3 text-[#CDD1D8]">
              Frontend Development
            </h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none font-[matter-light]">
              <li>Pixel-perfect UI implementation</li>
              <li>Interactive animations & effects</li>
              <li>Optimized for speed & SEO</li>
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
            className="relative rounded-3xl p-4 md:p-6 flex flex-col justify-between h-full 
    bg-gradient-to-t from-[#0a0a0a]/0 via-[#0d0d0d]/70 to-[#1a1a1a]/100"
          >
            <h3 className="md:text-xl text-[1.7rem]  mb-3 text-[#CDD1D8]">
              Backend Development
            </h3>
            <ul className="text-gray-400 md:text-sm text-[1rem] space-y-2 list-none font-[matter-light]">
              <li>Secure & scalable APIs</li>
              <li>Database design & management</li>
              <li>Custom business logic</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
