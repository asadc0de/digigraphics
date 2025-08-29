import React from "react";
import TextPressure from "./TextPressure";


const Footer = () => {

  return (
    <div id="contact" className="w-full pt-14 overflow-hidden select-none">
      {/* Text Pressure */}
      <div className="px-4 md:px-10">
        <TextPressure
          text="Rabt Pixel"
          flex={true}
          width={true}
          weight={true}
          italic={true}
          textColor="#555666"
          minFontSize={36}
        />
      </div>
      <footer className="relative bg-gradient-to-t from-white via-blue-900 to-transparent min-h-[300px] px-4 md:px-12 lg:px-20 flex items-end overflow-hidden">
        {/* Links */}
        <div className="flex w-full mb-6 justify-between items-center md:text-2xl text-[1rem] text-[#090909] px-2">
          <a className="hover:opacity-80 duration" href="https://wa.me/+923150676136?text=Hey there! I want to make a website for my: ">WhatsApp</a>
          <a className="hover:opacity-80 duration" href="https://www.linkedin.com/in/asad-code">Linkedin</a>
          <a className="hover:opacity-80 duration" href="https://instagram.com/rabtpixel">Instagram</a>
          <a className="hover:opacity-80 duration" href="https://www.facebook.com/profile.php?id=61579050394139">Facebook</a>
          <a className="hover:opacity-80 duration" href="rabtpixel@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
