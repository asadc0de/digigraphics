import React from "react";
import TextPressure from "./TextPressure";


const Footer = () => {

  return (
    <div className="w-full pt-14 overflow-hidden">
      {/* Text Pressure */}
      <div className="px-4 md:px-10 border-t border-[#ffffff14]">
        <TextPressure
          text="Asad Graphics"
          flex={true}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          minFontSize={36}
        />
      </div>
      <footer className="relative bg-gradient-to-t from-white via-blue-900 to-transparent min-h-[300px] px-4 md:px-12 lg:px-20 flex items-end overflow-hidden">
        {/* Links */}
        <div className="flex w-full mb-6 justify-between items-center md:text-2xl text-[1rem] text-[#090909] font-semibold px-2">
          <a className="hover:opacity-80 duration" href="">WhatsApp</a>
          <a className="hover:opacity-80 duration" href="">Instagram</a>
          <a className="hover:opacity-80 duration" href="">Facebook</a>
          <a className="hover:opacity-80 duration" href="">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
