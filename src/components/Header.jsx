import { Link, useLocation } from "react-router-dom";
import Image from "../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const menuItems = [
    { name: "About", hash: "about" },
    { name: "Services", hash: "services" },
    { name: "Work", hash: "work" },
    { name: "Contact", hash: "contact" },
  ];

  return (
    <>
      <div className="border-[#ffffff14] border lg:w-[70%] md:w-[80%] w-[95%] max-w-[95vw] mt-5 backdrop-blur-[30px] flex justify-between items-center rounded-4xl md:px-8 px-4 md:py-3 py-[5px] fixed top-0 z-50 left-1/2 transform -translate-x-1/2">
        {/* Image */}
        <div>
          <Link to="/"><img className=" w-7" src={Image} alt="logo" /></Link>
        </div>
        {/* Navbar */}
        <nav>
          {/* Desktop Menu */}
          <ul className="md:flex gap-8 hidden">
            {menuItems.map((item) => (
              <li key={item.name} className="cursor-pointer hover:text-[#dadada] duration-300 px-3">
                {location.pathname === "/" ? (
                  <a href={`#${item.hash}`}>{item.name}</a>
                ) : (
                  <Link to={`/#${item.hash}`}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`menu__icon ${isMenuOpen ? 'active' : ''}`}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0  backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
                     {/* Menu Content */}
           <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-transparent backdrop-blur-xl border border-[#ffffff14] rounded-3xl transition-all duration-300 ease-in-out shadow-2xl">
            <div className="flex flex-col">
              
              {/* Menu Items */}
              <nav className="px-6 py-8">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <li key={item.name}>
                      {location.pathname === "/" ? (
                        <a
                          href={`#${item.hash}`}
                          onClick={toggleMenu}
                          className="text-xl font-[neue] text-white hover:text-[#CDD1D8] transition-all duration-300 block py-3 border-b border-transparent hover:border-[#ffffff14] text-center"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animation: 'slideInRight 0.5s ease-out forwards'
                          }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={`/#${item.hash}`}
                          onClick={toggleMenu}
                          className="text-xl font-[neue] text-white hover:text-[#CDD1D8] transition-all duration-300 block py-3 border-b border-transparent hover:border-[#ffffff14] text-center"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animation: 'slideInRight 0.5s ease-out forwards'
                          }}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
