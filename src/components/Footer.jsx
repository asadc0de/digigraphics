import React from "react";
import TextPressure from "./TextPressure";


const Footer = () => {

  return (
    <div className="w-full mt-22">
      {/* Text Pressure */}
      <div className="px-10">
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
      <footer className="relative bg-gradient-to-t from-white via-blue-900 to-transparent min-h-[300px] px-6 md:px-12 lg:px-20 flex items-end">
        {/* Links */}
        <div className="flex w-full mb-6 justify-between items-center md:text-2xl text-[1rem] text-black">
          <a href="">WhatsApp</a>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
