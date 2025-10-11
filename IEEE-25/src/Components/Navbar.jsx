import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // changes color after scrolling 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`  capitalize garamond text-xl sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#002B55]/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-[80%] mx-auto p-2">
        {/* Logo */}
        <a
          href="https://www.linkedin.com/company/ieee-asusb/posts/?feedView=all"
          className="flex items-center"
        >
          <img
            src={Logo}
            className="rounded-full w-[80px] h-[80px]"
            alt="IEEE Logo"
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            ASUSB
          </span>
        </a>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#135491]"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Nav menu */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0  bg-[#002B55]/95 lg:bg-transparent">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about", offset: -100 },
              { name: "Workshops", to: "workshops", offset: -150 },
              { name: "Events", to: "events", offset: -100 },
              { name: "Our team", to: "team", offset: -100 },
              { name: "Contact us", to: "contact", offset: -100 },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={link.offset}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-white cursor-pointer hover:text-[#FFC425] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
