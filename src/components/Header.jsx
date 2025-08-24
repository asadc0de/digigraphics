import { BiMenu } from "react-icons/bi";
import Image from "../assets/logo.png";

const Header = () => {
  return (
    <div className="border-[#ffffff14] border lg:w-[70%] md:w-[80%] w-[95%] max-w-[95vw] mt-5 backdrop-blur-[30px] flex justify-between items-center rounded-4xl md:px-8 px-4 py-2 fixed top-0 z-50 left-1/2 transform -translate-x-1/2">
      {/* Image */}
      <div>
        <img className="lg:w-14 md:w-10 w-7" src={Image} alt="logo" />
      </div>
      {/* Navbar */}
      <nav>
          {/* Icon */}
          <div className="md:hidden">
            <BiMenu />
          </div>
        <ul className="md:flex gap-8 hidden ">
          <li className="cursor-pointer hover:text-[#dadada] duration-300 px-3">
            About
          </li>
          <li className="cursor-pointer hover:text-[#dadada] duration-300 px-3">
            Work
          </li>
          <li className="cursor-pointer hover:text-[#dadada] duration-300 px-3">
            Services
          </li>
          <li className="cursor-pointer hover:text-[#dadada]">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
