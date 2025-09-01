import React from "react";
import { Link } from "react-router-dom";

const Cta = ({ text, link }) => {
  return (
    <>
      {/* CTA */}
      <Link className="mt-8 font-[matter-light]" to={link}>
        <button
          className="text-white rounded-3xl flex items-center gap-2 hover:gap-5 transition-all duration-300  md:text-base text-[16px] max-w-full overflow-hidden cta"
          style={{
            paddingTop: "0.50rem",
            paddingBottom: "0.50rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          {text}
          <span className="transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        </button>
      </Link>
    </>
  );
};

export default Cta;
