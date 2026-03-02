import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { Link as ScrollLink } from "react-scroll"; // Rename to avoid confusion
import { useNavigate, useLocation, NavLink } from "react-router-dom"; // Add these hooks

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation items
  const navLinks = [
    { name: "Home", to: "home", offset: 0 },
    { name: "About", to: "about", offset: -100 },
    { name: "Workshops", to: "workshops", offset: -150 },
    { name: "Events", to: "events", offset: -100 },
    { name: "Our team", to: "team", offset: -100 },
    { name: "Contact us", to: "contact", offset: -100 },
  ];

  return (
    <nav
      className={`capitalize garamond text-xl sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#002B55]/90 shadow-lg" : "bg-transparent"
      } ${location.pathname.startsWith("/details") ? "hidden" : "visible"}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between w-[80%] mx-auto p-2">
        {/* Logo - Updated to go to "/" */}
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={Logo} className="rounded-full w-[80px] h-[80px]" alt="IEEE Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ml-2">
            ASUSB
          </span>
        </button>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white/10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Nav menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}>
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 bg-[#002B55]/95 lg:bg-transparent">
            {navLinks.map((link, i) => (
              <li key={i}>
                {isHomePage ? (
                  /* If on Home Page: Use Scroll Link */
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={link.offset}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-3 text-white cursor-pointer hover:text-[#FFC425] transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  /* If on Join Us/Other Page: Use Router NavLink */
                  <NavLink
                    to={`/`}
                    onClick={() => {
                      setIsOpen(false);
                      // This ensures that when we go home, we can still scroll to the section
                      setTimeout(() => {
                        const element = document.getElementById(link.to);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="block py-2 px-3 text-white cursor-pointer hover:text-[#FFC425] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;